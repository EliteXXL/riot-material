import whatInput from "what-input";

const RIPPLE: unique symbol = Symbol("ripple");
const RIPPLE_COUNT: unique symbol = Symbol("ripple-count");
const RIPPLE_OPTIONS: unique symbol = Symbol("ripple_options");

declare global {
    // tslint:disable-next-line:interface-name
    interface HTMLElement {
        [RIPPLE]?: IRipple;
    }
}

interface IRippleOptions {
    radius?: number;
    centered?: boolean;
    unbounded?: boolean;
    disabled?: boolean;
    highlight?: boolean;
    instantHighlight?: boolean;
    unboundedFocus?: boolean;
    focusTarget?: HTMLElement;
    color?: string;
    detectLabel?: boolean;
    usePointerFocus?: boolean;
    stopRippling?: boolean;
}

interface IRipple {
    highlight(): Ripple;
    start(x: number | null, y: number | null, event?: PointerEvent | FocusEvent, type?: Ripple.TYPE): Ripple;
    set(options: IRippleOptions): IRipple;
    getOption(option: string): any;
    [RIPPLE_OPTIONS]: IRippleOptions;
    [RIPPLE_COUNT]: number;
}

document.head.appendChild(document.createElement("style")).innerHTML = `
.rm-ripple-container { overflow: hidden; position: relative; }
.rm-ripple-container--unbounded { overflow: visible; }
.rm-ripple-container--highlighto.rm-ripple-container--highlighted:not([disabled])::after,
.rm-ripple-container--highlighto:not([disabled]):hover::after {
    content: ''; position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: black; background: var(--ripple-color, black); pointer-events: none;
    border-radius: inherit; opacity: .1;
}
.rm-ripple {
    position: absolute; border-radius: 50%; background: black; background: var(--ripple-color, black); pointer-events: none;
    /*transition: opacity cubic-bezier(.22,.61,.36,1) 450ms, transform cubic-bezier(.22,.61,.36,1) 400ms;*/
    transition: opacity cubic-bezier(0.4,0,0.2,1) 450ms, transform cubic-bezier(0.4,0,0.2,1) 450ms;
}`;

let scaleUpStyle: string;
{
    let div: HTMLDivElement = document.createElement("div");
    div.style.transform = "scale(1)";
    document.body.appendChild(div);
    scaleUpStyle = window.getComputedStyle(div).transform;
    document.body.removeChild(div);
}

export class Ripple {
    private _div: HTMLDivElement;
    private _computedStyle: CSSStyleDeclaration;
    private _ended: boolean = false;
    private _onEnd: (() => void) | null = null;

    constructor(x: number, y: number, r: number | null, type: Ripple.TYPE = Ripple.TYPE.NORMAL) {
        let div: HTMLDivElement = this._div = document.createElement("div");
        if (r == null) {
            div.setAttribute(
                "style",
                "left:0;top:0;bottom:0;right:0;" +
                "border-radius:inherit;transform:scale(0);" +
                "opacity:.12;opacity:var(--color-opacity-tertiary, .12);"
            );
        } else {
            let cx: number = x - r;
            let cy: number = y - r;
            div.setAttribute(
                "style",
                "left:" + cx +
                "px;top:" + cy +
                "px;width:" + (r * 2) +
                "px;height:" + (r * 2) +
                "px;transform:scale(0);opacity:.12;opacity:var(--color-opacity-tertiary, .12);"
            );
        }
        switch (type) {
            case Ripple.TYPE.QUICK: {
                div.style.transitionDuration = "175ms";
                break;
            }
            case Ripple.TYPE.INSTANT: {
                div.style.transitionDuration = "0ms";
            }
        }
        div.classList.add("rm-ripple");
        this._computedStyle = window.getComputedStyle(div);
    }

    private _frame(): void {
        let element: HTMLElement | null = this._div.parentElement;
        if (!element) {
            return;
        }
        let rect: DOMRect = this._div.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) {
            element.removeChild(this._div);
            return;
        }
        if (this._computedStyle.transform === scaleUpStyle) {
            if (this._computedStyle.opacity === "0") {
                element.removeChild(this._div);
                return;
            } else {
                if (this._ended) {
                    this._div.style.opacity = "0";
                }
            }
        }
        requestAnimationFrame(this._frame.bind(this));
    }
    private _scaleUp(): void {
        requestAnimationFrame(() => {
            this._div.style.transform = "scale(1)";
            requestAnimationFrame(this._frame.bind(this));
        });
    }

    attachTo(element: HTMLElement, onEnd?: () => void): Ripple {
        if (this._div.parentElement) {
            throw new Error("Ripple already attached");
        }
        if (this._ended) {
            throw new Error("Ripple already ended");
        }
        if (element.firstElementChild != null) {
            element.insertBefore(this._div, element.firstElementChild);
        } else {
            element.appendChild(this._div);
        }
        this._scaleUp();
        this._onEnd = onEnd || null;
        return this;
    }

    end(): Ripple {
        this._ended = true;
        if (this._onEnd) {
            this._onEnd();
        }
        return this;
    }
}
export namespace Ripple {
    export enum TYPE {
        NORMAL  = 0,
        QUICK   = 1,
        INSTANT = 2
    }
}

let canEventStartRipple: boolean = true;
window.addEventListener("pointerdown", () => { canEventStartRipple = true; });
export function ripple(element: HTMLElement, options?: IRippleOptions): IRipple {
    // get the ripple generator stored in the element
    let ripple: IRipple | undefined = element[RIPPLE];
    if (options == null && ripple != null) {
        return ripple;
    }
    options = {
        radius: undefined,
        unbounded: false,
        centered: false,
        disabled: false,
        highlight: false,
        instantHighlight: false,
        unboundedFocus: false,
        color: "currentColor",
        focusTarget: undefined,
        detectLabel: true,
        usePointerFocus: false,
        stopRippling: false,
        ...options
    };
    if (options.detectLabel != null && !options.detectLabel) {
        options.usePointerFocus = false;
    } else {
        options.detectLabel = true;
    }
    // if already exists, set the new options
    if (ripple) {
        return ripple.set(options);
    }
    let lastX: number | null = null;
    let lastY: number | null = null;
    let pointerElement: HTMLElement = element;

    let lastFocusTarget: HTMLElement | undefined = undefined;
    let onFocus: (event: FocusEvent) => void = event => {
        if (whatInput.ask() !== "keyboard" && !ripple![RIPPLE_OPTIONS].usePointerFocus) {
            return;
        }
        ripple!.start(null, null, event);
    };

    let onMouseEnter: (event: MouseEvent) => void = event => {
        if (!ripple![RIPPLE_OPTIONS].highlight || ripple![RIPPLE_OPTIONS].disabled) {
            return;
        }

        ripple!.start(null, null, event);
    };

    ripple = {
        highlight(): Ripple {
            const currentRipple: Ripple = new Ripple(0, 0, null, Ripple.TYPE.INSTANT).attachTo(element, () => {
                this[RIPPLE_COUNT]--;
            });
            this[RIPPLE_COUNT]++;
            return currentRipple;
        },
        start(x: number | null, y: number | null, event?: PointerEvent | FocusEvent, type: Ripple.TYPE = Ripple.TYPE.NORMAL): Ripple {
            let isFocus: boolean = !!(event && event.type === "focus");
            let isMouseEnter: boolean = !!(event && event.type === "mouseenter");
            let options: IRippleOptions = this[RIPPLE_OPTIONS];
            if (isFocus) {
                type = options.instantHighlight ? Ripple.TYPE.INSTANT : Ripple.TYPE.QUICK;
            } else if (isMouseEnter) {
                type = this[RIPPLE_COUNT] > 0 || options.instantHighlight ? Ripple.TYPE.INSTANT : Ripple.TYPE.QUICK;
            }

            let r: number | null = null;
            let rect: DOMRect | null = null;
            if (options.centered || x == null) {
                x = (rect || element.getBoundingClientRect()).width / 2;
            }
            if (options.centered || y == null) {
                y = (rect || element.getBoundingClientRect()).height / 2;
            }

            if (!(isFocus || isMouseEnter) || options.unboundedFocus) {
                r = options.radius || null;
                if (r == null || r <= 0) {
                    rect = rect || element.getBoundingClientRect();
                    if (y >= rect.height / 2) {
                        if (x >= rect.width / 2) {
                            r = Math.sqrt(x * x + y * y);
                        } else {
                            r = Math.sqrt(Math.pow(rect.width - x, 2) + y * y);
                        }
                    } else {
                        if (x >= rect.width / 2) {
                            r = Math.sqrt(x *x + Math.pow(rect.height - y, 2));
                        } else {
                            r = Math.sqrt(Math.pow(rect.width - x, 2) + Math.pow(rect.height - y, 2));
                        }
                    }
                }
            }

            let currentRipple: Ripple = new Ripple(x, y, r, type).attachTo(element, () => {
                this[RIPPLE_COUNT]--;
            });
            this[RIPPLE_COUNT]++;
            if (event  && event.isTrusted) {
                let once: (event: PointerEvent | FocusEvent) => void = (up_event: PointerEvent | FocusEvent) => {
                    if (isFocus) {
                        (lastFocusTarget || element).removeEventListener("blur", once);
                    } else if (isMouseEnter) {
                        pointerElement.removeEventListener("mouseleave", once);
                    } else {
                        window.removeEventListener("pointerup", once);
                        window.removeEventListener("pointercancel", once);
                        if ((up_event as PointerEvent).pointerId !== (event as PointerEvent).pointerId) {
                            return;
                        }
                    }
                    currentRipple.end();
                };
                if (isFocus) {
                    (lastFocusTarget || element).addEventListener("blur", once);
                } else if (isMouseEnter) {
                    pointerElement.addEventListener("mouseleave", once);
                } else {
                    window.addEventListener("pointerup", once);
                    window.addEventListener("pointercancel", once);
                }
            }

            return currentRipple;
        },
        /**
         * Cambia le impostazioni al creatore di increspature
         * @param options
         */
        set(options: IRippleOptions): IRipple {
            const prevOptions: IRippleOptions = this[RIPPLE_OPTIONS];
            options = this[RIPPLE_OPTIONS] = {
                ...prevOptions,
                ...options,
                detectLabel: prevOptions.detectLabel
            };
            if (options.detectLabel != null && !options.detectLabel) {
                options.usePointerFocus = false;
            } else {
                options.detectLabel = true;
            }
            if (options.unbounded) {
                element.classList.add("rm-ripple-container--unbounded");
            } else {
                element.classList.remove("rm-ripple-container--unbounded");
            }
            if (options.highlight) {
                element.classList.add("rm-ripple-container--highlight");
            } else {
                element.classList.remove("rm-ripple-container--highlight");
            }
            if (options.color) {
                element.style.setProperty("--ripple-color", options.color);
            } else {
                element.style.setProperty("--ripple-color", "black");
            }
            if (options.focusTarget !== lastFocusTarget) {
                if (lastFocusTarget) {
                    lastFocusTarget.removeEventListener("focus", onFocus);
                    lastFocusTarget = undefined;
                } else {
                    element.removeEventListener("focus", onFocus);
                }
                if (options.focusTarget) {
                    lastFocusTarget = options.focusTarget;
                    lastFocusTarget.addEventListener("focus", onFocus);
                } else {
                    element.addEventListener("focus", onFocus);
                }
            } else {
                element.removeEventListener("focus", onFocus);
                element.addEventListener("focus", onFocus);
            }
            pointerElement.removeEventListener("mouseenter", onMouseEnter);
            pointerElement.addEventListener("mouseenter", onMouseEnter);
            return this;
        },
        getOption(option: string): any {
            return this[RIPPLE_OPTIONS][option];
        },
        [RIPPLE_OPTIONS]: options,
        [RIPPLE_COUNT]: 0
    };
    if (options.detectLabel) {
        let parent: HTMLElement | null = element.parentElement;
        while (parent) {
            if (parent.tagName === "LABEL") {
                pointerElement = parent;
                break;
            }
            parent = parent.parentElement;
        }
    }
    pointerElement.addEventListener("pointerdown", event => {
        if (!canEventStartRipple || ripple![RIPPLE_OPTIONS].disabled) {
            return;
        }
        let rect: DOMRect = element.getBoundingClientRect();
        ripple!.start(lastX = (event as MouseEvent).clientX - rect.x, lastY = (event as MouseEvent).clientY - rect.y, event);
        if (ripple![RIPPLE_OPTIONS].stopRippling) {
            canEventStartRipple = false;
        }
        setTimeout(() => {
            lastX = lastY = null;
        }, 0);
    });
    element[RIPPLE] = ripple;
    element.classList.add("rm-ripple-container");
    ripple.set(options);
    return ripple;
}

export function isRipple(element: HTMLElement): boolean {
    return element[RIPPLE] != null;
}
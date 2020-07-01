const RIPPLE: unique symbol = Symbol("ripple");
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
    unboundedFocus?: boolean;
    focusTarget?: HTMLElement;
    color?: string;
    usePointerFocus?: boolean;
    stopRippling?: boolean;
}

interface IRipple {
    start(x: number, y: number, event?: PointerEvent | FocusEvent): IRipple;
    set(options: IRippleOptions): IRipple;
    [RIPPLE_OPTIONS]: IRippleOptions;
}

document.head.appendChild(document.createElement("style")).innerHTML = `
.rm-ripple-container { overflow: hidden; position: relative; }
.rm-ripple-container--unbounded { overflow: visible; }
.rm-ripple-container--highlight:not([disabled]):hover::after {
    content: ''; position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: black; background: var(--ripple-color, black); pointer-events: none;
    border-radius: inherit; opacity: .1;
}
.rm-ripple {
    position: absolute; border-radius: 50%; background: black; background: var(--ripple-color, black); pointer-events: none;
    transition: opacity cubic-bezier(.22,.61,.36,1) 450ms, transform cubic-bezier(.22,.61,.36,1) 400ms;
}`;

// the following listeners are needed to determine if the focus
// on an element was given by the keyboard or a pointer
enum DEVICE {
    KEYBOARD = 0,
    POINTER = 1
}
let canBeDevice: DEVICE = DEVICE.KEYBOARD;
function canBePointer(): void {
    canBeDevice = DEVICE.POINTER;
    setTimeout(() => {
        canBeDevice = DEVICE.KEYBOARD;
    }, 0);
}
window.addEventListener("mousedown", canBePointer, true);
window.addEventListener("mouseup", canBePointer, true);
window.addEventListener("touchstart", canBePointer, true);
window.addEventListener("touchend", canBePointer, true);
window.addEventListener("touchcancel", canBePointer, true);

let scaleUpStyle: string;
{
    let div: HTMLDivElement = document.createElement("div");
    div.style.transform = "scale(1)";
    document.body.appendChild(div);
    scaleUpStyle = window.getComputedStyle(div).transform;
    document.body.removeChild(div);
}

let canEventStartRipple: boolean = true;
window.addEventListener("pointerdown", () => { canEventStartRipple = true; });
export function ripple(element: HTMLElement, options?: IRippleOptions): IRipple {
    options = {
        radius: undefined,
        unbounded: false,
        centered: false,
        disabled: false,
        highlight: false,
        unboundedFocus: false,
        color: "currentColor",
        focusTarget: undefined,
        usePointerFocus: false,
        stopRippling: false,
        ...options
    };
    // get the ripple generator stored in the element
    let ripple: IRipple | undefined = element[RIPPLE];
    // if already exists, set the new options
    if (ripple) {
        return ripple.set(options);
    }
    let lastFocusTarget: HTMLElement | undefined = undefined;
    let onFocus: (event: FocusEvent) => void = event => {
        if (canBeDevice === DEVICE.POINTER && !ripple![RIPPLE_OPTIONS].usePointerFocus) {
            return;
        }
        // tslint:disable-next-line: no-use-before-declare
        ripple!.start(lastX!, lastY!, event);
    };
    ripple = {
        start(x: number, y: number, event?: PointerEvent | FocusEvent): IRipple {
            let isFocus: boolean = !!(event && event.type === "focus");
            let options: IRippleOptions = this[RIPPLE_OPTIONS];
            let rect: DOMRect = element.getBoundingClientRect();
            if (options.centered || x == null) {
                x = rect.width / 2;
            }
            if (options.centered || y == null) {
                y = rect.height / 2;
            }
            let r: number | undefined  = options.radius;
            if (!r || r <= 0) {
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
            let cx: number = x - r;
            let cy: number = y - r;
            let div: HTMLDivElement = document.createElement("div");
            if (isFocus && !options.unboundedFocus) {
                div.setAttribute(
                    "style",
                    "left:0;top:0;bottom:0;right:0;border-radius:inherit;opacity:.12;opacity:var(--color-opacity-tertiary, .12);"
                );
            } else {
                div.setAttribute(
                    "style",
                    "left:" + cx +
                    "px;top:" + cy +
                    "px;width:" + (r * 2) +
                    "px;height:" + (r * 2) +
                    "px;transform:scale(0);opacity:.12;opacity:var(--color-opacity-tertiary, .12);"
                );
            }
            div.classList.add("rm-ripple");
            element.appendChild(div);
            let count: number = 2;
            let style: CSSStyleDeclaration = window.getComputedStyle(div);
            let deactivated: boolean = false;
            let stepAnimation: () => void = () => {
                if (!div.parentElement) {
                    return;
                }
                let rect: DOMRect = div.getBoundingClientRect();
                if (rect.width === 0 && rect.height === 0) {
                    element.removeChild(div);
                    return;
                }
                if (style.transform === scaleUpStyle) {
                    if (style.opacity === "0") {
                        element.removeChild(div);
                        return;
                    } else {
                        if (deactivated) {
                            div.style.opacity = "0";
                        }
                    }
                }
                requestAnimationFrame(stepAnimation);
            };
            let end: () => void = () => {
                deactivated = true;
            };
            let scaleUp: () => void = () => {
                div.style.transform = "scale(1)";
                requestAnimationFrame(stepAnimation);
            };
            if (event && event.isTrusted) {
                if (isFocus) {
                    scaleUp();
                    count--;
                } else {
                    requestAnimationFrame(() => { requestAnimationFrame(scaleUp); });
                }
                let once: (event: PointerEvent | FocusEvent) => void = (up_event: PointerEvent | FocusEvent) => {
                    if (isFocus) {
                        (lastFocusTarget || element).removeEventListener("blur", once);
                    } else {
                        window.removeEventListener("pointerup", once);
                        window.removeEventListener("pointercancel", once);
                        if ((up_event as PointerEvent).pointerId !== (event as PointerEvent).pointerId) {
                            return;
                        }
                    }
                    end();
                };
                if (isFocus) {
                    (lastFocusTarget || element).addEventListener("blur", once);
                } else {
                    window.addEventListener("pointerup", once);
                    window.addEventListener("pointercancel", once);
                }
            } else {
                end();
                requestAnimationFrame(() => { requestAnimationFrame(scaleUp); });
            }
            return this;
        },
        /**
         * Cambia le impostazioni al creatore di increspature
         * @param options
         */
        set(options: IRippleOptions): IRipple {
            options = this[RIPPLE_OPTIONS] = { ...this[RIPPLE_OPTIONS], ...options };
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
            return this;
        },
        [RIPPLE_OPTIONS]: options
    };
    let lastX: number | null = null;
    let lastY: number | null = null;
    let pointerElement: HTMLElement = element;
    let parent: HTMLElement | null = element.parentElement;
    while (parent) {
        if (parent.tagName === "LABEL") {
            pointerElement = parent;
            break;
        }
        parent = parent.parentElement;
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
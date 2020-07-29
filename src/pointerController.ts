const POINTER_CONTROLLER: unique symbol = Symbol("pointer-controller");

interface IPointerController {
    ontouchstart: (event: TouchEvent) => void;
    ontouchmove: (event: TouchEvent) => void;
    ontouchend: (event: TouchEvent) => void;
    ontouchcancel: (event: TouchEvent) => void;
    onmousedown: (event: MouseEvent) => void;
    callback: ((event: TouchEvent | MouseEvent) => void) | null;
}

export function pointerController(element: HTMLElement, callback: ((event: TouchEvent | MouseEvent) => void) | null): void {
    let instance: IPointerController = element[POINTER_CONTROLLER];
    if (instance) {
        instance.callback = callback;
        return;
    }
    let touchShouldFire: boolean;
    let lastTouch: number | null = null;
    window.addEventListener("touchstart", event => {
        if (lastTouch == null || event.changedTouches[0].identifier === lastTouch) {
            return;
        }
        touchShouldFire = false;
    });
    let eventHandled: boolean = false;
    element[POINTER_CONTROLLER] = instance = {
        ontouchstart(event: TouchEvent): void {
            if (!instance.callback || lastTouch != null) {
                return;
            }
            lastTouch = event.changedTouches[0].identifier;
            touchShouldFire = true;
        },
        ontouchmove(event: TouchEvent): void {
            touchShouldFire = false;
        },
        ontouchend(event: TouchEvent): void {
            lastTouch = null;
            eventHandled = true;
            setTimeout(() => eventHandled = false, 200);
            if (!touchShouldFire || !instance.callback) {
                return;
            }
            instance.callback.call(this, event);
        },
        ontouchcancel(event: TouchEvent): void {
            lastTouch = null;
            eventHandled = true;
            setTimeout(() => eventHandled = false, 200);
        },
        onmousedown(event: MouseEvent): void {
            if (!instance.callback || eventHandled) {
                return;
            }
            instance.callback.call(this, event);
        },
        callback
    };
    element.addEventListener("touchstart", instance.ontouchstart);
    element.addEventListener("touchmove", instance.ontouchmove);
    element.addEventListener("touchend", instance.ontouchend);
    element.addEventListener("touchcancel", instance.ontouchcancel);
    element.addEventListener("mousedown", instance.onmousedown);
}
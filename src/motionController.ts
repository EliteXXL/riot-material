const MOTION_CONTROLLER: unique symbol = Symbol("motion-controller");

interface IMotionController {
    getMotion(): number;
    getSelectedIndex(): number;
    setSelectedIndex(index: number): IMotionController;
    getLength(): number;
    setLength(length: number): IMotionController;
    on(type: string, callback: (event: any) => void): IMotionController;
    off(type: string, callback: (event: any) => void): IMotionController;
}

export function motionController(element: HTMLElement): IMotionController {
    const existingMotionController: IMotionController | null = element[MOTION_CONTROLLER];
    if (existingMotionController != null) {
        return existingMotionController;
    }
    let self: IMotionController;
    let eventTarget: EventTarget = new EventTarget();
    let length: number = 0;
    const getLength: () => number = () => {
        return length;
    };
    const setLength: (length: number) => IMotionController = l => {
        length = l;
        return self;
    };
    let index: number = 0;
    const getSelectedIndex: () => number = () => {
        return index;
    };
    const setSelectedIndex: (index: number) => IMotionController = i => {
        if (i < 0) {
            i = 0;
        }
        if (i >= length) {
            i = length - 1;
        }
        index = i;
        return self;
    };
    let motion: number = 0;
    const getMotion: () => number = () => {
        let m: number = parseFloat(motion as any);
        if (isNaN(m)) {
            return 0;
        }
        m = Math.max(Math.min(1, m), -1);
        const index:number = getSelectedIndex();
        if (index === 0 && m < 0 || index === getLength() - 1 && m > 0) {
            return 0;
        }
        return m;
    };
    let _touchIdentifier: number | null = null;
    const startMotion: (event: TouchEvent) => void = event => {
        if (_touchIdentifier != null) {
            return;
        }
        const touch: Touch = event.targetTouches[0];
        const identifier: number = _touchIdentifier = touch.identifier;
        const startX: number = touch.clientX;
        let lastDirection: number | null = null;
        const updateMotion: (event: TouchEvent) => void = event => {
            let index: number;
            if (!Array.from(event.changedTouches).some((touch, i) => {
                index = i;
                return touch.identifier === identifier;
            })) {
                return;
            }
            const lastMotion: number = getMotion();
            const touch: Touch = event.changedTouches[index!];
            const endX: number = touch.clientX;
            const delta: number = endX - startX;
            motion = -delta / element.getBoundingClientRect().width;
            const newMotion: number = getMotion();
            if (newMotion !== lastMotion) {
                lastDirection = newMotion > lastMotion ? 1 : -1;
            }
            eventTarget.dispatchEvent(new CustomEvent("motionchanged", { detail: { motion: newMotion } }));
        };
        const endMotion: (event: TouchEvent) => void = event => {
            if (!Array.from(event.changedTouches).some(touch => {
                return touch.identifier === identifier;
            })) {
                return;
            }
            if (lastDirection != null) {
                const m: number = getMotion();
                motion = 0;
                let newM: number;
                if (m < 0) {
                    newM = lastDirection < 0 ? -1 : 0;
                } else {
                    newM = lastDirection > 0 ? 1 : 0;
                }
                lastDirection = null;
                const roundedMotion: number = Math.round(newM);
                const previousIndex: number = getSelectedIndex();
                if (roundedMotion !== 0) {
                    setSelectedIndex(previousIndex + roundedMotion);
                }
                eventTarget.dispatchEvent(new CustomEvent("motionapplied", { detail: {
                    previousIndex, currentIndex: getSelectedIndex()
                } }));
            }
            _touchIdentifier = null;
            element.removeEventListener("touchend", endMotion);
            element.removeEventListener("touchcancel", endMotion);
            element.removeEventListener("touchmove", updateMotion);
        };
        element.addEventListener("touchend", endMotion);
        element.addEventListener("touchcancel", endMotion);
        element.addEventListener("touchmove", updateMotion);
    };
    element.addEventListener("touchstart", startMotion);
    return element[MOTION_CONTROLLER] = self = {
        getMotion,
        getSelectedIndex,
        setSelectedIndex,
        getLength,
        setLength,
        on(type: string, callback: (event: any) => void): IMotionController {
            eventTarget.addEventListener(type, callback);
            return self;
        },
        off(type: string, callback: (event: any) => void): IMotionController {
            eventTarget.removeEventListener(type, callback);
            return self;
        }
    };
}
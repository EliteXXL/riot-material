/* as `enum STATE` for TS */
var STATE;
(function (STATE) {
    STATE[STATE["DISMISSED"] = 1] = "DISMISSED";
    STATE[STATE["OPENED"] = 2] = "OPENED";
    STATE[STATE["FULL_OPENED"] = 4] = "FULL_OPENED";
    STATE[STATE["DISMISSING"] = 8] = "DISMISSING";
    STATE[STATE["OPENING"] = 16] = "OPENING";
    STATE[STATE["SCROLLING"] = 32] = "SCROLLING";
    STATE[STATE["MOVING"] = 64] = "MOVING";
})(STATE || (STATE = {}));
const CONTENT_STYLE = Symbol("content-style");

var rmBottomSheet = {
  'css': `rm-bottom-sheet,[is="rm-bottom-sheet"]{ display: contents; } rm-bottom-sheet [ref="dimmer"],[is="rm-bottom-sheet"] [ref="dimmer"]{ content: ""; position: fixed; top: 0; bottom: 0; left: 0; right: 0; background: rgba(0, 0, 0, .42); background: rgba(0, 0, 0, var(--color-opacity-secondary, .42)); touch-action: none; z-index: 100; } rm-bottom-sheet [ref="content"],[is="rm-bottom-sheet"] [ref="content"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); position: fixed; overflow: hidden; height: 0; bottom: 0; right: 0; left: 0; touch-action: none; z-index: 100; }`,

  'exports': {
    onMounted() {
        let content = this.root.querySelector("[ref=content]");
        let computedStyle = this[CONTENT_STYLE] = window.getComputedStyle(content);
        this.state.view = STATE.DISMISSED;
        this.root.style.display = "none";
        let dimmer = this.root.querySelector("[ref=dimmer]");
        let move = (movementX, movementY, scrollOnly) => {
            let actualHeight = parseInt(computedStyle.height);
            let windowHeight = window.innerHeight;
            scrollOnly = scrollOnly && actualHeight === windowHeight;
            let computedHeight = actualHeight + content.scrollTop - movementY;
            let height = Math.min(
                windowHeight,
                computedHeight
            );
            content.style.height = (scrollOnly? windowHeight: height) + "px";
            if (!scrollOnly && height < windowHeight) {
                content.scrollTop = 0;
                this.state.view &= ~STATE.FULL_OPENED;
            } else {
                content.scrollTop = computedHeight - windowHeight;
                this.state.view |= STATE.FULL_OPENED;
            }
        };
        let lastPosition = null;
        let firstPosition = null;
        let pointerId = undefined;
        let requestStopScroll = false;
        let shouldScrollOnly = false;
        this.root.addEventListener("pointerdown", event => {
            if ((this.state.view & STATE.MOVING) || event.button > 1) {
                return;
            }
            let contentRect = content.getBoundingClientRect();
            event.preventDefault();
            pointerId = event.pointerId;
            lastPosition = { x: event.clientX, y: event.clientY };
            firstPosition = { x: event.clientX, y: event.clientY, time: event.timeStamp };
            this.state.view &= ~STATE.MOVING;
            shouldScrollOnly = (this.state.view & STATE.FULL_OPENED) && content.scrollTop > 0;
            if (this.state.view & STATE.SCROLLING) {
                requestStopScroll = true;
            }
        });
        let movementThresold = 5;
        window.addEventListener("pointermove", event => {
            if (!lastPosition || event.pointerId !== pointerId) {
                return;
            }
            event.preventDefault();
            let thisPosition = { x: event.clientX, y: event.clientY };
            let movementX = thisPosition.x - lastPosition.x;
            let movementY = thisPosition.y - lastPosition.y;
            if (
                !(this.state.view & STATE.MOVING) &&
                Math.abs(movementX) < movementThresold &&
                Math.abs(movementY) < movementThresold
            ) {
                return;
            }
            this.state.view |= STATE.MOVING;
            lastPosition = thisPosition;
            let prevFullOpen = this.state.view & STATE.FULL_OPENED;
            move(movementX, movementY, shouldScrollOnly);
            if (prevFullOpen !== this.state.view & STATE.FULL_OPENED) {
                firstPosition = { ...thisPosition, time: event.timeStamp };
            }
        });
        let onUp = event => {
            if (pointerId == null || pointerId !== event.pointerId) {
                return;
            }
            let lastDeltaTime = event.timeStamp - firstPosition.time;
            let lastDeltaY = event.clientY - firstPosition.y;
            lastPosition = null;
            firstPosition = null;
            pointerId = null;
            this.state.view &= ~STATE.MOVING;
            if (lastDeltaTime >= 50 && Math.abs(lastDeltaY) >= 10) {
                let vel = lastDeltaY / lastDeltaTime;
                if (this.state.view & STATE.FULL_OPENED) {
                    let last = Date.now();
                    let frame = () => {
                        if (requestStopScroll) {
                            requestStopScroll = false;
                            this.state.view &= ~STATE.SCROLLING;
                            return;
                        }
                        this.state.view |= STATE.SCROLLING;
                        let now = Date.now();
                        content.scrollTop -= (vel *= 0.95) * (now - last);
                        last = now;
                        if (content.scrollTop > 0 && Math.abs(vel) > .05) {
                            requestAnimationFrame(frame);
                        } else {
                            this.state.view &= ~STATE.SCROLLING;
                        }
                    };
                    requestAnimationFrame(frame);
                } else {
                    if (vel > 0) {
                        this.dismiss();
                    } else {
                        this.open();
                    }
                    return;
                }
            }
            if (parseInt(computedStyle.height) < 300) {
                this.dismiss();
            }
        };
        window.addEventListener("pointerup", onUp);
        window.addEventListener("pointercancel", onUp);
        let wheelShouldScrollOnly = false;
        let lastWheelShouldScrollOnly = 0;
        this.root.addEventListener("wheel", event => {
            event.preventDefault();
            let recalculate = true;
            if (wheelShouldScrollOnly) {
                let now = Date.now();
                recalculate = now - lastWheelShouldScrollOnly >= 100;
                lastWheelShouldScrollOnly = now;
            }
            if (recalculate) {
                wheelShouldScrollOnly = (this.state.view & STATE.FULL_OPENED) && content.scrollTop > 0;
            }
            let deltaY = event.deltaY;
            if(event.deltaMode === 1) {
                deltaY *= 30;
            }
            move(0, -deltaY, wheelShouldScrollOnly);
            if (parseInt(computedStyle.height) < 300 || (deltaY < 0 && !wheelShouldScrollOnly)) {
                this.dismiss();
            } else if (deltaY > 0 && !wheelShouldScrollOnly) {
                this.open();
            }
        });
        content.addEventListener("wheel", event => { event.preventDefault(); });
        dimmer.addEventListener("wheel", event => { event.preventDefault(); });
        dimmer.addEventListener("click", () => { this.dismiss(); });
        window.addEventListener("keyup", event => {
            if ((this.state.view & (STATE.DISMISSED | STATE.DISMISSING | STATE.OPENING))) {
                return;
            }
            switch (event.key) {
                case "Escape": {
                    this.dismiss();
                    break;
                }
                default: {
                    return;
                }
            }
            event.preventDefault();
        });
        window.addEventListener("keydown", event => {
            if ((this.state.view & (STATE.DISMISSED | STATE.DISMISSING | STATE.OPENING))) {
                return;
            }
            let deltaY = 51;
            switch (event.key) {
                case "ArrowDown": {
                    deltaY *= -1;
                }
                case "ArrowUp": {
                    let shouldScrollOnly = this.state.view & STATE.FULL_OPENED;
                    move(0, deltaY, shouldScrollOnly);
                    if (!shouldScrollOnly) {
                        if (deltaY > 0) {
                            this.dismiss();
                        } else {
                            this.open();
                        }
                    }
                    break;
                }
                default: {
                    return;
                }
            }
            event.preventDefault();
        });
    },

    dismiss() {
        let actualState = this.state.view;
        if (actualState & (STATE.DISMISSED | STATE.DISMISSING)) {
            return;
        }
        let content = this.root.querySelector("[ref=content]");
        let dimmer = this.root.querySelector("[ref=dimmer]");
        this.state.view = STATE.DISMISSING | (actualState & STATE.FULL_OPENED ? STATE.FULL_OPENED : 0);
        let height = parseInt(this[CONTENT_STYLE].height) + content.scrollTop;
        let opacity = 1;
        let t = Date.now();
        let maxTime = 150;
        let v = height / maxTime;
        let oV = opacity / maxTime;
        let frame = () => {
            if (!(this.state.view & STATE.DISMISSING)) {
                return;
            }
            let n = Date.now();
            let h = Math.max(height -= v * (n - t), 0);
            if (h >= window.innerHeight) {
                this.state.view |= STATE.FULL_OPENED;
            } else {
                this.state.view &= ~STATE.FULL_OPENED;
            }
            content.style.height = h + "px";
            dimmer.style.opacity = Math.max(opacity -= oV * (n-t), 0) + "";
            t = n;
            if (height > 0) {
                requestAnimationFrame(frame);
            } else {
                this.root.style.display = "none";
                this.state.view = STATE.DISMISSED;
            }
        };
        requestAnimationFrame(frame);
    },

    open() {
        let isDismiss_ = this.state.view & (STATE.DISMISSED | STATE.DISMISSING);
        if (!isDismiss_ && (this.state.view & STATE.FULL_OPENED)) {
            return;
        }
        let content = this.root.querySelector("[ref=content]");
        let dimmer = this.root.querySelector("[ref=dimmer]");
        let finalHeight = isDismiss_? 300: window.innerHeight;
        this.state.view = STATE.OPENING;
        this.root.style.display = "";
        content.scrollTop = 0;
        let height = parseInt(this[CONTENT_STYLE].height);
        let opacity = parseInt(window.getComputedStyle(dimmer).opacity);
        let t = Date.now();
        let maxTime = 150;
        let v = (finalHeight - height) / maxTime;
        let oV = (1 - opacity) / maxTime;
        let frame = () => {
            if (this.state.view & STATE.DISMISSING) {
                return;
            }
            let n = Date.now();
            let h = Math.min(Math.max(height += v * (n - t), 0), finalHeight);
            content.style.height = h + "px";
            dimmer.style.opacity = Math.max(opacity += oV * (n-t), 0) + "";
            t = n;
            if (height < finalHeight) {
                requestAnimationFrame(frame);
            } else {
                this.state.view = STATE.OPENED | (h >= window.innerHeight ? STATE.FULL_OPENED: 0);
            }
        };
        requestAnimationFrame(frame);
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div ref="dimmer"></div><div ref="content"><slot expr119="expr119"></slot></div>',
      [{
        'type': bindingTypes.SLOT,
        'attributes': [],
        'name': 'default',
        'redundantAttribute': 'expr119',
        'selector': '[expr119]'
      }]
    );
  },

  'name': 'rm-bottom-sheet'
};

export default rmBottomSheet;

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('riot')) :
    typeof define === 'function' && define.amd ? define(['exports', 'riot'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RM = {}, global.riot));
}(this, (function (exports, riot) { 'use strict';

    var breakpoints = {
        0: {
            0: 48,
            560: 56
        },
        600: {
            0: 48,
            560: 56,
            640: 64
        }
    };
    var height;
    function get_height() {
        var documentHeight = document.documentElement.clientHeight;
        var documentWidth = document.documentElement.clientWidth;
        var barHeight = 48;
        var heightBreakpoints;
        Object.entries(breakpoints).some(function (entry) {
            var minWidth = entry[0], heightBreakpoints_ = entry[1];
            if (documentWidth < minWidth) {
                return true;
            }
            heightBreakpoints = heightBreakpoints_;
            return false;
        });
        Object.entries(heightBreakpoints).some(function (entry) {
            var minHeight = entry[0], height = entry[1];
            if (documentHeight < minHeight) {
                return true;
            }
            barHeight = height;
            return false;
        });
        return barHeight;
    }
    function getHeight() {
        setup();
        return height;
    }
    var done = false;
    var listeners = [];
    function setup() {
        if (done) {
            return;
        }
        window.addEventListener("resize", function () {
            height = get_height();
            for (var i = 0; i < listeners.length;) {
                var actual = listeners[i];
                actual.listener.call(actual.thisArg);
                if (actual.once) {
                    listeners.splice(i, 1);
                }
                else {
                    i++;
                }
            }
        });
        height = get_height();
        done = true;
    }
    function onChange(listener, thisArg) {
        listeners.push({
            listener: listener,
            thisArg: thisArg,
            once: false
        });
    }
    function offChange(listener, thisArg) {
        var index = -1;
        if (listeners.some(function (l, i) {
            if (listener === l.listener &&
                thisArg === l.thisArg) {
                index = i;
                return true;
            }
            return false;
        })) {
            listeners.splice(index, 1);
        }
    }

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = ".mdc-elevation--z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-elevation--z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mdc-elevation--z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mdc-elevation--z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mdc-elevation--z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-elevation--z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mdc-elevation--z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mdc-elevation--z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mdc-elevation--z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-elevation--z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mdc-elevation--z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mdc-elevation--z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mdc-elevation--z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mdc-elevation--z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mdc-elevation--z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mdc-elevation--z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mdc-elevation--z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mdc-elevation--z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mdc-elevation--z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mdc-elevation--z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mdc-elevation--z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mdc-elevation--z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mdc-elevation--z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mdc-elevation--z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mdc-elevation--z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mdc-elevation-transition{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}";
    styleInject(css_248z);

    if (css_248z._neededForStyleInjection) {
        css_248z._neededForStyleInjection();
    }
    function elevation(element, elevation) {
        for (var i = 0; i <= 24; i++) {
            if (i === elevation) {
                continue;
            }
            element.classList.remove("mdc-elevation--z" + i);
        }
        if (elevation != null) {
            element.classList.add("mdc-elevation-transition");
            element.classList.add("mdc-elevation--z" + elevation);
        }
        else {
            element.classList.remove("mdc-elevation-transition");
        }
    }

    var elevation$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        elevation: elevation
    });

    var AppBarComponent = {
      'css': `rm-app-bar,[is="rm-app-bar"]{ display: block; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary, 255, 255, 255)); padding: 8px; box-sizing: border-box; transition: box-shadow ease-in-out 100ms; } rm-app-bar[placeholder]:not([placeholder="false"]),[is="rm-app-bar"][placeholder]:not([placeholder="false"]){ opacity: 0; } rm-app-bar[surface="black"],[is="rm-app-bar"][surface="black"]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } rm-app-bar[surface="dark"],[is="rm-app-bar"][surface="dark"]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } rm-app-bar[surface="light"],[is="rm-app-bar"][surface="light"]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } rm-app-bar[surface="white"],[is="rm-app-bar"][surface="white"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } rm-app-bar[fixed]:not([fixed="false"]),[is="rm-app-bar"][fixed]:not([fixed="false"]){ position: fixed; top: 0; left: 0; right: 0; z-index: 99; } rm-app-bar[fixed]:not([fixed="false"])[bottom]:not([bottom="false"]),[is="rm-app-bar"][fixed]:not([fixed="false"])[bottom]:not([bottom="false"]){ position: fixed; top: unset; bottom: 0; left: 0; right: 0; } rm-app-bar[clamped]:not([clamped="false"]),[is="rm-app-bar"][clamped]:not([clamped="false"]){ overflow: hidden; } rm-app-bar.height-48,[is="rm-app-bar"].height-48{ height: 48px; padding: 4px 8px; } rm-app-bar.height-56,[is="rm-app-bar"].height-56{ height: 56px; } rm-app-bar.height-64,[is="rm-app-bar"].height-64{ height: 64px; padding: 12px 8px; }`,

      'exports': {
        state: {
            hasShadow: false
        },

        _mounted: false,

        onBeforeMount() {
            this._onscroll = () => {
                let hasShadow = false;
                if (this._scrollTarget != null) {
                    if (this.props.bottom != null && this.props.bottom !== "false") {
                        if (this._scrollTarget instanceof Window) {
                            hasShadow = this._scrollTarget.scrollY < this._scrollTarget.document.documentElement.scrollHeight - this._scrollTarget.document.documentElement.clientHeight;
                        } else {
                            hasShadow = this._scrollTarget.scrollTop < this._scrollTarget.scrollHeight - this._scrollTarget.clientHeight;
                        }
                    } else {
                        hasShadow = this.hasPassedElevationThreshold();
                    }
                }
                this.update({ hasShadow });
            };
            let scrollTarget = null;
            if (this.props.scrollTarget) {
                if (typeof this.props.scrollTarget === "string") {
                    scrollTarget = (
                        this.props.scrollTarget !== "window" ?
                        document.querySelector(this.props.scrollTarget) : window
                    ) || window;
                } else if ((this.props.scrollTarget instanceof HTMLElement) || (this.props.scrollTarget instanceof Window)) {
                    scrollTarget = this.props.scrollTarget;
                }
            }
            this.setScrollTarget(scrollTarget);
        },

        onMounted() {
            onChange(this.update, this);
            window.addEventListener("resize", this._onresize = () => {
                this._recalculateScrollbar();
            });
            this._mounted = true;
            if (this._scrollTarget) {
                this._onscroll();
            }
        },

        onUnmounted() {
            this._mounted = false;
            offChange(this.update, this);
            this.setScrollTarget(null);
            window.removeEventListener("resize", this._onresize);
        },

        getHeight() {
            return getHeight();
        },

        _onresize: null,
        _onscroll: null,
        _scrollTarget: null,

        _recalculateScrollbar() {
            let margin = 0;
            if (this._scrollTarget != null && !(this._scrollTarget instanceof Window)) {
                margin = this._scrollTarget.getBoundingClientRect().width - this._scrollTarget.scrollWidth;
            }
            this.root.style.marginRight = margin + "px";
        },

        setScrollTarget(element) {
            if (element === this._scrollTarget) {
                return;
            }
            if (this._scrollTarget != null) {
                this._scrollTarget.removeEventListener("scroll", this._onscroll);
            }
            if (element) {
                (this._scrollTarget = element).addEventListener("scroll", this._onscroll);
            } else {
                this._scrollTarget = null;
            }
            this._recalculateScrollbar();
            if (this._mounted) {
                this._onscroll();
            }
        },

        getSurface() {
            if (this.props.lightSurface != null && this.props.lightSurface !== "false") {
                return "rm-light-surface";
            }
            if (this.props.darkSurface != null && this.props.darkSurface !== "false"){
                return "rm-dark-surface";
            }
            return "";
        },

        hasPassedElevationThreshold() {
            let elevationThreshold = 0;
            if (this.props.elevationThreshold != null) {
                elevationThreshold = parseInt(this.props.elevationThreshold);
                if (isNaN(elevationThreshold)) {
                    elevationThreshold = 0;
                }
            }
            return (
                this._scrollTarget instanceof Window ? this._scrollTarget.scrollY : this._scrollTarget.scrollTop
            ) > elevationThreshold;
        },

        hasPassedBackgroundThreshold() {
            if (this.props.unelevatedBackground == null) {
                return true;
            }
            return this.hasPassedElevationThreshold();
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template('<slot expr278="expr278"></slot>', [{
          'expressions': [{
            'type': expressionTypes.ATTRIBUTE,
            'name': 'class',

            'evaluate': function(scope) {
              return [
                'height-',
                scope.getHeight(),
                ' ',
                scope.getSurface(),
                ' mdc-elevation--z',
                scope.state.hasShadow ? 8 : 0
              ].join('');
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'style',

            'evaluate': function(scope) {
              return scope.hasPassedBackgroundThreshold() ? "" : "background: " + scope.props.unelevatedBackground +";";
            }
          }]
        }, {
          'type': bindingTypes.SLOT,
          'attributes': [],
          'name': 'default',
          'redundantAttribute': 'expr278',
          'selector': '[expr278]'
        }]);
      },

      'name': 'rm-app-bar'
    };

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

    var BottomSheetComponent = {
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
          '<div ref="dimmer"></div><div ref="content"><slot expr279="expr279"></slot></div>',
          [{
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'default',
            'redundantAttribute': 'expr279',
            'selector': '[expr279]'
          }]
        );
      },

      'name': 'rm-bottom-sheet'
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    	  path: basedir,
    	  exports: {},
    	  require: function (path, base) {
          return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
        }
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var whatInput = createCommonjsModule(function (module, exports) {
    /**
     * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
     * @version v5.2.10
     * @link https://github.com/ten1seven/what-input
     * @license MIT
     */
    (function webpackUniversalModuleDefinition(root, factory) {
    	module.exports = factory();
    })(commonjsGlobal, function() {
    return /******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};

    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {

    /******/ 		// Check if module is in cache
    /******/ 		if(installedModules[moduleId])
    /******/ 			return installedModules[moduleId].exports;

    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = installedModules[moduleId] = {
    /******/ 			exports: {},
    /******/ 			id: moduleId,
    /******/ 			loaded: false
    /******/ 		};

    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    /******/ 		// Flag the module as loaded
    /******/ 		module.loaded = true;

    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}


    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;

    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";

    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
    /************************************************************************/
    /******/ ([
    /* 0 */
    /***/ (function(module, exports) {

    	module.exports = function () {
    	  /*
    	   * bail out if there is no document or window
    	   * (i.e. in a node/non-DOM environment)
    	   *
    	   * Return a stubbed API instead
    	   */
    	  if (typeof document === 'undefined' || typeof window === 'undefined') {
    	    return {
    	      // always return "initial" because no interaction will ever be detected
    	      ask: function ask() {
    	        return 'initial';
    	      },

    	      // always return null
    	      element: function element() {
    	        return null;
    	      },

    	      // no-op
    	      ignoreKeys: function ignoreKeys() {},

    	      // no-op
    	      specificKeys: function specificKeys() {},

    	      // no-op
    	      registerOnChange: function registerOnChange() {},

    	      // no-op
    	      unRegisterOnChange: function unRegisterOnChange() {}
    	    };
    	  }

    	  /*
    	   * variables
    	   */

    	  // cache document.documentElement
    	  var docElem = document.documentElement;

    	  // currently focused dom element
    	  var currentElement = null;

    	  // last used input type
    	  var currentInput = 'initial';

    	  // last used input intent
    	  var currentIntent = currentInput;

    	  // UNIX timestamp of current event
    	  var currentTimestamp = Date.now();

    	  // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`
    	  var shouldPersist = 'false';

    	  // form input types
    	  var formInputs = ['button', 'input', 'select', 'textarea'];

    	  // empty array for holding callback functions
    	  var functionList = [];

    	  // list of modifier keys commonly used with the mouse and
    	  // can be safely ignored to prevent false keyboard detection
    	  var ignoreMap = [16, // shift
    	  17, // control
    	  18, // alt
    	  91, // Windows key / left Apple cmd
    	  93 // Windows menu / right Apple cmd
    	  ];

    	  var specificMap = [];

    	  // mapping of events to input types
    	  var inputMap = {
    	    keydown: 'keyboard',
    	    keyup: 'keyboard',
    	    mousedown: 'mouse',
    	    mousemove: 'mouse',
    	    MSPointerDown: 'pointer',
    	    MSPointerMove: 'pointer',
    	    pointerdown: 'pointer',
    	    pointermove: 'pointer',
    	    touchstart: 'touch',
    	    touchend: 'touch'

    	    // boolean: true if the page is being scrolled
    	  };var isScrolling = false;

    	  // store current mouse position
    	  var mousePos = {
    	    x: null,
    	    y: null

    	    // map of IE 10 pointer events
    	  };var pointerMap = {
    	    2: 'touch',
    	    3: 'touch', // treat pen like touch
    	    4: 'mouse'

    	    // check support for passive event listeners
    	  };var supportsPassive = false;

    	  try {
    	    var opts = Object.defineProperty({}, 'passive', {
    	      get: function get() {
    	        supportsPassive = true;
    	      }
    	    });

    	    window.addEventListener('test', null, opts);
    	  } catch (e) {}
    	  // fail silently


    	  /*
    	   * set up
    	   */

    	  var setUp = function setUp() {
    	    // add correct mouse wheel event mapping to `inputMap`
    	    inputMap[detectWheel()] = 'mouse';

    	    addListeners();
    	  };

    	  /*
    	   * events
    	   */

    	  var addListeners = function addListeners() {
    	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
    	    // can only demonstrate potential, but not actual, interaction
    	    // and are treated separately
    	    var options = supportsPassive ? { passive: true } : false;

    	    document.addEventListener('DOMContentLoaded', setPersist);

    	    // pointer events (mouse, pen, touch)
    	    if (window.PointerEvent) {
    	      window.addEventListener('pointerdown', setInput);
    	      window.addEventListener('pointermove', setIntent);
    	    } else if (window.MSPointerEvent) {
    	      window.addEventListener('MSPointerDown', setInput);
    	      window.addEventListener('MSPointerMove', setIntent);
    	    } else {
    	      // mouse events
    	      window.addEventListener('mousedown', setInput);
    	      window.addEventListener('mousemove', setIntent);

    	      // touch events
    	      if ('ontouchstart' in window) {
    	        window.addEventListener('touchstart', setInput, options);
    	        window.addEventListener('touchend', setInput);
    	      }
    	    }

    	    // mouse wheel
    	    window.addEventListener(detectWheel(), setIntent, options);

    	    // keyboard events
    	    window.addEventListener('keydown', setInput);
    	    window.addEventListener('keyup', setInput);

    	    // focus events
    	    window.addEventListener('focusin', setElement);
    	    window.addEventListener('focusout', clearElement);
    	  };

    	  // checks if input persistence should happen and
    	  // get saved state from session storage if true (defaults to `false`)
    	  var setPersist = function setPersist() {
    	    shouldPersist = !(docElem.getAttribute('data-whatpersist') || document.body.getAttribute('data-whatpersist') === 'false');

    	    if (shouldPersist) {
    	      // check for session variables and use if available
    	      try {
    	        if (window.sessionStorage.getItem('what-input')) {
    	          currentInput = window.sessionStorage.getItem('what-input');
    	        }

    	        if (window.sessionStorage.getItem('what-intent')) {
    	          currentIntent = window.sessionStorage.getItem('what-intent');
    	        }
    	      } catch (e) {
    	        // fail silently
    	      }
    	    }

    	    // always run these so at least `initial` state is set
    	    doUpdate('input');
    	    doUpdate('intent');
    	  };

    	  // checks conditions before updating new input
    	  var setInput = function setInput(event) {
    	    var eventKey = event.which;
    	    var value = inputMap[event.type];

    	    if (value === 'pointer') {
    	      value = pointerType(event);
    	    }

    	    var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;

    	    var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;

    	    var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

    	    // prevent touch detection from being overridden by event execution order
    	    if (validateTouch(value)) {
    	      shouldUpdate = false;
    	    }

    	    if (shouldUpdate && currentInput !== value) {
    	      currentInput = value;

    	      persistInput('input', currentInput);
    	      doUpdate('input');
    	    }

    	    if (shouldUpdate && currentIntent !== value) {
    	      // preserve intent for keyboard interaction with form fields
    	      var activeElem = document.activeElement;
    	      var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));

    	      if (notFormInput) {
    	        currentIntent = value;

    	        persistInput('intent', currentIntent);
    	        doUpdate('intent');
    	      }
    	    }
    	  };

    	  // updates the doc and `inputTypes` array with new input
    	  var doUpdate = function doUpdate(which) {
    	    docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);

    	    fireFunctions(which);
    	  };

    	  // updates input intent for `mousemove` and `pointermove`
    	  var setIntent = function setIntent(event) {
    	    var value = inputMap[event.type];

    	    if (value === 'pointer') {
    	      value = pointerType(event);
    	    }

    	    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
    	    detectScrolling(event);

    	    // only execute if scrolling isn't happening
    	    if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
    	      currentIntent = value;

    	      persistInput('intent', currentIntent);
    	      doUpdate('intent');
    	    }
    	  };

    	  var setElement = function setElement(event) {
    	    if (!event.target.nodeName) {
    	      // If nodeName is undefined, clear the element
    	      // This can happen if click inside an <svg> element.
    	      clearElement();
    	      return;
    	    }

    	    currentElement = event.target.nodeName.toLowerCase();
    	    docElem.setAttribute('data-whatelement', currentElement);

    	    if (event.target.classList && event.target.classList.length) {
    	      docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
    	    }
    	  };

    	  var clearElement = function clearElement() {
    	    currentElement = null;

    	    docElem.removeAttribute('data-whatelement');
    	    docElem.removeAttribute('data-whatclasses');
    	  };

    	  var persistInput = function persistInput(which, value) {
    	    if (shouldPersist) {
    	      try {
    	        window.sessionStorage.setItem('what-' + which, value);
    	      } catch (e) {
    	        // fail silently
    	      }
    	    }
    	  };

    	  /*
    	   * utilities
    	   */

    	  var pointerType = function pointerType(event) {
    	    if (typeof event.pointerType === 'number') {
    	      return pointerMap[event.pointerType];
    	    } else {
    	      // treat pen like touch
    	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
    	    }
    	  };

    	  // prevent touch detection from being overridden by event execution order
    	  var validateTouch = function validateTouch(value) {
    	    var timestamp = Date.now();

    	    var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;

    	    currentTimestamp = timestamp;

    	    return touchIsValid;
    	  };

    	  // detect version of mouse wheel event to use
    	  // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
    	  var detectWheel = function detectWheel() {
    	    var wheelType = null;

    	    // Modern browsers support "wheel"
    	    if ('onwheel' in document.createElement('div')) {
    	      wheelType = 'wheel';
    	    } else {
    	      // Webkit and IE support at least "mousewheel"
    	      // or assume that remaining browsers are older Firefox
    	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
    	    }

    	    return wheelType;
    	  };

    	  // runs callback functions
    	  var fireFunctions = function fireFunctions(type) {
    	    for (var i = 0, len = functionList.length; i < len; i++) {
    	      if (functionList[i].type === type) {
    	        functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
    	      }
    	    }
    	  };

    	  // finds matching element in an object
    	  var objPos = function objPos(match) {
    	    for (var i = 0, len = functionList.length; i < len; i++) {
    	      if (functionList[i].fn === match) {
    	        return i;
    	      }
    	    }
    	  };

    	  var detectScrolling = function detectScrolling(event) {
    	    if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
    	      isScrolling = false;

    	      mousePos.x = event.screenX;
    	      mousePos.y = event.screenY;
    	    } else {
    	      isScrolling = true;
    	    }
    	  };

    	  // manual version of `closest()`
    	  var checkClosest = function checkClosest(elem, tag) {
    	    var ElementPrototype = window.Element.prototype;

    	    if (!ElementPrototype.matches) {
    	      ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
    	    }

    	    if (!ElementPrototype.closest) {
    	      do {
    	        if (elem.matches(tag)) {
    	          return elem;
    	        }

    	        elem = elem.parentElement || elem.parentNode;
    	      } while (elem !== null && elem.nodeType === 1);

    	      return null;
    	    } else {
    	      return elem.closest(tag);
    	    }
    	  };

    	  /*
    	   * init
    	   */

    	  // don't start script unless browser cuts the mustard
    	  // (also passes if polyfills are used)
    	  if ('addEventListener' in window && Array.prototype.indexOf) {
    	    setUp();
    	  }

    	  /*
    	   * api
    	   */

    	  return {
    	    // returns string: the current input type
    	    // opt: 'intent'|'input'
    	    // 'input' (default): returns the same value as the `data-whatinput` attribute
    	    // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
    	    ask: function ask(opt) {
    	      return opt === 'intent' ? currentIntent : currentInput;
    	    },

    	    // returns string: the currently focused element or null
    	    element: function element() {
    	      return currentElement;
    	    },

    	    // overwrites ignored keys with provided array
    	    ignoreKeys: function ignoreKeys(arr) {
    	      ignoreMap = arr;
    	    },

    	    // overwrites specific char keys to update on
    	    specificKeys: function specificKeys(arr) {
    	      specificMap = arr;
    	    },

    	    // attach functions to input and intent "events"
    	    // funct: function to fire on change
    	    // eventType: 'input'|'intent'
    	    registerOnChange: function registerOnChange(fn, eventType) {
    	      functionList.push({
    	        fn: fn,
    	        type: eventType || 'input'
    	      });
    	    },

    	    unRegisterOnChange: function unRegisterOnChange(fn) {
    	      var position = objPos(fn);

    	      if (position || position === 0) {
    	        functionList.splice(position, 1);
    	      }
    	    },

    	    clearStorage: function clearStorage() {
    	      window.sessionStorage.clear();
    	    }
    	  };
    	}();

    /***/ })
    /******/ ])
    });
    });

    var RIPPLE = Symbol("ripple");
    var RIPPLE_COUNT = Symbol("ripple-count");
    var RIPPLE_OPTIONS = Symbol("ripple_options");
    document.head.appendChild(document.createElement("style")).innerHTML = "\n.rm-ripple-container { overflow: hidden; position: relative; }\n.rm-ripple-container--unbounded { overflow: visible; }\n.rm-ripple-container--highlighto.rm-ripple-container--highlighted:not([disabled])::after,\n.rm-ripple-container--highlighto:not([disabled]):hover::after {\n    content: ''; position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    background: black; background: var(--ripple-color, black); pointer-events: none;\n    border-radius: inherit; opacity: .1;\n}\n.rm-ripple {\n    position: absolute; border-radius: 50%; background: black; background: var(--ripple-color, black); pointer-events: none;\n    /*transition: opacity cubic-bezier(.22,.61,.36,1) 450ms, transform cubic-bezier(.22,.61,.36,1) 400ms;*/\n    transition: opacity cubic-bezier(0.4,0,0.2,1) 450ms, transform cubic-bezier(0.4,0,0.2,1) 450ms;\n}";
    var scaleUpStyle;
    {
        var div = document.createElement("div");
        div.style.transform = "scale(1)";
        document.body.appendChild(div);
        scaleUpStyle = window.getComputedStyle(div).transform;
        document.body.removeChild(div);
    }
    var Ripple = (function () {
        function Ripple(x, y, r, type) {
            if (type === void 0) { type = Ripple.TYPE.NORMAL; }
            this._ended = false;
            this._onEnd = null;
            var div = this._div = document.createElement("div");
            if (r == null) {
                div.setAttribute("style", "left:0;top:0;bottom:0;right:0;" +
                    "border-radius:inherit;transform:scale(0);" +
                    "opacity:.12;opacity:var(--color-opacity-tertiary, .12);");
            }
            else {
                var cx = x - r;
                var cy = y - r;
                div.setAttribute("style", "left:" + cx +
                    "px;top:" + cy +
                    "px;width:" + (r * 2) +
                    "px;height:" + (r * 2) +
                    "px;transform:scale(0);opacity:.12;opacity:var(--color-opacity-tertiary, .12);");
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
        Ripple.prototype._frame = function () {
            var element = this._div.parentElement;
            if (!element) {
                return;
            }
            var rect = this._div.getBoundingClientRect();
            if (rect.width === 0 && rect.height === 0) {
                element.removeChild(this._div);
                return;
            }
            if (this._computedStyle.transform === scaleUpStyle) {
                if (this._computedStyle.opacity === "0") {
                    element.removeChild(this._div);
                    return;
                }
                else {
                    if (this._ended) {
                        this._div.style.opacity = "0";
                    }
                }
            }
            requestAnimationFrame(this._frame.bind(this));
        };
        Ripple.prototype._scaleUp = function () {
            var _this = this;
            requestAnimationFrame(function () {
                _this._div.style.transform = "scale(1)";
                requestAnimationFrame(_this._frame.bind(_this));
            });
        };
        Ripple.prototype.attachTo = function (element, onEnd) {
            if (this._div.parentElement) {
                throw new Error("Ripple already attached");
            }
            if (this._ended) {
                throw new Error("Ripple already ended");
            }
            if (element.firstElementChild != null) {
                element.insertBefore(this._div, element.firstElementChild);
            }
            else {
                element.appendChild(this._div);
            }
            this._scaleUp();
            this._onEnd = onEnd || null;
            return this;
        };
        Ripple.prototype.end = function () {
            this._ended = true;
            if (this._onEnd) {
                this._onEnd();
            }
            return this;
        };
        return Ripple;
    }());
    (function (Ripple) {
        var TYPE;
        (function (TYPE) {
            TYPE[TYPE["NORMAL"] = 0] = "NORMAL";
            TYPE[TYPE["QUICK"] = 1] = "QUICK";
            TYPE[TYPE["INSTANT"] = 2] = "INSTANT";
        })(TYPE = Ripple.TYPE || (Ripple.TYPE = {}));
    })(Ripple || (Ripple = {}));
    var canEventStartRipple = true;
    window.addEventListener("pointerdown", function () { canEventStartRipple = true; });
    function ripple(element, options) {
        var _a;
        var ripple = element[RIPPLE];
        if (options == null && ripple != null) {
            return ripple;
        }
        options = __assign({ radius: undefined, unbounded: false, centered: false, disabled: false, highlight: false, instantHighlight: false, unboundedFocus: false, color: "currentColor", focusTarget: undefined, detectLabel: true, usePointerFocus: false, stopRippling: false }, options);
        if (options.detectLabel != null && !options.detectLabel) {
            options.usePointerFocus = false;
        }
        else {
            options.detectLabel = true;
        }
        if (ripple) {
            return ripple.set(options);
        }
        var lastX = null;
        var lastY = null;
        var pointerElement = element;
        var lastFocusTarget = undefined;
        var onFocus = function (event) {
            if (whatInput.ask() !== "keyboard" && !ripple[RIPPLE_OPTIONS].usePointerFocus) {
                return;
            }
            ripple.start(null, null, event);
        };
        var onMouseEnter = function (event) {
            if (!ripple[RIPPLE_OPTIONS].highlight || ripple[RIPPLE_OPTIONS].disabled) {
                return;
            }
            ripple.start(null, null, event);
        };
        ripple = (_a = {
                highlight: function () {
                    var _this = this;
                    var currentRipple = new Ripple(0, 0, null, Ripple.TYPE.INSTANT).attachTo(element, function () {
                        _this[RIPPLE_COUNT]--;
                    });
                    this[RIPPLE_COUNT]++;
                    return currentRipple;
                },
                start: function (x, y, event, type) {
                    var _this = this;
                    if (type === void 0) { type = Ripple.TYPE.NORMAL; }
                    var isFocus = !!(event && event.type === "focus");
                    var isMouseEnter = !!(event && event.type === "mouseenter");
                    var options = this[RIPPLE_OPTIONS];
                    if (isFocus) {
                        type = options.instantHighlight ? Ripple.TYPE.INSTANT : Ripple.TYPE.QUICK;
                    }
                    else if (isMouseEnter) {
                        type = this[RIPPLE_COUNT] > 0 || options.instantHighlight ? Ripple.TYPE.INSTANT : Ripple.TYPE.QUICK;
                    }
                    var r = null;
                    var rect = null;
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
                                }
                                else {
                                    r = Math.sqrt(Math.pow(rect.width - x, 2) + y * y);
                                }
                            }
                            else {
                                if (x >= rect.width / 2) {
                                    r = Math.sqrt(x * x + Math.pow(rect.height - y, 2));
                                }
                                else {
                                    r = Math.sqrt(Math.pow(rect.width - x, 2) + Math.pow(rect.height - y, 2));
                                }
                            }
                        }
                    }
                    var currentRipple = new Ripple(x, y, r, type).attachTo(element, function () {
                        _this[RIPPLE_COUNT]--;
                    });
                    this[RIPPLE_COUNT]++;
                    if (event && event.isTrusted) {
                        var once_1 = function (up_event) {
                            if (isFocus) {
                                (lastFocusTarget || element).removeEventListener("blur", once_1);
                            }
                            else if (isMouseEnter) {
                                pointerElement.removeEventListener("mouseleave", once_1);
                            }
                            else {
                                window.removeEventListener("pointerup", once_1);
                                window.removeEventListener("pointercancel", once_1);
                                if (up_event.pointerId !== event.pointerId) {
                                    return;
                                }
                            }
                            currentRipple.end();
                        };
                        if (isFocus) {
                            (lastFocusTarget || element).addEventListener("blur", once_1);
                        }
                        else if (isMouseEnter) {
                            pointerElement.addEventListener("mouseleave", once_1);
                        }
                        else {
                            window.addEventListener("pointerup", once_1);
                            window.addEventListener("pointercancel", once_1);
                        }
                    }
                    return currentRipple;
                },
                set: function (options) {
                    var prevOptions = this[RIPPLE_OPTIONS];
                    options = this[RIPPLE_OPTIONS] = __assign(__assign(__assign({}, prevOptions), options), { detectLabel: prevOptions.detectLabel });
                    if (options.detectLabel != null && !options.detectLabel) {
                        options.usePointerFocus = false;
                    }
                    else {
                        options.detectLabel = true;
                    }
                    if (options.unbounded) {
                        element.classList.add("rm-ripple-container--unbounded");
                    }
                    else {
                        element.classList.remove("rm-ripple-container--unbounded");
                    }
                    if (options.highlight) {
                        element.classList.add("rm-ripple-container--highlight");
                    }
                    else {
                        element.classList.remove("rm-ripple-container--highlight");
                    }
                    if (options.color) {
                        element.style.setProperty("--ripple-color", options.color);
                    }
                    else {
                        element.style.setProperty("--ripple-color", "black");
                    }
                    if (options.focusTarget !== lastFocusTarget) {
                        if (lastFocusTarget) {
                            lastFocusTarget.removeEventListener("focus", onFocus);
                            lastFocusTarget = undefined;
                        }
                        else {
                            element.removeEventListener("focus", onFocus);
                        }
                        if (options.focusTarget) {
                            lastFocusTarget = options.focusTarget;
                            lastFocusTarget.addEventListener("focus", onFocus);
                        }
                        else {
                            element.addEventListener("focus", onFocus);
                        }
                    }
                    else {
                        element.removeEventListener("focus", onFocus);
                        element.addEventListener("focus", onFocus);
                    }
                    pointerElement.removeEventListener("mouseenter", onMouseEnter);
                    pointerElement.addEventListener("mouseenter", onMouseEnter);
                    return this;
                },
                getOption: function (option) {
                    return this[RIPPLE_OPTIONS][option];
                }
            },
            _a[RIPPLE_OPTIONS] = options,
            _a[RIPPLE_COUNT] = 0,
            _a);
        if (options.detectLabel) {
            var parent_1 = element.parentElement;
            while (parent_1) {
                if (parent_1.tagName === "LABEL") {
                    pointerElement = parent_1;
                    break;
                }
                parent_1 = parent_1.parentElement;
            }
        }
        pointerElement.addEventListener("pointerdown", function (event) {
            if (!canEventStartRipple || ripple[RIPPLE_OPTIONS].disabled) {
                return;
            }
            var rect = element.getBoundingClientRect();
            ripple.start(lastX = event.clientX - rect.x, lastY = event.clientY - rect.y, event);
            if (ripple[RIPPLE_OPTIONS].stopRippling) {
                canEventStartRipple = false;
            }
            setTimeout(function () {
                lastX = lastY = null;
            }, 0);
        });
        element[RIPPLE] = ripple;
        element.classList.add("rm-ripple-container");
        ripple.set(options);
        return ripple;
    }
    function isRipple(element) {
        return element[RIPPLE] != null;
    }

    var css_248z$1 = "@charset \"UTF-8\";@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(\"data:application/vnd.ms-fontobject;base64,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\");src:local(\"☺\"),url(\"data:font/woff2;base64,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\") format(\"woff2\"),url(\"data:font/woff;base64,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\") format(\"woff\"),url(\"data:font/ttf;base64,AAEAAAAOAIAAAwBgR0RFRgUKAFMAAh+IAAAAHEdQT1MAGQAMAAIfpAAAABBHU1VCR4rUiAACH7QAAIgqT1MvMgpzImMAAAFoAAAAYGNtYXB+QUydAAALwAAACLRnYXNw//8AAwACH4AAAAAIZ2x5ZsMdH1gAAB5oAAH/emhlYWQSgOQtAAAA7AAAADZoaGVhBAECBAAAASQAAAAkaG10eIyDjAwAAAHIAAAJ9mxvY2FbgNngAAAUdAAACfJtYXhwBVIA4QAAAUgAAAAgbmFtZRwVNegAAh3kAAABenBvc3T/hgAyAAIfYAAAACAAAQAAAAEEWvhX2zxfDzz1AAkCAAAAAADYpKE3AAAAANi//ZsAAAAAAgACBAAAAAgAAgAAAAAAAAABAAACAAAAAAACAAAAAAACAAABAAAAAAAAAAAAAAAAAAAAAwABAAAE+ACwABgAAAAAAAIAAAABAAEAAABAAC4AAAAAAAQCAAGQAAUAAAFMAWYAAABHAUwBZgAAAPUAGQCEAAACAAUDAAAAAAAAAAAAARIAAAAEAAAAAAAAAAAAAAAAgAAw//8CAAAAAAACAAAAAAAAAQAAAAAAAAAAAAAAIAArAgAAEQAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKwArABUAQABVACsAQABAAFUAQABVADUAKwBAAEAAVQBrAGsAQAArACsAKwArABUAKwCAACsAKwCrACsAKwArACsAQAArABUAQABAAFUAVQCAAIAAKwCAACsAKwArAEAAKwBrAJUAQABAACsAQAAiABUAVQBVAFUAVQBVAFUAFQAVACsAVQArAFUAFQAVACsAKwAVABUALABAACsAFQAVABUAFQArAEAAFQBAAEAAKwArAEAAAABVAHcAQABrAFUAKwBAACsAKwBAAFUAKwArAGsAQABAACsAawArACsAKwAzAEAAKwAAAAAAAABbABUAawAVAGsAKwArAAAAFQBAAFUAKwAqABUAFQArAAAAAABAAFUAKwBrAEAAFQAVAEAAVAArAEAAAgBrAGsAQAArACsAQAAAACsAawArACsAQABAACsAQABrAFUAPQBAACsAKwArACEAawArACsAQAAAAEAAQABAACsAQABrACsAKwBAAEAAKwAVACsAKwBrACsAFQBAAEAAKwBAAEAAKwBrACsAKwArACsAKwArACsAKwCVAJUAlQCVAJUAawBAAFUAQAAPAA8ADwAPACsAVQAAABUAFQAVABUAFQAVAEAAKwAIACsAKwBAABUAawAVAAEAVQAVACsAKwAzACsAFQAIAAkACAArAGYAAAArAEAAlQBEACAAawCVAIcAQABAAEAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQACVACsAAABVAAAAQABAAIAAIAA1ACsAVQBrAEAAQABrAFUAawCAAEAAKwBVACsAQAArAEAAdwArAEAAawBVAEAAVQBVAFUAVQBXAFUAFQBLACsAVQA1ACsAawBAACsAKwBVAEAANQBrAEAAKwAAACsAAAAAAAAAAAAAAGsAawArACsAKwArABUAFQAAABUAFQArAIAAKwBAAEAAKwCAAKsAtwCAAEAAgAArACsAFQBrAAAAAAAAAAAAQABVAGsAawAAAAAAQABAAEAAVQBrAGsAVQAVAEAAKwAVABUAVQBAACsAFQAVAGsAFQArACsAQABrAIAAKwBAADUANQArAGsAgAAPAA8ADwAPAEAAKwArACsAawBrACsAQABAACsAQABAAEAAKwAAAEAAQAAVAEAAQABAAEAAQABAAGsAVQArAEAAQABAAFUAKwBVACsAqAAVABUAFQAVABUAFQAVABUAFQAVABUAQABAAAAAKwAVABUALAAxABUAQAArAJUAQABAAFUAAAArAB4AQAAVABUAKgBAACsAQAAVAEAAQAArAEAAFQBAAEAAQABAAEAAKwArACsAgABrACsAqwC3AEAAFQArACsAVQArAEAAVQArACsAKwBAABUAEgBXAFUAQAAVABgAKwArACsAQAArAAAAWQBAACUAKwArAEAAQABAAAAAAAAVABUAKwAVABUAFQAVAEwAAAArAAAAKwBAABUAQABAACsAQABAACsAAABVAEAAKwBVAFUAVQCAACsAFQBAACsAKwArACsAQABVAEAAKwBAAEAAVQAVAEAAFQBVAEAAQABVACsAgABAAEAAQAArACsAKwA6ACsAFQBAAEAAQAAVAGAAawBrACsAOgBAAEAAFQBVAD4AawBrAEAAawBAAEAAVQBAACsAVQBrACsAKwBAAGsAFQArACsAgAAVACsAKwArAFUAVQCVACsAlQBVACsASQCrALcAawCAAIAAawBrAEAAVQDVAFYAngCeAFUAawBVAFUAgAB3AMAA1QAAAH0AawBAACsAKwArAEAAQABAAEAAKwArAAAAFQBAAEAAQABAAAAAQABVAFUAKwArAFUAPQBAAGsAKwBAAAAAKwAVACsAIAAVACsAQABAACsAVQArABUAFQAVAIAAVQAVAFUAFQBAAFUAFQArANUAOgAVABUAQAArACsAVQArACsAQAArABUAAABAACsAKwBVAFUAVQArAFUAQAArABUAFQBVABUAVQBVAEAAKwAVAEAAVQArACsAKwArACsAKwArAEAAQAArACsAKwArACsAAQBAACsAQABAACsAFQArACsAIwArACsAKwAVAEAAQABAAEAAQABAAEAAVQAAAFUAawBrAFUADgAVACsAKwAVAFUAKwArAEAAawBVAEAASQAJAEAAQAArACsAKwArACsAKwBVAFUAQABAAGsAKwArACsAKwAVACsAgACAAFUAKwArABUAVQBAAEAAKwBAAEAAVQBVAFUAKwArAFUAQABAABUAKwArACsAQAAAAGsAVQAAAEAAAAAVAAsAQAArACsAKwBAACsAFQAVAGsAKwBAAC0AQAAAAGsAgAAVABEAFQAVABUAawAVABUAQABVAFoAawArABUAFQAVACsANAArAEAAVQArAEAAawArABUAFQAVAFUAFQAVAAAAQABAABUAKwAVACsAQAArAGsAawBAACsAVQArAFUAKwBVAFUAVQBVAFUAKwAVABUAKwArACsAKwArAGsAKwArAEAAQABAABUAKwA1ACcAgABrAEAAKwBaACsAQAAVAGsAFQAAAGUAawArAEAAKwArAEAAQAArAFUAKwCrABUAQABVABUAQAArABUAQAAVAAAAVQAAAGsAQAArAGsAAABAAIAAKwArAFUAKwBAAEsAawAqAEAAQAA3AEkAQABrACsAVQAqACsAlQBAAEAAQAAVAEAAQABVAFUAVQArAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAArACsAQABAAEAAVQAVABUAQAAVACsAKwBAABUAQABAAAAAKwBAACsAKwAVAGsAKwBAAFUAVQArACsAKwArAEAAKwBAAEAAVQBAABUAFQAAAB4AQABAAAAAFQArAAgAFQAVABUAKwAVAEAAQAAVACsAgAArACsAKwBVACsAKwArACsAKwBVACsAQAArACsAFQArAJAAKwArAFUAKwArAEAAJQBAACsAKwCrAEAAKwAVAFUAVQAmAFUAPwArAEAAFQArAEAAXgAsACsAMwA/AGsAKwBrACsAMgArACsAKwAnAHYAAQBVACsAKwArABUAQAArACsAKwArACsAFQBrAFUAVQBVACsAPwA9ACsAawBVACsAQABVAEAAJgAVAEIAKwArACsAKwArAFUAFQArACsAKwArACsAFQAAAD8AKwBAABUAKwArAFUAVQArAFUAKwArACsAKwArABUAQAAAAAAAAAAEAAAAAwAAACQAAAAEAAADlAADAAEAAAAkAAMACgAAA5QABANwAAAA2ACAAAYAWAA5AF8AeuAE4BngIeAk4CzgMeA54FPgdOC84L/gxODw4XnhleGc4cPhyOHQ4dvh4uIC4mzixOLJ4szjCOMY4zrj4OPu5BPkLuRA5TblfeXh5iDmSebF5t3m3+bh5+noAegO6BfoOuhR6HPotujO6QDpBukP6UPpRel96X/pgumJ6Yvpj+mS6ZTplumY6Zvpnemj6aXpqOmq6a3psum06bfpvenD6cXpz+nU6dnp3enh6eTp5unp6e3p7+nz6fbp+en86f7qAuok6jnqSepZ6mnqdOtM60///wAAADAAXwBh4ADgGeAb4CPgKOAu4DPgO+BV4K/gvuDD4MbhReGQ4Zzho+HI4c3h2OHg4f7iJuK84sbizOMH4wrjGuOd4+Lj8eQV5DDlLeU55cPmDuYj5sTm3ebf5uHn6efu6AvoEeg06E3oU+h16Ljo0OkC6QjpEelF6Ufpf+mC6Yjpi+mP6ZLplOmW6Zjpmumd6aHppemo6arpremw6bTptum66cPpxenI6dHp1und6eDp5Onm6enp7Onv6fLp9en56fzp/uoA6gnqJupA6lDqYOpw6zvrTv///9P/rv+tICggFCATIBIgDyAOIA0gDCALH9Ef0B/NH8wfeB9iH1wfVh9SH04fRx9DHygfBR62HrUesx55Hngedx4VHhQeEh4RHhAdJB0iHN0csRyvHDUcHhwdHBwbFRsRGwgbBhrqGtga1xrW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AB0AGQAiACAEMQAEAAcAGgAdBDAABAAGABoAHQQvAAQABQAaAB0ELgAEAAQAGgAdBC0ABAADABoAHQQ0AAMAGgAdBDIAAgAYAAUADAAkADQAPABEAyUACwARAA0AHwAcACEADgAhABYAHAAbBDYABwAYAA0AHQAZACIAIAQ3AAMAGgAdApkAAwAJAAMENQACABgAAwAIABgAIAQ4AAcAGAANAB0AGQAiACAEOQADABoAHQB9AAIAGAADAAgAGAAgBDsABwAYAA0AHQAZACIAIAQ8AAMAGgAdBDoAAgAYAAMACAAYACAEPgAHABgADQAdABkAIgAgBD8AAwAaAB0EPQACABgAAwAIABgAIARBAAcAGAANAB0AGQAiACAEQgADABoAHQRAAAIAGAADAAgAGAAgBEQABwAYAA0AHQAZACIAIARFAAMAGgAdBEMAAgAYAAMACAAYACAERwAHABgADQAdABkAIgAgBEgAAwAaAB0ERgACABgAYQDEAQABOgFyAaoB4AIWAkgCdgKkAtAC+gMkA0wDdAOcA8QD6gQQBDYEWgR+BKIExgTqBQwFLAVMBWwFjAWsBcwF7AYMBioGSAZmBoQGoAa8BtgG9AcQBywHSAdiB3wHlgewB8oH5Af+CBgIMAhICGAIeAiQCKgIwAjYCPAJBgkcCTIJSAleCXQJigmgCbQJyAncCfAKBAoYCiwKQApUCmgKegqMCp4KsArCCtIK4gryCwILEgsiCzALPAtIC1ILWgtiAuEAHQAWAB8AGQAWABsAEgANACAAEgAOACEADQAWABsAEQAWACMAFgARACIADgAZAA0AIAAiABYAIQASAuQAHAAWAB8AGQAWABsAEgANACAAEgAOACEADQAZABIAFAAfABwAHAAaAA0AHwASABEAIgAQABIAEQLjABsAFgAfABkAFgAbABIADQAgABIADgAhAA0AGQASABQAHwAcABwAGgANABsAHAAfABoADgAZAuYAGwAWAB8AGQAWABsAEgANACAAEgAOACEADQAfABIAEAAZABYAGwASAA0AGwAcAB8AGgAOABkC4gAaABYAHwAZABYAGwASAA0AIAASAA4AIQANABkAEgAUAB8AHAAcABoADQASACUAIQAfAA4C5QAaABYAHwAZABYAGwASAA0AIAASAA4AIQANAB8AEgAQABkAFgAbABIADQASACUAIQAfAA4C4AAYABYAHwAZABYAGwASAA0AIAASAA4AIQANABMAGQAOACEADQAOABsAFAAZABIAEQKjABYAHwAfABwAJAANABEAHwAcAB0ADQARABwAJAAbAA0AEAAWAB8AEAAZABIDKAAWABAAEAAcACIAGwAhAA0ADwAOABkADgAbABAAEgANACQADgAZABkAEgAhAPYAFQAWAB8AHQAZAA4AGwASABoAHAARABIADQAWABsADgAQACEAFgAjABIEUAAUACAAIAAWACAAIQAOABsAIQANABsADgAjABYAFAAOACEAFgAcABsDOQAUACAAIAAWABQAGwAaABIAGwAhAA0AIQAiAB8AGwASABEADQAWABsA9wATABYAHwAdABkADgAbABIAGgAcABEAEgANAA4AEAAhABYAIwASBE8AEwAgACAAFgAgACEADgAbACEADQARABYAHwASABAAIQAWABwAGwJOABMAEQARAA0AHQAVABwAIQAcAA0ADgAZACEAEgAfABsADgAhABIDOAATACAAIAAWABQAGwAaABIAGwAhAA0AHwASACEAIgAfABsAEgARAMAAEgARABEADQAQABYAHwAQABkAEgANABwAIgAhABkAFgAbABIBJgASABEAEQANACEAHAANABUAHAAaABIADQAgABAAHwASABIAGwQFABIAEAAQABIAIAAgABYADwAZABIADQATABwAHwAkAA4AHwARAr4AEQAfAB8AHAAkAA0AEwAcAB8AJAAOAB8AEQANABYAHAAgAt8AEQAWAB8AGQAWABsAEgANACAAEgAOACEADQATABkADgAhAzcAEQAgACAAFgAUABsAGgASABsAIQANAB8AEgAhACIAHwAbAysAEQARABEADQAgABUAHAAdAB0AFgAbABQADQAQAA4AHwAhA/0AEQAQABAAEgAgACAAFgAPABYAGQAWACEAJgANABsAEgAkAPYAEAAWAB8AHQAZAA4AGwASABoAHAARABIADQAcABMAEwCyAA8AGQAhABIAHwAbAA4AIQASAA0AEgAaAA4AFgAZBOQADwAWAB8AHQAcAB8AIQANACAAFQAiACEAIQAZABIEEgAPAB8AHwAcACQADQAfABYAFAAVACEADQAOABkAIQG1AA8AIAAgABYAIAAhAA4AGwAhAA0AHQAVABwAIQAcAzYADwAgACAAFgAUABsAGgASABsAIQANABkADgAhABIDJwAPABAAEAAcACIAGwAhAA0ADwAOABkADgAbABAAEgD3AA8AFgAfAB0AGQAOABsAEgAaABwAEQASAA0AHAAbAqIADwAfAB8AHAAkAA0AEQAfABwAHQANABEAHAAkABsDNQAOACAAIAAWABQAGwAaABIAGwAhAA0AFgAbABECuAAOAB8AHwAcACQADQARABwAJAAbACQADgAfABECvQAOAB8AHwAcACQADQAPAA4AEAAYAA0AFgAcACADKgAOABAAEAAcACIAGwAhAA0AEAAWAB8AEAAZABICpQANAB8AHwAcACQADQATABwAHwAkAA4AHwARBOUADQAZABkADQAWABsAEAAZACIAIAAWACMAEgKkAA0AHwAfABwAJAANABEAHwAcAB0ADQAiAB0ETAANABEAEQANABoAHAARABIAHwAOACEAHAAfAbIADQARABEADQAhABwADQAdABUAHAAhABwAIAMmAA0AEAAQABIAIAAgABYADwAWABkAFgAhACYA8wANABAAEAASACAAIAANAA4AGQAOAB8AGgAgArUADAAfAB8AHAAkAA0AIgAdACQADgAfABEBLAAMACEAIQAOABAAFQANABoAHAAbABIAJgMyAAwAIAAdABIAEAAhAA0AHwAOACEAFgAcAGcADAARABEADQAhABwADQAeACIAEgAiABICiQAMABEAEQANABkAHAAQAA4AIQAWABwAGwMxAAwAGwAbABwAIgAbABAAEgAaABIAGwAhBEkADAAQABAAHAAiABsAIQANACEAHwASABIA8gAMABAAEAASACAAIAANAA4AGQAOAB8AGgMpAAsAEAAQABwAIgAbACEADQAPABwAJQErAAsAIQAhAA4AEAAVAA0AEwAWABkAEgRLAAsAEQARAA0AFgAQAA0AEAAOABkAGQFrAAsAEQARAA0AEAAcABoAGgASABsAIQTMAAsAIQAhAB8ADgAQACEAFgAcABsAIAJJAAsAEQARAA0ADgANAB0AFQAcACEAHAD0AAsAEAAQABIAIAAgAA0AIQAWABoAEgSaAAsAGgAdAA0AIAAhABwAHwAWABIAIAK8AAsAHwAfABwAJAANAB8AFgAUABUAIQK7AAoAHwAfABwAJAANABkAEgATACEAvwAKABEAEQANABAAFgAfABAAGQASA+UACgAQABAAEgAgACAAFgAPABkAEgG2AAoAIgARABYAHAAhAB8ADgAQABgBcgAKACEAIQAOABAAFQAaABIAGwAhAqEACgAfAB8AHAAkAA0ADwAOABAAGAM0AAoAIAAgABYAFAAbABoAEgAbACEDMwAKACAAIAASACAAIAAaABIAGwAhAy0ACQAZAA4AHwAaAA0ADgARABEDOgAJACIAIQAcAB8AEgAbABIAJAG0AAkAIAAgABYAIAAhAA4AGwAhAGsACQAfACEADQAhAB8ADgAQABgESgAJABEAEQANABAAFQAOAB8AIQArAAkAEQARAA0ADgAZABIAHwAhAPUACQARABEADQAOABkADgAfABoEwAAJAB0ADgAfACEAGgASABsAIQRNAAkAGQAZAA0AFgAbAA8AHAAlAy4ACQAZAA4AHwAaAA0AHAATABMDLwAIABkADgAfABoADQAcABsALgAIACMADQAhABYAGgASAB8A8AAIABEAEQANABkAFgAbABgETgAIAB0AHQAfABwAIwAOABkAtAAIABEAEQANABAADgAZABkD3QAHABkAGQANABwAIgAhAGAABwAWAB8AHQAZAA4AJgDBAAcAHwAQABUAFgAjABIDMAAHABsAEQAfABwAFgARAL4ABwARABEADQAPABwAJQTjAAcAEAANACIAGwAWACEBswAGABEAFwAiACAAIQAtAAUAGQAPACIAGgMsAAUAGQAOAB8AGgKgAAQAHQAdACAAvQADABEAEQK/AAMAEQAPApUAAwAhABoAQQCEALAA2AEAASYBTAFwAZQBtgHYAfgCGAI4AlgCeAKYArgC1gLyAw4DKgNGA2IDfAOWA7ADygPkA/4EGAQyBEwEZgSABJoEtATOBOgFAgUcBTQFTAVkBXoFkAWmBbwF0AXkBfgGDAYgBjIGRAZWBmgGeAaIBpYGpAawBrwGyAbUBt4A+QAVAA4AIQAhABIAHwAmAA0AEAAVAA4AHwAUABYAGwAUAA0AEwAiABkAGQD+ABMAGQAiABIAIQAcABwAIQAVAA0AEAAcABsAGwASABAAIQASABEBAAATABkAIgASACEAHAAcACEAFQANACAAEgAOAB8AEAAVABYAGwAUAHYAEgAfAA4AGwARABYAGwAUAA0AJAAOACEAEgAfABoADgAfABgA/wASABkAIgASACEAHAAcACEAFQANABEAFgAgAA4ADwAZABIAEQEEABEAHwAWABQAFQAhABsAEgAgACAADQAaABIAEQAWACIAGgExABEAHAAfABEAEgAfAA0AFQAcAB8AFgAnABwAGwAhAA4AGQTOABAAHwASAA4AGAATAA4AIAAhAA0AEQAWABsAFgAbABQDPgAQABwAHAAYABoADgAfABgADQAcACIAIQAZABYAGwASBOcADwAiACAAFgAbABIAIAAgAA0AEAASABsAIQASAB8BAgAPAB8AFgAUABUAIQAbABIAIAAgAA0AFQAWABQAFQE4AA8AHAAfABEAEgAfAA0AIwASAB8AIQAWABAADgAZAQEADwAfABYAFAAVACEAGwASACAAIAANAA4AIgAhABwCwAAPABkAIgASACEAHAAcACEAFQANAA4AIgARABYAHAD8AA8ADgAhACEAEgAfACYADQAiABsAGAAbABwAJAAbAz4ADwAcABwAGAAaAA4AHwAYAA0ADwAcAB8AEQASAB8BAwAOAB8AFgAUABUAIQAbABIAIAAgAA0AGQAcACQE4QANAB8AIgAbABAAFQANABEAFgAbABYAGwAUAS4ADQAcAB8AEQASAB8ADQAPABwAIQAhABwAGgG3AA0AGQAiAB8ADQAQABYAHwAQACIAGQAOAB8A+AANAA4AIQAhABIAHwAmAA0ADgAZABIAHwAhBM0ADQAOABgAEgAfACYADQARABYAGwAWABsAFAHAAAwAHwAWABQAFQAhABsAEgAgACAADQAJATAADAAcAB8AEQASAB8ADQAQABwAGQAcAB8BLwAMABwAHwARABIAHwANABAAGQASAA4AHwG/AAwAHwAWABQAFQAhABsAEgAgACAADQAIAb4ADAAfABYAFAAVACEAGwASACAAIAANAAcBvQAMAB8AFgAUABUAIQAbABIAIAAgAA0ABgG8AAwAHwAWABQAFQAhABsAEgAgACAADQAFAbsADAAfABYAFAAVACEAGwASACAAIAANAAQC+wAMACIADwAPABkAEgANABAAFQAOAB8AIQHCAAwAHwAcABgAEgAbAA0AFgAaAA4AFAASAcEADAAfABYAFAAVACEAGwASACAAIAANAAoE5gAMABIADgAQABUADQAOABAAEAASACAAIAE2AAwAHAAfABEAEgAfAA0AIAAhACYAGQASAPoADAAOACEAIQASAB8AJgANABMAIgAZABkBNQAMABwAHwARABIAHwANAB8AFgAUABUAIQE0AAwAHAAfABEAEgAfAA0AHAAiACEAEgAfATIADAAcAB8AEQASAB8ADQAWABsAGwASAB8BMwALABwAHwARABIAHwANABkAEgATACEA+wALAA4AIQAhABIAHwAmAA0AIAAhABEBuAALABkAIgAfAA0AGQAWABsAEgAOAB8BLQAKABwAHwARABIAHwANAA4AGQAZAz8ACgAiABQADQAfABIAHQAcAB8AIQJMAAoAIgAfACAAIQANABoAHAARABIBNwAKABwAHwARABIAHwANACEAHAAdBFEACQAcABwAGAAaAA4AHwAYACAA/QAJABkAIgASACEAHAAcACEAFQFwAAkADgAfAA0AEAAVAA4AHwAhBFIACQAiACAADQAOABkAEgAfACEAwgAJAA4AEAAYACAAHQAOABAAEgG5AAgAGQAiAB8ADQAcABMAEwCAAAgAIgAgABYAGwASACAAIAJRAAgAEgASABsAFQASAB8AEgM9AAgAHAAcABgAGgAOAB8AGATBAAcADgAhABUAIQAiAA8BugAHABkAIgAfAA0AHAAbAzsABgAOABAAGAAiAB0A6gAGAA4AGQAZABwAIQHDAAUAHwAiACAAFQTbAAUADgARABQAEgDDAAUAGQAcABAAGANAAAUAIgAWABkAEQM8AAQAHAAcABgEkgAEABwAGQAhAGoA1gEGATYBYAGKAbQB3gIIAjACWAKAAqgC0AL2AxwDQANkA4gDqgPKA+oECAQmBEQEYgSABJ4EvATaBPgFFgU0BVAFbAWIBaQFwAXcBfgGFAYuBkgGYgZ8BpYGsAbKBuQG/AcUBywHRAdcB3QHjAekB7wH1AfsCAQIHAgyCEgIXgh0CIoIoAi2CMwI4Aj0CQgJHAkwCUQJWAlsCX4JkAmiCbQJxgnYCeoJ/AoOCiAKMApAClAKXgpsCnoKiAqWCqIKrgq6CsYK0greCugK8gr8CwYLEAHQABcAHAAbACEAHwAcABkADQAdABwAFgAbACEADQARACIAHQAZABYAEAAOACEAEgMfABcAFQASABAAGAANAA8AHAAlAA0AHAAiACEAGQAWABsAEgANAA8AGQAOABsAGARUABQAFgAfABAAGQASAA0AGwAcACEAFgATABYAEAAOACEAFgAcABsAIAP+ABQAFQASABAAGAANABAAFgAfABAAGQASAA0AHAAiACEAGQAWABsAEgJBABQAHAAZABkAEgAQACEAFgAcABsAIAANAA8AHAAcABgAGgAOAB8AGAS/ABQADgAbABAAEgAZAA0AIAAQABUAEgARACIAGQASAA0AIAASABsAEQCwABQADgAZABkADQAaABYAIAAgABIAEQANABwAIgAhABQAHAAWABsAFACXABMAFQAOACEADQAPACIADwAPABkAEgANABwAIgAhABkAFgAbABIByQATABIAGwAhABIAHwANABMAHAAQACIAIAANACAAIQAfABwAGwAUAucAEwAcABsAEwAWAB8AGgAOACEAFgAcABsADQAbACIAGgAPABIAHwC1ABMADgAbABAAEgAZAA0AHQAfABIAIAASABsAIQAOACEAFgAcABsCngATABwAGgAdAA4AIAAgAA0AEAAOABkAFgAPAB8ADgAhABYAHAAbA0QAEgAVAB8AHAAaABIADQAfABIADgARABIAHwANABoAHAARABIEVQASABkAHAAgABIAEQANABAADgAdACEAFgAcABsADQAcABMAEwF/ABEAHwASAA4AIQASAA0AGwASACQADQATABwAGQARABIAHwHKABEAEgAbACEAEgAfAA0AEwAcABAAIgAgAA0AJAASAA4AGAQHABEADgAZABIAGwARAA4AHwANACMAFgASACQADQARAA4AJgLnABAAHAAbABMAFgAfABoADgAhABYAHAAbAA0AGwAiABoEGwAPABwAGwAhAA4AEAAhAA0AIAAiAB0AHQAcAB8AIQPLAA8ADgAfABEADQAaABIAGgAPABIAHwAgABUAFgAdA+YADgAcABoAHQAOAB8AEgANAA4AHwAfABwAJAAgAdgADgAfABwAHQANABkADgAbABEAIAAQAA4AHQASAYEADgAOACAAIQANABAAHAAbABsAEgAQACEAEgARBOoADgAVABYAGQARAA0AEwAfABYAEgAbABEAGQAmAXYADgAZABwAIgARAA0AEQAcACQAGwAZABwADgARAH8ADgAcABsAIQAfABwAGQANABAADgAaABIAHwAOA9AADgAOABoAEgAfAA4ADQASABsAFQAOABsAEAASAHcADgAOABkAGQANACEAHAANAA4AEAAhABYAHAAbAC8ADgAZABwAIAASABEADQAQAA4AHQAhABYAHAAbA0IADgAVAA4AGwAUABIADQAVABYAIAAhABwAHwAmBAYADgAOABkAEgAbABEADgAfAA0AIQAcABEADgAmAdoADQAfABwAHQANAB0AHAAfACEAHwAOABYAIQCbAA0AHAAbACEADgAQACEADQAdABUAHAAbABIBzwANABwAGwAhAB8AHAAZAA0AHQAcABYAGwAhAqkADQAVABIAIwAfABwAGwANAB8AFgAUABUAIQCGAA0ADgAZABkADQAfABIAEAASABYAIwASABEB2QANAB8AHAAdAA0AHAAfABYAFAAWABsADgAZAMcADQAcABsAIQASABsAIQANAB0ADgAgACEAEgPKAA0ADgAfABEADQAUABYAEwAhABAADgAfABEBdAAMABkAHAAiABEADQAQABYAHwAQABkAEgHGAAwADgAaABIAHwAOAA0AEwAfABwAGwAhAMUADAAcABsAIQASABsAIQANABAAHAAdACYCqAAMABUAEgAjAB8AHAAbAA0AGQASABMAIQCcAAwAHAAbACEADgAQACEADQAaAA4AFgAZA0MADAAVABIAEAAYAA0AEAAWAB8AEAAZABIBeQAMABkAHAAiABEADQAiAB0AGQAcAA4AEQRWAAwAHAAbABsAEgAQACEAEgARAA0AIQAjAcsACwAcABkAGQASABAAIQAWABwAGwAgBN8ACwAcABsAIQAOABAAIQAZABIAIAAgAJYACwAVAA4AIQANAA8AIgAPAA8AGQASAcgACwAOABoAEgAfAA4ADQAfABwAGQAZAccACwAOABoAEgAfAA4ADQAfABIADgAfAXgACwAZABwAIgARAA0AHgAiABIAIgASAkcACwAfABwAHQANAB8AHAAhAA4AIQASAdsACwAfABwAHQANACAAHgAiAA4AHwASBNkACwASABkAEgAPAB8ADgAhABYAHAAbAMYACwAcABsAIQASABsAIQANABAAIgAhAIUACwAOABkAGQANABoAFgAgACAAEgARA8wACwAOAB8AEQANACEAHwAOACMAEgAZA0cACwAfABIAEQAWACEADQAQAA4AHwARAXUACgAZABwAIgARAA0AEQAcABsAEgCHAAoADgAZABkADQAgAB0AGQAWACEE6QAKABUAFgAZABEADQAQAA4AHwASBNAACgAOAB8ADQAfABIAHQAOABYAHwTPAAoADgAfAA0AHwASABsAIQAOABkAhAAKAA4AGQAZAA0AGgASAB8AFAASAcwACgAcABkAHAAfAA0AGQASABsAIAHFAAoADgAaABIAHwAOAA0ADgAZACEAiQAJABkAEgAOAB8ADQAOABkAGQHXAAkAHwAcAB0ADQATAB8AEgASAdEACQAfABwAHQANAAQACQANAAwBdwAJABkAHAAiABEADQAcABMAEwPeAAkAHAAdACYAHwAWABQAFQAhAIMACQAOABkAGQANABoADgARABIAuAAJABIAGQAZAA0AJAAWABMAFgMeAAkAFQASABAAGAANAA8AHAAlAdQACAAfABwAHQANAAgADQAHAdIACAAfABwAHQANAAYADQAFAYIACAAcABoAHQAiACEAEgAfBBwACAAcABoAHQAfABIAIAAgApYACAAOACEAEgAUABwAHwAmAdYACAAfABwAHQANABEAFgAbAdUACAAfABwAHQANAAoADQAIAIIACAAOABkAGQANABIAGwARAc0ACAAcABkAHAAfABYAJwASAIsACAAcABsAIQAOABAAIQAgAc4ABwAcABoAHQAOAB8AEgQRAAcAHAAaABoAIgAhABIAigAHABwAGgAaABIAGwAhAMgABgAfABIADgAhABIBxAAGAA4AGgASAB8ADgKmAAYADgAbABAAEgAZBOgABgAOACAAFgAbABwDQQAGAA4AEAAVABIAEQNFAAUAGQAOACAAIAKqAAUAGQAcACAAEgFzAAUAGQAcACIAEQKnAAUAFQASABAAGARTAAUADgAgABIAIADEAAUAGQASAA4AHwGAAAQADgAgACEAgQAEAA4AGQAZA0YABAAcABEAEgCIAAQAFQAOACEC/gAEAA4AGAASAdMABAAfABwAHQBDAIgAvADsARwBRAFsAZIBuAHeAgQCKAJMAnACkgK0AtYC9gMWAzYDVgN2A5YDtgPWA/QEEgQwBE4EbASKBKgExgTkBQAFHAU2BVAFagWEBZ4FtgXOBeYF/gYWBiwGQgZYBm4GhAaYBqwGwAbUBuYG9gcGBxYHJAcyB0AHTgdYB2IHbAd0B3wEWwAZAB8AFgAjABIADQATABYAGQASAA0AHwASABsADgAaABIADQAcACIAIQAZABYAGwASBFoAFwAfABYAIwASAA0AEwAWABkAEgANABoAHAAjABIADQAcACIAIQAZABYAGwASBFkAFwASACAAGAAhABwAHQANAA4AEAAQABIAIAAgAA0AEQAWACAADgAPABkAEgARBFwAEwAfABYAIwASAA0AEwAcABkAEQASAB8ADQAiAB0AGQAcAA4AEQRYABMADgAgABUADwAcAA4AHwARAA0AEAAiACAAIQAcABoAFgAnABICWQASABYAHwASABAAIQAWABwAGwAgAA0AIQAfAA4AGwAgABYAIQJYABIAFgAfABIAEAAhABYAHAAbACAADQAfAA4AFgAZACQADgAmAvIAEgAcAA0AGwAcACEADQARABYAIAAhACIAHwAPAA0AHAATABMCwgASABwADQAbABwAIQANABEAFgAgACEAIgAfAA8ADQAOABkAIQEnABEAEgAjABYAEAASAA0AIQAVABIAHwAaABwAIAAhAA4AIQJXABEAFgAfABIAEAAhABYAHAAbACAADQAgACIADwAkAA4AJgLzABEAHAANABsAHAAhAA0AEQAWACAAIQAiAB8ADwANABwAGwLCABAAGwARAA0AEwAcAB8AJAAOAB8AEQAgABkADgAgABUCWAAQABYAHwASABAAIQAWABwAGwAgAA0AIQAfAA4AFgAbAlYAEAAWAB8AEgAQACEAFgAcABsAIAANABMAEgAfAB8AJgJTAA8AFgAfABIAEAAhABYAHAAbACAADQAPABYAGAASAloADwAWAB8AEgAQACEAFgAcABsAIAANACQADgAZABgBhQAPABIAIwASABkAHAAdABIAHwANAA8AHAAOAB8AEQGEAA8AEgAgABgAIQAcAB0ADQAkABYAGwARABwAJAAgAlYADwAWAB8AEgAQACEAFgAcABsAIAANAA8AHAAOACECmAAPABIAHQAOAB8AIQAiAB8AEgANAA8AHAAOAB8AEQTgAA8AEgAZABYAIwASAB8AJgANABEAFgAbABYAGwAUALsADwAcABoADgAWABsADQARABYAIAAOAA8AGQASABEBBgAOABIAIwASABkAHAAdABIAHwANABoAHAARABICVAAOABYAHwASABAAIQAWABwAGwAgAA0ADwAiACACiAAOABYAHwASABAAIQAWABwAGwAgAA0AHwAiABsCwwAOABwADQAbABwAIQANABEAFgAgACEAIgAfAA8EFQAOAB8ADgAUAA0AFgAbABEAFgAQAA4AIQAcAB8BsAAOABIAIwAWABAAEgANACIAGwAYABsAHAAkABsD/wAOABIAGQASACEAEgANABwAIgAhABkAFgAbABID/AAOABIAGQASACEAEgANABMAHAAfABIAIwASAB8CVQAOABYAHwASABAAIQAWABwAGwAgAA0AEAAOAB8BrgANABIAIwAWABAAEgAgAA0AHAAhABUAEgAfBNEADQAWABsAGwASAB8ADQARABYAGwAWABsAFATKAAwAHAAiAA8AGQASAA0ADgAfAB8AHAAkAOQADAASABkAEgAhABIADQAgACQAEgASAB0EAAAMABwAGwASAA0AHAAiACEAGQAWABsAEgSbAAwAJgAbAA4AGgAWABAADQATABIAEgARBNIADAAfACYADQAQABkAEgAOABsAFgAbABQBYgALAB8ADgAUAA0AFQAOABsAEQAZABIBgwALABIAIAAYACEAHAAdAA0AGgAOABAD6QALABwAGwAiACEADQAgABoADgAZABkDSgALABIAIAAQAB8AFgAdACEAFgAcABsD6AALABwAGwAiACEADQAZAA4AHwAUABIAjAAKABYADgAZABIAHwANACAAFgAdAlIACgAWAB8AEgAQACEAFgAcABsAIAPnAAoADgAhABIADQAfAA4AGwAUABIBBQAKAA4AIQAOAA0AIgAgAA4AFAASAawACgASACMAFgAQABIADQAVACIADwLEAAkAHwAWACMAEgANABIAIQAOAsEACQAWACAAEAANABMAIgAZABkDSAAJAA4AIAAVAA8AHAAOAB8AEQRXAAkADgAbABQAEgAfABwAIgAgA00ACAAcABsAEgANAA4AGQAZAd0ABwASACEADgAWABkAIAEHAAcAEgAjABYAEAASACAAjQAHABYADgAZAB0ADgARAv8ABgAcABoADgAWABsDSQAGABIAGQASACEAEgHcAAYAEgAVAA4AJwASAMkABgAfAA4AEwAhACAEwgAEABIAEAAYA0wABAAcABsAEgGGAAQAHAAQABgDSwADABsAIAEIAAMAIwAfBF0AAwAiABwALQBcAIwAtgDeAQYBKAFKAWoBigGqAcoB6AIGAiQCQAJcAngClAKwAsoC5AL+AxYDLgNGA14DdgOOA6QDugPQA+YD+gQOBCAEMgREBFQEYgRuBHoEhgSSBJwEpgPQABcAGwAVAA4AGwAQABIADQAdABUAHAAhABwADQAhAB8ADgAbACAAGQAOACEAEgSmABQAGgAcABcAFgANACEAHwAOABsAIAAdABwAHwAhAA4AIQAWABwAGwSiABMAGgAcABcAFgANABMAHAAcABEADQAPABIAIwASAB8ADgAUABIC7gATABsAFQAOABsAEAASABEADQASABsAEAAfACYAHQAhABYAHAAbAeEAEAAlAB0AHAAgACIAHwASAA0AGgAWABsAIgAgAA0ABQHgABAAJQAdABwAIAAiAB8AEgANABoAFgAbACIAIAANAAQB4gAPACUAHQAcACAAIgAfABIADQAdABkAIgAgAA0ABALFAA8AIwASABsAIQANAA4AIwAOABYAGQAOAA8AGQASApoADwARABYAIQANAA4AIQAhAB8AFgAPACIAIQASACAB4wAPACUAHQAcACAAIgAfABIADQAdABkAIgAgAA0ABQSpAA4AGgAcABcAFgANABIAGgAcACEAFgAcABsAIAHgAA4AJQAdABwAIAAiAB8AEgANABsAEgAUAA0ABAHhAA4AJQAdABwAIAAiAB8AEgANABsAEgAUAA0ABQHkAA0AJQAdABwAIAAiAB8AEgANACcAEgAfABwAKQANAB8AHwAcAB8ADQAcACIAIQAZABYAGwASAooADQARABYAIQANABkAHAAQAA4AIQAWABwAGwSlAA0AGgAcABcAFgANACAAJgAaAA8AHAAZACAEqwANABoAHAAXABYADQAcAA8AFwASABAAIQAgBKQADAAaABwAFwAWAA0AHQASABwAHQAZABIEqgAMABoAHAAXABYADQASACMAEgAbACEAIASjAAwAGgAcABcAFgANABsADgAhACIAHwASBKEACwAaABwAFwAWAA0AEwAZAA4AFAAgBF4ACwAlAB0AGQAcAB8AEgANABwAEwATA/cACwAiAB8AHAANACAAJgAaAA8AHAAZAqwACwAlAB0ADgAbABEADQAaABwAHwASAqsACwAlAB0ADgAbABEADQAZABIAIAAgA08ACwAlABYAIQANACEAHAANAA4AHQAdAo8ACgAjAA0AIAAhAA4AIQAWABwAGwLHAAoAIwASABsAIQANABsAHAAhABICxgAKACMAEgAbACEADQAPACIAIAAmA9YACgAjABIAGwAhAA0AIAASAA4AIQAwAAkAHgAiAA4AGQAWACcAEgAfA1EACQAlACEAEgAbACAAFgAcABsAMQAIACUAHQAZABYAEAAWACEB3wAIACUAHQAcACAAIgAfABIEHwAIABEAFgAhAA0AHAATABMDUAAHACUAHQAZABwAHwASBB4ABgAlAB0ADgAbABEAKAAFAB8AHwAcAB8DTgAFACMAEgAbACEAjgAFABoADgAWABkDzwAFABcAEgAQACEB3gAEABEAFgAhBJwABAAiAB8AHAS7AAMAEAAcAGUAzAEEATwBbgGcAcoB9AIeAkgCcgKaAsIC6gMSAzoDYAOGA6wD0gP4BBwEQARkBIgErATOBPAFEAUwBVAFcAWOBawFygXoBgYGJAZCBl4GegaWBrIGzgbqBwYHIgc8B1YHcAeKB6QHvgfYB/IIDAgkCDwIVAhsCIQInAi0CMwI5Aj6CRAJJgk8CVIJaAl+CZIJpgm6Cc4J4gn2CgoKHgowCkIKVApmCngKigqcCq4KwArSCuQK9gsICxoLKgs4C0YLVAtgC2wLdguAAU0AGwAcAB8AGgAOACEADQAhABIAJQAhABEAFgAfABIAEAAhABYAHAAbAA0AHwANACEAHAANABkBTAAbABwAHwAaAA4AIQANACEAEgAlACEAEQAWAB8AEgAQACEAFgAcABsADQAZAA0AIQAcAA0AHwFsABgAHAAfABoADgAhAA0AGQAWACAAIQANABsAIgAaAA8AEgAfABIAEQANAB8AIQAZAUMAFgAcAB8AGgAOACEADQAWABsAEQASABsAIQANABYAGwAQAB8AEgAOACAAEgFCABYAHAAfABoADgAhAA0AFgAbABEAEgAbACEADQARABIAEAAfABIADgAgABIBRgAUABwAHwAaAA4AIQANABkAFgAgACEADQAPACIAGQAZABIAIQASABEBSwAUABwAHwAaAA4AIQANACAAIQAfABYAGAASACEAFQAfABwAIgAUABUBRwAUABwAHwAaAA4AIQANABkAFgAgACEADQAbACIAGgAPABIAHwASABEBOgAUABwAHwAaAA4AIQANAA4AGQAWABQAGwANABcAIgAgACEAFgATACYBRQATABwAHwAaAA4AIQANABkAFgAbABIADQAgAB0ADgAQABYAGwAUATkAEwAcAB8AGgAOACEADQAOABkAFgAUABsADQAQABIAGwAhABIAHwS9ABMAGQAWAB0ADQAQAA4AGgASAB8ADgANAA4AGwARAB8AHAAWABEB8QATABYAGQAhABIAHwANABAAEgAbACEAEgAfAA0AEwAcABAAIgAgAGwAEwAWAA8AEgAfAA0AGgAOABsAIgAOABkADQAfABIAEAAcAB8AEQE8ABIAHAAfABoADgAhAA0ADgAZABYAFAAbAA0AHwAWABQAFQAhBF8AEgAWABkAEgANABEAHAAkABsAGQAcAA4AEQANABEAHAAbABIAbQASABYADwASAB8ADQAgABoADgAfACEADQAfABIAEAAcAB8AEQFAABIAHAAfABoADgAhAA0AEAAcABkAHAAfAA0AHwASACAAEgAhAHgAEgASAA4AIQAiAB8AEgARAA0AHQAZAA4AJgANABkAFgAgACEBOwARABwAHwAaAA4AIQANAA4AGQAWABQAGwANABkAEgATACEBTgARABwAHwAaAA4AIQANACIAGwARABIAHwAZABYAGwASABEBPwARABwAHwAaAA4AIQANABAAHAAZABwAHwANABMAFgAZABkBQQARABwAHwAaAA4AIQANABAAHAAZABwAHwANACEAEgAlACEB9gARABYAGQAhABIAHwANACEAFgAZACEADQAgABUAFgATACEBTgAQABwAHwAaAA4AIQANACIAGwARABIAHwAZABYAGwASA1QAEAAOACMAHAAfABYAIQASAA0AHAAiACEAGQAWABsAEgKuAA8AIgAZABkAIAAQAB8AEgASABsADQASACUAFgAhBL4ADwAZABYAHQANABAADgAaABIAHwAOAA0AFgAcACADVAAPAA4AIwAcAB8AFgAhABIADQAPABwAHwARABIAHwQdAA8AFgAZACEAEgAfAA0AGQAWACAAIQANAA4AGQAhBOsADgAWACEAGwASACAAIAANABAAEgAbACEAEgAfAfcADgAWABkAIQASAB8ADQAjABYAGwAhAA4AFAASBOwADgAfABIAEgANAA8AHwASAA4AGAATAA4AIAAhAHkADgASAA4AIQAiAB8AEgARAA0AIwAWABEAEgAcAsgADgAcABkAEQASAB8ADQAgAB0AEgAQABYADgAZA9gADgAZABYAFAAVACEADQAhAA4AGAASABwAEwATAfAADgAWABkAIQASAB8ADQAPAA0ADgAbABEADQAkA1kADQAZABYAHQANACEAHAANABMAHwAcABsAIQF6AA0AFgAZABIADQARABwAJAAbABkAHAAOABEBYwANABwAHwAaAA4AIQANACAAFQAOAB0AEgAgAN8ADQAcABsAIQANABEAHAAkABsAGQAcAA4AEQHzAA0AFgAZACEAEgAfAA0AEwAfAA4AGgASACABRAANABwAHwAaAA4AIQANABYAIQAOABkAFgAQAX4ADQAcABkAEQASAB8ADQAgABUADgAfABIAEQHvAA0AFgAZACEAEgAfAA0ADAANAB0AGQAiACABSQAMABwAHwAaAA4AIQANAB4AIgAcACEAEgFIAAwAHAAfABoADgAhAA0AHQAOABYAGwAhA1gADAAZABYAHQANACEAHAANAA8ADgAQABgB8gAMABYAGQAhABIAHwANABEAHwAOABoADgNXAAwAFgAbABEADQAfABIAHQAZAA4AEAASA1YADAAWABsAEQANABYAGwANAB0ADgAUABIBPgAMABwAHwAaAA4AIQANABAAGQASAA4AHwSVAAwAFgAZABIADQAdAB8AEgAgABIAGwAhADIADAAOACAAIQANABMAHAAfACQADgAfABEBPQALABwAHwAaAA4AIQANAA8AHAAZABEBSgALABwAHwAaAA4AIQANACAAFgAnABID1wALABkAFgAUABUAIQANABkADgAbABEBfQALABwAGQARABIAHwANABwAHQASABsB9QALABYAGQAhABIAHwANABsAHAAbABIBewALABYAGQASAA0AIgAdABkAHAAOABED3wALABYAGwAUABIAHwAdAB8AFgAbACEAMwALAA4AIAAhAA0AHwASACQAFgAbABEAygALABYAGQAhABIAHwANABkAFgAgACECuQAKABYAHwAgACEADQAdAA4AFAASAq0ACgAiABkAGQAgABAAHwASABIAGwBiAAoAHAAfACQADgAfABEADQAGAAMB9AAKABYAGQAhABIAHwANABUAEQAfAfkACgAZAA4AIAAVAA0ADgAiACEAHABhAAoAHAAfACQADgAfABEADQAEAAMElwAKABYAIQANACAAEAAfABIAEgAbBMMACQAWAB8AEgAdABkADgAQABIAaAAJABYADwASAB8ADQARACMAHwFPAAkAIgAbABAAIQAWABwAGwAgAfoACQAZAA4AIAAVAA0AHAATABMA6wAJABYAGQASAA0AEAAcAB0AJgBjAAkAHAAfACQADgAfABEADQAIAHUACQAWAA8AEgAfAA0AHQAWABsAaQAJABYADwASAB8ADQAbABIAJAHpAAgAFgAZACEAEgAfAA0ABwHnAAgAFgAZACEAEgAfAA0ABgHmAAgAFgAZACEAEgAfAA0ABQHlAAgAFgAZACEAEgAfAA0ABATcAAgAEgAgACEAFgAjAA4AGQNVAAgAEgASABEADwAOABAAGAH7AAgAGQAOACAAFQANABwAGwHuAAgAFgAZACEAEgAfAA0ADAHtAAgAFgAZACEAEgAfAA0ACwHsAAgAFgAZACEAEgAfAA0ACgNTAAgADgAjABwAHwAWACEAEgKcAAgADgAgACEAEwAcABwAEQHrAAgAFgAZACEAEgAfAA0ACQHqAAgAFgAZACEAEgAfAA0ACADMAAcAHAAfACQADgAfABEB6AAGABYAGQAhABIAHwF8AAYAHAAZABEAEgAfAlsABgAZABYAFAAVACEAjwAFABwAHwAiABoB+AAFABkADgAfABIB/AAEABkAFgAdAMsABAAZAA4AFANSAAQADgAQABIAFgAuAEoAYgB6AJAApgC6AM4A4gD0AQYBFgEmATYBRgFWAWIBbgF6AYYBkgGcAQoADQAdACAADQAbABwAIQANABMAFgAlABIAEQTtAAsAHAAZABMADQAQABwAIgAfACAAEgP4AAsADQAhAB8ADgAbACAAGQAOACEAEgEOAAoAHwAOAB0AFQAWABAADQASAB4DXAAKAB8AHAAiAB0ADQAkABwAHwAYAQkACQAdACAADQATABYAJQASABEDAQAJAB8AHAAiAB0ADQAOABEAEQRhAAkAHwAWABEADQAjABYAEgAkAf8ACAAfABYAEQANABwAEwATAf0ACAAfAA4AEQAWABIAGwAhAgAABwAfABYAEQANABwAGwNaAAcAEgAhAA0ADgAdAB0AzQAHABIAIAAhACIAHwASAYcABwAOABoAEgAdAA4AEQELAAcAHQAgAA0AHAATABMDWwAFAB8ADgARABID4AAFAA4AIwASABkANAAFAA4AGgASACAB/gAFAB8ADgAWABsDAAAFAB8AHAAiAB0E9wAEABwADgAhA9oAAwAWABMAIQBEAGYAiACoAMYA4gD8ARYBLgFGAV4BdgGMAaIBtgHKAdwB7gH+Ag4CHgIuAj4CTgJcAmoCdgKCAo4CmAKiAqwCtgQWABAAHAAfABYAJwAcABsAIQAOABkADQAgAB0AGQAWACEDXgAQABYAFAAVABkAFgAUABUAIQANAB8AEgAaABwAIwASA2EADwAcACIAHwAUABkADgAgACAADQASABoAHQAhACYDYgAOABwAIgAfABQAGQAOACAAIAANABMAIgAZABkDXgANABYAFAAVABkAFgAUABUAIQANABwAEwATADYADAAWABQAFQANAB4AIgAOABkAFgAhACYD0QAMABIAGQAdAA0AHAAiACEAGQAWABsAEgDtAAsAHAAkAA0AIQAcAA0AIwAcACEAEgRjAAsAHAAaABIADQATABYAGQAZABIAEQGxAAsAEgAOABEAIAASACEADQAcABMAEwGJAAsAEgAOABEAIAASACEADQAaABYAEADsAAoAHAAkAA0AIQAcAA0AHwASABQCAwAKABEAHwANACAAIQAfABwAGwAUAWQACQAWABQAFQAZABYAFAAVACEEkAAJABwAGgASAA0AJAAcAB8AGAIEAAgAEQAfAA0AJAASAA4AGATTAAgADgAfABEAJAAOAB8AEgTuAAcAHAAhAA0AIQAiAA8BiAAHABIADgARACAAEgAhADUABwASAA4AHwAWABsAFAIFAAcAEgAOABkAFgAbABQCAQAHABEAHwANABwAEwATA18ABwAWACAAIQAcAB8AJgSdAAYAEgAWABQAFQAhAgIABgARAB8ADQAcABsDYwAFACEAIQAdACAExAAFABwAIgAgABICXAAFABwAIQASABkDXQAEABIAGQAdA9UABAAhACEAHQNgAAQAHAAaABIEYgAEAA4AFgAZAF4AAgARABoANgBmAJIAuADeAQIBJgFKAW4BkAGwAdAB7gIKAiYCQAJaAnQCjgKmAroCzALYAuQC8AL6A9sAFwAbABEAEgAhABIAHwAaABYAGwAOACEAEgANABAAFQASABAAGAANAA8AHAAlAW8AFQAbACAAEgAfACEADQAQABUADgAfACEADQAcACIAIQAZABYAGwASABEEZAASABoADgAUABIAIAASAA4AHwAQABUADQAfABwAGQAZABIAHwIHABIAGgAOABQAEgANAA4AIAAdABIAEAAhAA0AHwAOACEAFgAcAVQAEQAbACAAEgAfACEADQAWABsAIwAWACEADgAhABYAHAAbA+MAEQAaAB0AHAAfACEADgAbACEADQARABIAIwAWABAAEgAgAVIAEQAbACAAEgAfACEADQARAB8AFgAjABIADQATABYAGQASAJEAEQAbACMAEgAfACEADQAQABwAGQAcAB8AIAANABwAEwATA2cAEAAbACMAEgAfACEADQAQABwAGQAcAB8AIAANABwAGwFTAA8AGwAgABIAHwAhAA0AEgAaABwAIQAWABAAHAAbAKwADwAaAB0AHAAfACEADQAQABwAGwAhAA4AEAAhACABUQAOABsAIAASAB8AIQANABAAHAAaABoAEgAbACEAkAANABoAHQAcAB8AIQANABIAJQAdABwAHwAhA2cADQAbACMAEgAfACEADQAQABwAGQAcAB8AIAFWAAwAGwAgABIAHwAhAA0AHQAVABwAIQAcAVAADAAbACAAEgAfACEADQAQABUADgAfACECTwAMABoADgAUABIADQAgABIADgAfABAAFQNlAAwAGwATABwADQAcACIAIQAZABYAGwASAVUACwAbACAAEgAfACEADQAZABYAGwAYAPEACQAbACMAEgAbACEAHAAfACYE3QAIABAAEgAQAB8AEgAOABoAzgAFABsADwAcACUCBgAFABoADgAUABIDZgAFABsAHQAiACEDZAAEABsAEwAcAggAAwAgABwADgAeAEgAcACYAL4A4gEGASgBSAFmAYIBnAGuAcABjQAUABIAJgAPABwADgAfABEADQAOAB8AHwAcACQADQAfABYAFAAVACEBjAATABIAJgAPABwADgAfABEADQAOAB8AHwAcACQADQAZABIAEwAhAYsAEwASACYADwAcAA4AHwARAA0ADgAfAB8AHAAkAA0AEQAcACQAGwGPABIAEgAmAA8AHAAOAB8AEQANAA8ADgAQABgAIAAdAA4AEAASAY4AEQASACYADwAcAA4AHwARAA0ADgAfAB8AHAAkAA0AIgAdAZAAEQASACYADwAcAA4AHwARAA0AEAAOAB0AIAAZABwAEAAYArAAEAASACYADwAcAA4AHwARAA0AEAAcABsAIQAfABwAGQGSAA8AEgAmAA8AHAAOAB8AEQANAB8AEgAhACIAHwAbAZQADgASACYADwAcAA4AHwARAA0AIwAcABYAEAASAZEADQASACYADwAcAA4AHwARAA0AFQAWABEAEgGTAAwAEgAmAA8AHAAOAB8AEQANACEADgAPBMUACAAWABsAFAANAA8AEgARAYoACAASACYADwAcAA4AHwARBO8ABwAWACEAEAAVABIAGwBZALQA5AEUAUABaAGOAbIB1gH6Ah4CQgJmAogCqgLMAu4DDgMuA0wDagOIA6YDxAPiA/4EGgQ2BFIEbgSKBKYEwgTeBPgFEgUsBUYFYAV6BZQFrgXGBd4F9gYOBiYGPgZWBm4GhgacBrIGyAbeBvQHCgceBzIHRgdaB24HggeWB6oHvgfSB+YH+AgKCBwILgg+CE4IXghuCH4IjgicCKoIuAjGCNQI4AjsCPgJAgkMCRYJIAJlABcAHAAQAA4AGQANABAAHAAbACMAEgAbABYAEgAbABAAEgANACAAIQAcAB8AEgQXABcADgAPABIAGQANABYAGgAdABwAHwAhAA4AGwAhAA0AHAAiACEAGQAWABsAEgJsABUAHAAQAA4AGQANABkADgAiABsAEQAfACYADQAgABIAHwAjABYAEAASAmkAEwAcABAADgAZAA0AFAAfABwAEAASAB8AJgANACAAIQAcAB8AEgENABIAHAAQAA4AIQAWABwAGwANACAAEgAOAB8AEAAVABYAGwAUAmgAEQAcABAADgAZAA0AFAAOACAADQAgACEADgAhABYAHAAbAQwAEQAcABAADgAhABYAHAAbAA0AEQAWACAADgAPABkAEgARA+EAEQAWABQAFQAhAA8AIgAZAA8ADQAcACIAIQAZABYAGwASBGYAEQAWAA8AHwAOAB8AJgANAA4AEQARAA0AEAAVABIAEAAYAZYAEQAOAB0AIQAcAB0ADQAQABUAHwAcABoAEgAPABwAHAAYAnYAEQAcABAADgAZAA0AHQAcACAAIQANABwAEwATABYAEAASAncAEAAcABAADgAZAA0AHQAfABYAGwAhAA0AIAAVABwAHQJ4ABAAHAAQAA4AGQANAB8AEgAgACEADgAiAB8ADgAbACECfAAQABwAEAAOACEAFgAcABsADQAVABYAIAAhABwAHwAmAmEAEAAcABAADgAZAA0ADgAhACEAHwAOABAAIQAWABwAGwJ3AA8AHAAQAA4AGQANAB0AHwAWABsAIQAgABUAHAAdBAgADwAOAA8AEgAZAA0AFgAaAB0AHAAfACEADgAbACECagAOABwAEAAOABkADQAVABwAIAAdABYAIQAOABkCcgAOABwAEAAOABkADQAdABUADgAfABoADgAQACYBmAAOAA4AHQAhABwAHQANACQAFgAbABEAHAAkACACZAAOABwAEAAOABkADQAQAA4AHwANACQADgAgABUCYQAOABwAEAAOABkADQAOABAAIQAWACMAFgAhACYCegAOABwAEAAOABkADQAgABUAFgAdAB0AFgAbABQCbQANABwAEAAOABkADQAZABYADwAfAA4AHwAmAD4ADQAWAA8AHwAOAB8AJgANABoAIgAgABYAEAA9AA0AFgAPAB8ADgAfACYADQAPABwAHAAYACADAgANABwAEAAOACEAFgAcABsADQAQABYAIQAmAl8ADQAcABAADgAZAA0ADgAWAB8AHQAcAB8AIQJnAA0AHAAQAA4AGQANABMAGQAcAB8AFgAgACEDaQANAA4ADwASABkADQAcACIAIQAZABYAGwASAnEADQAcABAADgAZAA0AHQAOAB8AGAAWABsAFAJIAA0AFgAbABgAEgARAA0AEAAOABoAEgAfAA4CbwAMABwAEAAOABkADQAaABwAIwAWABIAIADlAAwAHAAkAA0AHQAfABYAHAAfABYAIQAmAl4ADAAOACYAEgAfACAADQAQABkAEgAOAB8CeAAMABwAEAAOABkADQARABYAGwAWABsAFANvAAwAHAAQABgADQAcACIAIQAZABYAGwASAWUADAAWABsAEgAOAB8ADQAgABAADgAZABIE1QAMACIAGwAQABUADQARABYAGwAWABsAFACTAAwAHAAQAA4AIQAWABwAGwANABwAEwATAmsACwAcABAADgAZAA0AFQAcACEAEgAZADwACwAWAA8AHwAOAB8AJgANAA4AEQARAgsACwASAA4AGAANAB8AEgAaABwAIwASAnAACwAcABAADgAZAA0AHAATABMAEgAfAnMACwAcABAADgAZAA0AHQAVABwAGwASA+sACwAWABsAEgANACQAEgAWABQAFQAhAJQACwAcABAADgAhABYAHAAbAA0AHAAbAnQACwAcABAADgAZAA0AHQAWACcAJwAOAmYACwAcABAADgAZAA0AEQAfABYAGwAYAnsACgAcABAADgAZAA0AIQAOACUAFgGXAAoADgAdACEAHAAdAA0AGgAOABACdQAKABwAEAAOABkADQAdABkADgAmA+oACgAWABsAEgANACAAIQAmABkAEgJuAAoAHAAQAA4AGQANABoADgAZABkCYwAKABwAEAAOABkADQAQAA4AEwASAmAACQAcABAADgAZAA0ADgAhABoCEwAJABwAHAAYACAADQAhACQAHAK6AAkADgAgACEADQAdAA4AFAASA24ACQAcABAAGAANABwAHQASABsAvAAJABYAFAAVACEADwAiABkADwISAAkAHAAcABgAIAANABwAGwASAgkACQAOABsAEQAgABAADgAdABIAkgAJABYAIwASAA0AFQASABkAHQRlAAkADgAPABIAGQANABwAEwATAnkACQAcABAADgAZAA0AIAASABICYgAJABwAEAAOABkADQAPAA4AHwC6AAgAFgAgACEADQAOABkAIQDnAAgAFgAbABgADQAcABMAEwNqAAgADgAbABQAIgAOABQAEgIKAAgAEgAOABgADQAOABEAEQIRAAcAHAAcABgAIAANAAkCEAAHABwAHAAYACAADQAIAg8ABwAcABwAGAAgAA0ABwLoAAcAFgAjABIADQAhACMCDQAHABwAHAAYACAADQAGA3AABwAcACYADgAZACEAJgTUAAYAFgAeACIAHAAfAl0ABgAOACYAEgAfACADawAGAA4AIgAbABAAFQGVAAYADgAdACEAHAAdBGcABgAcABQAHAAiACECDgAFABwAHAAYACACFAAFABwAIgAdABIDaAAFAA4ADwASABkAzwAEABYAGwAYADcABAAcABwAHQIMAAQAEgAbACADbQAEABwAEAAYA2wABAAWACAAIQA2AG4AlgC8AOABBAEoAUoBbAGOAa4BzgHuAgwCKgJIAmQCfgKYArICzALkAvwDEgMoAz4DVANqA4ADlAOoA7wD0APkA/gEDAQeBDAEQgRUBGQEdASCBJAEngSqBLYEwgTMBNYE4ATqBPIE+gUCALMAEwAcAA8AFgAZABIADQAgABAAHwASABIAGwANACAAFQAOAB8AEgNxABIADgAfABgAIgAbAB8AEgAOABEADQAaAA4AFgAZAA8AHAAlAH4AEQAWACAAIAASABEADQAjABYAEQASABwADQAQAA4AGQAZAhUAEQAcABsAHAAQABUAHwAcABoAEgANAB0AFQAcACEAHAAgAJcAEQASACAAIAASABsAFAASAB8ADQAcACIAIQAZABYAGwASAD0AEAAmAA0AGQAWAA8AHwAOAB8AJgANAA8AHAAcABgAIAEOABAAIgAZACEAFgAhAB8ADgAQABgADQAOACIAEQAWABwAPgAQACYADQAZABYADwAfAA4AHwAmAA0AGgAiACAAFgAQAWgADwAcABsAEgAhABYAJwAOACEAFgAcABsADQAcABsC/AAPACIAGQAhABYAGQAWABsAEgANABAAFQAOAB8AIQEoAA8AHAAPABYAGQASAA0AEwAfABYAEgAbABEAGQAmADwADgAmAA0AGQAWAA8AHwAOAB8AJgANAA4AEQARAhYADgAcACMAFgASAA0AEAAfABIADgAhABYAHAAbBGkADgAOAB8AGAANAA4AIAANACIAGwAfABIADgARAOAADQAcACMAEgANACEAHAANABYAGwAPABwAJQFYAAwAHAARABIADQAQABwAGgAaABIAGwAhAkoADAAcACMAFgASAA0AEwAWABkAIQASAB8ArQAMAA4AFgAZAA0AHAAiACEAGQAWABsAEgT2AAwAEgASACEAFgAbABQADQAfABwAHAAaAG4ACwAiACAAFgAQAA0AIwAWABEAEgAcAn4ACwAmAA0AGQAcABAADgAhABYAHAAbArAACgAcAB8AEgANABUAHAAfABYAJwFXAAoAEgAfABQAEgANACEAJgAdABICFwAKACIAIAAWABAADQAbABwAIQASASkACgAcAA8AFgAZABIADQAcABMAEwDRAAoADgAfABgAIgAbAB8AEgAOABED7AAKABwAIQAcAB8AEAAmABAAGQASBGoACQASABsAIgANABwAHQASABsEoAAJABIAGwAiAA0ADwAcABwAGAJQAAkAIgAgABYAEAANABwAEwATAVkACQAcABEAEgANABIAEQAWACECsQAJABwAHwASAA0AIwASAB8AIQFhAAkAHAAbABIAJgANABwAEwATAJYACQASACAAIAASABsAFAASAB8DBAAIABwAHAARAA0ADwAOABEEAQAIAA4AJQAWABoAFgAnABIEAgAIABYAGwAWABoAFgAnABIAOQAIABYAEAANABsAHAAbABIAlQAHABIAIAAgAA4AFAASADoABwAWABAADQAcABMAEwS8AAYAIgAgABIAIgAaBGgABgAOAB8AFAAWABsBmQAGABIAGgAcAB8AJgGaAAUAHAAiACAAEgKfAAUAHAAbABIAJgA7AAUAHAAjABYAEgLKAAQAHAAfABIA0AAEAA4AFgAZAq8ABAASABsAIgMDAAQAHAAcABECfQADAA4AHQLJAAMAGgAgADgAAwAWABAEawACAB0AIABCAHAAmgDEAOwBEgE2AVgBeAGYAbYB1AHwAgwCKAJEAmACfAKWArACygLiAvoDEAMkAzgDSgNaA2gDdgOCA4wALAAWABwAIQAWABMAFgAQAA4AIQAWABwAGwANABYAGgAdABwAHwAhAA4AGwAhAwgAFAAcACEAFgATABYAEAAOACEAFgAcABsAIAANAA4AEAAhABYAIwASAwkAFAAcACEAFgATABYAEAAOACEAFgAcABsAIAANAB0ADgAiACAAEgARApcAEwAcACEADQAZABYAIAAhABIAEQANABkAHAAQAA4AIQAWABwAGwMGABIAHAAhABYAEwAWABAADgAhABYAHAAbACAADQAbABwAGwASAwcAEQAcACEAFgATABYAEAAOACEAFgAcABsAIAANABwAEwATAwgAEAAcACEAFgATABYAEAAOACEAFgAcABsAIAANABwAGwT1AA8AHAANABoAEgASACEAFgAbABQADQAfABwAHAAaAhoADwAOACMAFgAUAA4AIQASAA0ADwASABMAHAAfABICywAOABIAIQAkABwAHwAYAA0AGQAcABAAGAASABEAQAAOABwAIQANABYAGwAhABIAHwASACAAIQASABEC8AANABwADQASABsAEAAfACYAHQAhABYAHAAbARIADQAcACQADQAkAA4AGQAZAB0ADgAdABIAHwLvAA0AEgAhACQAHAAfABgADQAQABUAEgAQABgCGwANAA4AIwAWABQADgAhABIADQAbABIAJQAhAwUADQAcACEAFgATABYAEAAOACEAFgAcABsAIAIZAA0ADgAhACIAHwASAA0AHQASABwAHQAZABIAPwAMABIAJAANAB8AEgAZABIADgAgABIAIAEQAAwAEgAhACQAHAAfABgADQAkABYAEwAWAQ8ADAASACEAJAAcAB8AGAANABAAEgAZABkBEwALABwAJAANACQAFgARABQAEgAhACAExgALABYAFAAVACEAIAANACAAIQAOACYCfwAKAA4AIwAWABQADgAhABYAHAAbAOIACQASACUAIQANACQAEgASABgE1gAJABYAFAAVACEAGQAWABMAEgNyAAgAHAAhABIADQAOABEAEQKLAAcAEgAOAB8ADQAaABIAmAAGABwADQAgABYAGgIYAAYADgAhACIAHwASAXEABQAcACEAEgAgAHoABAAcACEAEgERAAMAEwAQAAoAFgA2AFQAcACMAKgAwgDaAPIBBgNzAA8AHQASABsADQAWABsADQAPAB8AHAAkACAAEgAfAukADgAbABEAEgAaAA4AGwARAA0AIwAWABEAEgAcAOYADQAiACEAGQAWABsAEgARAA0AEwAZAA4AFATHAA0AIgAhABEAHAAcAB8ADQAUAB8AFgAZABkEbAANABMAEwAZABYAGwASAA0AIAAVAA4AHwASBAMADAATABMAGQAWABsAEgANAA8AHAAZACED3AALABMAEwAZABYAGwASAA0AHQAWABsDdAALAB0AEgAbAA0AFgAbAA0AGwASACQDdQAJAB0AEgAbAA0AJAAWACEAFQPtAAcAHQAOABAAFgAhACYAZgDOAQYBOAFoAZgByAH4AiYCUgJ8AqYCzgL2Ax4DRgNuA5QDugPgBAYELARSBHYEmgS+BOIFBgUqBUwFbgWQBbIF0gXyBhIGMgZQBm4GjAaqBsgG5gcEByIHQAdeB3wHmge4B9QH8AgMCCgIRAhgCHwImAi0CM4I6AkCCRwJNglQCWoJggmaCbAJxgncCfIKCAoeCjIKRgpaCmwKfgqQCqIKtArGCtgK6Ar4CwgLGAsoCzYLRAtSC2ALbAt4C4QLkAucC6gLtAu+C8gL0gRvABsADgAbABwAHwAOABoADgANAB0AFQAcACEAHAAgAB0AFQASAB8AEgANACAAEgAZABIAEAAhAkIAGAAVABwAIQAcAA0AIAAWACcAEgANACAAEgAZABIAEAAhAA0ADgAQACEAIgAOABkCRAAXABUAHAAhABwADQAgABYAJwASAA0AIAASABkAEgAQACEADQAgABoADgAZABkCzAAXABUAHAAbABIADQAPABkAIgASACEAHAAcACEAFQANACAAHQASAA4AGAASAB8DewAXABIAHwAaAA0AEQASACMAFgAQABIADQAWABsAEwAcAB8AGgAOACEAFgAcABsCQwAXABUAHAAhABwADQAgABYAJwASAA0AIAASABkAEgAQACEADQAZAA4AHwAUABID4gAWABYAEAAhACIAHwASAA0AFgAbAA0AHQAWABAAIQAiAB8AEgANAA4AGQAhA3kAFQASAB8AGgANABAAHAAbACEADgAQACEADQAQAA4AGQASABsAEQAOAB8AQwAUAA4AIgAgABIADQAQABYAHwAQABkAEgANABwAIgAhABkAFgAbABIEbgAUAA4AGwAcAB8ADgAaAA4ADQAdABUAHAAhABwAIAAdABUAEgAfABIAQgATAA4AIgAgABIADQAQABYAHwAQABkAEgANABMAFgAZABkAEgARAiEAEwAOABsAHAAfAA4AGgAOAA0AJAAWABEAEgANAA4AGwAUABkAEgRwABMAEgAfACAAHAAbAA0ADgARABEADQARABYAIAAOAA8AGQASABEARgATABkADgAmAA0AEAAWAB8AEAAZABIADQAcACIAIQAZABYAGwASAh8AEwAOABsAHAAfAA4AGgAOAA0AFQAcAB8AFgAnABwAGwAhAA4AGQL6ABIAFgASAA0AEAAVAA4AHwAhAA0AHAAiACEAGQAWABsAEgARAHAAEgAZAA4AJgAZABYAIAAhAA0ADgARABEADQAQABUAEgAQABgDgAASABYAEAAhACIAHwASAA0AFgAbAA0AHQAWABAAIQAiAB8AEgOCABIAHAAkABIAHwANACAAEgAhACEAFgAbABQAIAANABsAEgAkAEUAEgAZAA4AJgANABAAFgAfABAAGQASAA0AEwAWABkAGQASABEAtgASAA4AIgAgABIADQAdAB8AEgAgABIAGwAhAA4AIQAWABwAGwKMABEAEgAfACAAHAAbAA0AHQAWABsADQAQABYAHwAQABkAEgIgABEADgAbABwAHwAOABoADgANACMAEgAfACEAFgAQAA4AGQRzABEAFgAjABwAIQANACEADgAPABkAEgANABAAFQAOAB8AIQCaABEAHAAfACEADgAPABkAEgANACQAFgATABYADQAcABMAEwN6ABEAEgAfABoADQARAA4AIQAOAA0AIAASACEAIQAWABsAFAIeABEADgAbABwAHwAOABoADgANABMAFgAgABUADQASACYAEgBFABAAGQAOACYADQAQABYAHwAQABkAEgANABMAFgAZABkDewAQABIAHwAaAA0AEQASACMAFgAQABIADQAWABsAEwAcA3kAEAASAB8AGgANABAAHAAbACEADgAQACEADQAQAA4AGQIeABAADgAbABwAHwAOABoADgANABMAFgAgABUAEgAmABIApwAPABUAHAAbABIAGQAWABsAGAANABIAHwAOACAAEgN4AA8AEgAfABoADQAQAA4AGgASAB8ADgANABoAFgAQAs0ADwAVABwAGwASAA0AEwAcAB8AJAAOAB8AEQASABEAqgAPABUAHAAbABIAGQAWABsAGAANACAAEgAhACIAHQL4AA4AFQAcABsAEgANABAADgAZABkADwAOABAAGAR0AA4AHwAWABsAIQANABEAFgAgAA4ADwAZABIAEQMNAA4AEgAcAB0AGQASAA0AHAAiACEAGQAWABsAEgLqAA4AEgAfACAAHAAbAA4AGQANACMAFgARABIAHAImAA4AFgAQACEAIgAfABIADQAOACAADQAdABEAEwMQAA4AEgAfACAAHAAbAA0AHAAiACEAGQAWABsAEgCpAA4AFQAcABsAEgAZABYAGwAYAA0AHwAWABsAFAN/AA4AEgAfABoADQAgABAADgAbAA0AJAAWABMAFgN+AA4AEgAfABoADQAdABUAHAAbABIADQAaACAAFACoAA4AFQAcABsAEgAZABYAGwAYAA0AGQAcABAAGACrAA4AHwASACAAEgAbACEADQAhABwADQAOABkAGQPvAA4AHwASABQAGwAOABsAIQANACQAHAAaAA4AGwRxAA4AFQAcABsAEgANABEAFgAgAA4ADwAZABIAEQN8AA0AEgAfABoADQAWABEAEgAbACEAFgAhACYC9AANAB8AFgAcAB8AFgAhACYADQAVABYAFAAVAZsADQAVABwAGwASAA0ADgAbABEAHwAcABYAEQIlAA0AFQAcACEAHAANABkAFgAPAB8ADgAfACYCzgANABUAHAAbABIADQAWABsADQAhAA4AGQAYA9kADQAZAA4AJgANABMAHAAfAA0AJAAcAB8AGARyAA0AFQAcABsAEgANABIAGwAOAA8AGQASABEAagANABkADgAmABkAFgAgACEADQAdABkADgAmAZ4ADQAVABwAGwASABkAFgAbABgADQAcABMAEwLRAAwAFQAcABsAEgANAB0ADgAiACAAEgARAtAADAAVABwAGwASAA0AGgAWACAAIAASABECzwAMABUAHAAbABIADQAZABwAEAAYABIAEQGcAAwAFQAcABsAEgANABYAHQAVABwAGwASAiQADAAVABwAIQAcAA0AEAAOABoAEgAfAA4ARwAMABkADgAmABkAFgAgACEADQAOABEAEQJLAAwAFQAcACEAHAANABMAFgAZACEAEgAfAa0ACwAcACQAEgAfAA0AFgAbAB0AIgAhAiMACwAVABwAIQAcAA0ADgAZAA8AIgAaBKgACgASABwAHQAZABIADQAOABkAIQMPAAoAEgAfACAAHAAbAA0ADgARABEARAAKABkADgAmAA0ADgAfAB8AHAAkAnwACgASAB8AIAAcABsADQAdABYAGwMLAAoADgAfACEAJgANABoAHAARABIDfQAKABIAHwAaAA0AGgASABEAFgAOAvUACQAcACQAEgAfAA0AHAATABMBnQAJABUAHAAbABIAGQAWABsAGAL5AAkAFgASAA0AEAAVAA4AHwAhAxEACAAZACIAIAANABwAGwASAoAACAAWABsADQARAB8AHAAdAicACAAcAB8AIQAfAA4AFgAhBKcACAAcACAAIQANAA4AEQARAh0ACAAOABsAHAAfAA4AGgAOA/YACAAOABsADQAhABwAHAAZA3YACAAOABQAEgAjABYAEgAkA3cABwAOACYAGgASABsAIQFaAAcAIgAPABkAFgAgABUCHAAHAA4AGQASACEAIQASA4EABwAcABkAJgAaABIAHwRtAAcADgARABEAFgAbABQEngAGABwAGQAWABAAJgMOAAYAEgAfACAAHAAbAwwABgASABwAHQAZABIDEwAGACIADwAZABYAEAODAAUAHwAWABsAIQLrAAUAHAAkABIAHwIiAAUAFQAcACEAHAKBAAUAGQAOABAAEgBBAAUADgAiACAAEgMKAAUADgAUABIAIACZAAUAFQAcABsAEgTwAAQAHAAcABkDEgAEABwAGQAZBNcABAAOAB8AGAPuAAQAEgAhACAABwAQADwAZACEAKQAwADYAJsAFQAiABYAEAAYAA0AEAAcABsAIQAOABAAIQAgAA0AEQAWAA4AGQASAB8AnAATACIAFgAQABgADQAQABwAGwAhAA4AEAAhACAADQAaAA4AFgAZAHEADwAiABIAIgASAA0AHQAZAA4AJgANABsAEgAlACEDhQAPACIAEgAgACEAFgAcABsADQAOABsAIAAkABIAHwOEAA0AIgASAB8AJgANAA8AIgAWABkAEQASAB8ASQALACIAEgAiABIADQAaACIAIAAWABAASAAFACIAEgAiABIAOAByAKAAzAD4ASIBTAF2AZwBwAHkAgYCKAJIAmgChgKkAsIC3gL6AxYDMgNMA2YDgAOaA7IDygPiA/oEEAQmBDwEUARkBHgEjASgBLQExgTYBOoE+gUKBRoFKgU4BUYFVAViBXAFfgWMBZgFpAWuBbgDIAAWAA4AEQAWABwADQAPACIAIQAhABwAGwANACIAGwAQABUAEgAQABgAEgARANUAFQASABoAHAAjABIADQAQABYAHwAQABkAEgANABwAIgAhABkAFgAbABICKQAVABwAIQAOACEAEgANAAwAAwANABEAEgAUAB8AEgASACAADQAQABAAJAR7ABQAEgAdABkADgAmAA0AEAAWAB8AEAAZABIADQATABYAGQAZABIAEQP5ABQAEgAaABwAIwASAA0AIAAVABwAHQAdABYAGwAUAA0AEAAOAB8AIQMhABQADgARABYAHAANAA8AIgAhACEAHAAbAA0AEAAVABIAEAAYABIAEQQJABIAEgAgACEAHAAfABIADQATAB8AHAAaAA0AIQAfAA4AIAAVAHIAEQASABoAHAAjABIADQATAB8AHAAaAA0AHgAiABIAIgASA/AAEQASABAAHAAfABEADQAjABwAFgAQABIADQAcACMAEgAfAyAAEAAOABEAFgAcAA0ADwAiACEAIQAcABsADQAcABMAEwR4ABAAEgAaABwAIwASAA0AGgAcABEAEgAfAA4AIQAcAB8CgwAPABIAIAAhAA4AIgAfAA4AGwAhAA0AGgASABsAIgMhAA8ADgARABYAHAANAA8AIgAhACEAHAAbAA0AHAAbAigADgASABoAHAAjABIADQAfABIAEQANABIAJgASA/EADgAcACIAGwARABIAEQANABAAHAAfABsAEgAfA4gADgASAB0AHAAfACEADQAdAB8AHAAPABkAEgAaANQADQASABoAHAAjABIADQAQABYAHwAQABkAEgR6AA0AEgAdABIADgAhAA0AHAAbABIADQAcABsASwANABIAEAASABsAIQANAA4AEAAhABwAHwAgBHUADQAOABYAGQAkAA4AJgANAA4AGQASAB8AIQP6AAwAEgAgACEAHAAfABIADQAdAA4AFAASAisADAAcACEADgAhABIADQAfABYAFAAVACEE2AAMAA4AGgASABsADQARABYAGwAWABsAFATxAAwAHAAcABoADQAgABIAHwAjABYAEAASAioACwAcACEADgAhABIADQAZABIAEwAhAoIACwAOACEAEgANAB8AEgAjABYAEgAkAJ0ACwAWABsAFAANACMAHAAZACIAGgASBHcACwASABoAHAAjABIADQARABwAGwASAOgACgASAB0AHAAfACEADQAcABMAEwBNAAoAEgAdABIADgAhAA0AHAAbABICjgAKABIAIAAhAA4AIgAfAA4AGwAhAGUACQASAB0AGQAOACYADQAGAAMAZAAJABIAHQAZAA4AJgANAAQAAwDXAAkAEgAdABkAJgANAA4AGQAZBHYACQASABAAHAAaABoAEgAbABEC8QAJACMADQAVABwAHAAYACIAHQR5AAkAEgAdABIADgAhAA0AHAAbBHwACAASACAAEgAhAA0AIQAjAGYACAASAB0AGQAOACYADQAIALEACAAgACAADQATABIAEgARA4YABwASABAAEgAWAB0AIQPSAAcAEgAcAB8AEQASAB8DiQAHABIAIAAhABwAHwASArIABwASABMAHwASACAAFQDTAAYAEgAaABwAIwASAZ8ABgAcACIAIQASAB8DhwAGABIAEQASABIAGgBMAAYAEgAdABIADgAhAE4ABgASAB0AGQAOACYA2AAGABIAHQAcAB8AIQPyAAYAHAAkABYAGwAUANYABQASAB0AGQAmAEoABQAOABEAFgAcANIABAASABEAHAOKAAQAHAAcABoEYAADACEAIQCdATwBlAHMAf4CMAJiApQCxgL2AyYDVgOEA7ID4AQOBDwEagSYBMYE8gUeBUoFdgWiBc4F+AYiBkwGdgagBsgG8AcYB0AHaAeOB7QH2gf+CCIIRghqCI4IsgjWCPoJHglCCWYJiAmqCcwJ7goOCi4KTgpuCo4KrgrOCu4LDAsqC0gLZguEC6ILwAveC/wMGAw0DFAMbAyIDKQMwAzcDPgNFA0wDUwNaA2EDaANvA3YDfIODA4mDkAOWg50Do4Opg6+DtYO7A8CDxgPLg9ED1oPcA+GD5wPsg/ID94P9BAKECAQNhBKEF4QchCGEJoQrhDCENQQ5hD4EQoRHBEuEUARUBFgEXARgBGQEaARsBG+EcwR2hHoEfYSBBISEh4SKhI2EkISThJaEmYScBJ6EoQSjhKYEqISrBK0ErwBGwArABYAFAAbAA4AGQANABAAEgAZABkAIgAZAA4AHwANABAAHAAbABsAEgAQACEAEgARAA0AGwAcAA0AFgAbACEAEgAfABsAEgAhAA0ABwANAA8ADgAfAxoAGwASABsAIQAWABoAEgAbACEADQAjABIAHwAmAA0AEQAWACAAIAAOACEAFgAgABMAFgASABEBGQAYABIAIQAhABYAGwAUACAADQAgACYAIAAhABIAGgANABEADgAmABEAHwASAA4AGgOWABgAEgAhACEAFgAbABQAIAANABYAGwAdACIAIQANABAAHAAaAB0AHAAgABYAIQASA5UAGAASACEAIQAWABsAFAAgAA0AFgAbAB0AIgAhAA0AEAAcABoAHQAcABsAEgAbACEDGwAYABIAGwAhABYAGgASABsAIQANACMAEgAfACYADQAgAA4AIQAWACAAEwAWABIAEQK3ABgAIgAPABEAFgAfABIAEAAhABwAHwAmAA0ADgAfAB8AHAAkAA0AHwAWABQAFQAhArYAFwAiAA8AEQAWAB8AEgAQACEAHAAfACYADQAOAB8AHwAcACQADQAZABIAEwAhA48AFwASACEAIQAWABsAFAAgAA0ADwAOABAAGAAiAB0ADQAfABIAIAAhABwAHwASALkAFwASABsAIQAWABoAEgAbACEADQAgAA4AIQAWACAAEwAWABIAEQANAA4AGQAhAKEAFgAhAA4AJgANAB0AHwAWABoADgAfACYADQAZAA4AGwARACAAEAAOAB0AEgCfABYAIQAOACYADQAQACIAHwAfABIAGwAhAA0AGQAOABsAEQAgABAADgAdABIDlAAWABIAIQAhABYAGwAUACAADQAWABsAHQAiACEADQAOABsAIQASABsAGwAOASAAFgAWABQAGwAOABkADQAkABYAEwAWAA0ABwANAA8ADgAfAA0AGQAcABAAGAEcABYAFgAUABsADgAZAA0AEAASABkAGQAiABkADgAfAA0AGwAcAA0AIAAWABoEBAAWACQADgAdAA0AFQAcAB8AFgAnABwAGwAhAA4AGQANABAAFgAfABAAGQASBAoAFgAiAB0AEgAfACMAFgAgABIAEQANACIAIAASAB8ADQAQABYAHwAQABkAEgMXABYAEgAbACEAFgAaABIAGwAhAA0AEQAWACAAIAAOACEAFgAgABMAFgASABEDjgAVABIAIQAhABYAGwAUACAADQAOAB0AHQAZABYAEAAOACEAFgAcABsAIACgABUAIQAOACYADQAQACIAHwAfABIAGwAhAA0AHQAcAB8AIQAfAA4AFgAhARoAFQAWABQAGwAOABkADQAQABIAGQAZACIAGQAOAB8ADQAHAA0ADwAOAB8AogAVACEADgAmAA0AHQAfABYAGgAOAB8AJgANAB0AHAAfACEAHwAOABYAIQOYABUAEgAhACEAFgAbABQAIAANABYAGwAdACIAIQANACAAIwAWABEAEgAcARQAFQAQAB8AEgASABsADQAZABwAEAAYAA0AGQAOABsAEQAgABAADgAdABIChQAUACEAHAAfABIADQAaAA4AGQAZAA0AEQAWAB8AEgAQACEAHAAfACYDqgAUACQADgAdAA0AIwASAB8AIQAWABAADgAZAA0AEAAWAB8AEAAZABIBFgAUABAAHwASABIAGwANABkAHAAQABgADQAfABwAIQAOACEAFgAcABsBFQAUABAAHwASABIAGwANABkAHAAQABgADQAdABwAHwAhAB8ADgAWACEBHQAUABYAFAAbAA4AGQANABAAEgAZABkAIgAZAA4AHwANABsAIgAZABkDGQATABIAGwAhABYAGgASABsAIQANACAADgAhABYAIAATABYAEgARAR4AEwAWABQAGwAOABkADQAQABIAGQAZACIAGQAOAB8ADQAcABMAEwOXABMAEgAhACEAFgAbABQAIAANABYAGwAdACIAIQANABUAEQAaABYDkgATABIAIQAhABYAGwAUACAADQAPAB8AFgAUABUAIQAbABIAIAAgASoAEwAWABQAGwAOABkADQAQABIAGQAZACIAGQAOAB8ADQAOABkAIQSzABIAHQAcAB8AIQAgAA0AGgAcACEAHAAfACAAHQAcAB8AIQAgA5AAEgASACEAIQAWABsAFAAgAA0ADwAZACIAEgAhABwAHAAhABUDpwASACIAHQASAB8AIwAWACAAHAAfAA0ADgAQABAAHAAiABsAIQCvABEAIQAcAB0ADQAgABAAHwASABIAGwANACAAFQAOAB8AEgOZABEAEgAhACEAFgAbABQAIAANABwAIwASAB8AIAAQAA4AGwEfABEAFgAUABsADgAZAA0AJAAWABMAFgANAAcADQAPAA4AHwSBABEAIQAOABAAGAASABEADQAPAA4AHwANABAAFQAOAB8AIQS3ABEAHQAcAB8AIQAgAA0AIwAcABkAGQASACYADwAOABkAGQOrABEAJgAgACEAEgAaAA0AIgAdABEADgAhABIADQAOABkAIQMYABEAEgAbACEAFgAaABIAGwAhAA0AGwASACIAIQAfAA4AGQSsABEAHQAcAB8AIQAgAA0ADwAOACAAGAASACEADwAOABkAGQOTABEAEgAhACEAFgAbABQAIAANABIAIQAVABIAHwAbABIAIQP7ABEAHQASAA4AGAASAB8ADQAbABwAIQASACAADQAcABMAEwBzABEAGQAcACQADQAaABwAIQAWABwAGwANACMAFgARABIAHASTABAAEgAbABEADQAOABsAEQANAA4AHwAQABUAFgAjABIDqwAQACYAIAAhABIAGgANACIAHQARAA4AIQASAA0AIQAjA6oAEAAkAA4AHQANACMAEgAfACEADQAQABYAHwAQABkAEgOSABAAEgAhACEAFgAbABQAIAANABEAFgAgAB0AGQAOACYBXAAPACEAHwAWABgAEgAhABUAHwAcACIAFAAVAA0AIATLAA8AHQAcAB8AIQAgAA0ADwAOACAAEgAPAA4AGQAZBLkADwAdABwAHwAhACAADQAVAA4AGwARAA8ADgAZABkDoAAPABUAHAAdAB0AFgAbABQADQAPAA4AIAAYABIAIQEXAA8AEAAfABIAEgAbAA0AHwAcACEADgAhABYAHAAbBK8ADwAdABwAHwAhACAADQATABwAHAAhAA8ADgAZABkDnAAPABIAIQAhABYAGwAUACAADQAfABIAGgAcACEAEgEhAA8AFgAUABsADgAZAA0AJAAWABMAFgANABwAEwATBK4ADgAdABwAHwAhACAADQASACAAHQAcAB8AIQAgAtMADgAWABoADQAQAA4AHwARAA0ADgAZABIAHwAhA5sADgASACEAIQAWABsAFAAgAA0AHQAcACQAEgAfA5oADgASACEAIQAWABsAFAAgAA0AHQAVABwAGwASBK0ADgAdABwAHwAhACAADQAQAB8AFgAQABgAEgAhBLoADgAdABwAHwAhACAADQAYAA4ADwAOABEAEQAWBIQADgAkABYAIQAQABUADQAOABAAEAAcACIAGwAhAFUADgAiAB8AHwAcACIAGwARAA0AIAAcACIAGwARA50ADgASACEAIQAWABsAFAAgAA0AIwAcABYAEAASAk0ADQAVACIAIQAhABIAHwANACAAHQASABIAEQOhAA0AFQAcAB0AHQAWABsAFAANABAADgAfACEE8wANABoAHAAYABYAGwAUAA0AHwAcABwAGgAgAi8ADQAkABYAIQAQABUADQAQAA4AGgASAB8ADgBRAA0AGAAWAB0ADQAdAB8AEgAjABYAHAAiACAC2QANACYAIAAhABIAGgANACIAHQARAA4AIQASBLgADQAdABwAHwAhACAADQAhABIAGwAbABYAIAS1AA0AHQAcAB8AIQAgAA0AIAAcABAAEAASAB8AbwANACIADwAgABAAHwAWAB0AIQAWABwAGwAgAtcADQAmABsAEAANABEAFgAgAA4ADwAZABIAEQCeAA0AHQASAA4AGAASAB8ADQAdABUAHAAbABIEsQANAB0AHAAfACEAIAANABUAHAAQABgAEgAmA6IADQAdABIADgAYABIAHwANABsAHAAhABIAIAGlAA0AHQASAA4AGAASAB8ADQAUAB8AHAAiAB0AXwANABwAHwAhAA0ADwAmAA0ADgAZAB0AFQAOA5EADQASACEAIQAWABsAFAAgAA0AEAASABkAGQSRAA0AEAAVABIAEQAiABkAEgANACAAEgAbABEEtAAMAB0AHAAfACEAIAANAB8AIgAUAA8AJgIwAAwAJAAWACEAEAAVAA0AIwAWABEAEgAcAyQADAAhAA4AHwANABwAIgAhABkAFgAbABIC2AAMACYAGwAQAA0AHQAfABwADwAZABIAGgCuAAwAEAAfABIAEgAbAA0AIAAVAA4AHwASAW0ADAAQAA4AIQAhABIAHwANAB0AGQAcACEEmAAMAA4AIwASABEADQAgABIADgAfABAAFQSwAAsAHQAcAB8AIQAgAA0AFAAcABkAEwMkAAsAIQAOAB8ADQAPABwAHwARABIAHwTJAAsAHgAiAA4AHwASAA0AEwAcABwAIQGjAAoAGgAOAB8AIQAdABUAHAAbABIDowAKAB0AEgAZABkAEAAVABIAEAAYAi0ACgAhAB8ADgAWABQAFQAhABIAGwTIAAoAFgAbABQAGQASAA0ADwASABEEfwAKABUAIgATABMAGQASAA0AHAAbAv0ACgAVABwAJAANABAAFQAOAB8AIQDaAAoAEgAZABIAEAAhAA0ADgAZABkBGAAKABEADQAgACEAHAAfAA4AFAASAWYACgAVABwAHwAhAA0AIQASACUAIQSZAAoAIQAcAB8AEgATAB8AHAAbACEEsgAKAB0AHAAfACEAIAANABoAGgAOAKMACgAkAA4AHQANABAADgAZABkAIAOoAAoAJAAOAB0ADQAVABwAHwAWACcC1QAKABoAIAANABMADgAWABkAEgARApAACgAhAB8AEgASACEAIwAWABIAJATyAAoAGgAcABgAEgANABMAHwASABIDIwAJACEADgAfAA0AFQAOABkAEwBQAAkAGAAWAB0ADQAbABIAJQAhAVsACQAdAA4AEAASAA0ADwAOAB8AVAAJACIADwAhABYAIQAZABIAIAOpAAkAJAAOAB0ADQAjABIAHwAhAiwACQAZABYAEQASACAAFQAcACQChAAJAA4AIQASABkAGQAWACEAEgGiAAgAFgAaAA0AEAAOAB8AEQSfAAgAJgAbABAADQAOABkAIQOLAAgAEAAVABIAEQAiABkAEgOfAAgAFQAcAB0ADQAhACQAHAONAAgAEgAhACEAFgAbABQAIADpAAgADgAjABIADQAOABkAIQGhAAgAEgAQACIAHwAWACEAJgLSAAcAEQANABAADgAfABEBpAAHAB0AEgAOABgAEgAfAE8ABwAVACIAEwATABkAEgGgAAcAEAAOABsAGwASAB8EGgAHABIAFAAaABIAGwAhA6YABwAiAA8AFwASABAAIQEiAAcAIQAcAB8ADgAUABIEtgAGAB0AHAAfACEAIASCAAYAIQAfABIADgAaApEABgAiAA8AJAAOACYAUgAGABsAHAAcACcAEgOMAAYAEgAOAB8AEAAVBH4ABgAVABYAEgAZABEDFAAGABAAFQAcABwAGQSAAAUAHQASABIAEQOlAAUAIQAcAB8AEgOkAAUAIQAOAB8AIAMVAAUAFQAOAB8AEgSDAAUAJAAWAB0AEgFuAAUAEAAcAB8AEgIuAAUAIQAmABkAEgBTAAQAIQAcAB0DIgAEACEADgAfANwABAAcAB8AIQDbAAQAEgAbABEC1gAEACYAGwAQANkABAAOACMAEgOeAAQAFQAcAB0E9AADAB0ADgLUAAMAGgAgBH0AAgARAEEAhAC4AOgBFAE+AWQBigGwAdQB9gIYAjYCVAJyApACrgLMAuoDBgMiAz4DWgN2A5ADqgPCA9oD8gQKBCIEOgRQBGYEfASQBKQEuATMBOAE9AUIBRwFLgVABVIFZAV2BYYFlgWmBbYFxgXUBeIF7gX6BgYGEgYcBiYGMAY6BkIGSgZSApQAGQAfAA4AGwAgABMAEgAfAA0AJAAWACEAFQAWABsADQAOAA0AIAAhAA4AIQAWABwAGwQNABcAEgAlACEADQAfABwAIQAOACEAFgAcABsADQAOABsAFAAZABIAEQAcACQAGwQOABUAEgAlACEADQAfABwAIQAOACEAFgAcABsADQAOABsAFAAZABIAIgAdBAwAFAASACUAIQANAB8AHAAhAA4AIQASAA0AIwASAB8AIQAWABAADgAZBIYAEgAVACIAGgAPAA0AEQAcACQAGwANABwAEwATAA0ADgAZACEEEAASABIAJQAhAA0AHwAcACEADgAhABYAHAAbAA0AGwAcABsAEgQPABIAEgAlACEADQAfABwAIQAOACEAFgAcABsADQARABwAJAAbApsAEQAfAA4AGwAgABYAIQANABIAGwAhABIAHwASACUAFgAhA7gAEAAfABIAGwARABYAGwAUAA0AGwASACIAIQAfAA4AGQSHABAAFQAiABoADwANACIAHQANABwAEwATAA0ADgAZACEE2gAOABUAEgAOACEAEgAfAA0AEAAcABoAEgARACYDsQAOABUAIgAaAA8AIAANACIAHQANABEAHAAkABsDHAAOABUAIgAaAA8ADQARABwAJAAbAA0ADgAZACEECwAOABIAJQAhAA0AHwAcACEADgAhABIADQAiAB0E4gAOAA4AGAASABwAIgAhAA0AEQAWABsAFgAbABQBpwAOAA4ADwAZABIAIQANAA4AGwARAB8AHAAWABEDrQAOAA4ADwANACIAGwAgABIAGQASABAAIQASABEC2wANABYAGgASAA0AIQAcAA0AGQASAA4AIwASA7cADQAfABIAGwARABYAGwAUAA0AEQAcACQAGwO4AA0AHwASABsAEQAWABsAFAANABMAGQAOACEDuwANACIAHwAbABIAEQANABYAGwANABsAHAAhA7UADQAfAA4AEAAYAA0AEAAVAA4AGwAUABIAIALaAAwADgAdAA0ADgAbABEADQAdABkADgAmAx0ADAAVACIAGgAPAA0AIgAdAA0ADgAZACEBZwALABIAJQAhAA0AEwAWABIAGQARACACnQALAB8AFgAdAA0AHAAfABYAFAAWABsDuQALAB8AEgAbABEAFgAbABQADQAiAB0EigALACQAHAANACQAFQASABIAGQASAB8BagALAA4ADwAZABIADQAQABUADgAfACEA3QALABIAJQAhAA0AEwAcAB8AGgAOACEDrwAKABUAIgAaAA8ADQARABwAJAAbBIgACgAcABQAFAAZABIADQAcABMAEwGoAAoADgAPABkAEgAhAA0AGgAOABADugAJACIAHwAbABIAEQANABYAGwPkAAkAHAAiABAAFQANAA4AHQAdBIkACQAcABQAFAAZABIADQAcABsCMQAJAA4AFAANABMADgAQABIAIAI5AAkAHwAOABsAIAATABwAHwAaAjcACQAWABoAEgAfAA0AHAATABMCMwAJABYAGgASABkADgAdACAAEgO2AAkAHwAOABsAIAAZAA4AIQASA/MACAAWABoAEgAZABYAGwASAjgACAAcABsADgAZABYAIQAmAjQACAAWABoAEgAfAA0ABAADA64ACAAVABIADgAhABIAHwAgA7AACAAVACIAGgAPAA0AIgAdAjIABwASACUAIQAiAB8AEgCkAAcAEgAlACEAIAAaACAChgAHABIAHwAfAA4AFgAbAjUABwAWABoAEgAfAA0ABgKHAAcAHwAOABMAEwAWABAC9gAGACMADQAcABMAEwGmAAYADgAPABkAEgAhAjYABQAWABoAEgAfApIABQAfAA4AFgAbA7MABQAcABEADgAmAWkABQAWACEAGQASA7QABAAcABkAGQGpAAQAHAAmACACkwAEAB8ADgAaAjoABAAiABsAEgSFAAMADgAUA7IAAwAcABADrAADAA4ADwGqAAIAIwAIABIAKgBCAFoAcgCGAJQAngSLAAsAHQAZABwADgARAA0AEwAWABkAEgC3AAsAGwAgACIADwAgABAAHwAWAA8AEgK0AAsAGwATABwAGQARAA0AGgAcAB8AEgKzAAsAGwATABwAGQARAA0AGQASACAAIADhAAkAGwAOAB8AEAAVABYAIwASA/QABgAdABEADgAhABIA3gAEABsAEQAcASMAAwAgAA8AKQBUAIAArADSAPgBGgE8AVwBegGYAbYB0gHuAgoCJgJAAloCcgKKAqICugLSAuoDAgMYAy4DRANaA3ADhgOcA7IDxgPaA+4EAgQWBCgEOgRMBF4BXgAVABIAHwAhABYAEAAOABkADQAOABkAFgAUABsADQAQABIAGwAhABIAHwFdABUAEgAfACEAFgAQAA4AGQANAA4AGQAWABQAGwANAA8AHAAhACEAHAAaBN4AEgAcABkAIgAbACEAEgASAB8ADQAOABAAIQAWACMAFgAgABoBXwASABIAHwAhABYAEAAOABkADQAOABkAFgAUABsADQAhABwAHQBWABAAFgARABIAHAANABAAHAAZABkAEgAQACEAFgAcABsCOwAQABYAEgAkAA0AEAAcABoAEwAcAB8AIQAOAA8AGQASAa8ADwAWABEAEgAcABQADgAaABIADQAOACAAIAASACEDyQAOABYAIAAWAA8AFgAZABYAIQAmAA0AHAATABMEGQAOABwAFgAQABIADQAcACMAEgAfAA0AHAATABMEGAAOABIAHwAhABYAEAAOABkADQAgAB0AGQAWACEAVgANABYAEQASABwADQAZABYADwAfAA4AHwAmA78ADQAWABIAJAANABAADgAfABwAIgAgABIAGQPCAA0AFgASACQADQAVABIADgARABkAFgAbABIDvAANABIAHwAWABMAFgASABEADQAiACAAEgAfAFgADAAWABEAEgAcABAADgAaAA0AHAATABMCPAAMABYAEgAkAA0AEAAcABoAHQAOABAAIQPAAAsAFgASACQADQAQABwAGQAiABoAGwB8AAsAFgARABIAHAANABkADgAPABIAGQPEAAsAFgASACQADQAaABwAEQAiABkAEgO9AAsAFgASACQADQAOABQAEgAbABEADgBaAAsAHAAZACIAGgASAA0AGgAiACEAEgBZAAsAHAAZACIAGgASAA0AEQAcACQAGwPGAAsAFgASACQADQAgACEAHwASAA4AGgBbAAoAHAAZACIAGgASAA0AHAATABMEjAAKABYAEgAkAA0AFgAbAA0ADgAfAHsACgAWABEAEgAcAA0AEAAOABkAGQO+AAoAFgASACQADQAOAB8AHwAOACYDyAAKABYAIAAWAA8AFgAZABYAIQAmAt0ACgAcABYAEAASAA0AEAAVAA4AIQI7AAoAFgASACQADQAQABwAGgATACYDxQAKABYAEgAkAA0AHgAiABYAGQAhA8MACQAWABIAJAANABkAFgAgACEAXAAJABwAGQAiABoAEgANACIAHQClAAkAHAAWABAAEgAaAA4AFgAZA8cACQAWABIAJAANACQAEgASABgC3AAJABYADwAfAA4AIQAWABwAGwPBAAgAFgASACQADQARAA4AJgBXAAgAFgARABIAHAAQAA4AGgJFAAgAFgAUABsAEgAhACEAEgLeAAgAHQAbAA0AGQAcABAAGACmAAcAHQAbAA0AGAASACYAIQBEAGoAjgCyANIA8gESATABTAFoAYQBoAG6AdIB5gH6Ag4CIgI2AkgCWgJsAn4CkAKgArACwALQAtwC6ALyAvwDBASWABIAHAAfABgAIAAdAA4AEAASACAADQAcACIAIQAZABYAGwASBJQAEQAcAB8AGAAgAB0ADgAQABIAIAANABMAFgAZABkAEgARA8sAEQAOABkAGQASACEADQAaABIAGgAPABIAHwAgABUAFgAdBI0ADwAOACEAEgAfABMADgAZABkADQAQABUADgAfACECPwAPAA8ADQAWABsAEAAOABsAEQASACAAEAASABsAIQPKAA8ADgAZABkAEgAhAA0AFAAWABMAIQAQAA4AHwARASUADgAWABMAFgANACEAEgAhABUAEgAfABYAGwAUBI8ADQAPAA0AIQAkABYAFAAVABkAFgAUABUAIQPMAA0ADgAZABkAEgAhAA0AIQAfAA4AIwASABkCRgANAA8ADQAWAB8AFgARABIAIAAQABIAGwAhAO8ADQAVABIAHwASAA0AIQAcAA0AIwAcACEAEgQUAAwAHAAfABgADQAcACIAIQAZABYAGwASA/UACwAOACEAEAAVAA0AGQAOACEAEgAfAWAACQAfAA4AHQANACEAEgAlACEBEgAJAA4AGQAZAB0ADgAdABIAHwB0AAkAEgAPAA0ADgAgACAAEgAhAj4ACQAPAA0AEAAZABwAIgARACYBJAAJABYAEwAWAA0AGQAcABAAGASOAAgADwANACAAFQAOABEAEgMWAAgAFQAOACEAIAAVABwAIQQTAAgAHAAfABgADQAcABMAEwL3AAgAFgATABYADQAcABMAEwJAAAgADwANACAAIgAbABsAJgI9AAcADwANAA4AIgAhABwA4wAHABIAEgAYABIAGwARARMABwAWABEAFAASACEAIAAqAAcADgAfABsAFgAbABQBqwAFAA4AIQAQABUA7gAFAA4AIwASACAC7QAEABYAEwAWA80ABAAcAB8AGABdAAMAEgAPAuwAAgAQAAEABAPOABQAHAAiACEAIgAPABIADQAgABIADgAfABAAFQASABEADQATABwAHwADAAgAIgA0Ao0ADAAcABwAGgANABwAIgAhAA0AGgAOAB0D1AAIABwAHAAaAA0AHAAiACED0wAHABwAHAAaAA0AFgAbAAIABAAEAAwAAAAOABYACQAYACQAEgAmACcAHwAA\") format(\"truetype\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\"}.material-icons._10k:before{content:\"\\e951\"}.material-icons._10mp:before{content:\"\\e952\"}.material-icons._11mp:before{content:\"\\e953\"}.material-icons._12mp:before{content:\"\\e954\"}.material-icons._13mp:before{content:\"\\e955\"}.material-icons._14mp:before{content:\"\\e956\"}.material-icons._15mp:before{content:\"\\e957\"}.material-icons._16mp:before{content:\"\\e958\"}.material-icons._17mp:before{content:\"\\e959\"}.material-icons._18mp:before{content:\"\\e95a\"}.material-icons._19mp:before{content:\"\\e95b\"}.material-icons._1k:before{content:\"\\e95c\"}.material-icons._1k_plus:before{content:\"\\e95d\"}.material-icons._20mp:before{content:\"\\e95e\"}.material-icons._21mp:before{content:\"\\e95f\"}.material-icons._22mp:before{content:\"\\e960\"}.material-icons._23mp:before{content:\"\\e961\"}.material-icons._24mp:before{content:\"\\e962\"}.material-icons._2k:before{content:\"\\e963\"}.material-icons._2k_plus:before{content:\"\\e964\"}.material-icons._2mp:before{content:\"\\e965\"}.material-icons._360:before{content:\"\\e577\"}.material-icons._3d_rotation:before{content:\"\\e84d\"}.material-icons._3k:before{content:\"\\e966\"}.material-icons._3k_plus:before{content:\"\\e967\"}.material-icons._3mp:before{content:\"\\e968\"}.material-icons._4k:before{content:\"\\e072\"}.material-icons._4k_plus:before{content:\"\\e969\"}.material-icons._4mp:before{content:\"\\e96a\"}.material-icons._5k:before{content:\"\\e96b\"}.material-icons._5k_plus:before{content:\"\\e96c\"}.material-icons._5mp:before{content:\"\\e96d\"}.material-icons._6k:before{content:\"\\e96e\"}.material-icons._6k_plus:before{content:\"\\e96f\"}.material-icons._6mp:before{content:\"\\e970\"}.material-icons._7k:before{content:\"\\e971\"}.material-icons._7k_plus:before{content:\"\\e972\"}.material-icons._7mp:before{content:\"\\e973\"}.material-icons._8k:before{content:\"\\e974\"}.material-icons._8k_plus:before{content:\"\\e975\"}.material-icons._8mp:before{content:\"\\e976\"}.material-icons._9k:before{content:\"\\e977\"}.material-icons._9k_plus:before{content:\"\\e978\"}.material-icons._9mp:before{content:\"\\e979\"}.material-icons.ac_unit:before{content:\"\\eb3b\"}.material-icons.access_alarm:before{content:\"\\e190\"}.material-icons.access_alarms:before{content:\"\\e191\"}.material-icons.access_time:before{content:\"\\e192\"}.material-icons.accessibility:before{content:\"\\e84e\"}.material-icons.accessibility_new:before{content:\"\\e92c\"}.material-icons.accessible:before{content:\"\\e914\"}.material-icons.accessible_forward:before{content:\"\\e934\"}.material-icons.account_balance:before{content:\"\\e84f\"}.material-icons.account_balance_wallet:before{content:\"\\e850\"}.material-icons.account_box:before{content:\"\\e851\"}.material-icons.account_circle:before{content:\"\\e853\"}.material-icons.account_tree:before{content:\"\\e97a\"}.material-icons.adb:before{content:\"\\e60e\"}.material-icons.add:before{content:\"\\e145\"}.material-icons.add_a_photo:before{content:\"\\e439\"}.material-icons.add_alarm:before{content:\"\\e193\"}.material-icons.add_alert:before{content:\"\\e003\"}.material-icons.add_box:before{content:\"\\e146\"}.material-icons.add_call:before{content:\"\\e0e8\"}.material-icons.add_chart:before{content:\"\\e97b\"}.material-icons.add_circle:before{content:\"\\e147\"}.material-icons.add_circle_outline:before{content:\"\\e148\"}.material-icons.add_comment:before{content:\"\\e266\"}.material-icons.add_ic_call:before{content:\"\\e97c\"}.material-icons.add_link:before{content:\"\\e178\"}.material-icons.add_location:before{content:\"\\e567\"}.material-icons.add_moderator:before{content:\"\\e97d\"}.material-icons.add_photo_alternate:before{content:\"\\e43e\"}.material-icons.add_shopping_cart:before{content:\"\\e854\"}.material-icons.add_to_home_screen:before{content:\"\\e1fe\"}.material-icons.add_to_photos:before{content:\"\\e39d\"}.material-icons.add_to_queue:before{content:\"\\e05c\"}.material-icons.adjust:before{content:\"\\e39e\"}.material-icons.airline_seat_flat:before{content:\"\\e630\"}.material-icons.airline_seat_flat_angled:before{content:\"\\e631\"}.material-icons.airline_seat_individual_suite:before{content:\"\\e632\"}.material-icons.airline_seat_legroom_extra:before{content:\"\\e633\"}.material-icons.airline_seat_legroom_normal:before{content:\"\\e634\"}.material-icons.airline_seat_legroom_reduced:before{content:\"\\e635\"}.material-icons.airline_seat_recline_extra:before{content:\"\\e636\"}.material-icons.airline_seat_recline_normal:before{content:\"\\e637\"}.material-icons.airplanemode_active:before{content:\"\\e195\"}.material-icons.airplanemode_inactive:before,.material-icons.airplanemode_off:before{content:\"\\e194\"}.material-icons.airplanemode_on:before{content:\"\\e195\"}.material-icons.airplay:before{content:\"\\e055\"}.material-icons.airport_shuttle:before{content:\"\\eb3c\"}.material-icons.alarm:before{content:\"\\e855\"}.material-icons.alarm_add:before{content:\"\\e856\"}.material-icons.alarm_off:before{content:\"\\e857\"}.material-icons.alarm_on:before{content:\"\\e858\"}.material-icons.album:before{content:\"\\e019\"}.material-icons.all_inbox:before{content:\"\\e97f\"}.material-icons.all_inclusive:before{content:\"\\eb3d\"}.material-icons.all_out:before{content:\"\\e90b\"}.material-icons.alternate_email:before{content:\"\\e0e6\"}.material-icons.amp_stories:before{content:\"\\ea13\"}.material-icons.android:before{content:\"\\e859\"}.material-icons.announcement:before{content:\"\\e85a\"}.material-icons.apartment:before{content:\"\\ea40\"}.material-icons.approval:before{content:\"\\e982\"}.material-icons.apps:before{content:\"\\e5c3\"}.material-icons.archive:before{content:\"\\e149\"}.material-icons.arrow_back:before{content:\"\\e5c4\"}.material-icons.arrow_back_ios:before{content:\"\\e5e0\"}.material-icons.arrow_downward:before{content:\"\\e5db\"}.material-icons.arrow_drop_down:before{content:\"\\e5c5\"}.material-icons.arrow_drop_down_circle:before{content:\"\\e5c6\"}.material-icons.arrow_drop_up:before{content:\"\\e5c7\"}.material-icons.arrow_forward:before{content:\"\\e5c8\"}.material-icons.arrow_forward_ios:before{content:\"\\e5e1\"}.material-icons.arrow_left:before{content:\"\\e5de\"}.material-icons.arrow_right:before{content:\"\\e5df\"}.material-icons.arrow_right_alt:before{content:\"\\e941\"}.material-icons.arrow_upward:before{content:\"\\e5d8\"}.material-icons.art_track:before{content:\"\\e060\"}.material-icons.aspect_ratio:before{content:\"\\e85b\"}.material-icons.assessment:before{content:\"\\e85c\"}.material-icons.assignment:before{content:\"\\e85d\"}.material-icons.assignment_ind:before{content:\"\\e85e\"}.material-icons.assignment_late:before{content:\"\\e85f\"}.material-icons.assignment_return:before{content:\"\\e860\"}.material-icons.assignment_returned:before{content:\"\\e861\"}.material-icons.assignment_turned_in:before{content:\"\\e862\"}.material-icons.assistant:before{content:\"\\e39f\"}.material-icons.assistant_direction:before{content:\"\\e988\"}.material-icons.assistant_navigation:before{content:\"\\e989\"}.material-icons.assistant_photo:before{content:\"\\e3a0\"}.material-icons.atm:before{content:\"\\e573\"}.material-icons.attach_file:before{content:\"\\e226\"}.material-icons.attach_money:before{content:\"\\e227\"}.material-icons.attachment:before{content:\"\\e2bc\"}.material-icons.attractions:before{content:\"\\ea52\"}.material-icons.audiotrack:before{content:\"\\e3a1\"}.material-icons.autorenew:before{content:\"\\e863\"}.material-icons.av_timer:before{content:\"\\e01b\"}.material-icons.backspace:before{content:\"\\e14a\"}.material-icons.backup:before{content:\"\\e864\"}.material-icons.badge:before{content:\"\\ea67\"}.material-icons.bakery_dining:before{content:\"\\ea53\"}.material-icons.ballot:before{content:\"\\e172\"}.material-icons.bar_chart:before{content:\"\\e26b\"}.material-icons.bathtub:before{content:\"\\ea41\"}.material-icons.battery_alert:before{content:\"\\e19c\"}.material-icons.battery_charging_full:before{content:\"\\e1a3\"}.material-icons.battery_full:before{content:\"\\e1a4\"}.material-icons.battery_std:before{content:\"\\e1a5\"}.material-icons.battery_unknown:before{content:\"\\e1a6\"}.material-icons.beach_access:before{content:\"\\eb3e\"}.material-icons.beenhere:before{content:\"\\e52d\"}.material-icons.block:before{content:\"\\e14b\"}.material-icons.bluetooth:before{content:\"\\e1a7\"}.material-icons.bluetooth_audio:before{content:\"\\e60f\"}.material-icons.bluetooth_connected:before{content:\"\\e1a8\"}.material-icons.bluetooth_disabled:before{content:\"\\e1a9\"}.material-icons.bluetooth_searching:before{content:\"\\e1aa\"}.material-icons.blur_circular:before{content:\"\\e3a2\"}.material-icons.blur_linear:before{content:\"\\e3a3\"}.material-icons.blur_off:before{content:\"\\e3a4\"}.material-icons.blur_on:before{content:\"\\e3a5\"}.material-icons.bolt:before{content:\"\\ea0b\"}.material-icons.book:before{content:\"\\e865\"}.material-icons.bookmark:before{content:\"\\e866\"}.material-icons.bookmark_border:before,.material-icons.bookmark_outline:before{content:\"\\e867\"}.material-icons.bookmarks:before{content:\"\\e98b\"}.material-icons.border_all:before{content:\"\\e228\"}.material-icons.border_bottom:before{content:\"\\e229\"}.material-icons.border_clear:before{content:\"\\e22a\"}.material-icons.border_color:before{content:\"\\e22b\"}.material-icons.border_horizontal:before{content:\"\\e22c\"}.material-icons.border_inner:before{content:\"\\e22d\"}.material-icons.border_left:before{content:\"\\e22e\"}.material-icons.border_outer:before{content:\"\\e22f\"}.material-icons.border_right:before{content:\"\\e230\"}.material-icons.border_style:before{content:\"\\e231\"}.material-icons.border_top:before{content:\"\\e232\"}.material-icons.border_vertical:before{content:\"\\e233\"}.material-icons.branding_watermark:before{content:\"\\e06b\"}.material-icons.breakfast_dining:before{content:\"\\ea54\"}.material-icons.brightness_1:before{content:\"\\e3a6\"}.material-icons.brightness_2:before{content:\"\\e3a7\"}.material-icons.brightness_3:before{content:\"\\e3a8\"}.material-icons.brightness_4:before{content:\"\\e3a9\"}.material-icons.brightness_5:before{content:\"\\e3aa\"}.material-icons.brightness_6:before{content:\"\\e3ab\"}.material-icons.brightness_7:before{content:\"\\e3ac\"}.material-icons.brightness_auto:before{content:\"\\e1ab\"}.material-icons.brightness_high:before{content:\"\\e1ac\"}.material-icons.brightness_low:before{content:\"\\e1ad\"}.material-icons.brightness_medium:before{content:\"\\e1ae\"}.material-icons.broken_image:before{content:\"\\e3ad\"}.material-icons.brunch_dining:before{content:\"\\ea73\"}.material-icons.brush:before{content:\"\\e3ae\"}.material-icons.bubble_chart:before{content:\"\\e6dd\"}.material-icons.bug_report:before{content:\"\\e868\"}.material-icons.build:before{content:\"\\e869\"}.material-icons.burst_mode:before{content:\"\\e43c\"}.material-icons.bus_alert:before{content:\"\\e98f\"}.material-icons.business:before{content:\"\\e0af\"}.material-icons.business_center:before{content:\"\\eb3f\"}.material-icons.cached:before{content:\"\\e86a\"}.material-icons.cake:before{content:\"\\e7e9\"}.material-icons.calendar_today:before{content:\"\\e935\"}.material-icons.calendar_view_day:before{content:\"\\e936\"}.material-icons.call:before{content:\"\\e0b0\"}.material-icons.call_end:before{content:\"\\e0b1\"}.material-icons.call_made:before{content:\"\\e0b2\"}.material-icons.call_merge:before{content:\"\\e0b3\"}.material-icons.call_missed:before{content:\"\\e0b4\"}.material-icons.call_missed_outgoing:before{content:\"\\e0e4\"}.material-icons.call_received:before{content:\"\\e0b5\"}.material-icons.call_split:before{content:\"\\e0b6\"}.material-icons.call_to_action:before{content:\"\\e06c\"}.material-icons.camera:before{content:\"\\e3af\"}.material-icons.camera_alt:before{content:\"\\e3b0\"}.material-icons.camera_enhance:before{content:\"\\e8fc\"}.material-icons.camera_front:before{content:\"\\e3b1\"}.material-icons.camera_rear:before{content:\"\\e3b2\"}.material-icons.camera_roll:before{content:\"\\e3b3\"}.material-icons.cancel:before{content:\"\\e5c9\"}.material-icons.cancel_presentation:before{content:\"\\e0e9\"}.material-icons.cancel_schedule_send:before{content:\"\\ea39\"}.material-icons.car_rental:before{content:\"\\ea55\"}.material-icons.car_repair:before{content:\"\\ea56\"}.material-icons.card_giftcard:before{content:\"\\e8f6\"}.material-icons.card_membership:before{content:\"\\e8f7\"}.material-icons.card_travel:before{content:\"\\e8f8\"}.material-icons.cases:before{content:\"\\e992\"}.material-icons.casino:before{content:\"\\eb40\"}.material-icons.cast:before{content:\"\\e307\"}.material-icons.cast_connected:before{content:\"\\e308\"}.material-icons.category:before{content:\"\\e574\"}.material-icons.celebration:before{content:\"\\ea65\"}.material-icons.cell_wifi:before{content:\"\\e0ec\"}.material-icons.center_focus_strong:before{content:\"\\e3b4\"}.material-icons.center_focus_weak:before{content:\"\\e3b5\"}.material-icons.change_history:before{content:\"\\e86b\"}.material-icons.chat:before{content:\"\\e0b7\"}.material-icons.chat_bubble:before{content:\"\\e0ca\"}.material-icons.chat_bubble_outline:before{content:\"\\e0cb\"}.material-icons.check:before{content:\"\\e5ca\"}.material-icons.check_box:before{content:\"\\e834\"}.material-icons.check_box_outline_blank:before{content:\"\\e835\"}.material-icons.check_circle:before{content:\"\\e86c\"}.material-icons.check_circle_outline:before{content:\"\\e92d\"}.material-icons.chevron_left:before{content:\"\\e5cb\"}.material-icons.chevron_right:before{content:\"\\e5cc\"}.material-icons.child_care:before{content:\"\\eb41\"}.material-icons.child_friendly:before{content:\"\\eb42\"}.material-icons.chrome_reader_mode:before{content:\"\\e86d\"}.material-icons.circle_notifications:before{content:\"\\e994\"}.material-icons.class:before{content:\"\\e86e\"}.material-icons.clear:before{content:\"\\e14c\"}.material-icons.clear_all:before{content:\"\\e0b8\"}.material-icons.close:before{content:\"\\e5cd\"}.material-icons.closed_caption:before{content:\"\\e01c\"}.material-icons.closed_caption_off:before{content:\"\\e996\"}.material-icons.cloud:before{content:\"\\e2bd\"}.material-icons.cloud_circle:before{content:\"\\e2be\"}.material-icons.cloud_done:before{content:\"\\e2bf\"}.material-icons.cloud_download:before{content:\"\\e2c0\"}.material-icons.cloud_off:before{content:\"\\e2c1\"}.material-icons.cloud_queue:before{content:\"\\e2c2\"}.material-icons.cloud_upload:before{content:\"\\e2c3\"}.material-icons.code:before{content:\"\\e86f\"}.material-icons.collections:before{content:\"\\e3b6\"}.material-icons.collections_bookmark:before{content:\"\\e431\"}.material-icons.color_lens:before{content:\"\\e3b7\"}.material-icons.colorize:before{content:\"\\e3b8\"}.material-icons.comment:before{content:\"\\e0b9\"}.material-icons.commute:before{content:\"\\e940\"}.material-icons.compare:before{content:\"\\e3b9\"}.material-icons.compare_arrows:before{content:\"\\e915\"}.material-icons.compass_calibration:before{content:\"\\e57c\"}.material-icons.compress:before{content:\"\\e94d\"}.material-icons.computer:before{content:\"\\e30a\"}.material-icons.confirmation_num:before,.material-icons.confirmation_number:before{content:\"\\e638\"}.material-icons.connected_tv:before{content:\"\\e998\"}.material-icons.contact_mail:before{content:\"\\e0d0\"}.material-icons.contact_phone:before{content:\"\\e0cf\"}.material-icons.contact_support:before{content:\"\\e94c\"}.material-icons.contactless:before{content:\"\\ea71\"}.material-icons.contacts:before{content:\"\\e0ba\"}.material-icons.content_copy:before{content:\"\\e14d\"}.material-icons.content_cut:before{content:\"\\e14e\"}.material-icons.content_paste:before{content:\"\\e14f\"}.material-icons.control_camera:before{content:\"\\e074\"}.material-icons.control_point:before{content:\"\\e3ba\"}.material-icons.control_point_duplicate:before{content:\"\\e3bb\"}.material-icons.copyright:before{content:\"\\e90c\"}.material-icons.create:before{content:\"\\e150\"}.material-icons.create_new_folder:before{content:\"\\e2cc\"}.material-icons.credit_card:before{content:\"\\e870\"}.material-icons.crop:before{content:\"\\e3be\"}.material-icons.crop_16_9:before{content:\"\\e3bc\"}.material-icons.crop_3_2:before{content:\"\\e3bd\"}.material-icons.crop_5_4:before{content:\"\\e3bf\"}.material-icons.crop_7_5:before{content:\"\\e3c0\"}.material-icons.crop_din:before{content:\"\\e3c1\"}.material-icons.crop_free:before{content:\"\\e3c2\"}.material-icons.crop_landscape:before{content:\"\\e3c3\"}.material-icons.crop_original:before{content:\"\\e3c4\"}.material-icons.crop_portrait:before{content:\"\\e3c5\"}.material-icons.crop_rotate:before{content:\"\\e437\"}.material-icons.crop_square:before{content:\"\\e3c6\"}.material-icons.dangerous:before{content:\"\\e99a\"}.material-icons.dashboard:before{content:\"\\e871\"}.material-icons.dashboard_customize:before{content:\"\\e99b\"}.material-icons.data_usage:before{content:\"\\e1af\"}.material-icons.date_range:before{content:\"\\e916\"}.material-icons.deck:before{content:\"\\ea42\"}.material-icons.dehaze:before{content:\"\\e3c7\"}.material-icons.delete:before{content:\"\\e872\"}.material-icons.delete_forever:before{content:\"\\e92b\"}.material-icons.delete_outline:before{content:\"\\e92e\"}.material-icons.delete_sweep:before{content:\"\\e16c\"}.material-icons.delivery_dining:before{content:\"\\ea72\"}.material-icons.departure_board:before{content:\"\\e576\"}.material-icons.description:before{content:\"\\e873\"}.material-icons.desktop_access_disabled:before{content:\"\\e99d\"}.material-icons.desktop_mac:before{content:\"\\e30b\"}.material-icons.desktop_windows:before{content:\"\\e30c\"}.material-icons.details:before{content:\"\\e3c8\"}.material-icons.developer_board:before{content:\"\\e30d\"}.material-icons.developer_mode:before{content:\"\\e1b0\"}.material-icons.device_hub:before{content:\"\\e335\"}.material-icons.device_thermostat:before{content:\"\\e1ff\"}.material-icons.device_unknown:before{content:\"\\e339\"}.material-icons.devices:before{content:\"\\e1b1\"}.material-icons.devices_other:before{content:\"\\e337\"}.material-icons.dialer_sip:before{content:\"\\e0bb\"}.material-icons.dialpad:before{content:\"\\e0bc\"}.material-icons.dinner_dining:before{content:\"\\ea57\"}.material-icons.directions:before{content:\"\\e52e\"}.material-icons.directions_bike:before{content:\"\\e52f\"}.material-icons.directions_boat:before{content:\"\\e532\"}.material-icons.directions_bus:before{content:\"\\e530\"}.material-icons.directions_car:before{content:\"\\e531\"}.material-icons.directions_ferry:before{content:\"\\e532\"}.material-icons.directions_railway:before{content:\"\\e534\"}.material-icons.directions_run:before{content:\"\\e566\"}.material-icons.directions_subway:before{content:\"\\e533\"}.material-icons.directions_train:before{content:\"\\e534\"}.material-icons.directions_transit:before{content:\"\\e535\"}.material-icons.directions_walk:before{content:\"\\e536\"}.material-icons.disc_full:before{content:\"\\e610\"}.material-icons.dnd_forwardslash:before{content:\"\\e611\"}.material-icons.dns:before{content:\"\\e875\"}.material-icons.do_not_disturb:before{content:\"\\e612\"}.material-icons.do_not_disturb_alt:before{content:\"\\e611\"}.material-icons.do_not_disturb_off:before{content:\"\\e643\"}.material-icons.do_not_disturb_on:before{content:\"\\e644\"}.material-icons.dock:before{content:\"\\e30e\"}.material-icons.domain:before{content:\"\\e7ee\"}.material-icons.domain_disabled:before{content:\"\\e0ef\"}.material-icons.done:before{content:\"\\e876\"}.material-icons.done_all:before{content:\"\\e877\"}.material-icons.done_outline:before{content:\"\\e92f\"}.material-icons.donut_large:before{content:\"\\e917\"}.material-icons.donut_small:before{content:\"\\e918\"}.material-icons.double_arrow:before{content:\"\\ea50\"}.material-icons.drafts:before{content:\"\\e151\"}.material-icons.drag_handle:before{content:\"\\e25d\"}.material-icons.drag_indicator:before{content:\"\\e945\"}.material-icons.drive_eta:before{content:\"\\e613\"}.material-icons.drive_file_move_outline:before{content:\"\\e9a1\"}.material-icons.drive_file_rename_outline:before{content:\"\\e9a2\"}.material-icons.drive_folder_upload:before{content:\"\\e9a3\"}.material-icons.dry_cleaning:before{content:\"\\ea58\"}.material-icons.duo:before{content:\"\\e9a5\"}.material-icons.dvr:before{content:\"\\e1b2\"}.material-icons.dynamic_feed:before{content:\"\\ea14\"}.material-icons.eco:before{content:\"\\ea35\"}.material-icons.edit:before{content:\"\\e3c9\"}.material-icons.edit_attributes:before{content:\"\\e578\"}.material-icons.edit_location:before{content:\"\\e568\"}.material-icons.edit_off:before{content:\"\\e950\"}.material-icons.eject:before{content:\"\\e8fb\"}.material-icons.email:before{content:\"\\e0be\"}.material-icons.emoji_emotions:before{content:\"\\ea22\"}.material-icons.emoji_events:before{content:\"\\ea23\"}.material-icons.emoji_flags:before{content:\"\\ea1a\"}.material-icons.emoji_food_beverage:before{content:\"\\ea1b\"}.material-icons.emoji_nature:before{content:\"\\ea1c\"}.material-icons.emoji_objects:before{content:\"\\ea24\"}.material-icons.emoji_people:before{content:\"\\ea1d\"}.material-icons.emoji_symbols:before{content:\"\\ea1e\"}.material-icons.emoji_transportation:before{content:\"\\ea1f\"}.material-icons.enhance_photo_translate:before{content:\"\\e8fc\"}.material-icons.enhanced_encryption:before{content:\"\\e63f\"}.material-icons.equalizer:before{content:\"\\e01d\"}.material-icons.error:before{content:\"\\e000\"}.material-icons.error_outline:before{content:\"\\e001\"}.material-icons.euro:before{content:\"\\ea15\"}.material-icons.euro_symbol:before{content:\"\\e926\"}.material-icons.ev_station:before{content:\"\\e56d\"}.material-icons.event:before{content:\"\\e878\"}.material-icons.event_available:before{content:\"\\e614\"}.material-icons.event_busy:before{content:\"\\e615\"}.material-icons.event_note:before{content:\"\\e616\"}.material-icons.event_seat:before{content:\"\\e903\"}.material-icons.exit_to_app:before{content:\"\\e879\"}.material-icons.expand:before{content:\"\\e94f\"}.material-icons.expand_less:before{content:\"\\e5ce\"}.material-icons.expand_more:before{content:\"\\e5cf\"}.material-icons.explicit:before{content:\"\\e01e\"}.material-icons.explore:before{content:\"\\e87a\"}.material-icons.explore_off:before{content:\"\\e9a8\"}.material-icons.exposure:before{content:\"\\e3ca\"}.material-icons.exposure_minus_1:before{content:\"\\e3cb\"}.material-icons.exposure_minus_2:before{content:\"\\e3cc\"}.material-icons.exposure_neg_1:before{content:\"\\e3cb\"}.material-icons.exposure_neg_2:before{content:\"\\e3cc\"}.material-icons.exposure_plus_1:before{content:\"\\e3cd\"}.material-icons.exposure_plus_2:before{content:\"\\e3ce\"}.material-icons.exposure_zero:before{content:\"\\e3cf\"}.material-icons.extension:before{content:\"\\e87b\"}.material-icons.face:before{content:\"\\e87c\"}.material-icons.fast_forward:before{content:\"\\e01f\"}.material-icons.fast_rewind:before{content:\"\\e020\"}.material-icons.fastfood:before{content:\"\\e57a\"}.material-icons.favorite:before{content:\"\\e87d\"}.material-icons.favorite_border:before,.material-icons.favorite_outline:before{content:\"\\e87e\"}.material-icons.featured_play_list:before{content:\"\\e06d\"}.material-icons.featured_video:before{content:\"\\e06e\"}.material-icons.feedback:before{content:\"\\e87f\"}.material-icons.festival:before{content:\"\\ea68\"}.material-icons.fiber_dvr:before{content:\"\\e05d\"}.material-icons.fiber_manual_record:before{content:\"\\e061\"}.material-icons.fiber_new:before{content:\"\\e05e\"}.material-icons.fiber_pin:before{content:\"\\e06a\"}.material-icons.fiber_smart_record:before{content:\"\\e062\"}.material-icons.file_copy:before{content:\"\\e173\"}.material-icons.file_download:before{content:\"\\e2c4\"}.material-icons.file_download_done:before{content:\"\\e9aa\"}.material-icons.file_present:before{content:\"\\ea0e\"}.material-icons.file_upload:before{content:\"\\e2c6\"}.material-icons.filter:before{content:\"\\e3d3\"}.material-icons.filter_1:before{content:\"\\e3d0\"}.material-icons.filter_2:before{content:\"\\e3d1\"}.material-icons.filter_3:before{content:\"\\e3d2\"}.material-icons.filter_4:before{content:\"\\e3d4\"}.material-icons.filter_5:before{content:\"\\e3d5\"}.material-icons.filter_6:before{content:\"\\e3d6\"}.material-icons.filter_7:before{content:\"\\e3d7\"}.material-icons.filter_8:before{content:\"\\e3d8\"}.material-icons.filter_9:before{content:\"\\e3d9\"}.material-icons.filter_9_plus:before{content:\"\\e3da\"}.material-icons.filter_b_and_w:before{content:\"\\e3db\"}.material-icons.filter_center_focus:before{content:\"\\e3dc\"}.material-icons.filter_drama:before{content:\"\\e3dd\"}.material-icons.filter_frames:before{content:\"\\e3de\"}.material-icons.filter_hdr:before{content:\"\\e3df\"}.material-icons.filter_list:before{content:\"\\e152\"}.material-icons.filter_list_alt:before{content:\"\\e94e\"}.material-icons.filter_none:before{content:\"\\e3e0\"}.material-icons.filter_tilt_shift:before{content:\"\\e3e2\"}.material-icons.filter_vintage:before{content:\"\\e3e3\"}.material-icons.find_in_page:before{content:\"\\e880\"}.material-icons.find_replace:before{content:\"\\e881\"}.material-icons.fingerprint:before{content:\"\\e90d\"}.material-icons.fireplace:before{content:\"\\ea43\"}.material-icons.first_page:before{content:\"\\e5dc\"}.material-icons.fit_screen:before{content:\"\\ea10\"}.material-icons.fitness_center:before{content:\"\\eb43\"}.material-icons.flag:before{content:\"\\e153\"}.material-icons.flare:before{content:\"\\e3e4\"}.material-icons.flash_auto:before{content:\"\\e3e5\"}.material-icons.flash_off:before{content:\"\\e3e6\"}.material-icons.flash_on:before{content:\"\\e3e7\"}.material-icons.flight:before{content:\"\\e539\"}.material-icons.flight_land:before{content:\"\\e904\"}.material-icons.flight_takeoff:before{content:\"\\e905\"}.material-icons.flip:before{content:\"\\e3e8\"}.material-icons.flip_camera_android:before{content:\"\\ea37\"}.material-icons.flip_camera_ios:before{content:\"\\ea38\"}.material-icons.flip_to_back:before{content:\"\\e882\"}.material-icons.flip_to_front:before{content:\"\\e883\"}.material-icons.folder:before{content:\"\\e2c7\"}.material-icons.folder_open:before{content:\"\\e2c8\"}.material-icons.folder_shared:before{content:\"\\e2c9\"}.material-icons.folder_special:before{content:\"\\e617\"}.material-icons.font_download:before{content:\"\\e167\"}.material-icons.format_align_center:before{content:\"\\e234\"}.material-icons.format_align_justify:before{content:\"\\e235\"}.material-icons.format_align_left:before{content:\"\\e236\"}.material-icons.format_align_right:before{content:\"\\e237\"}.material-icons.format_bold:before{content:\"\\e238\"}.material-icons.format_clear:before{content:\"\\e239\"}.material-icons.format_color_fill:before{content:\"\\e23a\"}.material-icons.format_color_reset:before{content:\"\\e23b\"}.material-icons.format_color_text:before{content:\"\\e23c\"}.material-icons.format_indent_decrease:before{content:\"\\e23d\"}.material-icons.format_indent_increase:before{content:\"\\e23e\"}.material-icons.format_italic:before{content:\"\\e23f\"}.material-icons.format_line_spacing:before{content:\"\\e240\"}.material-icons.format_list_bulleted:before{content:\"\\e241\"}.material-icons.format_list_numbered:before{content:\"\\e242\"}.material-icons.format_list_numbered_rtl:before{content:\"\\e267\"}.material-icons.format_paint:before{content:\"\\e243\"}.material-icons.format_quote:before{content:\"\\e244\"}.material-icons.format_shapes:before{content:\"\\e25e\"}.material-icons.format_size:before{content:\"\\e245\"}.material-icons.format_strikethrough:before{content:\"\\e246\"}.material-icons.format_textdirection_l_to_r:before{content:\"\\e247\"}.material-icons.format_textdirection_r_to_l:before{content:\"\\e248\"}.material-icons.format_underline:before,.material-icons.format_underlined:before{content:\"\\e249\"}.material-icons.forum:before{content:\"\\e0bf\"}.material-icons.forward:before{content:\"\\e154\"}.material-icons.forward_10:before{content:\"\\e056\"}.material-icons.forward_30:before{content:\"\\e057\"}.material-icons.forward_5:before{content:\"\\e058\"}.material-icons.free_breakfast:before{content:\"\\eb44\"}.material-icons.fullscreen:before{content:\"\\e5d0\"}.material-icons.fullscreen_exit:before{content:\"\\e5d1\"}.material-icons.functions:before{content:\"\\e24a\"}.material-icons.g_translate:before{content:\"\\e927\"}.material-icons.gamepad:before{content:\"\\e30f\"}.material-icons.games:before{content:\"\\e021\"}.material-icons.gavel:before{content:\"\\e90e\"}.material-icons.gesture:before{content:\"\\e155\"}.material-icons.get_app:before{content:\"\\e884\"}.material-icons.gif:before{content:\"\\e908\"}.material-icons.goat:before{content:\"\\dbff\"}.material-icons.golf_course:before{content:\"\\eb45\"}.material-icons.gps_fixed:before{content:\"\\e1b3\"}.material-icons.gps_not_fixed:before{content:\"\\e1b4\"}.material-icons.gps_off:before{content:\"\\e1b5\"}.material-icons.grade:before{content:\"\\e885\"}.material-icons.gradient:before{content:\"\\e3e9\"}.material-icons.grain:before{content:\"\\e3ea\"}.material-icons.graphic_eq:before{content:\"\\e1b8\"}.material-icons.grid_off:before{content:\"\\e3eb\"}.material-icons.grid_on:before{content:\"\\e3ec\"}.material-icons.grid_view:before{content:\"\\e9b0\"}.material-icons.group:before{content:\"\\e7ef\"}.material-icons.group_add:before{content:\"\\e7f0\"}.material-icons.group_work:before{content:\"\\e886\"}.material-icons.hail:before{content:\"\\e9b1\"}.material-icons.hardware:before{content:\"\\ea59\"}.material-icons.hd:before{content:\"\\e052\"}.material-icons.hdr_off:before{content:\"\\e3ed\"}.material-icons.hdr_on:before{content:\"\\e3ee\"}.material-icons.hdr_strong:before{content:\"\\e3f1\"}.material-icons.hdr_weak:before{content:\"\\e3f2\"}.material-icons.headset:before{content:\"\\e310\"}.material-icons.headset_mic:before{content:\"\\e311\"}.material-icons.headset_off:before{content:\"\\e33a\"}.material-icons.healing:before{content:\"\\e3f3\"}.material-icons.hearing:before{content:\"\\e023\"}.material-icons.height:before{content:\"\\ea16\"}.material-icons.help:before{content:\"\\e887\"}.material-icons.help_outline:before{content:\"\\e8fd\"}.material-icons.high_quality:before{content:\"\\e024\"}.material-icons.highlight:before{content:\"\\e25f\"}.material-icons.highlight_off:before,.material-icons.highlight_remove:before{content:\"\\e888\"}.material-icons.history:before{content:\"\\e889\"}.material-icons.home:before{content:\"\\e88a\"}.material-icons.home_filled:before{content:\"\\e9b2\"}.material-icons.home_work:before{content:\"\\ea09\"}.material-icons.horizontal_split:before{content:\"\\e947\"}.material-icons.hot_tub:before{content:\"\\eb46\"}.material-icons.hotel:before{content:\"\\e53a\"}.material-icons.hourglass_empty:before{content:\"\\e88b\"}.material-icons.hourglass_full:before{content:\"\\e88c\"}.material-icons.house:before{content:\"\\ea44\"}.material-icons.how_to_reg:before{content:\"\\e174\"}.material-icons.how_to_vote:before{content:\"\\e175\"}.material-icons.http:before{content:\"\\e902\"}.material-icons.https:before{content:\"\\e88d\"}.material-icons.icecream:before{content:\"\\ea69\"}.material-icons.image:before{content:\"\\e3f4\"}.material-icons.image_aspect_ratio:before{content:\"\\e3f5\"}.material-icons.image_search:before{content:\"\\e43f\"}.material-icons.imagesearch_roller:before{content:\"\\e9b4\"}.material-icons.import_contacts:before{content:\"\\e0e0\"}.material-icons.import_export:before{content:\"\\e0c3\"}.material-icons.important_devices:before{content:\"\\e912\"}.material-icons.inbox:before{content:\"\\e156\"}.material-icons.indeterminate_check_box:before{content:\"\\e909\"}.material-icons.info:before{content:\"\\e88e\"}.material-icons.info_outline:before{content:\"\\e88f\"}.material-icons.input:before{content:\"\\e890\"}.material-icons.insert_chart:before{content:\"\\e24b\"}.material-icons.insert_chart_outlined:before{content:\"\\e26a\"}.material-icons.insert_comment:before{content:\"\\e24c\"}.material-icons.insert_drive_file:before{content:\"\\e24d\"}.material-icons.insert_emoticon:before{content:\"\\e24e\"}.material-icons.insert_invitation:before{content:\"\\e24f\"}.material-icons.insert_link:before{content:\"\\e250\"}.material-icons.insert_photo:before{content:\"\\e251\"}.material-icons.inventory:before{content:\"\\e179\"}.material-icons.invert_colors:before{content:\"\\e891\"}.material-icons.invert_colors_off:before{content:\"\\e0c4\"}.material-icons.invert_colors_on:before{content:\"\\e891\"}.material-icons.iso:before{content:\"\\e3f6\"}.material-icons.keyboard:before{content:\"\\e312\"}.material-icons.keyboard_arrow_down:before{content:\"\\e313\"}.material-icons.keyboard_arrow_left:before{content:\"\\e314\"}.material-icons.keyboard_arrow_right:before{content:\"\\e315\"}.material-icons.keyboard_arrow_up:before{content:\"\\e316\"}.material-icons.keyboard_backspace:before{content:\"\\e317\"}.material-icons.keyboard_capslock:before{content:\"\\e318\"}.material-icons.keyboard_control:before{content:\"\\e5d3\"}.material-icons.keyboard_hide:before{content:\"\\e31a\"}.material-icons.keyboard_return:before{content:\"\\e31b\"}.material-icons.keyboard_tab:before{content:\"\\e31c\"}.material-icons.keyboard_voice:before{content:\"\\e31d\"}.material-icons.king_bed:before{content:\"\\ea45\"}.material-icons.kitchen:before{content:\"\\eb47\"}.material-icons.label:before{content:\"\\e892\"}.material-icons.label_important:before{content:\"\\e937\"}.material-icons.label_important_outline:before{content:\"\\e948\"}.material-icons.label_off:before{content:\"\\e9b6\"}.material-icons.label_outline:before{content:\"\\e893\"}.material-icons.landscape:before{content:\"\\e3f7\"}.material-icons.language:before{content:\"\\e894\"}.material-icons.laptop:before{content:\"\\e31e\"}.material-icons.laptop_chromebook:before{content:\"\\e31f\"}.material-icons.laptop_mac:before{content:\"\\e320\"}.material-icons.laptop_windows:before{content:\"\\e321\"}.material-icons.last_page:before{content:\"\\e5dd\"}.material-icons.launch:before{content:\"\\e895\"}.material-icons.layers:before{content:\"\\e53b\"}.material-icons.layers_clear:before{content:\"\\e53c\"}.material-icons.leak_add:before{content:\"\\e3f8\"}.material-icons.leak_remove:before{content:\"\\e3f9\"}.material-icons.lens:before{content:\"\\e3fa\"}.material-icons.library_add:before{content:\"\\e02e\"}.material-icons.library_add_check:before{content:\"\\e9b7\"}.material-icons.library_books:before{content:\"\\e02f\"}.material-icons.library_music:before{content:\"\\e030\"}.material-icons.lightbulb:before{content:\"\\e0f0\"}.material-icons.lightbulb_outline:before{content:\"\\e90f\"}.material-icons.line_style:before{content:\"\\e919\"}.material-icons.line_weight:before{content:\"\\e91a\"}.material-icons.linear_scale:before{content:\"\\e260\"}.material-icons.link:before{content:\"\\e157\"}.material-icons.link_off:before{content:\"\\e16f\"}.material-icons.linked_camera:before{content:\"\\e438\"}.material-icons.liquor:before{content:\"\\ea60\"}.material-icons.list:before{content:\"\\e896\"}.material-icons.list_alt:before{content:\"\\e0ee\"}.material-icons.live_help:before{content:\"\\e0c6\"}.material-icons.live_tv:before{content:\"\\e639\"}.material-icons.local_activity:before{content:\"\\e53f\"}.material-icons.local_airport:before{content:\"\\e53d\"}.material-icons.local_atm:before{content:\"\\e53e\"}.material-icons.local_attraction:before{content:\"\\e53f\"}.material-icons.local_bar:before{content:\"\\e540\"}.material-icons.local_cafe:before{content:\"\\e541\"}.material-icons.local_car_wash:before{content:\"\\e542\"}.material-icons.local_convenience_store:before{content:\"\\e543\"}.material-icons.local_dining:before{content:\"\\e556\"}.material-icons.local_drink:before{content:\"\\e544\"}.material-icons.local_florist:before{content:\"\\e545\"}.material-icons.local_gas_station:before{content:\"\\e546\"}.material-icons.local_grocery_store:before{content:\"\\e547\"}.material-icons.local_hospital:before{content:\"\\e548\"}.material-icons.local_hotel:before{content:\"\\e549\"}.material-icons.local_laundry_service:before{content:\"\\e54a\"}.material-icons.local_library:before{content:\"\\e54b\"}.material-icons.local_mall:before{content:\"\\e54c\"}.material-icons.local_movies:before{content:\"\\e54d\"}.material-icons.local_offer:before{content:\"\\e54e\"}.material-icons.local_parking:before{content:\"\\e54f\"}.material-icons.local_pharmacy:before{content:\"\\e550\"}.material-icons.local_phone:before{content:\"\\e551\"}.material-icons.local_pizza:before{content:\"\\e552\"}.material-icons.local_play:before{content:\"\\e553\"}.material-icons.local_post_office:before{content:\"\\e554\"}.material-icons.local_print_shop:before,.material-icons.local_printshop:before{content:\"\\e555\"}.material-icons.local_restaurant:before{content:\"\\e556\"}.material-icons.local_see:before{content:\"\\e557\"}.material-icons.local_shipping:before{content:\"\\e558\"}.material-icons.local_taxi:before{content:\"\\e559\"}.material-icons.location_city:before{content:\"\\e7f1\"}.material-icons.location_disabled:before{content:\"\\e1b6\"}.material-icons.location_history:before{content:\"\\e55a\"}.material-icons.location_off:before{content:\"\\e0c7\"}.material-icons.location_on:before{content:\"\\e0c8\"}.material-icons.location_searching:before{content:\"\\e1b7\"}.material-icons.lock:before{content:\"\\e897\"}.material-icons.lock_open:before{content:\"\\e898\"}.material-icons.lock_outline:before{content:\"\\e899\"}.material-icons.logout:before{content:\"\\e9ba\"}.material-icons.looks:before{content:\"\\e3fc\"}.material-icons.looks_3:before{content:\"\\e3fb\"}.material-icons.looks_4:before{content:\"\\e3fd\"}.material-icons.looks_5:before{content:\"\\e3fe\"}.material-icons.looks_6:before{content:\"\\e3ff\"}.material-icons.looks_one:before{content:\"\\e400\"}.material-icons.looks_two:before{content:\"\\e401\"}.material-icons.loop:before{content:\"\\e028\"}.material-icons.loupe:before{content:\"\\e402\"}.material-icons.low_priority:before{content:\"\\e16d\"}.material-icons.loyalty:before{content:\"\\e89a\"}.material-icons.lunch_dining:before{content:\"\\ea61\"}.material-icons.mail:before{content:\"\\e158\"}.material-icons.mail_outline:before{content:\"\\e0e1\"}.material-icons.map:before{content:\"\\e55b\"}.material-icons.margin:before{content:\"\\e9bb\"}.material-icons.mark_as_unread:before{content:\"\\e9bc\"}.material-icons.markunread:before{content:\"\\e159\"}.material-icons.markunread_mailbox:before{content:\"\\e89b\"}.material-icons.maximize:before{content:\"\\e930\"}.material-icons.meeting_room:before{content:\"\\eb4f\"}.material-icons.memory:before{content:\"\\e322\"}.material-icons.menu:before{content:\"\\e5d2\"}.material-icons.menu_book:before{content:\"\\ea19\"}.material-icons.menu_open:before{content:\"\\e9bd\"}.material-icons.merge_type:before{content:\"\\e252\"}.material-icons.message:before{content:\"\\e0c9\"}.material-icons.messenger:before{content:\"\\e0ca\"}.material-icons.messenger_outline:before{content:\"\\e0cb\"}.material-icons.mic:before{content:\"\\e029\"}.material-icons.mic_none:before{content:\"\\e02a\"}.material-icons.mic_off:before{content:\"\\e02b\"}.material-icons.minimize:before{content:\"\\e931\"}.material-icons.missed_video_call:before{content:\"\\e073\"}.material-icons.mms:before{content:\"\\e618\"}.material-icons.mobile_friendly:before{content:\"\\e200\"}.material-icons.mobile_off:before{content:\"\\e201\"}.material-icons.mobile_screen_share:before{content:\"\\e0e7\"}.material-icons.mode_comment:before{content:\"\\e253\"}.material-icons.mode_edit:before{content:\"\\e254\"}.material-icons.monetization_on:before{content:\"\\e263\"}.material-icons.money:before{content:\"\\e57d\"}.material-icons.money_off:before{content:\"\\e25c\"}.material-icons.monochrome_photos:before{content:\"\\e403\"}.material-icons.mood:before{content:\"\\e7f2\"}.material-icons.mood_bad:before{content:\"\\e7f3\"}.material-icons.more:before{content:\"\\e619\"}.material-icons.more_horiz:before{content:\"\\e5d3\"}.material-icons.more_vert:before{content:\"\\e5d4\"}.material-icons.motorcycle:before{content:\"\\e91b\"}.material-icons.mouse:before{content:\"\\e323\"}.material-icons.move_to_inbox:before{content:\"\\e168\"}.material-icons.movie:before{content:\"\\e02c\"}.material-icons.movie_creation:before{content:\"\\e404\"}.material-icons.movie_filter:before{content:\"\\e43a\"}.material-icons.mp:before{content:\"\\e9c3\"}.material-icons.multiline_chart:before{content:\"\\e6df\"}.material-icons.multitrack_audio:before{content:\"\\e1b8\"}.material-icons.museum:before{content:\"\\ea36\"}.material-icons.music_note:before{content:\"\\e405\"}.material-icons.music_off:before{content:\"\\e440\"}.material-icons.music_video:before{content:\"\\e063\"}.material-icons.my_library_add:before{content:\"\\e02e\"}.material-icons.my_library_books:before{content:\"\\e02f\"}.material-icons.my_library_music:before{content:\"\\e030\"}.material-icons.my_location:before{content:\"\\e55c\"}.material-icons.nature:before{content:\"\\e406\"}.material-icons.nature_people:before{content:\"\\e407\"}.material-icons.navigate_before:before{content:\"\\e408\"}.material-icons.navigate_next:before{content:\"\\e409\"}.material-icons.navigation:before{content:\"\\e55d\"}.material-icons.near_me:before{content:\"\\e569\"}.material-icons.network_cell:before{content:\"\\e1b9\"}.material-icons.network_check:before{content:\"\\e640\"}.material-icons.network_locked:before{content:\"\\e61a\"}.material-icons.network_wifi:before{content:\"\\e1ba\"}.material-icons.new_releases:before{content:\"\\e031\"}.material-icons.next_week:before{content:\"\\e16a\"}.material-icons.nfc:before{content:\"\\e1bb\"}.material-icons.nightlife:before{content:\"\\ea62\"}.material-icons.nights_stay:before{content:\"\\ea46\"}.material-icons.no_encryption:before{content:\"\\e641\"}.material-icons.no_meeting_room:before{content:\"\\eb4e\"}.material-icons.no_sim:before{content:\"\\e0cc\"}.material-icons.not_interested:before{content:\"\\e033\"}.material-icons.not_listed_location:before{content:\"\\e575\"}.material-icons.note:before{content:\"\\e06f\"}.material-icons.note_add:before{content:\"\\e89c\"}.material-icons.notes:before{content:\"\\e26c\"}.material-icons.notification_important:before{content:\"\\e004\"}.material-icons.notifications:before{content:\"\\e7f4\"}.material-icons.notifications_active:before{content:\"\\e7f7\"}.material-icons.notifications_none:before{content:\"\\e7f5\"}.material-icons.notifications_off:before{content:\"\\e7f6\"}.material-icons.notifications_on:before{content:\"\\e7f7\"}.material-icons.notifications_paused:before{content:\"\\e7f8\"}.material-icons.now_wallpaper:before{content:\"\\e1bc\"}.material-icons.now_widgets:before{content:\"\\e1bd\"}.material-icons.offline_bolt:before{content:\"\\e932\"}.material-icons.offline_pin:before{content:\"\\e90a\"}.material-icons.offline_share:before{content:\"\\e9c5\"}.material-icons.ondemand_video:before{content:\"\\e63a\"}.material-icons.opacity:before{content:\"\\e91c\"}.material-icons.open_in_browser:before{content:\"\\e89d\"}.material-icons.open_in_new:before{content:\"\\e89e\"}.material-icons.open_with:before{content:\"\\e89f\"}.material-icons.outdoor_grill:before{content:\"\\ea47\"}.material-icons.outlined_flag:before{content:\"\\e16e\"}.material-icons.padding:before{content:\"\\e9c8\"}.material-icons.pages:before{content:\"\\e7f9\"}.material-icons.pageview:before{content:\"\\e8a0\"}.material-icons.palette:before{content:\"\\e40a\"}.material-icons.pan_tool:before{content:\"\\e925\"}.material-icons.panorama:before{content:\"\\e40b\"}.material-icons.panorama_fish_eye:before,.material-icons.panorama_fisheye:before{content:\"\\e40c\"}.material-icons.panorama_horizontal:before{content:\"\\e40d\"}.material-icons.panorama_photosphere:before{content:\"\\e9c9\"}.material-icons.panorama_photosphere_select:before{content:\"\\e9ca\"}.material-icons.panorama_vertical:before{content:\"\\e40e\"}.material-icons.panorama_wide_angle:before{content:\"\\e40f\"}.material-icons.park:before{content:\"\\ea63\"}.material-icons.party_mode:before{content:\"\\e7fa\"}.material-icons.pause:before{content:\"\\e034\"}.material-icons.pause_circle_filled:before{content:\"\\e035\"}.material-icons.pause_circle_outline:before{content:\"\\e036\"}.material-icons.pause_presentation:before{content:\"\\e0ea\"}.material-icons.payment:before{content:\"\\e8a1\"}.material-icons.people:before{content:\"\\e7fb\"}.material-icons.people_alt:before{content:\"\\ea21\"}.material-icons.people_outline:before{content:\"\\e7fc\"}.material-icons.perm_camera_mic:before{content:\"\\e8a2\"}.material-icons.perm_contact_cal:before,.material-icons.perm_contact_calendar:before{content:\"\\e8a3\"}.material-icons.perm_data_setting:before{content:\"\\e8a4\"}.material-icons.perm_device_info:before,.material-icons.perm_device_information:before{content:\"\\e8a5\"}.material-icons.perm_identity:before{content:\"\\e8a6\"}.material-icons.perm_media:before{content:\"\\e8a7\"}.material-icons.perm_phone_msg:before{content:\"\\e8a8\"}.material-icons.perm_scan_wifi:before{content:\"\\e8a9\"}.material-icons.person:before{content:\"\\e7fd\"}.material-icons.person_add:before{content:\"\\e7fe\"}.material-icons.person_add_disabled:before{content:\"\\e9cb\"}.material-icons.person_outline:before{content:\"\\e7ff\"}.material-icons.person_pin:before{content:\"\\e55a\"}.material-icons.person_pin_circle:before{content:\"\\e56a\"}.material-icons.personal_video:before{content:\"\\e63b\"}.material-icons.pets:before{content:\"\\e91d\"}.material-icons.phone:before{content:\"\\e0cd\"}.material-icons.phone_android:before{content:\"\\e324\"}.material-icons.phone_bluetooth_speaker:before{content:\"\\e61b\"}.material-icons.phone_callback:before{content:\"\\e649\"}.material-icons.phone_disabled:before{content:\"\\e9cc\"}.material-icons.phone_enabled:before{content:\"\\e9cd\"}.material-icons.phone_forwarded:before{content:\"\\e61c\"}.material-icons.phone_in_talk:before{content:\"\\e61d\"}.material-icons.phone_iphone:before{content:\"\\e325\"}.material-icons.phone_locked:before{content:\"\\e61e\"}.material-icons.phone_missed:before{content:\"\\e61f\"}.material-icons.phone_paused:before{content:\"\\e620\"}.material-icons.phonelink:before{content:\"\\e326\"}.material-icons.phonelink_erase:before{content:\"\\e0db\"}.material-icons.phonelink_lock:before{content:\"\\e0dc\"}.material-icons.phonelink_off:before{content:\"\\e327\"}.material-icons.phonelink_ring:before{content:\"\\e0dd\"}.material-icons.phonelink_setup:before{content:\"\\e0de\"}.material-icons.photo:before{content:\"\\e410\"}.material-icons.photo_album:before{content:\"\\e411\"}.material-icons.photo_camera:before{content:\"\\e412\"}.material-icons.photo_filter:before{content:\"\\e43b\"}.material-icons.photo_library:before{content:\"\\e413\"}.material-icons.photo_size_select_actual:before{content:\"\\e432\"}.material-icons.photo_size_select_large:before{content:\"\\e433\"}.material-icons.photo_size_select_small:before{content:\"\\e434\"}.material-icons.picture_as_pdf:before{content:\"\\e415\"}.material-icons.picture_in_picture:before{content:\"\\e8aa\"}.material-icons.picture_in_picture_alt:before{content:\"\\e911\"}.material-icons.pie_chart:before{content:\"\\e6c4\"}.material-icons.pie_chart_outlined:before{content:\"\\e6c5\"}.material-icons.pin_drop:before{content:\"\\e55e\"}.material-icons.pivot_table_chart:before{content:\"\\e9ce\"}.material-icons.place:before{content:\"\\e55f\"}.material-icons.play_arrow:before{content:\"\\e037\"}.material-icons.play_circle_fill:before,.material-icons.play_circle_filled:before{content:\"\\e038\"}.material-icons.play_circle_outline:before{content:\"\\e039\"}.material-icons.play_for_work:before{content:\"\\e906\"}.material-icons.playlist_add:before{content:\"\\e03b\"}.material-icons.playlist_add_check:before{content:\"\\e065\"}.material-icons.playlist_play:before{content:\"\\e05f\"}.material-icons.plus_one:before{content:\"\\e800\"}.material-icons.policy:before{content:\"\\ea17\"}.material-icons.poll:before{content:\"\\e801\"}.material-icons.polymer:before{content:\"\\e8ab\"}.material-icons.pool:before{content:\"\\eb48\"}.material-icons.portable_wifi_off:before{content:\"\\e0ce\"}.material-icons.portrait:before{content:\"\\e416\"}.material-icons.post_add:before{content:\"\\ea20\"}.material-icons.power:before{content:\"\\e63c\"}.material-icons.power_input:before{content:\"\\e336\"}.material-icons.power_off:before{content:\"\\e646\"}.material-icons.power_settings_new:before{content:\"\\e8ac\"}.material-icons.pregnant_woman:before{content:\"\\e91e\"}.material-icons.present_to_all:before{content:\"\\e0df\"}.material-icons.print:before{content:\"\\e8ad\"}.material-icons.print_disabled:before{content:\"\\e9cf\"}.material-icons.priority_high:before{content:\"\\e645\"}.material-icons.public:before{content:\"\\e80b\"}.material-icons.publish:before{content:\"\\e255\"}.material-icons.query_builder:before{content:\"\\e8ae\"}.material-icons.question_answer:before{content:\"\\e8af\"}.material-icons.queue:before{content:\"\\e03c\"}.material-icons.queue_music:before{content:\"\\e03d\"}.material-icons.queue_play_next:before{content:\"\\e066\"}.material-icons.quick_contacts_dialer:before{content:\"\\e0cf\"}.material-icons.quick_contacts_mail:before{content:\"\\e0d0\"}.material-icons.radio:before{content:\"\\e03e\"}.material-icons.radio_button_checked:before{content:\"\\e837\"}.material-icons.radio_button_off:before{content:\"\\e836\"}.material-icons.radio_button_on:before{content:\"\\e837\"}.material-icons.radio_button_unchecked:before{content:\"\\e836\"}.material-icons.railway_alert:before{content:\"\\e9d1\"}.material-icons.ramen_dining:before{content:\"\\ea64\"}.material-icons.rate_review:before{content:\"\\e560\"}.material-icons.receipt:before{content:\"\\e8b0\"}.material-icons.recent_actors:before{content:\"\\e03f\"}.material-icons.recommend:before{content:\"\\e9d2\"}.material-icons.record_voice_over:before{content:\"\\e91f\"}.material-icons.redeem:before{content:\"\\e8b1\"}.material-icons.redo:before{content:\"\\e15a\"}.material-icons.refresh:before{content:\"\\e5d5\"}.material-icons.remove:before{content:\"\\e15b\"}.material-icons.remove_circle:before{content:\"\\e15c\"}.material-icons.remove_circle_outline:before{content:\"\\e15d\"}.material-icons.remove_done:before{content:\"\\e9d3\"}.material-icons.remove_from_queue:before{content:\"\\e067\"}.material-icons.remove_moderator:before{content:\"\\e9d4\"}.material-icons.remove_red_eye:before{content:\"\\e417\"}.material-icons.remove_shopping_cart:before{content:\"\\e928\"}.material-icons.reorder:before{content:\"\\e8fe\"}.material-icons.repeat:before{content:\"\\e040\"}.material-icons.repeat_on:before{content:\"\\e9d6\"}.material-icons.repeat_one:before{content:\"\\e041\"}.material-icons.repeat_one_on:before{content:\"\\e9d7\"}.material-icons.replay:before{content:\"\\e042\"}.material-icons.replay_10:before{content:\"\\e059\"}.material-icons.replay_30:before{content:\"\\e05a\"}.material-icons.replay_5:before{content:\"\\e05b\"}.material-icons.replay_circle_filled:before{content:\"\\e9d8\"}.material-icons.reply:before{content:\"\\e15e\"}.material-icons.reply_all:before{content:\"\\e15f\"}.material-icons.report:before{content:\"\\e160\"}.material-icons.report_off:before{content:\"\\e170\"}.material-icons.report_problem:before{content:\"\\e8b2\"}.material-icons.reset_tv:before{content:\"\\e9d9\"}.material-icons.restaurant:before{content:\"\\e56c\"}.material-icons.restaurant_menu:before{content:\"\\e561\"}.material-icons.restore:before{content:\"\\e8b3\"}.material-icons.restore_from_trash:before{content:\"\\e938\"}.material-icons.restore_page:before{content:\"\\e929\"}.material-icons.ring_volume:before{content:\"\\e0d1\"}.material-icons.room:before{content:\"\\e8b4\"}.material-icons.room_service:before{content:\"\\eb49\"}.material-icons.rotate_90_degrees_ccw:before{content:\"\\e418\"}.material-icons.rotate_left:before{content:\"\\e419\"}.material-icons.rotate_right:before{content:\"\\e41a\"}.material-icons.rounded_corner:before{content:\"\\e920\"}.material-icons.router:before{content:\"\\e328\"}.material-icons.rowing:before{content:\"\\e921\"}.material-icons.rss_feed:before{content:\"\\e0e5\"}.material-icons.rtt:before{content:\"\\e9ad\"}.material-icons.rv_hookup:before{content:\"\\e642\"}.material-icons.satellite:before{content:\"\\e562\"}.material-icons.save:before{content:\"\\e161\"}.material-icons.save_alt:before{content:\"\\e171\"}.material-icons.saved_search:before{content:\"\\ea11\"}.material-icons.scanner:before{content:\"\\e329\"}.material-icons.scatter_plot:before{content:\"\\e268\"}.material-icons.schedule:before{content:\"\\e8b5\"}.material-icons.schedule_send:before{content:\"\\ea0a\"}.material-icons.school:before{content:\"\\e80c\"}.material-icons.score:before{content:\"\\e269\"}.material-icons.screen_lock_landscape:before{content:\"\\e1be\"}.material-icons.screen_lock_portrait:before{content:\"\\e1bf\"}.material-icons.screen_lock_rotation:before{content:\"\\e1c0\"}.material-icons.screen_rotation:before{content:\"\\e1c1\"}.material-icons.screen_share:before{content:\"\\e0e2\"}.material-icons.sd:before{content:\"\\e9dd\"}.material-icons.sd_card:before{content:\"\\e623\"}.material-icons.sd_storage:before{content:\"\\e1c2\"}.material-icons.search:before{content:\"\\e8b6\"}.material-icons.security:before{content:\"\\e32a\"}.material-icons.segment:before{content:\"\\e94b\"}.material-icons.select_all:before{content:\"\\e162\"}.material-icons.send:before{content:\"\\e163\"}.material-icons.send_and_archive:before{content:\"\\ea0c\"}.material-icons.sentiment_dissatisfied:before{content:\"\\e811\"}.material-icons.sentiment_neutral:before{content:\"\\e812\"}.material-icons.sentiment_satisfied:before{content:\"\\e813\"}.material-icons.sentiment_satisfied_alt:before{content:\"\\e0ed\"}.material-icons.sentiment_very_dissatisfied:before{content:\"\\e814\"}.material-icons.sentiment_very_satisfied:before{content:\"\\e815\"}.material-icons.settings:before{content:\"\\e8b8\"}.material-icons.settings_applications:before{content:\"\\e8b9\"}.material-icons.settings_backup_restore:before{content:\"\\e8ba\"}.material-icons.settings_bluetooth:before{content:\"\\e8bb\"}.material-icons.settings_brightness:before{content:\"\\e8bd\"}.material-icons.settings_cell:before{content:\"\\e8bc\"}.material-icons.settings_display:before{content:\"\\e8bd\"}.material-icons.settings_ethernet:before{content:\"\\e8be\"}.material-icons.settings_input_antenna:before{content:\"\\e8bf\"}.material-icons.settings_input_component:before{content:\"\\e8c0\"}.material-icons.settings_input_composite:before{content:\"\\e8c1\"}.material-icons.settings_input_hdmi:before{content:\"\\e8c2\"}.material-icons.settings_input_svideo:before{content:\"\\e8c3\"}.material-icons.settings_overscan:before{content:\"\\e8c4\"}.material-icons.settings_phone:before{content:\"\\e8c5\"}.material-icons.settings_power:before{content:\"\\e8c6\"}.material-icons.settings_remote:before{content:\"\\e8c7\"}.material-icons.settings_system_daydream:before{content:\"\\e1c3\"}.material-icons.settings_voice:before{content:\"\\e8c8\"}.material-icons.share:before{content:\"\\e80d\"}.material-icons.shield:before{content:\"\\e9e0\"}.material-icons.shop:before{content:\"\\e8c9\"}.material-icons.shop_two:before{content:\"\\e8ca\"}.material-icons.shopping_basket:before{content:\"\\e8cb\"}.material-icons.shopping_cart:before{content:\"\\e8cc\"}.material-icons.short_text:before{content:\"\\e261\"}.material-icons.show_chart:before{content:\"\\e6e1\"}.material-icons.shuffle:before{content:\"\\e043\"}.material-icons.shuffle_on:before{content:\"\\e9e1\"}.material-icons.shutter_speed:before{content:\"\\e43d\"}.material-icons.signal_cellular_4_bar:before{content:\"\\e1c8\"}.material-icons.signal_cellular_alt:before{content:\"\\e202\"}.material-icons.signal_cellular_connected_no_internet_4_bar:before{content:\"\\e1cd\"}.material-icons.signal_cellular_no_sim:before{content:\"\\e1ce\"}.material-icons.signal_cellular_null:before{content:\"\\e1cf\"}.material-icons.signal_cellular_off:before{content:\"\\e1d0\"}.material-icons.signal_wifi_4_bar:before{content:\"\\e1d8\"}.material-icons.signal_wifi_4_bar_lock:before{content:\"\\e1d9\"}.material-icons.signal_wifi_off:before{content:\"\\e1da\"}.material-icons.sim_card:before{content:\"\\e32b\"}.material-icons.sim_card_alert:before{content:\"\\e624\"}.material-icons.single_bed:before{content:\"\\ea48\"}.material-icons.skip_next:before{content:\"\\e044\"}.material-icons.skip_previous:before{content:\"\\e045\"}.material-icons.slideshow:before{content:\"\\e41b\"}.material-icons.slow_motion_video:before{content:\"\\e068\"}.material-icons.smartphone:before{content:\"\\e32c\"}.material-icons.smoke_free:before{content:\"\\eb4a\"}.material-icons.smoking_rooms:before{content:\"\\eb4b\"}.material-icons.sms:before{content:\"\\e625\"}.material-icons.sms_failed:before{content:\"\\e626\"}.material-icons.snooze:before{content:\"\\e046\"}.material-icons.sort:before{content:\"\\e164\"}.material-icons.sort_by_alpha:before{content:\"\\e053\"}.material-icons.spa:before{content:\"\\eb4c\"}.material-icons.space_bar:before{content:\"\\e256\"}.material-icons.speaker:before{content:\"\\e32d\"}.material-icons.speaker_group:before{content:\"\\e32e\"}.material-icons.speaker_notes:before{content:\"\\e8cd\"}.material-icons.speaker_notes_off:before{content:\"\\e92a\"}.material-icons.speaker_phone:before{content:\"\\e0d2\"}.material-icons.speed:before{content:\"\\e9e4\"}.material-icons.spellcheck:before{content:\"\\e8ce\"}.material-icons.sports:before{content:\"\\ea30\"}.material-icons.sports_baseball:before{content:\"\\ea51\"}.material-icons.sports_basketball:before{content:\"\\ea26\"}.material-icons.sports_cricket:before{content:\"\\ea27\"}.material-icons.sports_esports:before{content:\"\\ea28\"}.material-icons.sports_football:before{content:\"\\ea29\"}.material-icons.sports_golf:before{content:\"\\ea2a\"}.material-icons.sports_handball:before{content:\"\\ea33\"}.material-icons.sports_hockey:before{content:\"\\ea2b\"}.material-icons.sports_kabaddi:before{content:\"\\ea34\"}.material-icons.sports_mma:before{content:\"\\ea2c\"}.material-icons.sports_motorsports:before{content:\"\\ea2d\"}.material-icons.sports_rugby:before{content:\"\\ea2e\"}.material-icons.sports_soccer:before{content:\"\\ea2f\"}.material-icons.sports_tennis:before{content:\"\\ea32\"}.material-icons.sports_volleyball:before{content:\"\\ea31\"}.material-icons.square_foot:before{content:\"\\ea49\"}.material-icons.stacked_bar_chart:before{content:\"\\e9e6\"}.material-icons.star:before{content:\"\\e838\"}.material-icons.star_border:before{content:\"\\e83a\"}.material-icons.star_half:before{content:\"\\e839\"}.material-icons.star_outline:before{content:\"\\e83a\"}.material-icons.stars:before{content:\"\\e8d0\"}.material-icons.stay_current_landscape:before{content:\"\\e0d3\"}.material-icons.stay_current_portrait:before{content:\"\\e0d4\"}.material-icons.stay_primary_landscape:before{content:\"\\e0d5\"}.material-icons.stay_primary_portrait:before{content:\"\\e0d6\"}.material-icons.stop:before{content:\"\\e047\"}.material-icons.stop_screen_share:before{content:\"\\e0e3\"}.material-icons.storage:before{content:\"\\e1db\"}.material-icons.store:before{content:\"\\e8d1\"}.material-icons.store_mall_directory:before{content:\"\\e563\"}.material-icons.storefront:before{content:\"\\ea12\"}.material-icons.straighten:before{content:\"\\e41c\"}.material-icons.stream:before{content:\"\\e9e9\"}.material-icons.streetview:before{content:\"\\e56e\"}.material-icons.strikethrough_s:before{content:\"\\e257\"}.material-icons.style:before{content:\"\\e41d\"}.material-icons.subdirectory_arrow_left:before{content:\"\\e5d9\"}.material-icons.subdirectory_arrow_right:before{content:\"\\e5da\"}.material-icons.subject:before{content:\"\\e8d2\"}.material-icons.subscriptions:before{content:\"\\e064\"}.material-icons.subtitles:before{content:\"\\e048\"}.material-icons.subway:before{content:\"\\e56f\"}.material-icons.supervised_user_circle:before{content:\"\\e939\"}.material-icons.supervisor_account:before{content:\"\\e8d3\"}.material-icons.surround_sound:before{content:\"\\e049\"}.material-icons.swap_calls:before{content:\"\\e0d7\"}.material-icons.swap_horiz:before{content:\"\\e8d4\"}.material-icons.swap_horizontal_circle:before{content:\"\\e933\"}.material-icons.swap_vert:before{content:\"\\e8d5\"}.material-icons.swap_vert_circle:before,.material-icons.swap_vertical_circle:before{content:\"\\e8d6\"}.material-icons.swipe:before{content:\"\\e9ec\"}.material-icons.switch_account:before{content:\"\\e9ed\"}.material-icons.switch_camera:before{content:\"\\e41e\"}.material-icons.switch_video:before{content:\"\\e41f\"}.material-icons.sync:before{content:\"\\e627\"}.material-icons.sync_alt:before{content:\"\\ea18\"}.material-icons.sync_disabled:before{content:\"\\e628\"}.material-icons.sync_problem:before{content:\"\\e629\"}.material-icons.system_update:before{content:\"\\e62a\"}.material-icons.system_update_alt:before,.material-icons.system_update_tv:before{content:\"\\e8d7\"}.material-icons.tab:before{content:\"\\e8d8\"}.material-icons.tab_unselected:before{content:\"\\e8d9\"}.material-icons.table_chart:before{content:\"\\e265\"}.material-icons.tablet:before{content:\"\\e32f\"}.material-icons.tablet_android:before{content:\"\\e330\"}.material-icons.tablet_mac:before{content:\"\\e331\"}.material-icons.tag:before{content:\"\\e9ef\"}.material-icons.tag_faces:before{content:\"\\e420\"}.material-icons.takeout_dining:before{content:\"\\ea74\"}.material-icons.tap_and_play:before{content:\"\\e62b\"}.material-icons.terrain:before{content:\"\\e564\"}.material-icons.text_fields:before{content:\"\\e262\"}.material-icons.text_format:before{content:\"\\e165\"}.material-icons.text_rotate_up:before{content:\"\\e93a\"}.material-icons.text_rotate_vertical:before{content:\"\\e93b\"}.material-icons.text_rotation_angledown:before{content:\"\\e93c\"}.material-icons.text_rotation_angleup:before{content:\"\\e93d\"}.material-icons.text_rotation_down:before{content:\"\\e93e\"}.material-icons.text_rotation_none:before{content:\"\\e93f\"}.material-icons.textsms:before{content:\"\\e0d8\"}.material-icons.texture:before{content:\"\\e421\"}.material-icons.theater_comedy:before{content:\"\\ea66\"}.material-icons.theaters:before{content:\"\\e8da\"}.material-icons.thumb_down:before{content:\"\\e8db\"}.material-icons.thumb_down_alt:before{content:\"\\e816\"}.material-icons.thumb_down_off_alt:before{content:\"\\e9f2\"}.material-icons.thumb_up:before{content:\"\\e8dc\"}.material-icons.thumb_up_alt:before{content:\"\\e817\"}.material-icons.thumb_up_off_alt:before{content:\"\\e9f3\"}.material-icons.thumbs_up_down:before{content:\"\\e8dd\"}.material-icons.time_to_leave:before{content:\"\\e62c\"}.material-icons.timelapse:before{content:\"\\e422\"}.material-icons.timeline:before{content:\"\\e922\"}.material-icons.timer:before{content:\"\\e425\"}.material-icons.timer_10:before{content:\"\\e423\"}.material-icons.timer_3:before{content:\"\\e424\"}.material-icons.timer_off:before{content:\"\\e426\"}.material-icons.title:before{content:\"\\e264\"}.material-icons.toc:before{content:\"\\e8de\"}.material-icons.today:before{content:\"\\e8df\"}.material-icons.toggle_off:before{content:\"\\e9f5\"}.material-icons.toggle_on:before{content:\"\\e9f6\"}.material-icons.toll:before{content:\"\\e8e0\"}.material-icons.tonality:before{content:\"\\e427\"}.material-icons.touch_app:before{content:\"\\e913\"}.material-icons.toys:before{content:\"\\e332\"}.material-icons.track_changes:before{content:\"\\e8e1\"}.material-icons.traffic:before{content:\"\\e565\"}.material-icons.train:before{content:\"\\e570\"}.material-icons.tram:before{content:\"\\e571\"}.material-icons.transfer_within_a_station:before{content:\"\\e572\"}.material-icons.transform:before{content:\"\\e428\"}.material-icons.transit_enterexit:before{content:\"\\e579\"}.material-icons.translate:before{content:\"\\e8e2\"}.material-icons.trending_down:before{content:\"\\e8e3\"}.material-icons.trending_flat:before,.material-icons.trending_neutral:before{content:\"\\e8e4\"}.material-icons.trending_up:before{content:\"\\e8e5\"}.material-icons.trip_origin:before{content:\"\\e57b\"}.material-icons.tune:before{content:\"\\e429\"}.material-icons.turned_in:before{content:\"\\e8e6\"}.material-icons.turned_in_not:before{content:\"\\e8e7\"}.material-icons.tv:before{content:\"\\e333\"}.material-icons.tv_off:before{content:\"\\e647\"}.material-icons.two_wheeler:before{content:\"\\e9f9\"}.material-icons.unarchive:before{content:\"\\e169\"}.material-icons.undo:before{content:\"\\e166\"}.material-icons.unfold_less:before{content:\"\\e5d6\"}.material-icons.unfold_more:before{content:\"\\e5d7\"}.material-icons.unsubscribe:before{content:\"\\e0eb\"}.material-icons.update:before{content:\"\\e923\"}.material-icons.upload_file:before{content:\"\\e9fc\"}.material-icons.usb:before{content:\"\\e1e0\"}.material-icons.verified_user:before{content:\"\\e8e8\"}.material-icons.vertical_align_bottom:before{content:\"\\e258\"}.material-icons.vertical_align_center:before{content:\"\\e259\"}.material-icons.vertical_align_top:before{content:\"\\e25a\"}.material-icons.vertical_split:before{content:\"\\e949\"}.material-icons.vibration:before{content:\"\\e62d\"}.material-icons.video_call:before{content:\"\\e070\"}.material-icons.video_collection:before{content:\"\\e04a\"}.material-icons.video_label:before{content:\"\\e071\"}.material-icons.video_library:before{content:\"\\e04a\"}.material-icons.videocam:before{content:\"\\e04b\"}.material-icons.videocam_off:before{content:\"\\e04c\"}.material-icons.videogame_asset:before{content:\"\\e338\"}.material-icons.view_agenda:before{content:\"\\e8e9\"}.material-icons.view_array:before{content:\"\\e8ea\"}.material-icons.view_carousel:before{content:\"\\e8eb\"}.material-icons.view_column:before{content:\"\\e8ec\"}.material-icons.view_comfortable:before,.material-icons.view_comfy:before{content:\"\\e42a\"}.material-icons.view_compact:before{content:\"\\e42b\"}.material-icons.view_day:before{content:\"\\e8ed\"}.material-icons.view_headline:before{content:\"\\e8ee\"}.material-icons.view_in_ar:before{content:\"\\e9fe\"}.material-icons.view_list:before{content:\"\\e8ef\"}.material-icons.view_module:before{content:\"\\e8f0\"}.material-icons.view_quilt:before{content:\"\\e8f1\"}.material-icons.view_stream:before{content:\"\\e8f2\"}.material-icons.view_week:before{content:\"\\e8f3\"}.material-icons.vignette:before{content:\"\\e435\"}.material-icons.visibility:before{content:\"\\e8f4\"}.material-icons.visibility_off:before{content:\"\\e8f5\"}.material-icons.voice_chat:before{content:\"\\e62e\"}.material-icons.voice_over_off:before{content:\"\\e94a\"}.material-icons.voicemail:before{content:\"\\e0d9\"}.material-icons.volume_down:before{content:\"\\e04d\"}.material-icons.volume_mute:before{content:\"\\e04e\"}.material-icons.volume_off:before{content:\"\\e04f\"}.material-icons.volume_up:before{content:\"\\e050\"}.material-icons.volunteer_activism:before{content:\"\\ea70\"}.material-icons.vpn_key:before{content:\"\\e0da\"}.material-icons.vpn_lock:before{content:\"\\e62f\"}.material-icons.wallet_giftcard:before{content:\"\\e8f6\"}.material-icons.wallet_membership:before{content:\"\\e8f7\"}.material-icons.wallet_travel:before{content:\"\\e8f8\"}.material-icons.wallpaper:before{content:\"\\e1bc\"}.material-icons.warning:before{content:\"\\e002\"}.material-icons.watch:before{content:\"\\e334\"}.material-icons.watch_later:before{content:\"\\e924\"}.material-icons.waterfall_chart:before{content:\"\\ea00\"}.material-icons.waves:before{content:\"\\e176\"}.material-icons.wb_auto:before{content:\"\\e42c\"}.material-icons.wb_cloudy:before{content:\"\\e42d\"}.material-icons.wb_incandescent:before{content:\"\\e42e\"}.material-icons.wb_iridescent:before{content:\"\\e436\"}.material-icons.wb_shade:before{content:\"\\ea01\"}.material-icons.wb_sunny:before{content:\"\\e430\"}.material-icons.wb_twighlight:before{content:\"\\ea02\"}.material-icons.wc:before{content:\"\\e63d\"}.material-icons.web:before{content:\"\\e051\"}.material-icons.web_asset:before{content:\"\\e069\"}.material-icons.weekend:before{content:\"\\e16b\"}.material-icons.whatshot:before{content:\"\\e80e\"}.material-icons.where_to_vote:before{content:\"\\e177\"}.material-icons.widgets:before{content:\"\\e1bd\"}.material-icons.wifi:before{content:\"\\e63e\"}.material-icons.wifi_lock:before{content:\"\\e1e1\"}.material-icons.wifi_off:before{content:\"\\e648\"}.material-icons.wifi_tethering:before{content:\"\\e1e2\"}.material-icons.work:before{content:\"\\e8f9\"}.material-icons.work_off:before{content:\"\\e942\"}.material-icons.work_outline:before{content:\"\\e943\"}.material-icons.workspaces_filled:before{content:\"\\ea0d\"}.material-icons.workspaces_outline:before{content:\"\\ea0f\"}.material-icons.wrap_text:before{content:\"\\e25b\"}.material-icons.youtube_searched_for:before{content:\"\\e8fa\"}.material-icons.zoom_in:before{content:\"\\e8ff\"}.material-icons.zoom_out:before{content:\"\\e900\"}.material-icons.zoom_out_map:before{content:\"\\e56b\"}";
    styleInject(css_248z$1);

    var IconComponent = {
      'css': `rm-icon,[is="rm-icon"]{ font-size: 24px; }`,

      'exports': {
        onMounted() {
            this.root.classList.add("material-icons");
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template('<slot expr282="expr282"></slot>', [{
          'type': bindingTypes.SLOT,
          'attributes': [],
          'name': 'default',
          'redundantAttribute': 'expr282',
          'selector': '[expr282]'
        }]);
      },

      'name': 'rm-icon'
    };

    var POINTER_CONTROLLER = Symbol("pointer-controller");
    function pointerController(element, callback) {
        var instance = element[POINTER_CONTROLLER];
        if (instance) {
            window.removeEventListener("touchstart", instance._window_ontouchstart);
            if (callback != null) {
                window.addEventListener("touchstart", instance._window_ontouchstart);
            }
            instance.callback = callback;
            return;
        }
        else if (callback == null) {
            return;
        }
        var touchShouldFire;
        var lastTouch = null;
        var ontouchstart = function (event) {
            if (lastTouch == null || event.changedTouches[0].identifier === lastTouch) {
                return;
            }
            touchShouldFire = false;
        };
        if (callback != null) {
            window.addEventListener("touchstart", ontouchstart);
        }
        var eventHandled = false;
        element[POINTER_CONTROLLER] = instance = {
            _window_ontouchstart: ontouchstart,
            ontouchstart: function (event) {
                if (!instance.callback || lastTouch != null) {
                    return;
                }
                lastTouch = event.changedTouches[0].identifier;
                touchShouldFire = true;
            },
            ontouchmove: function (event) {
                if (!instance.callback) {
                    return;
                }
                touchShouldFire = false;
            },
            ontouchend: function (event) {
                if (!instance.callback) {
                    return;
                }
                lastTouch = null;
                eventHandled = true;
                setTimeout(function () { return eventHandled = false; }, 200);
                if (!touchShouldFire) {
                    return;
                }
                instance.callback.call(this, event);
            },
            ontouchcancel: function (event) {
                if (!instance.callback) {
                    return;
                }
                lastTouch = null;
                eventHandled = true;
                setTimeout(function () { return eventHandled = false; }, 200);
            },
            onmousedown: function (event) {
                if (!instance.callback || eventHandled) {
                    return;
                }
                instance.callback.call(this, event);
            },
            callback: callback
        };
        element.addEventListener("touchstart", instance.ontouchstart);
        element.addEventListener("touchmove", instance.ontouchmove);
        element.addEventListener("touchend", instance.ontouchend);
        element.addEventListener("touchcancel", instance.ontouchcancel);
        element.addEventListener("mousedown", instance.onmousedown);
    }

    var ButtonComponent = {
      'css': `rm-button,[is="rm-button"]{ font-size: 14px; display: inline-block; margin-right: 8px; vertical-align: middle; border-radius: 4px; background: transparent; height: 2.571em; } rm-button button,[is="rm-button"] button{ font-size: inherit; font-weight: inherit; cursor: pointer; border: none; padding: 0 16px; border-radius: inherit; background: inherit; box-sizing: border-box; vertical-align: inherit; width: 100%; height: 100%; color: inherit; outline: none; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; position: relative; } rm-button[dense-padding]:not([dense-padding="false"]) button,[is="rm-button"][dense-padding]:not([dense-padding="false"]) button{ padding: 0 8px; } rm-button button::-moz-focus-inner,[is="rm-button"] button::-moz-focus-inner{ border: none; } rm-button[variant=icon],[is="rm-button"][variant=icon]{ border-radius: 50%; } rm-button[variant=icon] button,[is="rm-button"][variant=icon] button{ padding: 0.5714285714285714em; height: 2.857142857142857em; width: 2.857142857142857em; } rm-button[variant=icon] button rm-icon,[is="rm-button"][variant=icon] button rm-icon{ font-size: 1.7142857142857142em; } rm-button[variant=icon],[is="rm-button"][variant=icon]{ height: unset; } rm-button[variant="unelevated"],[is="rm-button"][variant="unelevated"],rm-button[variant="raised"],[is="rm-button"][variant="raised"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } .rm-black-surface rm-button[variant="unelevated"],.rm-black-surface [is="rm-button"][variant="unelevated"],.rm-black-surface rm-button[variant="raised"],.rm-black-surface [is="rm-button"][variant="raised"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } .rm-dark-surface rm-button[variant="unelevated"],.rm-dark-surface [is="rm-button"][variant="unelevated"],.rm-dark-surface rm-button[variant="raised"],.rm-dark-surface [is="rm-button"][variant="raised"]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } .rm-light-surface rm-button[variant="unelevated"],.rm-light-surface [is="rm-button"][variant="unelevated"],.rm-light-surface rm-button[variant="raised"],.rm-light-surface [is="rm-button"][variant="raised"]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } .rm-white-surface rm-button[variant="unelevated"],.rm-white-surface [is="rm-button"][variant="unelevated"],.rm-white-surface rm-button[variant="raised"],.rm-white-surface [is="rm-button"][variant="raised"]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } rm-button[variant="outlined"] button::before,[is="rm-button"][variant="outlined"] button::before{ content: ""; position: absolute; top: 0; bottom: 0; right: 0; left: 0; border: 1px solid rgba(0, 0, 0, .12); border: 1px solid rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); border-radius: inherit; } .rm-black-surface rm-button[variant="outlined"] button::before,.rm-black-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(255, 255, 255, .12); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-dark-surface rm-button[variant="outlined"] button::before,.rm-dark-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(255, 255, 255, .12); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-light-surface rm-button[variant="outlined"] button::before,.rm-light-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(0, 0, 0, .12); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-white-surface rm-button[variant="outlined"] button::before,.rm-white-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(0, 0, 0, .12); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); } rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-button[color="primary"][variant="raised"],[is="rm-button"][color="primary"][variant="raised"],rm-button[color="primary"][variant="unelevated"],[is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary, 255, 255, 255)); } .rm-black-surface rm-button[color="primary"][variant="raised"],.rm-black-surface [is="rm-button"][color="primary"][variant="raised"],.rm-black-surface rm-button[color="primary"][variant="unelevated"],.rm-black-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-black, 255, 255, 255)); } .rm-dark-surface rm-button[color="primary"][variant="raised"],.rm-dark-surface [is="rm-button"][color="primary"][variant="raised"],.rm-dark-surface rm-button[color="primary"][variant="unelevated"],.rm-dark-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-dark, 255, 255, 255)); } .rm-light-surface rm-button[color="primary"][variant="raised"],.rm-light-surface [is="rm-button"][color="primary"][variant="raised"],.rm-light-surface rm-button[color="primary"][variant="unelevated"],.rm-light-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-light, 255, 255, 255)); } .rm-white-surface rm-button[color="primary"][variant="raised"],.rm-white-surface [is="rm-button"][color="primary"][variant="raised"],.rm-white-surface rm-button[color="primary"][variant="unelevated"],.rm-white-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-white, 255, 255, 255)); } rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(0, 0, 255); color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-button[color="accent"][variant="raised"],[is="rm-button"][color="accent"][variant="raised"],rm-button[color="accent"][variant="unelevated"],[is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent, 0, 0, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent, 255, 255, 255)); } .rm-black-surface rm-button[color="accent"][variant="raised"],.rm-black-surface [is="rm-button"][color="accent"][variant="raised"],.rm-black-surface rm-button[color="accent"][variant="unelevated"],.rm-black-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-black, 30, 144, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-button[color="accent"][variant="raised"],.rm-dark-surface [is="rm-button"][color="accent"][variant="raised"],.rm-dark-surface rm-button[color="accent"][variant="unelevated"],.rm-dark-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-dark, 30, 144, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-button[color="accent"][variant="raised"],.rm-light-surface [is="rm-button"][color="accent"][variant="raised"],.rm-light-surface rm-button[color="accent"][variant="unelevated"],.rm-light-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-light, 0, 0, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-button[color="accent"][variant="raised"],.rm-white-surface [is="rm-button"][color="accent"][variant="raised"],.rm-white-surface rm-button[color="accent"][variant="unelevated"],.rm-white-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-white, 0, 0, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 0, 0); color: rgb(var(--color-warn, 255, 0, 0)); } .rm-black-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 69, 0); color: rgb(var(--color-warn-on-black, 255, 69, 0)); } .rm-dark-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 69, 0); color: rgb(var(--color-warn-on-dark, 255, 69, 0)); } .rm-light-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 0, 0); color: rgb(var(--color-warn-on-light, 255, 0, 0)); } .rm-white-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 0, 0); color: rgb(var(--color-warn-on-white, 255, 0, 0)); } rm-button[color="warn"][variant="raised"],[is="rm-button"][color="warn"][variant="raised"],rm-button[color="warn"][variant="unelevated"],[is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 0, 0); background: rgb(var(--color-warn, 255, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn, 255, 255, 255)); } .rm-black-surface rm-button[color="warn"][variant="raised"],.rm-black-surface [is="rm-button"][color="warn"][variant="raised"],.rm-black-surface rm-button[color="warn"][variant="unelevated"],.rm-black-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 69, 0); background: rgb(var(--color-warn-on-black, 255, 69, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-black, 255, 255, 255)); } .rm-dark-surface rm-button[color="warn"][variant="raised"],.rm-dark-surface [is="rm-button"][color="warn"][variant="raised"],.rm-dark-surface rm-button[color="warn"][variant="unelevated"],.rm-dark-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 69, 0); background: rgb(var(--color-warn-on-dark, 255, 69, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-dark, 255, 255, 255)); } .rm-light-surface rm-button[color="warn"][variant="raised"],.rm-light-surface [is="rm-button"][color="warn"][variant="raised"],.rm-light-surface rm-button[color="warn"][variant="unelevated"],.rm-light-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 0, 0); background: rgb(var(--color-warn-on-light, 255, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-light, 255, 255, 255)); } .rm-white-surface rm-button[color="warn"][variant="raised"],.rm-white-surface [is="rm-button"][color="warn"][variant="raised"],.rm-white-surface rm-button[color="warn"][variant="unelevated"],.rm-white-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 0, 0); background: rgb(var(--color-warn-on-white, 255, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-white, 255, 255, 255)); } rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-black-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-button[disabled][variant="raised"]:not([disabled="false"]),[is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),rm-button[disabled][variant="unelevated"]:not([disabled="false"]),[is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-black-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-black-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-black-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-black-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-dark-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-dark-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-dark-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-light-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-light-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-light-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-white-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-white-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-white-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-button[disabled]:not([disabled="false"]) button,[is="rm-button"][disabled]:not([disabled="false"]) button{ background: transparent; box-shadow: none; cursor: initial; } rm-button[variant=icon][dense],[is="rm-button"][variant=icon][dense]{ margin-right: 0.2857142857142857em; } rm-button[variant=icon][dense] button,[is="rm-button"][variant=icon][dense] button{ height: unset; width: unset; padding: 0; } rm-button[variant]:last-child,[is="rm-button"][variant]:last-child,rm-button:last-child,[is="rm-button"]:last-child{ margin-right: 0; }`,

      'exports': {
        _updateRipple() {
            const button = this.root.querySelector("button");
            const rippleOptions = this.isIcon() ? { centered: true } : {};
            if (!this.isRaised()) {
                rippleOptions.highlight = true;
                if (!this.isFlat() && !this.isIcon()) {
                    rippleOptions.instantHighlight = true;
                }
            }
            rippleOptions.color = "currentColor";
            rippleOptions.stopRippling = true;
            Object.entries(this.props).forEach(entry => {
                const [key, value] = entry;
                const rippleKeyMatch = key.match(/ripple([A-Z]\w+)/);
                if (!rippleKeyMatch) {
                    return;
                }
                let rippleKey = rippleKeyMatch[1];
                rippleKey = rippleKey[0].toLowerCase() + rippleKey.slice(1);
                const floatValue = parseFloat(value);
                rippleOptions[rippleKey] = isNaN(floatValue) ? value != null && value !== "false" && value !== false : floatValue;
            });
            rippleOptions.detectLabel = false;
            rippleOptions.disabled = this.isDisabled();
            return ripple(button, rippleOptions);
        },

        onMounted() {
            const button = this.root.querySelector("button");
            button.addEventListener("pointerdown", event => {
                if (this.state.pressed) {
                    return;
                }
                this.update({ pressed: true });
                let cancel = ev => {
                    if (ev.pointerId !== event.pointerId) {
                        return;
                    }
                    this.update({ pressed: false });
                    window.removeEventListener("pointerup", cancel);
                    window.removeEventListener("pointercancel", cancel);
                };
                window.addEventListener("pointerup", cancel);
                window.addEventListener("pointercancel", cancel);
            });
            if (this.isRaised()) {
                button.classList.add("mdc-elevation-transition");
                button.classList.add("mdc-elevation--z2");
            }
            let rippleObj = this._updateRipple();
            let shouldBeClick = false;
            button.addEventListener("keydown", event => {
                if (event.keyCode === 13) {
                    shouldBeClick = true;
                    requestAnimationFrame(() => {
                        shouldBeClick = false;
                    }, 0);
                }
            });
            button.addEventListener("keyup", event => {
                if (event.keyCode === 32) {
                    shouldBeClick = true;
                    requestAnimationFrame(() => {
                        shouldBeClick = false;
                    }, 0);
                }
            });
            let onclick = null;
            button.addEventListener("click", () => {
                if (shouldBeClick) {
                    rippleObj.start(null, null, null).end();
                    if (onclick) {
                        onclick();
                    }
                }
            });
            let openOverlay = this.props.openOverlay;
            if (openOverlay) {
                pointerController(button, onclick = () => {
                    let overlay = document.querySelector("#" + openOverlay);
                    if (!overlay) {
                        return;
                    }
                    let tag = overlay[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                    if (tag && tag.open) {
                        if (tag && tag.setAnchorElement) {
                            tag.setAnchorElement(button);
                        }
                        tag.open();
                    }
                });
            }
        },

        onBeforeUnmount() {
            pointerController(this.root.querySelector("button"), null);
        },

        onUpdated() {
            let button = this.root.querySelector("button");
            if (this.isRaised()) {
                button.classList.add("mdc-elevation-transition");
                button.classList.add("mdc-elevation--z"+ (this.state.pressed ? 8: 2));
                button.classList.remove("mdc-elevation--z"+ (this.state.pressed ? 2: 8));
            }
            this._updateRipple();
        },

        isFlat() {
            return this.props.variant == null || this.props.variant === "flat";
        },

        isRaised() {
            return this.props.variant != null && this.props.variant === "raised";
        },

        isOutlined() {
            return this.props.variant != null && this.props.variant === "outlined";
        },

        isUnelevated() {
            return this.props.variant != null && this.props.variant === "unelevated";
        },

        isIcon() {
            return this.props.variant != null && this.props.variant === "icon";
        },

        isDisabled() {
            let disabled = this.props.disabled;
            return disabled != null && (typeof disabled === "string" ? disabled !== "false" : !!disabled);
        },

        setDisabled(disabled) {
            if (disabled) {
                this.root.setAttribute("disabled", "");
            } else {
                this.root.removeAttribute("disabled");
            }
            this.update();
        },

        components: {
            "rm-icon": IconComponent
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<button expr293="expr293"></button><button expr295="expr295"></button>',
          [{
            'type': bindingTypes.IF,

            'evaluate': function(scope) {
              return !scope.isIcon();
            },

            'redundantAttribute': 'expr293',
            'selector': '[expr293]',

            'template': template('<slot expr294="expr294"></slot>', [{
              'expressions': [{
                'type': expressionTypes.ATTRIBUTE,
                'name': 'style',

                'evaluate': function(scope) {
                  return scope.props.buttonStyle;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'disabled',

                'evaluate': function(scope) {
                  return scope.isDisabled();
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'type',

                'evaluate': function(scope) {
                  return scope.props.type;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'tabindex',

                'evaluate': function(scope) {
                  return scope.props.tabindex;
                }
              }]
            }, {
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'default',
              'redundantAttribute': 'expr294',
              'selector': '[expr294]'
            }])
          }, {
            'type': bindingTypes.IF,

            'evaluate': function(scope) {
              return scope.isIcon();
            },

            'redundantAttribute': 'expr295',
            'selector': '[expr295]',

            'template': template('<rm-icon expr296="expr296"></rm-icon>', [{
              'expressions': [{
                'type': expressionTypes.ATTRIBUTE,
                'name': 'disabled',

                'evaluate': function(scope) {
                  return scope.isDisabled();
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'type',

                'evaluate': function(scope) {
                  return scope.props.type;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'tabindex',

                'evaluate': function(scope) {
                  return scope.props.tabindex;
                }
              }]
            }, {
              'type': bindingTypes.TAG,
              'getComponent': getComponent,

              'evaluate': function(scope) {
                return 'rm-icon';
              },

              'slots': [{
                'id': 'default',
                'html': '<slot expr297="expr297"></slot>',

                'bindings': [{
                  'type': bindingTypes.SLOT,
                  'attributes': [],
                  'name': 'default',
                  'redundantAttribute': 'expr297',
                  'selector': '[expr297]'
                }]
              }],

              'attributes': [{
                'type': expressionTypes.ATTRIBUTE,
                'name': 'style',

                'evaluate': function(scope) {
                  return scope.props.iconStyle;
                }
              }],

              'redundantAttribute': 'expr296',
              'selector': '[expr296]'
            }])
          }]
        );
      },

      'name': 'rm-button'
    };

    var CheckboxComponent = {
      'css': `rm-checkbox,[is="rm-checkbox"]{ position: relative; font: message-box; font-size: 16px; cursor: pointer; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; display: inline-block; margin-right: 8px; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; } rm-checkbox label,[is="rm-checkbox"] label{ cursor: inherit; display: inline-block; } rm-checkbox [ref="box"],[is="rm-checkbox"] [ref="box"]{ height: 1em; width: 1em; position: relative; display: inline-block; vertical-align: middle; box-sizing: border-box; border-radius: 0.125em; background: transparent; margin: 0.25em .5em 0.25em 0; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; color: rgb(0, 0, 255); color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-checkbox [ref="box"],.rm-black-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-checkbox [ref="box"],.rm-dark-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-checkbox [ref="box"],.rm-light-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-checkbox [ref="box"],.rm-white-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-checkbox [ref="border"],[is="rm-checkbox"] [ref="border"]{ border: 0.125em solid rgba(0, 0, 0, .42); border: 0.125em solid rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); height: 100%; width: 100%; box-sizing: border-box; border-radius: inherit; } .rm-black-surface rm-checkbox [ref="border"],.rm-black-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-checkbox [ref="border"],.rm-dark-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-checkbox [ref="border"],.rm-light-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-checkbox [ref="border"],.rm-white-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-checkbox [ref="check-box"],[is="rm-checkbox"] [ref="check-box"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent, 0, 0, 255)); position: absolute; top: 0; bottom: 0; right: 0; left: 0; text-align: center; transition: opacity linear 200ms; opacity: 0; border-radius: inherit; } .rm-black-surface rm-checkbox [ref="check-box"],.rm-black-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-checkbox [ref="check-box"],.rm-dark-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-checkbox [ref="check-box"],.rm-light-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-checkbox [ref="check-box"],.rm-white-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-checkbox [ref="check"],[is="rm-checkbox"] [ref="check"]{ width: 60%; height: 100%; box-sizing: border-box; border: solid rgb(255, 255, 255); border: solid rgb(var(--color-on-accent, 255, 255, 255)); border-width: 0 0.1875em 0.1875em 0; border: none; display: inline-block; transform: scale(.65) translateY(-0.125em) rotate(45deg); position: relative; } .rm-black-surface rm-checkbox [ref="check"],.rm-black-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-checkbox [ref="check"],.rm-dark-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-checkbox [ref="check"],.rm-light-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-checkbox [ref="check"],.rm-white-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-checkbox [ref="check"] div:first-child,[is="rm-checkbox"] [ref="check"] div:first-child{ right: 0; background: rgb(255, 255, 255); background: rgb(var(--color-on-accent, 255, 255, 255)); position: absolute; height: 0.1875em; left: 0; bottom: 0; transition: none; transform-origin: left center; transform: scaleX(0); } .rm-black-surface rm-checkbox [ref="check"] div:first-child,.rm-black-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-checkbox [ref="check"] div:first-child,.rm-dark-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-checkbox [ref="check"] div:first-child,.rm-light-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-checkbox [ref="check"] div:first-child,.rm-white-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-checkbox [ref="check"] div:last-child,[is="rm-checkbox"] [ref="check"] div:last-child{ top: 0; background: rgb(255, 255, 255); background: rgb(var(--color-on-accent, 255, 255, 255)); position: absolute; width: 0.1875em; bottom: 0.15em; right: 0; transform: scaleY(0); transition: none; transform-origin: bottom center; } .rm-black-surface rm-checkbox [ref="check"] div:last-child,.rm-black-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-checkbox [ref="check"] div:last-child,.rm-dark-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-checkbox [ref="check"] div:last-child,.rm-light-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-checkbox [ref="check"] div:last-child,.rm-white-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-checkbox.rm-checked [ref="check"] div:first-child,[is="rm-checkbox"].rm-checked [ref="check"] div:first-child{ transform: scaleX(1); transition: transform 100ms linear; } rm-checkbox.rm-checked [ref="check"] div:last-child,[is="rm-checkbox"].rm-checked [ref="check"] div:last-child{ transform: scaleY(1); transition: transform 100ms linear 100ms; } rm-checkbox.rm-checked [ref="check-box"],[is="rm-checkbox"].rm-checked [ref="check-box"]{ opacity: 1; } rm-checkbox input,[is="rm-checkbox"] input{ border: 0; position: absolute; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; outline: 0; -webkit-appearance: none; -moz-appearance: none; }`,

      'exports': {
        onMounted() {
            let box = this.root.querySelector("[ref=box]");
            let input = this.root.querySelector("input");
            let boxRipple = ripple(
                box,
                {
                    centered: true,
                    unbounded: true,
                    radius: 16,
                    unboundedFocus: true,
                    focusTarget: input,
                    color: "currentColor"
                }
            );
            let refresh = (event) => {
                if (input.checked) {
                    this.root.classList.add("rm-checked");
                } else {
                    this.root.classList.remove("rm-checked");
                }
            };
            input.addEventListener("change", refresh);
            Object.defineProperty(this.root, "checked", {
                get() {
                    return input.checked;
                },
                set(checked) {
                    input.checked = checked;
                    refresh();
                }
            });
            refresh();
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<label><input expr280="expr280" type="checkbox" tabindex="0"/><div ref="box"><div ref="border"></div><div ref="check-box"><div ref="check"><div></div><div></div></div></div></div><div expr281="expr281" style="vertical-align: top; display: inline-block;"> </div></label>',
          [{
            'redundantAttribute': 'expr280',
            'selector': '[expr280]',

            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'checked',

              'evaluate': function(scope) {
                return scope.props.checked;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'name',

              'evaluate': function(scope) {
                return scope.props.name;
              }
            }]
          }, {
            'redundantAttribute': 'expr281',
            'selector': '[expr281]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.label;
              }
            }]
          }]
        );
      },

      'name': 'rm-checkbox'
    };

    var DialogComponent = {
      'css': `rm-dialog,[is="rm-dialog"]{ position: fixed; display: block; top: 0; bottom: 0; right: 0; left: 0; padding: 40px; background: rgba(0, 0, 0, .42); background: rgba(0, 0, 0, var(--color-opacity-secondary, .42)); box-sizing: border-box; z-index: 100; font-size: 0; text-align: center; } rm-dialog > [ref=aligner],[is="rm-dialog"] > [ref=aligner]{ width: 0; height: 100%; vertical-align: middle; display: inline-block; } rm-dialog > [ref=container],[is="rm-dialog"] > [ref=container]{ width: 100%; font-size: 16px; vertical-align: middle; display: inline-block; max-width: 560px; text-align: initial; } rm-dialog > [ref=container] > [ref=title],[is="rm-dialog"] > [ref=container] > [ref=title]{ min-height: 8px; border-radius: 4px 4px 0 0; } rm-dialog > [ref=container] > [ref=content],[is="rm-dialog"] > [ref=container] > [ref=content]{ overflow: auto; } rm-dialog > [ref=container] > [ref=actions],[is="rm-dialog"] > [ref=container] > [ref=actions]{ min-height: 8px; border-radius: 0 0 4px 4px; }`,

      'exports': {
        state: {
            clickedContainer: false
        },

        _onresize: null,

        onMounted() {
            this.root.addEventListener("click", () => {
                if (this.state.clickedContainer) {
                    return;
                }
                this.dismiss(0);
            });
            window.addEventListener("resize", this._onresize = () => {
                this.update();
            });
            this.root.style.display = "none";
            this.root.dismiss = (result) => {
                this.dismiss(result);
            };
            this.root.open = (...detail) => {
                this.open(...detail);
            };
            this.root._wrapTo = (wrapper) => {
                wrapper.open = this.root.open;
                wrapper.dismiss = this.root.dismiss;
                try {
                    Object.defineProperties(wrapper, {
                        opened: {
                            get: () => {
                                return this.opened;
                            },
                            configurable: true
                        },
                        result: {
                            get: () => {
                                return this.result;
                            },
                            configurable: true
                        }
                    });
                } catch (e) {
                    console.warn("cannot wrap properties", e.message);
                }
            };
            Object.defineProperties(this.root, {
                opened: {
                    get: () => {
                        return this.root.style.display !== "none";
                    }
                },
                result: {
                    get: () => {
                        return this._result;
                    }
                }
            });
        },

        onUnmounted() {
            window.removeEventListener("resize", this._onresize);
        },

        _oncontainerclick() {
            this.state.clickedContainer = true;
            setTimeout(() => {
                this.state.clickedContainer = false;
            }, 0);
        },

        shouldUpdate() {
            return this.root.style.display !== "none";
        },

        onUpdated() {
            this.root.querySelector("[ref=content]").style.maxHeight = this.getContentMaxHeight() + "px";
        },

        _result: 0,

        dismiss(result) {
            if (this.root.style.display === "none") {
                return;
            }
            this._result = result || 0;
            this.root.style.display = "none";
            this.root.dispatchEvent(new CustomEvent("dismiss", { bubbles: true, detail: { result: this.root.result } }));
        },

        open(...detail) {
            if (this.root.style.display !== "none") {
                return;
            }
            this.root.style.display = "";
            this.update();
            this.root.dispatchEvent(new CustomEvent("open", { bubbles: true, detail }));
        },

        getContentMaxHeight() {
            return (
                this.root.querySelector("[ref=aligner]").getBoundingClientRect().height -
                this.root.querySelector("[ref=title]").getBoundingClientRect().height -
                this.root.querySelector("[ref=actions]").getBoundingClientRect().height
            );
        },

        getSurface() {
            if (this.props.surface == null || ![
                "black",
                "dark" ,
                "light"
            ].includes(this.props.surface)) {
                return "white";
            }
            return this.props.surface;
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<div ref="aligner"></div><div expr286="expr286" class="mdc-elevation--z24" ref="container"><div expr287="expr287" ref="title"><slot expr288="expr288" name="title"></slot></div><div expr289="expr289" ref="content"><slot expr290="expr290" name="content"></slot></div><div expr291="expr291" ref="actions"><slot expr292="expr292" name="actions"></slot></div></div>',
          [{
            'redundantAttribute': 'expr286',
            'selector': '[expr286]',

            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onclick',

              'evaluate': function(scope) {
                return scope._oncontainerclick;
              }
            }]
          }, {
            'redundantAttribute': 'expr287',
            'selector': '[expr287]',

            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'class',

              'evaluate': function(scope) {
                return ['rm-', scope.getSurface(), '-surface'].join('');
              }
            }]
          }, {
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'title',
            'redundantAttribute': 'expr288',
            'selector': '[expr288]'
          }, {
            'redundantAttribute': 'expr289',
            'selector': '[expr289]',

            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'class',

              'evaluate': function(scope) {
                return ['rm-', scope.getSurface(), '-surface'].join('');
              }
            }]
          }, {
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'content',
            'redundantAttribute': 'expr290',
            'selector': '[expr290]'
          }, {
            'redundantAttribute': 'expr291',
            'selector': '[expr291]',

            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'class',

              'evaluate': function(scope) {
                return ['rm-', scope.getSurface(), '-surface'].join('');
              }
            }]
          }, {
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'actions',
            'redundantAttribute': 'expr292',
            'selector': '[expr292]'
          }]
        );
      },

      'name': 'rm-dialog'
    };

    var DividerComponent = {
      'css': `rm-divider,[is="rm-divider"]{ display: block; padding: 8px 0; } rm-divider::after,[is="rm-divider"]::after{ content: ""; top: 8px; height: 1px; left: 0; right: 0; display: block; margin-bottom: -1px; background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-black-surface rm-divider::after,.rm-black-surface [is="rm-divider"]::after{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-dark-surface rm-divider::after,.rm-dark-surface [is="rm-divider"]::after{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-light-surface rm-divider::after,.rm-light-surface [is="rm-divider"]::after{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-white-surface rm-divider::after,.rm-white-surface [is="rm-divider"]::after{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); } rm-divider[inset]:not([inset="false"])::after,[is="rm-divider"][inset]:not([inset="false"])::after{ left: 72px; }`,
      'exports': null,
      'template': null,
      'name': 'rm-divider'
    };

    /*!
    * tabbable 5.1.3
    * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
    */
    var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
    var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
    var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    function tabbable(el, options) {
      options = options || {};
      var regularTabbables = [];
      var orderedTabbables = [];
      var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable);
      candidates.forEach(function (candidate, i) {
        var candidateTabindex = getTabindex(candidate);

        if (candidateTabindex === 0) {
          regularTabbables.push(candidate);
        } else {
          orderedTabbables.push({
            documentOrder: i,
            tabIndex: candidateTabindex,
            node: candidate
          });
        }
      });
      var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
        return a.node;
      }).concat(regularTabbables);
      return tabbableNodes;
    }

    function getCandidates(el, includeContainer, filter) {
      var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

      if (includeContainer && matches.call(el, candidateSelector)) {
        candidates.unshift(el);
      }

      candidates = candidates.filter(filter);
      return candidates;
    }

    function isNodeMatchingSelectorTabbable(node) {
      if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
        return false;
      }

      return true;
    }

    function isNodeMatchingSelectorFocusable(node) {
      if (node.disabled || isHiddenInput(node) || isHidden(node) ||
      /* For a details element with a summary, the summary element gets the focused  */
      isDetailsWithSummary(node)) {
        return false;
      }

      return true;
    }

    var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

    function isFocusable(node) {
      if (!node) {
        throw new Error('No node provided');
      }

      if (matches.call(node, focusableCandidateSelector) === false) {
        return false;
      }

      return isNodeMatchingSelectorFocusable(node);
    }

    function getTabindex(node) {
      var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

      if (!isNaN(tabindexAttr)) {
        return tabindexAttr;
      } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
      // so if they don't have a tabindex attribute specifically set, assume it's 0.


      if (isContentEditable(node)) {
        return 0;
      } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
      //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
      //  yet they are still part of the regular tab order; in FF, they get a default
      //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
      //  order, consider their tab index to be 0.


      if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
        return 0;
      }

      return node.tabIndex;
    }

    function sortOrderedTabbables(a, b) {
      return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
    }

    function isContentEditable(node) {
      return node.contentEditable === 'true';
    }

    function isInput(node) {
      return node.tagName === 'INPUT';
    }

    function isHiddenInput(node) {
      return isInput(node) && node.type === 'hidden';
    }

    function isDetailsWithSummary(node) {
      var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
        return child.tagName === 'SUMMARY';
      });
      return r;
    }

    function isRadio(node) {
      return isInput(node) && node.type === 'radio';
    }

    function isNonTabbableRadio(node) {
      return isRadio(node) && !isTabbableRadio(node);
    }

    function getCheckedRadio(nodes, form) {
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked && nodes[i].form === form) {
          return nodes[i];
        }
      }
    }

    function isTabbableRadio(node) {
      if (!node.name) {
        return true;
      }

      var radioScope = node.form || node.ownerDocument;
      var radioSet = radioScope.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
      var checked = getCheckedRadio(radioSet, node.form);
      return !checked || checked === node;
    }

    function isHidden(node) {
      if (getComputedStyle(node).visibility === 'hidden') return true;
      var isDirectSummary = node.matches('details>summary:first-of-type');
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

      if (nodeUnderDetails.matches('details:not([open]) *')) {
        return true;
      }

      while (node) {
        if (getComputedStyle(node).display === 'none') return true;
        node = node.parentElement;
      }

      return false;
    }

    /*!
    * focus-trap 6.2.0
    * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
    */

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    var activeFocusDelay;

    var activeFocusTraps = function () {
      var trapQueue = [];
      return {
        activateTrap: function activateTrap(trap) {
          if (trapQueue.length > 0) {
            var activeTrap = trapQueue[trapQueue.length - 1];

            if (activeTrap !== trap) {
              activeTrap.pause();
            }
          }

          var trapIndex = trapQueue.indexOf(trap);

          if (trapIndex === -1) {
            trapQueue.push(trap);
          } else {
            // move this existing trap to the front of the queue
            trapQueue.splice(trapIndex, 1);
            trapQueue.push(trap);
          }
        },
        deactivateTrap: function deactivateTrap(trap) {
          var trapIndex = trapQueue.indexOf(trap);

          if (trapIndex !== -1) {
            trapQueue.splice(trapIndex, 1);
          }

          if (trapQueue.length > 0) {
            trapQueue[trapQueue.length - 1].unpause();
          }
        }
      };
    }();

    function createFocusTrap(elements, userOptions) {
      var doc = document;

      var config = _objectSpread2({
        returnFocusOnDeactivate: true,
        escapeDeactivates: true,
        delayInitialFocus: true
      }, userOptions);

      var state = {
        // @type {Array<HTMLElement>}
        containers: [],
        // @type {{ firstTabbableNode: HTMLElement, lastTabbableNode: HTMLElement }}
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: false,
        paused: false
      };
      var trap = {
        activate: activate,
        deactivate: deactivate,
        pause: pause,
        unpause: unpause,
        updateContainerElements: updateContainerElements
      };
      updateContainerElements(elements);
      return trap;

      function updateContainerElements(containerElements) {
        var elementsAsArray = [].concat(containerElements).filter(Boolean);
        state.containers = elementsAsArray.map(function (element) {
          return typeof element === 'string' ? doc.querySelector(element) : element;
        });

        if (state.active) {
          updateTabbableNodes();
        }

        return trap;
      }

      function activate(activateOptions) {
        if (state.active) return;
        updateTabbableNodes();
        state.active = true;
        state.paused = false;
        state.nodeFocusedBeforeActivation = doc.activeElement;
        var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

        if (onActivate) {
          onActivate();
        }

        addListeners();
        return trap;
      }

      function deactivate(deactivateOptions) {
        if (!state.active) return;
        clearTimeout(activeFocusDelay);
        removeListeners();
        state.active = false;
        state.paused = false;
        activeFocusTraps.deactivateTrap(trap);
        var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

        if (onDeactivate) {
          onDeactivate();
        }

        var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

        if (returnFocus) {
          delay(function () {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          });
        }

        return trap;
      }

      function pause() {
        if (state.paused || !state.active) return trap;
        state.paused = true;
        removeListeners();
        return trap;
      }

      function unpause() {
        if (!state.paused || !state.active) return trap;
        state.paused = false;
        updateTabbableNodes();
        addListeners();
        return trap;
      }

      function addListeners() {
        if (!state.active) return; // There can be only one listening focus trap at a time

        activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
        // that caused the focus trap activation.

        activeFocusDelay = config.delayInitialFocus ? delay(function () {
          tryFocus(getInitialFocusNode());
        }) : tryFocus(getInitialFocusNode());
        doc.addEventListener('focusin', checkFocusIn, true);
        doc.addEventListener('mousedown', checkPointerDown, {
          capture: true,
          passive: false
        });
        doc.addEventListener('touchstart', checkPointerDown, {
          capture: true,
          passive: false
        });
        doc.addEventListener('click', checkClick, {
          capture: true,
          passive: false
        });
        doc.addEventListener('keydown', checkKey, {
          capture: true,
          passive: false
        });
        return trap;
      }

      function removeListeners() {
        if (!state.active) return;
        doc.removeEventListener('focusin', checkFocusIn, true);
        doc.removeEventListener('mousedown', checkPointerDown, true);
        doc.removeEventListener('touchstart', checkPointerDown, true);
        doc.removeEventListener('click', checkClick, true);
        doc.removeEventListener('keydown', checkKey, true);
        return trap;
      }

      function getNodeForOption(optionName) {
        var optionValue = config[optionName];
        var node = optionValue;

        if (!optionValue) {
          return null;
        }

        if (typeof optionValue === 'string') {
          node = doc.querySelector(optionValue);

          if (!node) {
            throw new Error('`' + optionName + '` refers to no known node');
          }
        }

        if (typeof optionValue === 'function') {
          node = optionValue();

          if (!node) {
            throw new Error('`' + optionName + '` did not return a node');
          }
        }

        return node;
      }

      function getInitialFocusNode() {
        var node;

        if (getNodeForOption('initialFocus') !== null) {
          node = getNodeForOption('initialFocus');
        } else if (containersContain(doc.activeElement)) {
          node = doc.activeElement;
        } else {
          var firstTabbableGroup = state.tabbableGroups[0];
          var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
          node = firstTabbableNode || getNodeForOption('fallbackFocus');
        }

        if (!node) {
          throw new Error('Your focus-trap needs to have at least one focusable element');
        }

        return node;
      }

      function getReturnFocusNode(previousActiveElement) {
        var node = getNodeForOption('setReturnFocus');
        return node ? node : previousActiveElement;
      } // This needs to be done on mousedown and touchstart instead of click
      // so that it precedes the focus event.


      function checkPointerDown(e) {
        if (containersContain(e.target)) {
          // allow the click since it ocurred inside the trap
          return;
        }

        if (config.clickOutsideDeactivates) {
          // immediately deactivate the trap
          deactivate({
            // if, on deactivation, we should return focus to the node originally-focused
            //  when the trap was activated (or the configured `setReturnFocus` node),
            //  then assume it's also OK to return focus to the outside node that was
            //  just clicked, causing deactivation, as long as that node is focusable;
            //  if it isn't focusable, then return focus to the original node focused
            //  on activation (or the configured `setReturnFocus` node)
            // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
            //  which will result in the outside click setting focus to the node
            //  that was clicked, whether it's focusable or not; by setting
            //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
            //  on activation (or the configured `setReturnFocus` node)
            returnFocus: config.returnFocusOnDeactivate && !isFocusable(e.target)
          });
          return;
        } // This is needed for mobile devices.
        // (If we'll only let `click` events through,
        // then on mobile they will be blocked anyways if `touchstart` is blocked.)


        if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
          // allow the click outside the trap to take place
          return;
        } // otherwise, prevent the click


        e.preventDefault();
      } // In case focus escapes the trap for some strange reason, pull it back in.


      function checkFocusIn(e) {
        // In Firefox when you Tab out of an iframe the Document is briefly focused.
        if (containersContain(e.target) || e.target instanceof Document) {
          return;
        }

        e.stopImmediatePropagation();
        tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }

      function checkKey(e) {
        if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
          e.preventDefault();
          deactivate();
          return;
        }

        if (isTabEvent(e)) {
          checkTab(e);
          return;
        }
      } // Hijack Tab events on the first and last focusable nodes of the trap,
      // in order to prevent focus from escaping. If it escapes for even a
      // moment it can end up scrolling the page and causing confusion so we
      // kind of need to capture the action at the keydown phase.


      function checkTab(e) {
        updateTabbableNodes();
        var destinationNode = null;

        if (e.shiftKey) {
          var startOfGroupIndex = state.tabbableGroups.findIndex(function (_ref) {
            var firstTabbableNode = _ref.firstTabbableNode;
            return e.target === firstTabbableNode;
          });

          if (startOfGroupIndex >= 0) {
            var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
            var destinationGroup = state.tabbableGroups[destinationGroupIndex];
            destinationNode = destinationGroup.lastTabbableNode;
          }
        } else {
          var lastOfGroupIndex = state.tabbableGroups.findIndex(function (_ref2) {
            var lastTabbableNode = _ref2.lastTabbableNode;
            return e.target === lastTabbableNode;
          });

          if (lastOfGroupIndex >= 0) {
            var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

            var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
            destinationNode = _destinationGroup.firstTabbableNode;
          }
        }

        if (destinationNode) {
          e.preventDefault();
          tryFocus(destinationNode);
        }
      }

      function checkClick(e) {
        if (config.clickOutsideDeactivates) return;
        if (containersContain(e.target)) return;

        if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
          return;
        }

        e.preventDefault();
        e.stopImmediatePropagation();
      }

      function updateTabbableNodes() {
        state.tabbableGroups = state.containers.map(function (container) {
          var tabbableNodes = tabbable(container);
          return {
            firstTabbableNode: tabbableNodes[0],
            lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
          };
        });
      }

      function tryFocus(node) {
        if (node === doc.activeElement) return;

        if (!node || !node.focus) {
          tryFocus(getInitialFocusNode());
          return;
        }

        node.focus({
          preventScroll: !!config.preventScroll
        });
        state.mostRecentlyFocusedNode = node;

        if (isSelectableInput(node)) {
          node.select();
        }
      }

      function containersContain(element) {
        return state.containers.some(function (container) {
          return container.contains(element);
        });
      }
    }

    function isSelectableInput(node) {
      return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
    }

    function isEscapeEvent(e) {
      return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
    }

    function isTabEvent(e) {
      return e.key === 'Tab' || e.keyCode === 9;
    }

    function delay(fn) {
      return setTimeout(fn, 0);
    }

    function getMenuStyleAt(time, anchor) {
        // time = 0 : closed
        // time = 1 : opened
        time = parseFloat(time);
        if (isNaN(time)) {
            time = 0;
        }
        return {
            opacity: time,
            transform: "translateY(" + (({
                "top": -100,
                "bottom": 100
             }[anchor] || -100) * (1 - time)) + "%) scale(" + (0.8 + (0.2 * time)) + ")"
        };
    }

    var MenuComponent = {
      'css': `rm-menu,[is="rm-menu"]{ display: block; font-size: 16px; overflow: hidden; padding: 40px; margin: -40px; pointer-events: none; } rm-menu:not([anchor]),[is="rm-menu"]:not([anchor]){ border-radius: 0.25em; } rm-menu[anchor=top],[is="rm-menu"][anchor=top]{ padding-top: 0; margin-top: 0; border-radius: 0 0 0.25em 0.25em; } rm-menu:not([variant])[anchor=top],[is="rm-menu"]:not([variant])[anchor=top],rm-menu[variant=outlined][anchor=top],[is="rm-menu"][variant=outlined][anchor=top],rm-menu[variant=outlined]:not([anchor]),[is="rm-menu"][variant=outlined]:not([anchor]){ border-radius: 0.25em; } rm-menu[anchor=bottom],[is="rm-menu"][anchor=bottom]{ padding-bottom: 0; margin-bottom: 0; border-radius: 0.25em 0.25em 0 0; } rm-menu[anchor=bottom],[is="rm-menu"][anchor=bottom],rm-menu[variant=filled][anchor=bottom],[is="rm-menu"][variant=filled][anchor=bottom],rm-menu[variant=outlined][anchor=bottom],[is="rm-menu"][variant=outlined][anchor=bottom]{ border-radius: 0.25em; } rm-menu > div,[is="rm-menu"] > div{ background: white; padding: .5em 0; z-index: 99; pointer-events: all; border-radius: inherit; transform-origin: top center; } rm-menu > div,[is="rm-menu"] > div{ background: white; padding: .5em 0; transform: }`,

      'exports': {
        _lastOpened: null,
        _time: 0,
        _direction: 0,
        _highlightedFromKeyboard: false,
        _closeThis: null,
        _focusTrap: null,
        _mounted: false,

        onBeforeMount() {
            this._closeThis = this.close.bind(this);
        },

        onMounted() {
            this.root._bindTo = this._bindTo.bind(this);
            const child = this.root.firstElementChild;
            if (this._lastOpened = this.getOpened()) {
                this._time = 1;
                elevation(child, 4);
            } else {
                elevation(child, 0);
            }
            let _lastTime = null;
            let _lastNow = Date.now();
            this._mounted = true;
            let frame = () => {
                if (!this.root.isConnected) {
                    if (this._mounted) {
                        window.requestAnimationFrame(frame);
                    }
                    return;
                }
                const last = _lastNow;
                _lastNow = Date.now();
                if (this._direction !== 0 || _lastTime == null) {
                    const delta = (_lastNow - last) / 150;
                    if (this._direction > 0) {
                        this._time = Math.min(this._time + delta, 1);
                    } else if (this._direction < 0) {
                        this._time = Math.max(this._time - delta, 0);
                    }
                    if (this._time >= 1 && !this.getPreventFocus()) {
                        (this._focusTrap = createFocusTrap(this.root, {
                            setReturnFocus: this._anchorElement,
                            clickOutsideDeactivates: true,
                            onDeactivate: () => {
                                this._focusTrap = null;
                                this.close();
                            }
                        })).activate();
                    }
                    if (this._time >= 1 || this._time <= 0) {
                        this._direction = 0;
                    }
                }
                if (this._time === 0) {
                    this.root.style.display = "none";
                } else {
                    this.root.style.display = "";
                    let anchor = "top";
                    if (this._anchorElement) {
                        const height = window.innerHeight;
                        const rect = this._anchorElement.getBoundingClientRect();
                        if (rect.bottom < 0) {
                            this.root.style.top = "0px";
                            this.root.style.bottom = "";
                            child.firstElementChild.style.maxHeight = height -
                                (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                            ;
                        } else if (rect.top > height) {
                            this.root.style.top = "";
                            this.root.style.bottom = "0px";
                            child.firstElementChild.style.maxHeight = height -
                                (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                            ;
                            anchor = "bottom";
                        } else {
                            const heightTop = rect.top;
                            const heightBottom = height - rect.bottom;
                            if (heightTop < heightBottom) {
                                this.root.style.top = rect.bottom + "px";
                                this.root.style.bottom = "";
                                child.firstElementChild.style.maxHeight = height - rect.bottom -
                                    (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                                ;
                            } else {
                                this.root.style.bottom = (height - rect.top) + "px";
                                this.root.style.top = "";
                                anchor = "bottom";
                                child.firstElementChild.style.maxHeight = rect.top -
                                    (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                                ;
                            }
                        }
                        if (this.props.inheritWidth == null) {
                            const right = window.innerWidth - rect.right;
                            if (rect.left >= right) {
                                this.root.style.left = "";
                                this.root.style.right = right + "px";
                            } else {
                                this.root.style.left = rect.left + "px";
                                this.root.style.right = "";
                            }
                        } else {
                            this.root.style.left = rect.left + "px";
                            this.root.style.width = rect.width + "px";
                        }
                        this.root.setAttribute("anchor", anchor);
                    }
                    const styleAt = getMenuStyleAt(_lastTime = this._time, anchor);
                    child.style.transform = styleAt.transform;
                    child.style.opacity = styleAt.opacity;

                    if (this._toHighlight && this._time >= 1) {
                        this._currentHighlighted = ripple(this._lastHighlighted = this._toHighlight).highlight();
                        this._toHighlight = null;

                        const container = this.root.firstElementChild.firstElementChild;
                        const containerRect = container.getBoundingClientRect();
                        const highlightRect = this._lastHighlighted.getBoundingClientRect();
                        
                        const highlightTop = highlightRect.top - containerRect.top;
                        const highlightBottom = highlightRect.bottom - containerRect.top;
                        if (highlightTop < 0) {
                            container.scrollBy(0, highlightTop);
                        } else if (highlightBottom > containerRect.height) {
                            container.scrollBy(0, highlightBottom - containerRect.height);
                        }
                    }
                }
                window.requestAnimationFrame(frame);
            };
            frame();

            Object.defineProperty(this.root, "parentElement", {
                get: () => {
                    return this._realParent || HTMLElement.prototype.__lookupGetter__("parentElement").call(this.root);
                }
            });
            Object.defineProperty(this.root, "options", {
                get: () => this.getOptions()
            });

            this.root.open = this.open.bind(this);
            this.root.close = this.close.bind(this);

            this.root.addEventListener("keydown", this._onkeydown = event => {
                switch (event.keyCode) {
                    case 40: {
                        const options = this.root.querySelectorAll("rm-menu-item:not([disabled]):not([hidden])");
                        const lastHighlighted = this._lastHighlighted;
                        let next;
                        Array.prototype.some.call(options, option => {
                            if (option.tagName.toUpperCase() === "RM-MENU-ITEM") {
                                option = option.firstElementChild;
                            }
                            if (!this._lastHighlighted) {
                                next = option;
                                return true;
                            }
                            if (option === this._lastHighlighted) {
                                next = this._lastHighlighted;
                                this._lastHighlighted = null;
                            }
                            return false;
                        });
                        if (next !== lastHighlighted) {
                            if (this._currentHighlighted) {
                                this._currentHighlighted.end();
                                this._currentHighlighted = null;
                            } else if (lastHighlighted) {
                                lastHighlighted.dispatchEvent(new Event("mouseleave"));
                            }
                            this._toHighlight = next;
                            this._highlightedFromKeyboard = true;
                        } else {
                            this._lastHighlighted = next;
                        }
                        event.preventDefault();
                        break;
                    }
                    case 38: {
                        const options = this.getOptions();
                        const lastHighlighted = this._lastHighlighted;
                        let previous;
                        for (let i = options.length - 1; i >= 0; i--) {
                            let option = options[i];
                            if (option.tagName.toUpperCase() === "RM-MENU-ITEM") {
                                option = option.firstElementChild;
                            }
                            if (!this._lastHighlighted) {
                                previous = option;
                                break;
                            }
                            if (option === this._lastHighlighted) {
                                previous = this._lastHighlighted;
                                this._lastHighlighted = null;
                            }
                        }
                        if (previous !== lastHighlighted) {
                            if (this._currentHighlighted) {
                                this._currentHighlighted.end();
                                this._currentHighlighted = null;
                            } else if (lastHighlighted) {
                                lastHighlighted.dispatchEvent(new Event("mouseleave"));
                            }
                            this._toHighlight = previous;
                            this._highlightedFromKeyboard = true;
                        } else {
                            this._lastHighlighted = previous;
                        }
                        event.preventDefault();
                        break;
                    }
                    case 13: {
                        if (this.getOpened()) {
                            if (this._lastHighlighted) {
                                this._lastHighlighted.click();
                            }
                            event.preventDefault();
                        }
                        break;
                    }
                }
            });
        },

        onUnmounted() {
            this._mounted = false;
        },

        _onkeydown: null,
        _realParent: null,
        _anchorElement: null,

        setAnchorElement(element) {
            const previousAnchorElement = this._anchorElement;
            if (element == null) {
                this._anchorElement = null;
            } else if (element instanceof HTMLElement) {
                if (this.root.contains(element)) {
                    throw new Error("element is in menu tree");
                } else {
                    this._anchorElement = element;
                }
            } else {
                throw new Error("invalid element");
            }
            if (previousAnchorElement) {
                document.body.removeChild(this.root);
                this._realParent.appendChild(this.root);
            }
            if (this._anchorElement) {
                (this._realParent = this.root.parentElement).removeChild(this.root);
                document.body.appendChild(this.root);
                this.root.style.position = "fixed";
            } else {
                this._realParent = null;
                this.root.style.top = "";
                this.root.style.left = "";
                this.root.style.width = "";
                this.root.style.position = "";
            }
        },

        getAnchorElement() {
            return this._anchorElement;
        },

        _bindedElement: null,

        _bindTo(element) {
            if (this._bindedElement === element) {
                return;
            }
            if (this._bindedElement) {
                this._bindedElement.removeEventListener("keydown", this._onkeydown);
                this._bindedElement = null;
            }
            if (element && element instanceof HTMLElement) {
                this.setAnchorElement(this._bindedElement = element);
                this._bindedElement.addEventListener("keydown", this._onkeydown);
            } else {
                this.setAnchorElement(null);
            }
        },

        _lastHighlighted: null,
        _toHighlight: null,
        _currentHighlighted: null,

        onUpdated() {
            const opened = this.getOpened();
            if (opened !== this._lastOpened) {
                const child = this.root.firstElementChild;
                if (this._lastOpened = opened) {
                    this.root.open();
                } else {
                    this.root.close();
                }
            }
        },

        getOptions() {
            return this.root.querySelectorAll("rm-menu-item:not([disabled]):not([hidden])");
        },

        getPreventFocus() {
            return this.props.preventFocus != null && this.props.preventFocus !== false;
        },

        getOpened() {
            return this.props.opened != null && this.props.opened !== false;
        },

        open() {
            if (this._time > 0 && this._direction !== -1) {
                return;
            }
            if (this.props.keepHighlight != null) {
                let toHighlight = null;
                const selected = this.props.selected || [];
                Array.prototype.some.call(this.getOptions(), opt => {
                    if (selected.some(value => opt.value === value)) {
                        if (opt.tagName.toUpperCase() === "RM-MENU-ITEM") {
                            opt = opt.firstElementChild;
                        }
                        toHighlight = opt;
                        return true;
                    }
                    return false;
                });
                if (this._currentHighlighted) {
                    this._currentHighlighted.end();
                    this._currentHighlighted = null;
                }
                this._toHighlight = toHighlight;
            }
            elevation(this.root.firstElementChild, 4);
            this._direction = 1;
            if (this.props.preventCloseOnClickOut == null) ;
        },

        close() {
            if (this._time < 1 && this._direction !== 1) {
                return;
            }
            if (this._focusTrap) {
                return this._focusTrap.deactivate();
            }
            this._toHighlight = null;
            if (this._currentHighlighted) {
                this._currentHighlighted.end();
                this._currentHighlighted = null;
            }
            elevation(this.root.firstElementChild, 0);
            this._direction = -1;
            // pointerController(document, null);
        },

        _onmousedown(event) {
            if (this.getPreventFocus()) {
                event.preventDefault();
            }
        },

        _clearhighlight(event) {
            this._toHighlight = null;
            if (this._currentHighlighted) {
                this._currentHighlighted.end();
                this._currentHighlighted = null;
            }
        },

        _setHighlighted(event) {
            if (this.props.keepHighlight == null) {
                return;
            }
            let parent = event.target;
            let rippleElement = null;
            const container = this.root.firstElementChild.firstElementChild;
            while (parent && parent !== container) {
                if (isRipple(parent)) {
                    rippleElement = parent;
                    break;
                }
                parent = parent.parentElement;
            }
            if (rippleElement && !ripple(rippleElement).getOption("disabled")) {
                this._clearhighlight();
                if (this._lastHighlighted !== rippleElement) {
                    this._lastHighlighted = rippleElement;
                    if (this._highlightedFromKeyboard) {
                        this._highlightedFromKeyboard = false;
                        this._toHighlight = rippleElement;
                    }
                }
            } else if (!this._currentHighlighted) {
                this._toHighlight = this._lastHighlighted;
            }
        },

        _resetHighlighted() {
            if (this.props.keepHighlight != null && !this._currentHighlighted) {
                this._toHighlight = this._lastHighlighted;
            }
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<div expr283="expr283"><div expr284="expr284" style="overflow-y: auto;"><slot expr285="expr285"></slot></div></div>',
          [{
            'redundantAttribute': 'expr283',
            'selector': '[expr283]',

            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onmousedown',

              'evaluate': function(scope) {
                return scope._onmousedown;
              }
            }]
          }, {
            'redundantAttribute': 'expr284',
            'selector': '[expr284]',

            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onmouseenter',

              'evaluate': function(scope) {
                return scope._setHighlighted;
              }
            }, {
              'type': expressionTypes.EVENT,
              'name': 'onmousemove',

              'evaluate': function(scope) {
                return scope._setHighlighted;
              }
            }, {
              'type': expressionTypes.EVENT,
              'name': 'onmouseleave',

              'evaluate': function(scope) {
                return scope._resetHighlighted;
              }
            }]
          }, {
            'type': bindingTypes.SLOT,

            'attributes': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'close-menu',

              'evaluate': function(scope) {
                return scope._closeThis;
              }
            }],

            'name': 'default',
            'redundantAttribute': 'expr285',
            'selector': '[expr285]'
          }]
        );
      },

      'name': 'rm-menu'
    };

    var MenuItemComponent = {
      'css': `rm-menu-item,[is="rm-menu-item"]{ display: contents; } rm-menu-item > button,[is="rm-menu-item"] > button{ font-size: 16px; line-height: 1.5em; padding: 0.75em 1em; border: 0; background: none; width: 100%; text-align: left; cursor: pointer; outline: none; display: block; min-height: 3em; } rm-menu-item[title] > button,[is="rm-menu-item"][title] > button{ font-weight: bold; color: rgba(0, 0, 0, 0.9); } rm-menu-item[inset] > button,[is="rm-menu-item"][inset] > button{ padding-left: 4.5em; } rm-menu-item[short-inset] > button,[is="rm-menu-item"][short-inset] > button{ padding-left: 2em; } rm-menu-item[passive] > button,[is="rm-menu-item"][passive] > button{ cursor: initial; }`,

      'exports': {
        _select: null,

        onMounted() {
            Object.defineProperty(this.root, "value", {
                get: this.getValue.bind(this),
                set: this.setValue.bind(this)
            });
            Object.defineProperty(this.root, "label", {
                get: this.getLabel.bind(this),
                set: this.setLabel.bind(this)
            });
            Object.defineProperty(this.root, "selected", {
                get: this.getSelected.bind(this),
                get: this.setSelected.bind(this)
            });
            let parent = this.root.parentElement;
            while (parent) {
                const instance = parent[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                if (instance != null && instance.name === "rm-select") {
                    parent = instance;
                    break;
                }
                parent = parent.parentElement;
            }
            if (parent != null) {
                if (this.getSelected()) {
                    parent.select(this.getValue());
                }
                this._select = parent;
            }
            if (this.props.tabindex == null || !(parseInt(this.props.tabindex) < 0)) {
                ripple(this.root.firstElementChild, {
                    highlight: !this.getPassive(),
                    instantHighlight: true,
                    disabled: this.getPassive()
                });
            }
        },

        onUpdated() {
            if (this.props.tabindex == null || !(parseInt(this.props.tabindex) < 0)) {
                ripple(this.root.firstElementChild, {
                    highlight: !this.getPassive(),
                    instantHighlight: true,
                    disabled: this.getPassive()
                });
            }
        },

        getPassive() {
            return this.props.passive != null && this.props.passive !== false;
        },

        getLabel() {
            const label = this.root.getAttribute("label");
            return label != null ? label : this.root.innerText;
        },

        setLabel(label) {
            this.root.setAttribute("value", label);
        },

        getValue() {
            const value = this.root.getAttribute("value");
            return value != null ? value : "";
        },

        setValue(value) {
            this.root.setAttribute("value", value);
        },

        getSelected() {
            if (this.getPassive()) {
                return false;
            }
            if (this._select == null) {
                return this.root.getAttribute("selected") != null;
            }
            return this._select.hasSelected(this.getValue());
        },

        setSelected(selected) {
            if (this.getPassive()) {
                return;
            }
            if (this._select == null) {
                return this.root.setAttribute("selected", "");
            }
            return this._select.select(this.getValue());
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template('<button expr298="expr298"><slot expr299="expr299"></slot></button>', [{
          'redundantAttribute': 'expr298',
          'selector': '[expr298]',

          'expressions': [{
            'type': expressionTypes.ATTRIBUTE,
            'name': 'tabindex',

            'evaluate': function(scope) {
              return scope.props.tabindex;
            }
          }, {
            'type': expressionTypes.EVENT,
            'name': 'onclick',

            'evaluate': function(scope) {
              return scope.setSelected.bind(scope, true);
            }
          }]
        }, {
          'type': bindingTypes.SLOT,
          'attributes': [],
          'name': 'default',
          'redundantAttribute': 'expr299',
          'selector': '[expr299]'
        }]);
      },

      'name': 'rm-menu-item'
    };

    var RadioComponent = {
      'css': `rm-radio,[is="rm-radio"]{ position: relative; font: message-box; font-size: 16px; cursor: pointer; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; display: inline-block; margin-right: 8px; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; } rm-radio label,[is="rm-radio"] label{ cursor: inherit; display: inline-block; } rm-radio [ref="circle"],[is="rm-radio"] [ref="circle"]{ height: 1.25em; width: 1.25em; position: relative; display: inline-block; vertical-align: middle; box-sizing: border-box; border-radius: 50%; background: transparent; margin: 0.25em .5em 0.25em 0; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; color: rgb(0, 0, 255); color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-radio [ref="circle"],.rm-black-surface [is="rm-radio"] [ref="circle"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-radio [ref="circle"],.rm-dark-surface [is="rm-radio"] [ref="circle"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-radio [ref="circle"],.rm-light-surface [is="rm-radio"] [ref="circle"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-radio [ref="circle"],.rm-white-surface [is="rm-radio"] [ref="circle"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-radio [ref="border"],[is="rm-radio"] [ref="border"]{ transition: border-color linear 100ms; border: 0.125em solid rgba(0, 0, 0, .42); border: 0.125em solid rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); height: 100%; width: 100%; box-sizing: border-box; border-radius: inherit; } .rm-black-surface rm-radio [ref="border"],.rm-black-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-radio [ref="border"],.rm-dark-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-radio [ref="border"],.rm-light-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-radio [ref="border"],.rm-white-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-radio [ref="radio-circle"],[is="rm-radio"] [ref="radio-circle"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent, 0, 0, 255)); position: absolute; top: 0.3125em; bottom: 0.3125em; right: 0.3125em; left: 0.3125em; text-align: center; transition: transform linear 100ms; transform: scale(0); border-radius: inherit; } .rm-black-surface rm-radio [ref="radio-circle"],.rm-black-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-radio [ref="radio-circle"],.rm-dark-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-radio [ref="radio-circle"],.rm-light-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-radio [ref="radio-circle"],.rm-white-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-radio.rm-checked [ref="radio-circle"],[is="rm-radio"].rm-checked [ref="radio-circle"]{ transform: scale(1); } rm-radio.rm-checked [ref="border"],[is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(0, 0, 255); border-color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-radio.rm-checked [ref="border"],.rm-black-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(30, 144, 255); border-color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-radio.rm-checked [ref="border"],.rm-dark-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(30, 144, 255); border-color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-radio.rm-checked [ref="border"],.rm-light-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(0, 0, 255); border-color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-radio.rm-checked [ref="border"],.rm-white-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(0, 0, 255); border-color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-radio input,[is="rm-radio"] input{ border: 0; position: absolute; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; outline: 0; -webkit-appearance: none; -moz-appearance: none; }`,

      'exports': {
        onMounted() {
            let circle = this.root.querySelector("[ref=circle]");
            let input = this.root.querySelector("input");
            let circleRipple = ripple(
                circle,
                {
                    centered: true,
                    unbounded: true,
                    radius: 16,
                    unboundedFocus: true,
                    focusTarget: input,
                    color: "currentColor"
                }
            );
            let refreshUI = () => {
                if (input.checked) {
                    this.root.classList.add("rm-checked");
                } else {
                    this.root.classList.remove("rm-checked");
                }
            };
            let refresh = () => {
                refreshUI();
                let name = this.getName();
                if (!name) {
                    return;
                }
                let parent = this.root;
                while (parent = parent.parentElement) {
                    if (parent.tagName === "FORM") {
                        break;
                    }
                }
                if (!parent) {
                    parent = document;
                }
                let selector = "input[type=radio][name=\"" + name + "\"]";
                let invertedMask = parent.querySelectorAll(":scope form " + selector);
                Array.prototype.forEach.call(
                    parent.querySelectorAll(selector),
                    input => {
                        if (Array.prototype.some.call(invertedMask, masked => {
                            return masked === input;
                        })) {
                            return;
                        }
                        input.dispatchEvent(new Event("unchecked"));
                    }
                );
            };
            input.addEventListener("change", refresh);
            input.addEventListener("unchecked", refreshUI);
            refresh();
        },

        getName() {
            let name = this.props.name;
            return typeof name === "string" && !name.match(/^\s*$/) ? name : null;
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<label><input expr300="expr300" type="radio" tabindex="0"/><div ref="circle"><div ref="border"></div><div ref="radio-circle"></div></div><div expr301="expr301" style="vertical-align: middle; display: inline-block;"> </div></label>',
          [{
            'redundantAttribute': 'expr300',
            'selector': '[expr300]',

            'expressions': [{
              'type': expressionTypes.VALUE,

              'evaluate': function(scope) {
                return scope.props.value;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'name',

              'evaluate': function(scope) {
                return scope.props.name;
              }
            }]
          }, {
            'redundantAttribute': 'expr301',
            'selector': '[expr301]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.label;
              }
            }]
          }]
        );
      },

      'name': 'rm-radio'
    };

    var RippleComponent = {
      'css': `rm-ripple,[is="rm-ripple"]{ display: inline-block; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; }`,

      'exports': {
        onMounted() {
            ripple(this.root, {
                radius: (this.props.radius && parseInt(this.props.radius)) || null,
                unbounded: (this.props.unbounded && (this.props.unbounded !== "false")) || false,
                centered: (this.props.centered && (this.props.centered !== "false")) || false,
                disabled:  (this.props.disabled && (this.props.disabled !== "false")) || false,
                color: this.props.color ? this.props.color : "currentColor",
                highlight:  (this.props.highlight && (this.props.highlight !== "false")) || false,
                unboundedFocus:  (this.props.unboundedFocus && (this.props.unboundedFocus !== "false")) || false,
                focusTarget: this.props.focusTarget && (this.props.focusTarget instanceof HTMLElement)? this.props.focusTarget : null,
                usePointerFocus:  (this.props.usePointerFocus && (this.props.usePointerFocus !== "false")) || false,
                stopRippling:  (this.props.stopRippling && (this.props.stopRippling !== "false")) || false,
            });
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template('<slot expr302="expr302"></slot>', [{
          'type': bindingTypes.SLOT,
          'attributes': [],
          'name': 'default',
          'redundantAttribute': 'expr302',
          'selector': '[expr302]'
        }]);
      },

      'name': 'rm-ripple'
    };

    var TextfieldContainerComponent = {
      'css': `rm-textfield-container,[is="rm-textfield-container"]{ display: inline-block; font: message-box; font-size: 16px; margin-top: 0.5em; margin-bottom: 1em; vertical-align: middle; cursor: inherit; border-radius: 0; margin-right: .5em; user-select: none; } rm-textfield-container[full-width],[is="rm-textfield-container"][full-width]{ width: 100%; margin-right: 0; } rm-textfield-container[variant=filled],[is="rm-textfield-container"][variant=filled]{ border-radius: .25em .25em 0 0; } rm-textfield-container[variant=outlined],[is="rm-textfield-container"][variant=outlined]{ border-radius: 0.25em; } rm-textfield-container[disabled],[is="rm-textfield-container"][disabled]{ opacity: 0.6; } rm-textfield-container .rm-textfield-container--container,[is="rm-textfield-container"] .rm-textfield-container--container{ display: table-cell; vertical-align: middle; position: relative; font-size: inherit; box-sizing: border-box; padding: 0.625em 0 0.625em 0; line-height: 1.25em; transition: padding linear 150ms; color: rgb(0, 0, 0); color: rgb(var(--color-on-background, 0, 0, 0)); } .rm-black-surface rm-textfield-container .rm-textfield-container--container,.rm-black-surface [is="rm-textfield-container"] .rm-textfield-container--container{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } .rm-dark-surface rm-textfield-container .rm-textfield-container--container,.rm-dark-surface [is="rm-textfield-container"] .rm-textfield-container--container{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } .rm-light-surface rm-textfield-container .rm-textfield-container--container,.rm-light-surface [is="rm-textfield-container"] .rm-textfield-container--container{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } .rm-white-surface rm-textfield-container .rm-textfield-container--container,.rm-white-surface [is="rm-textfield-container"] .rm-textfield-container--container{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } rm-textfield-container[variant=filled] .rm-textfield-container--container,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--container{ padding: 0.875em 0.25em 0.875em 0.25em; } rm-textfield-container[variant=filled] .rm-textfield-container--no-leading .rm-textfield-container--container,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--no-leading .rm-textfield-container--container{ padding-left: 0.75em; } rm-textfield-container[variant=filled] .rm-textfield-container--no-trailing .rm-textfield-container--container,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--no-trailing .rm-textfield-container--container{ padding-right: 0.75em; } rm-textfield-container[variant=filled].rm-label-should-float .rm-textfield-container--container,[is="rm-textfield-container"][variant=filled].rm-label-should-float .rm-textfield-container--container{ padding-top: 1.25em; padding-bottom: 0.5em; } .rm-black-surface rm-textfield-container[variant=filled] .rm-textfield-container--container,.rm-black-surface [is="rm-textfield-container"][variant=filled] .rm-textfield-container--container{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-black, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-dark-surface rm-textfield-container[variant=filled] .rm-textfield-container--container,.rm-dark-surface [is="rm-textfield-container"][variant=filled] .rm-textfield-container--container{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-light-surface rm-textfield-container[variant=filled] .rm-textfield-container--container,.rm-light-surface [is="rm-textfield-container"][variant=filled] .rm-textfield-container--container{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-white-surface rm-textfield-container[variant=filled] .rm-textfield-container--container,.rm-white-surface [is="rm-textfield-container"][variant=filled] .rm-textfield-container--container{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); } rm-textfield-container[variant=outlined] .rm-textfield-container--container,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--container{ padding: 0.875em 0.25em 0.875em 0.25em; } rm-textfield-container[variant=outlined] .rm-textfield-container--no-leading .rm-textfield-container--container,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--no-leading .rm-textfield-container--container{ padding-left: 0.75em; } rm-textfield-container[variant=outlined] .rm-textfield-container--no-trailing .rm-textfield-container--container,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--no-trailing .rm-textfield-container--container{ padding-right: 0.75em; } rm-textfield-container:not([variant=outlined]) .rm-textfield-container--container,[is="rm-textfield-container"]:not([variant=outlined]) .rm-textfield-container--container{ border: none !important; } rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--container,[is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--container{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--container,.rm-black-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--container{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--container,.rm-dark-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--container{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--container,.rm-light-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--container{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--container,.rm-white-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--container{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textfield-container[variant=outlined] .rm-textfield-container--border,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--border{ border: rgba(0, 0, 0, .42) 1px solid; border: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)) 1px solid; border-radius: inherit; transition: border 150ms linear; position: absolute; top: 0; right: 0; bottom: 0; left: 0; } .rm-black-surface rm-textfield-container[variant=outlined] .rm-textfield-container--border,.rm-black-surface [is="rm-textfield-container"][variant=outlined] .rm-textfield-container--border{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-black, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-textfield-container[variant=outlined] .rm-textfield-container--border,.rm-dark-surface [is="rm-textfield-container"][variant=outlined] .rm-textfield-container--border{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-textfield-container[variant=outlined] .rm-textfield-container--border,.rm-light-surface [is="rm-textfield-container"][variant=outlined] .rm-textfield-container--border{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-textfield-container[variant=outlined] .rm-textfield-container--border,.rm-white-surface [is="rm-textfield-container"][variant=outlined] .rm-textfield-container--border{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--border,[is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--border{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary, 139, 0, 139)) 2px solid; } .rm-black-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--border,.rm-black-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--border{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-black, 238, 130, 238)) 2px solid; } .rm-dark-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--border,.rm-dark-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--border{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-dark, 238, 130, 238)) 2px solid; } .rm-light-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--border,.rm-light-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--border{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-light, 139, 0, 139)) 2px solid; } .rm-white-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--border,.rm-white-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--border{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-white, 139, 0, 139)) 2px solid; } rm-textfield-container .rm-textfield-container--border-notch,[is="rm-textfield-container"] .rm-textfield-container--border-notch{ position: absolute; top: 0; font-size: 0.6em; padding: 0 0.4166666666666667em; transform: translateY(-50%) scaleX(0); background: inherit; color: transparent; transition: transform ease-in-out 150ms; display: inline-block; } rm-textfield-container .rm-textfield-container--no-leading .rm-textfield-container--border-notch,[is="rm-textfield-container"] .rm-textfield-container--no-leading .rm-textfield-container--border-notch{ margin-left: 0.8333333333333334em; } rm-textfield-container.rm-label-should-float .rm-textfield-container--border-notch,[is="rm-textfield-container"].rm-label-should-float .rm-textfield-container--border-notch{ transform: translateY(-50%) scaleX(1); } rm-textfield-container:not([variant=outlined]) .rm-textfield-container--border-notch,[is="rm-textfield-container"]:not([variant=outlined]) .rm-textfield-container--border-notch{ display: none; } rm-textfield-container .rm-textfield-container--label,[is="rm-textfield-container"] .rm-textfield-container--label{ position: absolute; top: 0; left: 0; font-size: inherit; transition: transform linear 150ms, color linear 150ms; transform-origin: left bottom; color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-primary, .6)); -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; line-height: inherit; } .rm-black-surface rm-textfield-container .rm-textfield-container--label,.rm-black-surface [is="rm-textfield-container"] .rm-textfield-container--label{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-dark-surface rm-textfield-container .rm-textfield-container--label,.rm-dark-surface [is="rm-textfield-container"] .rm-textfield-container--label{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-light-surface rm-textfield-container .rm-textfield-container--label,.rm-light-surface [is="rm-textfield-container"] .rm-textfield-container--label{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-primary, .6)); } .rm-white-surface rm-textfield-container .rm-textfield-container--label,.rm-white-surface [is="rm-textfield-container"] .rm-textfield-container--label{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-primary, .6)); } rm-textfield-container.rm-label-should-float .rm-textfield-container--label,[is="rm-textfield-container"].rm-label-should-float .rm-textfield-container--label{ transform: translateY(-100%) scale(.6); } rm-textfield-container[variant=outlined] .rm-textfield-container--content,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--content,rm-textfield-container[variant=outlined] .rm-textfield-container--label,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--label{ background: inherit; } rm-textfield-container[variant=outlined].rm-label-should-float .rm-textfield-container--label,[is="rm-textfield-container"][variant=outlined].rm-label-should-float .rm-textfield-container--label{ transform: translateY(-140%) scale(.6); } rm-textfield-container.rm-focused .rm-textfield-container--label,[is="rm-textfield-container"].rm-focused .rm-textfield-container--label{ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-textfield-container.rm-focused .rm-textfield-container--label,.rm-black-surface [is="rm-textfield-container"].rm-focused .rm-textfield-container--label{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textfield-container.rm-focused .rm-textfield-container--label,.rm-dark-surface [is="rm-textfield-container"].rm-focused .rm-textfield-container--label{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textfield-container.rm-focused .rm-textfield-container--label,.rm-light-surface [is="rm-textfield-container"].rm-focused .rm-textfield-container--label{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textfield-container.rm-focused .rm-textfield-container--label,.rm-white-surface [is="rm-textfield-container"].rm-focused .rm-textfield-container--label{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textfield-container .rm-textfield-container--basic-underline,[is="rm-textfield-container"] .rm-textfield-container--basic-underline{ position: absolute; background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); bottom: 0; left: 0; right: 0; height: 1px; } .rm-black-surface rm-textfield-container .rm-textfield-container--basic-underline,.rm-black-surface [is="rm-textfield-container"] .rm-textfield-container--basic-underline{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-textfield-container .rm-textfield-container--basic-underline,.rm-dark-surface [is="rm-textfield-container"] .rm-textfield-container--basic-underline{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-textfield-container .rm-textfield-container--basic-underline,.rm-light-surface [is="rm-textfield-container"] .rm-textfield-container--basic-underline{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-textfield-container .rm-textfield-container--basic-underline,.rm-white-surface [is="rm-textfield-container"] .rm-textfield-container--basic-underline{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-textfield-container:not([variant])[disabled] .rm-textfield-container--basic-underline,[is="rm-textfield-container"]:not([variant])[disabled] .rm-textfield-container--basic-underline,rm-textfield-container[variant=flat][disabled] .rm-textfield-container--basic-underline,[is="rm-textfield-container"][variant=flat][disabled] .rm-textfield-container--basic-underline{ border-bottom: rgba(0, 0, 0, .42) 1px dashed; border-bottom: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)) 1px dashed; height: 0; background: transparent; } rm-textfield-container[variant=filled][disabled] .rm-textfield-container--basic-underline,[is="rm-textfield-container"][variant=filled][disabled] .rm-textfield-container--basic-underline{ display: none; } rm-textfield-container .rm-textfield-container--underline,[is="rm-textfield-container"] .rm-textfield-container--underline{ position: absolute; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); bottom: 0; left: 0; right: 0; height: 2px; transform: scaleX(0); transform-origin: center; transition: transform linear 150ms, opacity linear 150ms; } .rm-black-surface rm-textfield-container .rm-textfield-container--underline,.rm-black-surface [is="rm-textfield-container"] .rm-textfield-container--underline{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textfield-container .rm-textfield-container--underline,.rm-dark-surface [is="rm-textfield-container"] .rm-textfield-container--underline{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textfield-container .rm-textfield-container--underline,.rm-light-surface [is="rm-textfield-container"] .rm-textfield-container--underline{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textfield-container .rm-textfield-container--underline,.rm-white-surface [is="rm-textfield-container"] .rm-textfield-container--underline{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textfield-container.rm-focused .rm-textfield-container--underline,[is="rm-textfield-container"].rm-focused .rm-textfield-container--underline{ transform: scale(1) !important; opacity: 1 !important; } rm-textfield-container[variant=outlined] .rm-textfield-container--underline,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--underline,rm-textfield-container[variant=outlined] .rm-textfield-container--basic-underline,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--basic-underline{ display: none; } rm-textfield-container .rm-textfield-container--content,[is="rm-textfield-container"] .rm-textfield-container--content{ position: relative; } rm-textfield-container .rm-textfield-container--main,[is="rm-textfield-container"] .rm-textfield-container--main{ display: inline-table; position: relative; background: rgb(245, 245, 245); background: rgb(var(--color-background, 245, 245, 245)); font-size: inherit; cursor: inherit; border-radius: inherit; width: 100%; } rm-textfield-container[variant=filled] .rm-textfield-container--main,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--main{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); } rm-textfield-container .rm-textfield-container--leading,[is="rm-textfield-container"] .rm-textfield-container--leading{ display: table-cell; width: 1px; vertical-align: middle; position: relative; padding-right: .5em; } rm-textfield-container[variant=filled] .rm-textfield-container--leading,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--leading,rm-textfield-container[variant=outlined] .rm-textfield-container--leading,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--leading{ padding-left: .5em; padding-right: 0; } rm-textfield-container .rm-textfield-container--no-leading .rm-textfield-container--leading,[is="rm-textfield-container"] .rm-textfield-container--no-leading .rm-textfield-container--leading{ display: none; } rm-textfield-container .rm-textfield-container--trailing,[is="rm-textfield-container"] .rm-textfield-container--trailing{ display: table-cell; width: 1px; vertical-align: middle; position: relative; padding-left: .5em; } rm-textfield-container[variant=filled] .rm-textfield-container--trailing,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--trailing,rm-textfield-container[variant=outlined] .rm-textfield-container--trailing,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--trailing{ padding-right: .5em; padding-left: 0; } rm-textfield-container .rm-textfield-container--no-trailing .rm-textfield-container--trailing,[is="rm-textfield-container"] .rm-textfield-container--no-trailing .rm-textfield-container--trailing{ display: none; } rm-textfield-container .rm-textfield-container--disabled-block,[is="rm-textfield-container"] .rm-textfield-container--disabled-block{ display: none; position: absolute; top: 0; right: 0; bottom: 0; left: 0; } rm-textfield-container[disabled] .rm-textfield-container--disabled-block,[is="rm-textfield-container"][disabled] .rm-textfield-container--disabled-block{ display: block; }`,

      'exports': {
        onMounted() {
            this._refreshCaps();
        },

        _onlabelpointerdown(event) {
            const control = this.root.children[0].control;
            if (control === document.activeElement && event.target !== control) {
                event.preventDefault();
            }
        },

        _hasInputSlot() {
            return this.slots.some(slot => {
                return slot.id === "input";
            });
        },

        _hasSlot(name) {
            let index;
            return this.slots.some((slot, i) => (index = i, slot.id === name)) && console.log(this.slots[index]);
        },

        _getLeadingIcons() {
            const leadingIcons = this.props.leadingIcons;
            if (leadingIcons == null) {
                return [];
            }
            switch (typeof leadingIcons) {
                case "string": {
                    return leadingIcons.split(/[\W]+/).filter(icon => icon.length > 0);
                }
                case "object": {
                    return Array.isArray(leadingIcons) ? leadingIcons : [];
                }
                default: {
                    return [];
                }
            }
        },

        _getTrailingIcons() {
            const trailingIcons = this.props.trailingIcons;
            if (trailingIcons == null) {
                return [];
            }
            switch (typeof trailingIcons) {
                case "string": {
                    return trailingIcons.split(/[\W]+/).filter(icon => icon.length > 0);
                }
                case "object": {
                    return Array.isArray(trailingIcons) ? trailingIcons : [];
                }
                default: {
                    return [];
                }
            }
        },

        _refreshCaps() {
            const label = this.root.firstElementChild;
            label.classList.remove("rm-textfield-container--no-leading", "rm-textfield-container--no-trailing");
            const leading = this.root.querySelector("label > .rm-textfield-container--leading");
            if (leading.children.length === 0 || leading.getBoundingClientRect().width <= 9) {
                label.classList.add("rm-textfield-container--no-leading");
            } else {
                label.classList.remove("rm-textfield-container--no-leading");
            }
            const trailing = this.root.querySelector("label > .rm-textfield-container--trailing");
            if (trailing.children.length === 0 || trailing.getBoundingClientRect().width <= 9) {
                label.classList.add("rm-textfield-container--no-trailing");
            } else {
                label.classList.remove("rm-textfield-container--no-trailing");
            }
        },

        onUpdated() {
            this._refreshCaps();
        },

        components: {
            "rm-button": ButtonComponent
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<label expr324="expr324" class="rm-textfield-container--main"><div class="rm-textfield-container--border"></div><div class="rm-textfield-container--leading"><slot expr325="expr325" name="leading"></slot></div><div expr326="expr326" class="rm-textfield-container--border-notch"> </div><div class="rm-textfield-container--container"><div class="rm-textfield-container--content"><div expr327="expr327" class="rm-textfield-container--label"> </div><div style="position: relative; user-select: auto;"><template expr328="expr328"></template><slot expr330="expr330" name="input"></slot></div></div></div><div class="rm-textfield-container--trailing"><slot expr331="expr331" name="trailing"></slot></div><div class="rm-textfield-container--basic-underline"></div><div class="rm-textfield-container--underline"></div><div class="rm-textfield-container--disabled-block"></div></label><div style="height: 1em; line-height: 1em; margin-bottom: -1em; pointer-events: none;"><div expr332="expr332" style="font-size: .75em;"> </div></div>',
          [{
            'redundantAttribute': 'expr324',
            'selector': '[expr324]',

            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onmousedown',

              'evaluate': function(scope) {
                return scope._onlabelpointerdown;
              }
            }]
          }, {
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'leading',
            'redundantAttribute': 'expr325',
            'selector': '[expr325]'
          }, {
            'redundantAttribute': 'expr326',
            'selector': '[expr326]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.label;
              }
            }]
          }, {
            'redundantAttribute': 'expr327',
            'selector': '[expr327]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.label;
              }
            }]
          }, {
            'type': bindingTypes.IF,

            'evaluate': function(scope) {
              return !scope._hasInputSlot();
            },

            'redundantAttribute': 'expr328',
            'selector': '[expr328]',

            'template': template('<slot expr329="expr329"></slot>', [{
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'default',
              'redundantAttribute': 'expr329',
              'selector': '[expr329]'
            }])
          }, {
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'input',
            'redundantAttribute': 'expr330',
            'selector': '[expr330]'
          }, {
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'trailing',
            'redundantAttribute': 'expr331',
            'selector': '[expr331]'
          }, {
            'redundantAttribute': 'expr332',
            'selector': '[expr332]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.helperText;
              }
            }]
          }]
        );
      },

      'name': 'rm-textfield-container'
    };

    const blockedInputs = [];
    window.addEventListener("change", event => {
        if (blockedInputs.some(input => event.target === input)) {
            event.stopImmediatePropagation();
        }
    }, true);

    var SelectComponent = {
      'css': `rm-select,[is="rm-select"]{ position: relative; } rm-select[filterable],[is="rm-select"][filterable]{ cursor: text; } rm-select[disabled],[is="rm-select"][disabled]{ cursor: default; } rm-select .rm-select--arrow,[is="rm-select"] .rm-select--arrow{ transition: transform ease-in-out 150ms; transform: rotate(0deg); } rm-select .rm-select--arrow.rm-select--arrow-rotated,[is="rm-select"] .rm-select--arrow.rm-select--arrow-rotated{ transform: rotate(180deg); } rm-select .rm-select--input,[is="rm-select"] .rm-select--input{ padding: 0; font-size: inherit; line-height: inherit; border: 0; background: none; outline: none; opacity: 0; cursor: default; width: 100%; color: currentColor; } rm-select[filterable]:not([filterable=false]) .rm-select--input,[is="rm-select"][filterable]:not([filterable=false]) .rm-select--input{ opacity: 1; cursor: text; } rm-select .rm-select--label,[is="rm-select"] .rm-select--label{ position: absolute; top: 0; left: 0; font-size: inherit; line-height: inherit; } rm-select[filterable]:not([filterable=false]) .rm-select--label,[is="rm-select"][filterable]:not([filterable=false]) .rm-select--label{ display: none; }`,

      'exports': {
        state: {
            selected: [],
        },

        _mounted: false,
        _menu: null,
        _input: null,

        onBeforeMount() {
            const valueProperty = {
                get: () => {
                    const selected = this.state.selected;
                    return this.isMultiple() ? selected : selected[0] || "";
                },
                set: value => {
                    this.select(value);
                }
            };
            Object.defineProperty(this.root, "value", valueProperty);
            Object.defineProperty(this.root, "label", { get: () => {
                return this._input ? this._input.label : "";
            } });
        },

        onMounted() {
            const input = this._input = this.root.querySelector("input");
            
            Object.defineProperty(input, "value", {
                get: () => this.root.value,
                set: value => { this.root.value = value; }
            });

            Object.defineProperty(input, "label", { get: HTMLInputElement.prototype.__lookupGetter__("value").bind(input) });

            this.root.children[1].addEventListener("keydown", event => {
                if (!this.state.menuopened && [ 32 ].some(keyCode => event.keyCode === keyCode)) {
                    this.update({ menuopened: true });
                    event.stopImmediatePropagation();
                } else if (this.state.menuopened && [ 27 ].some(keyCode => event.keyCode === keyCode)) {
                    this.update({ menuopened: false });
                    event.stopImmediatePropagation();
                } else if (!this.state.menuopened) {
                    switch (event.keyCode) {
                        case 40: {
                            if (this.isMultiple() || this.isFilterable()) {
                                this.update({ menuopened: true });
                            } else {
                                const options = this._menu.options;
                                if (options.length !== 0) {
                                    if (this.state.selected.length === 0) {
                                        this.root.value = options[0].value;
                                    } else {
                                        const value = this.state.selected[0];
                                        let index = 0;
                                        for (let i = 0; i < options.length; i++) {
                                            const opt = options[i];
                                            if (opt.value === value) {
                                                index = i;
                                                break;
                                            }
                                        }
                                        if (index + 1 < options.length) {
                                            this.root.value = options[index + 1].value;
                                        }
                                    }
                                }
                            }
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            break;
                        }
                        case 38: {
                            if (this.isMultiple() || this.isFilterable()) {
                                this.update({ menuopened: true });
                            } else {
                                const options = this._menu.options;
                                if (options.length !== 0) {
                                    if (this.state.selected.length === 0) {
                                        this.root.value = options[0].value;
                                    } else {
                                        const value = this.state.selected[0];
                                        let index = 0;
                                        for (let i = options.length - 1; i >= 0; i--) {
                                            const opt = options[i];
                                            if (opt.value === value) {
                                                index = i;
                                                break;
                                            }
                                        }
                                        if (index - 1 >= 0) {
                                            this.root.value = options[index - 1].value;
                                        }
                                    }
                                }
                            }
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            break;
                        }
                    }
                }
            });
            (this._menu = this.root.firstElementChild)._bindTo(this.root.children[1]);

            blockedInputs.push(input);

            pointerController(this.root.firstElementChild, event => {
                if (this.props.disabled) {
                    return;
                }
                if (document.activeElement !== input) {
                    if (!this.state.menuopened) {
                        this.update({ menuopened: true });
                    }
                    event.preventDefault();
                    input.focus();
                } else if (!this.isFilterable()) {
                    this.update({ menuopened: !this.state.menuopened });
                }
            });
            pointerController(this.root.querySelector(".rm-select--arrow"), event => {
                if (this.props.disabled) {
                    return;
                }
                if (this.isFilterable()) {
                    this.update({ menuopened: !this.state.menuopened });
                }
            });

            this._lastSelected = this.state.selected.sort();

            this._mounted = true;
            // this.state.selectedOption = option;
            // HTMLInputElement.prototype.__lookupSetter__("value").call(input, this.getLabel());
        },

        onBeforeUnmount() {
            if (blockedInputs.some((input, i) => {
                return this._input === input;
            })) {
                blockedInputs.splice(i, 1);
            }
        },

        _lastSelected: null,

        onBeforeUpdate() {
            if (this.state.refreshLabel) {
                HTMLInputElement.prototype.__lookupSetter__("value").call(this.root.querySelector("input"), this.getLabel());
                delete this.state.refreshLabel;
            }
        },

        onUpdated() {
            const selected = this.state.selected.sort();
            if (selected.length !== this._lastSelected.length || selected.some((item, i) => {
                return item !== this._lastSelected[i];
            })) {
                this._lastSelected = selected;
                this.root.dispatchEvent(new Event("change"));
            }
        },

        _oninputfocus() {
            this._labelWhenOnFocus = this.root.label;
            this.update({ focused: true }); // , menuopened: true });
        },

        _oninputblur() {
            this.update({ focused: false, menuopened: false, refreshLabel: true });
        },

        _oninputinput() {
            if (this.isFilterable() && !this.state.menuopened) {
                this.update({ menuopened: true });
            }
        },

        _getClassNames() {
            const classNames = {};
            if (this.state.focused) {
                classNames["rm-focused"] = true;
                if (this.isFilterable()) {
                    classNames["rm-label-should-float"] = true;
                }
            }
            const label = this.getLabel();
            if (label !== "") {
                classNames["rm-label-should-float"] = true;
            }
            return Object.keys(classNames).join(" ");
        },

        clear() {
            this.update({ selected: [], menuopened: true, refreshLabel: true });
        },

        getSelected() {
            if (this.state.selected.length === 0) {
                return [];
            }
            return (this._menu || this.root).querySelectorAll(this.state.selected.map(value => {
                return ["option", "rm-menu-item"].map(tag => {
                    const selectors = [ `[value='${value}']:not([disabled]):not([passive])` ];
                    if (!value) {
                        selectors.push(":not([value]):not([disabled]):not([passive])");
                    }
                    return selectors.map(selector => tag + selector).join(",");
                }).join(",")
            }).join(","));
        },

        getOptions() {
            return this.root.querySelectorAll("option");
        },

        getLabel() {
            return Array.prototype.map.call(this.getSelected(), option => option.label).join(", ");
        },

        isFilterable() {
            return this.props.filterable != null && this.props.filterable !== "false" && this.props.filterable !== false;
        },

        isMultiple() {
            return false;
        },

        isClearable() {
            return this.props.clearable != null && this.props.clearable !== false;
        },

        select(value) {
            if (!this.hasSelected(value)) {
                if (this.isMultiple()) {
                    this.state.selected.push(value);
                } else {
                    this.state.selected = [value];
                }
            }
            if (this._mounted) {
                this.update({ menuopened: this.isMultiple() ? state.menuopened : false, refreshLabel: true });
            }
        },

        hasSelected(value) {
            return this.state.selected.some(s => s === value);
        },

        components: {
            "rm-textfield-container": TextfieldContainerComponent,
            "rm-button": ButtonComponent,
            "rm-menu": MenuComponent
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<rm-menu expr311="expr311" inherit-width prevent-close-on-click-out prevent-focus keep-highlight></rm-menu><rm-textfield-container expr313="expr313"></rm-textfield-container>',
          [{
            'type': bindingTypes.TAG,
            'getComponent': getComponent,

            'evaluate': function(scope) {
              return 'rm-menu';
            },

            'slots': [{
              'id': 'default',
              'html': '<slot expr312="expr312"></slot>',

              'bindings': [{
                'type': bindingTypes.SLOT,
                'attributes': [],
                'name': 'default',
                'redundantAttribute': 'expr312',
                'selector': '[expr312]'
              }]
            }],

            'attributes': [{
              'type': expressionTypes.EVENT,
              'name': 'onselected',

              'evaluate': function(scope) {
                return scope._onmenuselected;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'opened',

              'evaluate': function(scope) {
                return scope.state.menuopened;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'variant',

              'evaluate': function(scope) {
                return scope.props.variant;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'selected',

              'evaluate': function(scope) {
                return scope.state.selected;
              }
            }],

            'redundantAttribute': 'expr311',
            'selector': '[expr311]'
          }, {
            'type': bindingTypes.TAG,
            'getComponent': getComponent,

            'evaluate': function(scope) {
              return 'rm-textfield-container';
            },

            'slots': [{
              'id': 'input',
              'html': '<span slot="input"><input expr314="expr314" class="rm-select--input"/><div expr315="expr315" class="rm-select--label"> </div></span>',

              'bindings': [{
                'redundantAttribute': 'expr314',
                'selector': '[expr314]',

                'expressions': [{
                  'type': expressionTypes.EVENT,
                  'name': 'onfocus',

                  'evaluate': function(scope) {
                    return scope._oninputfocus;
                  }
                }, {
                  'type': expressionTypes.EVENT,
                  'name': 'onblur',

                  'evaluate': function(scope) {
                    return scope._oninputblur;
                  }
                }, {
                  'type': expressionTypes.EVENT,
                  'name': 'oninput',

                  'evaluate': function(scope) {
                    return scope._oninputinput;
                  }
                }, {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'readonly',

                  'evaluate': function(scope) {
                    return !scope.isFilterable();
                  }
                }, {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'disabled',

                  'evaluate': function(scope) {
                    return scope.props.disabled;
                  }
                }]
              }, {
                'redundantAttribute': 'expr315',
                'selector': '[expr315]',

                'expressions': [{
                  'type': expressionTypes.TEXT,
                  'childNodeIndex': 0,

                  'evaluate': function(scope) {
                    return scope.getLabel();
                  }
                }]
              }]
            }, {
              'id': 'leading',
              'html': '<slot expr316="expr316" name="leading" slot="leading"></slot>',

              'bindings': [{
                'type': bindingTypes.SLOT,
                'attributes': [],
                'name': 'leading',
                'redundantAttribute': 'expr316',
                'selector': '[expr316]'
              }]
            }, {
              'id': 'trailing',
              'html': '<span style="white-space: nowrap;" slot="trailing"><rm-button expr317="expr317" variant="icon" class="rm-select--clear" dense></rm-button><slot expr318="expr318" name="trailing"></slot><rm-button expr319="expr319" variant="icon" tabindex="-1" dense></rm-button></span>',

              'bindings': [{
                'type': bindingTypes.IF,

                'evaluate': function(scope) {
                  return scope.isClearable() && scope.root.value;
                },

                'redundantAttribute': 'expr317',
                'selector': '[expr317]',

                'template': template(null, [{
                  'type': bindingTypes.TAG,
                  'getComponent': getComponent,

                  'evaluate': function(scope) {
                    return 'rm-button';
                  },

                  'slots': [{
                    'id': 'default',
                    'html': 'clear',
                    'bindings': []
                  }],

                  'attributes': [{
                    'type': expressionTypes.EVENT,
                    'name': 'onclick',

                    'evaluate': function(scope) {
                      return scope.clear;
                    }
                  }, {
                    'type': expressionTypes.ATTRIBUTE,
                    'name': 'tabindex',

                    'evaluate': function(scope) {
                      return scope.props.disabled ? "-1" : null;
                    }
                  }]
                }])
              }, {
                'type': bindingTypes.SLOT,
                'attributes': [],
                'name': 'trailing',
                'redundantAttribute': 'expr318',
                'selector': '[expr318]'
              }, {
                'type': bindingTypes.TAG,
                'getComponent': getComponent,

                'evaluate': function(scope) {
                  return 'rm-button';
                },

                'slots': [{
                  'id': 'default',
                  'html': 'arrow_drop_down',
                  'bindings': []
                }],

                'attributes': [{
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'class',

                  'evaluate': function(scope) {
                    return [
                      'rm-select--arrow',
                      scope.state.menuopened ? ' rm-select--arrow-rotated' : ''
                    ].join('');
                  }
                }],

                'redundantAttribute': 'expr319',
                'selector': '[expr319]'
              }]
            }],

            'attributes': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'variant',

              'evaluate': function(scope) {
                return scope.props.variant;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'label',

              'evaluate': function(scope) {
                return scope.props.label;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'full-width',

              'evaluate': function(scope) {
                return scope.props.fullWidth;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'class',

              'evaluate': function(scope) {
                return scope._getClassNames();
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'disabled',

              'evaluate': function(scope) {
                return scope.props.disabled;
              }
            }],

            'redundantAttribute': 'expr313',
            'selector': '[expr313]'
          }]
        );
      },

      'name': 'rm-select'
    };

    var MOTION_CONTROLLER = Symbol("motion-controller");
    function motionController(element) {
        var existingMotionController = element[MOTION_CONTROLLER];
        if (existingMotionController != null) {
            return existingMotionController;
        }
        var self;
        var eventTarget = new EventTarget();
        var length = 0;
        var getLength = function () {
            return length;
        };
        var setLength = function (l) {
            length = l;
            return self;
        };
        var index = 0;
        var getSelectedIndex = function () {
            return index;
        };
        var setSelectedIndex = function (i) {
            if (i < 0) {
                i = 0;
            }
            if (i >= length) {
                i = length - 1;
            }
            index = i;
            return self;
        };
        var motion = 0;
        var getMotion = function () {
            var m = parseFloat(motion);
            if (isNaN(m)) {
                return 0;
            }
            m = Math.max(Math.min(1, m), -1);
            var index = getSelectedIndex();
            if (index === 0 && m < 0 || index === getLength() - 1 && m > 0) {
                return 0;
            }
            return m;
        };
        var _touchIdentifier = null;
        var startMotion = function (event) {
            if (_touchIdentifier != null) {
                return;
            }
            var touch = event.targetTouches[0];
            var identifier = _touchIdentifier = touch.identifier;
            var startX = touch.clientX;
            var lastDirection = null;
            var updateMotion = function (event) {
                var index;
                if (!Array.from(event.changedTouches).some(function (touch, i) {
                    index = i;
                    return touch.identifier === identifier;
                })) {
                    return;
                }
                var lastMotion = getMotion();
                var touch = event.changedTouches[index];
                var endX = touch.clientX;
                var delta = endX - startX;
                motion = -delta / element.getBoundingClientRect().width;
                var newMotion = getMotion();
                if (newMotion !== lastMotion) {
                    lastDirection = newMotion > lastMotion ? 1 : -1;
                }
                eventTarget.dispatchEvent(new CustomEvent("motionchanged", { detail: { motion: newMotion } }));
            };
            var endMotion = function (event) {
                if (!Array.from(event.changedTouches).some(function (touch) {
                    return touch.identifier === identifier;
                })) {
                    return;
                }
                if (lastDirection != null) {
                    var m = getMotion();
                    motion = 0;
                    var newM = void 0;
                    if (m < 0) {
                        newM = lastDirection < 0 ? -1 : 0;
                    }
                    else {
                        newM = lastDirection > 0 ? 1 : 0;
                    }
                    lastDirection = null;
                    var roundedMotion = Math.round(newM);
                    var previousIndex = getSelectedIndex();
                    if (roundedMotion !== 0) {
                        setSelectedIndex(previousIndex + roundedMotion);
                    }
                    eventTarget.dispatchEvent(new CustomEvent("motionapplied", { detail: {
                            previousIndex: previousIndex,
                            currentIndex: getSelectedIndex()
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
            getMotion: getMotion,
            getSelectedIndex: getSelectedIndex,
            setSelectedIndex: setSelectedIndex,
            getLength: getLength,
            setLength: setLength,
            on: function (type, callback) {
                eventTarget.addEventListener(type, callback);
                return self;
            },
            off: function (type, callback) {
                eventTarget.removeEventListener(type, callback);
                return self;
            }
        };
    }

    const PAGE_INDEX = Symbol("page-index");

    var TabbedPagesComponent = {
      'css': `rm-tabbed-pages,[is="rm-tabbed-pages"]{ white-space: nowrap; overflow: hidden; width: 100%; display: block; font-size: 0; transform: scaleY(1); } rm-tabbed-pages > div:first-child,[is="rm-tabbed-pages"] > div:first-child{ overflow: hidden; display: block; width: 100%; } rm-tabbed-pages > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child{ display: block; width: 100%; overflow: auto visible; position: relative; user-select: none; text-align: center; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child{ display: inline-table; font-size: initial; text-align: center; } rm-tabbed-pages:not([centered]) > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"]:not([centered]) > div:first-child > div:first-child > div:first-child,rm-tabbed-pages[centered="false" i] > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"][centered="false" i] > div:first-child > div:first-child > div:first-child{ width: 100%; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child > div,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child > div{ display: table-cell; overflow: hidden; position: relative; width: 1px; height: 100%; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child > div > button,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child > div > button{ background-color: transparent; border: 0; padding: 12px 16px; font-size: 16px; line-height: 20px; height: 100%; width: 100%; cursor: pointer; outline: none; color: rgb(0, 0, 0); color: rgb(var(--color-on-background, 0, 0, 0)); } rm-tabbed-pages > div:first-child > div:first-child > div:nth-child(2),[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:nth-child(2){ position: absolute; bottom: 0; left: 0; height: 2px; width: 1px; transition: transform ease-in-out 200ms; transform-origin: left; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); } rm-tabbed-pages > div:nth-child(2) > *,[is="rm-tabbed-pages"] > div:nth-child(2) > *{ display: inline-block; width: 100%; vertical-align: top; transition: transform ease-in-out 200ms; font-size: initial; white-space: initial; }`,

      'exports': {
        onMounted() {
            this._manipulate();
            let width = this.root.getBoundingClientRect().width;
            const frame = () => {
                if (!this.root.isConnected) {
                    return;
                }
                const newWidth = this.root.getBoundingClientRect().width;
                if (newWidth !== width) {
                    this._updateIndicator(true);
                    width = newWidth;
                }
                window.requestAnimationFrame(frame);
            };
            window.requestAnimationFrame(frame);
            motionController(this.root.children[1])
            .setSelectedIndex(this.getSelectedIndex())
            .on("motionchanged", event => this.update({ motion: event.detail.motion, instant: true }))
            .on("motionapplied", event => {
                delete this.state.motion;
                if (event.detail.currentIndex === event.detail.previousIndex) {
                    this.update({ skipUpdate: true });
                } else {
                    this.setSelectedIndex(event.detail.currentIndex);
                }
            });
        },

        onBeforeUpdate() {
            if (this.state.selectedIndex != null) {
                this.state.selectedIndex = Math.round(this.state.selectedIndex);
            }
            if (isNaN(this.state.selectedIndex)) {
                delete this.state.selectedIndex;
            }
        },

        onUpdated() {
            this._manipulate(true);
        },

        _lastHiddenTabsPropValue: undefined,
        _hiddenTabs: [],

        getHiddenTabs() {
            if (this.props.hiddenTabs !== this._lastHiddenTabsPropValue) {
                let newHiddenTabs = [];
                switch (typeof this.props.hiddenTabs) {
                    case "string": {
                        if (/^(\W*(\d+)\W*)+$/.test(this.props.hiddenTabs)) {
                            const regex = /(\d+)/g;
                            let match;
                            const hiddenTabs = [];
                            while (match = regex.exec(this.props.hiddenTabs)) {
                                if (match.length === 0) {
                                    continue;
                                }
                                hiddenTabs.push(parseInt(match[0], 10));
                            }
                            newHiddenTabs = hiddenTabs.filter(a => a >= 0).sort((a, b) => a > b);
                        }
                        break;
                    }
                    case "number": {
                        newHiddenTabs = [ this.props.hiddenTabs ];
                        break;
                    }
                    case "object": {
                        if (Array.isArray(this.props.hiddenTabs)) {
                            newHiddenTabs = this.props.hiddenTabs.filter(item => {
                                return typeof item === "number" && item >= 0;
                            }).sort((a, b) => a > b);
                        }
                        break;
                    }
                }
                this._hiddenTabs = newHiddenTabs;
            }
            return this._hiddenTabs;
        },

        _manipulate(update = false) {
            const tabContainer = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
            ;
            const pageContainer = this.root.children[1];

            // restore hidden tabs and set correct view
            this.slots.forEach((slot, index) => {
                let tabButton = null;
                let page;
                if (index >= pageContainer.children.length) {
                    page = pageContainer.appendChild(document.createElement("div"));
                    page[PAGE_INDEX] = index;
                    tabButton = tabContainer.appendChild(document.createElement("div"));
                } else if (index !== (page = pageContainer.children[index])[PAGE_INDEX]) {
                    page = pageContainer.insertBefore(document.createElement("div"), pageContainer.children[index]);
                    page[PAGE_INDEX] = index;
                    tabButton = tabContainer.insertBefore(document.createElement("div"), tabContainer.children[index]);
                }
                // scroll to selected index
                page.style.transition = this.state.instant ? "none" : "";
                page.style.transform = "translateX(-" + ((this.getSelectedIndex() + this.getMotion()) * 100) + "%)";
                page.style.visibility = this.getSelectedIndex() === this._getUpdatedIndexOf(index) ? "visible" : "hidden";
                if (tabButton != null) {
                    const button = tabButton.appendChild(document.createElement("button"));
                    button.addEventListener("click", event => {
                        this.setSelectedIndex(this._getUpdatedIndexOf(index));
                    });
                    button.innerText = slot.id;
                    ripple(button, { detectLabel: false, color: "currentColor", instantHighlight: true });
                }
            });

            // hide desired tabs
            const hiddenTabs = this.getHiddenTabs();
            for (let i = hiddenTabs.length - 1; i >= 0; i--) {
                const index = hiddenTabs[i];
                if (index >= this.slots.length) {
                    continue;
                }
                // removing tab button at hidden index
                tabContainer.removeChild(tabContainer.children[index]);
                // unmount page at hidden index
                const page = pageContainer.children[index];
                const instance = page[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                if (instance != null) {
                    instance.unmount(
                        Object.create(this[riot.__.globals.PARENT_KEY_SYMBOL]),
                        this[riot.__.globals.PARENT_KEY_SYMBOL]
                    );
                }
                // if (page.nextElementSibling) {
                //     console.log("setting page index of", index);
                //     page.nextElementSibling[PAGE_INDEX] = index;
                // }
                // removing page at hidden index
                pageContainer.removeChild(page);
            }

            // update motionController length
            motionController(this.root.children[1]).setLength(this.getLength());

            // set indicator to correct position and size
            this._updateIndicator(!update || this.state.instant);

            // hide scrollbar, if visible
            const header = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
            ;
            const rect = header.getBoundingClientRect();
            header.style.marginBottom = header.clientHeight - rect.height + "px";

            if (!this.state.instant) {
                const selectedIndex = this.getSelectedIndex();
                const slot = this.getSlotAt(selectedIndex);
                const el = pageContainer.children[selectedIndex];
                let instance = el[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                if (instance == null) {
                    instance = el[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY] = riot.__.DOMBindings.template(slot.html, slot.bindings);
                    instance.mount(
                        el, Object.create(this[riot.__.globals.PARENT_KEY_SYMBOL]),
                        this[riot.__.globals.PARENT_KEY_SYMBOL]
                    );
                } else if (update && !this.state.skipUpdate) {
                    instance.update(
                        Object.create(this[riot.__.globals.PARENT_KEY_SYMBOL]),
                        this[riot.__.globals.PARENT_KEY_SYMBOL]
                    );
                }
            }
            delete this.state.instant;
            delete this.state.skipUpdate;
        },

        _updateIndicator(instant = false) {
            const indicator = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .children[1]       // INDICATOR
            ;
            indicator.style.transition = instant ? "none" : "";
            indicator.style.transform = `translateX(${ this.getIndicatorLeft() }px) scaleX(${ this.getIndicatorWidth() })`;
        },

        _getUpdatedIndexOf(index) {
            return index - this.getHiddenTabs().filter(a => a < index).length;
        },

        _getRawIndexOf(index) {
            this.getHiddenTabs().some(hidden => {
                if (hidden > index) {
                    return true;
                }
                index++;
                return false;
            });
            return index;
        },

        getSlotAt(index) {
            return this.slots[this._getRawIndexOf(index)];
        },

        getLength() {
            return this.slots.length - this.getHiddenTabs().filter(a => a < this.slots.length).length;
        },

        _lastSelectedIndexPropValue: undefined,

        getSelectedIndex() {
            if (this.props.selectedIndex !== this._lastSelectedIndexPropValue) {
                this._lastSelectedIndexPropValue = this.props.selectedIndex;
                const selectedIndex = parseInt(this.props.selectedIndex, 10);
                if (!isNaN(selectedIndex)) {
                    this.state.selectedIndex = selectedIndex;
                }
            }
            const length = this.getLength();
            if (this.state.selectedIndex === undefined) {
                this.state.selectedIndex = length > 0 ? 0 : null;
            } else {
                this.state.selectedIndex = length > 0 ?
                    Math.max(0, Math.min(this.state.selectedIndex, length - 1)) : null
                ;
            }
            return this.state.selectedIndex;
        },

        setSelectedIndex(index) {
            if (index === this.getSelectedIndex()) {
                return;
            }
            this.update({ selectedIndex: index });
            motionController(this.root.children[1]).setSelectedIndex(this.getSelectedIndex());
        },

        getIndicatorLeft() {
            const selectedIndex = this.getSelectedIndex();
            if (selectedIndex == null) {
                return 0;
            }
            const rect = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
                .children[selectedIndex] // TAB BUTTON
                .getBoundingClientRect()
            ;
            const delta = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .scrollLeft -
                this.root.getBoundingClientRect().left
            ;
            let left = rect.left + delta;
            const motion = this.getMotion();
            if (motion !== 0) {
                const index = selectedIndex + (motion > 0 ? 1 : -1);
                const rect = this.root
                    .firstElementChild // SCROLLBAR HIDER
                    .firstElementChild // HEADER
                    .firstElementChild // TAB CONTAINER
                    .children[index] // TAB BUTTON
                    .getBoundingClientRect()
                ;
                left += ((rect.left + delta - left) * Math.abs(motion));
            }
            return left;
        },

        getIndicatorWidth() {
            const selectedIndex = this.getSelectedIndex();
            if (selectedIndex == null) {
                return 0;
            }
            let width = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
                .children[selectedIndex] // TAB BUTTON
                .getBoundingClientRect().width
            ;
            const motion = this.getMotion();
            if (motion !== 0) {
                const index = selectedIndex + (motion > 0 ? 1 : -1);
                const rect = this.root
                    .firstElementChild // SCROLLBAR HIDER
                    .firstElementChild // HEADER
                    .firstElementChild // TAB CONTAINER
                    .children[index] // TAB BUTTON
                    .getBoundingClientRect()
                ;
                width += ((rect.width - width) * Math.abs(motion));
            }
            return width;
        },

        getMotion() {
            return motionController(this.root.children[1]).getMotion();
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<div style="transform: scaleY(1);"><div><div></div><div></div></div></div><div></div>',
          []
        );
      },

      'name': 'rm-tabbed-pages'
    };

    var TabsComponent = {
      'css': `rm-tabs,[is="rm-tabs"]{ display: block; overflow-y: hidden; } rm-tabs > div,[is="rm-tabs"] > div{ display: block; width: 100%; overflow: auto visible; position: relative; user-select: none; } rm-tabs > div > [ref=indicator],[is="rm-tabs"] > div > [ref=indicator]{ position: absolute; bottom: 0; left: 0; height: 2px; width: 1px; transition: transform ease-in-out 200ms; transform-origin: left; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-tabs > div > [ref=indicator],.rm-black-surface [is="rm-tabs"] > div > [ref=indicator]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-tabs > div > [ref=indicator],.rm-dark-surface [is="rm-tabs"] > div > [ref=indicator]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-tabs > div > [ref=indicator],.rm-light-surface [is="rm-tabs"] > div > [ref=indicator]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-tabs > div > [ref=indicator],.rm-white-surface [is="rm-tabs"] > div > [ref=indicator]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-tabs > div > [ref=tabs] > [ref=tab],[is="rm-tabs"] > div > [ref=tabs] > [ref=tab]{ display: table-cell; width: 1px; padding: 12px 16px; cursor: pointer; overflow: hidden; position: relative; font-size: 16px; line-height: 20px; } rm-tabs > div > [ref=tabs] > [ref=tab].selected,[is="rm-tabs"] > div > [ref=tabs] > [ref=tab].selected{ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-tabs > div > [ref=tabs] > [ref=tab].selected,.rm-black-surface [is="rm-tabs"] > div > [ref=tabs] > [ref=tab].selected{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-tabs > div > [ref=tabs] > [ref=tab].selected,.rm-dark-surface [is="rm-tabs"] > div > [ref=tabs] > [ref=tab].selected{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-tabs > div > [ref=tabs] > [ref=tab].selected,.rm-light-surface [is="rm-tabs"] > div > [ref=tabs] > [ref=tab].selected{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-tabs > div > [ref=tabs] > [ref=tab].selected,.rm-white-surface [is="rm-tabs"] > div > [ref=tabs] > [ref=tab].selected{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-white, 139, 0, 139)); }`,

      'exports': {
        state: {
            value: null
        },

        getTabs() {
            if (!this.props.tabs) {
                return null;
            }
            if (Array.isArray(this.props.tabs)) {
                return this.props.tabs;
            }
            return typeof this.props === "string" ? this.props.split("\n") : null;
        },

        onBeforeMount() {
            this.onBeforeUpdate();
        },

        onMounted() {
            this.onUpdated();
        },

        _lastValue: null,

        onBeforeUpdate() {
            if (this._lastValue != null && this.props.value === this._lastValue) {
                return;
            }
            this._lastValue = this.props.value;
            let tabs = this.getTabs();
            if (tabs == null) {
                return;
            }
            if (tabs.includes(this.props.value)) {
                this.state.value = this.props.value;
            } else {
                this.state.value = tabs.includes(this.state.value) ? this.state.value : tabs[0];
            }
        },

        onUpdated() {
            Array.prototype.forEach.call(this.root.querySelectorAll("[ref=tab]"), tab => {
                ripple(tab, { color: "currentColor" });
            });
            let tabsEl = this.root.firstElementChild;
            if (tabsEl) {
                let h = tabsEl.getBoundingClientRect().height;
                tabsEl.style.overflow = "hidden";
                h -= tabsEl.getBoundingClientRect().height;
                tabsEl.style.overflow = "";
                tabsEl.style.marginBottom = `-${h}px`;
            }
        },

        getIndicatorLeft() {
            if (!this.props.tabs) {
                return 0;
            }
            let tabs = this.root.querySelector("[ref=tabs]");
            let index = this.getTabs().indexOf(this.state.value);
            return tabs.children[index].getBoundingClientRect().left - 
                this.root.getBoundingClientRect().left +
                this.root.firstElementChild.scrollLeft;
        },

        getIndicatorWidth() {
            if (!this.props.tabs) {
                return 0;
            }
            return this.root.querySelector("[ref=tabs]").children[this.getTabs().indexOf(this.state.value)].getBoundingClientRect().width;
        },

        selecttab(index) {
            let tabs = this.getTabs();
            if (tabs == null || index >= tabs.length) {
                return;
            }
            this.update({ value: tabs[index] });
            this.root.dispatchEvent(new CustomEvent("change", { detail: { value: this.state.value, index } }));
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template('<div expr320="expr320"></div>', [{
          'type': bindingTypes.IF,

          'evaluate': function(scope) {
            return scope.props.tabs;
          },

          'redundantAttribute': 'expr320',
          'selector': '[expr320]',

          'template': template(
            '<div style="display: table; width: 100%; text-align: center; white-space: nowrap;" ref="tabs"><div expr321="expr321" ref="tab"></div></div><div expr323="expr323" ref="indicator"></div>',
            [{
              'type': bindingTypes.EACH,
              'getKey': null,
              'condition': null,

              'template': template('<div expr322="expr322" style="display: inline-block;"> </div>', [{
                'expressions': [{
                  'type': expressionTypes.EVENT,
                  'name': 'onclick',

                  'evaluate': function(scope) {
                    return scope.selecttab.bind(null, scope.index);
                  }
                }, {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'class',

                  'evaluate': function(scope) {
                    return scope.tab === scope.state.value ? "selected" : "";
                  }
                }]
              }, {
                'redundantAttribute': 'expr322',
                'selector': '[expr322]',

                'expressions': [{
                  'type': expressionTypes.TEXT,
                  'childNodeIndex': 0,

                  'evaluate': function(scope) {
                    return scope.tab;
                  }
                }]
              }]),

              'redundantAttribute': 'expr321',
              'selector': '[expr321]',
              'itemName': 'tab',
              'indexName': 'index',

              'evaluate': function(scope) {
                return scope.getTabs();
              }
            }, {
              'redundantAttribute': 'expr323',
              'selector': '[expr323]',

              'expressions': [{
                'type': expressionTypes.ATTRIBUTE,
                'name': 'style',

                'evaluate': function(scope) {
                  return [
                    'transform: translateX(',
                    scope.getIndicatorLeft(),
                    'px) scaleX(',
                    scope.getIndicatorWidth(),
                    ');'
                  ].join('');
                }
              }]
            }]
          )
        }]);
      },

      'name': 'rm-tabs'
    };

    var TextareaComponent = {
      'css': `rm-textarea,[is="rm-textarea"]{ display: block; font: message-box; font-size: 16px; } rm-textarea [ref=container],[is="rm-textarea"] [ref=container]{ display: block; position: relative; cursor: text; font-size: inherit; box-sizing: border-box; padding: 1em 0 .5em 0; background: rgb(245, 245, 245); background: rgb(var(--color-background, 245, 245, 245)); } .rm-black-surface rm-textarea [ref=container],.rm-black-surface [is="rm-textarea"] [ref=container]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); } .rm-dark-surface rm-textarea [ref=container],.rm-dark-surface [is="rm-textarea"] [ref=container]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); } .rm-light-surface rm-textarea [ref=container],.rm-light-surface [is="rm-textarea"] [ref=container]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); } .rm-white-surface rm-textarea [ref=container],.rm-white-surface [is="rm-textarea"] [ref=container]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); } rm-textarea [ref=mirror],[is="rm-textarea"] [ref=mirror]{ word-break: break-word; visibility: hidden; } rm-textarea[variant="filled"] [ref=container],[is="rm-textarea"][variant="filled"] [ref=container]{ padding: 1.25em 12px 1em 12px; } rm-textarea[variant="filled"] [ref=container],[is="rm-textarea"][variant="filled"] [ref=container]{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); border-radius: 4px 4px 0 0; } .rm-black-surface rm-textarea[variant="filled"] [ref=container],.rm-black-surface [is="rm-textarea"][variant="filled"] [ref=container]{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-dark-surface rm-textarea[variant="filled"] [ref=container],.rm-dark-surface [is="rm-textarea"][variant="filled"] [ref=container]{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-light-surface rm-textarea[variant="filled"] [ref=container],.rm-light-surface [is="rm-textarea"][variant="filled"] [ref=container]{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-white-surface rm-textarea[variant="filled"] [ref=container],.rm-white-surface [is="rm-textarea"][variant="filled"] [ref=container]{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); } rm-textarea[variant="outlined"] [ref=container],[is="rm-textarea"][variant="outlined"] [ref=container]{ padding: .5em 12px; transition: border-color linear 150ms; border-radius: 4px; } rm-textarea[variant="outlined"] [ref=container] [ref=border],[is="rm-textarea"][variant="outlined"] [ref=container] [ref=border]{ border: rgba(0, 0, 0, .42) 1px solid; border: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)) 1px solid; border-radius: inherit; transition: border-width 150ms linear; position: absolute; top: 0; right: 0; bottom: 0; left: 0; } .rm-black-surface rm-textarea[variant="outlined"] [ref=container] [ref=border],.rm-black-surface [is="rm-textarea"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-textarea[variant="outlined"] [ref=container] [ref=border],.rm-dark-surface [is="rm-textarea"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-textarea[variant="outlined"] [ref=container] [ref=border],.rm-light-surface [is="rm-textarea"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-textarea[variant="outlined"] [ref=container] [ref=border],.rm-white-surface [is="rm-textarea"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-textarea[variant="outlined"] [ref=container].rm-focused [ref=border],[is="rm-textarea"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary, 139, 0, 139)) 2px solid; } .rm-black-surface rm-textarea[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-black-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-black, 238, 130, 238)) 2px solid; } .rm-dark-surface rm-textarea[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-dark-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-dark, 238, 130, 238)) 2px solid; } .rm-light-surface rm-textarea[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-light-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-light, 139, 0, 139)) 2px solid; } .rm-white-surface rm-textarea[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-white-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-white, 139, 0, 139)) 2px solid; } rm-textarea[variant="outlined"] [ref=container].rm-focused,[is="rm-textarea"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-textarea[variant="outlined"] [ref=container].rm-focused,.rm-black-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textarea[variant="outlined"] [ref=container].rm-focused,.rm-dark-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textarea[variant="outlined"] [ref=container].rm-focused,.rm-light-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textarea[variant="outlined"] [ref=container].rm-focused,.rm-white-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textarea textarea,[is="rm-textarea"] textarea{ width: 100%; border: none; font-size: inherit; font-family: inherit; position: relative; background: transparent; padding: 0; position: absolute; top: 0; height: 100%; resize: none; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; color: rgb(0, 0, 0); color: rgb(var(--color-on-background, 0, 0, 0)); } .rm-black-surface rm-textarea textarea,.rm-black-surface [is="rm-textarea"] textarea{ color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } .rm-dark-surface rm-textarea textarea,.rm-dark-surface [is="rm-textarea"] textarea{ color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } .rm-light-surface rm-textarea textarea,.rm-light-surface [is="rm-textarea"] textarea{ color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } .rm-white-surface rm-textarea textarea,.rm-white-surface [is="rm-textarea"] textarea{ color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } rm-textarea textarea::placeholder,[is="rm-textarea"] textarea::placeholder{ color: transparent; } rm-textarea [ref=label],[is="rm-textarea"] [ref=label]{ position: absolute; top: 0; left: -4px; font-size: inherit; transition: transform linear 150ms, color linear 150ms; transform-origin: 6px bottom; padding: 0 8px 0 4px; color: rgba(0, 0, 0, .6); -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; } .rm-black-surface rm-textarea [ref=label],.rm-black-surface [is="rm-textarea"] [ref=label]{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-dark-surface rm-textarea [ref=label],.rm-dark-surface [is="rm-textarea"] [ref=label]{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-light-surface rm-textarea [ref=label],.rm-light-surface [is="rm-textarea"] [ref=label]{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-primary, .6)); } .rm-white-surface rm-textarea [ref=label],.rm-white-surface [is="rm-textarea"] [ref=label]{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-primary, .6)); } rm-textarea [ref=container].rm-activated [ref=label],[is="rm-textarea"] [ref=container].rm-activated [ref=label],rm-textarea [ref=container].rm-focused [ref=label],[is="rm-textarea"] [ref=container].rm-focused [ref=label]{ transform: translateY(-100%) scale(.761905); } rm-textarea [ref=container].rm-focused [ref=label],[is="rm-textarea"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-textarea [ref=container].rm-focused [ref=label],.rm-black-surface [is="rm-textarea"] [ref=container].rm-focused [ref=label]{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textarea [ref=container].rm-focused [ref=label],.rm-dark-surface [is="rm-textarea"] [ref=container].rm-focused [ref=label]{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textarea [ref=container].rm-focused [ref=label],.rm-light-surface [is="rm-textarea"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textarea [ref=container].rm-focused [ref=label],.rm-white-surface [is="rm-textarea"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textarea [ref=basic-underline],[is="rm-textarea"] [ref=basic-underline]{ position: absolute; background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); bottom: 0; left: 0; right: 0; height: 1px; } .rm-black-surface rm-textarea [ref=basic-underline],.rm-black-surface [is="rm-textarea"] [ref=basic-underline]{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-textarea [ref=basic-underline],.rm-dark-surface [is="rm-textarea"] [ref=basic-underline]{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-textarea [ref=basic-underline],.rm-light-surface [is="rm-textarea"] [ref=basic-underline]{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-textarea [ref=basic-underline],.rm-white-surface [is="rm-textarea"] [ref=basic-underline]{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-textarea [ref=underline],[is="rm-textarea"] [ref=underline]{ position: absolute; bottom: 0px; left: 0; right: 0; height: 2px; transform: scaleX(0); transform-origin: center; transition: transform linear 150ms, opacity linear 150ms; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-textarea [ref=underline],.rm-black-surface [is="rm-textarea"] [ref=underline]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textarea [ref=underline],.rm-dark-surface [is="rm-textarea"] [ref=underline]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textarea [ref=underline],.rm-light-surface [is="rm-textarea"] [ref=underline]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textarea [ref=underline],.rm-white-surface [is="rm-textarea"] [ref=underline]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textarea [ref=container].rm-focused [ref=underline],[is="rm-textarea"] [ref=container].rm-focused [ref=underline]{ transform: scale(1) !important; opacity: 1 !important; } rm-textarea [ref=container].rm-focused [ref=underline],[is="rm-textarea"] [ref=container].rm-focused [ref=underline]{ transform: scaleX(1); } rm-textarea[variant="outlined"] [ref="textarea-container"],[is="rm-textarea"][variant="outlined"] [ref="textarea-container"],rm-textarea[variant="outlined"] [ref=label],[is="rm-textarea"][variant="outlined"] [ref=label]{ background: inherit; } rm-textarea[variant="outlined"] [ref=container] [ref=underline],[is="rm-textarea"][variant="outlined"] [ref=container] [ref=underline],rm-textarea[variant="outlined"] [ref=container] [ref=basic-underline],[is="rm-textarea"][variant="outlined"] [ref=container] [ref=basic-underline]{ display: none; } rm-textarea [ref=container].rm-focused textarea::placeholder,[is="rm-textarea"] [ref=container].rm-focused textarea::placeholder{ color: initial; } rm-textarea [ref="textarea-container"],[is="rm-textarea"] [ref="textarea-container"]{ position: relative; } rm-textarea [ref="outlined-margin-top"],[is="rm-textarea"] [ref="outlined-margin-top"]{ height: 0; } rm-textarea[variant="outlined"] [ref="outlined-margin-top"],[is="rm-textarea"][variant="outlined"] [ref="outlined-margin-top"]{ height: 8px; }`,

      'exports': {
        onMounted: function () {
            let textarea = this.root.querySelector("textarea");
            let container = this.root.querySelector("[ref=container]");
            let mirror = this.root.querySelector("[ref=mirror]");

            textarea.addEventListener("input", () => {
                // set mirror text same as the textarea
                mirror.innerText = mirror.textContent = textarea.value.replace(/^\h*$/, "\u00A0").replace(/\n$/, "\n\u00A0");
                if (textarea.value) {
                    container.classList.add("rm-activated");
                } else {
                    container.classList.remove("rm-activated");
                }
            });

            let wasTextareaFocused = false;
            textarea.addEventListener("focus", () => {
                wasTextareaFocused = true;
                pointerdownOnTextarea = false;
                container.classList.add("rm-focused");
            });

            let pointerdownOnTextarea = false;
            textarea.addEventListener("blur", () => {
                container.classList.remove("rm-focused");
                if (pointerdownOnTextarea) {
                    setTimeout(() => {
                        if (!this.root.isConnected) {
                            return;
                        }
                        textarea.focus();
                    }, 0);
                } else {
                    wasTextareaFocused = false;
                }
            });
            container.addEventListener("pointerdown", (event) => {
                pointerdownOnTextarea = event.target !== textarea;
                if (wasTextareaFocused) {
                    textarea.focus();
                }
            });
            container.addEventListener("click", () => {
                if (wasTextareaFocused) {
                    return;
                }
                textarea.focus();
            });

            Object.defineProperty(this.root, "value", {
                get() {
                    return textarea.value;
                },
                set(value) {
                    // set mirror text same as the textarea
                    mirror.innerText = mirror.textContent = (textarea.value = value = value != null ? value.toString() : "")
                        .replace(/^\h*$/, "\u00A0").replace(/\n$/, "\n\u00A0")
                    ;
                    if (value) {
                        container.classList.add("rm-activated");
                    } else {
                        container.classList.remove("rm-activated");
                    }
                }
            });

            this.root.focus = () => {
                textarea.focus();
            };
            
            if (this.props.value) {
                this.root.value = this.props.value;
            }
            this._lastPropsValue = this.root.value;
        },

        _lastPropsValue: "",

        onBeforeUpdate() {
            if (this.props.value !== this._lastPropsValue) {
                this._lastPropsValue = this.root.value = this.props.value;
            }
        },

        onUpdated() {
            if (this.isDisabled()) {
                this.root.querySelector("[ref=container]").classList.remove("rm-focused");
            }
        },

        isDisabled() {
            return typeof this.props.disabled === "string" ?
                this.props.disabled !== "false" :
                this.props.disabled == null ? false : !!this.props.disabled;
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<div ref="outlined-margin-top"></div><div ref="container"><div ref="border"></div><div ref="textarea-container"><div ref="mirror">&nbsp;</div><div expr303="expr303" ref="label"> </div><textarea expr304="expr304"></textarea></div><div ref="basic-underline"></div><div ref="underline"></div></div><div style="height: 1.25em;"><div expr305="expr305" style="font-size: .75em;"> </div></div>',
          [{
            'redundantAttribute': 'expr303',
            'selector': '[expr303]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.label;
              }
            }]
          }, {
            'redundantAttribute': 'expr304',
            'selector': '[expr304]',

            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'placeholder',

              'evaluate': function(scope) {
                return scope.props.placeholder;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'name',

              'evaluate': function(scope) {
                return scope.props.name;
              }
            }]
          }, {
            'redundantAttribute': 'expr305',
            'selector': '[expr305]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.helperText;
              }
            }]
          }]
        );
      },

      'name': 'rm-textarea'
    };

    var TextfieldComponent = {
      'css': `rm-textfield,[is="rm-textfield"]{ cursor: text; } rm-textfield[disabled],[is="rm-textfield"][disabled]{ cursor: default; } rm-textfield input,[is="rm-textfield"] input{ padding: 0; font-size: inherit; line-height: inherit; border: 0; background: none; outline: none; width: 100%; color: currentColor; }`,

      'exports': {
        _input: null,

        onBeforeMount() {
            Object.defineProperty(this.root, "value", {
                get: () => {
                    return this._input ? this._input.value : this.props.value || "";
                },
                set: value => {
                    this._input.value = value;
                }
            });
        },

        onMounted() {
            this._input = this.root.querySelector("input");
        },

        _oncontainermousedown(event) {
            if (this.props.disabled) {
                return;
            }
            const input = this.root.querySelector("input");
            if (document.activeElement !== input){
                event.preventDefault();
                input.focus();
            }
        },

        _oninputfocus() {
            this.update({ focused: true });
        },

        _oninputblur() {
            this.update({ focused: false });
        },

        _oninputinput() {
            this.update();
        },

        _getTextfieldContainerClass() {
            const names = {};
            if (this.state.focused) {
                names["rm-focused"] = names["rm-label-should-float"] = true;
            }
            if (this.root.value) {
                names["rm-label-should-float"] = true;
            }
            return Object.keys(names).join(" ");
        },

        isClearable() {
            return this.props.clearable != null && this.props.clearable !== false;
        },

        isDisabled() {
            return this.props.disabled != null && this.props.disabled !== false;
        },

        isFullWidth() {
            return this.props.fullWidth != null && this.props.fullWidth !== false;
        },

        clear() {
            this.root.value = "";
            this.update();
        },

        components: {
            "rm-textfield-container": TextfieldContainerComponent
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template('<rm-textfield-container expr306="expr306"></rm-textfield-container>', [{
          'type': bindingTypes.TAG,
          'getComponent': getComponent,

          'evaluate': function(scope) {
            return 'rm-textfield-container';
          },

          'slots': [{
            'id': 'input',
            'html': '<input expr307="expr307" slot="input"/>',

            'bindings': [{
              'redundantAttribute': 'expr307',
              'selector': '[expr307]',

              'expressions': [{
                'type': expressionTypes.EVENT,
                'name': 'onfocus',

                'evaluate': function(scope) {
                  return scope._oninputfocus;
                }
              }, {
                'type': expressionTypes.EVENT,
                'name': 'onblur',

                'evaluate': function(scope) {
                  return scope._oninputblur;
                }
              }, {
                'type': expressionTypes.EVENT,
                'name': 'oninput',

                'evaluate': function(scope) {
                  return scope._oninputinput;
                }
              }, {
                'type': expressionTypes.VALUE,

                'evaluate': function(scope) {
                  return scope.props.value;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'name',

                'evaluate': function(scope) {
                  return scope.props.name;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'disabled',

                'evaluate': function(scope) {
                  return scope.isDisabled();
                }
              }]
            }]
          }, {
            'id': 'leading',
            'html': '<slot expr308="expr308" name="leading" slot="leading"></slot>',

            'bindings': [{
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'leading',
              'redundantAttribute': 'expr308',
              'selector': '[expr308]'
            }]
          }, {
            'id': 'trailing',
            'html': '<span style="white-space: nowrap;" slot="trailing"><rm-button expr309="expr309" variant="icon" dense></rm-button><slot expr310="expr310" name="trailing"></slot></span>',

            'bindings': [{
              'type': bindingTypes.IF,

              'evaluate': function(scope) {
                return scope.isClearable() && scope.root.value;
              },

              'redundantAttribute': 'expr309',
              'selector': '[expr309]',

              'template': template(null, [{
                'type': bindingTypes.TAG,
                'getComponent': getComponent,

                'evaluate': function(scope) {
                  return 'rm-button';
                },

                'slots': [{
                  'id': 'default',
                  'html': 'clear',
                  'bindings': []
                }],

                'attributes': [{
                  'type': expressionTypes.EVENT,
                  'name': 'onclick',

                  'evaluate': function(scope) {
                    return scope.clear;
                  }
                }, {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'tabindex',

                  'evaluate': function(scope) {
                    return scope.isDisabled() ? "-1" : null;
                  }
                }]
              }])
            }, {
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'trailing',
              'redundantAttribute': 'expr310',
              'selector': '[expr310]'
            }]
          }],

          'attributes': [{
            'type': expressionTypes.ATTRIBUTE,
            'name': 'variant',

            'evaluate': function(scope) {
              return scope.props.variant;
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'label',

            'evaluate': function(scope) {
              return scope.props.label;
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'full-width',

            'evaluate': function(scope) {
              return scope.isFullWidth();
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'disabled',

            'evaluate': function(scope) {
              return scope.isDisabled();
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'class',

            'evaluate': function(scope) {
              return scope._getTextfieldContainerClass();
            }
          }, {
            'type': expressionTypes.EVENT,
            'name': 'onmousedown',

            'evaluate': function(scope) {
              return scope._oncontainermousedown;
            }
          }],

          'redundantAttribute': 'expr306',
          'selector': '[expr306]'
        }]);
      },

      'name': 'rm-textfield'
    };

    var style = document.createElement("style");
    style.innerHTML = "\n.rm-background {\n    background: rgb(245, 245, 245);\n    background: rgb(var(--color-background, 245, 245, 245));\n    color: rgb(0, 0, 0);\n    color: rgb(var(--color-on-background, 0, 0, 0));\n}\n";
    document.head.appendChild(style);
    var background = "rm-background";

    var background$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        background: background
    });

    var style$1 = document.createElement("style");
    style$1.innerHTML = "\n.rm-black-surface {\n    background: rgb(0, 0, 0);\n    background: rgb(var(--color-black-surface, 0, 0, 0));\n    color: rgb(255, 255, 255);\n    color: rgb(var(--color-on-black, 255, 255, 255));\n}\n.rm-dark-surface {\n    background: rgb(10, 10, 10);\n    background: rgb(var(--color-dark-surface, 10, 10, 10));\n    color: rgb(255, 255, 255);\n    color: rgb(var(--color-on-dark, 255, 255, 255));\n}\n.rm-light-surface {\n    background: rgb(250, 250, 250);\n    background: rgb(var(--color-light-surface, 250, 250, 250));\n    color: rgb(0, 0, 0);\n    color: rgb(var(--color-on-light, 0, 0, 0));\n}\n.rm-white-surface {\n    background: rgb(255, 255, 255);\n    background: rgb(var(--color-white-surface, 255, 255, 255));\n    color: rgb(0, 0, 0);\n    color: rgb(var(--color-on-white, 0, 0, 0));\n}\n";
    document.head.appendChild(style$1);
    var black = "rm-black-surface";
    var dark = "rm-dark-surface";
    var light = "rm-light-surface";
    var white = "rm-white-surface";

    var surfaces = /*#__PURE__*/Object.freeze({
        __proto__: null,
        black: black,
        dark: dark,
        light: light,
        white: white
    });

    riot.register("rm-app-bar", AppBarComponent);
    riot.register("rm-bottom-sheet", BottomSheetComponent);
    riot.register("rm-button", ButtonComponent);
    riot.register("rm-checkbox", CheckboxComponent);
    riot.register("rm-dialog", DialogComponent);
    riot.register("rm-divider", DividerComponent);
    riot.register("rm-icon", IconComponent);
    riot.register("rm-menu", MenuComponent);
    riot.register("rm-menu-item", MenuItemComponent);
    riot.register("rm-radio", RadioComponent);
    riot.register("rm-ripple", RippleComponent);
    riot.register("rm-select", SelectComponent);
    riot.register("rm-tabbed-pages", TabbedPagesComponent);
    riot.register("rm-tabs", TabsComponent);
    riot.register("rm-textarea", TextareaComponent);
    riot.register("rm-textfield", TextfieldComponent);
    riot.register("rm-textfield-container", TextfieldContainerComponent);

    exports.AppBarComponent = AppBarComponent;
    exports.BottomSheetComponent = BottomSheetComponent;
    exports.ButtonComponent = ButtonComponent;
    exports.CheckboxComponent = CheckboxComponent;
    exports.DialogComponent = DialogComponent;
    exports.DividerComponent = DividerComponent;
    exports.IconComponent = IconComponent;
    exports.MenuComponent = MenuComponent;
    exports.MenuItemComponent = MenuItemComponent;
    exports.RadioComponent = RadioComponent;
    exports.RippleComponent = RippleComponent;
    exports.SelectComponent = SelectComponent;
    exports.TabbedPagesComponent = TabbedPagesComponent;
    exports.TabsComponent = TabsComponent;
    exports.TextareaComponent = TextareaComponent;
    exports.TextfieldComponent = TextfieldComponent;
    exports.TextfieldContainerComponent = TextfieldContainerComponent;
    exports.background = background$1;
    exports.elevation = elevation$1;
    exports.surfaces = surfaces;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    var CONTENT_STYLE = Symbol("content-style");
    exports.default = {
        'css': "rm-bottom-sheet,[is=\"rm-bottom-sheet\"]{ display: contents; } rm-bottom-sheet [ref=\"dimmer\"],[is=\"rm-bottom-sheet\"] [ref=\"dimmer\"]{ content: \"\"; position: fixed; top: 0; bottom: 0; left: 0; right: 0; background: rgba(0, 0, 0, .42); background: rgba(0, 0, 0, var(--color-opacity-secondary, .42)); touch-action: none; z-index: 100; } rm-bottom-sheet [ref=\"content\"],[is=\"rm-bottom-sheet\"] [ref=\"content\"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); position: fixed; overflow: hidden; height: 0; bottom: 0; right: 0; left: 0; touch-action: none; z-index: 100; }",
        'exports': {
            onMounted: function () {
                var _this = this;
                var content = this.root.querySelector("[ref=content");
                var computedStyle = this[CONTENT_STYLE] = window.getComputedStyle(content);
                this.state.view = STATE.DISMISSED;
                this.root.style.display = "none";
                var dimmer = this.root.querySelector("[ref=dimmer]");
                var move = function (movementX, movementY, scrollOnly) {
                    var actualHeight = parseInt(computedStyle.height);
                    var windowHeight = window.innerHeight;
                    scrollOnly = scrollOnly && actualHeight === windowHeight;
                    var computedHeight = actualHeight + content.scrollTop - movementY;
                    var height = Math.min(windowHeight, computedHeight);
                    content.style.height = (scrollOnly ? windowHeight : height) + "px";
                    if (!scrollOnly && height < windowHeight) {
                        content.scrollTop = 0;
                        _this.state.view &= ~STATE.FULL_OPENED;
                    }
                    else {
                        content.scrollTop = computedHeight - windowHeight;
                        _this.state.view |= STATE.FULL_OPENED;
                    }
                };
                var lastPosition = null;
                var firstPosition = null;
                var pointerId = undefined;
                var requestStopScroll = false;
                var shouldScrollOnly = false;
                this.root.addEventListener("pointerdown", function (event) {
                    if ((_this.state.view & STATE.MOVING) || event.button > 1) {
                        return;
                    }
                    var contentRect = content.getBoundingClientRect();
                    event.preventDefault();
                    var position = event;
                    pointerId = event.pointerId;
                    lastPosition = { x: event.clientX, y: event.clientY };
                    firstPosition = { x: event.clientX, y: event.clientY, time: event.timeStamp };
                    _this.state.view &= ~STATE.MOVING;
                    shouldScrollOnly = (_this.state.view & STATE.FULL_OPENED) && content.scrollTop > 0;
                    if (_this.state.view & STATE.SCROLLING) {
                        requestStopScroll = true;
                    }
                });
                var movementThresold = 5;
                window.addEventListener("pointermove", function (event) {
                    if (!lastPosition || event.pointerId !== pointerId) {
                        return;
                    }
                    event.preventDefault();
                    var thisPosition = { x: event.clientX, y: event.clientY };
                    var movementX = thisPosition.x - lastPosition.x;
                    var movementY = thisPosition.y - lastPosition.y;
                    if (!(_this.state.view & STATE.MOVING) &&
                        Math.abs(movementX) < movementThresold &&
                        Math.abs(movementY) < movementThresold) {
                        return;
                    }
                    _this.state.view |= STATE.MOVING;
                    lastPosition = thisPosition;
                    var prevFullOpen = _this.state.view & STATE.FULL_OPENED;
                    move(movementX, movementY, shouldScrollOnly);
                    if (prevFullOpen !== _this.state.view & STATE.FULL_OPENED) {
                        firstPosition = __assign(__assign({}, thisPosition), { time: event.timeStamp });
                    }
                });
                var onUp = function (event) {
                    if (pointerId == null || pointerId !== event.pointerId) {
                        return;
                    }
                    var lastDeltaTime = event.timeStamp - firstPosition.time;
                    var lastDeltaY = event.clientY - firstPosition.y;
                    lastPosition = null;
                    firstPosition = null;
                    pointerId = null;
                    _this.state.view &= ~STATE.MOVING;
                    if (lastDeltaTime >= 50 && Math.abs(lastDeltaY) >= 10) {
                        var vel_1 = lastDeltaY / lastDeltaTime;
                        if (_this.state.view & STATE.FULL_OPENED) {
                            var last_1 = Date.now();
                            var frame_1 = function () {
                                if (requestStopScroll) {
                                    requestStopScroll = false;
                                    _this.state.view &= ~STATE.SCROLLING;
                                    return;
                                }
                                _this.state.view |= STATE.SCROLLING;
                                var now = Date.now();
                                content.scrollTop -= (vel_1 *= 0.95) * (now - last_1);
                                last_1 = now;
                                if (content.scrollTop > 0 && Math.abs(vel_1) > .05) {
                                    requestAnimationFrame(frame_1);
                                }
                                else {
                                    _this.state.view &= ~STATE.SCROLLING;
                                }
                            };
                            requestAnimationFrame(frame_1);
                        }
                        else {
                            if (vel_1 > 0) {
                                _this.dismiss();
                            }
                            else {
                                _this.open();
                            }
                            return;
                        }
                    }
                    if (parseInt(computedStyle.height) < 300) {
                        _this.dismiss();
                    }
                };
                window.addEventListener("pointerup", onUp);
                window.addEventListener("pointercancel", onUp);
                var wheelShouldScrollOnly = false;
                var lastWheelShouldScrollOnly = 0;
                this.root.addEventListener("wheel", function (event) {
                    event.preventDefault();
                    var recalculate = true;
                    if (wheelShouldScrollOnly) {
                        var now = Date.now();
                        recalculate = now - lastWheelShouldScrollOnly >= 100;
                        lastWheelShouldScrollOnly = now;
                    }
                    if (recalculate) {
                        wheelShouldScrollOnly = (_this.state.view & STATE.FULL_OPENED) && content.scrollTop > 0;
                    }
                    var deltaY = event.deltaY;
                    if (event.deltaMode === 1) {
                        deltaY *= 30;
                    }
                    move(0, -deltaY, wheelShouldScrollOnly);
                    if (parseInt(computedStyle.height) < 300 || (deltaY < 0 && !wheelShouldScrollOnly)) {
                        _this.dismiss();
                    }
                    else if (deltaY > 0 && !wheelShouldScrollOnly) {
                        _this.open();
                    }
                });
                content.addEventListener("wheel", function (event) { event.preventDefault(); });
                dimmer.addEventListener("wheel", function (event) { event.preventDefault(); });
                dimmer.addEventListener("click", function () { _this.dismiss(); });
                var arrowShouldScrollOnly = false;
                var lastArrowShouldScrollOnly = 0;
                window.addEventListener("keyup", function (event) {
                    if ((_this.state.view & (STATE.DISMISSED | STATE.DISMISSING | STATE.OPENING))) {
                        return;
                    }
                    switch (event.key) {
                        case "Escape": {
                            _this.dismiss();
                            break;
                        }
                        default: {
                            return;
                        }
                    }
                    event.preventDefault();
                });
                window.addEventListener("keydown", function (event) {
                    if ((_this.state.view & (STATE.DISMISSED | STATE.DISMISSING | STATE.OPENING))) {
                        return;
                    }
                    var deltaY = 51;
                    switch (event.key) {
                        case "ArrowDown": {
                            deltaY *= -1;
                        }
                        case "ArrowUp": {
                            var shouldScrollOnly_1 = _this.state.view & STATE.FULL_OPENED;
                            move(0, deltaY, shouldScrollOnly_1);
                            if (!shouldScrollOnly_1) {
                                if (deltaY > 0) {
                                    _this.dismiss();
                                }
                                else {
                                    _this.open();
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
            dismiss: function () {
                var _this = this;
                var actualState = this.state.view;
                if (actualState & (STATE.DISMISSED | STATE.DISMISSING)) {
                    return;
                }
                var content = this.root.querySelector("[ref=content");
                var dimmer = this.root.querySelector("[ref=dimmer");
                this.state.view = STATE.DISMISSING | (actualState & STATE.FULL_OPENED ? STATE.FULL_OPENED : 0);
                var height = parseInt(this[CONTENT_STYLE].height) + content.scrollTop;
                var opacity = 1;
                var t = Date.now();
                var maxTime = 150;
                var v = height / maxTime;
                var oV = opacity / maxTime;
                var frame = function () {
                    if (!(_this.state.view & STATE.DISMISSING)) {
                        return;
                    }
                    var n = Date.now();
                    var h = Math.max(height -= v * (n - t), 0);
                    if (h >= window.innerHeight) {
                        _this.state.view |= STATE.FULL_OPENED;
                    }
                    else {
                        _this.state.view &= ~STATE.FULL_OPENED;
                    }
                    content.style.height = h + "px";
                    dimmer.style.opacity = Math.max(opacity -= oV * (n - t), 0) + "";
                    t = n;
                    if (height > 0) {
                        requestAnimationFrame(frame);
                    }
                    else {
                        _this.root.style.display = "none";
                        _this.state.view = STATE.DISMISSED;
                    }
                };
                requestAnimationFrame(frame);
            },
            open: function () {
                var _this = this;
                var isDismiss_ = this.state.view & (STATE.DISMISSED | STATE.DISMISSING);
                if (!isDismiss_ && (this.state.view & STATE.FULL_OPENED)) {
                    return;
                }
                var content = this.root.querySelector("[ref=content");
                var dimmer = this.root.querySelector("[ref=dimmer");
                var finalHeight = isDismiss_ ? 300 : window.innerHeight;
                this.state.view = STATE.OPENING;
                this.root.style.display = "";
                content.scrollTop = 0;
                var height = parseInt(this[CONTENT_STYLE].height);
                var opacity = parseInt(window.getComputedStyle(dimmer).opacity);
                var t = Date.now();
                var maxTime = 150;
                var v = (finalHeight - height) / maxTime;
                var oV = (1 - opacity) / maxTime;
                var frame = function () {
                    if (_this.state.view & STATE.DISMISSING) {
                        return;
                    }
                    var n = Date.now();
                    var h = Math.min(Math.max(height += v * (n - t), 0), finalHeight);
                    content.style.height = h + "px";
                    dimmer.style.opacity = Math.max(opacity += oV * (n - t), 0) + "";
                    t = n;
                    if (height < finalHeight) {
                        requestAnimationFrame(frame);
                    }
                    else {
                        _this.state.view = STATE.OPENED | (h >= window.innerHeight ? STATE.FULL_OPENED : 0);
                    }
                };
                requestAnimationFrame(frame);
            }
        },
        'template': function (template, expressionTypes, bindingTypes, getComponent) {
            return template('<div ref="dimmer"></div><div ref="content"><slot expr2="expr2"></slot></div>', [{
                    'type': bindingTypes.SLOT,
                    'attributes': [],
                    'name': 'default',
                    'redundantAttribute': 'expr2',
                    'selector': '[expr2]'
                }]);
        },
        'name': 'rm-bottom-sheet'
    };
});

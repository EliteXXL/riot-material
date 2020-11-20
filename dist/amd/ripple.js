define(['exports', './tslib.es6-3a2117de'], function (exports, tslib_es6) { 'use strict';

    var RIPPLE = Symbol("ripple");
    var RIPPLE_COUNT = Symbol("ripple-count");
    var RIPPLE_OPTIONS = Symbol("ripple_options");
    document.head.appendChild(document.createElement("style")).innerHTML = "\n.rm-ripple-container { overflow: hidden; position: relative; }\n.rm-ripple-container--unbounded { overflow: visible; }\n.rm-ripple-container--highlighto.rm-ripple-container--highlighted:not([disabled])::after,\n.rm-ripple-container--highlighto:not([disabled]):hover::after {\n    content: ''; position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    background: black; background: var(--ripple-color, black); pointer-events: none;\n    border-radius: inherit; opacity: .1;\n}\n.rm-ripple {\n    position: absolute; border-radius: 50%; background: black; background: var(--ripple-color, black); pointer-events: none;\n    /*transition: opacity cubic-bezier(.22,.61,.36,1) 450ms, transform cubic-bezier(.22,.61,.36,1) 400ms;*/\n    transition: opacity cubic-bezier(0.4,0,0.2,1) 450ms, transform cubic-bezier(0.4,0,0.2,1) 450ms;\n}";
    var DEVICE;
    (function (DEVICE) {
        DEVICE[DEVICE["KEYBOARD"] = 0] = "KEYBOARD";
        DEVICE[DEVICE["POINTER"] = 1] = "POINTER";
    })(DEVICE || (DEVICE = {}));
    var canBeDevice = DEVICE.KEYBOARD;
    function canBePointer() {
        canBeDevice = DEVICE.POINTER;
        setTimeout(function () {
            canBeDevice = DEVICE.KEYBOARD;
        }, 0);
    }
    window.addEventListener("mousedown", canBePointer, true);
    window.addEventListener("mouseup", canBePointer, true);
    window.addEventListener("touchstart", canBePointer, true);
    window.addEventListener("touchend", canBePointer, true);
    window.addEventListener("touchcancel", canBePointer, true);
    var scaleUpStyle;
    {
        var div = document.createElement("div");
        div.style.transform = "scale(1)";
        document.body.appendChild(div);
        scaleUpStyle = window.getComputedStyle(div).transform;
        document.body.removeChild(div);
    }
    exports.Ripple = (function () {
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
    })(exports.Ripple || (exports.Ripple = {}));
    var canEventStartRipple = true;
    window.addEventListener("pointerdown", function () { canEventStartRipple = true; });
    function ripple(element, options) {
        var _a;
        var ripple = element[RIPPLE];
        if (options == null && ripple != null) {
            return ripple;
        }
        options = tslib_es6.__assign({ radius: undefined, unbounded: false, centered: false, disabled: false, highlight: false, instantHighlight: false, unboundedFocus: false, color: "currentColor", focusTarget: undefined, detectLabel: true, usePointerFocus: false, stopRippling: false }, options);
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
            if (canBeDevice === DEVICE.POINTER && !ripple[RIPPLE_OPTIONS].usePointerFocus) {
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
                    var currentRipple = new exports.Ripple(0, 0, null, exports.Ripple.TYPE.INSTANT).attachTo(element, function () {
                        _this[RIPPLE_COUNT]--;
                    });
                    this[RIPPLE_COUNT]++;
                    return currentRipple;
                },
                start: function (x, y, event, type) {
                    var _this = this;
                    if (type === void 0) { type = exports.Ripple.TYPE.NORMAL; }
                    var isFocus = !!(event && event.type === "focus");
                    var isMouseEnter = !!(event && event.type === "mouseenter");
                    var options = this[RIPPLE_OPTIONS];
                    if (isFocus) {
                        type = exports.Ripple.TYPE.QUICK;
                    }
                    else if (isMouseEnter) {
                        type = this[RIPPLE_COUNT] > 0 || options.instantHighlight ? exports.Ripple.TYPE.INSTANT : exports.Ripple.TYPE.QUICK;
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
                    var currentRipple = new exports.Ripple(x, y, r, type).attachTo(element, function () {
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
                    options = this[RIPPLE_OPTIONS] = tslib_es6.__assign(tslib_es6.__assign(tslib_es6.__assign({}, prevOptions), options), { detectLabel: prevOptions.detectLabel });
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

    exports.isRipple = isRipple;
    exports.ripple = ripple;

    Object.defineProperty(exports, '__esModule', { value: true });

});

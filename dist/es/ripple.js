import { __assign } from 'tslib';

var RIPPLE = Symbol("ripple");
var RIPPLE_OPTIONS = Symbol("ripple_options");
document.head.appendChild(document.createElement("style")).innerHTML = "\n.rm-ripple-container { overflow: hidden; position: relative; }\n.rm-ripple-container--unbounded { overflow: visible; }\n.rm-ripple-container--highlight:not([disabled]):hover::after {\n    content: ''; position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    background: black; background: var(--ripple-color, black); pointer-events: none;\n    border-radius: inherit; opacity: .1;\n}\n.rm-ripple {\n    position: absolute; border-radius: 50%; background: black; background: var(--ripple-color, black); pointer-events: none;\n    transition: opacity cubic-bezier(.22,.61,.36,1) 450ms, transform cubic-bezier(.22,.61,.36,1) 400ms;\n}";
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
var canEventStartRipple = true;
window.addEventListener("pointerdown", function () { canEventStartRipple = true; });
function ripple(element, options) {
    var _a;
    options = __assign({ radius: undefined, unbounded: false, centered: false, disabled: false, highlight: false, unboundedFocus: false, color: "currentColor", focusTarget: undefined, usePointerFocus: false, stopRippling: false }, options);
    var ripple = element[RIPPLE];
    if (ripple) {
        return ripple.set(options);
    }
    var lastFocusTarget = undefined;
    var onFocus = function (event) {
        if (canBeDevice === DEVICE.POINTER && !ripple[RIPPLE_OPTIONS].usePointerFocus) {
            return;
        }
        ripple.start(lastX, lastY, event);
    };
    ripple = (_a = {
            start: function (x, y, event) {
                var isFocus = !!(event && event.type === "focus");
                var options = this[RIPPLE_OPTIONS];
                var rect = element.getBoundingClientRect();
                if (options.centered || x == null) {
                    x = rect.width / 2;
                }
                if (options.centered || y == null) {
                    y = rect.height / 2;
                }
                var r = options.radius;
                if (!r || r <= 0) {
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
                var cx = x - r;
                var cy = y - r;
                var div = document.createElement("div");
                if (isFocus && !options.unboundedFocus) {
                    div.setAttribute("style", "left:0;top:0;bottom:0;right:0;border-radius:inherit;opacity:.12;opacity:var(--color-opacity-tertiary, .12);");
                }
                else {
                    div.setAttribute("style", "left:" + cx +
                        "px;top:" + cy +
                        "px;width:" + (r * 2) +
                        "px;height:" + (r * 2) +
                        "px;transform:scale(0);opacity:.12;opacity:var(--color-opacity-tertiary, .12);");
                }
                div.classList.add("rm-ripple");
                element.appendChild(div);
                var style = window.getComputedStyle(div);
                var deactivated = false;
                var stepAnimation = function () {
                    if (!div.parentElement) {
                        return;
                    }
                    var rect = div.getBoundingClientRect();
                    if (rect.width === 0 && rect.height === 0) {
                        element.removeChild(div);
                        return;
                    }
                    if (style.transform === scaleUpStyle) {
                        if (style.opacity === "0") {
                            element.removeChild(div);
                            return;
                        }
                        else {
                            if (deactivated) {
                                div.style.opacity = "0";
                            }
                        }
                    }
                    requestAnimationFrame(stepAnimation);
                };
                var end = function () {
                    deactivated = true;
                };
                var scaleUp = function () {
                    div.style.transform = "scale(1)";
                    requestAnimationFrame(stepAnimation);
                };
                if (event && event.isTrusted) {
                    if (isFocus) {
                        scaleUp();
                    }
                    else {
                        requestAnimationFrame(function () { requestAnimationFrame(scaleUp); });
                    }
                    var once_1 = function (up_event) {
                        if (isFocus) {
                            (lastFocusTarget || element).removeEventListener("blur", once_1);
                        }
                        else {
                            window.removeEventListener("pointerup", once_1);
                            window.removeEventListener("pointercancel", once_1);
                            if (up_event.pointerId !== event.pointerId) {
                                return;
                            }
                        }
                        end();
                    };
                    if (isFocus) {
                        (lastFocusTarget || element).addEventListener("blur", once_1);
                    }
                    else {
                        window.addEventListener("pointerup", once_1);
                        window.addEventListener("pointercancel", once_1);
                    }
                }
                else {
                    end();
                    requestAnimationFrame(function () { requestAnimationFrame(scaleUp); });
                }
                return this;
            },
            set: function (options) {
                options = this[RIPPLE_OPTIONS] = __assign(__assign({}, this[RIPPLE_OPTIONS]), options);
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
                return this;
            }
        },
        _a[RIPPLE_OPTIONS] = options,
        _a);
    var lastX = null;
    var lastY = null;
    var pointerElement = element;
    var parent = element.parentElement;
    while (parent) {
        if (parent.tagName === "LABEL") {
            pointerElement = parent;
            break;
        }
        parent = parent.parentElement;
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

export { ripple };

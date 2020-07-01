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
    exports.onceChange = exports.offChange = exports.onChange = exports.setup = exports.getHeight = void 0;
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
    exports.getHeight = getHeight;
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
    exports.setup = setup;
    function onChange(listener, thisArg) {
        listeners.push({
            listener: listener,
            thisArg: thisArg,
            once: false
        });
    }
    exports.onChange = onChange;
    function onceChange(listener, thisArg) {
        listeners.push({
            listener: listener,
            thisArg: thisArg,
            once: true
        });
    }
    exports.onceChange = onceChange;
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
    exports.offChange = offChange;
});

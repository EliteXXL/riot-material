define(['exports'], function (exports) { 'use strict';

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

    exports.pointerController = pointerController;

    Object.defineProperty(exports, '__esModule', { value: true });

});

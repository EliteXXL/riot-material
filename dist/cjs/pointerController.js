'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var POINTER_CONTROLLER = Symbol("pointer-controller");
function pointerController(element, callback) {
    var instance = element[POINTER_CONTROLLER];
    if (instance) {
        instance.callback = callback;
        return;
    }
    var touchShouldFire;
    var lastTouch = null;
    window.addEventListener("touchstart", function (event) {
        if (lastTouch == null || event.changedTouches[0].identifier === lastTouch) {
            return;
        }
        touchShouldFire = false;
    });
    var eventHandled = false;
    element[POINTER_CONTROLLER] = instance = {
        ontouchstart: function (event) {
            if (!instance.callback || lastTouch != null) {
                return;
            }
            lastTouch = event.changedTouches[0].identifier;
            touchShouldFire = true;
        },
        ontouchmove: function (event) {
            touchShouldFire = false;
        },
        ontouchend: function (event) {
            lastTouch = null;
            eventHandled = true;
            setTimeout(function () { return eventHandled = false; }, 200);
            if (!touchShouldFire || !instance.callback) {
                return;
            }
            instance.callback.call(this, event);
        },
        ontouchcancel: function (event) {
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

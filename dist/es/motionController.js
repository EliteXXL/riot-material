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

export { motionController };

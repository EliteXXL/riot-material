import AppBarComponent from '@riot-material/rm-app-bar';
import ButtonComponent from '@riot-material/rm-button';
import CheckboxComponent from '@riot-material/rm-checkbox';
import DialogComponent from '@riot-material/rm-dialog';
import DividerComponent from '@riot-material/rm-divider';
import IconComponent from '@riot-material/rm-icon';
import ListItemComponent from '@riot-material/rm-list-item';
import MenuComponent from '@riot-material/rm-menu';
import MenuItemComponent from '@riot-material/rm-menu-item';
import RadioComponent from '@riot-material/rm-radio';
import SelectComponent from '@riot-material/rm-select';
import TabbedPagesComponent from '@riot-material/rm-tabbed-pages';
import TextfieldComponent from '@riot-material/rm-textfield';
import TextfieldContainerComponent from '@riot-material/rm-textfield-container';
export { default as elevation } from '@riot-material/elevation';
import * as background from '@riot-material/background';
export { background };
import * as surfaces from '@riot-material/surfaces';
export { surfaces };
import * as ripple from '@riot-material/ripple';
export { ripple };
import * as appBarUtils from '@riot-material/app-bar-utils';
export { appBarUtils };
import { register } from 'riot';

var index = {
  'css': `rm-list-avatar,[is="rm-list-avatar"]{ display: block; height: 40px; width: 40px; background: gray; } rm-list-avatar[circular],[is="rm-list-avatar"][circular]{ border-radius: 50%; }`,
  'exports': null,
  'template': null,
  'name': 'rm-list-avatar'
};

var index$1 = {
  'css': `rm-list-group > rm-list-item:not(:first-child),[is="rm-list-group"] > rm-list-item:not(:first-child),rm-list-group > [is="rm-list-item"]:not(:first-child),[is="rm-list-group"] > [is="rm-list-item"]:not(:first-child){ padding-left: 2em; }`,

  'exports': {
    components: {
        "rm-list-item": ListItemComponent
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<rm-list-item expr0="expr0" passive></rm-list-item><slot expr1="expr1"></slot>',
      [{
        'type': bindingTypes.TAG,
        'getComponent': getComponent,

        'evaluate': function(scope) {
          return 'rm-list-item';
        },

        'slots': [{
          'id': 'default',
          'html': ' ',

          'bindings': [{
            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.label;
              }
            }]
          }]
        }],

        'attributes': [],
        'redundantAttribute': 'expr0',
        'selector': '[expr0]'
      }, {
        'type': bindingTypes.SLOT,
        'attributes': [],
        'name': 'default',
        'redundantAttribute': 'expr1',
        'selector': '[expr1]'
      }]
    );
  },

  'name': 'rm-list-group'
};

var index$2 = {
  'css': `rm-list-image,[is="rm-list-image"]{ display: block; height: 56px; width: 56px; background: gray; } rm-list-image[large],[is="rm-list-image"][large]{ width: 100px; margin-left: -16px; }`,
  'exports': null,
  'template': null,
  'name': 'rm-list-image'
};

var BEFORE_FOCUS_CONTROLLER_INSTANCE = Symbol("before-focus-controller-instance");
var WAS_FUNCTION = Symbol("was-function");
function addListener(element, handler) {
    var _a;
    if (handler === void 0) {
        throw new Error("invalid handler");
    }
    if (typeof handler === "function") {
        handler = (_a = {},
            _a[WAS_FUNCTION] = true,
            _a.handleEvent = handler,
            _a);
    }
    else if (typeof handler !== "object" || !("handleEvent" in handler)) {
        throw new Error("invalid handler");
    }
    var instance = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (instance) {
        instance.listeners.push(handler);
        if (instance.listeners.length === 1) {
            window.addEventListener("touchstart", instance._window_ontouchstart);
        }
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
    window.addEventListener("touchstart", ontouchstart);
    function callListeners(event) {
        var stop = false;
        var stopImmediate = false;
        var beforeFocusEvent = {
            type: "beforefocus",
            detail: { nativeEvent: event },
            initEvent: function () { return; },
            initCustomEvent: function () { return; },
            get cancelable() { return false; },
            get bubbles() { return false; },
            get composed() { return false; },
            get defaultPrevented() { return event.defaultPrevented; },
            get currentTarget() { return event.currentTarget; },
            get eventPhase() { return Event.AT_TARGET; },
            get cancelBubble() { return false; },
            get returnValue() { return event.returnValue; },
            set returnValue(value) { event.returnValue = value; },
            get isTrusted() { return true; },
            get srcElement() { return this.currentTarget; },
            get target() { return this.currentTarget; },
            get timeStamp() { return event.timeStamp; },
            composedPath: function () { return []; },
            preventDefault: function () { event.preventDefault(); },
            NONE: Event.NONE,
            BUBBLING_PHASE: Event.BUBBLING_PHASE,
            CAPTURING_PHASE: Event.CAPTURING_PHASE,
            AT_TARGET: Event.AT_TARGET,
            stopPropagation: function () { stop = true; },
            stopImmediatePropagation: function () { stopImmediate = true; }
        };
        instance.listeners.some(function (handler) {
            if (handler[WAS_FUNCTION]) {
                handler.handleEvent.call(null, beforeFocusEvent);
            }
            else {
                handler.handleEvent(beforeFocusEvent);
            }
            if (stopImmediate) {
                event.stopImmediatePropagation();
                return true;
            }
            if (stop) {
                event.stopPropagation();
                return true;
            }
            return false;
        });
    }
    var eventHandled = false;
    element[BEFORE_FOCUS_CONTROLLER_INSTANCE] = instance = {
        _window_ontouchstart: ontouchstart,
        ontouchstart: function (event) {
            if (instance.listeners.length === 0 || lastTouch != null) {
                return;
            }
            lastTouch = event.changedTouches[0].identifier;
            touchShouldFire = true;
        },
        ontouchmove: function (event) {
            if (instance.listeners.length === 0) {
                return;
            }
            touchShouldFire = false;
        },
        ontouchend: function (event) {
            if (instance.listeners.length === 0) {
                return;
            }
            lastTouch = null;
            eventHandled = true;
            setTimeout(function () { return eventHandled = false; }, 200);
            if (!touchShouldFire) {
                return;
            }
            callListeners(event);
        },
        ontouchcancel: function (event) {
            if (instance.listeners.length === 0) {
                return;
            }
            lastTouch = null;
            eventHandled = true;
            setTimeout(function () { return eventHandled = false; }, 200);
        },
        onmousedown: function (event) {
            if (instance.listeners.length === 0 || eventHandled) {
                return;
            }
            callListeners(event);
        },
        listeners: [handler]
    };
    element.addEventListener("touchstart", instance.ontouchstart);
    element.addEventListener("touchmove", instance.ontouchmove);
    element.addEventListener("touchend", instance.ontouchend);
    element.addEventListener("touchcancel", instance.ontouchcancel);
    element.addEventListener("mousedown", instance.onmousedown);
}
function removeListener(element, handler) {
    var instance = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (!instance) {
        return;
    }
    var index = -1;
    if (instance.listeners.some(function (listener, i) {
        if (typeof handler === "function" ? listener.handleEvent === handler : listener === handler) {
            index = i;
            return true;
        }
        return false;
    })) {
        instance.listeners.splice(index, 1);
        if (instance.listeners.length === 0) {
            window.removeEventListener("touchstart", instance._window_ontouchstart);
        }
    }
}
var nativeAddEventListener = HTMLElement.prototype.addEventListener;
HTMLElement.prototype.addEventListener = function (type, listener, options) {
    if (type === "beforefocus") {
        addListener(this, listener);
    }
    else {
        nativeAddEventListener.call(this, type, listener, options);
    }
};
var nativeRemoveEventListener = HTMLElement.prototype.removeEventListener;
HTMLElement.prototype.removeEventListener = function (type, listener, options) {
    if (type === "beforefocus") {
        removeListener(this, listener);
    }
    else {
        nativeRemoveEventListener.call(this, type, listener, options);
    }
};

var index_es = /*#__PURE__*/Object.freeze({
  __proto__: null,
  addListener: addListener,
  removeListener: removeListener
});

register("rm-app-bar", AppBarComponent);
// register("rm-bottom-sheet", BottomSheetComponent);
register("rm-button", ButtonComponent);
register("rm-checkbox", CheckboxComponent);
// register("rm-circular-avatar", CircularAvatarComponent);
register("rm-dialog", DialogComponent);
register("rm-divider", DividerComponent);
register("rm-icon", IconComponent);
register("rm-list-avatar", index);
register("rm-list-group", index$1);
register("rm-list-image", index$2);
register("rm-list-item", ListItemComponent);
register("rm-menu", MenuComponent);
register("rm-menu-item", MenuItemComponent);
register("rm-radio", RadioComponent);
// register("rm-ripple", RippleComponent);
register("rm-select", SelectComponent);
register("rm-tabbed-pages", TabbedPagesComponent);
// register("rm-tabs", TabsComponent);
// register("rm-textarea", TextareaComponent);
register("rm-textfield", TextfieldComponent);
register("rm-textfield-container", TextfieldContainerComponent);

// tslint:disable-next-line:typedef
const components = {
    appBar: AppBarComponent,
    // bottomSheet: BottomSheetComponent,
    button: ButtonComponent,
    checkbox: CheckboxComponent,
    // circularAvatar: CircularAvatarComponent,
    dialog: DialogComponent,
    divider: DividerComponent,
    icon: IconComponent,
    listAvatar: index,
    listGroup: index$1,
    listImage: index$2,
    listItem: ListItemComponent,
    menu: MenuComponent,
    menuItem: MenuItemComponent,
    radio: RadioComponent,
    // ripple: RippleComponent,
    select: SelectComponent,
    tabbedPages: TabbedPagesComponent,
    // tabs: TabsComponent,
    // textarea: TextareaComponent,
    textfield: TextfieldComponent,
    textfieldContainer: TextfieldContainerComponent
};

export { index_es as beforeFocusListener, components };

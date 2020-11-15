'use strict';

require('./style-inject.es-dcee06b6.js');
require('./mdc.elevation-9bc22beb.js');
var elevation = require('./elevation-2d8ab2df.js');
require('./tslib.es6-c0666302.js');
var ripple = require('./ripple-486af47f.js');
var pointerController = require('./pointerController-228f7d55.js');

/*!
* tabbable 5.1.2
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary'];
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
  if (node.disabled || isHiddenInput(node) || isHidden(node)) {
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
  } // in Chrome, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0


  if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO') && node.getAttribute('tabindex') === null) {
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

  while (node) {
    if (getComputedStyle(node).display === 'none') return true;
    node = node.parentElement;
  }

  return false;
}

/*!
* focus-trap 6.1.3
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

function createFocusTrap(element, userOptions) {
  var doc = document;
  var container = typeof element === 'string' ? doc.querySelector(element) : element;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };
  return trap;

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
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    updateTabbableNodes();
    addListeners();
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
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
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
    if (container.contains(e.target)) {
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
    if (container.contains(e.target) || e.target instanceof Document) {
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

    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }

    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;

    if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
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
            elevation.elevation$1(child, 4);
        } else {
            elevation.elevation$1(child, 0);
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
                    this._currentHighlighted = ripple.ripple(this._lastHighlighted = this._toHighlight).highlight();
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
        elevation.elevation$1(this.root.firstElementChild, 4);
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
        elevation.elevation$1(this.root.firstElementChild, 0);
        this._direction = -1;
        pointerController.pointerController(document, null);
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
            if (ripple.isRipple(parent)) {
                rippleElement = parent;
                break;
            }
            parent = parent.parentElement;
        }
        if (rippleElement && !ripple.ripple(rippleElement).getOption("disabled")) {
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
      '<div expr88="expr88"><div expr89="expr89" style="overflow-y: auto;"><slot expr90="expr90"></slot></div></div>',
      [{
        'redundantAttribute': 'expr88',
        'selector': '[expr88]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onmousedown',

          'evaluate': function(scope) {
            return scope._onmousedown;
          }
        }]
      }, {
        'redundantAttribute': 'expr89',
        'selector': '[expr89]',

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
        'redundantAttribute': 'expr90',
        'selector': '[expr90]'
      }]
    );
  },

  'name': 'rm-menu'
};

module.exports = MenuComponent;

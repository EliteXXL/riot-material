'use strict';

var elevation = require('./elevation');
var ripple = require('./ripple');
var pointerController = require('./pointerController');

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

var rmMenu = {
  'css': `rm-menu,[is="rm-menu"]{ display: block; font-size: 16px; overflow: hidden; padding: 40px; margin: -40px; pointer-events: none; } rm-menu:not([anchor]),[is="rm-menu"]:not([anchor]){ border-radius: 0.25em; } rm-menu[anchor=top],[is="rm-menu"][anchor=top]{ padding-top: 0; margin-top: 0; border-radius: 0 0 0.25em 0.25em; } rm-menu:not([variant])[anchor=top],[is="rm-menu"]:not([variant])[anchor=top],rm-menu[variant=outlined][anchor=top],[is="rm-menu"][variant=outlined][anchor=top],rm-menu[variant=outlined]:not([anchor]),[is="rm-menu"][variant=outlined]:not([anchor]){ border-radius: 0.25em; } rm-menu[anchor=bottom],[is="rm-menu"][anchor=bottom]{ padding-bottom: 0; margin-bottom: 0; border-radius: 0.25em 0.25em 0 0; } rm-menu[anchor=bottom],[is="rm-menu"][anchor=bottom],rm-menu[variant=filled][anchor=bottom],[is="rm-menu"][variant=filled][anchor=bottom],rm-menu[variant=outlined][anchor=bottom],[is="rm-menu"][variant=outlined][anchor=bottom]{ border-radius: 0.25em; } rm-menu > div,[is="rm-menu"] > div{ background: white; padding: .5em 0; z-index: 99; pointer-events: all; border-radius: inherit; transform-origin: top center; } rm-menu > div,[is="rm-menu"] > div{ background: white; padding: .5em 0; transform: }`,

  'exports': {
    _lastOpened: null,
    _time: 0,
    _direction: 0,
    _highlightedFromKeyboard: false,

    onMounted() {
        this.root._bindTo = this._bindTo.bind(this);
        const child = this.root.firstElementChild;
        if (this._lastOpened = this.getOpened()) {
            this._time = 1;
            elevation.elevation(child, 4);
        } else {
            elevation.elevation(child, 0);
        }
        let _lastTime = null;
        let _lastNow = Date.now();
        let frame = () => {
            if (!this.root.isConnected) {
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
                    this.root.style.left = rect.left + "px";
                    if (this.props.inheritWidth != null) {
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
                    if (this._lastHighlighted) {
                        this._lastHighlighted.click();
                    }
                    event.preventDefault();
                    break;
                }
            }
        });
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
        if (this._bindedElement !== element) {
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
        elevation.elevation(this.root.firstElementChild, 4);
        this._direction = 1;
        if (this.props.preventCloseOnClickOut == null) {
            pointerController.pointerController(document, event => {
                if (this._time === 0 && this._direction === 1 || this.root.contains(event.target)) {
                    return;
                }
                this.close();
            });
        }
    },

    close() {
        if (this._time < 1 && this._direction !== 1) {
            return;
        }
        this._toHighlight = null;
        if (this._currentHighlighted) {
            this._currentHighlighted.end();
            this._currentHighlighted = null;
        }
        elevation.elevation(this.root.firstElementChild, 0);
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
      '<div expr718="expr718"><div expr719="expr719" style="overflow-y: auto;"><slot expr720="expr720"></slot></div></div>',
      [{
        'redundantAttribute': 'expr718',
        'selector': '[expr718]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onmousedown',

          'evaluate': function(scope) {
            return scope._onmousedown;
          }
        }]
      }, {
        'redundantAttribute': 'expr719',
        'selector': '[expr719]',

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
        'attributes': [],
        'name': 'default',
        'redundantAttribute': 'expr720',
        'selector': '[expr720]'
      }]
    );
  },

  'name': 'rm-menu'
};

module.exports = rmMenu;

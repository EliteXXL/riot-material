define(['./tslib.es6-3a2117de', './ripple-9ef33106', 'riot'], function (tslib_es6, ripple, riot) { 'use strict';

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

    const PAGE_INDEX = Symbol("page-index");

    var TabbedPagesComponent = {
      'css': `rm-tabbed-pages,[is="rm-tabbed-pages"]{ white-space: nowrap; overflow: hidden; width: 100%; display: block; font-size: 0; transform: scaleY(1); } rm-tabbed-pages > div:first-child,[is="rm-tabbed-pages"] > div:first-child{ overflow: hidden; display: block; width: 100%; } rm-tabbed-pages > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child{ display: block; width: 100%; overflow: auto visible; position: relative; user-select: none; text-align: center; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child{ display: inline-table; font-size: initial; text-align: center; } rm-tabbed-pages:not([centered]) > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"]:not([centered]) > div:first-child > div:first-child > div:first-child,rm-tabbed-pages[centered="false" i] > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"][centered="false" i] > div:first-child > div:first-child > div:first-child{ width: 100%; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child > div,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child > div{ display: table-cell; overflow: hidden; position: relative; width: 1px; height: 100%; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child > div > button,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child > div > button{ background-color: transparent; border: 0; padding: 12px 16px; font-size: 16px; line-height: 20px; height: 100%; width: 100%; cursor: pointer; outline: none; } rm-tabbed-pages > div:first-child > div:first-child > div:nth-child(2),[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:nth-child(2){ position: absolute; bottom: 0; left: 0; height: 2px; width: 1px; transition: transform ease-in-out 200ms; transform-origin: left; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); } rm-tabbed-pages > div:nth-child(2) > *,[is="rm-tabbed-pages"] > div:nth-child(2) > *{ display: inline-block; width: 100%; vertical-align: top; transition: transform ease-in-out 200ms; font-size: initial; white-space: initial; }`,

      'exports': {
        onMounted() {
            this._manipulate();
            let width = this.root.getBoundingClientRect().width;
            const frame = () => {
                if (!this.root.isConnected) {
                    return;
                }
                const newWidth = this.root.getBoundingClientRect().width;
                if (newWidth !== width) {
                    this._updateIndicator(true);
                    width = newWidth;
                }
                window.requestAnimationFrame(frame);
            };
            window.requestAnimationFrame(frame);
            motionController(this.root.children[1])
            .setSelectedIndex(this.getSelectedIndex())
            .on("motionchanged", event => this.update({ motion: event.detail.motion, instant: true }))
            .on("motionapplied", event => {
                delete this.state.motion;
                if (event.detail.currentIndex === event.detail.previousIndex) {
                    this.update({ skipUpdate: true });
                } else {
                    this.setSelectedIndex(event.detail.currentIndex);
                }
            });
        },

        onBeforeUpdate() {
            if (this.state.selectedIndex != null) {
                this.state.selectedIndex = Math.round(this.state.selectedIndex);
            }
            if (isNaN(this.state.selectedIndex)) {
                delete this.state.selectedIndex;
            }
        },

        onUpdated() {
            this._manipulate(true);
        },

        _lastHiddenTabsPropValue: undefined,
        _hiddenTabs: [],

        getHiddenTabs() {
            if (this.props.hiddenTabs !== this._lastHiddenTabsPropValue) {
                let newHiddenTabs = [];
                switch (typeof this.props.hiddenTabs) {
                    case "string": {
                        if (/^(\W*(\d+)\W*)+$/.test(this.props.hiddenTabs)) {
                            const regex = /(\d+)/g;
                            let match;
                            const hiddenTabs = [];
                            while (match = regex.exec(this.props.hiddenTabs)) {
                                if (match.length === 0) {
                                    continue;
                                }
                                hiddenTabs.push(parseInt(match[0], 10));
                            }
                            newHiddenTabs = hiddenTabs.filter(a => a >= 0).sort((a, b) => a > b);
                        }
                        break;
                    }
                    case "number": {
                        newHiddenTabs = [ this.props.hiddenTabs ];
                        break;
                    }
                    case "object": {
                        if (Array.isArray(this.props.hiddenTabs)) {
                            newHiddenTabs = this.props.hiddenTabs.filter(item => {
                                return typeof item === "number" && item >= 0;
                            }).sort((a, b) => a > b);
                        }
                        break;
                    }
                }
                this._hiddenTabs = newHiddenTabs;
            }
            return this._hiddenTabs;
        },

        _manipulate(update = false) {
            const tabContainer = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
            ;
            const pageContainer = this.root.children[1];

            // restore hidden tabs and set correct view
            this.slots.forEach((slot, index) => {
                let tabButton = null;
                let page;
                if (index >= pageContainer.children.length) {
                    page = pageContainer.appendChild(document.createElement("div"));
                    page[PAGE_INDEX] = index;
                    tabButton = tabContainer.appendChild(document.createElement("div"));
                } else if (index !== (page = pageContainer.children[index])[PAGE_INDEX]) {
                    page = pageContainer.insertBefore(document.createElement("div"), pageContainer.children[index]);
                    page[PAGE_INDEX] = index;
                    tabButton = tabContainer.insertBefore(document.createElement("div"), tabContainer.children[index]);
                }
                // scroll to selected index
                page.style.transition = this.state.instant ? "none" : "";
                page.style.transform = "translateX(-" + ((this.getSelectedIndex() + this.getMotion()) * 100) + "%)";
                page.style.visibility = this.getSelectedIndex() === this._getUpdatedIndexOf(index) ? "visible" : "hidden";
                if (tabButton != null) {
                    const button = tabButton.appendChild(document.createElement("button"));
                    button.addEventListener("click", event => {
                        this.setSelectedIndex(this._getUpdatedIndexOf(index));
                    });
                    button.innerText = slot.id;
                    ripple.ripple(button, { detectLabel: false, color: "currentColor" });
                }
            });

            // hide desired tabs
            const hiddenTabs = this.getHiddenTabs();
            for (let i = hiddenTabs.length - 1; i >= 0; i--) {
                const index = hiddenTabs[i];
                if (index >= this.slots.length) {
                    continue;
                }
                // removing tab button at hidden index
                tabContainer.removeChild(tabContainer.children[index]);
                // unmount page at hidden index
                const page = pageContainer.children[index];
                const instance = page[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                if (instance != null) {
                    instance.unmount(
                        Object.create(this[riot.__.globals.PARENT_KEY_SYMBOL]),
                        this[riot.__.globals.PARENT_KEY_SYMBOL]
                    );
                }
                // if (page.nextElementSibling) {
                //     console.log("setting page index of", index);
                //     page.nextElementSibling[PAGE_INDEX] = index;
                // }
                // removing page at hidden index
                pageContainer.removeChild(page);
            }

            // update motionController length
            motionController(this.root.children[1]).setLength(this.getLength());

            // set indicator to correct position and size
            this._updateIndicator(!update || this.state.instant);

            // hide scrollbar, if visible
            const header = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
            ;
            const rect = header.getBoundingClientRect();
            header.style.marginBottom = header.clientHeight - rect.height + "px";

            if (!this.state.instant) {
                const selectedIndex = this.getSelectedIndex();
                const slot = this.getSlotAt(selectedIndex);
                const el = pageContainer.children[selectedIndex];
                let instance = el[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                if (instance == null) {
                    instance = el[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY] = riot.__.DOMBindings.template(slot.html, slot.bindings);
                    instance.mount(
                        el, Object.create(this[riot.__.globals.PARENT_KEY_SYMBOL]),
                        this[riot.__.globals.PARENT_KEY_SYMBOL]
                    );
                } else if (update && !this.state.skipUpdate) {
                    instance.update(
                        Object.create(this[riot.__.globals.PARENT_KEY_SYMBOL]),
                        this[riot.__.globals.PARENT_KEY_SYMBOL]
                    );
                }
            }
            delete this.state.instant;
            delete this.state.skipUpdate;
        },

        _updateIndicator(instant = false) {
            const indicator = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .children[1]       // INDICATOR
            ;
            indicator.style.transition = instant ? "none" : "";
            indicator.style.transform = `translateX(${ this.getIndicatorLeft() }px) scaleX(${ this.getIndicatorWidth() })`;
        },

        _getUpdatedIndexOf(index) {
            return index - this.getHiddenTabs().filter(a => a < index).length;
        },

        _getRawIndexOf(index) {
            this.getHiddenTabs().some(hidden => {
                if (hidden > index) {
                    return true;
                }
                index++;
                return false;
            });
            return index;
        },

        getSlotAt(index) {
            return this.slots[this._getRawIndexOf(index)];
        },

        getLength() {
            return this.slots.length - this.getHiddenTabs().filter(a => a < this.slots.length).length;
        },

        _lastSelectedIndexPropValue: undefined,

        getSelectedIndex() {
            if (this.props.selectedIndex !== this._lastSelectedIndexPropValue) {
                this._lastSelectedIndexPropValue = this.props.selectedIndex;
                const selectedIndex = parseInt(this.props.selectedIndex, 10);
                if (!isNaN(selectedIndex)) {
                    this.state.selectedIndex = selectedIndex;
                }
            }
            const length = this.getLength();
            if (this.state.selectedIndex === undefined) {
                this.state.selectedIndex = length > 0 ? 0 : null;
            } else {
                this.state.selectedIndex = length > 0 ?
                    Math.max(0, Math.min(this.state.selectedIndex, length - 1)) : null
                ;
            }
            return this.state.selectedIndex;
        },

        setSelectedIndex(index) {
            if (index === this.getSelectedIndex()) {
                return;
            }
            this.update({ selectedIndex: index });
            motionController(this.root.children[1]).setSelectedIndex(this.getSelectedIndex());
        },

        getIndicatorLeft() {
            const selectedIndex = this.getSelectedIndex();
            if (selectedIndex == null) {
                return 0;
            }
            const rect = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
                .children[selectedIndex] // TAB BUTTON
                .getBoundingClientRect()
            ;
            const delta = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .scrollLeft -
                this.root.getBoundingClientRect().left
            ;
            let left = rect.left + delta;
            const motion = this.getMotion();
            if (motion !== 0) {
                const index = selectedIndex + (motion > 0 ? 1 : -1);
                const rect = this.root
                    .firstElementChild // SCROLLBAR HIDER
                    .firstElementChild // HEADER
                    .firstElementChild // TAB CONTAINER
                    .children[index] // TAB BUTTON
                    .getBoundingClientRect()
                ;
                left += ((rect.left + delta - left) * Math.abs(motion));
            }
            return left;
        },

        getIndicatorWidth() {
            const selectedIndex = this.getSelectedIndex();
            if (selectedIndex == null) {
                return 0;
            }
            let width = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
                .children[selectedIndex] // TAB BUTTON
                .getBoundingClientRect().width
            ;
            const motion = this.getMotion();
            if (motion !== 0) {
                const index = selectedIndex + (motion > 0 ? 1 : -1);
                const rect = this.root
                    .firstElementChild // SCROLLBAR HIDER
                    .firstElementChild // HEADER
                    .firstElementChild // TAB CONTAINER
                    .children[index] // TAB BUTTON
                    .getBoundingClientRect()
                ;
                width += ((rect.width - width) * Math.abs(motion));
            }
            return width;
        },

        getMotion() {
            return motionController(this.root.children[1]).getMotion();
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<div style="transform: scaleY(1);"><div><div></div><div></div></div></div><div></div>',
          []
        );
      },

      'name': 'rm-tabbed-pages'
    };

    return TabbedPagesComponent;

});

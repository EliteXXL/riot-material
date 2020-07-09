'use strict';

var riot = require('riot');
var motionController = require('./motionController');

const PAGE_INDEX = Symbol("page-index");

var rmTabbedPages = {
  'css': `rm-tabbed-pages,[is="rm-tabbed-pages"]{ white-space: nowrap; overflow: hidden; width: 100%; height: 100%; display: block; font-size: 0; transform: scaleY(1); } rm-tabbed-pages > div:first-child,[is="rm-tabbed-pages"] > div:first-child{ overflow: hidden; display: block; width: 100%; } rm-tabbed-pages > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child{ display: block; width: 100%; overflow: auto visible; position: relative; user-select: none; text-align: center; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child{ display: inline-table; font-size: initial; text-align: center; } rm-tabbed-pages:not([centered]) > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"]:not([centered]) > div:first-child > div:first-child > div:first-child,rm-tabbed-pages[centered="false" i] > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"][centered="false" i] > div:first-child > div:first-child > div:first-child{ width: 100%; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child > div,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child > div{ display: table-cell; width: 1px; padding: 12px 16px; cursor: pointer; overflow: hidden; position: relative; font-size: 16px; line-height: 20px; } rm-tabbed-pages > div:first-child > div:first-child > div:nth-child(2),[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:nth-child(2){ position: absolute; bottom: 0; left: 0; height: 2px; width: 1px; transition: transform ease-in-out 200ms; transform-origin: left; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); } rm-tabbed-pages > div:nth-child(2) > *,[is="rm-tabbed-pages"] > div:nth-child(2) > *{ display: inline-block; width: 100%; height: 100%; vertical-align: top; transition: transform ease-in-out 200ms; font-size: initial; }`,

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
        motionController.motionController(this.root.children[1])
        .setSelectedIndex(this.getSelectedIndex())
        .on("motionchanged", event => this.update({ motion: event.detail.motion, instant: true }))
        .on("motionapplied", event => {
            delete this.state.motion;
            if (event.detail.currentIndex === event.detail.previousIndex) {
                this.update();
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
                index = this._getUpdatedIndexOf(index);
            } else if (index !== (page = pageContainer.children[index])[PAGE_INDEX]) {
                page = pageContainer.insertBefore(document.createElement("div"), pageContainer.children[index]);
                page[PAGE_INDEX] = index;
                tabButton = tabContainer.insertBefore(document.createElement("div"), tabContainer.children[index]);
            }
            // scroll to selected index
            page.style.transition = this.state.instant ? "none" : "";
            page.style.transform = "translateX(-" + ((this.getSelectedIndex() + this.getMotion()) * 100) + "%)";
            if (tabButton != null) {
                tabButton.addEventListener("click", () => {
                    this.setSelectedIndex(index);
                });
                tabButton.innerText = slot.id;
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
                instance.unmount();
            }
            // removing page at hidden index
            pageContainer.removeChild(page);
        }

        // update motionController length
        motionController.motionController(this.root.children[1]).setLength(this.getLength());

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
                instance.mount(el);
            }
            if (update) {
                instance.update();
            }
        }
        delete this.state.instant;
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
        motionController.motionController(this.root.children[1]).setSelectedIndex(this.getSelectedIndex());
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
        const delta =  this.root.getBoundingClientRect().left +
            this.root
            .firstElementChild // SCROLLBAR HIDER
            .firstElementChild // HEADER
            .scrollLeft
        ;
        let left = rect.left - delta;
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
            left += (((rect.left - delta) - left) * Math.abs(motion));
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
        return motionController.motionController(this.root.children[1]).getMotion();
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

module.exports = rmTabbedPages;

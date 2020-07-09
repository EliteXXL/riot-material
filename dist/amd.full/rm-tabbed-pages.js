define(['riot'], function (riot) { 'use strict';

    const PAGE_INDEX = Symbol("page-index");

    var rmTabbedPages = {
      'css': `rm-tabbed-pages,[is="rm-tabbed-pages"]{ white-space: nowrap; overflow: hidden; width: 100%; display: block; font-size: 0; transform: scaleY(1); } rm-tabbed-pages > div:first-child,[is="rm-tabbed-pages"] > div:first-child{ overflow: hidden; display: block; width: 100%; } rm-tabbed-pages > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child{ display: block; width: 100%; overflow: auto visible; position: relative; user-select: none; text-align: center; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child{ display: inline-table; font-size: initial; text-align: center; } rm-tabbed-pages:not([centered]) > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"]:not([centered]) > div:first-child > div:first-child > div:first-child,rm-tabbed-pages[centered="false" i] > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"][centered="false" i] > div:first-child > div:first-child > div:first-child{ width: 100%; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child > div,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child > div{ display: table-cell; width: 1px; padding: 12px 16px; cursor: pointer; overflow: hidden; position: relative; font-size: 16px; line-height: 20px; } rm-tabbed-pages > div:first-child > div:first-child > div:nth-child(2),[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:nth-child(2){ position: absolute; bottom: 0; left: 0; height: 2px; width: 1px; transition: transform ease-in-out 200ms; transform-origin: left; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); } rm-tabbed-pages > div:nth-child(2) > *,[is="rm-tabbed-pages"] > div:nth-child(2) > *{ display: inline-block; width: 100%; transition: transform ease-in-out 200ms; font-size: initial; }`,

      'exports': {
        onMounted() {
            this._manipulate();
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
                page.style.transform = "translateX(-" + (this.getSelectedIndex() * 100) + "%)";
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

            // set display to correct position and size
            this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .children[1]       // INDICATOR
                .style.transform = `translateX(${ this.getIndicatorLeft() }px) scaleX(${ this.getIndicatorWidth() })`
            ;

            // hide scrollbar, if visible
            const header = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
            ;
            const rect = header.getBoundingClientRect();
            header.style.marginBottom = header.clientHeight - rect.height + "px";

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
            // this._updateIndices();
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
            return rect.left - 
                this.root.getBoundingClientRect().left +
                this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .scrollLeft
            ;
        },

        getIndicatorWidth() {
            const selectedIndex = this.getSelectedIndex();
            if (selectedIndex == null) {
                return 0;
            }
            return this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
                .children[selectedIndex] // TAB BUTTON
                .getBoundingClientRect().width
            ;
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

    return rmTabbedPages;

});

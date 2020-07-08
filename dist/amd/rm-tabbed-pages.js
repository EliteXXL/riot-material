define(['riot'], function (riot) { 'use strict';

    var rmTabbedPages = {
      'css': `rm-tabbed-pages,[is="rm-tabbed-pages"]{ white-space: nowrap; overflow: hidden; width: 100%; display: block; font-size: 0; } rm-tabbed-pages > div:first-child,[is="rm-tabbed-pages"] > div:first-child{ overflow: hidden; display: block; width: 100%; } rm-tabbed-pages > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child{ display: block; width: 100%; overflow: auto visible; position: relative; user-select: none; text-align: center; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child{ display: inline-table; font-size: initial; text-align: center; } rm-tabbed-pages:not([centered]) > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"]:not([centered]) > div:first-child > div:first-child > div:first-child,rm-tabbed-pages[centered="false" i] > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"][centered="false" i] > div:first-child > div:first-child > div:first-child{ width: 100%; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child > div,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child > div{ display: table-cell; width: 1px; padding: 12px 16px; cursor: pointer; overflow: hidden; position: relative; font-size: 16px; line-height: 20px; } rm-tabbed-pages > div:first-child > div:first-child > [ref=indicator],[is="rm-tabbed-pages"] > div:first-child > div:first-child > [ref=indicator]{ position: absolute; bottom: 0; left: 0; height: 2px; width: 1px; transition: transform ease-in-out 200ms; transform-origin: left; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); } rm-tabbed-pages > span,[is="rm-tabbed-pages"] > span{ display: inline-block; width: 100%; transition: transform ease-in-out 200ms; font-size: initial; }`,

      'exports': {
        onMounted() {
            this._manipulate();
        },

        onBeforeUpdate() {
            const tabContainer = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
            ;
            const hiddenTabs = this.getHiddenTabs();
            for (let i = hiddenTabs.length - 1; i >= 0; i--) {
                const index = hiddenTabs[i];
                if (index >= this.slots.length) {
                    continue;
                }
                // removing tab button at hidden index
                tabContainer.removeChild(tabContainer.children[index]);
                // unmount page at hidden index
                const page = this.root.children[index + 1];
                const instance = page[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                if (instance != null) {
                    instance.unmount();
                }
                // removing page at hidden index
                this.root.removeChild(page);
            }
        },

        onUpdated() {
            this._manipulate(true);
        },

        _lastHiddenTabsPropValue: undefined,
        _hiddenTabs: [],

        getHiddenTabs() {
            if (this.props.hiddenTabs !== this._lastHiddenTabsPropValue) {
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
                            this._hiddenTabs = hiddenTabs.filter(a => a >= 0).sort((a, b) => a > b);
                        } else {
                            this._hiddenTabs = [];
                        }
                        break;
                    }
                    case "number": {
                        this._hiddenTabs = [ this.props.hiddenTabs ];
                        break;
                    }
                    case "object": {
                        if (Array.isArray(this.props.hiddenTabs)) {
                            this._hiddenTabs = this.props.hiddenTabs.filter(item => {
                                return typeof item === "number" && item >= 0;
                            }).sort((a, b) => a > b);
                        } else {
                            this._hiddenTabs = [];
                        }
                        break;
                    }
                    default: {
                        this._hiddenTabs = [];
                    }
                }
            }
            return this._hiddenTabs;
        },

        _manipulate(update = false) {
            // const tabContainer = this.root
            //     .firstElementChild // SCROLLBAR HIDER
            //     .firstElementChild // HEADER
            //     .firstElementChild // TAB CONTAINER
            // ;
            // const hiddenTabs = this.getHiddenTabs();
            // for (let i = hiddenTabs.length - 1; i >= 0; i++) {
            //     const index = hiddenTabs[i];
            //     if (index >= this.slots.length) {
            //         continue;
            //     }
            //     console.log("hiding", index, tabContainer.children[index], this.root.children[index + 1]);
            //     tabContainer.removeChild(tabContainer.children[index]);
            //     const page = this.root.children[index + 1];
            //     const instance = page[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
            //     if (instance != null) {
            //         instance.unmount();
            //     }
            //     this.root.removeChild(page);
            // }

            const header = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
            ;
            const rect = header.getBoundingClientRect();
            header.style.marginBottom = header.clientHeight - rect.height + "px";

            const selectedIndex = this.getSelectedIndex();
            const slot = this.getSlotAt(selectedIndex);
            const el = this.root.querySelector(`[name="${slot.id}"]`);
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

        // ,
        // getScrollbarHeight() {
        //     const div = document.body.appendChild(document.createElement("div"));
        //     div.style.width = div.style.height = "100px";
        //     div.style.overflow = "scroll";
        //     const rect = div.getBoundingClientRect();
        //     const scrollbarHeight = rect.height - div.clientHeight;
        //     const scrollbarWidth = rect.width - div.clientWidth;
        //     document.body.removeChild(div);
        //     return scrollbarHeight;
        // }
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
          '<div><div><div><div expr78="expr78"></div></div><div expr79="expr79" ref="indicator"></div></div></div><span expr80="expr80"></span>',
          [{
            'type': bindingTypes.EACH,
            'getKey': null,
            'condition': null,

            'template': template(' ', [{
              'expressions': [{
                'type': expressionTypes.TEXT,
                'childNodeIndex': 0,

                'evaluate': function(scope) {
                  return scope.slot.id;
                }
              }, {
                'type': expressionTypes.EVENT,
                'name': 'onclick',

                'evaluate': function(scope) {
                  return scope.setSelectedIndex.bind(scope, scope._getUpdatedIndexOf(scope.index));
                }
              }]
            }]),

            'redundantAttribute': 'expr78',
            'selector': '[expr78]',
            'itemName': 'slot',
            'indexName': 'index',

            'evaluate': function(scope) {
              return scope.slots;
            }
          }, {
            'redundantAttribute': 'expr79',
            'selector': '[expr79]',

            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'style',

              'evaluate': function(scope) {
                return [
                  'transform: translateX(',
                  scope.getIndicatorLeft(),
                  'px) scaleX(',
                  scope.getIndicatorWidth(),
                  ');'
                ].join('');
              }
            }]
          }, {
            'type': bindingTypes.EACH,
            'getKey': null,
            'condition': null,

            'template': template(null, [{
              'expressions': [{
                'type': expressionTypes.ATTRIBUTE,
                'name': 'name',

                'evaluate': function(scope) {
                  return scope.slot.id;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'style',

                'evaluate': function(scope) {
                  return ['transform: translateX(-', scope.getSelectedIndex() * 100, '%);'].join('');
                }
              }]
            }]),

            'redundantAttribute': 'expr80',
            'selector': '[expr80]',
            'itemName': 'slot',
            'indexName': null,

            'evaluate': function(scope) {
              return scope.slots;
            }
          }]
        );
      },

      'name': 'rm-tabbed-pages'
    };

    return rmTabbedPages;

});

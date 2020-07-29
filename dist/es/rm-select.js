import ButtonComponent from './rm-button';
import MenuComponent from './rm-menu';
import TextfieldContainer from './rm-textfield-container';
import 'riot';
import { pointerController } from './pointerController';

const blockedInputs = [];
window.addEventListener("change", event => {
    if (blockedInputs.some(input => event.target === input)) {
        event.stopImmediatePropagation();
    }
}, true);

var rmSelect = {
  'css': `rm-select,[is="rm-select"]{ position: relative; } rm-select[filterable],[is="rm-select"][filterable]{ cursor: text; } rm-select[disabled],[is="rm-select"][disabled]{ cursor: default; } rm-select .rm-select--arrow,[is="rm-select"] .rm-select--arrow{ transition: transform ease-in-out 150ms; transform: rotate(0deg); } rm-select .rm-select--arrow.rm-select--arrow-rotated,[is="rm-select"] .rm-select--arrow.rm-select--arrow-rotated{ transform: rotate(180deg); } rm-select .rm-select--input,[is="rm-select"] .rm-select--input{ padding: 0; font-size: inherit; line-height: inherit; border: 0; background: none; outline: none; opacity: 0; cursor: default; width: 100%; } rm-select[filterable]:not([filterable=false]) .rm-select--input,[is="rm-select"][filterable]:not([filterable=false]) .rm-select--input{ opacity: 1; cursor: text; } rm-select .rm-select--label,[is="rm-select"] .rm-select--label{ position: absolute; top: 0; left: 0; font-size: inherit; line-height: inherit; } rm-select[filterable]:not([filterable=false]) .rm-select--label,[is="rm-select"][filterable]:not([filterable=false]) .rm-select--label{ display: none; }`,

  'exports': {
    state: {
        selected: [],
    },

    _mounted: false,
    _menu: null,
    _input: null,

    onBeforeMount() {
        const valueProperty = {
            get: () => {
                const selected = this.state.selected;
                return this.isMultiple() ? selected : selected[0] || "";
            },
            set: value => {
                this.select(value);
            }
        };
        Object.defineProperty(this.root, "value", valueProperty);
        Object.defineProperty(this.root, "label", { get: () => {
            return this._input ? this._input.label : "";
        } });
    },

    onMounted() {
        const input = this._input = this.root.querySelector("input");
        
        Object.defineProperty(input, "value", {
            get: () => this.root.value,
            set: value => { this.root.value = value; }
        });

        Object.defineProperty(input, "label", { get: HTMLInputElement.prototype.__lookupGetter__("value").bind(input) });

        this.root.children[1].addEventListener("keydown", event => {
            if (!this.state.menuopened && [ 32 ].some(keyCode => event.keyCode === keyCode)) {
                this.update({ menuopened: true });
                event.stopImmediatePropagation();
            } else if (this.state.menuopened && [ 27 ].some(keyCode => event.keyCode === keyCode)) {
                this.update({ menuopened: false });
                event.stopImmediatePropagation();
            } else if (!this.state.menuopened) {
                switch (event.keyCode) {
                    case 40: {
                        if (this.isMultiple() || this.isFilterable()) {
                            this.update({ menuopened: true });
                        } else {
                            const options = this._menu.options;
                            if (options.length !== 0) {
                                if (this.state.selected.length === 0) {
                                    this.root.value = options[0].value;
                                } else {
                                    const value = this.state.selected[0];
                                    let index = 0;
                                    for (let i = 0; i < options.length; i++) {
                                        const opt = options[i];
                                        if (opt.value === value) {
                                            index = i;
                                            break;
                                        }
                                    }
                                    if (index + 1 < options.length) {
                                        this.root.value = options[index + 1].value;
                                    }
                                }
                            }
                        }
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        break;
                    }
                    case 38: {
                        if (this.isMultiple() || this.isFilterable()) {
                            this.update({ menuopened: true });
                        } else {
                            const options = this._menu.options;
                            if (options.length !== 0) {
                                if (this.state.selected.length === 0) {
                                    this.root.value = options[0].value;
                                } else {
                                    const value = this.state.selected[0];
                                    let index = 0;
                                    for (let i = options.length - 1; i >= 0; i--) {
                                        const opt = options[i];
                                        if (opt.value === value) {
                                            index = i;
                                            break;
                                        }
                                    }
                                    if (index - 1 >= 0) {
                                        this.root.value = options[index - 1].value;
                                    }
                                }
                            }
                        }
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        break;
                    }
                }
            }
        });
        (this._menu = this.root.firstElementChild)._bindTo(this.root.children[1]);

        blockedInputs.push(input);

        pointerController(this.root.firstElementChild, event => {
            if (this.props.disabled) {
                return;
            }
            if (document.activeElement !== input) {
                if (!this.state.menuopened) {
                    this.update({ menuopened: true });
                }
                event.preventDefault();
                input.focus();
            } else if (!this.isFilterable()) {
                this.update({ menuopened: !this.state.menuopened });
            }
        });
        pointerController(this.root.querySelector(".rm-select--arrow"), event => {
            if (this.props.disabled) {
                return;
            }
            if (this.isFilterable()) {
                this.update({ menuopened: !this.state.menuopened });
            }
        });

        this._lastSelected = this.state.selected.sort();

        this._mounted = true;
        // this.state.selectedOption = option;
        // HTMLInputElement.prototype.__lookupSetter__("value").call(input, this.getLabel());
    },

    onBeforeUnmount() {
        if (blockedInputs.some((input, i) => {
            return this._input === input;
        })) {
            blockedInputs.splice(i, 1);
        }
    },

    _lastSelected: null,

    onBeforeUpdate() {
        if (this.state.refreshLabel) {
            HTMLInputElement.prototype.__lookupSetter__("value").call(this.root.querySelector("input"), this.getLabel());
            delete this.state.refreshLabel;
        }
    },

    onUpdated() {
        const selected = this.state.selected.sort();
        if (selected.length !== this._lastSelected.length || selected.some((item, i) => {
            return item !== this._lastSelected[i];
        })) {
            this._lastSelected = selected;
            this.root.dispatchEvent(new Event("change"));
        }
    },

    _oninputfocus() {
        this._labelWhenOnFocus = this.root.label;
        this.update({ focused: true }); // , menuopened: true });
    },

    _oninputblur() {
        this.update({ focused: false, menuopened: false, refreshLabel: true });
    },

    _oninputinput() {
        if (this.isFilterable() && !this.state.menuopened) {
            this.update({ menuopened: true });
        }
    },

    _getClassNames() {
        const classNames = {};
        if (this.state.focused) {
            classNames["rm-focused"] = true;
            if (this.isFilterable()) {
                classNames["rm-label-should-float"] = true;
            }
        }
        const label = this.getLabel();
        if (label !== "") {
            classNames["rm-label-should-float"] = true;
        }
        return Object.keys(classNames).join(" ");
    },

    clear() {
        this.update({ selected: [], menuopened: true, refreshLabel: true });
    },

    getSelected() {
        if (this.state.selected.length === 0) {
            return [];
        }
        return (this._menu || this.root).querySelectorAll(this.state.selected.map(value => {
            return ["option", "rm-menu-item"].map(tag => {
                const selectors = [ `[value='${value}']:not([disabled]):not([passive])` ];
                if (!value) {
                    selectors.push(":not([value]):not([disabled]):not([passive])");
                }
                return selectors.map(selector => tag + selector).join(",");
            }).join(",")
        }).join(","));
    },

    getOptions() {
        return this.root.querySelectorAll("option");
    },

    getLabel() {
        return Array.prototype.map.call(this.getSelected(), option => option.label).join(", ");
    },

    isFilterable() {
        return this.props.filterable != null && this.props.filterable !== "false" && this.props.filterable !== false;
    },

    isMultiple() {
        return false;
    },

    isClearable() {
        return this.props.clearable != null && this.props.clearable !== false;
    },

    select(value) {
        if (!this.hasSelected(value)) {
            if (this.isMultiple()) {
                this.state.selected.push(value);
            } else {
                this.state.selected = [value];
            }
        }
        if (this._mounted) {
            this.update({ menuopened: this.isMultiple() ? state.menuopened : false, refreshLabel: true });
        }
    },

    hasSelected(value) {
        return this.state.selected.some(s => s === value);
    },

    components: {
        "rm-textfield-container": TextfieldContainer,
        "rm-button": ButtonComponent,
        "rm-menu": MenuComponent
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<rm-menu expr198="expr198" prevent-focus></rm-menu><rm-textfield-container expr200="expr200"></rm-textfield-container>',
      [{
        'type': bindingTypes.TAG,
        'getComponent': getComponent,

        'evaluate': function(scope) {
          return 'rm-menu';
        },

        'slots': [{
          'id': 'default',
          'html': '<slot expr199="expr199"></slot>',

          'bindings': [{
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'default',
            'redundantAttribute': 'expr199',
            'selector': '[expr199]'
          }]
        }],

        'attributes': [{
          'type': expressionTypes.EVENT,
          'name': 'onselected',

          'evaluate': function(scope) {
            return scope._onmenuselected;
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'opened',

          'evaluate': function(scope) {
            return scope.state.menuopened;
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'variant',

          'evaluate': function(scope) {
            return scope.props.variant;
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'selected',

          'evaluate': function(scope) {
            return scope.state.selected;
          }
        }],

        'redundantAttribute': 'expr198',
        'selector': '[expr198]'
      }, {
        'type': bindingTypes.TAG,
        'getComponent': getComponent,

        'evaluate': function(scope) {
          return 'rm-textfield-container';
        },

        'slots': [{
          'id': 'input',
          'html': '<span slot="input"><input expr201="expr201" class="rm-select--input"/><div expr202="expr202" class="rm-select--label"> </div></span>',

          'bindings': [{
            'redundantAttribute': 'expr201',
            'selector': '[expr201]',

            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onfocus',

              'evaluate': function(scope) {
                return scope._oninputfocus;
              }
            }, {
              'type': expressionTypes.EVENT,
              'name': 'onblur',

              'evaluate': function(scope) {
                return scope._oninputblur;
              }
            }, {
              'type': expressionTypes.EVENT,
              'name': 'oninput',

              'evaluate': function(scope) {
                return scope._oninputinput;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'readonly',

              'evaluate': function(scope) {
                return !scope.isFilterable();
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'disabled',

              'evaluate': function(scope) {
                return scope.props.disabled;
              }
            }]
          }, {
            'redundantAttribute': 'expr202',
            'selector': '[expr202]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.getLabel();
              }
            }]
          }]
        }, {
          'id': 'leading',
          'html': '<slot expr203="expr203" name="leading" slot="leading"></slot>',

          'bindings': [{
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'leading',
            'redundantAttribute': 'expr203',
            'selector': '[expr203]'
          }]
        }, {
          'id': 'trailing',
          'html': '<span style="white-space: nowrap;" slot="trailing"><rm-button expr204="expr204" variant="icon" class="rm-select--clear" dense></rm-button><slot expr205="expr205" name="trailing"></slot><rm-button expr206="expr206" variant="icon" tabindex="-1" dense></rm-button></span>',

          'bindings': [{
            'type': bindingTypes.IF,

            'evaluate': function(scope) {
              return scope.isClearable() && scope.root.value;
            },

            'redundantAttribute': 'expr204',
            'selector': '[expr204]',

            'template': template(null, [{
              'type': bindingTypes.TAG,
              'getComponent': getComponent,

              'evaluate': function(scope) {
                return 'rm-button';
              },

              'slots': [{
                'id': 'default',
                'html': 'clear',
                'bindings': []
              }],

              'attributes': [{
                'type': expressionTypes.EVENT,
                'name': 'onclick',

                'evaluate': function(scope) {
                  return scope.clear;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'tabindex',

                'evaluate': function(scope) {
                  return scope.props.disabled ? "-1" : null;
                }
              }]
            }])
          }, {
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'trailing',
            'redundantAttribute': 'expr205',
            'selector': '[expr205]'
          }, {
            'type': bindingTypes.TAG,
            'getComponent': getComponent,

            'evaluate': function(scope) {
              return 'rm-button';
            },

            'slots': [{
              'id': 'default',
              'html': 'arrow_drop_down',
              'bindings': []
            }],

            'attributes': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'class',

              'evaluate': function(scope) {
                return [
                  'rm-select--arrow',
                  scope.state.menuopened ? ' rm-select--arrow-rotated' : ''
                ].join('');
              }
            }],

            'redundantAttribute': 'expr206',
            'selector': '[expr206]'
          }]
        }],

        'attributes': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'variant',

          'evaluate': function(scope) {
            return scope.props.variant;
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'label',

          'evaluate': function(scope) {
            return scope.props.label;
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'full-width',

          'evaluate': function(scope) {
            return scope.props.fullWidth;
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'class',

          'evaluate': function(scope) {
            return scope._getClassNames();
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'disabled',

          'evaluate': function(scope) {
            return scope.props.disabled;
          }
        }],

        'redundantAttribute': 'expr200',
        'selector': '[expr200]'
      }]
    );
  },

  'name': 'rm-select'
};

export default rmSelect;

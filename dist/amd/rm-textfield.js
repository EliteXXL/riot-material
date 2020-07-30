define(['./rm-textfield-container', './pointerController'], function (TextfieldContainer, pointerController) { 'use strict';

    TextfieldContainer = TextfieldContainer && Object.prototype.hasOwnProperty.call(TextfieldContainer, 'default') ? TextfieldContainer['default'] : TextfieldContainer;

    var rmTextfield = {
      'css': `rm-textfield,[is="rm-textfield"]{ cursor: text; } rm-textfield[disabled],[is="rm-textfield"][disabled]{ cursor: default; } rm-textfield input,[is="rm-textfield"] input{ padding: 0; font-size: inherit; line-height: inherit; border: 0; background: none; outline: none; width: 100%; }`,

      'exports': {
        _input: null,

        onBeforeMount() {
            Object.defineProperty(this.root, "value", {
                get: () => {
                    return this._input ? this._input.value : this.props.value || "";
                },
                set: value => {
                    this._input.value = value;
                }
            });
        },

        onMounted() {
            this._input = this.root.querySelector("input");
        },

        _oncontainermousedown(event) {
            if (this.props.disabled) {
                return;
            }
            const input = this.root.querySelector("input");
            if (document.activeElement !== input){
                event.preventDefault();
                input.focus();
            }
        },

        _oninputfocus() {
            this.update({ focused: true });
        },

        _oninputblur() {
            this.update({ focused: false });
        },

        _oninputinput() {
            this.update();
        },

        _getTextfieldContainerClass() {
            const names = {};
            if (this.state.focused) {
                names["rm-focused"] = names["rm-label-should-float"] = true;
            }
            if (this.root.value) {
                names["rm-label-should-float"] = true;
            }
            return Object.keys(names).join(" ");
        },

        isClearable() {
            return this.props.clearable != null && this.props.clearable !== false;
        },

        clear() {
            this.root.value = "";
            this.update();
        },

        components: {
            "rm-textfield-container": TextfieldContainer
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template('<rm-textfield-container expr109="expr109"></rm-textfield-container>', [{
          'type': bindingTypes.TAG,
          'getComponent': getComponent,

          'evaluate': function(scope) {
            return 'rm-textfield-container';
          },

          'slots': [{
            'id': 'input',
            'html': '<input expr110="expr110" slot="input"/>',

            'bindings': [{
              'redundantAttribute': 'expr110',
              'selector': '[expr110]',

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
                'type': expressionTypes.VALUE,

                'evaluate': function(scope) {
                  return scope.props.value;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'name',

                'evaluate': function(scope) {
                  return scope.props.name;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'disabled',

                'evaluate': function(scope) {
                  return scope.props.disabled;
                }
              }]
            }]
          }, {
            'id': 'leading',
            'html': '<slot expr111="expr111" name="leading" slot="leading"></slot>',

            'bindings': [{
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'leading',
              'redundantAttribute': 'expr111',
              'selector': '[expr111]'
            }]
          }, {
            'id': 'trailing',
            'html': '<span style="white-space: nowrap;" slot="trailing"><rm-button expr112="expr112" variant="icon" dense></rm-button><slot expr113="expr113" name="trailing"></slot></span>',

            'bindings': [{
              'type': bindingTypes.IF,

              'evaluate': function(scope) {
                return scope.isClearable() && scope.root.value;
              },

              'redundantAttribute': 'expr112',
              'selector': '[expr112]',

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
              'redundantAttribute': 'expr113',
              'selector': '[expr113]'
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
            'name': 'disabled',

            'evaluate': function(scope) {
              return scope.props.disabled;
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'class',

            'evaluate': function(scope) {
              return scope._getTextfieldContainerClass();
            }
          }, {
            'type': expressionTypes.EVENT,
            'name': 'onmousedown',

            'evaluate': function(scope) {
              return scope._oncontainermousedown;
            }
          }],

          'redundantAttribute': 'expr109',
          'selector': '[expr109]'
        }]);
      },

      'name': 'rm-textfield'
    };

    return rmTextfield;

});

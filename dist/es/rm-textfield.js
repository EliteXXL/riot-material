var rmTextfield = {
  'css': `rm-textfield,[is="rm-textfield"]{ display: inline-block; font: message-box; font-size: 16px; margin-bottom: 1.25em; } rm-textfield[full-width]:not([full-width="false"]),[is="rm-textfield"][full-width]:not([full-width="false"]){ width: 100%; } rm-textfield [ref=container],[is="rm-textfield"] [ref=container]{ display: block; position: relative; background: rgb(245, 245, 245); background: rgb(var(--color-background, 245, 245, 245)); cursor: text; font-size: inherit; box-sizing: border-box; padding: 1em 0 .5em 0; } .rm-black-surface rm-textfield [ref=container],.rm-black-surface [is="rm-textfield"] [ref=container]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); } .rm-dark-surface rm-textfield [ref=container],.rm-dark-surface [is="rm-textfield"] [ref=container]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); } .rm-light-surface rm-textfield [ref=container],.rm-light-surface [is="rm-textfield"] [ref=container]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); } .rm-white-surface rm-textfield [ref=container],.rm-white-surface [is="rm-textfield"] [ref=container]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); } rm-textfield[variant="filled"] [ref=container],[is="rm-textfield"][variant="filled"] [ref=container]{ padding: 1.25em 12px 1em 12px; border-radius: 4px 4px 0 0; background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-black-surface rm-textfield[variant="filled"] [ref=container],.rm-black-surface [is="rm-textfield"][variant="filled"] [ref=container]{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-black, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-dark-surface rm-textfield[variant="filled"] [ref=container],.rm-dark-surface [is="rm-textfield"][variant="filled"] [ref=container]{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-light-surface rm-textfield[variant="filled"] [ref=container],.rm-light-surface [is="rm-textfield"][variant="filled"] [ref=container]{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-white-surface rm-textfield[variant="filled"] [ref=container],.rm-white-surface [is="rm-textfield"][variant="filled"] [ref=container]{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); } rm-textfield[variant="outlined"] [ref=container],[is="rm-textfield"][variant="outlined"] [ref=container]{ padding: 1em 12px; border-radius: 4px; } rm-textfield[variant="outlined"] [ref=container] [ref=border],[is="rm-textfield"][variant="outlined"] [ref=container] [ref=border]{ border: rgba(0, 0, 0, .42) 1px solid; border: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)) 1px solid; border-radius: inherit; transition: border 150ms linear; position: absolute; top: 0; right: 0; bottom: 0; left: 0; } .rm-black-surface rm-textfield[variant="outlined"] [ref=container] [ref=border],.rm-black-surface [is="rm-textfield"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-black, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-textfield[variant="outlined"] [ref=container] [ref=border],.rm-dark-surface [is="rm-textfield"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-textfield[variant="outlined"] [ref=container] [ref=border],.rm-light-surface [is="rm-textfield"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-textfield[variant="outlined"] [ref=container] [ref=border],.rm-white-surface [is="rm-textfield"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-textfield[variant="outlined"] [ref=container].rm-focused [ref=border],[is="rm-textfield"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary, 139, 0, 139)) 2px solid; } .rm-black-surface rm-textfield[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-black-surface [is="rm-textfield"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-black, 238, 130, 238)) 2px solid; } .rm-dark-surface rm-textfield[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-dark-surface [is="rm-textfield"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-dark, 238, 130, 238)) 2px solid; } .rm-light-surface rm-textfield[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-light-surface [is="rm-textfield"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-light, 139, 0, 139)) 2px solid; } .rm-white-surface rm-textfield[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-white-surface [is="rm-textfield"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-white, 139, 0, 139)) 2px solid; } rm-textfield:not([variant="outlined"]) [ref=container],[is="rm-textfield"]:not([variant="outlined"]) [ref=container]{ border: none !important; } rm-textfield[variant="outlined"] [ref=container].rm-focused,[is="rm-textfield"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-textfield[variant="outlined"] [ref=container].rm-focused,.rm-black-surface [is="rm-textfield"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textfield[variant="outlined"] [ref=container].rm-focused,.rm-dark-surface [is="rm-textfield"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textfield[variant="outlined"] [ref=container].rm-focused,.rm-light-surface [is="rm-textfield"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textfield[variant="outlined"] [ref=container].rm-focused,.rm-white-surface [is="rm-textfield"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textfield input,[is="rm-textfield"] input{ width: 100%; border: none; font-size: inherit; font-family: inherit; position: relative; background: transparent; padding: 0; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; color: inherit; } rm-textfield input[disabled="true"],[is="rm-textfield"] input[disabled="true"]{ pointer-events: none; opacity: 0; } rm-textfield input:-webkit-autofill,[is="rm-textfield"] input:-webkit-autofill{ -webkit-box-shadow: 0 0 0 30px rgb(245, 245, 245) inset !important; -webkit-box-shadow: 0 0 0 30px rgb(var(--color-background, 245, 245, 245)) inset !important; -webkit-text-fill-color: rgb(0, 0, 255); -webkit-text-fill-color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-textfield input:-webkit-autofill,.rm-black-surface [is="rm-textfield"] input:-webkit-autofill{ -webkit-box-shadow: 0 0 0 30px rgb(0, 0, 0) inset !important; -webkit-box-shadow: 0 0 0 30px rgb(var(--color-black-surface, 0, 0, 0)) inset !important; -webkit-text-fill-color: rgb(30, 144, 255); -webkit-text-fill-color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-textfield input:-webkit-autofill,.rm-dark-surface [is="rm-textfield"] input:-webkit-autofill{ -webkit-box-shadow: 0 0 0 30px rgb(10, 10, 10) inset !important; -webkit-box-shadow: 0 0 0 30px rgb(var(--color-dark-surface, 10, 10, 10)) inset !important; -webkit-text-fill-color: rgb(30, 144, 255); -webkit-text-fill-color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-textfield input:-webkit-autofill,.rm-light-surface [is="rm-textfield"] input:-webkit-autofill{ -webkit-box-shadow: 0 0 0 30px rgb(250, 250, 250) inset !important; -webkit-box-shadow: 0 0 0 30px rgb(var(--color-light-surface, 250, 250, 250)) inset !important; -webkit-text-fill-color: rgb(0, 0, 255); -webkit-text-fill-color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-textfield input:-webkit-autofill,.rm-white-surface [is="rm-textfield"] input:-webkit-autofill{ -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important; -webkit-box-shadow: 0 0 0 30px rgb(var(--color-white-surface, 255, 255, 255)) inset !important; -webkit-text-fill-color: rgb(0, 0, 255); -webkit-text-fill-color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-textfield [ref=label],[is="rm-textfield"] [ref=label]{ position: absolute; top: 0; left: -4px; font-size: inherit; transition: transform linear 150ms, color linear 150ms; transform-origin: 6px bottom; padding: 0 8px 0 4px; color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-primary, .6)); -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; } .rm-black-surface rm-textfield [ref=label],.rm-black-surface [is="rm-textfield"] [ref=label]{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-dark-surface rm-textfield [ref=label],.rm-dark-surface [is="rm-textfield"] [ref=label]{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-light-surface rm-textfield [ref=label],.rm-light-surface [is="rm-textfield"] [ref=label]{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-primary, .6)); } .rm-white-surface rm-textfield [ref=label],.rm-white-surface [is="rm-textfield"] [ref=label]{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-primary, .6)); } rm-textfield [ref=container].rm-activated [ref=label],[is="rm-textfield"] [ref=container].rm-activated [ref=label],rm-textfield [ref=container].rm-focused [ref=label],[is="rm-textfield"] [ref=container].rm-focused [ref=label],rm-textfield [ref=container].rm-label-should-float [ref=label],[is="rm-textfield"] [ref=container].rm-label-should-float [ref=label]{ transform: translateY(-100%) scale(.761905); } rm-textfield[variant="outlined"] [ref=container].rm-activated [ref=label],[is="rm-textfield"][variant="outlined"] [ref=container].rm-activated [ref=label],rm-textfield[variant="outlined"] [ref=container].rm-focused [ref=label],[is="rm-textfield"][variant="outlined"] [ref=container].rm-focused [ref=label],rm-textfield[variant="outlined"] [ref=container].rm-label-should-float [ref=label],[is="rm-textfield"][variant="outlined"] [ref=container].rm-label-should-float [ref=label]{ transform: translateY(-136%) scale(.761905); } rm-textfield [ref=container].rm-focused [ref=label],[is="rm-textfield"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-textfield [ref=container].rm-focused [ref=label],.rm-black-surface [is="rm-textfield"] [ref=container].rm-focused [ref=label]{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textfield [ref=container].rm-focused [ref=label],.rm-dark-surface [is="rm-textfield"] [ref=container].rm-focused [ref=label]{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textfield [ref=container].rm-focused [ref=label],.rm-light-surface [is="rm-textfield"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textfield [ref=container].rm-focused [ref=label],.rm-white-surface [is="rm-textfield"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textfield [ref=basic-underline],[is="rm-textfield"] [ref=basic-underline]{ position: absolute; background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); bottom: 0; left: 0; right: 0; height: 1px; } .rm-black-surface rm-textfield [ref=basic-underline],.rm-black-surface [is="rm-textfield"] [ref=basic-underline]{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-textfield [ref=basic-underline],.rm-dark-surface [is="rm-textfield"] [ref=basic-underline]{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-textfield [ref=basic-underline],.rm-light-surface [is="rm-textfield"] [ref=basic-underline]{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-textfield [ref=basic-underline],.rm-white-surface [is="rm-textfield"] [ref=basic-underline]{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-textfield [ref=underline],[is="rm-textfield"] [ref=underline]{ position: absolute; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); bottom: 0px; left: 0; right: 0; height: 2px; transform: scaleX(0); transform-origin: center; transition: transform linear 150ms, opacity linear 150ms; } .rm-black-surface rm-textfield [ref=underline],.rm-black-surface [is="rm-textfield"] [ref=underline]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textfield [ref=underline],.rm-dark-surface [is="rm-textfield"] [ref=underline]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textfield [ref=underline],.rm-light-surface [is="rm-textfield"] [ref=underline]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textfield [ref=underline],.rm-white-surface [is="rm-textfield"] [ref=underline]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textfield [ref=container].rm-focused [ref=underline],[is="rm-textfield"] [ref=container].rm-focused [ref=underline]{ transform: scale(1) !important; opacity: 1 !important; } rm-textfield[variant="outlined"] [ref="input-container"],[is="rm-textfield"][variant="outlined"] [ref="input-container"],rm-textfield[variant="outlined"] [ref=label],[is="rm-textfield"][variant="outlined"] [ref=label]{ background: inherit; } rm-textfield[variant="outlined"] [ref=container] [ref=underline],[is="rm-textfield"][variant="outlined"] [ref=container] [ref=underline],rm-textfield[variant="outlined"] [ref=container] [ref=basic-underline],[is="rm-textfield"][variant="outlined"] [ref=container] [ref=basic-underline]{ display: none; } rm-textfield input::placeholder,[is="rm-textfield"] input::placeholder{ color: transparent; } rm-textfield [ref=container].rm-focused input::placeholder,[is="rm-textfield"] [ref=container].rm-focused input::placeholder,rm-textfield [ref=container].rm-label-should-float input::placeholder,[is="rm-textfield"] [ref=container].rm-label-should-float input::placeholder{ color: initial; } rm-textfield [ref="input-container"],[is="rm-textfield"] [ref="input-container"]{ position: relative; height: 1.25em; } rm-textfield [ref="outlined-margin-top"],[is="rm-textfield"] [ref="outlined-margin-top"]{ height: 0; } rm-textfield[variant="outlined"] [ref="outlined-margin-top"],[is="rm-textfield"][variant="outlined"] [ref="outlined-margin-top"]{ height: 8px; }`,

  'exports': {
    onMounted: function () {
        let input = this.root.querySelector("input");
        let container = this.root.querySelector("[ref=container]");

        input.addEventListener("input", () => {
            if (input.value) {
                container.classList.add("rm-activated");
            } else {
                container.classList.remove("rm-activated");
            }
        });

        let wasInputFocused = false;
        let pointerdownOnTextfield = false;
        input.addEventListener("focus", () => {
            wasInputFocused = true;
            pointerdownOnTextfield = false;
            container.classList.add("rm-focused");
        });

        input.addEventListener("blur", () => {
            container.classList.remove("rm-focused");
            if (pointerdownOnTextfield) {
                setTimeout(() => {
                    if (!this.root.isConnected) {
                        return;
                    }
                    input.focus();
                }, 0);
            } else {
                wasInputFocused = false;
            }
        });

        container.addEventListener("pointerdown", (event) => {
            pointerdownOnTextfield = event.target !== input;
            if (wasInputFocused) {
                input.focus();
            }
        });

        container.addEventListener("click", () => {
            if (wasInputFocused) {
                return;
            }
            input.focus();
        });

        Object.defineProperty(this.root, "value", {
            get() {
                return input.value;
            },
            set(value) {
                if (input.value = (value || "").toString()) {
                    container.classList.add("rm-activated");
                } else {
                    container.classList.remove("rm-activated");
                }
            }
        });

        this.root.focus = () => {
            input.focus();
        };

        if (this.props.value) {
            this.root.value = this.props.value;
        }
        this._lastPropsValue = this.root.value;
    },

    _lastPropsValue: "",

    onBeforeUpdate() {
        if (this.props.value !== this._lastPropsValue) {
            this._lastPropsValue = this.root.value = this.props.value;
        }
    },

    onUpdated() {
        if (this.isDisabled()) {
            this.root.querySelector("[ref=container]").classList.remove("rm-focused");
        }
    },

    getType() {
        // TODO: color
        // TODO: search => add clear icon
        if (!this.props.type || ![
            "date",
            "datetime-local",
            "email",
            "month",
            "number",
            "password",
            "tel",
            "time",
            "week "
        ].includes(this.props.type)) {
            return "text";
        }
        return this.props.type;
    },

    isDisabled() {
        return typeof this.props.disabled === "string" ?
            this.props.disabled !== "false" :
            this.props.disabled == null ? false : !!this.props.disabled;
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div ref="outlined-margin-top"></div><div ref="container"><div ref="border"></div><div ref="input-container"><div expr157="expr157" ref="label"> </div><input expr158="expr158"/><div expr159="expr159" style="position: absolute; top: 0; left: 0; bottom: 0; right: 0;"></div></div><div ref="basic-underline"></div><div ref="underline"></div></div><div style="height: 1.25em; margin-bottom: -1.25em; pointer-events: none;"><div expr160="expr160" style="font-size: .75em;"> </div></div>',
      [{
        'redundantAttribute': 'expr157',
        'selector': '[expr157]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return scope.props.label;
          }
        }]
      }, {
        'redundantAttribute': 'expr158',
        'selector': '[expr158]',

        'expressions': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'type',

          'evaluate': function(scope) {
            return scope.getType();
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'name',

          'evaluate': function(scope) {
            return scope.props.name;
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'placeholder',

          'evaluate': function(scope) {
            return scope.props.placeholder;
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'disabled',

          'evaluate': function(scope) {
            return scope.isDisabled() && "true";
          }
        }]
      }, {
        'type': bindingTypes.IF,

        'evaluate': function(scope) {
          return scope.isDisabled();
        },

        'redundantAttribute': 'expr159',
        'selector': '[expr159]',

        'template': template(' ', [{
          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 0,

            'evaluate': function(scope) {
              return scope.props.value;
            }
          }]
        }])
      }, {
        'redundantAttribute': 'expr160',
        'selector': '[expr160]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return scope.props.helperText;
          }
        }]
      }]
    );
  },

  'name': 'rm-textfield'
};

export default rmTextfield;

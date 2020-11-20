var TextareaComponent = {
  'css': `rm-textarea,[is="rm-textarea"]{ display: block; font: message-box; font-size: 16px; } rm-textarea [ref=container],[is="rm-textarea"] [ref=container]{ display: block; position: relative; cursor: text; font-size: inherit; box-sizing: border-box; padding: 1em 0 .5em 0; background: rgb(245, 245, 245); background: rgb(var(--color-background, 245, 245, 245)); } .rm-black-surface rm-textarea [ref=container],.rm-black-surface [is="rm-textarea"] [ref=container]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); } .rm-dark-surface rm-textarea [ref=container],.rm-dark-surface [is="rm-textarea"] [ref=container]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); } .rm-light-surface rm-textarea [ref=container],.rm-light-surface [is="rm-textarea"] [ref=container]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); } .rm-white-surface rm-textarea [ref=container],.rm-white-surface [is="rm-textarea"] [ref=container]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); } rm-textarea [ref=mirror],[is="rm-textarea"] [ref=mirror]{ word-break: break-word; visibility: hidden; } rm-textarea[variant="filled"] [ref=container],[is="rm-textarea"][variant="filled"] [ref=container]{ padding: 1.25em 12px 1em 12px; } rm-textarea[variant="filled"] [ref=container],[is="rm-textarea"][variant="filled"] [ref=container]{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); border-radius: 4px 4px 0 0; } .rm-black-surface rm-textarea[variant="filled"] [ref=container],.rm-black-surface [is="rm-textarea"][variant="filled"] [ref=container]{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-dark-surface rm-textarea[variant="filled"] [ref=container],.rm-dark-surface [is="rm-textarea"][variant="filled"] [ref=container]{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-light-surface rm-textarea[variant="filled"] [ref=container],.rm-light-surface [is="rm-textarea"][variant="filled"] [ref=container]{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-white-surface rm-textarea[variant="filled"] [ref=container],.rm-white-surface [is="rm-textarea"][variant="filled"] [ref=container]{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); } rm-textarea[variant="outlined"] [ref=container],[is="rm-textarea"][variant="outlined"] [ref=container]{ padding: .5em 12px; transition: border-color linear 150ms; border-radius: 4px; } rm-textarea[variant="outlined"] [ref=container] [ref=border],[is="rm-textarea"][variant="outlined"] [ref=container] [ref=border]{ border: rgba(0, 0, 0, .42) 1px solid; border: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)) 1px solid; border-radius: inherit; transition: border-width 150ms linear; position: absolute; top: 0; right: 0; bottom: 0; left: 0; } .rm-black-surface rm-textarea[variant="outlined"] [ref=container] [ref=border],.rm-black-surface [is="rm-textarea"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-textarea[variant="outlined"] [ref=container] [ref=border],.rm-dark-surface [is="rm-textarea"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-textarea[variant="outlined"] [ref=container] [ref=border],.rm-light-surface [is="rm-textarea"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-textarea[variant="outlined"] [ref=container] [ref=border],.rm-white-surface [is="rm-textarea"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-textarea[variant="outlined"] [ref=container].rm-focused [ref=border],[is="rm-textarea"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary, 139, 0, 139)) 2px solid; } .rm-black-surface rm-textarea[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-black-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-black, 238, 130, 238)) 2px solid; } .rm-dark-surface rm-textarea[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-dark-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-dark, 238, 130, 238)) 2px solid; } .rm-light-surface rm-textarea[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-light-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-light, 139, 0, 139)) 2px solid; } .rm-white-surface rm-textarea[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-white-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-white, 139, 0, 139)) 2px solid; } rm-textarea[variant="outlined"] [ref=container].rm-focused,[is="rm-textarea"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-textarea[variant="outlined"] [ref=container].rm-focused,.rm-black-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textarea[variant="outlined"] [ref=container].rm-focused,.rm-dark-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textarea[variant="outlined"] [ref=container].rm-focused,.rm-light-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textarea[variant="outlined"] [ref=container].rm-focused,.rm-white-surface [is="rm-textarea"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textarea textarea,[is="rm-textarea"] textarea{ width: 100%; border: none; font-size: inherit; font-family: inherit; position: relative; background: transparent; padding: 0; position: absolute; top: 0; height: 100%; resize: none; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; color: rgb(0, 0, 0); color: rgb(var(--color-on-background, 0, 0, 0)); } .rm-black-surface rm-textarea textarea,.rm-black-surface [is="rm-textarea"] textarea{ color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } .rm-dark-surface rm-textarea textarea,.rm-dark-surface [is="rm-textarea"] textarea{ color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } .rm-light-surface rm-textarea textarea,.rm-light-surface [is="rm-textarea"] textarea{ color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } .rm-white-surface rm-textarea textarea,.rm-white-surface [is="rm-textarea"] textarea{ color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } rm-textarea textarea::placeholder,[is="rm-textarea"] textarea::placeholder{ color: transparent; } rm-textarea [ref=label],[is="rm-textarea"] [ref=label]{ position: absolute; top: 0; left: -4px; font-size: inherit; transition: transform linear 150ms, color linear 150ms; transform-origin: 6px bottom; padding: 0 8px 0 4px; color: rgba(0, 0, 0, .6); -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; } .rm-black-surface rm-textarea [ref=label],.rm-black-surface [is="rm-textarea"] [ref=label]{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-dark-surface rm-textarea [ref=label],.rm-dark-surface [is="rm-textarea"] [ref=label]{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-light-surface rm-textarea [ref=label],.rm-light-surface [is="rm-textarea"] [ref=label]{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-primary, .6)); } .rm-white-surface rm-textarea [ref=label],.rm-white-surface [is="rm-textarea"] [ref=label]{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-primary, .6)); } rm-textarea [ref=container].rm-activated [ref=label],[is="rm-textarea"] [ref=container].rm-activated [ref=label],rm-textarea [ref=container].rm-focused [ref=label],[is="rm-textarea"] [ref=container].rm-focused [ref=label]{ transform: translateY(-100%) scale(.761905); } rm-textarea [ref=container].rm-focused [ref=label],[is="rm-textarea"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-textarea [ref=container].rm-focused [ref=label],.rm-black-surface [is="rm-textarea"] [ref=container].rm-focused [ref=label]{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textarea [ref=container].rm-focused [ref=label],.rm-dark-surface [is="rm-textarea"] [ref=container].rm-focused [ref=label]{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textarea [ref=container].rm-focused [ref=label],.rm-light-surface [is="rm-textarea"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textarea [ref=container].rm-focused [ref=label],.rm-white-surface [is="rm-textarea"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textarea [ref=basic-underline],[is="rm-textarea"] [ref=basic-underline]{ position: absolute; background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); bottom: 0; left: 0; right: 0; height: 1px; } .rm-black-surface rm-textarea [ref=basic-underline],.rm-black-surface [is="rm-textarea"] [ref=basic-underline]{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-textarea [ref=basic-underline],.rm-dark-surface [is="rm-textarea"] [ref=basic-underline]{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-textarea [ref=basic-underline],.rm-light-surface [is="rm-textarea"] [ref=basic-underline]{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-textarea [ref=basic-underline],.rm-white-surface [is="rm-textarea"] [ref=basic-underline]{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-textarea [ref=underline],[is="rm-textarea"] [ref=underline]{ position: absolute; bottom: 0px; left: 0; right: 0; height: 2px; transform: scaleX(0); transform-origin: center; transition: transform linear 150ms, opacity linear 150ms; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-textarea [ref=underline],.rm-black-surface [is="rm-textarea"] [ref=underline]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textarea [ref=underline],.rm-dark-surface [is="rm-textarea"] [ref=underline]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textarea [ref=underline],.rm-light-surface [is="rm-textarea"] [ref=underline]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textarea [ref=underline],.rm-white-surface [is="rm-textarea"] [ref=underline]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textarea [ref=container].rm-focused [ref=underline],[is="rm-textarea"] [ref=container].rm-focused [ref=underline]{ transform: scale(1) !important; opacity: 1 !important; } rm-textarea [ref=container].rm-focused [ref=underline],[is="rm-textarea"] [ref=container].rm-focused [ref=underline]{ transform: scaleX(1); } rm-textarea[variant="outlined"] [ref="textarea-container"],[is="rm-textarea"][variant="outlined"] [ref="textarea-container"],rm-textarea[variant="outlined"] [ref=label],[is="rm-textarea"][variant="outlined"] [ref=label]{ background: inherit; } rm-textarea[variant="outlined"] [ref=container] [ref=underline],[is="rm-textarea"][variant="outlined"] [ref=container] [ref=underline],rm-textarea[variant="outlined"] [ref=container] [ref=basic-underline],[is="rm-textarea"][variant="outlined"] [ref=container] [ref=basic-underline]{ display: none; } rm-textarea [ref=container].rm-focused textarea::placeholder,[is="rm-textarea"] [ref=container].rm-focused textarea::placeholder{ color: initial; } rm-textarea [ref="textarea-container"],[is="rm-textarea"] [ref="textarea-container"]{ position: relative; } rm-textarea [ref="outlined-margin-top"],[is="rm-textarea"] [ref="outlined-margin-top"]{ height: 0; } rm-textarea[variant="outlined"] [ref="outlined-margin-top"],[is="rm-textarea"][variant="outlined"] [ref="outlined-margin-top"]{ height: 8px; }`,

  'exports': {
    onMounted: function () {
        let textarea = this.root.querySelector("textarea");
        let container = this.root.querySelector("[ref=container]");
        let mirror = this.root.querySelector("[ref=mirror]");

        textarea.addEventListener("input", () => {
            // set mirror text same as the textarea
            mirror.innerText = mirror.textContent = textarea.value.replace(/^\h*$/, "\u00A0").replace(/\n$/, "\n\u00A0");
            if (textarea.value) {
                container.classList.add("rm-activated");
            } else {
                container.classList.remove("rm-activated");
            }
        });

        let wasTextareaFocused = false;
        textarea.addEventListener("focus", () => {
            wasTextareaFocused = true;
            pointerdownOnTextarea = false;
            container.classList.add("rm-focused");
        });

        let pointerdownOnTextarea = false;
        textarea.addEventListener("blur", () => {
            container.classList.remove("rm-focused");
            if (pointerdownOnTextarea) {
                setTimeout(() => {
                    if (!this.root.isConnected) {
                        return;
                    }
                    textarea.focus();
                }, 0);
            } else {
                wasTextareaFocused = false;
            }
        });
        container.addEventListener("pointerdown", (event) => {
            pointerdownOnTextarea = event.target !== textarea;
            if (wasTextareaFocused) {
                textarea.focus();
            }
        });
        container.addEventListener("click", () => {
            if (wasTextareaFocused) {
                return;
            }
            textarea.focus();
        });

        Object.defineProperty(this.root, "value", {
            get() {
                return textarea.value;
            },
            set(value) {
                // set mirror text same as the textarea
                mirror.innerText = mirror.textContent = (textarea.value = value = value != null ? value.toString() : "")
                    .replace(/^\h*$/, "\u00A0").replace(/\n$/, "\n\u00A0")
                ;
                if (value) {
                    container.classList.add("rm-activated");
                } else {
                    container.classList.remove("rm-activated");
                }
            }
        });

        this.root.focus = () => {
            textarea.focus();
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

    isDisabled() {
        return typeof this.props.disabled === "string" ?
            this.props.disabled !== "false" :
            this.props.disabled == null ? false : !!this.props.disabled;
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div ref="outlined-margin-top"></div><div ref="container"><div ref="border"></div><div ref="textarea-container"><div ref="mirror">&nbsp;</div><div expr135="expr135" ref="label"> </div><textarea expr136="expr136"></textarea></div><div ref="basic-underline"></div><div ref="underline"></div></div><div style="height: 1.25em;"><div expr137="expr137" style="font-size: .75em;"> </div></div>',
      [{
        'redundantAttribute': 'expr135',
        'selector': '[expr135]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return scope.props.label;
          }
        }]
      }, {
        'redundantAttribute': 'expr136',
        'selector': '[expr136]',

        'expressions': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'placeholder',

          'evaluate': function(scope) {
            return scope.props.placeholder;
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'name',

          'evaluate': function(scope) {
            return scope.props.name;
          }
        }]
      }, {
        'redundantAttribute': 'expr137',
        'selector': '[expr137]',

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

  'name': 'rm-textarea'
};

export default TextareaComponent;

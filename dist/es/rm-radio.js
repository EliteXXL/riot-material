import { ripple } from './ripple';

var rmRadio = {
  'css': `rm-radio,[is="rm-radio"]{ position: relative; font: message-box; font-size: 16px; cursor: pointer; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; display: inline-block; margin-right: 8px; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; } rm-radio label,[is="rm-radio"] label{ cursor: inherit; display: inline-block; } rm-radio [ref="circle"],[is="rm-radio"] [ref="circle"]{ height: 1.25em; width: 1.25em; position: relative; display: inline-block; vertical-align: middle; box-sizing: border-box; border-radius: 50%; background: transparent; margin: 0.25em .5em 0.25em 0; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; color: rgb(0, 0, 255); color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-radio [ref="circle"],.rm-black-surface [is="rm-radio"] [ref="circle"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-radio [ref="circle"],.rm-dark-surface [is="rm-radio"] [ref="circle"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-radio [ref="circle"],.rm-light-surface [is="rm-radio"] [ref="circle"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-radio [ref="circle"],.rm-white-surface [is="rm-radio"] [ref="circle"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-radio [ref="border"],[is="rm-radio"] [ref="border"]{ transition: border-color linear 100ms; border: 0.125em solid rgba(0, 0, 0, .42); border: 0.125em solid rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); height: 100%; width: 100%; box-sizing: border-box; border-radius: inherit; } .rm-black-surface rm-radio [ref="border"],.rm-black-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-radio [ref="border"],.rm-dark-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-radio [ref="border"],.rm-light-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-radio [ref="border"],.rm-white-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-radio [ref="radio-circle"],[is="rm-radio"] [ref="radio-circle"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent, 0, 0, 255)); position: absolute; top: 0.3125em; bottom: 0.3125em; right: 0.3125em; left: 0.3125em; text-align: center; transition: transform linear 100ms; transform: scale(0); border-radius: inherit; } .rm-black-surface rm-radio [ref="radio-circle"],.rm-black-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-radio [ref="radio-circle"],.rm-dark-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-radio [ref="radio-circle"],.rm-light-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-radio [ref="radio-circle"],.rm-white-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-radio.rm-checked [ref="radio-circle"],[is="rm-radio"].rm-checked [ref="radio-circle"]{ transform: scale(1); } rm-radio.rm-checked [ref="border"],[is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(0, 0, 255); border-color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-radio.rm-checked [ref="border"],.rm-black-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(30, 144, 255); border-color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-radio.rm-checked [ref="border"],.rm-dark-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(30, 144, 255); border-color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-radio.rm-checked [ref="border"],.rm-light-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(0, 0, 255); border-color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-radio.rm-checked [ref="border"],.rm-white-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(0, 0, 255); border-color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-radio input,[is="rm-radio"] input{ border: 0; position: absolute; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; outline: 0; -webkit-appearance: none; -moz-appearance: none; }`,

  'exports': {
    onMounted() {
        let circle = this.root.querySelector("[ref=circle]");
        let input = this.root.querySelector("input");
        let circleRipple = ripple(
            circle,
            {
                centered: true,
                unbounded: true,
                radius: 16,
                unboundedFocus: true,
                focusTarget: input,
                color: "currentColor"
            }
        );
        let refreshUI = () => {
            if (input.checked) {
                this.root.classList.add("rm-checked");
            } else {
                this.root.classList.remove("rm-checked");
            }
        };
        let refresh = () => {
            refreshUI();
            let name = this.getName();
            if (!name) {
                return;
            }
            let parent = this.root;
            while (parent = parent.parentElement) {
                if (parent.tagName === "FORM") {
                    break;
                }
            }
            if (!parent) {
                parent = document;
            }
            let selector = "input[type=radio][name=\"" + name + "\"]";
            let invertedMask = parent.querySelectorAll(":scope form " + selector);
            Array.prototype.forEach.call(
                parent.querySelectorAll(selector),
                input => {
                    if (Array.prototype.some.call(invertedMask, masked => {
                        return masked === input;
                    })) {
                        return;
                    }
                    input.dispatchEvent(new Event("unchecked"));
                }
            );
        };
        input.addEventListener("change", refresh);
        input.addEventListener("unchecked", refreshUI);
        refresh();
    },

    getName() {
        let name = this.props.name;
        return typeof name === "string" && !name.match(/^\s*$/) ? name : null;
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<label><input expr137="expr137" type="radio" tabindex="0"/><div ref="circle"><div ref="border"></div><div ref="radio-circle"></div></div><div expr138="expr138" style="vertical-align: middle; display: inline-block;"> </div></label>',
      [{
        'redundantAttribute': 'expr137',
        'selector': '[expr137]',

        'expressions': [{
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
        }]
      }, {
        'redundantAttribute': 'expr138',
        'selector': '[expr138]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return scope.props.label;
          }
        }]
      }]
    );
  },

  'name': 'rm-radio'
};

export default rmRadio;

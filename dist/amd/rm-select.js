define(function () { 'use strict';

    var rmSelect = {
      'css': `rm-select,[is="rm-select"]{ display: block; font: message-box; font-size: 16px; } rm-select select,[is="rm-select"] select{ border: 0; position: absolute; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; outline: 0; -webkit-appearance: none; -moz-appearance: none; } rm-select [ref=container],[is="rm-select"] [ref=container]{ display: block; position: relative; background: rgb(245, 245, 245); background: rgb(var(--color-background, 245, 245, 245)); cursor: text; font-size: inherit; box-sizing: border-box; padding: 1em 0 .5em 0; } .rm-black-surface rm-select [ref=container],.rm-black-surface [is="rm-select"] [ref=container]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); } .rm-dark-surface rm-select [ref=container],.rm-dark-surface [is="rm-select"] [ref=container]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); } .rm-light-surface rm-select [ref=container],.rm-light-surface [is="rm-select"] [ref=container]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); } .rm-white-surface rm-select [ref=container],.rm-white-surface [is="rm-select"] [ref=container]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); } rm-select[variant="filled"] [ref=container],[is="rm-select"][variant="filled"] [ref=container]{ padding: 1.25em 12px 1em 12px; background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); border-radius: 4px 4px 0 0; } .rm-black-surface rm-select[variant="filled"] [ref=container],.rm-black-surface [is="rm-select"][variant="filled"] [ref=container]{ background: rgba(255, 255, 255, 0.12); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-dark-surface rm-select[variant="filled"] [ref=container],.rm-dark-surface [is="rm-select"][variant="filled"] [ref=container]{ background: rgba(255, 255, 255, 0.12); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-light-surface rm-select[variant="filled"] [ref=container],.rm-light-surface [is="rm-select"][variant="filled"] [ref=container]{ background: rgba(0, 0, 0, 0.12); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-white-surface rm-select[variant="filled"] [ref=container],.rm-white-surface [is="rm-select"][variant="filled"] [ref=container]{ background: rgba(0, 0, 0, 0.12); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); } rm-select[variant="outlined"] [ref=container],[is="rm-select"][variant="outlined"] [ref=container]{ padding: 1em 12px; border-radius: 4px; } rm-select[variant="outlined"] [ref=container] [ref=border],[is="rm-select"][variant="outlined"] [ref=container] [ref=border]{ border: rgba(0, 0, 0, .42) 1px solid; border: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)) 1px solid; border-radius: inherit; transition: border 150ms linear; position: absolute; top: 0; right: 0; bottom: 0; left: 0; } .rm-black-surface rm-select[variant="outlined"] [ref=container] [ref=border],.rm-black-surface [is="rm-select"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(255, 255, 255, 0.42); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-select[variant="outlined"] [ref=container] [ref=border],.rm-dark-surface [is="rm-select"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(255, 255, 255, 0.42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-select[variant="outlined"] [ref=container] [ref=border],.rm-light-surface [is="rm-select"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(0, 0, 0, 0.42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-select[variant="outlined"] [ref=container] [ref=border],.rm-white-surface [is="rm-select"][variant="outlined"] [ref=container] [ref=border]{ border-color: rgba(0, 0, 0, 0.42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-select[variant="outlined"] [ref=container].rm-focused [ref=border],[is="rm-select"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary, 139, 0, 139)) 2px solid; } .rm-black-surface rm-select[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-black-surface [is="rm-select"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-black, 238, 130, 238)) 2px solid; } .rm-dark-surface rm-select[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-dark-surface [is="rm-select"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-dark, 238, 130, 238)) 2px solid; } .rm-light-surface rm-select[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-light-surface [is="rm-select"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-light, 139, 0, 139)) 2px solid; } .rm-white-surface rm-select[variant="outlined"] [ref=container].rm-focused [ref=border],.rm-white-surface [is="rm-select"][variant="outlined"] [ref=container].rm-focused [ref=border]{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-white, 139, 0, 139)) 2px solid; } rm-select:not([variant="outlined"]) [ref=container],[is="rm-select"]:not([variant="outlined"]) [ref=container]{ border: none !important; } rm-select[variant="outlined"] [ref=container].rm-focused,[is="rm-select"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-select[variant="outlined"] [ref=container].rm-focused,.rm-black-surface [is="rm-select"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-select[variant="outlined"] [ref=container].rm-focused,.rm-dark-surface [is="rm-select"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-select[variant="outlined"] [ref=container].rm-focused,.rm-light-surface [is="rm-select"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-select[variant="outlined"] [ref=container].rm-focused,.rm-white-surface [is="rm-select"][variant="outlined"] [ref=container].rm-focused{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-select [ref=input],[is="rm-select"] [ref=input]{ width: 0; border: none; font-size: inherit; font-family: inherit; position: relative; height: 100%; background: transparent; padding: 0; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; } rm-select [ref=value],[is="rm-select"] [ref=value]{ display: inline-block; } rm-select[filterable]:not([filterable="false"]) [ref=input],[is="rm-select"][filterable]:not([filterable="false"]) [ref=input]{ width: 100%; padding-right: 26px; color: inherit; box-sizing: border-box; } rm-select[filterable]:not([filterable="false"]) [ref=value],[is="rm-select"][filterable]:not([filterable="false"]) [ref=value]{ display: none; } rm-select [ref=label],[is="rm-select"] [ref=label]{ position: absolute; top: 0; left: -4px; font-size: inherit; transition: transform linear 150ms, color linear 150ms; transform-origin: 6px bottom; padding: 0 8px 0 4px; color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-primary, .6)); -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; } .rm-black-surface rm-select [ref=label],.rm-black-surface [is="rm-select"] [ref=label]{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-dark-surface rm-select [ref=label],.rm-dark-surface [is="rm-select"] [ref=label]{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-light-surface rm-select [ref=label],.rm-light-surface [is="rm-select"] [ref=label]{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-primary, .6)); } .rm-white-surface rm-select [ref=label],.rm-white-surface [is="rm-select"] [ref=label]{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-primary, .6)); } rm-select [ref=container].rm-activated [ref=label],[is="rm-select"] [ref=container].rm-activated [ref=label],rm-select [ref=container].rm-label-should-float [ref=label],[is="rm-select"] [ref=container].rm-label-should-float [ref=label]{ transform: translateY(-100%) scale(.761905); } rm-select[variant="outlined"] [ref=container].rm-activated [ref=label],[is="rm-select"][variant="outlined"] [ref=container].rm-activated [ref=label],rm-select[variant="outlined"] [ref=container].rm-label-should-float [ref=label],[is="rm-select"][variant="outlined"] [ref=container].rm-label-should-float [ref=label]{ transform: translateY(-136%) scale(.761905); } rm-select [ref=container].rm-focused [ref=label],[is="rm-select"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-select [ref=container].rm-focused [ref=label],.rm-black-surface [is="rm-select"] [ref=container].rm-focused [ref=label]{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-select [ref=container].rm-focused [ref=label],.rm-dark-surface [is="rm-select"] [ref=container].rm-focused [ref=label]{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-select [ref=container].rm-focused [ref=label],.rm-light-surface [is="rm-select"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-select [ref=container].rm-focused [ref=label],.rm-white-surface [is="rm-select"] [ref=container].rm-focused [ref=label]{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-select [ref=basic-underline],[is="rm-select"] [ref=basic-underline]{ position: absolute; background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); bottom: 0; left: 0; right: 0; height: 1px; } .rm-black-surface rm-select [ref=basic-underline],.rm-black-surface [is="rm-select"] [ref=basic-underline]{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-select [ref=basic-underline],.rm-dark-surface [is="rm-select"] [ref=basic-underline]{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-select [ref=basic-underline],.rm-light-surface [is="rm-select"] [ref=basic-underline]{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-select [ref=basic-underline],.rm-white-surface [is="rm-select"] [ref=basic-underline]{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-select [ref=underline],[is="rm-select"] [ref=underline]{ position: absolute; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); bottom: 0px; left: 0; right: 0; height: 2px; transform: scaleX(0); transform-origin: center; transition: transform linear 150ms, opacity linear 150ms; } .rm-black-surface rm-select [ref=underline],.rm-black-surface [is="rm-select"] [ref=underline]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-select [ref=underline],.rm-dark-surface [is="rm-select"] [ref=underline]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-select [ref=underline],.rm-light-surface [is="rm-select"] [ref=underline]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-select [ref=underline],.rm-white-surface [is="rm-select"] [ref=underline]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-select [ref=container].rm-focused [ref=underline],[is="rm-select"] [ref=container].rm-focused [ref=underline]{ transform: scale(1) !important; opacity: 1 !important; } rm-select[variant="outlined"] [ref="input-container"],[is="rm-select"][variant="outlined"] [ref="input-container"],rm-select[variant="outlined"] [ref=label],[is="rm-select"][variant="outlined"] [ref=label]{ background: inherit; } rm-select[variant="outlined"] [ref=container] [ref=underline],[is="rm-select"][variant="outlined"] [ref=container] [ref=underline],rm-select[variant="outlined"] [ref=container] [ref=basic-underline],[is="rm-select"][variant="outlined"] [ref=container] [ref=basic-underline]{ display: none; } rm-select input::placeholder,[is="rm-select"] input::placeholder{ color: transparent; } rm-select [ref=container].rm-focused input::placeholder,[is="rm-select"] [ref=container].rm-focused input::placeholder,rm-select [ref=container].rm-label-should-float input::placeholder,[is="rm-select"] [ref=container].rm-label-should-float input::placeholder{ color: initial; } rm-select [ref="input-container"],[is="rm-select"] [ref="input-container"]{ position: relative; height: 1.25em; } rm-select [ref="outlined-margin-top"],[is="rm-select"] [ref="outlined-margin-top"]{ height: 0; } rm-select[variant="outlined"] [ref="outlined-margin-top"],[is="rm-select"][variant="outlined"] [ref="outlined-margin-top"]{ height: 8px; } rm-select [ref=raw_options],[is="rm-select"] [ref=raw_options]{ display: none; } rm-select [ref=menu],[is="rm-select"] [ref=menu]{ overflow-y: auto; position: fixed; background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); z-index: 100; display: none; padding: 8px 0 0; max-height: 12em; } rm-select [ref=menu]::after,[is="rm-select"] [ref=menu]::after{ content: ""; display: block; height: 8px; } .rm-black-surface rm-select [ref=menu],.rm-black-surface [is="rm-select"] [ref=menu]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); border-style: solid; border-width: 0 1px 1px; border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-black, 255, 255, 255)); } .rm-dark-surface rm-select [ref=menu],.rm-dark-surface [is="rm-select"] [ref=menu]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); border-style: solid; border-width: 0 1px 1px; border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-dark, 255, 255, 255)); } .rm-light-surface rm-select [ref=menu],.rm-light-surface [is="rm-select"] [ref=menu]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } .rm-white-surface rm-select [ref=menu],.rm-white-surface [is="rm-select"] [ref=menu]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } rm-select [ref=container].rm-selecting [ref=menu],[is="rm-select"] [ref=container].rm-selecting [ref=menu]{ display: block; } rm-select [ref=menu] div,[is="rm-select"] [ref=menu] div{ padding: 12px; cursor: pointer; user-select: none; position: relative; width: 100%; box-sizing: border-box; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } rm-select [ref=menu] div.rm-highlighted::after,[is="rm-select"] [ref=menu] div.rm-highlighted::after,rm-select [ref=menu] div.rm-selected::before,[is="rm-select"] [ref=menu] div.rm-selected::before{ background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); opacity: 0.1; position: absolute; content: ''; top: 0; left: 0; bottom: 0; right: 0; z-index: -1; } rm-select [ref=menu] div.rm-selected::before,[is="rm-select"] [ref=menu] div.rm-selected::before{ opacity: 0.4; } .rm-black-surface rm-select [ref=menu] div.rm-highlighted::after,.rm-black-surface [is="rm-select"] [ref=menu] div.rm-highlighted::after,.rm-black-surface rm-select [ref=menu] div.rm-selected::before,.rm-black-surface [is="rm-select"] [ref=menu] div.rm-selected::before{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-select [ref=menu] div.rm-highlighted::after,.rm-dark-surface [is="rm-select"] [ref=menu] div.rm-highlighted::after,.rm-dark-surface rm-select [ref=menu] div.rm-selected::before,.rm-dark-surface [is="rm-select"] [ref=menu] div.rm-selected::before{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-select [ref=menu] div.rm-highlighted::after,.rm-light-surface [is="rm-select"] [ref=menu] div.rm-highlighted::after,.rm-light-surface rm-select [ref=menu] div.rm-selected::before,.rm-light-surface [is="rm-select"] [ref=menu] div.rm-selected::before{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-select [ref=menu] div.rm-highlighted::after,.rm-white-surface [is="rm-select"] [ref=menu] div.rm-highlighted::after,.rm-white-surface rm-select [ref=menu] div.rm-selected::before,.rm-white-surface [is="rm-select"] [ref=menu] div.rm-selected::before{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-select [ref=arrow],[is="rm-select"] [ref=arrow]{ position: absolute; width: 0; height: 0; border-width: 5px 5px 0; border-color: currentColor transparent; border-style: solid; right: 8px; top: 50%; transform: translate(0, -50%) rotate(0deg); transition: transform ease-in-out 250ms; } rm-select [ref=container].rm-selecting [ref=arrow],[is="rm-select"] [ref=container].rm-selecting [ref=arrow]{ transform: translate(0, -50%) rotate(180deg); }`,

      'exports': {
        state: {
            filter: null,
            value: "",
            selecting: false
        },

        setValue(value) {
            this.update({ value: value || "",  filter: null });
        },

        getValue() {
            if (this.state.filter != null) {
                return "";
            }
            return this.state.value;
        },

        _highlighted: null,

        _highlight(value) {
            this._highlighted = null;
            Array.prototype.forEach.call(this.root.querySelector("[ref=menu]").children, child => {
                if (value != null && child.getAttribute("value") === value && !this._highlighted) {
                    child.classList.add("rm-highlighted");
                    this._highlighted = child;
                } else {
                    child.classList.remove("rm-highlighted");
                }
            });
        },

        getValueFromTarget(target) {
            while (target && target.getAttribute("ref") !== "option") {
                target = target.parentElement;
            }
            if (!target) {
                return "";
            }
            return target.getAttribute("value") || "";
        },

        _onoptionpointerenter(event) {
            this._highlight(this.getValueFromTarget(event.target));
        },

        _onoptionpointerleave(event) {
            this._highlight(null);
        },

        _onoptionclick(event) {
            let value = this.getValueFromTarget(event.target);
            let input = this.root.querySelector("[ref=input]");

            let beforechangeEvent = new CustomEvent("beforechange", { detail: { newValue: value } });
            this.root.dispatchEvent(beforechangeEvent);
            if (!beforechangeEvent.defaultPrevented) {
                this.state.selecting = false;
                if (value && this.getValue() === value) {
                    this.update();
                } else {
                    this.setValue(value);
                    let newValue = this.getValue();
                    if (newValue === value) {
                        this.root.dispatchEvent(new Event("change", { bubbles: true }));
                    }
                    if (this.props.filterable != null && this.props.filterable !== "false") {
                        let menu = this.root.querySelector("[ref=menu]");
                        let elem = menu.querySelector("[value=\"" + newValue + "\"]");
                        if (!elem) {
                            elem = menu.querySelector("[value=\"\"]");
                        }
                        let label = elem.getAttribute("label");
                        if (label == null) {
                            label = elem.innerText;
                        }
                        if (input.value = label) {
                            this.root.querySelector("[ref=container]").classList.add("rm-activated");
                        } else {
                            this.root.querySelector("[ref=container]").classList.remove("rm-activated");
                        }
                    }
                }
            }

            input.focus();
        },

        _onchange: null,

        onMounted() {
            Object.defineProperty(this.root, "value", {
                get: this.getValue.bind(this),
                set: this.setValue.bind(this)
            });

            Object.defineProperty(this.root, "filter", {
                get: () => {
                    if (this.state.filter == null) {
                        return "";
                    }
                    return this.state.filter;
                },
                set: (filter) => {
                    filter = filter.toString();
                    this.update({ filter });
                }
            });

            Object.defineProperty(this.root, "label", {
                get: () => {
                    return this.state.filter == null ? input.value : ""
                }
            });

            let input = this.root.querySelector("[ref=input]");

            this.root.focus = () => {
                input.focus();
            };

            let formElement = this.root.querySelector("[ref='form-element']");
            window.addEventListener("change", this._onchange = event => {
                if (event.target === input /* || event.target === formElement */) {
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                }
            }, true);

            Object.defineProperty(formElement, "label", {
                get: () => {
                    return this.root.label;
                }
            });

            Object.defineProperty(formElement, "value", {
                get: this.getValue.bind(this),
                set: this.setValue.bind(this)
            });
            let raw_options = this.root.querySelector("[ref=raw_options]");
            let menu = this.root.querySelector("[ref=menu]");
            Object.defineProperty(this.root, "availableOptions", {
                get: () => {
                    let options = [];
                    menu.style.display = "block";
                    Array.prototype.forEach.call(menu.children, (child, index) => {
                        if (--index < 0) {
                            return;
                        }
                        let rect = child.getBoundingClientRect();
                        if (rect.height === 0 && rect.width === 0) {
                            return;
                        }
                        options.push(raw_options.children[index]);
                    });
                    menu.style.display = "";
                    return options;
                }
            });
            let container = this.root.querySelector("[ref=container]");
            let frameRequest = null;
            let updatePosition = () => {
                if (!this.state.selecting || frameRequest != null) {
                    return;
                }
                let rect = container.getBoundingClientRect();
                menu.style.left = rect.left + "px";
                menu.style.width = rect.width + "px";
                let menuRect = menu.getBoundingClientRect();
                if (document.documentElement.clientHeight - rect.bottom < menuRect.height) {
                    menu.style.top = rect.top - menuRect.height + "px";
                } else {
                    menu.style.top = rect.bottom + "px";
                }
                frameRequest = window.requestAnimationFrame(() => {
                    frameRequest = null;
                    updatePosition();
                });
            };
            let open = () => {
                if (this.state.selecting) {
                    return;
                }
                this.update({
                    selecting: true
                });
                this._highlight(this.getValue());
                updatePosition();
                this.root.dispatchEvent(new Event("menuopen"));
            };
            let keyHandled = false;
            input.addEventListener("keydown", event => {
                switch (event.keyCode) {
                    case 38: {
                        keyHandled = true;
                        if (this.state.selecting) {
                            if (this._highlighted) {
                                let previous = this._highlighted.previousElementSibling;
                                while (previous && previous.style.display === "none") {
                                    previous = previous.previousElementSibling;
                                }
                                if (previous) {
                                    this._highlight(previous.getAttribute("value"));
                                }
                            } else if (menu.children.length > 0) {
                                this._highlight(this.getValue());
                            }
                        } else {
                            open();
                        }
                        break;
                    }
                    case 40: {
                        keyHandled = true;
                        if (this.state.selecting) {
                            if (this._highlighted) {
                                let next = this._highlighted.nextElementSibling;
                                while (next && next.style.display === "none") {
                                    next = next.nextElementSibling;
                                }
                                if (next) {
                                    this._highlight(next.getAttribute("value"));
                                }
                            } else if (menu.children.length > 0) {
                                this._highlight(this.getValue());
                            }
                        } else {
                            open();
                        }
                        break;
                    }
                    case 13: {
                        keyHandled = true;
                        if (this.state.selecting) {
                            if (this._highlighted) {
                                this._highlighted.click();
                            } else {
                                this.update({
                                    selecting: false
                                });
                            }
                        } else {
                            open();
                        }
                        break;
                    }
                    case 27: {
                        keyHandled = true;
                        if (this.state.selecting) {
                            this.update({
                                selecting: false
                            });
                        }
                        break;
                    }
                }
                if (keyHandled) {
                    event.preventDefault();
                }
                keyHandled = false;
            });

            input.addEventListener("input", () => {
                if (this.props.filterable == null || this.props.filterable === "false") {
                    return;
                }
                this.update({
                    selecting: true,
                    filter: input.value
                });
            });
            input.addEventListener("focus", () => {
                pointerdownOnTextfield = false;
                container.classList.add("rm-focused");
            });

            let pointerdownOnTextfield = false;
            input.addEventListener("blur", () => {
                container.classList.remove("rm-focused");
                if (pointerdownOnTextfield) {
                    setTimeout(() => {
                        if (!this.root.isConnected) {
                            return;
                        }
                        input.focus();
                    }, 0);
                }
                setTimeout(() => {
                    if (!this.root.isConnected) {
                        return;
                    }
                    if (document.activeElement !== input) {
                        this.update({
                            selecting: false,
                            filter: null
                        });
                    }
                }, 0);
            });

            let addedWindowListener = false;
            let pointerInContainer = false;

            container.addEventListener("pointerdown", (event) => {
                pointerInContainer = true;
                setTimeout(() => {
                    if (!this.root.isConnected) {
                        return;
                    }
                    pointerInContainer = false;
                    pointerdownOnTextfield = event.target !== input;
                }, 0);
            });
            container.addEventListener("click", (event) => {
                open();
                if (!addedWindowListener) {
                    let listener = event => {
                        if (!pointerInContainer) {
                            this.update({
                                selecting: false
                            });
                            window.removeEventListener("pointerdown", listener);
                            addedWindowListener = false;
                        } else {
                            let onclick = () => {
                                this.update({
                                    selecting: false
                                });
                                window.removeEventListener("click", onclick);
                                window.removeEventListener("pointerdown", listener);
                                addedWindowListener = false;
                            };
                            window.addEventListener("click", onclick);
                        }
                    };
                    setTimeout(() => {
                        if (!this.root.isConnected) {
                            return;
                        }
                        window.addEventListener("pointerdown", listener);
                    }, 0);
                    addedWindowListener = true;
                }
                input.focus();
            });
            let onchange = () => {
                if (this.props.filterable != null && this.props.filterable !== "false") {
                    return;
                }
                let item = menu.querySelector("[value=\"" + this.getValue() + "\"]");
                if (this.getValue() !== "") {
                    container.classList.add("rm-activated");
                    if (item) {
                        this.root.querySelector("[ref=value]").innerHTML = item.innerHTML;
                    }
                } else {
                    container.classList.remove("rm-activated");
                    this.root.querySelector("[ref=value]").innerHTML = "";
                }
                Array.prototype.forEach.call(menu.children, child => {
                    if (child === item) {
                        child.classList.add("rm-selected");
                    } else {
                        child.classList.remove("rm-selected");
                    }
                });
            };
            this.root.addEventListener("change", onchange);
            if (this.props.value != null) {
                this.setValue(this.props.value);
            }
            onchange();
            this.onUpdated();
        },

        onUnmounted() {
            window.removeEventListener("change", this._onchange);
        },

        _lastPropsValue: undefined,

        onBeforeUpdate() {
            if (this.props.value != null && this.props.value !== this._lastPropsValue) {
                this.state.value = this._lastPropsValue = this.props.value || "";
                this.state.filter = null;
            }
        },

        _lastFilter: null,

        onUpdated() {
            let menu = this.root.querySelector("[ref=menu]");
            let found = this.state.value === "";
            Array.prototype.forEach.call(this.root.querySelector("[ref=raw_options]").children, (option, index) => {
                found = found || option.value === this.state.value;
                menu.children[index + 1].innerHTML = option.innerHTML;
            });
            if (!found) {
                this.root.querySelector("[ref=container]").classList.remove("rm-activated");
                this.state.value = "";
            }
            let formElement = this.root.querySelector("[ref='form-element']");
            HTMLSelectElement.prototype.__lookupSetter__("value").call(formElement, this.state.value);
            this.root.querySelector("[ref=value]").innerHTML = this.getLabelOf(this.state.value);
            if (this._lastFilter !== this.state.filter) {
                this._lastFilter = this.state.filter;
                this.root.dispatchEvent(new Event("filtered"));
            }
        },

        getOptions() {
            return Array.from(this.root.querySelector("[ref=raw_options]").children);
        },

        getLabelOf(value) {
            if (!value) {
                return "";
            }
            let raw_options = this.root.querySelector("[ref=raw_options]");
            let option = raw_options.querySelector("[value=\"" + value + "\"]");
            if (option) {
                return option.label;
            }
            return "";
        },

        isFocused() {
            let input = this.root.querySelector("[ref=input]");
            if (input) {
                return input === document.activeElement;
            }
            return false;
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<div ref="raw_options"><slot expr52="expr52"></slot></div><select expr53="expr53" ref="form-element" tabindex="-1"><option value></option><option expr54="expr54"></option></select><div ref="outlined-margin-top"></div><div expr55="expr55" ref="container"><div ref="border"></div><div ref="input-container"><div expr56="expr56" ref="label"> </div><input expr57="expr57" ref="input" type="text"/><div ref="value"></div></div><div ref="basic-underline"></div><div ref="underline"></div><div ref="menu" class="mdc-elevation--z8"><div expr58="expr58" value label skip-filter ref="option">&nbsp;</div><div expr59="expr59" ref="option"></div></div><div ref="arrow"></div></div><div style="height: 1.25em;"><div expr60="expr60" style="font-size: .75em;"> </div></div>',
          [{
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'default',
            'redundantAttribute': 'expr52',
            'selector': '[expr52]'
          }, {
            'redundantAttribute': 'expr53',
            'selector': '[expr53]',

            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'name',

              'evaluate': function(scope) {
                return scope.props.name;
              }
            }]
          }, {
            'type': bindingTypes.EACH,
            'getKey': null,
            'condition': null,

            'template': template(null, [{
              'expressions': [{
                'type': expressionTypes.ATTRIBUTE,
                'name': 'value',

                'evaluate': function(scope) {
                  return scope.option.value;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'label',

                'evaluate': function(scope) {
                  return scope.option.label;
                }
              }]
            }]),

            'redundantAttribute': 'expr54',
            'selector': '[expr54]',
            'itemName': 'option',
            'indexName': null,

            'evaluate': function(scope) {
              return scope.getOptions();
            }
          }, {
            'redundantAttribute': 'expr55',
            'selector': '[expr55]',

            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'class',

              'evaluate': function(scope) {
                return [
                  scope.state.value || scope.state.filter ? 'rm-activated ' : '',
                  scope.isFocused() ? 'rm-focused ' : '',
                  scope.state.selecting ? 'rm-selecting ' : ''
                ].join('');
              }
            }]
          }, {
            'redundantAttribute': 'expr56',
            'selector': '[expr56]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.label;
              }
            }]
          }, {
            'redundantAttribute': 'expr57',
            'selector': '[expr57]',

            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'placeholder',

              'evaluate': function(scope) {
                return scope.props.placeholder;
              }
            }, {
              'type': expressionTypes.VALUE,

              'evaluate': function(scope) {
                return scope.state.filter == null ? scope.getLabelOf(scope.state.value) : scope.state.filter;
              }
            }]
          }, {
            'redundantAttribute': 'expr58',
            'selector': '[expr58]',

            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onpointerenter',

              'evaluate': function(scope) {
                return scope._onoptionpointerenter;
              }
            }, {
              'type': expressionTypes.EVENT,
              'name': 'onclick',

              'evaluate': function(scope) {
                return scope._onoptionclick;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'class',

              'evaluate': function(scope) {
                return scope.state.value === '' ? 'rm-selected ' : '';
              }
            }]
          }, {
            'type': bindingTypes.EACH,
            'getKey': null,
            'condition': null,

            'template': template(null, [{
              'expressions': [{
                'type': expressionTypes.ATTRIBUTE,
                'name': 'value',

                'evaluate': function(scope) {
                  return scope.option.value;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'label',

                'evaluate': function(scope) {
                  return scope.option.label;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'skip-filter',

                'evaluate': function(scope) {
                  return scope.option.getAttribute("skip-filter") != null && scope.option.getAttribute("skip-filter") !== "false";
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'style',

                'evaluate': function(scope) {
                  return (scope.props.filterable != null && scope.props.filterable !== 'false') &&
                  (scope.option.getAttribute('skip-filter') == null || scope.option.getAttribute('skip-filter') === 'false') &&
                  !scope.option.label.toLowerCase().startsWith(
                      scope.state.filter == null ? scope.getLabelOf(scope.state.value).toLowerCase() : scope.state.filter.toLowerCase()
                  ) ? 'display: none;' : '';
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'class',

                'evaluate': function(scope) {
                  return scope.state.value === scope.option.value ? 'rm-selected ' : '';
                }
              }, {
                'type': expressionTypes.EVENT,
                'name': 'onpointerenter',

                'evaluate': function(scope) {
                  return scope._onoptionpointerenter;
                }
              }, {
                'type': expressionTypes.EVENT,
                'name': 'onclick',

                'evaluate': function(scope) {
                  return scope._onoptionclick;
                }
              }, {
                'type': expressionTypes.EVENT,
                'name': 'onpointerleave',

                'evaluate': function(scope) {
                  return scope._onoptionpointerleave;
                }
              }]
            }]),

            'redundantAttribute': 'expr59',
            'selector': '[expr59]',
            'itemName': 'option',
            'indexName': null,

            'evaluate': function(scope) {
              return scope.getOptions();
            }
          }, {
            'redundantAttribute': 'expr60',
            'selector': '[expr60]',

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

      'name': 'rm-select'
    };

    return rmSelect;

});

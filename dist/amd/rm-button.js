define(['riot', './ripple'], function (riot, ripple) { 'use strict';

    var rmButton = {
      'css': `rm-button,[is="rm-button"]{ font-size: 14px; display: inline-block; margin-right: 8px; vertical-align: middle; border-radius: 4px; background: transparent; height: 2.571em; } rm-button button,[is="rm-button"] button{ font-size: inherit; font-weight: inherit; cursor: pointer; border: none; padding: 0 16px; border-radius: inherit; background: inherit; box-sizing: border-box; vertical-align: inherit; width: 100%; height: 100%; color: inherit; outline: none; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; position: relative; } rm-button[dense-padding]:not([dense-padding="false"]) button,[is="rm-button"][dense-padding]:not([dense-padding="false"]) button{ padding: 0 8px; } rm-button button::-moz-focus-inner,[is="rm-button"] button::-moz-focus-inner{ border: none; } rm-button[variant="icon"],[is="rm-button"][variant="icon"]{ border-radius: 50%; } rm-button[variant="icon"] button,[is="rm-button"][variant="icon"] button{ padding: 8px; } rm-button[variant="icon"],[is="rm-button"][variant="icon"]{ height: 2.8571em; } rm-button[variant="unelevated"],[is="rm-button"][variant="unelevated"],rm-button[variant="raised"],[is="rm-button"][variant="raised"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } .rm-black-surface rm-button[variant="unelevated"],.rm-black-surface [is="rm-button"][variant="unelevated"],.rm-black-surface rm-button[variant="raised"],.rm-black-surface [is="rm-button"][variant="raised"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } .rm-dark-surface rm-button[variant="unelevated"],.rm-dark-surface [is="rm-button"][variant="unelevated"],.rm-dark-surface rm-button[variant="raised"],.rm-dark-surface [is="rm-button"][variant="raised"]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } .rm-light-surface rm-button[variant="unelevated"],.rm-light-surface [is="rm-button"][variant="unelevated"],.rm-light-surface rm-button[variant="raised"],.rm-light-surface [is="rm-button"][variant="raised"]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } .rm-white-surface rm-button[variant="unelevated"],.rm-white-surface [is="rm-button"][variant="unelevated"],.rm-white-surface rm-button[variant="raised"],.rm-white-surface [is="rm-button"][variant="raised"]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } rm-button[variant="outlined"] button::before,[is="rm-button"][variant="outlined"] button::before{ content: ""; position: absolute; top: 0; bottom: 0; right: 0; left: 0; border: 1px solid rgba(0, 0, 0, .12); border: 1px solid rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); border-radius: inherit; } .rm-black-surface rm-button[variant="outlined"] button::before,.rm-black-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(255, 255, 255, .12); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-dark-surface rm-button[variant="outlined"] button::before,.rm-dark-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(255, 255, 255, .12); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-light-surface rm-button[variant="outlined"] button::before,.rm-light-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(0, 0, 0, .12); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-white-surface rm-button[variant="outlined"] button::before,.rm-white-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(0, 0, 0, .12); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); } rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-button[color="primary"][variant="raised"],[is="rm-button"][color="primary"][variant="raised"],rm-button[color="primary"][variant="unelevated"],[is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary, 255, 255, 255)); } .rm-black-surface rm-button[color="primary"][variant="raised"],.rm-black-surface [is="rm-button"][color="primary"][variant="raised"],.rm-black-surface rm-button[color="primary"][variant="unelevated"],.rm-black-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-black, 255, 255, 255)); } .rm-dark-surface rm-button[color="primary"][variant="raised"],.rm-dark-surface [is="rm-button"][color="primary"][variant="raised"],.rm-dark-surface rm-button[color="primary"][variant="unelevated"],.rm-dark-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-dark, 255, 255, 255)); } .rm-light-surface rm-button[color="primary"][variant="raised"],.rm-light-surface [is="rm-button"][color="primary"][variant="raised"],.rm-light-surface rm-button[color="primary"][variant="unelevated"],.rm-light-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-light, 255, 255, 255)); } .rm-white-surface rm-button[color="primary"][variant="raised"],.rm-white-surface [is="rm-button"][color="primary"][variant="raised"],.rm-white-surface rm-button[color="primary"][variant="unelevated"],.rm-white-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-white, 255, 255, 255)); } rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(0, 0, 255); color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-button[color="accent"][variant="raised"],[is="rm-button"][color="accent"][variant="raised"],rm-button[color="accent"][variant="unelevated"],[is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent, 0, 0, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent, 255, 255, 255)); } .rm-black-surface rm-button[color="accent"][variant="raised"],.rm-black-surface [is="rm-button"][color="accent"][variant="raised"],.rm-black-surface rm-button[color="accent"][variant="unelevated"],.rm-black-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-black, 30, 144, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-button[color="accent"][variant="raised"],.rm-dark-surface [is="rm-button"][color="accent"][variant="raised"],.rm-dark-surface rm-button[color="accent"][variant="unelevated"],.rm-dark-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-dark, 30, 144, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-button[color="accent"][variant="raised"],.rm-light-surface [is="rm-button"][color="accent"][variant="raised"],.rm-light-surface rm-button[color="accent"][variant="unelevated"],.rm-light-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-light, 0, 0, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-button[color="accent"][variant="raised"],.rm-white-surface [is="rm-button"][color="accent"][variant="raised"],.rm-white-surface rm-button[color="accent"][variant="unelevated"],.rm-white-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-white, 0, 0, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 0, 0); color: rgb(var(--color-warn, 255, 0, 0)); } .rm-black-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 69, 0); color: rgb(var(--color-warn-on-black, 255, 69, 0)); } .rm-dark-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 69, 0); color: rgb(var(--color-warn-on-dark, 255, 69, 0)); } .rm-light-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 0, 0); color: rgb(var(--color-warn-on-light, 255, 0, 0)); } .rm-white-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 0, 0); color: rgb(var(--color-warn-on-white, 255, 0, 0)); } rm-button[color="warn"][variant="raised"],[is="rm-button"][color="warn"][variant="raised"],rm-button[color="warn"][variant="unelevated"],[is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 0, 0); background: rgb(var(--color-warn, 255, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn, 255, 255, 255)); } .rm-black-surface rm-button[color="warn"][variant="raised"],.rm-black-surface [is="rm-button"][color="warn"][variant="raised"],.rm-black-surface rm-button[color="warn"][variant="unelevated"],.rm-black-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 69, 0); background: rgb(var(--color-warn-on-black, 255, 69, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-black, 255, 255, 255)); } .rm-dark-surface rm-button[color="warn"][variant="raised"],.rm-dark-surface [is="rm-button"][color="warn"][variant="raised"],.rm-dark-surface rm-button[color="warn"][variant="unelevated"],.rm-dark-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 69, 0); background: rgb(var(--color-warn-on-dark, 255, 69, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-dark, 255, 255, 255)); } .rm-light-surface rm-button[color="warn"][variant="raised"],.rm-light-surface [is="rm-button"][color="warn"][variant="raised"],.rm-light-surface rm-button[color="warn"][variant="unelevated"],.rm-light-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 0, 0); background: rgb(var(--color-warn-on-light, 255, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-light, 255, 255, 255)); } .rm-white-surface rm-button[color="warn"][variant="raised"],.rm-white-surface [is="rm-button"][color="warn"][variant="raised"],.rm-white-surface rm-button[color="warn"][variant="unelevated"],.rm-white-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 0, 0); background: rgb(var(--color-warn-on-white, 255, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-white, 255, 255, 255)); } rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-black-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-button[disabled][variant="raised"]:not([disabled="false"]),[is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),rm-button[disabled][variant="unelevated"]:not([disabled="false"]),[is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-black-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-black-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-black-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-black-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-dark-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-dark-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-dark-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-light-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-light-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-light-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-white-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-white-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-white-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-button[disabled]:not([disabled="false"]) button,[is="rm-button"][disabled]:not([disabled="false"]) button{ background: transparent; box-shadow: none; cursor: initial; }`,

      'exports': {
        onMounted() {
            let button = this.root.querySelector("button");
            button.addEventListener("pointerdown", event => {
                if (this.state.pressed) {
                    return;
                }
                this.update({ pressed: true });
                let cancel = ev => {
                    if (ev.pointerId !== event.pointerId) {
                        return;
                    }
                    this.update({ pressed: false });
                    window.removeEventListener("pointerup", cancel);
                    window.removeEventListener("pointercancel", cancel);
                };
                window.addEventListener("pointerup", cancel);
                window.addEventListener("pointercancel", cancel);
            });
            if (this.isRaised()) {
                button.classList.add("mdc-elevation-transition");
                button.classList.add("mdc-elevation--z2");
            }
            let rippleOptions = this.isIcon() ? { centered: true, unbounded: true, radius: 20 } : {};
            if (!this.isRaised() && !this.isUnelevated()) {
                rippleOptions.highlight = true;
            }
            rippleOptions.color = "currentColor";
            rippleOptions.stopRippling = true;
            Object.entries(this.props).forEach(entry => {
                let [key, value] = entry;
                let rippleKeyMatch = key.match(/ripple([A-Z]\w+)/);
                if (!rippleKeyMatch) {
                    return;
                }
                let rippleKey = rippleKeyMatch[1];
                rippleKey = rippleKey[0].toLowerCase() + rippleKey.slice(1);
                let floatValue = parseFloat(value);
                rippleOptions[rippleKey] = isNaN(floatValue) ? value != null && value !== "false" : floatValue;
            });
            let rippleObj = ripple.ripple(button, rippleOptions);
            let shouldBeClick = false;
            button.addEventListener("keydown", event => {
                if (event.keyCode === 13) {
                    shouldBeClick = true;
                    requestAnimationFrame(() => {
                        shouldBeClick = false;
                    }, 0);
                }
            });
            button.addEventListener("keyup", event => {
                if (event.keyCode === 32) {
                    shouldBeClick = true;
                    requestAnimationFrame(() => {
                        shouldBeClick = false;
                    }, 0);
                }
            });
            button.addEventListener("click", () => {
                if (shouldBeClick) {
                    rippleObj.start(null, null, null);
                }
            });
            let openOverlay = this.props.openOverlay;
            if (openOverlay) {
                button.addEventListener("click", () => {
                    let overlay = document.querySelector("#" + openOverlay);
                    if (!overlay) {
                        return;
                    }
                    let tag = overlay[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                    if (tag && tag.open) {
                        tag.open();
                    }
                });
            }
        },

        onUpdated() {
            let button = this.root.querySelector("button");
            if (this.isRaised()) {
                button.classList.add("mdc-elevation-transition");
                button.classList.add("mdc-elevation--z"+ (this.state.pressed ? 8: 2));
                button.classList.remove("mdc-elevation--z"+ (this.state.pressed ? 2: 8));
            }
        },

        isText() {
            return this.props.variant || this.props.variant === "text";
        },

        isRaised() {
            return this.props.variant != null && this.props.variant === "raised";
        },

        isOutlined() {
            return this.props.variant != null && this.props.variant === "outlined";
        },

        isUnelevated() {
            return this.props.variant != null && this.props.variant === "unelevated";
        },

        isIcon() {
            return this.props.variant != null && this.props.variant === "icon";
        },

        isDisabled() {
            let disabled = this.props.disabled;
            return disabled != null && (typeof disabled === "string" ? disabled !== "false" : !!disabled);
        },

        setDisabled(disabled) {
            if (disabled) {
                this.root.setAttribute("disabled", "");
            } else {
                this.root.removeAttribute("disabled");
            }
            this.update();
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template('<button expr54="expr54"></button><button expr56="expr56"></button>', [{
          'type': bindingTypes.IF,

          'evaluate': function(scope) {
            return !scope.isIcon();
          },

          'redundantAttribute': 'expr54',
          'selector': '[expr54]',

          'template': template('<slot expr55="expr55"></slot>', [{
            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'style',

              'evaluate': function(scope) {
                return scope.props.buttonStyle;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'disabled',

              'evaluate': function(scope) {
                return scope.isDisabled();
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'type',

              'evaluate': function(scope) {
                return scope.props.type;
              }
            }]
          }, {
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'default',
            'redundantAttribute': 'expr55',
            'selector': '[expr55]'
          }])
        }, {
          'type': bindingTypes.IF,

          'evaluate': function(scope) {
            return scope.isIcon();
          },

          'redundantAttribute': 'expr56',
          'selector': '[expr56]',

          'template': template('<rm-icon expr57="expr57"></rm-icon>', [{
            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'disabled',

              'evaluate': function(scope) {
                return scope.isDisabled();
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'type',

              'evaluate': function(scope) {
                return scope.props.type;
              }
            }]
          }, {
            'type': bindingTypes.TAG,
            'getComponent': getComponent,

            'evaluate': function(scope) {
              return 'rm-icon';
            },

            'slots': [{
              'id': 'default',
              'html': '<slot expr58="expr58"></slot>',

              'bindings': [{
                'type': bindingTypes.SLOT,
                'attributes': [],
                'name': 'default',
                'redundantAttribute': 'expr58',
                'selector': '[expr58]'
              }]
            }],

            'attributes': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'style',

              'evaluate': function(scope) {
                return scope.props.iconStyle;
              }
            }],

            'redundantAttribute': 'expr57',
            'selector': '[expr57]'
          }])
        }]);
      },

      'name': 'rm-button'
    };

    return rmButton;

});

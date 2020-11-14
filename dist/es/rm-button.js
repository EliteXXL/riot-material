import './style-inject.es-1f59c1d0.js';
import './tslib.es6-2755a364.js';
import { r as ripple } from './ripple-b4246d71.js';
import { __ } from 'riot';
import IconComponent from './rm-icon.js';
import { p as pointerController } from './pointerController-7c4a10f4.js';

var ButtonComponent = {
  'css': `rm-button,[is="rm-button"]{ font-size: 14px; display: inline-block; margin-right: 8px; vertical-align: middle; border-radius: 4px; background: transparent; height: 2.571em; } rm-button button,[is="rm-button"] button{ font-size: inherit; font-weight: inherit; cursor: pointer; border: none; padding: 0 16px; border-radius: inherit; background: inherit; box-sizing: border-box; vertical-align: inherit; width: 100%; height: 100%; color: inherit; outline: none; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; position: relative; } rm-button[dense-padding]:not([dense-padding="false"]) button,[is="rm-button"][dense-padding]:not([dense-padding="false"]) button{ padding: 0 8px; } rm-button button::-moz-focus-inner,[is="rm-button"] button::-moz-focus-inner{ border: none; } rm-button[variant=icon],[is="rm-button"][variant=icon]{ border-radius: 50%; } rm-button[variant=icon] button,[is="rm-button"][variant=icon] button{ padding: 0.5714285714285714em; height: 2.857142857142857em; width: 2.857142857142857em; } rm-button[variant=icon] button rm-icon,[is="rm-button"][variant=icon] button rm-icon{ font-size: 1.7142857142857142em; } rm-button[variant=icon],[is="rm-button"][variant=icon]{ height: unset; } rm-button[variant="unelevated"],[is="rm-button"][variant="unelevated"],rm-button[variant="raised"],[is="rm-button"][variant="raised"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } .rm-black-surface rm-button[variant="unelevated"],.rm-black-surface [is="rm-button"][variant="unelevated"],.rm-black-surface rm-button[variant="raised"],.rm-black-surface [is="rm-button"][variant="raised"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } .rm-dark-surface rm-button[variant="unelevated"],.rm-dark-surface [is="rm-button"][variant="unelevated"],.rm-dark-surface rm-button[variant="raised"],.rm-dark-surface [is="rm-button"][variant="raised"]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } .rm-light-surface rm-button[variant="unelevated"],.rm-light-surface [is="rm-button"][variant="unelevated"],.rm-light-surface rm-button[variant="raised"],.rm-light-surface [is="rm-button"][variant="raised"]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } .rm-white-surface rm-button[variant="unelevated"],.rm-white-surface [is="rm-button"][variant="unelevated"],.rm-white-surface rm-button[variant="raised"],.rm-white-surface [is="rm-button"][variant="raised"]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } rm-button[variant="outlined"] button::before,[is="rm-button"][variant="outlined"] button::before{ content: ""; position: absolute; top: 0; bottom: 0; right: 0; left: 0; border: 1px solid rgba(0, 0, 0, .12); border: 1px solid rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); border-radius: inherit; } .rm-black-surface rm-button[variant="outlined"] button::before,.rm-black-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(255, 255, 255, .12); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-dark-surface rm-button[variant="outlined"] button::before,.rm-dark-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(255, 255, 255, .12); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-light-surface rm-button[variant="outlined"] button::before,.rm-light-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(0, 0, 0, .12); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-white-surface rm-button[variant="outlined"] button::before,.rm-white-surface [is="rm-button"][variant="outlined"] button::before{ border-color: rgba(0, 0, 0, .12); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); } rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-button[color="primary"]:not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][color="primary"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-button[color="primary"][variant="raised"],[is="rm-button"][color="primary"][variant="raised"],rm-button[color="primary"][variant="unelevated"],[is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary, 255, 255, 255)); } .rm-black-surface rm-button[color="primary"][variant="raised"],.rm-black-surface [is="rm-button"][color="primary"][variant="raised"],.rm-black-surface rm-button[color="primary"][variant="unelevated"],.rm-black-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-black, 255, 255, 255)); } .rm-dark-surface rm-button[color="primary"][variant="raised"],.rm-dark-surface [is="rm-button"][color="primary"][variant="raised"],.rm-dark-surface rm-button[color="primary"][variant="unelevated"],.rm-dark-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-dark, 255, 255, 255)); } .rm-light-surface rm-button[color="primary"][variant="raised"],.rm-light-surface [is="rm-button"][color="primary"][variant="raised"],.rm-light-surface rm-button[color="primary"][variant="unelevated"],.rm-light-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-light, 255, 255, 255)); } .rm-white-surface rm-button[color="primary"][variant="raised"],.rm-white-surface [is="rm-button"][color="primary"][variant="raised"],.rm-white-surface rm-button[color="primary"][variant="unelevated"],.rm-white-surface [is="rm-button"][color="primary"][variant="unelevated"]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary-on-white, 255, 255, 255)); } rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(0, 0, 255); color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-button[color="accent"]:not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][color="accent"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-button[color="accent"][variant="raised"],[is="rm-button"][color="accent"][variant="raised"],rm-button[color="accent"][variant="unelevated"],[is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent, 0, 0, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent, 255, 255, 255)); } .rm-black-surface rm-button[color="accent"][variant="raised"],.rm-black-surface [is="rm-button"][color="accent"][variant="raised"],.rm-black-surface rm-button[color="accent"][variant="unelevated"],.rm-black-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-black, 30, 144, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-button[color="accent"][variant="raised"],.rm-dark-surface [is="rm-button"][color="accent"][variant="raised"],.rm-dark-surface rm-button[color="accent"][variant="unelevated"],.rm-dark-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-dark, 30, 144, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-button[color="accent"][variant="raised"],.rm-light-surface [is="rm-button"][color="accent"][variant="raised"],.rm-light-surface rm-button[color="accent"][variant="unelevated"],.rm-light-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-light, 0, 0, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-button[color="accent"][variant="raised"],.rm-white-surface [is="rm-button"][color="accent"][variant="raised"],.rm-white-surface rm-button[color="accent"][variant="unelevated"],.rm-white-surface [is="rm-button"][color="accent"][variant="unelevated"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-white, 0, 0, 255)); color: rgb(255, 255, 255); color: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 0, 0); color: rgb(var(--color-warn, 255, 0, 0)); } .rm-black-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 69, 0); color: rgb(var(--color-warn-on-black, 255, 69, 0)); } .rm-dark-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 69, 0); color: rgb(var(--color-warn-on-dark, 255, 69, 0)); } .rm-light-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 0, 0); color: rgb(var(--color-warn-on-light, 255, 0, 0)); } .rm-white-surface rm-button[color="warn"]:not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][color="warn"]:not([variant="raised"]):not([variant="unelevated"]){ color: rgb(255, 0, 0); color: rgb(var(--color-warn-on-white, 255, 0, 0)); } rm-button[color="warn"][variant="raised"],[is="rm-button"][color="warn"][variant="raised"],rm-button[color="warn"][variant="unelevated"],[is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 0, 0); background: rgb(var(--color-warn, 255, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn, 255, 255, 255)); } .rm-black-surface rm-button[color="warn"][variant="raised"],.rm-black-surface [is="rm-button"][color="warn"][variant="raised"],.rm-black-surface rm-button[color="warn"][variant="unelevated"],.rm-black-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 69, 0); background: rgb(var(--color-warn-on-black, 255, 69, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-black, 255, 255, 255)); } .rm-dark-surface rm-button[color="warn"][variant="raised"],.rm-dark-surface [is="rm-button"][color="warn"][variant="raised"],.rm-dark-surface rm-button[color="warn"][variant="unelevated"],.rm-dark-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 69, 0); background: rgb(var(--color-warn-on-dark, 255, 69, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-dark, 255, 255, 255)); } .rm-light-surface rm-button[color="warn"][variant="raised"],.rm-light-surface [is="rm-button"][color="warn"][variant="raised"],.rm-light-surface rm-button[color="warn"][variant="unelevated"],.rm-light-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 0, 0); background: rgb(var(--color-warn-on-light, 255, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-light, 255, 255, 255)); } .rm-white-surface rm-button[color="warn"][variant="raised"],.rm-white-surface [is="rm-button"][color="warn"][variant="raised"],.rm-white-surface rm-button[color="warn"][variant="unelevated"],.rm-white-surface [is="rm-button"][color="warn"][variant="unelevated"]{ background: rgb(255, 0, 0); background: rgb(var(--color-warn-on-white, 255, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-warn-on-white, 255, 255, 255)); } rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),[is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-black-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-black-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-dark-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-light-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-button[disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]),.rm-white-surface [is="rm-button"][disabled]:not([disabled="false"]):not([variant="raised"]):not([variant="unelevated"]){ color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-button[disabled][variant="raised"]:not([disabled="false"]),[is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),rm-button[disabled][variant="unelevated"]:not([disabled="false"]),[is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-black-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-black-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-black-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-black-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-dark-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-dark-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-dark-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); color: rgba(255, 255, 255, .42); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-light-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-light-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-light-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-button[disabled][variant="raised"]:not([disabled="false"]),.rm-white-surface [is="rm-button"][disabled][variant="raised"]:not([disabled="false"]),.rm-white-surface rm-button[disabled][variant="unelevated"]:not([disabled="false"]),.rm-white-surface [is="rm-button"][disabled][variant="unelevated"]:not([disabled="false"]){ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); color: rgba(0, 0, 0, .42); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-button[disabled]:not([disabled="false"]) button,[is="rm-button"][disabled]:not([disabled="false"]) button{ background: transparent; box-shadow: none; cursor: initial; } rm-button[variant=icon][dense],[is="rm-button"][variant=icon][dense]{ margin-right: 0.2857142857142857em; } rm-button[variant=icon][dense] button,[is="rm-button"][variant=icon][dense] button{ height: unset; width: unset; padding: 0; } rm-button[variant]:last-child,[is="rm-button"][variant]:last-child,rm-button:last-child,[is="rm-button"]:last-child{ margin-right: 0; }`,

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
        let rippleOptions = this.isIcon() ? { centered: true } : {};
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
            rippleOptions[rippleKey] = isNaN(floatValue) ? value != null && value !== "false" && value !== false : floatValue;
        });
        rippleOptions.detectLabel = false;
        let rippleObj = ripple(button, rippleOptions);
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
        let onclick = null;
        button.addEventListener("click", () => {
            if (shouldBeClick) {
                rippleObj.start(null, null, null).end();
                if (onclick) {
                    onclick();
                }
            }
        });
        let openOverlay = this.props.openOverlay;
        if (openOverlay) {
            pointerController(button, onclick = () => {
                let overlay = document.querySelector("#" + openOverlay);
                if (!overlay) {
                    return;
                }
                let tag = overlay[__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                if (tag && tag.open) {
                    if (tag && tag.setAnchorElement) {
                        tag.setAnchorElement(button);
                    }
                    tag.open();
                }
            });
        }
    },

    onBeforeUnmount() {
        pointerController(this.root.querySelector("button"), null);
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
    },

    components: {
        "rm-icon": IconComponent
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<button expr116="expr116"></button><button expr118="expr118"></button>',
      [{
        'type': bindingTypes.IF,

        'evaluate': function(scope) {
          return !scope.isIcon();
        },

        'redundantAttribute': 'expr116',
        'selector': '[expr116]',

        'template': template('<slot expr117="expr117"></slot>', [{
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
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'tabindex',

            'evaluate': function(scope) {
              return scope.props.tabindex;
            }
          }]
        }, {
          'type': bindingTypes.SLOT,
          'attributes': [],
          'name': 'default',
          'redundantAttribute': 'expr117',
          'selector': '[expr117]'
        }])
      }, {
        'type': bindingTypes.IF,

        'evaluate': function(scope) {
          return scope.isIcon();
        },

        'redundantAttribute': 'expr118',
        'selector': '[expr118]',

        'template': template('<rm-icon expr119="expr119"></rm-icon>', [{
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
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'tabindex',

            'evaluate': function(scope) {
              return scope.props.tabindex;
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
            'html': '<slot expr120="expr120"></slot>',

            'bindings': [{
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'default',
              'redundantAttribute': 'expr120',
              'selector': '[expr120]'
            }]
          }],

          'attributes': [{
            'type': expressionTypes.ATTRIBUTE,
            'name': 'style',

            'evaluate': function(scope) {
              return scope.props.iconStyle;
            }
          }],

          'redundantAttribute': 'expr119',
          'selector': '[expr119]'
        }])
      }]
    );
  },

  'name': 'rm-button'
};

export default ButtonComponent;

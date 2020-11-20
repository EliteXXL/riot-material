import './tslib.es6-2755a364.js';
import { r as ripple } from './ripple-256651ea.js';

var RippleComponent = {
  'css': `rm-ripple,[is="rm-ripple"]{ display: inline-block; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; }`,

  'exports': {
    onMounted() {
        ripple(this.root, {
            radius: (this.props.radius && parseInt(this.props.radius)) || null,
            unbounded: (this.props.unbounded && (this.props.unbounded !== "false")) || false,
            centered: (this.props.centered && (this.props.centered !== "false")) || false,
            disabled:  (this.props.disabled && (this.props.disabled !== "false")) || false,
            color: this.props.color ? this.props.color : "currentColor",
            highlight:  (this.props.highlight && (this.props.highlight !== "false")) || false,
            unboundedFocus:  (this.props.unboundedFocus && (this.props.unboundedFocus !== "false")) || false,
            focusTarget: this.props.focusTarget && (this.props.focusTarget instanceof HTMLElement)? this.props.focusTarget : null,
            usePointerFocus:  (this.props.usePointerFocus && (this.props.usePointerFocus !== "false")) || false,
            stopRippling:  (this.props.stopRippling && (this.props.stopRippling !== "false")) || false,
        });
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<slot expr134="expr134"></slot>', [{
      'type': bindingTypes.SLOT,
      'attributes': [],
      'name': 'default',
      'redundantAttribute': 'expr134',
      'selector': '[expr134]'
    }]);
  },

  'name': 'rm-ripple'
};

export default RippleComponent;

import './tslib.es6-2755a364.js';
import { r as ripple } from './ripple-b4246d71.js';
import { __ } from 'riot';

var MenuItemComponent = {
  'css': `rm-menu-item,[is="rm-menu-item"]{ display: contents; } rm-menu-item > button,[is="rm-menu-item"] > button{ font-size: 16px; line-height: 1.5em; padding: 0.75em 1em; border: 0; background: none; width: 100%; text-align: left; cursor: pointer; outline: none; display: block; min-height: 3em; } rm-menu-item[title] > button,[is="rm-menu-item"][title] > button{ font-weight: bold; color: rgba(0, 0, 0, 0.9); } rm-menu-item[inset] > button,[is="rm-menu-item"][inset] > button{ padding-left: 4.5em; } rm-menu-item[short-inset] > button,[is="rm-menu-item"][short-inset] > button{ padding-left: 2em; } rm-menu-item[passive] > button,[is="rm-menu-item"][passive] > button{ cursor: initial; }`,

  'exports': {
    _select: null,

    onMounted() {
        Object.defineProperty(this.root, "value", {
            get: this.getValue.bind(this),
            set: this.setValue.bind(this)
        });
        Object.defineProperty(this.root, "label", {
            get: this.getLabel.bind(this),
            set: this.setLabel.bind(this)
        });
        Object.defineProperty(this.root, "selected", {
            get: this.getSelected.bind(this),
            get: this.setSelected.bind(this)
        });
        let parent = this.root.parentElement;
        while (parent) {
            const instance = parent[__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
            if (instance != null && instance.name === "rm-select") {
                parent = instance;
                break;
            }
            parent = parent.parentElement;
        }
        if (parent != null) {
            if (this.getSelected()) {
                parent.select(this.getValue());
            }
            this._select = parent;
        }
        if (this.props.tabindex == null || !(parseInt(this.props.tabindex) < 0)) {
            ripple(this.root.firstElementChild, {
                highlight: !this.getPassive(),
                instantHighlight: true,
                disabled: this.getPassive()
            });
        }
    },

    onUpdated() {
        if (this.props.tabindex == null || !(parseInt(this.props.tabindex) < 0)) {
            ripple(this.root.firstElementChild, {
                highlight: !this.getPassive(),
                instantHighlight: true,
                disabled: this.getPassive()
            });
        }
    },

    getPassive() {
        return this.props.passive != null && this.props.passive !== false;
    },

    getLabel() {
        const label = this.root.getAttribute("label");
        return label != null ? label : this.root.innerText;
    },

    setLabel(label) {
        this.root.setAttribute("value", label);
    },

    getValue() {
        const value = this.root.getAttribute("value");
        return value != null ? value : "";
    },

    setValue(value) {
        this.root.setAttribute("value", value);
    },

    getSelected() {
        if (this.getPassive()) {
            return false;
        }
        if (this._select == null) {
            return this.root.getAttribute("selected") != null;
        }
        return this._select.hasSelected(this.getValue());
    },

    setSelected(selected) {
        if (this.getPassive()) {
            return;
        }
        if (this._select == null) {
            return this.root.setAttribute("selected", "");
        }
        return this._select.select(this.getValue());
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<button expr128="expr128"><slot expr129="expr129"></slot></button>', [{
      'redundantAttribute': 'expr128',
      'selector': '[expr128]',

      'expressions': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'tabindex',

        'evaluate': function(scope) {
          return scope.props.tabindex;
        }
      }, {
        'type': expressionTypes.EVENT,
        'name': 'onclick',

        'evaluate': function(scope) {
          return scope.setSelected.bind(scope, true);
        }
      }]
    }, {
      'type': bindingTypes.SLOT,
      'attributes': [],
      'name': 'default',
      'redundantAttribute': 'expr129',
      'selector': '[expr129]'
    }]);
  },

  'name': 'rm-menu-item'
};

export default MenuItemComponent;

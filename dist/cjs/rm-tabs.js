'use strict';

require('./tslib.es6-c0666302.js');
var ripple = require('./ripple-486af47f.js');

var TabsComponent = {
  'css': `rm-tabs,[is="rm-tabs"]{ display: block; overflow-y: hidden; } rm-tabs > div,[is="rm-tabs"] > div{ display: block; width: 100%; overflow: auto visible; position: relative; user-select: none; } rm-tabs > div > [ref=indicator],[is="rm-tabs"] > div > [ref=indicator]{ position: absolute; bottom: 0; left: 0; height: 2px; width: 1px; transition: transform ease-in-out 200ms; transform-origin: left; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-tabs > div > [ref=indicator],.rm-black-surface [is="rm-tabs"] > div > [ref=indicator]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-tabs > div > [ref=indicator],.rm-dark-surface [is="rm-tabs"] > div > [ref=indicator]{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-tabs > div > [ref=indicator],.rm-light-surface [is="rm-tabs"] > div > [ref=indicator]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-tabs > div > [ref=indicator],.rm-white-surface [is="rm-tabs"] > div > [ref=indicator]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-tabs > div > [ref=tabs] > [ref=tab],[is="rm-tabs"] > div > [ref=tabs] > [ref=tab]{ display: table-cell; width: 1px; padding: 12px 16px; cursor: pointer; overflow: hidden; position: relative; font-size: 16px; line-height: 20px; } rm-tabs > div > [ref=tabs] > [ref=tab].selected,[is="rm-tabs"] > div > [ref=tabs] > [ref=tab].selected{ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-tabs > div > [ref=tabs] > [ref=tab].selected,.rm-black-surface [is="rm-tabs"] > div > [ref=tabs] > [ref=tab].selected{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-tabs > div > [ref=tabs] > [ref=tab].selected,.rm-dark-surface [is="rm-tabs"] > div > [ref=tabs] > [ref=tab].selected{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-tabs > div > [ref=tabs] > [ref=tab].selected,.rm-light-surface [is="rm-tabs"] > div > [ref=tabs] > [ref=tab].selected{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-tabs > div > [ref=tabs] > [ref=tab].selected,.rm-white-surface [is="rm-tabs"] > div > [ref=tabs] > [ref=tab].selected{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-white, 139, 0, 139)); }`,

  'exports': {
    state: {
        value: null
    },

    getTabs() {
        if (!this.props.tabs) {
            return null;
        }
        if (Array.isArray(this.props.tabs)) {
            return this.props.tabs;
        }
        return typeof this.props === "string" ? this.props.split("\n") : null;
    },

    onBeforeMount() {
        this.onBeforeUpdate();
    },

    onMounted() {
        this.onUpdated();
    },

    _lastValue: null,

    onBeforeUpdate() {
        if (this._lastValue != null && this.props.value === this._lastValue) {
            return;
        }
        this._lastValue = this.props.value;
        let tabs = this.getTabs();
        if (tabs == null) {
            return;
        }
        if (tabs.includes(this.props.value)) {
            this.state.value = this.props.value;
        } else {
            this.state.value = tabs.includes(this.state.value) ? this.state.value : tabs[0];
        }
    },

    onUpdated() {
        Array.prototype.forEach.call(this.root.querySelectorAll("[ref=tab]"), tab => {
            ripple.ripple(tab, { color: "currentColor" });
        });
        let tabsEl = this.root.firstElementChild;
        if (tabsEl) {
            let h = tabsEl.getBoundingClientRect().height;
            tabsEl.style.overflow = "hidden";
            h -= tabsEl.getBoundingClientRect().height;
            tabsEl.style.overflow = "";
            tabsEl.style.marginBottom = `-${h}px`;
        }
    },

    getIndicatorLeft() {
        if (!this.props.tabs) {
            return 0;
        }
        let tabs = this.root.querySelector("[ref=tabs]");
        let index = this.getTabs().indexOf(this.state.value);
        return tabs.children[index].getBoundingClientRect().left - 
            this.root.getBoundingClientRect().left +
            this.root.firstElementChild.scrollLeft;
    },

    getIndicatorWidth() {
        if (!this.props.tabs) {
            return 0;
        }
        return this.root.querySelector("[ref=tabs]").children[this.getTabs().indexOf(this.state.value)].getBoundingClientRect().width;
    },

    selecttab(index) {
        let tabs = this.getTabs();
        if (tabs == null || index >= tabs.length) {
            return;
        }
        this.update({ value: tabs[index] });
        this.root.dispatchEvent(new CustomEvent("change", { detail: { value: this.state.value, index } }));
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<div expr82="expr82"></div>', [{
      'type': bindingTypes.IF,

      'evaluate': function(scope) {
        return scope.props.tabs;
      },

      'redundantAttribute': 'expr82',
      'selector': '[expr82]',

      'template': template(
        '<div style="display: table; width: 100%; text-align: center; white-space: nowrap;" ref="tabs"><div expr83="expr83" ref="tab"></div></div><div expr85="expr85" ref="indicator"></div>',
        [{
          'type': bindingTypes.EACH,
          'getKey': null,
          'condition': null,

          'template': template('<div expr84="expr84" style="display: inline-block;"> </div>', [{
            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onclick',

              'evaluate': function(scope) {
                return scope.selecttab.bind(null, scope.index);
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'class',

              'evaluate': function(scope) {
                return scope.tab === scope.state.value ? "selected" : "";
              }
            }]
          }, {
            'redundantAttribute': 'expr84',
            'selector': '[expr84]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.tab;
              }
            }]
          }]),

          'redundantAttribute': 'expr83',
          'selector': '[expr83]',
          'itemName': 'tab',
          'indexName': 'index',

          'evaluate': function(scope) {
            return scope.getTabs();
          }
        }, {
          'redundantAttribute': 'expr85',
          'selector': '[expr85]',

          'expressions': [{
            'type': expressionTypes.ATTRIBUTE,
            'name': 'style',

            'evaluate': function(scope) {
              return [
                'transform: translateX(',
                scope.getIndicatorLeft(),
                'px) scaleX(',
                scope.getIndicatorWidth(),
                ');'
              ].join('');
            }
          }]
        }]
      )
    }]);
  },

  'name': 'rm-tabs'
};

module.exports = TabsComponent;

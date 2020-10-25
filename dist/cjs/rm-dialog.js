'use strict';

var rmDialog = {
  'css': `rm-dialog,[is="rm-dialog"]{ position: fixed; display: block; top: 0; bottom: 0; right: 0; left: 0; padding: 40px; background: rgba(0, 0, 0, .42); background: rgba(0, 0, 0, var(--color-opacity-secondary, .42)); box-sizing: border-box; z-index: 100; font-size: 0; text-align: center; } rm-dialog > [ref=aligner],[is="rm-dialog"] > [ref=aligner]{ width: 0; height: 100%; vertical-align: middle; display: inline-block; } rm-dialog > [ref=container],[is="rm-dialog"] > [ref=container]{ width: 100%; font-size: 16px; vertical-align: middle; display: inline-block; max-width: 560px; text-align: initial; } rm-dialog > [ref=container] > [ref=title],[is="rm-dialog"] > [ref=container] > [ref=title]{ min-height: 8px; border-radius: 4px 4px 0 0; } rm-dialog > [ref=container] > [ref=content],[is="rm-dialog"] > [ref=container] > [ref=content]{ overflow: auto; } rm-dialog > [ref=container] > [ref=actions],[is="rm-dialog"] > [ref=container] > [ref=actions]{ min-height: 8px; border-radius: 0 0 4px 4px; }`,

  'exports': {
    state: {
        clickedContainer: false
    },

    _onresize: null,

    onMounted() {
        this.root.addEventListener("click", () => {
            if (this.state.clickedContainer) {
                return;
            }
            this.dismiss(0);
        });
        window.addEventListener("resize", this._onresize = () => {
            this.update();
        });
        this.root.style.display = "none";
        this.root.dismiss = (result) => {
            this.dismiss(result);
        };
        this.root.open = (...detail) => {
            this.open(...detail);
        };
        this.root._wrapTo = (wrapper) => {
            wrapper.open = this.root.open;
            wrapper.dismiss = this.root.dismiss;
            try {
                Object.defineProperties(wrapper, {
                    opened: {
                        get: () => {
                            return this.opened;
                        },
                        configurable: true
                    },
                    result: {
                        get: () => {
                            return this.result;
                        },
                        configurable: true
                    }
                });
            } catch (e) {
                console.warn("cannot wrap properties", e.message);
            }
        };
        Object.defineProperties(this.root, {
            opened: {
                get: () => {
                    return this.root.style.display !== "none";
                }
            },
            result: {
                get: () => {
                    return this._result;
                }
            }
        });
    },

    onUnmounted() {
        window.removeEventListener("resize", this._onresize);
    },

    _oncontainerclick() {
        this.state.clickedContainer = true;
        setTimeout(() => {
            this.state.clickedContainer = false;
        }, 0);
    },

    shouldUpdate() {
        return this.root.style.display !== "none";
    },

    onUpdated() {
        this.root.querySelector("[ref=content]").style.maxHeight = this.getContentMaxHeight() + "px";
    },

    _result: 0,

    dismiss(result) {
        if (this.root.style.display === "none") {
            return;
        }
        this._result = result || 0;
        this.root.style.display = "none";
        this.root.dispatchEvent(new CustomEvent("dismiss", { bubbles: true, detail: { result: this.root.result } }));
    },

    open(...detail) {
        if (this.root.style.display !== "none") {
            return;
        }
        this.root.style.display = "";
        this.update();
        this.root.dispatchEvent(new CustomEvent("open", { bubbles: true, detail }));
    },

    getContentMaxHeight() {
        return (
            this.root.querySelector("[ref=aligner]").getBoundingClientRect().height -
            this.root.querySelector("[ref=title]").getBoundingClientRect().height -
            this.root.querySelector("[ref=actions]").getBoundingClientRect().height
        );
    },

    getSurface() {
        if (this.props.surface == null || ![
            "black",
            "dark" ,
            "light"
        ].includes(this.props.surface)) {
            return "white";
        }
        return this.props.surface;
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div ref="aligner"></div><div expr62="expr62" class="mdc-elevation--z24" ref="container"><div expr63="expr63" ref="title"><slot expr64="expr64" name="title"></slot></div><div expr65="expr65" ref="content"><slot expr66="expr66" name="content"></slot></div><div expr67="expr67" ref="actions"><slot expr68="expr68" name="actions"></slot></div></div>',
      [{
        'redundantAttribute': 'expr62',
        'selector': '[expr62]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return scope._oncontainerclick;
          }
        }]
      }, {
        'redundantAttribute': 'expr63',
        'selector': '[expr63]',

        'expressions': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'class',

          'evaluate': function(scope) {
            return ['rm-', scope.getSurface(), '-surface'].join('');
          }
        }]
      }, {
        'type': bindingTypes.SLOT,
        'attributes': [],
        'name': 'title',
        'redundantAttribute': 'expr64',
        'selector': '[expr64]'
      }, {
        'redundantAttribute': 'expr65',
        'selector': '[expr65]',

        'expressions': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'class',

          'evaluate': function(scope) {
            return ['rm-', scope.getSurface(), '-surface'].join('');
          }
        }]
      }, {
        'type': bindingTypes.SLOT,
        'attributes': [],
        'name': 'content',
        'redundantAttribute': 'expr66',
        'selector': '[expr66]'
      }, {
        'redundantAttribute': 'expr67',
        'selector': '[expr67]',

        'expressions': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'class',

          'evaluate': function(scope) {
            return ['rm-', scope.getSurface(), '-surface'].join('');
          }
        }]
      }, {
        'type': bindingTypes.SLOT,
        'attributes': [],
        'name': 'actions',
        'redundantAttribute': 'expr68',
        'selector': '[expr68]'
      }]
    );
  },

  'name': 'rm-dialog'
};

module.exports = rmDialog;

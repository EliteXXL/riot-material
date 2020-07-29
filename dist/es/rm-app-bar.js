import './elevation';
import { onChange, offChange, getHeight } from './app-bar-utils';

var rmAppBar = {
  'css': `rm-app-bar,[is="rm-app-bar"]{ display: contents; } rm-app-bar [ref=bar],[is="rm-app-bar"] [ref=bar]{ background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary, 255, 255, 255)); padding: 8px; box-sizing: border-box; transition: box-shadow ease-in-out 100ms; } rm-app-bar[placeholder]:not([placeholder="false"]) [ref=bar],[is="rm-app-bar"][placeholder]:not([placeholder="false"]) [ref=bar]{ opacity: 0; } rm-app-bar[surface="black"] [ref=bar],[is="rm-app-bar"][surface="black"] [ref=bar]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } rm-app-bar[surface="dark"] [ref=bar],[is="rm-app-bar"][surface="dark"] [ref=bar]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } rm-app-bar[surface="light"] [ref=bar],[is="rm-app-bar"][surface="light"] [ref=bar]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } rm-app-bar[surface="white"] [ref=bar],[is="rm-app-bar"][surface="white"] [ref=bar]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } rm-app-bar[fixed]:not([fixed="false"]) [ref=bar],[is="rm-app-bar"][fixed]:not([fixed="false"]) [ref=bar]{ position: fixed; top: 0; left: 0; right: 0; z-index: 99; } rm-app-bar[fixed]:not([fixed="false"])[bottom]:not([bottom="false"]) [ref=bar],[is="rm-app-bar"][fixed]:not([fixed="false"])[bottom]:not([bottom="false"]) [ref=bar]{ position: fixed; top: unset; bottom: 0; left: 0; right: 0; } rm-app-bar[clamped]:not([clamped="false"]) [ref=bar],[is="rm-app-bar"][clamped]:not([clamped="false"]) [ref=bar]{ overflow: hidden; } rm-app-bar [ref=bar].height-48,[is="rm-app-bar"] [ref=bar].height-48{ height: 48px; padding: 4px 8px; } rm-app-bar [ref=bar].height-56,[is="rm-app-bar"] [ref=bar].height-56{ height: 56px; } rm-app-bar [ref=bar].height-64,[is="rm-app-bar"] [ref=bar].height-64{ height: 64px; padding: 12px 8px; }`,

  'exports': {
    state: {
        hasShadow: false
    },

    onMounted() {
        this._onscoll = () => {
            let hasShadow = false;
            if (this._scrollTarget != null) {
                if (this.props.bottom != null && this.props.bottom !== "false") {
                    if (this._scrollTarget instanceof Window) {
                        hasShadow = this._scrollTarget.scrollY < this._scrollTarget.document.documentElement.scrollHeight - this._scrollTarget.document.documentElement.clientHeight;
                    } else {
                        hasShadow = this._scrollTarget.scrollTop < this._scrollTarget.scrollHeight - this._scrollTarget.clientHeight;
                    }
                } else {
                    hasShadow = this.hasPassedElevationThreshold();
                }
            }
            this.update({ hasShadow });
        };
        onChange(this.update, this);
        let scrollTarget = null;
        if (this.props.scrollTarget) {
            if (typeof this.props.scrollTarget === "string") {
                scrollTarget = (
                    this.props.scrollTarget !== "window" ?
                    document.querySelector(this.props.scrollTarget) : window
                ) || window;
            } else if ((this.props.scrollTarget instanceof HTMLElement) || (this.props.scrollTarget instanceof Window)) {
                scrollTarget = this.props.scrollTarget;
            }
        }
        this.setScrollTarget(scrollTarget);
        window.addEventListener("resize", this._onresize = () => {
            this._recalculateScrollbar();
        });
    },

    onUnmounted() {
        offChange(this.update, this);
        this.setScrollTarget(null);
        window.removeEventListener("resize", this._onresize);
    },

    getHeight() {
        return getHeight();
    },

    _onresize: null,
    _onscoll: null,
    _scrollTarget: null,

    _recalculateScrollbar() {
        let margin = 0;
        if (this._scrollTarget != null && !(this._scrollTarget instanceof Window)) {
            margin = this._scrollTarget.getBoundingClientRect().width - this._scrollTarget.scrollWidth;
        }
        this.root.querySelector("[ref=bar]").style.marginRight = margin + "px";
    },

    setScrollTarget(element) {
        if (element === this._scrollTarget) {
            return;
        }
        if (this._scrollTarget != null) {
            this._scrollTarget.removeEventListener("scroll", this._onscoll);
        }
        if (element) {
            (this._scrollTarget = element).addEventListener("scroll", this._onscoll);
        } else {
            this._scrollTarget = null;
        }
        this._recalculateScrollbar();
        this._onscoll();
    },

    getSurface() {
        if (this.props.lightSurface != null && this.props.lightSurface !== "false") {
            return "rm-light-surface";
        }
        if (this.props.darkSurface != null && this.props.darkSurface !== "false"){
            return "rm-dark-surface";
        }
        return "";
    },

    hasPassedElevationThreshold() {
        let elevationThreshold = 0;
        if (this.props.elevationThreshold != null) {
            elevationThreshold = parseInt(this.props.elevationThreshold);
            if (isNaN(elevationThreshold)) {
                elevationThreshold = 0;
            }
        }
        return (
            this._scrollTarget instanceof Window ? this._scrollTarget.scrollY : this._scrollTarget.scrollTop
        ) > elevationThreshold;
    },

    hasPassedBackgroundThreshold() {
        if (this.props.unelevatedBackground == null) {
            return true;
        }
        return this.hasPassedElevationThreshold();
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div expr171="expr171" ref="bar"><slot expr172="expr172"></slot></div>',
      [{
        'redundantAttribute': 'expr171',
        'selector': '[expr171]',

        'expressions': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'class',

          'evaluate': function(scope) {
            return [
              'height-',
              scope.getHeight(),
              ' ',
              scope.getSurface(),
              ' mdc-elevation--z',
              scope.state.hasShadow ? 8 : 0
            ].join('');
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'style',

          'evaluate': function(scope) {
            return scope.hasPassedBackgroundThreshold() ? '' : 'background: ' + scope.props.unelevatedBackground +';';
          }
        }]
      }, {
        'type': bindingTypes.SLOT,
        'attributes': [],
        'name': 'default',
        'redundantAttribute': 'expr172',
        'selector': '[expr172]'
      }]
    );
  },

  'name': 'rm-app-bar'
};

export default rmAppBar;

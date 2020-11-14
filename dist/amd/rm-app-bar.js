define(['./style-inject.es-dcc58f81', './mdc.elevation-d362346e', './elevation-9283330e'], function (styleInject_es, mdc_elevation, elevation) { 'use strict';

    var breakpoints = {
        0: {
            0: 48,
            560: 56
        },
        600: {
            0: 48,
            560: 56,
            640: 64
        }
    };
    var height;
    function get_height() {
        var documentHeight = document.documentElement.clientHeight;
        var documentWidth = document.documentElement.clientWidth;
        var barHeight = 48;
        var heightBreakpoints;
        Object.entries(breakpoints).some(function (entry) {
            var minWidth = entry[0], heightBreakpoints_ = entry[1];
            if (documentWidth < minWidth) {
                return true;
            }
            heightBreakpoints = heightBreakpoints_;
            return false;
        });
        Object.entries(heightBreakpoints).some(function (entry) {
            var minHeight = entry[0], height = entry[1];
            if (documentHeight < minHeight) {
                return true;
            }
            barHeight = height;
            return false;
        });
        return barHeight;
    }
    function getHeight() {
        setup();
        return height;
    }
    var done = false;
    var listeners = [];
    function setup() {
        if (done) {
            return;
        }
        window.addEventListener("resize", function () {
            height = get_height();
            for (var i = 0; i < listeners.length;) {
                var actual = listeners[i];
                actual.listener.call(actual.thisArg);
                if (actual.once) {
                    listeners.splice(i, 1);
                }
                else {
                    i++;
                }
            }
        });
        height = get_height();
        done = true;
    }
    function onChange(listener, thisArg) {
        listeners.push({
            listener: listener,
            thisArg: thisArg,
            once: false
        });
    }
    function offChange(listener, thisArg) {
        var index = -1;
        if (listeners.some(function (l, i) {
            if (listener === l.listener &&
                thisArg === l.thisArg) {
                index = i;
                return true;
            }
            return false;
        })) {
            listeners.splice(index, 1);
        }
    }

    var AppBarComponent = {
      'css': `rm-app-bar,[is="rm-app-bar"]{ display: block; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary, 255, 255, 255)); padding: 8px; box-sizing: border-box; transition: box-shadow ease-in-out 100ms; } rm-app-bar[placeholder]:not([placeholder="false"]),[is="rm-app-bar"][placeholder]:not([placeholder="false"]){ opacity: 0; } rm-app-bar[surface="black"],[is="rm-app-bar"][surface="black"]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } rm-app-bar[surface="dark"],[is="rm-app-bar"][surface="dark"]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } rm-app-bar[surface="light"],[is="rm-app-bar"][surface="light"]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } rm-app-bar[surface="white"],[is="rm-app-bar"][surface="white"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } rm-app-bar[fixed]:not([fixed="false"]),[is="rm-app-bar"][fixed]:not([fixed="false"]){ position: fixed; top: 0; left: 0; right: 0; z-index: 99; } rm-app-bar[fixed]:not([fixed="false"])[bottom]:not([bottom="false"]),[is="rm-app-bar"][fixed]:not([fixed="false"])[bottom]:not([bottom="false"]){ position: fixed; top: unset; bottom: 0; left: 0; right: 0; } rm-app-bar[clamped]:not([clamped="false"]),[is="rm-app-bar"][clamped]:not([clamped="false"]){ overflow: hidden; } rm-app-bar.height-48,[is="rm-app-bar"].height-48{ height: 48px; padding: 4px 8px; } rm-app-bar.height-56,[is="rm-app-bar"].height-56{ height: 56px; } rm-app-bar.height-64,[is="rm-app-bar"].height-64{ height: 64px; padding: 12px 8px; }`,

      'exports': {
        state: {
            hasShadow: false
        },

        _mounted: false,

        onBeforeMount() {
            this._onscroll = () => {
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
        },

        onMounted() {
            onChange(this.update, this);
            window.addEventListener("resize", this._onresize = () => {
                this._recalculateScrollbar();
            });
            this._mounted = true;
            if (this._scrollTarget) {
                this._onscroll();
            }
        },

        onUnmounted() {
            this._mounted = false;
            offChange(this.update, this);
            this.setScrollTarget(null);
            window.removeEventListener("resize", this._onresize);
        },

        getHeight() {
            return getHeight();
        },

        _onresize: null,
        _onscroll: null,
        _scrollTarget: null,

        _recalculateScrollbar() {
            let margin = 0;
            if (this._scrollTarget != null && !(this._scrollTarget instanceof Window)) {
                margin = this._scrollTarget.getBoundingClientRect().width - this._scrollTarget.scrollWidth;
            }
            this.root.style.marginRight = margin + "px";
        },

        setScrollTarget(element) {
            if (element === this._scrollTarget) {
                return;
            }
            if (this._scrollTarget != null) {
                this._scrollTarget.removeEventListener("scroll", this._onscroll);
            }
            if (element) {
                (this._scrollTarget = element).addEventListener("scroll", this._onscroll);
            } else {
                this._scrollTarget = null;
            }
            this._recalculateScrollbar();
            if (this._mounted) {
                this._onscroll();
            }
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
        return template('<slot expr15="expr15"></slot>', [{
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
              return scope.hasPassedBackgroundThreshold() ? "" : "background: " + scope.props.unelevatedBackground +";";
            }
          }]
        }, {
          'type': bindingTypes.SLOT,
          'attributes': [],
          'name': 'default',
          'redundantAttribute': 'expr15',
          'selector': '[expr15]'
        }]);
      },

      'name': 'rm-app-bar'
    };

    return AppBarComponent;

});

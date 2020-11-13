define(['exports', './style-inject.es-dcc58f81', './mdc.elevation-d362346e'], function (exports, styleInject_es, mdc_elevation) { 'use strict';

    if (mdc_elevation.css_248z._neededForStyleInjection) {
        mdc_elevation.css_248z._neededForStyleInjection();
    }
    function elevation(element, elevation) {
        for (var i = 0; i <= 24; i++) {
            if (i === elevation) {
                continue;
            }
            element.classList.remove("mdc-elevation--z" + i);
        }
        if (elevation != null) {
            element.classList.add("mdc-elevation-transition");
            element.classList.add("mdc-elevation--z" + elevation);
        }
        else {
            element.classList.remove("mdc-elevation-transition");
        }
    }

    exports.elevation = elevation;

    Object.defineProperty(exports, '__esModule', { value: true });

});

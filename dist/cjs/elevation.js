'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./style-inject.es-dcee06b6.js');
var mdc_elevation = require('./mdc.elevation-9bc22beb.js');

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

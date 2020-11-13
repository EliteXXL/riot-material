import './style-inject.es-1f59c1d0.js';
import { c as css_248z } from './mdc.elevation-603a7f6f.js';

if (css_248z._neededForStyleInjection) {
    css_248z._neededForStyleInjection();
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

export { elevation };

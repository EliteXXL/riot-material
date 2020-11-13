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

var elevation$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    elevation: elevation
});

export { elevation as a, elevation$1 as e };

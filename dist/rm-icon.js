(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var module = require("module");
    var elevationCSS = module.uri.split("/").slice(0, -1).join("/") + "/lib/material/icons/material-icons.css";
    var linkEl = document.createElement("link");
    linkEl.rel = "stylesheet";
    linkEl.href = elevationCSS;
    document.head.appendChild(linkEl);
    exports.default = {
        'css': "rm-icon,[is=\"rm-icon\"]{ font-size: 24px; }",
        'exports': {
            onMounted: function () {
                this.root.classList.add("material-icons");
            }
        },
        'template': function (template, expressionTypes, bindingTypes, getComponent) {
            return template('<slot expr17="expr17"></slot>', [{
                    'type': bindingTypes.SLOT,
                    'attributes': [],
                    'name': 'default',
                    'redundantAttribute': 'expr17',
                    'selector': '[expr17]'
                }]);
        },
        'name': 'rm-icon'
    };
});

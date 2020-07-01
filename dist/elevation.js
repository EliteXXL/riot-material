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
    exports.elevation = void 0;
    var module = require("module");
    var elevationCSS = module.uri.split("/").slice(0, -1).join("/") + "/lib/material/elevation/mdc.elevation.min.css";
    var linkEl = document.createElement("link");
    linkEl.rel = "stylesheet";
    linkEl.href = elevationCSS;
    document.head.appendChild(linkEl);
    function elevation(element, elevation) {
        for (var i = 0; i <= 24; i++) {
            if (i === elevation) {
                continue;
            }
            element.classList.remove("mdc-elevation--z" + i);
        }
        if (elevation != null) {
            element.classList.add("mdc-elevation--z" + elevation);
        }
    }
    exports.elevation = elevation;
});

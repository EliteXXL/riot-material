'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var style = document.createElement("style");
style.innerHTML = "\n.rm-background {\n    background: rgb(245, 245, 245);\n    background: rgb(var(--color-background, 245, 245, 245));\n    color: rgb(0, 0, 0);\n    color: rgb(var(--color-on-background, 0, 0, 0));\n}\n";
document.head.appendChild(style);
var background = "rm-background";

exports.background = background;

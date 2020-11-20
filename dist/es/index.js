import './style-inject.es-1f59c1d0.js';
import './mdc.elevation-603a7f6f.js';
import AppBarComponent from './rm-app-bar.js';
export { default as AppBarComponent } from './rm-app-bar.js';
export { e as elevation } from './elevation-1b68733d.js';
import BottomSheetComponent from './rm-bottom-sheet.js';
export { default as BottomSheetComponent } from './rm-bottom-sheet.js';
import './tslib.es6-2755a364.js';
import './ripple-256651ea.js';
import { register } from 'riot';
import IconComponent from './rm-icon.js';
export { default as IconComponent } from './rm-icon.js';
import { B as ButtonComponent } from './rm-button-34a0445a.js';
export { B as ButtonComponent } from './rm-button-34a0445a.js';
import CheckboxComponent from './rm-checkbox.js';
export { default as CheckboxComponent } from './rm-checkbox.js';
import DialogComponent from './rm-dialog.js';
export { default as DialogComponent } from './rm-dialog.js';
import DividerComponent from './rm-divider.js';
export { default as DividerComponent } from './rm-divider.js';
import MenuComponent from './rm-menu.js';
export { default as MenuComponent } from './rm-menu.js';
import MenuItemComponent from './rm-menu-item.js';
export { default as MenuItemComponent } from './rm-menu-item.js';
import RadioComponent from './rm-radio.js';
export { default as RadioComponent } from './rm-radio.js';
import RippleComponent from './rm-ripple.js';
export { default as RippleComponent } from './rm-ripple.js';
import TextfieldContainerComponent from './rm-textfield-container.js';
export { default as TextfieldContainerComponent } from './rm-textfield-container.js';
import SelectComponent from './rm-select.js';
export { default as SelectComponent } from './rm-select.js';
import TabbedPagesComponent from './rm-tabbed-pages.js';
export { default as TabbedPagesComponent } from './rm-tabbed-pages.js';
import TabsComponent from './rm-tabs.js';
export { default as TabsComponent } from './rm-tabs.js';
import TextareaComponent from './rm-textarea.js';
export { default as TextareaComponent } from './rm-textarea.js';
import TextfieldComponent from './rm-textfield.js';
export { default as TextfieldComponent } from './rm-textfield.js';

var style = document.createElement("style");
style.innerHTML = "\n.rm-background {\n    background: rgb(245, 245, 245);\n    background: rgb(var(--color-background, 245, 245, 245));\n    color: rgb(0, 0, 0);\n    color: rgb(var(--color-on-background, 0, 0, 0));\n}\n";
document.head.appendChild(style);
var background = "rm-background";

var background$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	background: background
});

var style$1 = document.createElement("style");
style$1.innerHTML = "\n.rm-black-surface {\n    background: rgb(0, 0, 0);\n    background: rgb(var(--color-black-surface, 0, 0, 0));\n    color: rgb(255, 255, 255);\n    color: rgb(var(--color-on-black, 255, 255, 255));\n}\n.rm-dark-surface {\n    background: rgb(10, 10, 10);\n    background: rgb(var(--color-dark-surface, 10, 10, 10));\n    color: rgb(255, 255, 255);\n    color: rgb(var(--color-on-dark, 255, 255, 255));\n}\n.rm-light-surface {\n    background: rgb(250, 250, 250);\n    background: rgb(var(--color-light-surface, 250, 250, 250));\n    color: rgb(0, 0, 0);\n    color: rgb(var(--color-on-light, 0, 0, 0));\n}\n.rm-white-surface {\n    background: rgb(255, 255, 255);\n    background: rgb(var(--color-white-surface, 255, 255, 255));\n    color: rgb(0, 0, 0);\n    color: rgb(var(--color-on-white, 0, 0, 0));\n}\n";
document.head.appendChild(style$1);
var black = "rm-black-surface";
var dark = "rm-dark-surface";
var light = "rm-light-surface";
var white = "rm-white-surface";

var surfaces = /*#__PURE__*/Object.freeze({
	__proto__: null,
	black: black,
	dark: dark,
	light: light,
	white: white
});

register("rm-app-bar", AppBarComponent);
register("rm-bottom-sheet", BottomSheetComponent);
register("rm-button", ButtonComponent);
register("rm-checkbox", CheckboxComponent);
register("rm-dialog", DialogComponent);
register("rm-divider", DividerComponent);
register("rm-icon", IconComponent);
register("rm-menu", MenuComponent);
register("rm-menu-item", MenuItemComponent);
register("rm-radio", RadioComponent);
register("rm-ripple", RippleComponent);
register("rm-select", SelectComponent);
register("rm-tabbed-pages", TabbedPagesComponent);
register("rm-tabs", TabsComponent);
register("rm-textarea", TextareaComponent);
register("rm-textfield", TextfieldComponent);
register("rm-textfield-container", TextfieldContainerComponent);

export { background$1 as background, surfaces };

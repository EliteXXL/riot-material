define(['exports', './style-inject.es-dcc58f81', './mdc.elevation-d362346e', './rm-app-bar', './elevation-9283330e', './rm-bottom-sheet', './tslib.es6-3a2117de', './ripple-9ef33106', 'riot', './rm-icon', './pointerController-ae6dff1d', './rm-button', './rm-checkbox', './rm-dialog', './rm-divider', './rm-menu', './rm-menu-item', './rm-radio', './rm-ripple', './rm-textfield-container', './rm-select', './rm-tabbed-pages', './rm-tabs', './rm-textarea', './rm-textfield'], function (exports, styleInject_es, mdc_elevation, rmAppBar, elevation, rmBottomSheet, tslib_es6, ripple, riot, rmIcon, pointerController, rmButton, rmCheckbox, rmDialog, rmDivider, rmMenu, rmMenuItem, rmRadio, rmRipple, rmTextfieldContainer, rmSelect, rmTabbedPages, rmTabs, rmTextarea, rmTextfield) { 'use strict';

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

	riot.register("rm-app-bar", rmAppBar);
	riot.register("rm-bottom-sheet", rmBottomSheet);
	riot.register("rm-button", rmButton);
	riot.register("rm-checkbox", rmCheckbox);
	riot.register("rm-dialog", rmDialog);
	riot.register("rm-divider", rmDivider);
	riot.register("rm-icon", rmIcon);
	riot.register("rm-menu", rmMenu);
	riot.register("rm-menu-item", rmMenuItem);
	riot.register("rm-radio", rmRadio);
	riot.register("rm-ripple", rmRipple);
	riot.register("rm-select", rmSelect);
	riot.register("rm-tabbed-pages", rmTabbedPages);
	riot.register("rm-tabs", rmTabs);
	riot.register("rm-textarea", rmTextarea);
	riot.register("rm-textfield", rmTextfield);
	riot.register("rm-textfield-container", rmTextfieldContainer);

	exports.AppBarComponent = rmAppBar;
	exports.elevation = elevation.elevation;
	exports.BottomSheetComponent = rmBottomSheet;
	exports.IconComponent = rmIcon;
	exports.ButtonComponent = rmButton;
	exports.CheckboxComponent = rmCheckbox;
	exports.DialogComponent = rmDialog;
	exports.DividerComponent = rmDivider;
	exports.MenuComponent = rmMenu;
	exports.MenuItemComponent = rmMenuItem;
	exports.RadioComponent = rmRadio;
	exports.RippleComponent = rmRipple;
	exports.TextfieldContainerComponent = rmTextfieldContainer;
	exports.SelectComponent = rmSelect;
	exports.TabbedPagesComponent = rmTabbedPages;
	exports.TabsComponent = rmTabs;
	exports.TextareaComponent = rmTextarea;
	exports.TextfieldComponent = rmTextfield;
	exports.background = background$1;
	exports.surfaces = surfaces;

	Object.defineProperty(exports, '__esModule', { value: true });

});

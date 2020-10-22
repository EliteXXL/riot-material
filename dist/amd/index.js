define(['exports', './rm-app-bar', './rm-bottom-sheet', './rm-button', './rm-checkbox', './rm-dialog', './rm-divider', './rm-icon', './rm-menu', './rm-menu-item', './rm-radio', './rm-ripple', './rm-select', './rm-tabbed-pages', './rm-tabs', './rm-textarea', './rm-textfield', './rm-textfield-container', './elevation', './background', './surfaces', 'riot'], function (exports, AppBarComponent, BottomSheetComponent, ButtonComponent, CheckboxComponent, DialogComponent, DividerComponent, IconComponent, MenuComponent, MenuItemComponent, RadioComponent, RippleComponent, SelectComponent, TabbedPagesComponent, TabsComponent, TextareaComponent, TextfieldComponent, TextfieldContainer, elevation, background, surfaces, riot) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				}
			});
		}
		n['default'] = e;
		return Object.freeze(n);
	}

	var AppBarComponent__default = /*#__PURE__*/_interopDefaultLegacy(AppBarComponent);
	var BottomSheetComponent__default = /*#__PURE__*/_interopDefaultLegacy(BottomSheetComponent);
	var ButtonComponent__default = /*#__PURE__*/_interopDefaultLegacy(ButtonComponent);
	var CheckboxComponent__default = /*#__PURE__*/_interopDefaultLegacy(CheckboxComponent);
	var DialogComponent__default = /*#__PURE__*/_interopDefaultLegacy(DialogComponent);
	var DividerComponent__default = /*#__PURE__*/_interopDefaultLegacy(DividerComponent);
	var IconComponent__default = /*#__PURE__*/_interopDefaultLegacy(IconComponent);
	var MenuComponent__default = /*#__PURE__*/_interopDefaultLegacy(MenuComponent);
	var MenuItemComponent__default = /*#__PURE__*/_interopDefaultLegacy(MenuItemComponent);
	var RadioComponent__default = /*#__PURE__*/_interopDefaultLegacy(RadioComponent);
	var RippleComponent__default = /*#__PURE__*/_interopDefaultLegacy(RippleComponent);
	var SelectComponent__default = /*#__PURE__*/_interopDefaultLegacy(SelectComponent);
	var TabbedPagesComponent__default = /*#__PURE__*/_interopDefaultLegacy(TabbedPagesComponent);
	var TabsComponent__default = /*#__PURE__*/_interopDefaultLegacy(TabsComponent);
	var TextareaComponent__default = /*#__PURE__*/_interopDefaultLegacy(TextareaComponent);
	var TextfieldComponent__default = /*#__PURE__*/_interopDefaultLegacy(TextfieldComponent);
	var TextfieldContainer__default = /*#__PURE__*/_interopDefaultLegacy(TextfieldContainer);
	var elevation__namespace = /*#__PURE__*/_interopNamespace(elevation);
	var background__namespace = /*#__PURE__*/_interopNamespace(background);
	var surfaces__namespace = /*#__PURE__*/_interopNamespace(surfaces);

	riot.register("rm-app-bar", AppBarComponent__default['default']);
	riot.register("rm-bottom-sheet", BottomSheetComponent__default['default']);
	riot.register("rm-button", ButtonComponent__default['default']);
	riot.register("rm-checkbox", CheckboxComponent__default['default']);
	riot.register("rm-dialog", DialogComponent__default['default']);
	riot.register("rm-divider", DividerComponent__default['default']);
	riot.register("rm-icon", IconComponent__default['default']);
	riot.register("rm-menu", MenuComponent__default['default']);
	riot.register("rm-menu-item", MenuItemComponent__default['default']);
	riot.register("rm-radio", RadioComponent__default['default']);
	riot.register("rm-ripple", RippleComponent__default['default']);
	riot.register("rm-select", SelectComponent__default['default']);
	riot.register("rm-tabbed-pages", TabbedPagesComponent__default['default']);
	riot.register("rm-tabs", TabsComponent__default['default']);
	riot.register("rm-textarea", TextareaComponent__default['default']);
	riot.register("rm-textfield", TextfieldComponent__default['default']);
	riot.register("rm-textfield-container", TextfieldContainer__default['default']);

	Object.defineProperty(exports, 'AppBarComponent', {
		enumerable: true,
		get: function () {
			return AppBarComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'BottomSheetComponent', {
		enumerable: true,
		get: function () {
			return BottomSheetComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'ButtonComponent', {
		enumerable: true,
		get: function () {
			return ButtonComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'CheckboxComponent', {
		enumerable: true,
		get: function () {
			return CheckboxComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'DialogComponent', {
		enumerable: true,
		get: function () {
			return DialogComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'DividerComponent', {
		enumerable: true,
		get: function () {
			return DividerComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'IconComponent', {
		enumerable: true,
		get: function () {
			return IconComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'MenuComponent', {
		enumerable: true,
		get: function () {
			return MenuComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'MenuItemComponent', {
		enumerable: true,
		get: function () {
			return MenuItemComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'RadioComponent', {
		enumerable: true,
		get: function () {
			return RadioComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'RippleComponent', {
		enumerable: true,
		get: function () {
			return RippleComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'SelectComponent', {
		enumerable: true,
		get: function () {
			return SelectComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'TabbedPagesComponent', {
		enumerable: true,
		get: function () {
			return TabbedPagesComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'TabsComponent', {
		enumerable: true,
		get: function () {
			return TabsComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'TextareaComponent', {
		enumerable: true,
		get: function () {
			return TextareaComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'TextfieldComponent', {
		enumerable: true,
		get: function () {
			return TextfieldComponent__default['default'];
		}
	});
	Object.defineProperty(exports, 'TextfieldContainerComponent', {
		enumerable: true,
		get: function () {
			return TextfieldContainer__default['default'];
		}
	});
	exports.elevation = elevation__namespace;
	exports.background = background__namespace;
	exports.surfaces = surfaces__namespace;

	Object.defineProperty(exports, '__esModule', { value: true });

});

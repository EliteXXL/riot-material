define(['exports', './rm-app-bar', './rm-bottom-sheet', './rm-button', './rm-checkbox', './rm-dialog', './rm-divider', './rm-icon', './rm-radio', './rm-ripple', './rm-select', './rm-tabbed-pages', './rm-tabs', './rm-textarea', './rm-textfield', './elevation', './background', './surfaces', 'riot'], function (exports, AppBarComponent, BottomSheetComponent, ButtonComponent, CheckboxComponent, DialogComponent, DividerComponent, IconComponent, RadioComponent, RippleComponent, SelectComponent, TabbedPagesComponent, TabsComponent, TextareaComponent, TextfieldComponent, elevation, background, surfaces, riot) { 'use strict';

	AppBarComponent = AppBarComponent && Object.prototype.hasOwnProperty.call(AppBarComponent, 'default') ? AppBarComponent['default'] : AppBarComponent;
	BottomSheetComponent = BottomSheetComponent && Object.prototype.hasOwnProperty.call(BottomSheetComponent, 'default') ? BottomSheetComponent['default'] : BottomSheetComponent;
	ButtonComponent = ButtonComponent && Object.prototype.hasOwnProperty.call(ButtonComponent, 'default') ? ButtonComponent['default'] : ButtonComponent;
	CheckboxComponent = CheckboxComponent && Object.prototype.hasOwnProperty.call(CheckboxComponent, 'default') ? CheckboxComponent['default'] : CheckboxComponent;
	DialogComponent = DialogComponent && Object.prototype.hasOwnProperty.call(DialogComponent, 'default') ? DialogComponent['default'] : DialogComponent;
	DividerComponent = DividerComponent && Object.prototype.hasOwnProperty.call(DividerComponent, 'default') ? DividerComponent['default'] : DividerComponent;
	IconComponent = IconComponent && Object.prototype.hasOwnProperty.call(IconComponent, 'default') ? IconComponent['default'] : IconComponent;
	RadioComponent = RadioComponent && Object.prototype.hasOwnProperty.call(RadioComponent, 'default') ? RadioComponent['default'] : RadioComponent;
	RippleComponent = RippleComponent && Object.prototype.hasOwnProperty.call(RippleComponent, 'default') ? RippleComponent['default'] : RippleComponent;
	SelectComponent = SelectComponent && Object.prototype.hasOwnProperty.call(SelectComponent, 'default') ? SelectComponent['default'] : SelectComponent;
	TabbedPagesComponent = TabbedPagesComponent && Object.prototype.hasOwnProperty.call(TabbedPagesComponent, 'default') ? TabbedPagesComponent['default'] : TabbedPagesComponent;
	TabsComponent = TabsComponent && Object.prototype.hasOwnProperty.call(TabsComponent, 'default') ? TabsComponent['default'] : TabsComponent;
	TextareaComponent = TextareaComponent && Object.prototype.hasOwnProperty.call(TextareaComponent, 'default') ? TextareaComponent['default'] : TextareaComponent;
	TextfieldComponent = TextfieldComponent && Object.prototype.hasOwnProperty.call(TextfieldComponent, 'default') ? TextfieldComponent['default'] : TextfieldComponent;

	riot.register("rm-app-bar", AppBarComponent);
	riot.register("rm-bottom-sheet", BottomSheetComponent);
	riot.register("rm-button", ButtonComponent);
	riot.register("rm-checkbox", CheckboxComponent);
	riot.register("rm-dialog", DialogComponent);
	riot.register("rm-divider", DividerComponent);
	riot.register("rm-icon", IconComponent);
	riot.register("rm-radio", RadioComponent);
	riot.register("rm-ripple", RippleComponent);
	riot.register("rm-select", SelectComponent);
	riot.register("rm-tabbed-pages", TabbedPagesComponent);
	riot.register("rm-tabs", TabsComponent);
	riot.register("rm-textarea", TextareaComponent);
	riot.register("rm-textfield", TextfieldComponent);

	exports.AppBarComponent = AppBarComponent;
	exports.BottomSheetComponent = BottomSheetComponent;
	exports.ButtonComponent = ButtonComponent;
	exports.CheckboxComponent = CheckboxComponent;
	exports.DialogComponent = DialogComponent;
	exports.DividerComponent = DividerComponent;
	exports.IconComponent = IconComponent;
	exports.RadioComponent = RadioComponent;
	exports.RippleComponent = RippleComponent;
	exports.SelectComponent = SelectComponent;
	exports.TabbedPagesComponent = TabbedPagesComponent;
	exports.TabsComponent = TabsComponent;
	exports.TextareaComponent = TextareaComponent;
	exports.TextfieldComponent = TextfieldComponent;
	exports.elevation = elevation;
	exports.background = background;
	exports.surfaces = surfaces;

	Object.defineProperty(exports, '__esModule', { value: true });

});

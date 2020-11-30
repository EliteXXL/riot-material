'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AppBarComponent = require('@riot-material/rm-app-bar');
var ButtonComponent = require('@riot-material/rm-button');
var CheckboxComponent = require('@riot-material/rm-checkbox');
var DialogComponent = require('@riot-material/rm-dialog');
var DividerComponent = require('@riot-material/rm-divider');
var IconComponent = require('@riot-material/rm-icon');
var ListItemComponent = require('@riot-material/rm-list-item');
var MenuComponent = require('@riot-material/rm-menu');
var MenuItemComponent = require('@riot-material/rm-menu-item');
var RadioComponent = require('@riot-material/rm-radio');
var SelectComponent = require('@riot-material/rm-select');
var TabbedPagesComponent = require('@riot-material/rm-tabbed-pages');
var TextfieldComponent = require('@riot-material/rm-textfield');
var TextfieldContainerComponent = require('@riot-material/rm-textfield-container');
var elevation = require('@riot-material/elevation');
var background = require('@riot-material/background');
var surfaces = require('@riot-material/surfaces');
var ripple = require('@riot-material/ripple');
var riot = require('riot');

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
var ButtonComponent__default = /*#__PURE__*/_interopDefaultLegacy(ButtonComponent);
var CheckboxComponent__default = /*#__PURE__*/_interopDefaultLegacy(CheckboxComponent);
var DialogComponent__default = /*#__PURE__*/_interopDefaultLegacy(DialogComponent);
var DividerComponent__default = /*#__PURE__*/_interopDefaultLegacy(DividerComponent);
var IconComponent__default = /*#__PURE__*/_interopDefaultLegacy(IconComponent);
var ListItemComponent__default = /*#__PURE__*/_interopDefaultLegacy(ListItemComponent);
var MenuComponent__default = /*#__PURE__*/_interopDefaultLegacy(MenuComponent);
var MenuItemComponent__default = /*#__PURE__*/_interopDefaultLegacy(MenuItemComponent);
var RadioComponent__default = /*#__PURE__*/_interopDefaultLegacy(RadioComponent);
var SelectComponent__default = /*#__PURE__*/_interopDefaultLegacy(SelectComponent);
var TabbedPagesComponent__default = /*#__PURE__*/_interopDefaultLegacy(TabbedPagesComponent);
var TextfieldComponent__default = /*#__PURE__*/_interopDefaultLegacy(TextfieldComponent);
var TextfieldContainerComponent__default = /*#__PURE__*/_interopDefaultLegacy(TextfieldContainerComponent);
var elevation__default = /*#__PURE__*/_interopDefaultLegacy(elevation);
var background__namespace = /*#__PURE__*/_interopNamespace(background);
var surfaces__namespace = /*#__PURE__*/_interopNamespace(surfaces);
var ripple__namespace = /*#__PURE__*/_interopNamespace(ripple);

riot.register("rm-app-bar", AppBarComponent__default['default']);
// register("rm-bottom-sheet", BottomSheetComponent);
riot.register("rm-button", ButtonComponent__default['default']);
riot.register("rm-checkbox", CheckboxComponent__default['default']);
riot.register("rm-dialog", DialogComponent__default['default']);
riot.register("rm-divider", DividerComponent__default['default']);
riot.register("rm-icon", IconComponent__default['default']);
riot.register("rm-list-item", ListItemComponent__default['default']);
riot.register("rm-menu", MenuComponent__default['default']);
riot.register("rm-menu-item", MenuItemComponent__default['default']);
riot.register("rm-radio", RadioComponent__default['default']);
// register("rm-ripple", RippleComponent);
riot.register("rm-select", SelectComponent__default['default']);
riot.register("rm-tabbed-pages", TabbedPagesComponent__default['default']);
// register("rm-tabs", TabsComponent);
// register("rm-textarea", TextareaComponent);
riot.register("rm-textfield", TextfieldComponent__default['default']);
riot.register("rm-textfield-container", TextfieldContainerComponent__default['default']);

// tslint:disable-next-line:typedef
const components = {
    appBar: AppBarComponent__default['default'],
    // bottomSheet: BottomSheetComponent,
    button: ButtonComponent__default['default'],
    checkbox: CheckboxComponent__default['default'],
    dialog: DialogComponent__default['default'],
    divider: DividerComponent__default['default'],
    icon: IconComponent__default['default'],
    listItem: ListItemComponent__default['default'],
    menu: MenuComponent__default['default'],
    menuItem: MenuItemComponent__default['default'],
    radio: RadioComponent__default['default'],
    // ripple: RippleComponent,
    select: SelectComponent__default['default'],
    tabbedPages: TabbedPagesComponent__default['default'],
    // tabs: TabsComponent,
    // textarea: TextareaComponent,
    textfield: TextfieldComponent__default['default'],
    textfieldContainer: TextfieldContainerComponent__default['default']
};

Object.defineProperty(exports, 'elevation', {
    enumerable: true,
    get: function () {
        return elevation__default['default'];
    }
});
exports.background = background__namespace;
exports.surfaces = surfaces__namespace;
exports.ripple = ripple__namespace;
exports.components = components;

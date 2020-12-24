import AppBarComponent from '@riot-material/rm-app-bar';
import ButtonComponent from '@riot-material/rm-button';
import CheckboxComponent from '@riot-material/rm-checkbox';
import DialogComponent from '@riot-material/rm-dialog';
import DividerComponent from '@riot-material/rm-divider';
import IconComponent from '@riot-material/rm-icon';
import ListItemComponent from '@riot-material/rm-list-item';
import MenuComponent from '@riot-material/rm-menu';
import MenuItemComponent from '@riot-material/rm-menu-item';
import RadioComponent from '@riot-material/rm-radio';
import SelectComponent from '@riot-material/rm-select';
import TabbedPagesComponent from '@riot-material/rm-tabbed-pages';
import TextfieldComponent from '@riot-material/rm-textfield';
import TextfieldContainerComponent from '@riot-material/rm-textfield-container';
export { default as elevation } from '@riot-material/elevation';
import * as background from '@riot-material/background';
export { background };
import * as surfaces from '@riot-material/surfaces';
export { surfaces };
import * as ripple from '@riot-material/ripple';
export { ripple };
import * as appBarUtils from '@riot-material/app-bar-utils';
export { appBarUtils };
import { register } from 'riot';

var index = {
  'css': `rm-circular-avatar,[is="rm-circular-avatar"]{ display: block; height: 40px; width: 40px; border-radius: 50%; background: gray; }`,
  'exports': null,
  'template': null,
  'name': 'rm-circular-avatar'
};

var index$1 = {
  'css': `rm-list-group > rm-list-item:not(:first-child),[is="rm-list-group"] > rm-list-item:not(:first-child),rm-list-group > [is="rm-list-item"]:not(:first-child),[is="rm-list-group"] > [is="rm-list-item"]:not(:first-child){ padding-left: 2em; }`,

  'exports': {
    components: {
        "rm-list-item": ListItemComponent
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<rm-list-item expr0="expr0" passive></rm-list-item><slot expr1="expr1"></slot>',
      [{
        'type': bindingTypes.TAG,
        'getComponent': getComponent,

        'evaluate': function(scope) {
          return 'rm-list-item';
        },

        'slots': [{
          'id': 'default',
          'html': ' ',

          'bindings': [{
            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.label;
              }
            }]
          }]
        }],

        'attributes': [],
        'redundantAttribute': 'expr0',
        'selector': '[expr0]'
      }, {
        'type': bindingTypes.SLOT,
        'attributes': [],
        'name': 'default',
        'redundantAttribute': 'expr1',
        'selector': '[expr1]'
      }]
    );
  },

  'name': 'rm-list-group'
};

var index$2 = {
  'css': `rm-list-image,[is="rm-list-image"]{ display: block; height: 56px; width: 56px; background: gray; } rm-list-image[large],[is="rm-list-image"][large]{ width: 100px; margin-left: -16px; }`,
  'exports': null,
  'template': null,
  'name': 'rm-list-image'
};

register("rm-app-bar", AppBarComponent);
// register("rm-bottom-sheet", BottomSheetComponent);
register("rm-button", ButtonComponent);
register("rm-checkbox", CheckboxComponent);
register("rm-circular-avatar", index);
register("rm-dialog", DialogComponent);
register("rm-divider", DividerComponent);
register("rm-icon", IconComponent);
register("rm-list-group", index$1);
register("rm-list-image", index$2);
register("rm-list-item", ListItemComponent);
register("rm-menu", MenuComponent);
register("rm-menu-item", MenuItemComponent);
register("rm-radio", RadioComponent);
// register("rm-ripple", RippleComponent);
register("rm-select", SelectComponent);
register("rm-tabbed-pages", TabbedPagesComponent);
// register("rm-tabs", TabsComponent);
// register("rm-textarea", TextareaComponent);
register("rm-textfield", TextfieldComponent);
register("rm-textfield-container", TextfieldContainerComponent);

// tslint:disable-next-line:typedef
const components = {
    appBar: AppBarComponent,
    // bottomSheet: BottomSheetComponent,
    button: ButtonComponent,
    checkbox: CheckboxComponent,
    circularAvatar: index,
    dialog: DialogComponent,
    divider: DividerComponent,
    icon: IconComponent,
    listGroup: index$1,
    listImage: index$2,
    listItem: ListItemComponent,
    menu: MenuComponent,
    menuItem: MenuItemComponent,
    radio: RadioComponent,
    // ripple: RippleComponent,
    select: SelectComponent,
    tabbedPages: TabbedPagesComponent,
    // tabs: TabsComponent,
    // textarea: TextareaComponent,
    textfield: TextfieldComponent,
    textfieldContainer: TextfieldContainerComponent
};

export { components };

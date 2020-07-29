import AppBarComponent from './rm-app-bar';
export { default as AppBarComponent } from './rm-app-bar';
import BottomSheetComponent from './rm-bottom-sheet';
export { default as BottomSheetComponent } from './rm-bottom-sheet';
import ButtonComponent from './rm-button';
export { default as ButtonComponent } from './rm-button';
import CheckboxComponent from './rm-checkbox';
export { default as CheckboxComponent } from './rm-checkbox';
import DialogComponent from './rm-dialog';
export { default as DialogComponent } from './rm-dialog';
import DividerComponent from './rm-divider';
export { default as DividerComponent } from './rm-divider';
import IconComponent from './rm-icon';
export { default as IconComponent } from './rm-icon';
import MenuComponent from './rm-menu';
export { default as MenuComponent } from './rm-menu';
import MenuItemComponent from './rm-menu-item';
export { default as MenuItemComponent } from './rm-menu-item';
import RadioComponent from './rm-radio';
export { default as RadioComponent } from './rm-radio';
import RippleComponent from './rm-ripple';
export { default as RippleComponent } from './rm-ripple';
import SelectComponent from './rm-select';
export { default as SelectComponent } from './rm-select';
import TabbedPagesComponent from './rm-tabbed-pages';
export { default as TabbedPagesComponent } from './rm-tabbed-pages';
import TabsComponent from './rm-tabs';
export { default as TabsComponent } from './rm-tabs';
import TextareaComponent from './rm-textarea';
export { default as TextareaComponent } from './rm-textarea';
import TextfieldComponent from './rm-textfield';
export { default as TextfieldComponent } from './rm-textfield';
import TextfieldContainer from './rm-textfield-container';
export { default as TextfieldContainerComponent } from './rm-textfield-container';
import * as elevation from './elevation';
export { elevation };
import * as background from './background';
export { background };
import * as surfaces from './surfaces';
export { surfaces };
import { register } from 'riot';

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
register("rm-textfield-container", TextfieldContainer);

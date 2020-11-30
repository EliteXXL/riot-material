import AppBarComponent from "@riot-material/rm-app-bar";
// import BottomSheetComponent from "@riot-material/rm-bottom-sheet";
import ButtonComponent from "@riot-material/rm-button";
import CheckboxComponent from "@riot-material/rm-checkbox";
import DialogComponent from "@riot-material/rm-dialog";
import DividerComponent from "@riot-material/rm-divider";
import IconComponent from "@riot-material/rm-icon";
import ListItemComponent from "@riot-material/rm-list-item";
import MenuComponent from "@riot-material/rm-menu";
import MenuItemComponent from "@riot-material/rm-menu-item";
import RadioComponent from "@riot-material/rm-radio";
// import RippleComponent from "@riot-material/rm-ripple";
import SelectComponent from "@riot-material/rm-select";
import TabbedPagesComponent from "@riot-material/rm-tabbed-pages";
// import TabsComponent from "@riot-material/rm-tabs";
// import TextareaComponent from "@riot-material/rm-textarea";
import TextfieldComponent from "@riot-material/rm-textfield";
import TextfieldContainerComponent from "@riot-material/rm-textfield-container";

import elevation from "@riot-material/elevation";

import * as background from "@riot-material/background";
import * as surfaces from "@riot-material/surfaces";
import * as ripple from "@riot-material/ripple";

import { register } from "riot";

register("rm-app-bar", AppBarComponent);
// register("rm-bottom-sheet", BottomSheetComponent);
register("rm-button", ButtonComponent);
register("rm-checkbox", CheckboxComponent);
register("rm-dialog", DialogComponent);
register("rm-divider", DividerComponent);
register("rm-icon", IconComponent);
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
    dialog: DialogComponent,
    divider: DividerComponent,
    icon: IconComponent,
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

export {
    components,
    elevation,
    background,
    ripple,
    surfaces
};
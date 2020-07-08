import AppBarComponent from "./rm-app-bar.riot";
import BottomSheetComponent from "./rm-bottom-sheet.riot";
import ButtonComponent from "./rm-button.riot";
import CheckboxComponent from "./rm-checkbox.riot";
import DialogComponent from "./rm-dialog.riot";
import DividerComponent from "./rm-divider.riot";
import IconComponent from "./rm-icon.riot";
import RadioComponent from "./rm-radio.riot";
import RippleComponent from "./rm-ripple.riot";
import SelectComponent from "./rm-select.riot";
import TabsComponent from "./rm-tabs.riot";
import TextareaComponent from "./rm-textarea.riot";
import TextfieldComponent from "./rm-textfield.riot";

export * as elevation from "./elevation";

export * as background from "./background";
export * as surfaces from "./surfaces";

import * as riot from "riot";

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
riot.register("rm-tabs", TabsComponent);
riot.register("rm-textarea", TextareaComponent);
riot.register("rm-textfield", TextfieldComponent);

export {
    AppBarComponent,
    BottomSheetComponent,
    ButtonComponent,
    CheckboxComponent,
    DialogComponent,
    DividerComponent,
    IconComponent,
    RadioComponent,
    RippleComponent,
    SelectComponent,
    TabsComponent,
    TextareaComponent,
    TextfieldComponent
};
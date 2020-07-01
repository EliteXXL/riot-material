// @ts-ignore
import AppBarComponent from "./rm-app-bar";
// @ts-ignore
import BottomSheetComponent from "./rm-bottom-sheet";
// @ts-ignore
import ButtonComponent from "./rm-button";
// @ts-ignore
import CheckboxComponent from "./rm-checkbox";
// @ts-ignore
import DialogComponent from "./rm-dialog";
// @ts-ignore
import DividerComponent from "./rm-divider";
// @ts-ignore
import IconComponent from "./rm-icon";
// @ts-ignore
import RadioComponent from "./rm-radio";
// @ts-ignore
import RippleComponent from "./rm-ripple";
// @ts-ignore
import SelectComponent from "./rm-select";
// @ts-ignore
import TabsComponent from "./rm-tabs";
// @ts-ignore
import TextareaComponent from "./rm-textarea";
// @ts-ignore
import TextfieldComponent from "./rm-textfield";

import "./elevation";

import "./background";
import "./surfaces";

import riot = require("riot");

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
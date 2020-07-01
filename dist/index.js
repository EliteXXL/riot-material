var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./rm-app-bar", "./rm-bottom-sheet", "./rm-button", "./rm-checkbox", "./rm-dialog", "./rm-divider", "./rm-icon", "./rm-radio", "./rm-ripple", "./rm-select", "./rm-tabs", "./rm-textarea", "./rm-textfield", "./elevation", "./background", "./surfaces", "riot"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_app_bar_1 = __importDefault(require("./rm-app-bar"));
    var rm_bottom_sheet_1 = __importDefault(require("./rm-bottom-sheet"));
    var rm_button_1 = __importDefault(require("./rm-button"));
    var rm_checkbox_1 = __importDefault(require("./rm-checkbox"));
    var rm_dialog_1 = __importDefault(require("./rm-dialog"));
    var rm_divider_1 = __importDefault(require("./rm-divider"));
    var rm_icon_1 = __importDefault(require("./rm-icon"));
    var rm_radio_1 = __importDefault(require("./rm-radio"));
    var rm_ripple_1 = __importDefault(require("./rm-ripple"));
    var rm_select_1 = __importDefault(require("./rm-select"));
    var rm_tabs_1 = __importDefault(require("./rm-tabs"));
    var rm_textarea_1 = __importDefault(require("./rm-textarea"));
    var rm_textfield_1 = __importDefault(require("./rm-textfield"));
    require("./elevation");
    require("./background");
    require("./surfaces");
    var riot = require("riot");
    riot.register("rm-app-bar", rm_app_bar_1.default);
    riot.register("rm-bottom-sheet", rm_bottom_sheet_1.default);
    riot.register("rm-button", rm_button_1.default);
    riot.register("rm-checkbox", rm_checkbox_1.default);
    riot.register("rm-dialog", rm_dialog_1.default);
    riot.register("rm-divider", rm_divider_1.default);
    riot.register("rm-icon", rm_icon_1.default);
    riot.register("rm-radio", rm_radio_1.default);
    riot.register("rm-ripple", rm_ripple_1.default);
    riot.register("rm-select", rm_select_1.default);
    riot.register("rm-tabs", rm_tabs_1.default);
    riot.register("rm-textarea", rm_textarea_1.default);
    riot.register("rm-textfield", rm_textfield_1.default);
});

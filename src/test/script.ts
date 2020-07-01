/**
 * Giuliano Collacchioni @2019
 */

// @ts-ignore
import "riot-material/index";
// @ts-ignore
import riot = require("riot");

// @ts-ignore
import TestComponent from "./test";

riot.component(TestComponent)(document.querySelector("test") as HTMLElement);
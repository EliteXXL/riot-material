const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const terser = require("rollup-plugin-terser").terser;

const plusLibsGlobals = {
    "riot": "riot"
};
const plusLibsExternal = Object.keys(plusLibsGlobals);
const minusLibsGlobals = {
    "what-input": "whatInput",
    ...plusLibsGlobals
};
const minusLibsExternal = Object.keys(minusLibsGlobals);
const globals = {
    "@riot-material/app-bar-utils": "riotMaterial.appBarUtils",
    "@riot-material/background": "riotMaterial.background",
    "@riot-material/elevation": "riotMaterial.elevation",
    "@riot-material/position-controller": "riotMaterial.positionController",
    "@riot-material/ripple": "riotMaterial.ripple",
    "@riot-material/rm-app-bar": "riotMaterial.components.appBar",
    "@riot-material/rm-button": "riotMaterial.components.button",
    "@riot-material/rm-checkbox": "riotMaterial.components.checkbox",
    "@riot-material/rm-dialog": "riotMaterial.components.dialog",
    "@riot-material/rm-divider": "riotMaterial.components.divider",
    "@riot-material/rm-icon": "riotMaterial.components.icon",
    "@riot-material/rm-list-item": "riotMaterial.components.listItem",
    "@riot-material/rm-menu": "riotMaterial.components.menu",
    "@riot-material/rm-menu-item": "riotMaterial.components.menuItem",
    "@riot-material/rm-radio": "riotMaterial.components.radio",
    "@riot-material/rm-select": "riotMaterial.components.select",
    "@riot-material/rm-tabbed-pages": "riotMaterial.components.tabbedPages",
    "@riot-material/rm-textfield": "riotMaterial.components.textfield",
    "@riot-material/rm-textfield-container": "riotMaterial.components.textfieldContainer",
    "@riot-material/surfaces": "riotMaterial.surfaces",
    ...minusLibsGlobals
};
const external = Object.keys(globals);

export default [
    {
        input: "src/index.js",
        external,
        plugins: [
            nodeResolve(),
            commonjs()
        ],
        output: [
            {
                file: "dist/index.es.js",
                format: "es"
            }
        ]
    },
    {
        input: "src/index.js",
        external: minusLibsExternal,
        plugins: [
            nodeResolve(),
            commonjs()
        ],
        output: [
            {
                file: "dist/index.js",
                format: "umd",
                name: "riotMaterial",
                globals: minusLibsGlobals
            },
            {
                plugins: [ terser() ],
                file: "dist/index.min.js",
                format: "umd",
                name: "riotMaterial",
                globals: minusLibsGlobals
            }
        ]
    },
    {
        input: "src/index.js",
        external: plusLibsExternal,
        plugins: [
            nodeResolve(),
            commonjs()
        ],
        output: [
            {
                file: "dist/index+libs.js",
                format: "umd",
                name: "riotMaterial",
                globals: plusLibsGlobals
            },
            {
                plugins: [ terser() ],
                file: "dist/index+libs.min.js",
                format: "umd",
                name: "riotMaterial",
                globals: plusLibsGlobals
            }
        ]
    }
];
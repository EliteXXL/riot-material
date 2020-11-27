const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const globals = {
    "riot": "riot"
};
const external = Object.keys(globals);

export default [
    {
        input: "src/index.ts",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript()
        ],
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
                exports: "auto"
            },
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                file: "dist/index.amd.js",
                format: "amd"
            },
            {
                name: "riotMaterial",
                file: "dist/index.umd.js",
                format: "umd",
                globals
            }
        ]
    }
];
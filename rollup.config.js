const riot = require('rollup-plugin-riot');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const externalizer = require("./externalizer").default;
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const multiInput = require("rollup-plugin-multi-input").default;
const path = require("path");
const resolve = require("resolve");
// const copy = require("rollup-plugin-copy-assets-to");
const postcss = require("rollup-plugin-postcss");
const postcssurl = require("postcss-url");

export default [
    // {
    //     input: ["src/**/!(*.d.ts)"],
    //     plugins: [
    //         multiInput(),
    //         externalizer(),
    //         postcss({
    //             plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
    //             sourceMap: false,
    //             extract: false,
    //             minimize: true
    //         }),
    //         riot(),
    //         commonjs(),
    //         typescript()
    //     ],
    //     external: [ "riot" ],
    //     output: {
    //         globals: { riot: "riot"},
    //         dir: "dist/amd.full",
    //         format: "amd"
    //     }
    // },
    {
        input: ["src/**/!(*.d.ts)"],
        plugins: [
            multiInput(),
            externalizer({ full: false }),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            riot(),
            commonjs(),
            typescript()
        ],
        external: [ "riot" ],
        output: {
            globals: { riot: "riot"},
            dir: "dist/amd",
            format: "amd"
        }
    },
    {
        input: ["src/**/!(*.d.ts)"],
        plugins: [
            multiInput(),
            externalizer({ full: false }),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            riot(),
            commonjs(),
            typescript()
        ],
        external: [ "riot" ],
        output: {
            globals: { riot: "riot"},
            dir: "dist/cjs",
            format: "cjs"
        }
    },
    {
        input: ["src/**/!(*.d.ts)"],
        plugins: [
            multiInput(),
            externalizer({ full: false }),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            riot(),
            commonjs(),
            typescript()
        ],
        external: [ "riot" ],
        output: {
            globals: { riot: "riot"},
            dir: "dist/es",
            format: "es"
        }
    },
    {
        input: "src/index.ts",
        plugins: [
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            riot(),
            commonjs(),
            typescript(),
            nodeResolve()
        ],
        external: [ "riot" ],
        output: [{
            globals: {
                riot: "riot"
            },
            file: "dist/amd.bundled.js",
            format: "amd"
        }, {
            globals: {
                riot: "riot"
            },
            name: "riotMaterial",
            file: "dist/umd.bundled.js",
            format: "umd"
        }]
    }
];
const riot = require("rollup-plugin-riot");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const multiInput = require("rollup-plugin-multi-input").default;
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const postcss = require("rollup-plugin-postcss");
const postcssurl = require("postcss-url");

const globals = {
    "riot": "riot"
};
const external = Object.keys(globals);

export default [
    {
        input: ["src/**/!(*.d.ts)"],
        external,
        plugins: [
            multiInput(),
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            commonjs(),
            typescript(),
            riot()
        ],
        output: {
            dir: "dist/amd",
            format: "amd"
        }
    },
    {
        input: ["src/**/!(*.d.ts)"],
        external,
        plugins: [
            multiInput(),
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            commonjs(),
            typescript(),
            riot()
        ],
        output: {
            dir: "dist/cjs",
            format: "cjs",
            exports: "auto"
        }
    },
    {
        input: ["src/**/!(*.d.ts)"],
        external,
        plugins: [
            multiInput(),
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            commonjs(),
            typescript(),
            riot()
        ],
        output: {
            dir: "dist/es",
            format: "es"
        }
    },
    {
        input: "src/index.ts",
        plugins: [
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            commonjs(),
            typescript(),
            riot()
        ],
        output: {
            file: "dist/amd+libs.js",
            format: "amd"
        }
    },
    {
        input: "src/index.ts",
        external,
        plugins: [
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            commonjs(),
            typescript(),
            riot()
        ],
        output: {
            file: "dist/amd.js",
            format: "amd"
        }
    },
    {
        input: "src/index.ts",
        external,
        plugins: [
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            commonjs(),
            typescript(),
            riot()
        ],
        output: {
            name: "RM",
            file: "dist/umd.js",
            format: "umd",
            globals
        }
    },
    {
        input: "src/index.ts",
        plugins: [
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            commonjs(),
            typescript(),
            riot()
        ],
        output: {
            name: "RM",
            file: "dist/umd+libs.js",
            format: "umd"
        }
    }
];
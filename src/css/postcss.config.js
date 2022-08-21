// postcss.config.js

const postcssImport = require('postcss-import');
const cssvariables = require("postcss-css-variables");
const postcssInlineSvg = require('postcss-inline-svg');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssMixins = require('postcss-mixins');
const postcssCombineMediaQuery = require('postcss-combine-media-query');

const postcssPresets= require('postcss-preset-env')({
  stage: 3,
  features: {
    "custom-media-queries": true,
    "nesting-rules": true,
    "nested-calc": true
  }
});

const cssnanoConfig = {
    autoprefixer: false,
    discardComments: {removeAll: true},
    svgo: true
};
const cssnano = require('cssnano')({
  preset: ['default', { cssnanoConfig }]
});

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.html'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  css: ['test.css'],
  safelist: {}
});

module.exports = {
  plugins: [
    postcssImport,
    postcssInlineSvg, 
    postcssMixins,
    postcssPresets,
    postcssSimpleVars, 
    postcssCombineMediaQuery,
    cssvariables,
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : [])
  ],
};

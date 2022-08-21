// postcss.config.js

const postcssImport = require('postcss-import');
const cssvariables = require("postcss-css-variables");
const postcssInlineSvg = require('postcss-inline-svg');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssNesting = require('postcss-nesting');
const postcssMixins = require('postcss-mixins');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCombineMediaQuery = require('postcss-combine-media-query');

const autoprefixer = require('autoprefixer');
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
    autoprefixer,
    postcssImport,
    postcssInlineSvg, 
    postcssMixins, 
    postcssSimpleVars, 
    postcssNesting,
    postcssCustomMedia,
    postcssCombineMediaQuery,
    cssvariables,
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : [])
  ],
};

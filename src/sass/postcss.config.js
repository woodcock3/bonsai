// postcss.config.js

const postcssImport = require('postcss-import');
const postcssInlineSvg = require('postcss-inline-svg');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
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
  css: ['bansai.css'],
  safelist: {}
});

module.exports = {
  plugins: [
    postcssImport,
    postcssInlineSvg, 
    postcssMixins, 
    postcssSimpleVars, 
    postcssNested, 
    postcssCombineMediaQuery,
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : [])
  ],
};

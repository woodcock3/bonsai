// postcss.config.js

const autoprefixer = require('autoprefixer');
const postcssCombineMediaQuery = require('postcss-combine-media-query');

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
  css: ['style.css'],
  safelist: {}
});

module.exports = {
  plugins: [
    autoprefixer,
    postcssCombineMediaQuery,
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : [])
  ],
};

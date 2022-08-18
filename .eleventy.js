const yaml = require("js-yaml");
const htmlmin = require("html-minifier");
const now = String(Date.now());
const sass = require("sass");

const TEMPLATE_ENGINE = "liquid";


module.exports = function (eleventyConfig) {

  // To Support .yml Extension in _data
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

  // allow dynamic partials, so we can load data files as needed.
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
  });
  
  // COPY
  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./assets/js/site.js": "./assets/js/site.js",
    "./expected": "./expected",
    "./icons": "./assets/icons",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/assets/image");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./logo.png": ".assets/logo.png");

  // WATCH the css files
  eleventyConfig.addWatchTarget("./src/css/bonsai.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp": "./assets/css" });
  
  // WATCH the js files for esbuild in scripts.11ty.js
  eleventyConfig.addWatchTarget("./assets/js");

  // SHORTCODES
  // Add cache busting with {% version %} time string
  eleventyConfig.addShortcode("version", function () {
    return now
  });

  // FILTERS
  // add sass filter to template engine
  eleventyConfig.addFilter("scssify", code => {
    return sass.compileString(code).css.toString();
  });


  // Change things based on the envirnoment
  let env = process.env.ELEVENTY_ENV;

  if (env === "prod") {
    eleventyConfig.addPassthroughCopy({ "./assets/images/favicon/11up.jpg": "./assets/images/11up.jgp"})
  }

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_ENV === "prod" &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified
    }

    return content
  });
  
  // Let Eleventy transform HTML files as liquidjs
  // So that we can use .html instead of .liquid
  // 11ty.js template format also picks up on the esbuild.11ty.js script

  return {
    dir: {
      input: "src",
      output: "docs",
      data: "_data",
    },
    templateFormats: ["html", "md", "11ty.js", TEMPLATE_ENGINE],
    markdownTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
  };
};

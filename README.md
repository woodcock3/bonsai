<a href="https://github.com/bonsaicss/bonsai.css"><img
  src="https://www.joomla51.com/images/bedrock.png" alt="Bonsai CSS Logo"
  width="149" height="206"></a>

# bonsai.sass

**A complete Utility First CSS Framework for less than 45 KB (8 KB Gzipped)**

Bonsai SASS is a super lightweight, fully responsive, utility first framework. All you need to build beautifully crafted web interfaces with ease.

### Setup for development

Install the dependencies with npm first:

```bash
npm i
```

### Building

To build new Bonsai files (in the dist folder), run:

```bash
npm run build
```

### Developing

To automatically build new versions of Bonsai during development, run:

```
npm run watch
```

## Documentation
For full documentation, visit [https://www.bonsaicss.com](https://www.bonsaicss.com).

## Credits
Bonsai.sass is has been ported from Bonsai.css and has been rebuilt using [sass](https://sass-lang.com) and [npm scripts](https://www.npmjs.com). The documentation is built using [eleventy](https://www.11ty.dev). Whereas the original [Bonsai.css](https://www.bonsaicss.com) was built using [postcss](https://postcss.org) and [gulp](https://gulpjs.com) by [Ciaran Walsh](https://github.com/ciar4n) and [Yves Hoppe](https://github.com/yvesh) fron 2020-2021.

## Methodology
Using css custom properties to build a utility first framework was utter brilliance by Ciaran and Yves but if you dig into the code base its also been implimented very simply and is easy to understand, maintain and customise for your own purposes. My hope is because this version is built on sass with a sprinkling of postcss, the maturity and stability of sass will stand the test of time. Rather that hoping/praying that the much large dependences nightmare of unmaintained postcss plugins wont bite you in the butt as some point. I originally tried to just update the postcss plugins, but unmaintained plugins proved to be its downfall.


<a href="https://github.com/bonsaicss/bonsai.css"><img
  src="https://www.joomla51.com/images/bedrock.png" alt="Bonsai CSS Logo"
  width="149" height="206"></a>

# bonsai.css

**A complete Utility First CSS Framework for less than 45 KB (8 KB Gzipped)**

Bonsai CSS is a super lightweight, fully responsive, utility first framework. All you need to build beautifully crafted web interfaces with ease.

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

## Issue with postcss nested

Does not compile @ rules correctly inside a media query. 

~~~ css
@media only screen and (min-width:640px){.wrapper,[style*="--wrapper:"]{--gutter:var(--gutter-sm)}}
@media only screen and (min-width:768px){.wrapper,[style*="--wrapper:"]{--gutter:var(--gutter-md)}}
@media only screen and (min-width:1024px){.wrapper,[style*="--wrapper:"]{--gutter:var(--gutter-lg)}}
@media only screen and (min-width:1280px){.wrapper,[style*="--wrapper:"]{--gutter:var(--gutter-xl)}}
~~~

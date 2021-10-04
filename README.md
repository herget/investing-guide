# Investing Guide - The Simple Guide of Common Sense Investing
<a href="https://herget.github.io/investing-guide/"><img src="https://github.com/herget/investing-guide/raw/master/img/investing-guide-growth.jpg"  width="450" alt="Investing Guide"></a><br>
New version here: https://herget.me/investing-guide


## Technology
This tutorial is made with vanilla HTML and CSS. Translations and contributions should be as easy as possible. GitHub actions will build and deploy every commit.

- AMP ⚡: It's an AMP-based static site. <a href="https://amp.dev/">AMP</a> is a web component framework for easily creating user-first websites. 
- GitHub actions: Automatic build and deployment to GitHub pages. No local build required. Files can be commited right in the browser.
- Chart: <a href="https://codesandbox.io/s/portfolio-roughviz-mw6s4?file=/index.html">Made with RoughViz and embedded as static SVG.</a>
- Node & gulp: Node.js, npm and gulp are used to build the translations.
- static-i18n: It's using the static-i18n translation framework (<a href="https://www.npmjs.com/package/gulp-static-i18n-html">gulp-static-i18n-html</a>) to generate the static html files.  
- Analytics: Google Tag Manager for AMP to track page view, time on site and scrolldepth.
- Comments: Disqus comments embedded as amp-iframe. <a href="https://github.com/disqus/disqus-install-examples/tree/master/google-amp">How to use disqus with amp.</a>

## Contributing
Pull requests are the best way to propose changes to the tutorial. We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
2. Validate your code using the AMP validator. Add #development=1 to your url and check the browser console for validation errors.
3. Issue that pull request!

### Local Installation
Run following commands to set up your local environment. It will start a local server and watch for your changes.

```
npm install
npm start
```

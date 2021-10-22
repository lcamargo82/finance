const path = require('path');
// eslint-disable-next-line import/no-unresolved
const PrerenderSPAPlugin = require('prerender-spa-plugin');

// eslint-disable-next-line prefer-destructuring
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        // eslint-disable-next-line quotes
        prependData: `@import "~@/assets/scss/global.scss";`,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/', '/login'],
        renderer: new PuppeteerRenderer(),
      }),
    ],
  },
  devServer: {
    host: 'localhost',
  },
};

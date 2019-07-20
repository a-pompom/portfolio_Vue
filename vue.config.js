module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/global.scss";`
      }
    }
  },
  outputDir: 'dist',
  assetsDir: './',
  publicPath: './'
};
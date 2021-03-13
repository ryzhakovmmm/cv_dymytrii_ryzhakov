module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import')(),
    require('autoprefixer')(),
    require('postcss-mixins')(),
    require('postcss-simple-vars')(),
    require('postcss-extend')(),
    require('postcss-nested')(),
    require('postcss-inline-svg')(),
    require('postcss-assets')({
      basePath: 'images/'
    }),
    require('postcss-url')({ url: 'copy', useHash: true })
  ]
}
module.exports = {
  chainWebpack(config) {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg|avif)$/i)
      .use('file-loader')
      .loader('file-loader')
      .tap((options) => ({
        ...options,
        name: 'assets/[name].[ext]' // Define o nome do arquivo sem o hash
      }))
  }
}

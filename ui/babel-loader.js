module.exports = {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: file => (
      /node_modules/.test(file) &&
      !/\.vue\.js/.test(file)
    )
}
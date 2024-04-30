const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

mudule.exports={
    entry: path.resolove(__dirname, 'index.js'), //точка входа
    module: { //лоадеры
        rules: [{ test: /\.svg$/, use: 'svg-inline-loader' },
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
        { test: /\.(js)$/, use: 'babel-loader' },
        {
            exclude: /.(css|js|html)$/,
             type: 'asset/resource'
          }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
      },
      plugins: [ new HtmlWebpackPlugin(), 
    new webpack.EnvironmentPlugin({
      'NODE_ENV': 'production'
    })],
      mode: 'production'
}
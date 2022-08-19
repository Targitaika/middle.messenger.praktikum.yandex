const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      Main: path.resolve(__dirname, './main.ts'),
      '@components': path.resolve('./src/components'),
      '@pages': path.resolve('./src/pages'),
      '@services': path.resolve('./src/services'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    allowedHosts: 'all',
    port: process.env.PORT || 3000,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,

        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /(node_modules)/,
      },
      // file processing
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },
};

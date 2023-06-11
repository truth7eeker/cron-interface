const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   entry: './src/index.tsx',
   mode: 'development',
   target: 'web',
   performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
   },
   output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, 'build'),
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
      }),
   ],
   resolve: {
      modules: [__dirname, 'src', 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
   },
   module: {
      rules: [
         {
            test: /\.ts$|tsx/,
            exclude: /node_modules/,
            loader: require.resolve('babel-loader'),
         },
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
      ],
   },
};

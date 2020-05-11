var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: path.resolve('./dist'),
    filename: 'app.js',
    library: 'ReactFormBuilder',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    // 'react': 'react',
    // 'react-dom': 'react-dom',
    // 'react-dnd': 'react-dnd',
    // 'react-dnd-html5-backend': 'react-dnd-html5-backend',
    // 'react-textarea-autosize': 'react-textarea-autosize',
    // 'react-datepicker': 'react-datepicker',
    // 'classnames': 'classnames',
    // 'jquery': 'jquery',
    'bootstrap': 'bootstrap'
  },

  resolve: {
    extensions: ['./mjs', '.js', '.jsx', '.scss', '.css', '.json'],
    alias: {
      "jquery": path.join(__dirname, "./jquery-stub.js")
    }
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js|.jsx?$/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              sassOptions: {
                includePaths: ['./node_modules'],
              },
            }
          }
        ]
      },
    ]
  },
  performance: {
    hints: false
  }
};
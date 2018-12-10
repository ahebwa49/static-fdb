/**
 * 
 * 
 * PROCESS:
 * ------------
 * 1) Assets: Sources front-end files where active development happens. Used to generate "front-end dev" files
 * 2) "front-end dev": Produced from "assets", used for preview and testing
 * 3) "front-end prod": Produced from "front-end dev", final product (minified, uptimized, ...) ready for production
 * 
 */



 /**
  * NEED TO LEARN TO DO:
  * - copy a file from 1 folder to another
  * - minify HTML, CSS, JS
  */

const path = require('path');
const ENV = 'dev'; // 'prod' development or production environments
const ASSETS_DIR = './src/front-end';
const BUILD_DIR = `build-${ENV}/front-end`;

module.exports = {
  // https://webpack.js.org/concepts/mode/
  mode: `${(ENV==='dev'?'development':'prodction')}`,
  entry: `${ASSETS_DIR}/js/test1.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `${BUILD_DIR}/js/`)
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { 
        test: /\.js$/, 
        exclude: /(node_modules)/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
    ]
  },
};


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

const path = require('path');
const ENV = 'dev'; // 'prod' development or production environments
const ASSETS_DIR = './src/front-end';
const BUILD_DIR = `build-${ENV}/front-end`;

module.exports = {
  mode: `${(ENV==='dev'?'development':'prodction')}`,
  entry: `${ASSETS_DIR}/js/test1.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `${BUILD_DIR}/js/`)
  }
};


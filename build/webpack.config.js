const path = require('path');
module.exports = {
  entry: {
    message: path.join(__dirname, '../src/components/message/message.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]/[name].js',
    library: ['[name]'],
    libraryTarget: 'umd'
  }
};

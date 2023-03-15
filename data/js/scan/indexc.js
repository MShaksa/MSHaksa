require('babel-polyfill');
require('webrtc-adapter');

var Instascan = {
  Scanner: require('./scanner'),
  Camera: require('./camera')
};

module.exports = Instascan;

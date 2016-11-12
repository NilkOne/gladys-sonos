const sendCommand = require('../sonos.sendCommand.js');

module.exports = function getPlaying(params){
    return sendCommand('getCurrentState', params, []);
};
const sendCommand = require('../sonos.sendCommand.js');

module.exports = function setVolume(params){
    return sendCommand('setVolume', [params.volume]);
};
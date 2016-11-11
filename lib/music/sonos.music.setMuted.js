const sendCommand = require('../sendCommand.js');

module.exports = function setMuted(params){
    return sendCommand('setMuted', [params.muted]);
};
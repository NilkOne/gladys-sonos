const sendCommand = require('../sendCommand.js');

module.exports = function getCurrentTrack(params){
    return sendCommand('currentTrack', []);
};
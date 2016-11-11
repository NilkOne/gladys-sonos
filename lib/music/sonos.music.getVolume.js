const sendCommand = require('../sendCommand.js');

module.exports = function getVolume(params){
    return sendCommand('getVolume', []);
};
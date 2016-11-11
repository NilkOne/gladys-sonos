const sendCommand = require('../sendCommand.js');

module.exports = function getMuted(params){
    return sendCommand('getMuted', []);
};
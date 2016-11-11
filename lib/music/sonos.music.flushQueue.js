const sendCommand = require('../sendCommand.js');

module.exports = function flushQueue(params){
    return sendCommand('flush', []);
};
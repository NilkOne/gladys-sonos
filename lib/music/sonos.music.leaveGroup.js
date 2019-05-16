const sendCommand = require('../sonos.sendCommand.js');

module.exports = function leaveGroup(params){
    return sendCommand('leaveGroup', params, []);
};
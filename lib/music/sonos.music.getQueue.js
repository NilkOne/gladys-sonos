const sendCommand = require('../sendCommand.js');

module.exports = function getQueue(params){

    return sendCommand('getQueue', [])
        .then((result) => result.items);
};
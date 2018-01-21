const sendCommand = require('../sonos.sendCommand.js');

module.exports = function playTuneinRadio(params){
    var paramsArray = [];
    
    // plays a TuneIn station (queue isn't used)
    if(params.stationId) paramsArray.push(params.stationId);
    if(params.stationTitle) paramsArray.push(params.stationTitle);

    return sendCommand('playTuneinRadio', params, paramsArray);
};
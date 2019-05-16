const sendCommand = require('../sonos.sendCommand.js');

module.exports = function joinGroup(params){
	var paramsArray = [];

    if(!params.hasOwnProperty('otherDeviceName')) return Promise.reject(new Error('sonos.joinGroup() : params "otherDeviceName" is required.'));
	
    // join group if passed in parameter
	if(params.otherDeviceName) paramsArray.push(params.otherDeviceName);
    
    return sendCommand('joinGroup', params, paramsArray);
};
var sonos = require('sonos');
const DEVICE_SEARCH_TIMEOUT = 5000;

module.exports = function setup(){
    
    sonos.search({timeout: DEVICE_SEARCH_TIMEOUT}, function (device, model) {
    
        var newDevice = {
            device: {
                name: `Sonos ${model}`,
                protocol: `wifi`,
                service: `sonos`,
                identifier: `${device.host}:${device.port}`
            },
            types: [{
                name: 'Music',
                type: 'music',
                sensor: false,
                min: 0,
                max: 0
            }]
        };

        gladys.device.create(newDevice);
    });
};
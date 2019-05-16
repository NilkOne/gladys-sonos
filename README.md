Gladys Sonos
=======================

This module allows you to control your Sonos speakers in Gladys.

### Installation

To install this module :

- Install the module in Gladys 
- Reboot Gladys 
- Go on the dashboard on `Module` view, then in the module list press the `config` button on the sonos module.
- Your Sonos speakers should appear in the device list


### Usage

You can use this module in Gladys directly using the music API.

#### Play an URI
URI can be : 
* a Spotify URI like "x-sonos-spotify:spotify%3atrack%3a4dWJPtVSLHQkAFsGHPTGPp?sid=9&flags=8224&sn=9"
* a local network mp3 file like "x-file-cifs://NAS_IP/music/Artist1/Song.mp3"
* a local network m3u playlist file like "x-file-cifs://NAS_IP/music/Playlists/move_playlist.m3u"
* a web aac stream like "aac://http://vr-live-aac-64.scdn.arkena.com/virginradio.aac"
* a web mp3 stream like "x-rincon-mp3radio://185.52.127.160/fr/40113/aac_64.mp3"

```js
gladys.modules.sonos.music.playPlaylist({ 
	deviceType: {device: YOUR_SONOS_DEVICE_ID}, 
	identifier: URI_LINK
});
```

#### Pause 

```js
gladys.modules.sonos.music.pause({ deviceType: {device: YOUR_SONOS_DEVICE_ID} });
```

#### Stop 

```js
gladys.modules.sonos.music.stop({ deviceType: {device: YOUR_SONOS_DEVICE_ID} });
```

#### Next 

```js
gladys.modules.sonos.music.next({ deviceType: {device: YOUR_SONOS_DEVICE_ID} });
```

#### Previous 

```js
gladys.modules.sonos.music.previous({ deviceType: {device: YOUR_SONOS_DEVICE_ID} });
```

#### Restart a track 

```js
gladys.modules.sonos.music.restartTrack({ deviceType: {device: YOUR_SONOS_DEVICE_ID} });
```

#### Add an uri to the queue (positionInQueue is optional, end by default)

```js
gladys.modules.sonos.music.queue( {
    uri:"x-sonos-spotify:spotify%3atrack%3a0bXpmJyHHYPk6QBFj25bYF?sid=9&flags=8224&sn=9",
    positionInQueue: 2, 
    deviceType: {device: YOUR_SONOS_DEVICE_ID}} 
)
```

#### Empty the queue 

```js
gladys.modules.sonos.music.flushQueue({ deviceType: {device: YOUR_SONOS_DEVICE_ID} });
```

#### Restart the queue 

```js
gladys.modules.sonos.music.restartQueue({ deviceType: {device: YOUR_SONOS_DEVICE_ID} });
```

#### Join a group

```js
gladys.modules.sonos.music.joinGroup({
    deviceType: {device: YOUR_SONOS_DEVICE_ID},
    otherDeviceName: "Salon"
});
```

#### Leave a group

```js
gladys.modules.sonos.music.leaveGroup({ deviceType: {device: YOUR_SONOS_DEVICE_ID} });
```

#### Play the song at x seconds

```js
gladys.modules.sonos.music.seek({ seconds: x, deviceType: {device: YOUR_SONOS_DEVICE_ID} });
```

#### Play the track number #9

```js
gladys.modules.sonos.music.selectTrack( {trackNumber: 9, deviceType: {device: YOUR_SONOS_DEVICE_ID}} )
```

#### playTuneinRadio

To play music from the Radio, you can use this function: 

```javascript
gladys.modules.sonos.music.playTuneinRadio({
    deviceType: {
        device: YOUR_SONOS_DEVICE_ID
    },
    stationId: 50776,
    stationTitle: 'NRJ'
});
```

You can replace stationId with the stationId you want to listen.
To find the stationId, see help here => [https://help.tunein.com/what-is-my-station-or-program-id-SJbg90quwz](https://help.tunein.com/what-is-my-station-or-program-id-SJbg90quwz)

The stationTitle is the name of the radio.
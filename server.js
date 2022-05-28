const express = require('express')
const app = express();
const port = 3000;

var fs = require('fs');
var portAudio = require('naudiodon');

// Create an instance of AudioIO with inOptions (defaults are as below), which will return a ReadableStream
var ai = new portAudio.AudioIO({
  inOptions: {
    channelCount: 1,
    sampleFormat: portAudio.SampleFormat16Bit,
    sampleRate: 44100,
    deviceId: -1, // Use -1 or omit the deviceId to select the default device
    closeOnError: true // Close the stream if an audio error is detected, if set false then just log the error
  }
});

// Create a write stream to write out to a raw audio file
var ws = fs.createWriteStream('recording.wav');

//Start streaming
ai.pipe(ws);
ai.start();

setTimeout(function() {
  ai.quit()
}, 5000);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

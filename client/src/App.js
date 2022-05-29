import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { appContext } from './Context';
import Sidebar from "./components/sidebar/Sidebar"
import Texteditor from './components/texteditor/Texteditor';
import Transcribe from './components/transcribe/Transcribe';
import Mockdata from './Mockdata';
import RecordRTC from 'recordrtc';
import axios from 'axios'; 
const { Configuration, OpenAIApi } = require("openai");
 


function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[{ id: 0, title: "New Note", text: ""}])
  const [muted, setMuted] = useState(true)
  const [selected, setSelected] = useState(0)
  const [writeTo, setWriteTo] = useState(0)
  const [transcription, setTranscription] = useState("")

  const isMounted = useRef(false)

  const [textToAudio, setTextToAudio] = useState("")

  const [openAI, setOpenAI] = useState("")

  useEffect(() => {
    console.log(transcription)
  }, [transcription])

  const reactData = [{ id: 1, name:' Tom'}, { id: 2, name:' Sarah'}];
const url = 'localhost:9000/summary';

  let sendData = () => {
  axios.post(url, reactData)
    .then(res => console.log('Data send'))
    .catch(err => console.log(err.data))
  }

  useEffect(() => {
    if (isMounted.current) {
      if (!muted) document.getElementById("fake-button").click()
    } else {
      isMounted.current = true
    }
  }, [muted])

  useEffect(() => {
    document.getElementById("heading-editor").value = notes[selected].title
    document.getElementById("body-editor").value = notes[selected].text
  }, [selected, notes])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])
  
  return (
    <appContext.Provider value={{notes, setNotes, muted, setMuted, selected, setSelected, writeTo, setWriteTo}}>
      <div className="App-container">
        <div id="fake-button" style={{display: "none"}}></div>
        <Sidebar live={notes[writeTo].title}/>
        <div className="UI-container">
          <Texteditor/>
          <Transcribe/>
        </div>
      </div>
    </appContext.Provider>
  )

  function callAudioToText() {
    fetch("http://localhost:8000/")
        .then(res => res.text())
        .then(res => setTextToAudio(res));
  }


//   render() {
//     return(
//     <div className="App">
//       <header>
//         <h1 className="header__title">Real-Time Transcription</h1>
//         <p className="header__sub-title">Try AssemblyAI's new real-time transcription endpoint!</p>
//       </header>
//       <div className="real-time-interface">
//         <p id="real-time-title" className="real-time-interface__title">Click start to begin recording!</p>
//         <p id="button" className="real-time-interface__button">Start</p>
//         <p id="message" className="real-time-interface__message"></p>
//       </div>
//     </div>
//   );
// }

function initializeAPI() {
  // required dom elements
const buttonEl = document.getElementById('fake-button');
const messageEl = document.getElementById('message');
const titleEl = document.getElementById('real-time-title');

// set initial state of application variables

messageEl.style.display = 'none';
let isRecording = false;
let socket;
let recorder;
let recordedBefore = false;

// runs real-time transcription and handles global variables
const startRecording = async () => {
  console.log("Working!");
  if (isRecording) { 
    if (socket) {
      socket.send(JSON.stringify({terminate_session: true}));
      socket.close();
      socket = null;
    }

    if (recorder) {
      recorder.pauseRecording();
      recorder = null;
    }
  } else {
    const response = await fetch('http://localhost:8000'); // get temp session token from server.js (backend)
    
    const data = await response.json();

    if(data.error){
      alert(data.error)
    }
    
    const { token } = data;

    // establish wss with AssemblyAI (AAI) at 16000 sample rate
    socket = await new WebSocket(`wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`);

    // handle incoming messages to display transcription to the DOM
    const texts = {};
    socket.onmessage = (message) => {
      let msg = '';
      const res = JSON.parse(message.data);
      texts[res.audio_start] = res.text;
      const keys = Object.keys(texts);
      keys.sort((a, b) => a - b);
      for (const key of keys) {
        if (texts[key]) {
          msg += ` ${texts[key]}`;
        }
      }
      messageEl.innerText = msg;
      setTranscription(msg)

      // Send transcribed message to note summarizer API
      

    };

    socket.onerror = (event) => {
      console.error(event);
      socket.close();
    }
    
    socket.onclose = event => {
      console.log(event);
      socket = null;
    }

    socket.onopen = () => {
      // once socket is open, begin recording
      messageEl.style.display = '';
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          recorder = new RecordRTC(stream, {
            type: 'audio',
            mimeType: 'audio/webm;codecs=pcm', // endpoint requires 16bit PCM audio
            recorderType: RecordRTC.StereoAudioRecorder,
            timeSlice: 250, // set 250 ms intervals of data that sends to AAI
            desiredSampRate: 16000,
            numberOfAudioChannels: 1, // real-time requires only one channel
            bufferSize: 4096,
            audioBitsPerSecond: 128000,
            ondataavailable: (blob) => {
              const reader = new FileReader();
              reader.onload = () => {
                const base64data = reader.result;

                // audio data must be sent as a base64 encoded string
                if (socket) {
                  socket.send(JSON.stringify({ audio_data: base64data.split('base64,')[1] }));
                }
              };
              reader.readAsDataURL(blob);
            },
          });

          recorder.startRecording();
        })
        .catch((err) => console.error(err));
    };
  }

  isRecording = !isRecording;
  buttonEl.innerText = isRecording ? 'Stop' : 'Record';
  titleEl.innerText = isRecording ? 'Click stop to end recording!' : 'Click start to begin recording!'
};

  buttonEl.addEventListener('click', () => startRecording());
}
}



export default App;
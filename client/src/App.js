import React, { useEffect, useState } from 'react';
import './App.css';
import { appContext } from './Context';
import Sidebar from "./components/sidebar/Sidebar"
import Texteditor from './components/texteditor/Texteditor';
import Transcribe from './components/transcribe/Transcribe';
import Mockdata from './Mockdata';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[{ id: 0, title: "New Note", text: ""}])
  const [muted, setMuted] = useState(true)
  const [selected, setSelected] = useState(0)
  const [writeTo, setWriteTo] = useState(0)

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
        <Sidebar live={notes[writeTo].title}/>
        <div className="UI-container">
          <Texteditor/>
          <Transcribe/>
        </div>
      </div>
    </appContext.Provider>
  )
}

export default App;
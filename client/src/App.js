import React, { useEffect, useState } from 'react';
import './App.css';
import { appContext } from './Context';
import Sidebar from "./components/sidebar/Sidebar"
import Texteditor from './components/texteditor/Texteditor';
import Transcribe from './components/transcribe/Transcribe';
import Mockdata from './Mockdata';

function App() {
  const [notes, setNotes] = useState(Mockdata||[])
  const [muted, setMuted] = useState(true)
  const [selected, setSelected] = useState(0)
  const [textEditorRender, setTextEditorRender] = useState()

  useEffect(() => {
    document.getElementById("heading-editor").value = notes[selected].title
    document.getElementById("body-editor").value = notes[selected].text
  }, [selected, notes])
  
  return (
    <appContext.Provider value={{notes, setNotes, muted, setMuted, selected, setSelected}}>
      <div className="App-container">
        <Sidebar live="Spring Fling Planning"/>
        <div className="UI-container">
          <Texteditor/>
          <Transcribe/>
        </div>
      </div>
    </appContext.Provider>
  )
}

export default App;
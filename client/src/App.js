import React, { useState } from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar"
import { appContext } from './Context';

function App() {
  const [notes, setNotes] = useState([])
  const [muted, setMuted] = useState(true)
  const [selected, setSelected] = useState(false)

  return (
    <appContext.Provider value={{notes, setNotes, muted, setMuted, selected, setSelected}}>
      <div className="App-container">
        <Sidebar live="Spring Fling Planning"/>
        <div className="UI-container">

        </div>
      </div>
    </appContext.Provider>
  )
}

export default App;
import React, { useState } from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar"

function App() {
  return (
    <div className="App-container">
      <Sidebar live="Spring Fling Planning"/>
      <div className="UI-container">

      </div>
    </div>
  )
}

export default App;
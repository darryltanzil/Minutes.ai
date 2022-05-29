import React, { useContext, useEffect, useState } from 'react';
import './Texteditor.scoped.css';
import { appContext } from '../../Context';

function Texteditor(props) {
    const {notes, setNotes} = useContext(appContext)
    const {selected, setSelected} = useContext(appContext)
    
    return (
        <div className="texteditor-container">
            <div className="route-container">
                {`/${notes[selected].title}`}
            </div>
            <div className="editor-container">
                <input id="heading-editor" className="heading-editor" type="text" placeholder="Title here..." defaultValue={notes[selected].heading} onChange={e => {updateNotes("title", e)}}></input>
                <textarea id="body-editor" className="body-editor" placeholder="Input here..." defaultValue={notes[selected].text} onChange={e => {updateNotes("text", e)}}></textarea>
            </div>
        </div>
    )

    function updateNotes(type, event) {
        event.preventDefault()
        let tempArr = notes.slice()
        if (type == "title") {
            tempArr[selected].title = event.target.value
        } else if (type == "text") {
            tempArr[selected].text = event.target.value
        }
        setNotes(tempArr)
    }
}

export default Texteditor;
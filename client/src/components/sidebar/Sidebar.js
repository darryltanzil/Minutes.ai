import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.scoped.css';
import backdrop from "./backdrop.png"
import { BsMicFill, BsFillMicMuteFill, BsPlus } from "react-icons/bs"
import { appContext } from '../../Context';

function Sidebar(props) {
    const {notes, setNotes} = useContext(appContext)
    const {muted, setMuted} = useContext(appContext)
    const {selected, setSelected} = useContext(appContext)
    const {writeTo, setWriteTo} = useContext(appContext)
    const [noteRenders, setNoteRenders] = useState()
    
    useEffect(() => {
        let tempArr = notes.map((note, index) => {
            return (
                <div className="notebar-container">
                    <div className={selected===note.id? "notebar selected":"notebar"} onClick={() => setSelected(note.id)}>
                        <div className="notebar-text">{note.title==""? "Untitled":note.title}</div>
                    </div>
                    <div key={writeTo} className="btt-writeto" onClick={() => {setWriteTo(index)}} style={writeTo==index? {color: "#378DCC", backgroundColor: "#d6f1ff", transition: "200ms"}:{}}>Use</div>
                </div>
            )
        })

        setNoteRenders(tempArr)
    }, [notes, selected, writeTo])
    
    return (
        <div className="sidebar-container">
            <div className="sidebar-live">
                <div className="live-bar">
                    <div className="live-indicator" style={muted? {display: "none"}:{}}></div>
                    <div className="live-tag"><p style={{fontWeight: "600"}}>Live:&nbsp;</p>{props.live}</div>
                </div>
                <div className={muted? "btt-mic btt-mic-muted":"btt-mic"} onClick={() => {setMuted(!muted)}}>
                    {muted? <BsFillMicMuteFill className="icon-mic-muted"/>:<BsMicFill className="icon-mic"/>}
                </div>
            </div>

            <div className="sidebar-bottom">
                <p className="subheading">My Meeting Minutes</p>
                <div className="notebars-container">{noteRenders}</div>
                <div className="btt-add-note" onClick={addNote}>
                    <BsPlus size={25} className="add-note-icon"/>
                </div>
            </div>
        </div>
    )

    function addNote() {
        let tempArr = notes.slice()
        tempArr.push({id: notes.length, title: "New Note", content:"", transcription: "" })
        setNotes(tempArr)
    }
}

export default Sidebar;
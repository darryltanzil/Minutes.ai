import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.scoped.css';
import { BsMicFill, BsFillMicMuteFill, BsPlus } from "react-icons/bs"
import { appContext } from '../../Context';

function Sidebar(props) {
    const {notes, setNotes} = useContext(appContext)
    const {muted, setMuted} = useContext(appContext)
    const {selected, setSelected} = useContext(appContext)
    const [noteRenders, setNoteRenders] = useState()
    
    useEffect(() => {
        let tempArr = notes.map((note, index) => {
            return (
                <div className={selected===note.id? "notebar selected":"notebar"} onClick={() => setSelected(note.id)}>
                    <div className="notebar-text">{note.title==""? "Untitled":note.title}</div>
                </div>
            )
        })

        setNoteRenders(tempArr)
    }, [notes, selected])
    
    return (
        <div className="sidebar-container">
            <div className="sidebar-live">
                <div className="live-bar">
                    <div className="live-indicator"></div>
                    <p className="live-tag"><p style={{fontWeight: "600"}}>Live:&nbsp;</p>{props.live}</p>
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
        tempArr.push({id: notes.length, title: "New Notes", text:""})
        setNotes(tempArr)
    }
}

export default Sidebar;
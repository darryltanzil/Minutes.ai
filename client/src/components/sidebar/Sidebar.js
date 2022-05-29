import React, { useState } from 'react';
import './Sidebar.scoped.css';
import { BsMicFill } from "react-icons/bs"

function Sidebar(props) {
  return (
    <div className="sidebar-container">
        <div className="sidebar-live">
            <div className="live-bar">
                <div className="live-indicator"></div>
                <p className="live-tag"><p style={{fontWeight: "600"}}>Live:&nbsp;</p>{props.live}</p>
            </div>
            <div className="btt-mute">
                <BsMicFill className="icon-mute"/>
            </div>
        </div>

        <div className="sidebar-bottom">

        </div>
    </div>
  )
}

export default Sidebar;
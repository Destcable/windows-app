import React from 'react';
import './css/dekstop.css';
import window from './img/window.svg';
import search from './img/search.svg';
import task from './img/task.svg';

function MainDekstop ( ) { 
    return(
        <div className="taskbar">
            <img src={window}/>
            <img src={search}/>
            <img src={task}  />
        </div>
    )
}

export default MainDekstop;

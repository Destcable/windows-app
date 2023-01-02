import React from 'react';
import './css/dekstop.css';
import window from './img/window.svg';
import search from './img/search.svg';
import tasker from './img/task.svg';
import widget from './img/widgets.svg';
import teams from './img/teams.svg';
import folder from './img/folder.svg';
import edge from './img/edge.svg';
import store from './img/store.svg';

function MainDekstop ( ) { 
    return(
        <div className="taskbar">
            <img src={window} className='taskIcon' />
            <img src={search} className='taskIcon' />
            <img src={tasker} className='taskIcon' />
            <img src={widget} className='taskIcon' />
            <img src={teams}  className='taskIcon'  />
            <img src={folder} className='taskIcon'  />
            <img src={edge}   className='taskIcon'  />
            <img src={store}  className='taskIcon'  />
        </div>
    )
}

export default MainDekstop;

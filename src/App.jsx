import React, { useRef, useState } from 'react';
import LoginStartStep from './pages/authorization/loginStart';
import destroyElement from './helpers';
import './app.css'
import './pages/authorization/css/auth.css'
import userIcon from './pages/user/icon-user/one.png';
import blockIcon from './pages/icons/block.svg'

function App() {
  const template = useRef(null);
  const [visibleMain, setVisibleMain] = useState(false)
  const stepVisibleMain = (element) => { 
    destroyElement(element)
    setVisibleMain(true)
  } 
  return (
    <div className='auth-page'>
      {visibleMain == true 
        ? <LoginStartStep/>
        : ""
      } 
      <div ref={template} className='main-page' onClick={() => { stepVisibleMain(template) }}>
        <div className='enter-template'> 
          <div className='template-block'>
            <div className='left-template'>
              <img src={userIcon} className='userIcon' />
            </div>
            <div className='right-template'>
              <span className='userFieldAuth-title'>Artem Pavlov</span>
              <p className='userFieldAuth-description'>user encrypted  <img src={blockIcon} /></p>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}; 

export default App;
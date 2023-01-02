import React, { useRef, useState } from 'react';
import destroyElement from '../../helpers/helper';
import LoginStartStep from './loginStart';
import '../../app.css'
import './css/auth.css'
import userIcon from '../../helpers/user/icon-user/one.png';
import blockIcon from '../../helpers/icons/block.svg'

function LoginMain( ) { 
  const template = useRef(null);
  const elementScroll = document.querySelector('#auth-page');
  const [visibleMain, setVisibleMain] = useState(false);
  const stepVisibleMain = (element) => { 
    destroyElement(element)
    setVisibleMain(true)
  };
  return( 
    <div id='auth-page'>
    { visibleMain == true 
      ? <LoginStartStep elementScroll={elementScroll}/>
      : ""
    } 
        <div ref={template} className='main-page'>
          <div className='enter-template' onClick={() => { stepVisibleMain(template) }}> 
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
    )
};

export default LoginMain;
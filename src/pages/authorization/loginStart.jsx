import { useRef, useState } from 'react';
import destroyElement from '../../helpers/helper';
import './css/authTwoStep.css';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import userIconBig from '../../helpers/user/icon-user/one_BIG.png';
import arrowRightIcon from '../../helpers/icons/arrow_right.svg';

function LoginStartStep(elementScroll ) {
    const [visibleLogin, setVisibleLogin] = useState(false);
    const login = useRef(null)
    disableBodyScroll(elementScroll);
    const disableVisibleLogin = (element) => { 
        destroyElement(element)
    }
    return( 
        <>
        { visibleLogin == true 
            ? ''
            : ''
        }
        <div ref={login} className="authBlock">
            <img src={userIconBig} className='userIconBig'/>
            <p className='userNameAuth'>Artem Pavlov</p>
            <div className='hidePassword'></div>
            <input className='inpPassword'></input>
            <div className='arrowRightButton' onClick={() => { disableVisibleLogin(login) }}>
                <img src={arrowRightIcon} alt="arrowRightIcon" className='arrowRightIcon' />
            </div>
        </div>
        </>
    )
}
export default LoginStartStep;
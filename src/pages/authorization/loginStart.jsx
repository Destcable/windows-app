import { useRef, useState } from 'react';
import MainDekstop from '../dekstop/dekstop';
import destroyElement from '../../helpers/helper';
import './css/authTwoStep.css';
import { disableBodyScroll } from 'body-scroll-lock';
import userIconBig from '../../helpers/user/icon-user/one_BIG.png';
import arrowRightIcon from '../../helpers/icons/arrow_right.svg';

function LoginStartStep(elementScroll ) {
    const [visibleLogin, setVisibleLogin] = useState(false);
    const login = useRef(null);
    disableBodyScroll(elementScroll);
    const disableVisibleLogin = (element) => { 
        destroyElement(element)
        setVisibleLogin(true)
    };
    return( 
        <>
        { visibleLogin == true 
            ? <MainDekstop />
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
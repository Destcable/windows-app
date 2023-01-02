import './css/authTwoStep.css';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import userIconBig from '../user/icon-user/one_BIG.png';
import arrowRightIcon from '../icons/arrow_right.svg';

function LoginStartStep(elementScroll ) {
    disableBodyScroll(elementScroll)
    return( 
        <div className="authBlock">
            <img src={userIconBig} className='userIconBig'/>
            <p className='userNameAuth'>Artem Pavlov</p>
            <div className='hidePassword'></div>
            <input className='inpPassword'></input>
            <div className='arrowRightButton' onClick={() => {alert('test')}}>
                <img src={arrowRightIcon} alt="arrowRightIcon" className='arrowRightIcon' />
            </div>
        </div>
    )
}
export default LoginStartStep;
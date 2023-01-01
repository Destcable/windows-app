import './css/authTwoStep.css';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import userIconBig from '../user/icon-user/one_BIG.png';
import arrowRightIcon from '../icons/arrow_right.svg';

function LoginStartStep(elementScroll ) {
    disableBodyScroll(elementScroll)
    return( 
        <div className="authBlock">
            <img src={userIconBig} /><br />
            <p className='userNameAuth'>Artem Pavlov</p>
            <input className='inpPassword'></input>
            <div className='arrowRightButton'>
                <img src={arrowRightIcon} alt="arrowRightIcon" />
            </div>
        </div>
    )
}
export default LoginStartStep;
import './css/authTwoStep.css';
import userIconBig from '../user/icon-user/one_BIG.png'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

function LoginStartStep(elementScroll ) {
    disableBodyScroll(elementScroll)
    return( 
        <div className="authBlock">
            <img src={userIconBig} /><br />
            <p>Artem Pavlov</p>
            
        </div>
    )
}
export default LoginStartStep;
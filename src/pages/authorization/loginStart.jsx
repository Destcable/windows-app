import './css/authTwoStep.css';
import userIconBig from '../user/icon-user/one_BIG.png'

function LoginStartStep( ) { 
    return( 
        <div className="authBlock">
            <img src={userIconBig} /><br />
            <p>Artem Pavlov</p>
        </div>
    )
}
export default LoginStartStep;
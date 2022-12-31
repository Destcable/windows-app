import './app.css'
import './pages/authorization/css/auth.css'
import userIcon from './pages/user/icon-user/one.png';

function App() {

  return (
    <div className='auth-page'>
      <div className='main-page'>
        {/* <img src={bg} /> */}
        <div className='enter-template'> 
          <div className='template-block'>
            <div className='left-template'>
              <img src={userIcon} className='userIcon' />
            </div>
            <div className='right-template'>
              <span className='userFieldAuth-title'>Artem Pavlov</span>
              <p className='userFieldAuth-description'>user encrypted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

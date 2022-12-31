import './app.css'
import './pages/authorization/css/auth.css'
import bg from './pages/authorization/img/bg.png';

function App() {

  return (
    <div className='auth-page' onselectstart="return false" onmousedown="return false">
      <div className='main-page'>
        <img src={bg} />
        <div className='enter-template'/>
      </div>
    </div>
  );
}

export default App;

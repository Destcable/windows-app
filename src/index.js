import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import LoginMain from './pages/authorization/loginMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginMain />
  </React.StrictMode>
);
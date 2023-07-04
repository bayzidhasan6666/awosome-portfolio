import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="loader bg-[#212428] p-3 md:p-5">
      {' '}
      <App />
    </div>
  </React.StrictMode>
);

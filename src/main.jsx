import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@portfolio/app/App.jsx';
import './index.css';
import '@portfolio/utils/i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

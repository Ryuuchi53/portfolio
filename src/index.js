import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';   // add this
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Buffer } from 'buffer';

window.Buffer = Buffer;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
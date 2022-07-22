import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom'
// Browser Router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React>
);


// Importerar React, ReactDOM och "huvudkomponenten"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Renderar appen i index.html
const root = ReactDOM.createRoot(document.getElementById('page-wrapper'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

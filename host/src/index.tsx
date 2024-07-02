// Move src/index.tsx to a newly created src/bootstrap.tsx file
// src/index.tsx
import('./bootstrap');

// src/bootstrap.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
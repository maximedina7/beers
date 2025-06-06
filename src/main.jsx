import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Cambié la importación agregando la extensión
import './index.css'; 

// Aseguramos que el React.StrictMode está activado para detectar posibles problemas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Cambié la importación agregando la extensión
import './index.css'; 

// Crear la raíz de la aplicación y renderizar el componente App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

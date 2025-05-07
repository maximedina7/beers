import { useState } from 'react';
import BeersTable from './components/BeersTable';
import './App.css';

function App() {
  const [cervezaSeleccionada, setCervezaSeleccionada] = useState(null);

  return (
    <div className="layout-container">
      <div className="tabla-container">
        <BeersTable onSeleccionar={setCervezaSeleccionada} />
      </div>
      <div className="info-container">
        {cervezaSeleccionada ? (
          <div className="info-content">
          <div className="info-detalle">
            <h3>📋 Información completa</h3>
            <p><strong>ID:</strong> {cervezaSeleccionada.id}</p>
            <p><strong>Nombre:</strong> {cervezaSeleccionada.nombre}</p>
            <p><strong>Fecha de vencimiento:</strong> {cervezaSeleccionada.vencimiento}</p>
            <p><strong>Lugar de elaboración:</strong> {cervezaSeleccionada.elaboracion}</p>
            <p><strong>Tipo:</strong> {cervezaSeleccionada.tipo}</p>
            <p><strong>Alcohol:</strong> {cervezaSeleccionada.alcohol}</p>
            <button
              onClick={() => setCervezaSeleccionada(null)}
              style={{ backgroundColor: 'darkred', color: 'white', padding: '8px 12px', borderRadius: '5px', border: 'none', marginTop: '1rem', cursor: 'pointer' }}
            >
              Ocultar
            </button>
          </div>
          <div className="info-imagen">
          <img src={cervezaSeleccionada.imagen} alt={cervezaSeleccionada.nombre} />
      </div>
    </div>
        ) : (
          <p style={{ color: '#888' }}>Selecciona una cerveza para ver los detalles.</p>
        )}
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import BeersTable from './components/BeersTable';
import './App.css';

export default function App() {
  const [cervezaSeleccionada, setCervezaSeleccionada] = useState(null);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/beers/ale');
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setData([]); // Puedes manejar el error de una mejor forma si lo deseas
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="layout-container">
      <div className="tabla-container">
        <BeersTable beers={data} onSeleccionar={setCervezaSeleccionada} />
      </div>
      <div className="info-container">
        {cervezaSeleccionada ? (
          <div className="info-content">
            <div className="info-detalle">
              <h3>📋 Información completa</h3>
              <p><strong>ID:</strong> {cervezaSeleccionada.id}</p>
              <p><strong>Nombre:</strong> {cervezaSeleccionada.name}</p>
              <p><strong>Descripción:</strong> {cervezaSeleccionada.description}</p>
              <p><strong>Cervecería:</strong> {cervezaSeleccionada.brewery}</p>
              <p><strong>Tipo:</strong> {cervezaSeleccionada.style}</p>
              <p><strong>Alcohol (ABV):</strong> {cervezaSeleccionada.abv}</p>
              <p><strong>IBU:</strong> {cervezaSeleccionada.ibu}</p>
              <p><strong>Onzas:</strong> {cervezaSeleccionada.ounces}</p>
              <button
                onClick={() => setCervezaSeleccionada(null)}
                style={{
                  backgroundColor: 'darkred',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  border: 'none',
                  marginTop: '1rem',
                  cursor: 'pointer',
                }}
              >
                Ocultar
              </button>
            </div>
            <div className="info-imagen">
              <img src={cervezaSeleccionada.image} alt={cervezaSeleccionada.name} />
            </div>
          </div>
        ) : (
          <p style={{ color: '#888' }}>Selecciona una cerveza para ver los detalles.</p>
        )}
      </div>
    </div>
  );
}

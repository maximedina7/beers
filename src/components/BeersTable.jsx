import React from 'react';
import './BeersTable.css'; // Asegúrate de tener este archivo CSS

function BeersTable({ beers, onSeleccionar }) {
  const consultar = (cerveza) => {
    onSeleccionar(cerveza);
  };

  return (
    <div className="beers-table-container">
      <h2 className="table-title">🍺 Beers</h2>
      {!beers || beers.length === 0 ? (
        <p>Cargando cervezas...</p> // Puedes poner un spinner aquí si prefieres
      ) : (
        <table className="beers-table">
          <thead>
            <tr>
              <th className="table-header">Id</th>
              <th className="table-header">Nombre</th>
              <th className="table-header">Acción</th>
            </tr>
          </thead>
          <tbody>
            {beers.map((cerveza) => (
              <tr key={cerveza.id}>
                <td className="table-cell">{cerveza.id}</td>
                <td className="table-cell">{cerveza.name}</td>
                <td className="table-cell">
                  <button 
                    onClick={() => consultar(cerveza)} 
                    className="consult-button"
                    aria-label={`Consultar detalles de la cerveza ${cerveza.name}`}
                  >
                    Consultar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BeersTable;

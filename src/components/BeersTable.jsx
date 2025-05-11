import { useState } from 'react';
import React from 'react';

function BeersTable({ onSeleccionar }) {
  const cervezas = [{
    id: 1,
    nombre: 'Quilmes',
    vencimiento: '2025-10-15',
    elaboracion: 'Buenos Aires, Argentina',
    tipo: 'Lager',
    alcohol: '4.9%',
    imagen: 'https://acdn-us.mitiendanube.com/stores/798/865/products/31270646-e55aacf8ff8a8a986016639329846487-640-0.jpg',
  },
  {
    id: 2,
    nombre: 'Heineken',
    vencimiento: '2025-08-30',
    elaboracion: 'Ámsterdam, Países Bajos',
    tipo: 'Pale Lager',
    alcohol: '5.0%',
    imagen: 'https://st3.depositphotos.com/1010386/12816/i/950/depositphotos_128160402-stock-photo-londonuk-october-123-2016-bottle.jpg'
  },
  {
    id: 3,
    nombre: 'Guinness',
    vencimiento: '2025-12-31',
    elaboracion: 'Dublín, Irlanda',
    tipo: 'Stout',
    alcohol: '4.2%',
    imagen: 'https://media.istockphoto.com/id/537595169/es/foto/guinness-cerveza-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=giQzKIB933to-W_FmJ-GD5vs09wBDeCLqcRY1mqZG6E='
  },
  {
    id: 4,
    nombre: 'Corona',
    vencimiento: '2026-01-20',
    elaboracion: 'México DF, México',
    tipo: 'Pale Lager',
    alcohol: '4.6%',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT308BE0t1qTS4yHRS0i8u0D_jCbJfvrXgwhw&s'
  },
  {
    id: 5,
    nombre: 'Patagonia Amber Lager',
    vencimiento: '2025-11-05',
    elaboracion: 'Bariloche, Argentina',
    tipo: 'Amber Lager',
    alcohol: '4.5%',
    imagen: 'https://gobar.vtexassets.com/arquivos/ids/157557/PATAGONIA-AMER-LAGER-BOTELLA-710CC.jpg?v=637235189774470000'
  },
  {
    id: 6,
    nombre: 'Stella Artois',
    vencimiento: '2025-09-25',
    elaboracion: 'Lovaina, Bélgica',
    tipo: 'Pilsner',
    alcohol: '5.2%',
    imagen: 'https://thumbs.dreamstime.com/b/londres-reino-unido-de-noviembre-la-botella-del-fr%C3%ADo-de-cerveza-de-stella-artois-en-el-fondo-blanco-marca-prominente-de-anheuser-81677840.jpg'
  },
  {
    id: 7,
    nombre: 'Andes Origen Roja',
    vencimiento: '2025-07-01',
    elaboracion: 'Mendoza, Argentina',
    tipo: 'Irish Red Ale',
    alcohol: '5.5%',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/191552/7792798002122_02.jpg?v=638787741128030000'
  },
  ];

  const consultar = (cerveza) => {
    onSeleccionar(cerveza);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#111', color: 'white', fontFamily: 'Arial' }}>
      <h2 style={{ color: 'white' }}>🍺 Beers</h2>
      {cervezas.length === 0 ? (
        <p>Cargando cervezas...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={estiloCabecera}>Id</th>
              <th style={estiloCabecera}>Nombre</th>
              <th style={estiloCabecera}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {cervezas.map((cerveza) => (
              <tr key={cerveza.id}>
                <td style={estiloCelda}>{cerveza.id}</td>
                <td style={estiloCelda}>{cerveza.name}</td>
                <td style={estiloCelda}>
                  <button onClick={() => consultar(cerveza)} style={estiloBoton}>Consultar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const estiloCabecera = {
  backgroundColor: '#000',
  color: 'white',
  border: '2px solid blue',
  padding: '10px',
};

const estiloCelda = {
  backgroundColor: '#000',
  color: 'white',
  border: '1px solid blue',
  padding: '10px',
  textAlign: 'center',
};

const estiloBoton = {
  backgroundColor: 'blue',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default BeersTable;
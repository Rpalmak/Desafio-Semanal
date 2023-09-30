import React from 'react';
import Tags from './Tags';

function MyCard({ imagen, nombre, descripcion, texto, color }) {
  return (
    <div className="mycard">
      <img src={imagen} alt={nombre} />
      <div>
        <h2>{nombre}</h2>
      </div>
      <div className='desc'>{descripcion}</div>
      <Tags texto={texto} color={color} />
    </div>
  );
}

export default MyCard;

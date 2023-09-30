import React from 'react';
import Badge from 'react-bootstrap/Badge';

function Tags({ texto, color }) {
  return (
    <div className='badge'>
      <h1>
        <Badge bg={color}>{texto}</Badge>
      </h1>
    </div>
  );
}

export default Tags;

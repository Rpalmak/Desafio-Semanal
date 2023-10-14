import React from 'react';

function Buscador() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        aria-label="Buscar"
        aria-describedby="basic-addon2"
      />
      <button className="btn btn-outline-secondary" type="button" id="basic-addon2">
        Buscar
      </button>
    </div>
  );
}

export default Buscador;

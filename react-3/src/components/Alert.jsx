import React from 'react';

function Alert({ mensaje, tipo }) {
  if (!mensaje) {
    return null; // No mostrar el componente si no hay mensaje
  }

  return (
    <div className={`alert alert-${tipo}`} role='alert'>
      {mensaje}
    </div>
  );
}

export default Alert;

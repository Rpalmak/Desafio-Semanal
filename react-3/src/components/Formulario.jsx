import React, { useState } from 'react';
import { BaseColaboradores } from '../assets/BaseColaboradores';

function Formulario() {
  const estilosContainer = {
    margin: '20px',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  };

  const estilosFondoBorroso = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    backdropFilter: 'blur(3.2px)',
    WebkitBackdropFilter: 'blur(3.2px)',
    borderRadius: '16px',
  };


  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoColaborador = {
      nombre,
      email,
      edad,
      cargo,
      telefono,
    };
    agregarColaborador(nuevoColaborador); 
  }

  return (
    <div style={estilosContainer}>
      <div style={estilosFondoBorroso}></div>
      <div style={{ zIndex: '1', position: 'relative', textAlign: 'center' }}>
        <h1 className="mb-5">Agregar Colaborador</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del colaborador"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email del colaborador"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Edad del colaborador"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Cargo del colaborador"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Teléfono del colaborador"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;

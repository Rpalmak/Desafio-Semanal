import React, { useState } from 'react';
import Alert from './Alert';

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [contrasena2, setContrasena2] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre.trim() || !email.trim() || !contrasena || !contrasena2) {
      setValidationMessage("Todos los campos son obligatorios");
      return;
    }

    if (contrasena !== contrasena2) {
      setValidationMessage("Las contraseñas deben ser iguales");
      return;
    }

    setNombre("");
    setEmail("");
    setContrasena("");
    setContrasena2("");
    setValidationMessage("Registro exitoso!");

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      setValidationMessage("");
    }, 3000);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Nombre" 
          value={nombre}
          onChange={e => setNombre(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={e => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={contrasena}
          onChange={e => setContrasena(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Confirmar Contraseña" 
          value={contrasena2}
          onChange={e => setContrasena2(e.target.value)} 
        />
        <button className="btn btn-success" type="submit">
          Registrarse
        </button>
      </form>
      {validationMessage && <Alert validationMessage={validationMessage} />}
    </div>
  );
}

export default Formulario;

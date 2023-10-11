import React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";
import Alert from "./Alert";


// Componente Formulari
function Formulario() {
  const estilosForm = {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "100%",
    boxSizing: "border-box",
  };

  const estilosInput = {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "100%",
    boxSizing: "border-box",
    padding: "10px",
    border: "1px solid #ccc",
  };

  const estilosSubmit = {
    width: "100%",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "100%",
    boxSizing: "border-box",
  };

  

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [contrasena2, setContrasena2] = useState("");
  const [alert, setAlert] = useState(false);
  


  const handleSubmit = (alert) => {
    if (!nombre.trim() || !email.trim() || !contrasena || !contrasena2){
      setAlert(false)
    }
    else{
      setAlert("registro exitoso")
      setAlert(true)
    }
    if(contrasena != contrasena2){
      setAlert("las contraseñas deben ser iguales")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
      <p className="mt-4" style={estilosForm}>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength="4"
          maxLength="8"
          size="10"
          style={estilosInput}
          placeholder="Nombre"
          value={nombre}
          onChange={(e)=> setNombre(e.target.value)}
        />
      </p>
      <p className="mt-4" style={estilosForm}>
        <input
          type="email"
          id="email"
          name="email"
          required
          style={estilosInput}
          placeholder="tuemail@ejemplo.com"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
      </p>
      <p className="mt-4" style={estilosForm}>
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength="6"
          style={estilosInput}
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e)=> setContrasena(e.target.value)}
        />
      </p>
      <p className="mt-4" style={estilosForm}>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          minLength="6"
          style={estilosInput}
          placeholder="Confirma tu contraseña"
          value={contrasena2}
          onChange={(e)=> setContrasena2(e.target.value)}
        />
      </p>
      <p>
        <button className="btn btn-success" style={estilosSubmit} onClick={handleSubmit}>
          Registrarse
        </button>
      </p>
    </div>
    </form>
    
  );
}




export default Formulario;

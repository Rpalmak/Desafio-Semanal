// App.js
import React, { useState } from 'react';
import './App.css';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './assets/BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  // Funcion para agregar colaborador
  const agregarColaborador = (nuevoColaborador) => {
    nuevoColaborador.id = Date.now().toString();
    setColaboradores([...colaboradores, nuevoColaborador]);
    setAlertMessage('Colaborador agregado exitosamente');
    setAlertType('success');
  };

  return (
    <div className='app-container'>
      <div className='main'>
        <div className='panelIzquierdo'>
          <Buscador />
          <Listado colaboradores={colaboradores} />
          <Alert mensaje={alertMessage} tipo={alertType} />
        </div>
        <div className='panelDerecho'>
          <Formulario agregarColaborador={agregarColaborador} />
        </div>
      </div>
    </div>
  );
}

export default App;

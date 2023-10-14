// App.js
import { useState } from 'react'
import './App.css'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'
import Alert from './components/Alert'
import { BaseColaboradores } from './assets/BaseColaboradores';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <div className='main'>
        <div className='panelIzquierdo'>
          <Buscador />
          <Listado colaboradores={BaseColaboradores} />
          <Alert />
        </div>
        <div className='panelDerecho'>
          <Formulario />
        </div>
      </div>
    </div>
  )
}

export default App;

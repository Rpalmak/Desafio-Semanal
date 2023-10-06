//import React from 'react'
import SocialButton from './SocialButton'
import Formulario from './Formulario'
import Alert from './Alert'
import PropTypes from 'prop-types';
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Registro({validationMessage}) {

  const estilos = {
    width: '450px',
    padding: '20px',
    border: '2px solid #212F3D',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#f5f5f5', 
  };
  const iconosRedesSociales = [faFacebook, faGithub, faLinkedin];
  
  return (
    <div className='registro-container' style={estilos}>
      <h1 className='text-center'>Crea una cuenta</h1>
      <SocialButton icons={iconosRedesSociales} />
      <Formulario/>
      <Alert validationMessage={validationMessage}/>
    </div>
  )
}


Registro.propTypes = {
  validationMessage: PropTypes.node,
};

export default Registro

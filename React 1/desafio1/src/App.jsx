import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header title="Adopta un perrito" />
      <MyCard
        imagen="https://media.istockphoto.com/id/1386802968/es/foto/concepto-de-perro-robot-de-entrega.jpg?s=2048x2048&w=is&k=20&c=RSNBTVLw2bNAFVniNCwW3Rn5XeE2cdYDKA_QaXoVy-Y="
        nombre="Perro robot"
        descripcion="Un perro del futuro, muy fiel y protector."
        texto="Robotin"
        color="success"
      />
      <Footer/>
    </div>
  );
}

export default App;


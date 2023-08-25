
// const color="green";
// function pintar(color)
// {
//     ele.style.backgroundColor = "yellow";
// }

// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);

 

/*-----------------------------------EJERCICIO 2------------------------------------------*/

const cambiarColor = (cajaID) => {
  const elemento = document.getElementById(cajaID);
  if (elemento) {
      const colores = ['blue', 'red', 'green', 'yellow'];
      const colorActual = elemento.style.backgroundColor;
      const nuevoColor = colores[(colores.indexOf(colorActual) + 1) % colores.length];
      elemento.style.backgroundColor = nuevoColor;
  }
}

document.getElementById("box1").addEventListener("click", () => cambiarColor("box1"));
document.getElementById("box2").addEventListener("click", () => cambiarColor("box2"));
document.getElementById("box3").addEventListener("click", () => cambiarColor("box3"));
document.getElementById("box4").addEventListener("click", () => cambiarColor("box4"));
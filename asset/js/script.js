
// const color="green";
// function pintar(color)
// {
//     ele.style.backgroundColor = "yellow";
// }

// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);

 


function imagenBorde() {
  const imagen = document.getElementsByTagName('img')[0];
  imagen.classList.toggle("border");
}

/*-----------------------------------EJERCICIO 2------------------------------------------*/

const parrafo = document.getElementById('respuesta');

function eliminarMensaje(){
  setTimeout(function() {
    parrafo.style.visibility = "hidden";
  }, 5000);
}

function calcularStickers(){
  const cantidadSticker1 = Number(document.getElementById('cantidadSticker1').value);
  const cantidadSticker2 = Number(document.getElementById('cantidadSticker2').value);
  const cantidadSticker3 = Number(document.getElementById('cantidadSticker3').value);
  let suma=cantidadSticker1+cantidadSticker2+cantidadSticker3;
  if(suma<=10){
    let parrafo = document.getElementById('respuesta');
    parrafo.innerText="Llevas "+suma+" stickers";
  }
  else{
    alert("Llevas demasiados stickers")
  }
  console.log(cantidadSticker1);
}
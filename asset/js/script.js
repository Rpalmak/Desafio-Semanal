

function imagenBorde() {
  const imagen = document.getElementsByTagName('img')[0];
  imagen.classList.toggle("border");
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
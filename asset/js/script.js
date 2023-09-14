
/*-----------------------------------EJERCICIO 1------------------------------------------*/
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
  if(cantidadSticker1 <=0 || cantidadSticker2 <=0 || cantidadSticker3 <=0){
    parrafo.innerText="Debes ingresar valores válidos";
    parrafo.style.visibility = "visible";
    eliminarMensaje();
  }
  else{
      let suma=cantidadSticker1+cantidadSticker2+cantidadSticker3;
      if(suma<=10){
        parrafo.innerText="Llevas "+suma+" stickers";
        parrafo.style.visibility = "visible";
        eliminarMensaje()
      }
      else{
        parrafo.innerText="Llevas demasiados stickers";
        parrafo.style.visibility = "visible";
        eliminarMensaje()
      }
  }
}
  
/*-----------------------------------EJERCICIO 3------------------------------------------*/

function verificarCodigo(){
  //aqui dejo los valores como string, ya que no los necesito como números para este ejercicio
  const input1 = document.getElementsByClassName('dial-input')[0].value;
  const input2 = document.getElementsByClassName('dial-input')[1].value;
  const input3 = document.getElementsByClassName('dial-input')[2].value;
  const parrafo=document.getElementById('respuesta');
  let combinacion=input1+input2+input3;
  if(combinacion=="911"){
    parrafo.innerText="Password 1 correcto"
  }
  else if(combinacion=="714"){
    parrafo.innerText="Password 2 correcto"
  }
  else{
    parrafo.innerText="Password incorrecto"
  }
}
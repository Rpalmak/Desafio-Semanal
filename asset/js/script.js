

/*-----------------------------------EJERCICIO 3------------------------------------------*/
//como existen dos html usando el mismo JS, primero se comprueba si el elemento existe en el dom
function pintar(elemento, color='green') {
    elemento.style.backgroundColor = color;
}

document.addEventListener("DOMContentLoaded", function() {
    const ele = document.getElementById("ele1");

    ele.addEventListener("click", function() {
        pintar(ele, "yellow");
    });

});

//-----------------------------------EJERCICIO 4------------------------------------------

const cambiarColor = (cajaID) => {
  const elemento = document.getElementById(cajaID);
  if (elemento) {
    elemento.style.backgroundColor = "black";
  }
}

document.getElementById("box1").addEventListener("click", () => cambiarColor("box1"));
document.getElementById("box2").addEventListener("click", () => cambiarColor("box2"));
document.getElementById("box3").addEventListener("click", () => cambiarColor("box3"));
document.getElementById("box4").addEventListener("click", () => cambiarColor("box4"));

//----------------------------------------------------------------------------------------------
//-------Ejercicio de la caja que aparece de distintos colores según las teclas apretadas-------
//----------------------------------------------------------------------------------------------
let elementoKey = document.getElementById("key");

document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    elementoKey.style.backgroundColor = "pink";
  } else if (event.key === 's') {
    elementoKey.style.backgroundColor = "orange";
  } else if (event.key === 'd') {
    elementoKey.style.backgroundColor = "lightblue";
  }
});


//----------------------------------------------------------------------------------------------
//-------Ejercicio para hacer aparecer los DIV--------------------------------------------------
//----------------------------------------------------------------------------------------------
let elementoCajas = document.getElementById('cajas')
console.log("cajas:" + elementoCajas)

document.addEventListener('keydown', function (event) {
  if (event.key === 'q') {
    const contenidoNuevo = "<div id='nuevo1' style='background-color: purple;'></div>";
    let existe = document.getElementById('nuevo1');
    if (!existe) {
      elementoCajas.insertAdjacentHTML("beforeend", contenidoNuevo);
    }
    else{existe.remove();}
  }
  else if (event.key === 'w') {
    contenidoNuevo = "<div id='nuevo2' style='background-color: grey;'></div>";
    existe = document.getElementById('nuevo2');
    if (!existe) {
      elementoCajas.insertAdjacentHTML("beforeend", contenidoNuevo);
    }
    else{existe.remove();}
  }
  else if (event.key === 'e') {
    contenidoNuevo = "<div id='nuevo3' style='background-color: brown;'></div>";
    existe = document.getElementById('nuevo3');
    if (!existe) {
      elementoCajas.insertAdjacentHTML("beforeend", contenidoNuevo);
    }
    else{existe.remove();}
  }
});

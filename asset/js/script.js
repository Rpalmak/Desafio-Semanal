
// const color="green";
// function pintar(color)
// {
//     ele.style.backgroundColor = "yellow";
// }

// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);




//ejercicio 4---------------------------------------------------------------------
//--------------------------------------------------------------------------------
const cambiarColor = (cajaID) => {
    const elemento = document.getElementById(cajaID);
    elemento.style.backgroundColor = "black";
}

document.getElementById("box1").addEventListener("click", () => cambiarColor("box1"));
document.getElementById("box2").addEventListener("click", () => cambiarColor("box2"));
document.getElementById("box3").addEventListener("click", () => cambiarColor("box3"));
document.getElementById("box4").addEventListener("click", () => cambiarColor("box4"));

//--------------------------------------------------------------------------------
let color=""
const elemento = document.getElementById("key");
document.addEventListener('keydown', function (event) 
{
    if (event.key === 'a') {
    color="pink";
    elemento.style.backgroundColor=color
    } 
    else if (event.key === 's') {
    color="orange"
    elemento.style.backgroundColor=color
    }
    else if (event.key === 'd') {
    color="lightblue"
    elemento.style.backgroundColor=color
    }

})
//--------------------------------------------------------------------------------
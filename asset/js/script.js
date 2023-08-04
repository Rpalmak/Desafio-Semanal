



//Constantes
const valorOso=25000;
const imagenOsoElement = document.getElementById('imagenOso');
const valorTotalDOM = document.getElementById('precio-total')
const cantidadTotalDOM = document.getElementById('cantidad-total')
const colorDOM = document.getElementById('circulo-color')

//Variables
let cantidad, color, colorStyle;



function calcular(){
    cantidad=document.getElementById('inputCantidad').value;
    color=document.getElementById('inputColor').value;
    valorTotal=cantidad*valorOso;
    valorTotalDOM.innerHTML = "Total: $"+valorTotal
    cantidadTotalDOM.innerHTML = "Cantidad: "+cantidad
    colorDOM.style.backgroundColor = color;
    
}

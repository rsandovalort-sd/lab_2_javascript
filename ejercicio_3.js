const prompt =require("prompt-sync")();

//Ejercicio 3: Busca producto en inventario
console.log("Ejercicio 3: Busca producto en inventario");
const inventario = [
    {nombre: "camisa", precio: 45.000},
    {nombre: "tenis", precio: 250.000},
    {nombre: "pantalon", precio: 120.000},
    {nombre: "vestido", precio: 180.000}
]; 
let nombre = prompt("Ingrese el producto: ").toLowerCase();
function buscarProducto (nombre, inventario){
    let producto = "";
    for (let i= 0; i < inventario.length; i++){
        if (inventario[i].nombre === nombre){
            producto = inventario[i].nombre;
            return producto;
        }else{
            producto = null;
            return producto;
        }
    }  
};
let resultado = buscarProducto(nombre, inventario);
console.log("El producto es:",resultado);
const prompt =require("prompt-sync")();
//Ejercicio 4: Calcular promedio de notas
console.log("Ejercicio 4: Calcular promedio de notas");

let notas = prompt("Ingrese las notas sepradas por comas: ");
let lista_notas = notas.split(",");

function calcularPromedio(lista_notas){
    let suma = 0;
    for (let i of lista_notas){
        suma += Number(i);
    }
    let promedio = suma/lista_notas.length;
    return promedio.toFixed(2);
}; 


resultado = calcularPromedio(lista_notas);
console.log(`El promedio es: ${resultado}`);
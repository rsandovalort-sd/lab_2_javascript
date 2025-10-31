const prompt =require("prompt-sync")();
//Ejercicio 4: Calcular promedio de notas
console.log("Ejercicio 4: Calcular promedio de notas");

let notas = ("Ingrese las notas sepradas por comas: ");
let lista_notas = notas.split(",");

function calcularPromedio(notas){
    let suma = 0;
    for (let nota of notas){
        suma += Number(nota);
    }
    let promedio = suma/notas.length;
    return promedio.toFixed(2);
}; 


resultado = calcularPromedio(notas);
console.log(`El promedio es: ${resultado}`);
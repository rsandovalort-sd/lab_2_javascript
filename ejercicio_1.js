const prompt =require("prompt-sync")();

//Ejercicio 1: Calculadora de propinas
console.log("Ejercicio 1: Calculadora de propinas");

let total = Number(prompt("Ingrese el valor de la cuenta: "));
let porcentaje = Number(prompt("Ingrese el porcentaje de la propina: "));
function calc_pro(total){
    return total + (total*porcentaje/100);
};

console.log(`El valor total de la cuenta es: ${calc_pro(total)}`);


    


  


const prompt =require("prompt-sync")();

//Ejercicio 8: Cambio de moneda
console.log("Ejercicio 8: Cambio de moneda");
const USD = 3980;
const EUR = 4500;
let monto = Number(prompt("Escoja el monto de pesos colombianos que desea convertir: "));
let monedaDestino = prompt("Escoja si quiere convertir a USD O EUR: ").toUpperCase();


function convertirMoneda(monto, monedaDestino){
    if (monedaDestino === "USD"){
        let dollar = monto/USD;
        return `La cantidad de dolares que se le darán son: ${dollar}`;
    }else{
        let euro = monto/EUR;
        return `La cantidad de dolares que se le darán son: ${euro}`;
    }
};

respuesta = convertirMoneda(monto, monedaDestino);
console.log(respuesta);

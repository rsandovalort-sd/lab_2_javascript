const prompt =require("prompt-sync")();

// Ejercicio 7: Simulador de cajero automatico
console.log("Ejercicio 7: Simulador de cajero automatico")
let saldo = Number(prompt("Ingrese su saldo actual: "));
let monto = Number(prompt("Ingrese el monto a retirar: "));

function retirarDinero(saldo, monto){
    if (monto < saldo){
        nuevo_saldo = saldo - monto;
        return `Su nuevo saldo es: ${nuevo_saldo}`;
    }else if (monto > saldo) {
        return "Fondos insuficiente";
    }else{
        return "Su saldo es: 0";
    };
};

respuesta = retirarDinero(saldo, monto);
console.log(respuesta);
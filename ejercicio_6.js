const prompt =require("prompt-sync")();

//Ejercicio 6: Contador de palabras
console.log("Contador de palabras");
texto = prompt("Ingrese una frase: ");

function contarPalabras(texto){
    let contador = 0;
    for (let i= 0; i < texto.length; i++){
        if (texto[i] === " "){
            contador ++; 

        }
    }
    return numero_palabras = contador + 1;
};
 
let resultado = contarPalabras(texto);
console.log(`El total de las palabras es: ${resultado}`);


 

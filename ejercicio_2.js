const prompt =require("prompt-sync")();

//Ejercicio 2: Validar contraseña
console.log("Ejercicio 2: Validar contraseña");

const numeros = ["0","1","2","3","4","5","6","7","8","9"];
const mayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

console.log("Formulario de registro");
let user = prompt("Cree su usuario: ");
let password = prompt("Cree su contraseña:");

function validar_contrasena(password){
    if (password.length < 8){
        return false;
    }
    let mayu = false;
    let nume = false
    for (let i = 0; i < password.length; i++){
       let caracter = password[i];
       if (mayusculas.includes(caracter)){
        mayu = true;
        }
        if (numeros.includes(caracter)){
            nume = true;
        }
    };
    if (nume && mayu){
        return true;
    }else{
        return false;
    }
};
         

let response = validar_contrasena(password);
console.log("La respuesta es: ",response);
if (response == true){
    console.log("Registro exitoso");
}else{
    console.log("Registro no exitoso");
}
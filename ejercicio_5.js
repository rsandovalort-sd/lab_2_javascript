const prompt =require("prompt-sync")();

//Ejercicio 5: Filtrar usuario por Edad
console.log("Ejercicio 5: Filtrar usuario por Edad");
usuarios = [
    {nombre: "Ana", edad: 25},
    {nombre: "Ricardo", edad: 35},
    {nombre: "Sara", edad: 15},
    {nombre: "Juan", edad: 10},
    {nombre: "Oscar", edad: 69},
    {nombre: "Carlos", edad: 18}
];
let edadMinima = Number(prompt("Ingrese la edad mínima: "));

function filtarUsuarios(usuarios, edadMinima){;
    let usuarios_elegidos = [];
    for (let i = 0; i < usuarios.length; i++){ 
        if (usuarios[i].edad >= edadMinima ){
            let usuario = usuarios[i].nombre;
            usuarios_elegidos.push(usuario);
        }     
    };
    return usuarios_elegidos;
};

resultado = (filtarUsuarios(usuarios, edadMinima));
console.log(resultado);
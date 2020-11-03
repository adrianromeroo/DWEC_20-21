//Declaro las variables
let nombre = prompt("Introduzca su nombre: ");
let apellido1 = prompt("Introduzca su primer apellido: ");
let apellido2 = prompt("Introduzca su segundo apellido: ")

//Almaceno en la variable las 3 variables anteriores
let nombrecompleto = (nombre + apellido1 + apellido2);

//Almaceno en la variable la longitud de la cadena
let tamano_nombrecompleto = nombrecompleto.length;
console.log("El tamaño del nombre más los apellidos (sin contar espacios) es: " + tamano_nombrecompleto);

//Almaceno en una variable el nombre en mayusculas y otro en minusculas
let mayusculas = (nombre + apellido1 + apellido2).toUpperCase();
let minusculas = (nombre + apellido1 + apellido2).toLowerCase();

//Muestro el nombre completo dividido
console.log("La cadena en mayusculas es: " + mayusculas);
console.log("La cadena en minusculas es: " + minusculas);

console.log("Nombre: " + nombre +
                "\n Apellido1: " + apellido1 +
                "\n Apellido2: " + apellido2);

//Extraigo mediante "substring" la parte de la cadena que quiero
let propuesta_nombre1 = (nombre.substring(0,1).toLowerCase() + apellido1.toLowerCase() + apellido2.substring(0,1).toLowerCase());
let propuesta_nombre2 = (nombre.substring(0,3).toLowerCase() + apellido1.substring(0,3).toLowerCase() + apellido2.substring(0,3).toLowerCase());
console.log("Propuesta de nombre variable 1: " + propuesta_nombre1);
console.log("Propuesta de nombre variable 2: " + propuesta_nombre2);
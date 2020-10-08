function ejercicio () {
var letra_dni = document.getElementById("letra").value;
var numeros_dni = document.getElementById("dni").value;

var cadena = "TRWAGMYFPDXBNJZSQVHLCKE";

   
    if (isNaN(numeros_dni)) {
        alert("Teclear un DNI (sin letras, sólo números)");
    }

    if (numeros_dni == "") {
        alert("Completar el campo DNI");
    }

}


//Solo podemos introducir numeros del 0-9 y una cantidad de 8 números, posteriormente ponemos un "-" y lo salvamos
//luego del guión solo podemos introducir una letra de la A-Z tanto minuscula como mayuscula. 
const reGexDNI = /^[0-9]{8}\-[A-Za-z]{1}$/;

//Podremos introducir letras de la A-Z tanto mayuscula como minúscula, números del 0 al 9 y un punto
//esto podemos escribir los caracteres anteriores 1 o más veces, luego pondremos la "@" y la salvamos, posteriormente
//podremos introducir en el dominio 1 o más caracteres de la a-z, luego salvamos el "." y por último luego del punto
//podremos poner de 2 a 4 caracteres de la a-z
const reGexEmail = /^[a-zA-Z0-9\.]+\@[a-z]+\.[a-z]{2,4}$/;

//Con la "\d" indicamos que podemos introducir cualquier caracter dígito del 0-9, pero solo 2 digitos, esta secuencia
//la vovemos a repetir para referirnos a los meses y por último hacemos lo mismo pero permitimos 4 digitos para
//validar la longitud del año
const reGexFechaNacimiento = /^\d{2}\/\d{2}\/\d{4}$/;

//Podemos introducir 9 digitos del 0 al 9
const reGexTelefono = /^[0-9]{9}$/;

//Con la "\d" indicamos que podemos introducir cualquier caracter dígito del 0-9 y solo podemos insertar 2 dígitos
//y por último es exactamente lo mismo pero refiriendose a los minutos
const reGexHora= /^\d{2}\:\d{2}$/;

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarNombreyApellidos() {
    let elemento = document.getElementById("nombre");
    let elemento2 = document.getElementById("apellidos");

    limpiarError(elemento);
    limpiarError(elemento2);

    if (elemento.value === "") {
        error(elemento);
        document.getElementById("errores").innerHTML = "No puedes dejar el campo nombre vacio";
        return false;

    } if (elemento2.value === "") {
        error(elemento2);
        document.getElementById("errores").innerHTML = "No puedes dejar el campo apellidos vacio";
        return false;
    }

    return true;
}

function validarEdad() {
    let elemento = document.getElementById("edad");
    limpiarError(elemento);

    if(isNaN(elemento.value) || elemento.value <= 0 || elemento.value >= 105) {
        error(elemento);
        document.getElementById("errores").innerHTML = "Has introducido una edad fuera de rango o no numerica";
        return false;
    } else {
        return true;
    }

}

function validarNIF() {
    let elemento = document.getElementById("nif");
    limpiarError(elemento);

    if(reGexDNI.test(elemento.value)) {
        return true;
    } else {
        error(elemento);
        document.getElementById("errores").innerHTML = "El formato de DNI introducido no es correcto";
        return false;
    }

}

function validarEmail() {
    let elemento = document.getElementById("email");
    limpiarError(elemento);

    if(reGexEmail.test(elemento.value)) {
        return true;
    } else {
        error(elemento);
        document.getElementById("errores").innerHTML = "El formato del email no es correcto";
        return false;
    }

}

function validarProvincia() {
    let elemento = document.getElementById("provincia")
    limpiarError(elemento);

    if(elemento.value === "0") {
        error(elemento);
        document.getElementById("errores").innerHTML = "Debes seleccionar una provincia";
        return false;
    } else {
        return true;        
    }

}

function validarFechaNacimiento() {
    let elemento = document.getElementById("fecha");
    limpiarError(elemento);

    if(reGexFechaNacimiento.test(elemento.value)) {
        return true;
    } else {
        error(elemento);
        document.getElementById("errores").innerHTML = "La fecha introducida no cumple con el formato (dd/mm/yyyy)";
        return false;
    }

}

function validarTelefono() {
    let elemento = document.getElementById("telefono");
    limpiarError(elemento);

    if(reGexTelefono.test(elemento.value)) {
        return true;
    } else {
        error(elemento);
        document.getElementById("errores").innerHTML = "El teléfono introducido es incorrecto";
        return false;
    }

}

function validarHora() {
    let elemento = document.getElementById("hora");
    limpiarError(elemento);

    if(reGexHora.test(elemento.value)) {
        return true;
    } else {
        error(elemento);
        document.getElementById("errores").innerHTML = "La hora introducida no cumple con el formato (hh:mm)";
        return false;
    }

}

function validar(e) {
    if (validarNombreyApellidos() && validarEdad() && validarNIF() 
        && validarEmail() && validarProvincia() && validarFechaNacimiento() 
        && validarTelefono() && validarHora() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}





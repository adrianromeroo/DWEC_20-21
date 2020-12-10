//Le decimos puede insertar 2 caracterer numericos, posterior una /, luego otros 2 numeros otra / y por ultimo 4 numeros
//estos numeros del 0-9 o tambien "|" admite el mismo formato pero con "-" en vez de "/"
const regExFecha = /^(\w{2}\/\w{2}\/\w{4}|\w{2}\-\w{2}\-\w{4})$/;

//Solo puede introducir o A+++, A++, A+, A, B, C, D el conjuno lo ponemos en el parentesis y lo separamos de otras opciones
//mediante "|"
const regExConsumo = /^(A\+\+\+|A\+\+|A\+|A|B|C|D)$/;

//Empieza con "#" luego 2 letras mayusculas o minusculas, posteriormente puede introducir de 8 a 16 caracteres de la
//a-z como mayuscula y minuscula, luego un caracter no alfanumerico y por ultimo puede introducir 3 digitos ya sean 3, 7 o 9
const regExPassword = /^\#[a-zA-Z]{2}[a-zA-Z]{8,16}\W{1}[3|7|9]{3}$/;

//Debe introducir 2 letras mayusculas, luego 2 numeros, posteriormente una F...
const regExReferencia = /^[A-Z]{2}[0-9]{2}F$/;

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

//Validacion del Nombre del Modelo
function validarNombreModelo() {
    let elemento = document.getElementById("n_modelo");
    limpiarError(elemento);

    if (elemento.value === "") {
        error(elemento);
        document.getElementById("errores").innerHTML = "No se puede dejar vacio el campo Nombre Modelo";
        return false;
    } else {
        acierto(elemento);
        return true;
    }
}

//Validacion del Tipo de Modelo
function validarTipoModelo() {
    let elemento = document.getElementById("tipo_modelo");
    limpiarError(elemento);

    if (elemento.value === "") {
        error(elemento);
        document.getElementById("errores").innerHTML = "Debe seleccionar un Modelo";
        return false;
    }else {
        acierto(elemento);
        return true;
    }
}

//Validacion de la Fecha de Creacion
function validarFechaCreacion() {
    let elemento = document.getElementById("fecha");
    limpiarError(elemento);

    if (!regExFecha.test(elemento.value) || elemento.value === "") {
        error(elemento);
        document.getElementById("errores").innerHTML = "El formato de fecha introducido es incorrecto (dd:mm:yyyy | dd/mm/yyyy)";
        return false;
    }else {
        acierto(elemento);
        return true;
    }
}

//Validacion del Consumo Energetico
function validarConsumoEnergetico() {
    let elemento = document.getElementById("consumo");
    limpiarError(elemento);

    if (!regExConsumo.test(elemento.value) || elemento.value === "") {
        error(elemento);
        document.getElementById("errores").innerHTML = "El campo consumo debe de tener alguno de los siguientes valores: A+++ A++ A+ A B C D";
        return false;
    }else {
        acierto(elemento);
        return true;
    }
}

//Validacion de la referencia del modelo
function validarReferenciaModelo() {
    let elemento = document.getElementById("referencia");
    limpiarError(elemento);

    if (!regExReferencia.test(elemento.value) || elemento.value === "") {
        error(elemento);
        document.getElementById("errores").innerHTML = "El campo referencia debe de tener este formato: UE55F8000AFXZ";
        return false;
    }else {
        acierto(elemento);
        return true;
    }
}

//Validacion del password
function validarPassword() {
    let elemento = document.getElementById("password");
    limpiarError(elemento);

    if (!regExPassword.test(elemento.value) || elemento.value === "") {
        error(elemento);
        document.getElementById("errores").innerHTML = "EL formato introducido es erroneo";
        return false;
    }else {
        acierto(elemento);
        return true;
    }
}

function validar(e) {
    if (validarNombreModelo() && validarTipoModelo() && validarFechaCreacion() && validarConsumoEnergetico()
        && validarReferenciaModelo() && validarPassword() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
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

function acierto(elemento) {
    elemento.className = "acierto";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}

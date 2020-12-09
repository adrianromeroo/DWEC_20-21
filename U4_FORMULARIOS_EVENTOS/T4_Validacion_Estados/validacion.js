let formulario = document.getElementById("formulario");

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function campo20 () {
    let elemento = document.getElementById("nombre_disco");
    let elemento2 = document.getElementById("grupo_cantante");
    limpiarError(elemento);
    limpiarError(elemento2);

    if (elemento.value === "" || elemento.value.length < 20) {
        alert("El campo debe contener 20 caracteres como minimo");
        error(elemento);
        return false;

    } else if (elemento2.value === "" || elemento2.value.length < 20) {
        alert("El campo debe contener 20 caracteres como minimo");
        error(elemento2);
        return false;

    }

    return true;
}

function validarAnopublicacion () {
    let elemento = document.getElementById("ano_publicacion");
    limpiarError(elemento);

    if (isNaN(elemento.value) || elemento.value === "" || elemento.value.length < 4) {
        alert("El caracter debe ser numerico y debe ser mayor o igual a 4 caracteres");
        error(elemento);
        return false;
    } else {
        return true;
    }
    
}

function validarLocalizacion() { 
    let elemento = document.getElementById("localizacion");
    limpiarError(elemento);

    if (!isNaN(elemento.value) || elemento.value === "") {
        return true;
    }
    alert ("El campo tiene que ser numérico o estar vacio");
    error(elemento);
    return false;
}

function validar(e) {
    if (campo20() && validarAnopublicacion() && validarLocalizacion() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
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





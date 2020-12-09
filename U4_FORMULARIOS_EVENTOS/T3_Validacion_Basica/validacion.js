window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function campo20 () {
    let elemento = document.getElementById("nombre_disco").value;
    let elemento2 = document.getElementById("grupo_cantante").value;

    if(elemento.length >= 20 && elemento2.length >= 20) {
        return true;
    } else {
        alert("El campo debe contener 20 caracteres como minimo");
        return false;
    }
}

function validarAnopublicacion () {
    let elemento = document.getElementById("ano_publicacion").value;
    if (isNaN(elemento) || elemento === "" || elemento.length < 4) {
        alert("El caracter debe ser numerico y debe ser mayor o igual a 4 caracteres");
        return false;
    } else {
        return true;
    }
    
}

function validarLocalizacion() { 
    let elemento = document.getElementById("localizacion").value;
    if (!isNaN(elemento) || elemento === "") {
        return true;
    }
    alert ("El campo tiene que ser numérico o estar vacio");
    return false;
}

function validar() {
    if (campo20() && validarAnopublicacion() && validarLocalizacion() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}





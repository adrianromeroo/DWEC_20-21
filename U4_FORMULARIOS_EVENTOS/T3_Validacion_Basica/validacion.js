window.onload = iniciar;
function iniciar() {
    document.getElementById("nombre_disco").addEventListener("click", validar, false);
    document.getElementById("grupo_cantante").addEventListener("click", validar, false);
    document.getElementById("ano_publicacion").addEventListener("click", validar, false);
    document.getElementById("tipo_musica").addEventListener("click", validar, false);
    document.getElementById("localizacion").addEventListener("click", validar, false);
    document.getElementById("nombre_disco").addEventListener("click", validar, false);
}

function validarLocalizacion() { 
    loc = document.getElementById("localizacion").value;
    if (!isNaN(loc) && loc == "") {
        return true;
    }
    alert ("El campo tiene que ser numérico o estar vacio");
    return true;
}

function validarAnopublicacion {
    ano = document.getElementById("ano_publicacion").value;
    if () {

    }
}

function campo20() {
    
    n_disco = document.getElementById("nombre_disco").value;
    gc_musica = document.getElementById("grupo_cantante").value;

    if (n_disco.length >= 20) {
        return true;
    } else {
        alert("El campo es menor a 20 caracteres");
        return false;
    }
    
    if (gc_musica.length >= 20) {
        return true;
    } else {
        alert("El campo es menor a 20 caracteres");
        return false;
    }
    
}


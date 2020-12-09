const regexFecha = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/

const regexCocinero = /^([A-Z]{2})([#@$]?)([0-9]{4})$/

const regexDestinatario = /^([A-Z]{2,3})(_?)([a-z]+)(:?)([0-9]{4})$/

const regexGramos = /(5000)|(^[1-4]+[0-9]{3})|(^[1-9]+[0-9]{2})/

const regexComposicion = /^([0-9]+)(g?)([A-Z]{1,2}[0-9]{0,1}){2}$/

const regexNumCuenta = /^([a-z]{2})([0-9]{2})(-?)([0-9]{12})(-?)([0-9]{2})/

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validadFecha () {
    let elemento = document.getElementById("fecha");
    
    if(regexCocinero.test(elemento)) {
        return true;
    } else {
        return false;
    }
    
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





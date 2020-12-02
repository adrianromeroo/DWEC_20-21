window.onload=iniciar;


function validacion() {
    
    n_disco = document.getElementById("nombre_disco").value;
    gc_musica = document.getElementById("grupo_cantante").value;
    if (n_disco.length >= 20) {
        return true;
    }
    alert("El campo es menor a 20 caracteres");
    return false;
    
}
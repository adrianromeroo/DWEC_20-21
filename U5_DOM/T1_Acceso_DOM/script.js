window.onload = function() {
    
    //Cogemos el ID del div para meter la informacion por pantalla
    let info = document.getElementById("info");

    let p = document.getElementsByTagName("p");

    let enlaces = document.getElementsByTagName("a");

    let enlaces2 = document.getElementById("body").getElementsByTagName("p")[0].previousSibling;

    info.innerHTML = info.innerHTML + "El numero de parrafos es: " + p.length + "<br>";
    info.innerHTML = info.innerHTML + "El contenido del segundo parrafo es: " + p[1].textContent + "<br>";
    info.innerHTML = info.innerHTML + "El numero de enlaces de la pagina es: " + enlaces.length + "<br>";
    info.innerHTML = info.innerHTML + "La direccion del primer enlace es: " + enlaces[0].href + "<br>";
    info.innerHTML = info.innerHTML + "La dirección del penúltimo enlace es: " + enlaces2;
}


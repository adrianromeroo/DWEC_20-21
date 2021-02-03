//Cuando la página se cargue se llama a la funcion iniciar
window.onload = iniciar;

//Funcion Iniciar
function iniciar() {
  //Una vez que se haga click en el boton se llamara a la función "lanzar_peticion"
  document.getElementById("enviar").addEventListener("click", lanzar_peticion, true);
}

function lanzar_peticion() {
  //Creamos el objeto para hacer peticiones
  miXHR = new XMLHttpRequest();
  //Le mandamos a la funcion "cargarAsync" el archivo.php con el que vamos a trabajar
  cargarAsync("localidad.php");
}

//Usamos la funcion con el archivo "php" pasado anteriormente
function cargarAsync(localidad) {
  if (miXHR) {
    //Imprimimos el estado de la peticion
    console.log(miXHR.readyState);

    //Obtenemos lo insertado en el input
    let loc = document.getElementById("localidad").value;

    //Realizamos la peticion
    miXHR.open("GET", localidad + "?localidad=" + loc, true);
    //Imprimimos el estado de la peticion
    console.log(miXHR.readyState);

    miXHR.onreadystatechange = estadoPeticion;

    miXHR.send(null);
  }

  function estadoPeticion() {
    //Imprimimos el estado de la peticion
    console.log(miXHR.readyState);
    if (miXHR.readyState == 4 && miXHR.status == 200) {
      if (miXHR.responseText === "SI") {
        document.getElementById("resultado").innerHTML = "Si se ha encontrado la localidad";
        document.getElementById("resultado").setAttribute("class","verde");
      } else {
        document.getElementById("resultado").innerHTML = "No se ha encontrado la localidad";
        document.getElementById("resultado").setAttribute("class","rojo");
      }
    }
  }
}



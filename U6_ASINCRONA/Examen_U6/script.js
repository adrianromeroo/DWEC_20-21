window.onload = iniciar;

function iniciar() {
    document.getElementById("cargar_datos_xmlhttprequest").addEventListener("click", cargarDatosXMLHttpRequest);
    document.getElementById("cargar_datos_fetch").addEventListener("click", cargarDatosFecth);
    document.getElementById("enviar").addEventListener("click", modificarDatos);
}

function cargarDatosXMLHttpRequest() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        cargarJSON(xhr);
      } 
    };
    xhr.open("GET", "latest.json", true);
    xhr.send();
}

function cargarJSON(json) {
    let docJSON = JSON.parse(json.responseText);
    let tabla = "<tr><th>CCAA</th><th>D_Entregadas</th><th>D_Admin</th><th>D_Completa</th><th>P_Entregadas</th><th>P_Admin</th><th>P_Completa</th></tr>";

    for (comunidades of docJSON) {
        tabla += '<tr><td>';
        tabla += comunidades.ccaa;
  
        tabla += "</td><td>";
        tabla += comunidades.dosisEntregadas;
  
        tabla += '</td><td>';
        tabla += comunidades.dosisAdministradas;

        tabla += '</td><td>';
        tabla += comunidades.dosisPautaCompletada;

        tabla += '</td><td>';
        tabla += comunidades.porcentajeEntregadas;

        tabla += '</td><td>';
        tabla += comunidades.porcentajePoblacionAdministradas;

        tabla += '</td><td>';
        tabla += comunidades.porcentajePoblacionCompletas;
  
        tabla += "</td></tr>";
    }
    document.getElementById("tabla").innerHTML = tabla;
    document.getElementById("resultado").innerHTML = "Datos Mostrados Mediante XMLHttpRequest";
}


function cargarDatosFecth() {
    fetch("latest.json")
    .then(response => response.json())
    .then(data => {

    let tabla = "<tr><th>CCAA</th><th>D_Entregadas</th><th>D_Admin</th><th>D_Completa</th><th>P_Entregadas</th><th>P_Admin</th><th>P_Completa</th></tr>";
    for (comunidades of data) {
        tabla += '<tr><td>';
        tabla += comunidades.ccaa;
  
        tabla += "</td><td>";
        tabla += comunidades.dosisEntregadas;
  
        tabla += '</td><td>';
        tabla += comunidades.dosisAdministradas;

        tabla += '</td><td>';
        tabla += comunidades.dosisPautaCompletada;

        tabla += '</td><td>';
        tabla += comunidades.porcentajeEntregadas;

        tabla += '</td><td>';
        tabla += comunidades.porcentajePoblacionAdministradas;

        tabla += '</td><td>';
        tabla += comunidades.porcentajePoblacionCompletas;
  
        tabla += "</td></tr>";
    }
    })
    .catch((err) => console.log(err));
}

function modificarDatos() {

        let vacunacion = {
            ccaa: document.getElementById("CCAA").value,
            dosisEntregadas: document.getElementById("d_entregadas").value,
            dosisAdministradas: document.getElementById("d_administradas").value,
            dosisPautaCompletada: document.getElementById("d_completa").value,
            porcentajeEntregadas: document.getElementById("p_entregadas").value,
        };
      
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
          }
        };
      
        let parametros = JSON.stringify(vacunacion);
        xhr.open("POST", "actualizar_comunidad.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
}



















































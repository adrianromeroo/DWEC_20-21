window.addEventListener("load", inicio);

function inicio() {
  document.getElementById("cargaXML").addEventListener("click", cargaXML);
  document.getElementById("cargaFetch").addEventListener("click", cargaFetch);
  document.getElementById("actualizar").addEventListener("click", actualizar);
}

var docJson;

function cargaXML() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      docJson = JSON.parse(xhr.responseText);
      insertar(docJson);
    }
  };
  xhr.open("GET", "latest.json", true);
  xhr.send();
}

function cargarJson(docJson) {
  let tabla =
    "<tr><th>Comunidades autónomas</th><th>Dosis administradas</th><th>Dosis entregadas</th><th>Dosis pauta completada</th><th>Porcentaje entregadas</th><th>Datos porcentaje población administrada</th><th>Datos porcentaje población completa</th></tr>";

  for (datos of docJson) {
    tabla += "<tr><td>";
    tabla += datos.ccaa;
    tabla += "</td><td>";
    tabla += datos.dosisAdministradas;
    tabla += "</td><td>";
    tabla += datos.dosisEntregadas;
    tabla += "</td><td>";
    tabla += datos.dosisPautaCompletada;
    tabla += "</td><td>";
    tabla += datos.porcentajeEntregadas;
    tabla += "</td><td>";
    tabla += datos.porcentajePoblacionAdministradas;
    tabla += "</td><td>";
    tabla += datos.porcentajePoblacionCompletas;

    tabla += "</td></tr>";
  }
  document.getElementById("tabla").innerHTML = tabla;
}

function insertar(docJson) {
  fetch("insertar_comunidades.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(docJson),
  })
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      cargarJson(data);
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
}

function actualizar() {
  let dato = {
    ccaa: document.getElementById("comunidades").value,
    dosisAdministradas: document.getElementById("administradas").value,
    dosisEntregadas: document.getElementById("entregadas").value,
    dosisPautaCompletada: document.getElementById("completa").value,
    porcentajeEntregadas: document.getElementById("porcEntregadas").value,
    porcentajePoblacionAdministradas: document.getElementById("porcentaje")
      .value,
    porcentajePoblacionCompletas: document.getElementById("poblacion").value,
  };
  fetch("actualizar_comunidad.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dato),
  })
    .then((data) => {
      cargarJson(data);
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
}

function cargaFetch() {
  fetch("latest.json")
    .then((response) => response.json())
    .then((data) => {
      docJson = data;
      cargarJson(data);
    })

    .catch((err) => console.log(err));
}
window.onload = iniciar;

function iniciar() {
  document.getElementById("Generar_Tabla").addEventListener("click", generarFormulario);
  document.getElementById("Mostrar_Series").addEventListener("click", mostrarDatos);
}

function generarFormulario() {
  let div = document.createElement("div");

  //Label y input de titulo
  let titulo = createLabel("titulo", "Inserte el titulo:");
  div.appendChild(titulo);
  div.appendChild(document.createElement("br"));

  let input_titulo = createInput("text", "titulo", "titulo", "");
  div.appendChild(input_titulo);
  div.appendChild(document.createElement("br"));

  //Label y input de director
  let label_director = createLabel("director", "Inserte el Director:");
  div.appendChild(label_director);
  div.appendChild(document.createElement("br"));

  let input_director = createInput("text", "director", "director", "");
  div.appendChild(input_director);
  div.appendChild(document.createElement("br"));

  //Label y input de cadena
  let label_cadena = createLabel("cadena", "Inserte el nombre de la cadena:");
  div.appendChild(label_cadena);
  div.appendChild(document.createElement("br"));

  let input_cadena = createInput("text", "cadena", "cadena", "");
  div.appendChild(input_cadena);
  div.appendChild(document.createElement("br"));

  //Label y input de año
  let label_anyo = createLabel("anyo", "Inserte el Año:");
  div.appendChild(label_anyo);
  div.appendChild(document.createElement("br"));

  let input_anyo = createInput("text", "anyo", "anyo", "");
  div.appendChild(input_anyo);
  div.appendChild(document.createElement("br"));

  //Checkbox Terminados
  let label_terminado = createLabel("terminado", "Terminado");
  div.appendChild(label_terminado);

  let input_checkbox = createInput(
    "checkbox",
    "terminado",
    "terminado",
    "true"
  );
  div.appendChild(input_checkbox);
  div.appendChild(document.createElement("br"));

  //Boton Enviar
  let submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");
  submit.setAttribute("onclick", "addSerie()");
  div.appendChild(submit);
  div.appendChild(document.createElement("br"));

  document.body.appendChild(div);

  function createLabel(textFor, text) {
    let label = document.createElement("label");
    label.setAttribute("for", textFor);
    label.textContent = text;
    return label;
  }

  function createInput(typeText, id, name, value) {
    let input = document.createElement("input");
    input.setAttribute("type", typeText);
    input.setAttribute("id", id);
    input.setAttribute("name", name);
    input.setAttribute("value", value);
    return input;
  }
}

function addSerie() {
  let serie = {
    titulo: document.getElementById("titulo").value,
    director: document.getElementById("director").value,
    cadena: document.getElementById("cadena").value,
    anyo: document.getElementById("anyo").value,
    terminada: document.getElementById("terminado").checked,
  };

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  };

  let parametros = JSON.stringify(serie);
  xhr.open("POST", "create_serie.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("objeto=" + parametros);
}

function mostrarDatos() {
  fetch("listar_series.php")
    .then((response) => response.json())
    .then((data) => {
      let tabla =
        "<tr><th>Titulo</th><th>Director</th><th>Cadena</th><th>Anyo</th><th>Terminada</th></tr>";

      for (serie of data) {
        
        tabla += '<tr><td>';
        tabla += serie.titulo;

        tabla += "</td><td>";
        tabla += serie.director;

        tabla += "</td><td>";
        tabla += serie.cadena;

        tabla += "</td><td>";
        tabla += serie.anyo;

        tabla += "</td><td>";
        tabla += serie.terminada;

        tabla += "</td></tr>";
        
      }
      document.getElementById("solucion").innerHTML = tabla;
    })
    .catch((err) => console.log(err));
}





























/*
    let input_bando = document.createElement("select");
    input_bando.setAttribute("id","bando");
    input_bando.setAttribute("name","bando");

    let option1 = document.createElement("option");
    option1.setAttribute("value","1");
    option1.textContent = "Aliado";

    let option2 = document.createElement("option");
    option2.setAttribute("value","2");
    option2.textContent = "Eje";

    input_bando.appendChild(option1);
    input_bando.appendChild(option2);
    form.appendChild(input_bando);
    form.appendChild(document.createElement("br"));
*/

window.onload = inicio;

function inicio() {
  document.getElementById("enviar").addEventListener("click", cargarCatalogo);
}

function cargarCatalogo() {
  let titulo = document.getElementById("titulo").value;
  let director = document.getElementById("director").value;
  let cadena = document.getElementById("cadena").value;
  let anyo = document.getElementById("anyo").value;
  let terminada = document.getElementById("terminada").value;

  let serie = {
    titulo: titulo,
    director: director,
    cadena: cadena,
    anyo: parseInt(anyo),
    terminada: terminada,
  };

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let cadena = JSON.parse(this.responseText);

        document.getElementById("solucion").innerHTML = cadena;
    }
  };
  let parametros = JSON.stringify(serie);
  xhr.open("POST", "create_serie.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("objeto=" + parametros);
}

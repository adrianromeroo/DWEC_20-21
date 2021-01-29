window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", tabla, false);
}

function tabla() {

    //Obtenemos el cuerpo del html
    let body = document.getElementById("body");

    //Barra Horizontal
    let barra = document.createElement("hr");

    //Creamos la tabla
    let tabla = document.createElement("table");

    //Cabecera Tabla
    let thead = document.createElement("thead");

    //Cuerpo Tabla
    let tbody = document.createElement("tbody");

    //Obtenemos las filas y columnas
    let filas = document.getElementById("filas");
    let columnas = document.getElementById("columnas");

    //Obtenemos el Valor por Defecto de las Celdas
    let defecto = document.getElementById("defecto");

    //Obtenemos el Color de la tabla
    let color = document.getElementById("color");
    
    //Obtenemos el grosor de la tabla
    let grosor = document.getElementById("grosor");

    for (let i = 0; i < filas.value; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < columnas.value; j++) {
            let td = document.createElement("td");
            let texto = document.createTextNode(defecto.value);

            td.appendChild(texto);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tabla.appendChild(tbody);
    body.appendChild(tabla);
    
    //Asignamos el borde a la tabla
    tabla.setAttribute("border", grosor.value);
    //Asignamos el color a la tabla
    tabla.setAttribute("borderColor", color.value);

}
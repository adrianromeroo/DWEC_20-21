window.onload = iniciar;

function iniciar() {
    document.getElementById("generarTabla").addEventListener("click",generarTabla, true);
}

function generarTabla(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cargarTabla(xhr);
        }
    };
    xhr.open("GET", "https://covid-vacuna.app/data/latest.json", true);
    xhr.send();
}

function cargarTabla(json) {

    let docJSON = JSON.parse(json.responseText);

    let ccaa;
    let dosisEntregadas;
    let dosisAdministradas;
    let dosisPautaCompletada;
    let porcentajeEntregadas;
    let porcentajePoblacionAdministradas;
    let porcentajePoblacionCompletas;

    let comunidades = new Array();

    for (let dato of docJSON) {
        ccaa = dato.ccaa;
        dosisEntregadas = dato.dosisEntregadas;
        dosisAdministradas = dato.dosisAdministradas;
        dosisPautaCompletada = dato.dosisPautaCompletada;
        porcentajeEntregadas = dato.porcentajeEntregadas;
        porcentajePoblacionAdministradas = dato.porcentajePoblacionAdministradas;
        porcentajePoblacionCompletas = dato.porcentajePoblacionCompletas;
        let comunidad = {
            ccaa: ccaa,
            dosisEntregadas: dosisEntregadas,
            dosisAdministradas: dosisAdministradas,
            dosisPautaCompletada: dosisPautaCompletada,
            porcentajeEntregadas: porcentajeEntregadas,
            porcentajePoblacionAdministradas: porcentajePoblacionAdministradas,
            porcentajePoblacionCompletas: porcentajePoblacionCompletas,
        };
        comunidades.push(comunidad);
    }

    let tabla = "<tr><th>CC.AA</th><th>D.Entregadas:</th><th>D.Administradas</th><th>D.Completa</th><th>P.Entregadas</th><th>P.Administrada</th><th>P.Completa</th></tr>";
    for (let cm of docJSON) {
        tabla += "<tr><td><b>";
        tabla += cm.ccaa;
        tabla += "</b></td><td>";
        tabla += cm.dosisEntregadas;
        tabla += "</td><td>";
        tabla += cm.dosisAdministradas;
        tabla += "</td><td>";
        tabla += cm.dosisPautaCompletada;
        tabla += "</td><td>";
        tabla += cm.porcentajeEntregadas;
        tabla += "</td><td>";
        tabla += cm.porcentajePoblacionAdministradas;
        tabla += "</td><td>";
        tabla += cm.porcentajePoblacionCompletas;
        tabla += "</td></tr>";
        
    }
    document.getElementById("tabla").innerHTML = tabla;

    let xhr = new XMLHttpRequest();
    let parametros = JSON.stringify(comunidades);
    xhr.open("POST", "insertar_comunidades.php", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(parametros); 

    let boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("name", "generarTablaFetch");
    boton.setAttribute("value", "generarTablaFetch");
    boton.setAttribute("onclick","mostrarFetch()")
    document.body.appendChild(boton);

    let crearTabla = document.createElement("table");
    crearTabla.setAttribute("id","tabla2")
    document.body.appendChild(crearTabla);
}

function mostrarFetch(){

    fetch('https://covid-vacuna.app/data/latest.json')
    .then((response) => response.json())
    .then((data) => {

    let ccaa;
    let dosisEntregadas;
    let dosisAdministradas;
    let dosisPautaCompletada;
    let porcentajeEntregadas;
    let porcentajePoblacionAdministradas;
    let porcentajePoblacionCompletas;

    let comunidades = new Array();

    for (let dato of data) {
        ccaa = dato.ccaa;
        dosisEntregadas = dato.dosisEntregadas;
        dosisAdministradas = dato.dosisAdministradas;
        dosisPautaCompletada = dato.dosisPautaCompletada;
        porcentajeEntregadas = dato.porcentajeEntregadas;
        porcentajePoblacionAdministradas = dato.porcentajePoblacionAdministradas;
        porcentajePoblacionCompletas = dato.porcentajePoblacionCompletas;
        let comunidad = {
            ccaa: ccaa,
            dosisEntregadas: dosisEntregadas,
            dosisAdministradas: dosisAdministradas,
            dosisPautaCompletada: dosisPautaCompletada,
            porcentajeEntregadas: porcentajeEntregadas,
            porcentajePoblacionAdministradas: porcentajePoblacionAdministradas,
            porcentajePoblacionCompletas: porcentajePoblacionCompletas,
        };
        comunidades.push(comunidad);
    }

        let tabla = "<tr><th>Comunidad</th><th>D. Entregadas</th><th>D. Admin</th><th>D. Completa</th><th>% Entregadas</th><th>% Pobl. Admin.</th><th>% Pobl. Completa</th></tr>";
        for (dato of data) {
            tabla += "<tr><td>";
            tabla += dato.ccaa;
            tabla += "</td><td>";
            tabla += dato.dosisEntregadas;
            tabla += "</td><td>";
            tabla += dato.dosisAdministradas;
            tabla += '</td><td>';
            tabla += dato.dosisPautaCompletada;
            tabla += "</td><td>";
            tabla += dato.porcentajeEntregadas; 
            tabla += "</td><td>";
            tabla += dato.porcentajePoblacionAdministradas; 
            tabla += "</td><td>";
            tabla += dato.porcentajePoblacionCompletas; 
            tabla += "</td></tr>";  
        }
        document.getElementById("tabla2").innerHTML=tabla;

        fetch('insertar_comunidades.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comunidades)
        })
        .catch((error) => console.log("Error: " + error));


    })    
    .catch((err) => console.log(err));
} 
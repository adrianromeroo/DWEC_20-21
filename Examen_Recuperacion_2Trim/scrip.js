window.onload = iniciar;

function iniciar() {
    document.getElementById("Boton_XMLHttpRequest").addEventListener("click", generarTablaXMLHttpRequest, true);
    document.getElementById("Boton_Fetch").addEventListener("click", generarTablaFetch, true);
    document.getElementById("Boton_XMLHttpRequest_Personajes").addEventListener("click", generarTablaXMLHttpRequest_PJ, true);
}

function generarTablaXMLHttpRequest(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cargar_enviar_tabla_pelicula(xhr);
            console.log("Respuesta de films recibida (XMLHttpRequest)");
            document.getElementById("resultados").innerHTML = "Respuesta de films recibida (XMLHttpRequest)";
        }
    };
    xhr.open("GET", "https://ghibliapi.herokuapp.com/films", true);
    xhr.send();
}

//Recopilamos los datos y los enviamos con XMLHttpRequest
function cargar_enviar_tabla_pelicula(json) {
    let docJSON = JSON.parse(json.responseText);

    let films = new Array();
    let id;
    let title;
    let description;
    let director;
    let producer;
    let release_date;
    let rt_score;
    let url;  

    for (let pelicula of docJSON) {
        id = pelicula.id;
        title = pelicula.title;
        description = pelicula.description;
        director = pelicula.director;
        producer = pelicula.producer;
        release_date = pelicula.release_date;
        rt_score = pelicula.rt_score;
        url = pelicula.url;

        let film = {
            id: id,
            title: title,
            description: description,
            director: director,
            producer: producer,
            release_date: release_date,
            rt_score: rt_score,
            url: url,
        };
        films.push(film);
    }

    let tabla = "<tr><th>Title</th><th>Description</th><th>Director</th><th>Producer</th><th>Release_Date</th><th>RT_Score</th><th>Personajes</th></tr>";
    for (let pelicula of docJSON) {
        tabla += "<tr><td><b>";
        tabla += pelicula.title;
        tabla += "</b></td><td>";
        tabla += pelicula.description;
        tabla += "</td><td>";
        tabla += pelicula.director;
        tabla += "</td><td>";
        tabla += pelicula.producer;
        tabla += "</td><td>";
        tabla += pelicula.release_date;
        tabla += "</td><td>";
        tabla += pelicula.rt_score;
        tabla += "</td><td>";
        tabla += "<button onclick='table_film_people()'> Personajes </button>"
        tabla += "</td><tr>";
    }
    document.getElementById("tabla").innerHTML = tabla;

    let xhr = new XMLHttpRequest();
    let peliculas = JSON.stringify(films);
    xhr.open("POST", "insert_films.php", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(peliculas);
    console.log("Respuesta de insert_films.php recibida");
    document.getElementById("resultados").innerHTML = "Respuesta de insert_films.php recibida";
}




//Recopilamos los datos y los enviamos con Fetch
function generarTablaFetch(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.json())
    .then((data) => {
    console.log("Respuesta de films recibida (Fetch)");
    document.getElementById("resultados").innerHTML = "Respuesta de films recibida (Fetch)";

    let films = new Array();
    let id;
    let title;
    let description;
    let director;
    let producer;
    let release_date;
    let rt_score;
    let url;

    for (let pelicula of data) {
        id = pelicula.id;
        title = pelicula.title;
        description = pelicula.description;
        director = pelicula.director;
        producer = pelicula.producer;
        release_date = pelicula.release_date;
        rt_score = pelicula.rt_score;
        url = pelicula.url;

        let film = {
            id: id,
            title: title,
            description: description,
            director: director,
            producer: producer,
            release_date: release_date,
            rt_score: rt_score,
            url: url,
        };
        films.push(film);
    }

        let tabla = "<tr><th>Title</th><th>Description</th><th>Director</th><th>Producer</th><th>Release_Date</th><th>RT_Score</th><th>Personajes</th></tr>";
        for (let pelicula of data) {
            tabla += "<tr><td><b>";
            tabla += pelicula.title;
            tabla += "</b></td><td>";
            tabla += pelicula.description;
            tabla += "</td><td>";
            tabla += pelicula.director;
            tabla += "</td><td>";
            tabla += pelicula.producer;
            tabla += "</td><td>";
            tabla += pelicula.release_date;
            tabla += "</td><td>";
            tabla += pelicula.rt_score;
            tabla += "</td><td>";
            tabla += "<button onclick='table_film_people()'> Personajes </button>"
            tabla += "</td><tr>";
        }
        document.getElementById("tabla").innerHTML = tabla;

        fetch('insert_films.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(films)
        })
        .catch((error) => console.log("Error: " + error));
        console.log("Respuesta de insert_films.php recibida");
        document.getElementById("resultados").innerHTML = "Respuesta de insert_films.php recibida";

    })    
    .catch((err) => console.log(err));
}





//PARTE 2
function generarTablaXMLHttpRequest_PJ() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cargar_enviar_tabla_personaje(xhr);
            console.log("Respuesta de people recibida");
            document.getElementById("resultados").innerHTML = "Respuesta de people recibida";
        }
    };
    xhr.open("GET", "https://ghibliapi.herokuapp.com/people", true);
    xhr.send();
}

//Recopilamos los datos y los enviamos con XMLHttpRequest
function cargar_enviar_tabla_personaje(json) {

    let docJSON = JSON.parse(json.responseText);

    let people = new Array();
    let id;
    let name;
    let gender;
    let age;
    let eye_color;
    let hair_color;
    let films;

    for (let personaje of docJSON) {
        id = personaje.id;
        name = personaje.name;
        gender = personaje.gender;
        age = personaje.age;
        eye_color = personaje.eye_color;
        hair_color = personaje.hair_color;
        films = personaje.films;

        let pj = {
            id: id,
            name: name,
            gender: gender,
            age: age,
            eye_color: eye_color,
            hair_color: hair_color,
            films: films,
        };
        people.push(pj);
    }
    //
    let xhr = new XMLHttpRequest();
    let Personajes = JSON.stringify(people);
    xhr.open("POST", "insert_people.php", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(Personajes);
    console.log("Respuesta de insert_people.php recibida");
    document.getElementById("resultados").innerHTML = "Respuesta de insert_people.php recibida";
}







function table_film_people() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      cargar_tabla_film_people(xhr);
    }
  };
  xhr.open("GET", "https://ghibliapi.herokuapp.com/films", true);
  xhr.send();
}

//Recopilamos los datos y los enviamos con XMLHttpRequest
function cargar_tabla_film_people(json) {
  let docJSON = JSON.parse(json.responseText);

  let films = new Array();
  let id;

  for (let pelicula of docJSON) {
    id = pelicula.id;

    let film = {
      id: id,
    };
    films.push(film);
  }

  let tabla =
    "<tr><th>Id_Pelicula</th><th>Personajes</th></tr>";
  for (let pelicula of docJSON) {
    tabla += "<tr><td><b>";
    tabla += pelicula.id;
    tabla += "</b></td><td>";
    tabla += pelicula.Personajes;
    tabla += "</td><td>";
    tabla += "</td><tr>";
  }

  //Crear tabla dinamicamente y monstrar los datos
  let tablaDinamica = document.createElement("table");
  tablaDinamica.setAttribute("id","tablaDinamica")
  document.body.appendChild(tablaDinamica);
  document.getElementById("tablaDinamica").innerHTML = tabla;

  let xhr = new XMLHttpRequest();
  let peliculas = JSON.stringify(films);
  xhr.open("POST", "people_by_film.php", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(peliculas);
  document.getElementById("resultados").innerHTML = "Respuesta de insert_films.php recibida";
}




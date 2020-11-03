//Elegir Formato De Fecha
let formato = prompt(
  "Introduzca el número del formato deseado: " +
    "\n 1: 15/10/2020" +
    "\n 2: Jueves, 15 de octubre de 2020" +
    "\n 3: Thursday, October 15, 2020"
);

//Parsear La Fecha Para Que Funcione El Switch
formato = parseInt(formato);

//Variable COn Fecha Actual
let fecha = new Date();

let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

//Switch Para Dar Formato
switch (formato) {
    case 1:
        alert(fecha.toLocaleDateString());
        break;

    case 2:
        alert(fecha.toLocaleDateString("es-ES", options));
        break;

    case 3:
        alert(fecha.toLocaleDateString("en-US", options));
        break;

    default:
      alert("Valor erroneo");
      break;
}

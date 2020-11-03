//Elegir Formato De La Hora
let formato = prompt(
  "Introduzca el número del formato deseado: " +
    "\n 1: 14:35:07" +
    "\n 2: 02:35 PM o 02:35:07 AM"
);

//Parsear La Fecha Para Que Funcione El Switch
formato = parseInt(formato);

//Variable COn Fecha Actual
let date = new Date();

switch (formato) {
    case 1:
        alert(date.toLocaleTimeString());
        break;

    case 2:
        alert(date.toLocaleTimeString("en-US"));
        break;

    default:
      alert("Valor erroneo");
      break;
}

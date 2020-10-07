var dias = prompt("Introduzca un día de la semana:");

dias = dias.toLowerCase();

switch (dias) {
    case "lunes":
        console.log("Mañana será martes");
        break;
    case "martes":
        console.log("Mañana será miércoles");
        break;
    case "miercoles":
        console.log("Mañana será jueves");
        break;
    case "jueves":
        console.log("Mañana será viernes");
        break;
    case "viernes":
        console.log("Mañana será sábado");
        break;
    case "sabado":
        console.log("Mañana será domingo");
        break;
    case "domingo":
        console.log("Mañana será lunes");
        break;
    default:
        console.log("Introduzca un día de la semana válido");
        break;
}
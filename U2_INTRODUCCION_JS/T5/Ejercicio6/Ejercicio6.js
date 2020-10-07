var dias = prompt("Introduzca un día de la semana:");

switch (dias) {
    case "lunes":
        console.log("Mañana será martes");
        break;
    case "martes":
        console.log("Mañana será miércoles");
        break;
    case "miércoles":
        console.log("Mañana será jueves");
        break;
    case "jueves":
        console.log("Mañana será viernes");
        break;
    case "viernes":
        console.log("Mañana será sábado");
        break;
    case "sábado":
        console.log("Mañana será domingo");
        break;
    case "domingo":
        console.log("Mañana será lunes");
        break;
    default:
        console.log("Introduzca un día de la semana válido");
        break;
}
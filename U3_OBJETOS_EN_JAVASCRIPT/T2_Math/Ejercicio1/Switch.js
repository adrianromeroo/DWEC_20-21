let num = prompt(
  "Introduzca: 1 -> Potencia" +
    "\nIntroduzca: 2 -> Raíz" +
    "\nIntroduzca: 3 -> Redondeo" +
    "\nIntroduzca: 4 -> Trigonometria"
);

num = parseInt(num);

switch (num) {
  case 1:
    let base = prompt("Introduzca la base: ");
    let exponente = prompt("Introduzca un exponente para la base: ");

    alert(
      "La potencia de " +
        base +
        " elevado a " +
        exponente +
        " es: " +
        Math.pow(base, exponente)
    );
    break;

  case 2:
    let numero_positivo = prompt("Introduzca un numero no negativo: ");

    if (numero_positivo >= 0) {
      alert(
        "La raíz de: " + numero_positivo + " es: " + Math.sqrt(numero_positivo)
      );
      break;
    } else {
      alert("Introduzca un valor válido");
      break;
    }

  case 3:
    let num_decimal = prompt("Introduzca un numero decimal: ")

    alert("El número: " + num_decimal + " redondeado a la alta es: " + Math.round(num_decimal));
    alert("El número: " + num_decimal + " redondeado a la baja es: " + Math.floor(num_decimal));
    break;

  case 4:
    let angulo = prompt("Introduzca un angúlo entre 0 y 360: ")

    if (angulo >= 0 && angulo <= 360) {
        alert("Seno = " + Math.sin(angulo) + "\nCoseno = " + Math.cos(angulo) + "\nTangente = " + Math.tan(angulo));
        break;
    } else {
        alert("Introduzca un valor válido")
        break;
    }

  default:
    alert("Valor erroneo");
    break;
}

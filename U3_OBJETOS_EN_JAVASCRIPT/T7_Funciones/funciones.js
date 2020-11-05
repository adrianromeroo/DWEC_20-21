function calcularIMC() {
  var estatura = document.getElementById("estatura").value;
  var peso = document.getElementById("peso").value;
  let imc = peso / (estatura * estatura);
  document.write("El IMC es: " + imc);
}

function calcularFMC() {
  var edad = document.getElementById("edad").value;
  let fmc = 220 - edad;
  document.write("El FMC es: " + fmc);
}

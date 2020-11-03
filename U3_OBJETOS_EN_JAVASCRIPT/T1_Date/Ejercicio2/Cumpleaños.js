let dia = prompt("Introduce el dia de tu cumpleaños:");
let mes = prompt("Introduce el mes de tu cumpleaños(Formato número):");

let i = new Date().getFullYear();

while (i != 2100) {
  let diaSemana = new Date(i, mes - 1, dia).getDay();

  if (diaSemana === 0) {
    document.write(i + ", ");
  }

  i++;
}

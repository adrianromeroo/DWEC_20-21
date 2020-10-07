var numero = 0;

while (numero < 2 || numero > 10) {
    numero = prompt("Introduce un número entre el 2 y el 10: ");
}

numero = numero * 1;

console.log("MULTIPLICAR");

for (var i = 1; i <= 10; i++) {
    console.log(numero + " * " + i + " = " + (numero*i));
}

console.log("SUMAR");

var i = 1;
do {
    console.log(numero + " + " + i + " = " + (numero+i));
    i++;
} while (i <= 10);

console.log("DIVIDIR");

var i = 1;
while (i <= 10) {
    console.log(numero + " / " + i + " = " + (numero/i));
    i++;
}
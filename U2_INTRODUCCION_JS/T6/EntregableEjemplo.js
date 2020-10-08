var aleatorio = Math.random() * (1 - 100 + 1);
var numero_introducido;
var intentos = 0;

do {
    numero_introducido = prompt("¿En que número estoy pensando?");
} while (isNaN(numero_introducido));

if (numero_introducido == aleatorio) {
    console.log("Felicidades Acertaste")
} else if (numero_introducido > aleatorio) {
    console.log("El número introducido es mayor")
} else if (numero_introducido < aleatorio) {
    console.log("El número introducido es menor")
}
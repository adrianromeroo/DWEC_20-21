let num_entero = prompt("Introduzca un numero entero: ")

//Conversion para utilizar los métodos del objeto Number
num_entero = Number(num_entero);

document.write("Valor exponencial: " + num_entero.toExponential() + "<br>");

document.write("El numero con 4 decimales: " + num_entero.toFixed(4) + "<br>");

document.write("Binario: " + num_entero.toString(2) + "<br>" );

document.write("Octal: " + num_entero.toString(8) + "<br>");

document.write("Hexadecimal: " + num_entero.toString(16) + "<br>");
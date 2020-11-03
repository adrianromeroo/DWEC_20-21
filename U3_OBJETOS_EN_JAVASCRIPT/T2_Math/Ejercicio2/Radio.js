let radio = prompt("Introduzca el radio: ")
let pi = Math.PI;

//RADIO
document.write("El radio es: " + radio + "<br>")

//DIAMETRO
document.write("El diámetro: " + radio * 2 + "<br>")

//PERIMETRO DE LA CIRCUNFERENCIA
document.write("El perimetro de la circunferencia es: " + 2 * pi * radio + "<br>");

//ÁREA DEL CIRCULO
document.write("El área del circulo es: " + pi * (radio * radio) + "<br>");

//ÁREA DE LA ESFERA
document.write("El área de la esfera es: " + 4 * pi * radio * radio + "<br>");

//VOLUMEN DE LA ESFERA
document.write("El volumen de la esfera es: " + (4/3) * pi * (radio * radio * radio));
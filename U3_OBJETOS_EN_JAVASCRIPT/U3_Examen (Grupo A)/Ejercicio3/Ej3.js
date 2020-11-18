var texto = prompt("Introduzca los siguientes datos con su respectivo estilo: tipo_producto|modelo|cantidad@cz")

var texto_separado = texto.split("|");
var texto_separado2 = texto_separado[2].split("@");

document.write(texto_separado[0] + "<br>");
document.write(texto_separado[1] + "<br>");
document.write(texto_separado2[0] + "<br>");
document.write(texto_separado2[1] + "<br>");

//Comprobador Propiedades Del Tipo De Producto
if (texto_separado[0] != "televisor" && texto_separado[0] != "tablet" && texto_separado[0] != "smartphone" && texto_separado[0] != "laptop") {
    document.write("Ha Introducido un tipo de producto incorrecto <br>")

} else {
    document.write(texto_separado[0] + "<br>");
}

//Comprobador Propiedades De La Cantidad
//if (texto_separado2.isInteger(numero_entero)) {
//   document.write(texto_separado2[0] + "<br>")
//} else {
//    document.write("Ha Introducido una cantidad incorrecta <br>")
//}

//Comprobador Propiedades De La Zona
if (texto_separado2[1] != "HU" && texto_separado2[1] != "CA" && texto_separado2[1] != "SE") {
    document.write("Ha Introducido una zona incorrecta <br>")
} else {
    document.write(texto_separado2[1] + "<br>")
}

//televisor, tablet, smartphone, laptop
//tipo_producto|modelo|cantidad@cz
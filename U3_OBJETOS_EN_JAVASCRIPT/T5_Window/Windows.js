let ventana;

function nuevaVentana(){

    let respuesta = confirm("¿Quieres abrir una ventana?");
    
    if(respuesta){
        ventana = open("","","height=80,width=200,location=no,toolbar=no,menubar=no,resizable=no,left=500,top=500");
        ventana.document.write("<h1>Ventana</h1>");
        ventana.document.write('<input type="button" value="Cerrar ventana" onclick="self.close()">');
    }

}

function cerrarVentana() {
    if (!ventana.closed) {
        ventana.close();
    } else {
        alert("La ventana ya está cerrada");
    }
    
}

//Mueve la ventana 10 píxeles a la derecha y abajo
function moverVentana(){
    ventana.moveBy(10,10);
}

//Mueve la ventana a la posicion 100, 100
function moverVentana2(){
    ventana.moveTo(100,100);
}

//Aumenta el tamaño 10 píxeles de ancho y largo
function aumentarTamano(){
    ventana.resizeBy(10,10);
}

//Aumenta el tamaño de la ventana a 400x200
function aumentarTamano2(){
    ventana.resizeTo(400,200);
}

//Colocar el scroll de la ventana arriba del todo
function scrollArriba(){
    ventana.scrollTo(0,0);
}

//Colocar el scroll de la ventana a 10 píxeles de la parte superior
function scrollArriba2() {
    ventana.scrollTo(0,10);
}
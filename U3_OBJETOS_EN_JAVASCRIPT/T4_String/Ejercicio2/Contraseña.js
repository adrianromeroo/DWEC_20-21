//Variables
let tamano = false;
let mayuscula = false;
let minuscula = false;
let numero = false;
let value = false;

    //Variable de la propuesta de contraseña
    let password = prompt("Introduzca una propuesta de contraseña: ");

    //Comprobar Longitud
    if (password.length >= 8 || password.length <= 16){
        tamano = true;
    } else {
        document.write("La contraseña debe contener enter 8 y 16 carácteres <br>");
        tamano = false;
    }

    //Contiene Mayúscula
    for (let i = 0; i < password.length; i++) {
        if(password.charAt(i).toUpperCase() === password.charAt(i)) {
            mayuscula = true;
            break;
        } else {
            mayuscula = false;
        }
    }
    
    if (mayuscula == false) {
        document.write("La contraseña debe contener una letra mayúscula <br>");
    }
    
    //Contiene Minúscula
    for (let i = 0; i < password.length; i++) {
        if(password.charAt(i).toLowerCase() === password.charAt(i)) {
            minuscula = true;
            break;
        } else {
            minuscula = false;
        }
    }

    if (minuscula == false) {
        document.write("La contraseña debe contener una letra al menos en minúsculas <br>");
    }

    //Contiene Número
    for (let i = 0; i < password.length; i++) {
        if(!isNaN(password.charAt(i))) {
            numero = true;
            break;
        }
    }

    if (numero == false) {
        document.write("La contraseña debe contener un número <br>");
    }

    //Contiene un valor de los anteriores
    let specialValues = "-_@#$%&";

    for (let i = 0; i < password.length;i++) {
        for(let j = 0; j < specialValues.length;j++) {
            if(password.charAt(i)==specialValues.charAt(j)) {
                value = true;
                break;
            }
        }
        if (value) {
            break;
        }
    }

    if(value == false) {
        document.write("La contraseña debe contener algun caracter especial: - _ @ # $ % &<br>");
    }

    if (tamano == true && mayuscula == true && minuscula == true && numero == true && value == true) {
        document.write("Contraseña segura <br>");
    } else {
        document.write("Contraseña no segura <br>");
    }

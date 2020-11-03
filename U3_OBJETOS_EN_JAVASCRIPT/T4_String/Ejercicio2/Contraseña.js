let password;

let securePassword = false;
let tamano = false;
let mayuscula = false;
let minuscula = false;
let numero = false;
let value = false;

while(!securePassword) {
    password = prompt("Introduce una propuesta de contraseña: ");

    //Tamaño
    if (password.length<8 || password.length>16){
        document.write("La contraseña debe contener enter 8 y 16 carácteres. <br>");
        tamano = false;
    } else {
        tamano = true;
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
    
    if (!mayuscula) {
        document.write("La contraseña debe contener una letra al menos en mayúsculas.<br>");
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

    if (!minuscula) {
        document.write("La contraseña debe contener una letra al menos en minúsculas.<br>");
    }

    //Contiene Número
    for (let i = 0; i < password.length; i++) {
        if(!isNaN(password.charAt(i))) {
            numero = true;
            break;
        }
    }

    if (!numero) {
        document.write("La contraseña debe contener al menus un número.<br>");
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

    if(!value) {
        document.write("La contraseña debe contener al menos alguno de los siguientes valores: - _ @ # $ % &<br>");
    }

    if (tamano && mayuscula && minuscula && numero && value) {
        securePassword = true;
        document.write("Contraseña segura.<br>");
    } else {
        securePassword = false;
        document.write("Contraseña no segura.<br>----------------------------------------------<br>");
    }
}
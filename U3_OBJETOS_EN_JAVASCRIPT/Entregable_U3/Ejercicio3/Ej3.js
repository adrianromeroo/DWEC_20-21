function Vuelo() {
    this.codigo = "";
    this.hora_llegada = "";
    this.hora_salida = "";

    this.setCodigo = function(codigo) {
        this.codigo = codigo;
    }

    this.setHoraLLegada = function(hora_llegada) {
        this.hora_llegada = hora_llegada;
    }

    this.setHoraSalida = function(hora_salida) {
        this.hora_salida = hora_salida;
    }

    this.comprobarHora = function() {
        if(this.hora_salida < this.hora_llegada) {
            alert("True")
        } else {
            alert("False")
        }
    }
}

function Aeropuerto() {
    this.nombre = "";
    this.ciudad = "";
    this.numero_vuelos = [];

    this.getVuelos = function() {
        return this.numero_vuelos;
    }

    this.setNombre = function(nombre) {
        this.nombre = nombre;
    }

    this.setCiudad = function(ciudad) {
        this.ciudad = ciudad;
    }
}

let aeropuerto = new Aeropuerto();

for (let i = 0; i < 10; i++) {
    
}
function Bandeja() {
    this.tipo_pastel = "";
    this.variedad_pastel = "";
    this.cantidad = "";
    this.hora_elaborazion = "";
    this.hora_venta_ultimo = "";

    this.propiedades = function(tipo_pastel, variedad_pastel, cantidad, hora_elaborazion, hora_venta_ultimo) {
        this.tipo_pastel = tipo_pastel;
        this.variedad_pastel = variedad_pastel;
        this.cantidad = cantidad;
        this.hora_elaborazion = hora_elaborazion;
        this.hora_venta_ultimo = hora_venta_ultimo;
    }

    this.tiempo_venta = function(hora_elaborazion, hora_venta_ultimo) {

    }

    this.restar = function(cantidad) {

    }

    this.toString = function() {

    }

    console.log(Bandeja);

}

function LaPlata() {
    this.mostrador = [];

    this.poner_en_mostrador = function () {

    }

    this.vender_pastel = function {
        
    }

}
    
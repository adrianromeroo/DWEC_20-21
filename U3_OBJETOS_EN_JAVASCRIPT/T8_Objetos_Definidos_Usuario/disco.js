//"Constructor" Sin Parámetros
function Disco() {
    this.nombre_disco = "";
    this.cantante = "";
    this.ano_publicacion = "";
    this.tipo = "";
    this.localizacion = 0;
    this.prestado = false;

    //Método Para Asignar Valor A Las Propiedades
    this.datos_disco = function(nombre_disco, cantante, ano_publicacion, tipo, localizacion) {
        this.nombre_disco = nombre_disco;
        this.cantante = cantante;
        this.ano_publicacion = ano_publicacion,
        this.tipo = tipo;
        this.localizacion = localizacion;
    }

    //Método Cambiar Número Localizacion
    this.setLocalizacion = function(localizacion) {
        this.localizacion = localizacion
    }

    //Método Cambiar Valor de la propiedad Prestado
    this.setPrestado = function(prestado) {
        this.prestado = prestado
    }

    //Método Para Mostrar Toda La Informacion Del Disco
    this.print = function() {
        alert(this.nombre_disco + "\n" + this.cantante + "\n"
        + this.ano_publicacion + "\n" + this.tipo + "\n" + this.localizacion + "\n" + this.prestado)
    }

}

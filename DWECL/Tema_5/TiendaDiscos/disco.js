class Disco {
    constructor() {
        this.nombre = "";
        this.grupo = "";
        this.anio = "";
        this.tipo = "";
        this.localizacion = 0;
        this.prestado = false;
    }

    setDatos(nombre, grupo, anio, tipo, localizacion) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.anio = anio;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = false;
    }

    mostrarInfo() {
        return `🎵 ${this.nombre} | ${this.grupo} | ${this.anio} | ${this.tipo} | Estantería: ${this.localizacion} | Prestado: ${this.prestado ? "Sí" : "No"}`;
    }
}

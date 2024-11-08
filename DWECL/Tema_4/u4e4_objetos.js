function Disco() {
    this.nombre = "";
    this.autor = "";
    this.anio = "";
    this.genero = "";
    this.localizacion = 0;
    this.prestado = false;


    this.infoDisco = function (nombre, autor, anio, genero, localizacion) {
    this.nombre = nombre;
    this.autor = autor;
    this.anio = anio;
    this.genero = genero;
    this.localizacion = localizacion;
    this.prestado = false;
    }

    this.cambioEstanteria = function (nuevaLoc) {
        this.localizacion = nuevaLoc;
    }

    this.setPrestado = function (nuevoEstado) {
        this.prestado = nuevoEstado;
    }

    this.toString = function () {
        return `Nombre: ${this.nombre}<br>
Autor: ${this.autor}<br>
Genero: ${this.genero}<br>
Localizacion: ${this.localizacion}<br>
Prestado: ${this.prestado}<br>`;
    }
}

let disco1 = new Disco();
disco1.infoDisco("Thriller", "Michael Jackson", 1982, "Pop", "Estantería A3");
let disco2 = new Disco();
disco2.infoDisco("Back in Black", "AC/DC", 1980, "Rock", "Estantería B1");
let disco3 = new Disco();
disco3.infoDisco("The Dark Side of the Moon", "Pink Floyd", 1973, "Rock Progresivo", "Estantería C4");
let disco4 = new Disco();
disco4.infoDisco("Abbey Road", "The Beatles", 1969, "Rock", "Estantería D2");
let disco5 = new Disco();
disco5.infoDisco("Rumours", "Fleetwood Mac", 1977, "Rock", "Estantería A1");
let disco6 = new Disco();
disco6.infoDisco("Nevermind", "Nirvana", 1991, "Grunge", "Estantería B3");
let disco7 = new Disco();
disco7.infoDisco("Hotel California", "Eagles", 1976, "Rock", "Estantería C1");
let disco8 = new Disco();
disco8.infoDisco("The Wall", "Pink Floyd", 1979, "Rock Progresivo", "Estantería D3");
let disco9 = new Disco();
disco9.infoDisco("Led Zeppelin IV", "Led Zeppelin", 1971, "Rock", "Estantería A2");
let disco10 = new Disco();
disco10.infoDisco("Born to Run", "Bruce Springsteen", 1975, "Rock", "Estantería B2");

let discos = new Array(disco1, disco2, disco3, disco4, disco5, disco6, disco7, disco8, disco9, disco10);



let mostrar = document.getElementById("disco");
let boton = document.getElementById("mostrarDisco");

boton.onclick = function () {
    mostrar.innerHTML = discos[0].toString();
}



let menu = `-- MENU --
1 - Mostrar número de discos
2 - Mostrar listado de discos
3 - Mostrar un intervalo de discos
4 - Añadir un disco
5 - Borrar un disco
6 - Consultar un disco
0 - Salir
`;
do {
    
} while (condition);
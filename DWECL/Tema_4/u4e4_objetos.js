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


do {
    let menu = parseInt(prompt(`-- MENU --
        1 - Mostrar número de discos
        2 - Mostrar listado de discos
        3 - Mostrar un intervalo de discos
        4 - Añadir un disco
        5 - Borrar un disco
        6 - Consultar un disco
        0 - Salir
        `));

    switch (menu) {
        case 1:
            document.write("Número de discos: " + discos.length);
            break;
        case 2:
            do {
                let menuListado = parseInt(prompt(`--- LISTADOS ---
                    1 - En orden
                    2 - Del revés
                    3 - En orden alfabético
                    0 - Salir`));

                switch (menuListado) {
                    case 1:
                        for (const disco of discos) {
                            document.write(disco.toString());
                            document.write("---<br>");
                        }
                        break;
                    case 2:
                        for (let i = discos.length - 1; i >= 0; i--) {
                            document.write(discos[i].toString() + "<br>");
                        }
                        break;
                    case 3:
                        let discosCopia = discos;
                        discosCopia.sort();
                        for (const disco of discosCopia) {
                            document.write(disco.toString());
                            document.write("---<br>");
                        }
                        break;
                    default:
                        document.write("Ha insertado un número erróneo. Pruebe de nuevo.")
                        break;
                }
            } while (menuListado != 0);
            break;
        case 3:
            alert("Introduzca a continuación los valores del intervalo:");
            let inicio = parseInt(prompt("Valor de inicio (no puede ser menor de 0):"));
            let final = parseInt(prompt("Valor final (no puede ser mayor de " + discos.length + "):"));

            for (let i = inicio + 1; i < final; i++) {
                document.write(discos[i].toString());
            }
            break;
        case 4:
            do {
                let anadirMenu = parseInt(prompt(`¿Dónde quiere añadir el disco?
                    1 - Al principio
                    2 - Al final
                    0 - No añadir`));
                    
                alert("Inserte los datos a continuación");
                let nombre = prompt("Nombre:");
                let autor = prompt("Autor:");
                let genero = prompt("Género:");
                let anio = parseInt(prompt("Año:"));
                let local = prompt("Localización:");

                let newDisco = new Disco();
                newDisco.infoDisco(nombre, autor,anio, genero, local);
                document.write(newDisco.toString());

                switch (anadirMenu) {
                    case 1:
                        discos.unshift("hola");
                        break;
                    case 2:
                        discos.push(newDisco);
                        break;
                    default:
                        break;
                }
            } while (anadirMenu != 0);
            break;
        case 5:
            do {
                let borrarMenu = parseInt(prompt(`¿Dónde quiere borrar el disco?
                    1 - Al principio
                    2 - Al final
                    0 - No borrar`));

                switch (borrarMenu) {
                    case 1:
                        discos.shift();
                        break;
                    case 2:
                        discos.pop();
                        break;
                    default:
                        break;
                }
            } while (borrarMenu != 0);
            break;
        case 6:
            do {
                let buscarMenu = parseInt(prompt(`¿Cómo quiere consultar el disco?
                    1 - Por posición
                    2 - Por nombre
                    0 - Salir`));

                switch (buscarMenu) {
                    case 1:
                        let posDisco = parseInt(prompt("Introduce la posición (entre 0 y " + (discos.length - 1) + "):"));
                        document.write(discos[posDisco]);
                        break;
                    case 2:
                        let nombreDisco = prompt("introduce el nombre:");
                        let resultados = discos.filter(disco => disco.nombre == nombreDisco);
                        document.write(resultados);
                        break;
                    default:
                        break;
                }
            } while (borrarMenu != 0);
            break;
        default:
            break;
    }
} while (menu != 0);
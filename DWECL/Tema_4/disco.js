// Definir una clase Disco
class Disco {
    constructor(nombre, autor, genero, localizacion, prestado) {
        this.nombre = nombre;
        this.autor = autor;
        this.genero = genero;
        this.localizacion = localizacion;
        this.prestado = prestado;
    }

    // Método toString para convertir el objeto a cadena
    toString() {
        return `Nombre: ${this.nombre}
Autor: ${this.autor}
Género: ${this.genero}
Localización: ${this.localizacion}
Prestado: ${this.prestado}`;
    }
}

// Crear instancias de la clase Disco
let disco1 = new Disco("Album A", "Autor A", "Rock", "Estante 1", "No");
let disco2 = new Disco("Album B", "Autor B", "Pop", "Estante 2", "Sí");
let disco3 = new Disco("Album C", "Autor C", "Jazz", "Estante 3", "No");

// Crear un array con los discos
let discos = [disco1, disco2, disco3];

// Seleccionar el botón y el elemento donde se mostrará el disco
let mostrar = document.getElementById("disco");
let boton = document.getElementById("mostrarDisco");

// Agregar el evento click al botón
boton.onclick = function() {
    mostrar.innerHTML = discos[0].toString(); // Cambia el índice para otros discos
};

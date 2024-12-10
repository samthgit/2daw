/*
clase usuario con sus correspondientes propiedades
*/
class Usuario {
    constructor (nombre, DNI) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.listaLib = [];
        this.penalAcum = 0;
    }
}

/*
clase libro con sus propiedades
*/
class Libro {
    constructor (titulo, autor, anioPub, ISBN, prestamo) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPub = anioPub;
        this.ISBN = ISBN;
        this.estado = "disponible";
        this.prestamo = prestamo;
        this.fechaPrest = null;
        this.usuarioPrest = null;
    }

    /*
    Un toString simple para mostrar la información del libro
    */
    infoLibro () {
    console.log(`INFO LIBRO
Titulo: ${this.titulo}
Autor: ${this.autor}
Anio Publicacion: ${this.anioPub}
ISBN: ${this.ISBN}
Estado: ${this.estado}
Prestamo Maximo: ${this.prestamo}
`);
    }
}
/*
clase biblioteca con sus propiedades
*/
class Biblioteca {
    constructor () {
        this.usuarios = [];
        this.libros = [];
        this.tarifaPen = 0.25;
    }

    /*
    el metodo agregar usuario: busca el DNI del usuario metidos por parametros
    y lo compara con el DNI de todos aquellos que se encuentran en el array.
    Si coincide se muestra un mensaje de error, en caso contrario se añade a la lista.
    */
    agregarUsuario (usuario) {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].DNI === usuario.DNI) {
                document.write("El usuario ya existe.");
                return;
            }
        }
        this.usuarios.push(usuario);
    }

    /*
    Mismo procedimiento que con los usuarios pero buscando por ISBN.
    Si coincide se muestra el mensaje de error, si no se añade al array de libros. 
    */
    agregarLibro (libro) {
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].ISBN === libro.ISBN) {
                document.write("El libro ya existe.");
                return;
            }
        }
        this.libros.push(libro);
    }

    /*
    Método para tomar un libro de la biblioteca.
    Primero hacemos validaciones para verificar que el libro y el usuario existan.
    */
    tomarLibro (usuario, libro) {
        let libDisp = null;
        let usuarioExiste = false;
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].ISBN === libro.ISBN) {
                libDisp = this.libros[i];
            }
        }
        
        if (libDisp == null) {
            console.log("El libro no existe.");
            return;
        }
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].DNI === usuario.DNI) {
                usuarioExiste = true;
            }
        }

        if (usuarioExiste) {
            /*
            Una vez verificado procedemos a modificar el libro
            */
            if (libDisp.estado == "disponible") {
                libDisp.estado = "prestado";
                libDisp.fechaPrest = new Date();
                usuario.listaLib.push(libDisp);
                libDisp.usuarioPrest = usuario.nombre;
            } else {
                console.log("El libro no esta disponible");
            }
        } else {
            console.log("El usuario no existe");
        }
    }

    /*
    Un método para parsear la fecha y no hacer que el usuario escriba el tipo Date
    Se sugeriría que lo escribiera XXXX/XX/XX
    */
    parseoFecha(fecha) {
        let fechaArray = fecha.split("/");
        let fechaParse = new Date(fechaArray[0], fechaArray[1] - 1, fechaArray[2]);
        return fechaParse;
    }

    /*
    Método para devolver el libro. Aqui ademas del usuario y el libro se pasará
    la fecha a la que ha sido devuelto el libro.
    */
    devolverLibro (usuario, libro, fecha) {
        let libDisp = null;
        let usuarioExiste = false;
        //usamos el metodo anterior para parsear la fecha
        let fechaDev = this.parseoFecha(fecha);

        /*
        Hacemos las validaciones pertinentes, igual que en el método
        de tomarLibro()
        */
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].ISBN === libro.ISBN) {
                libDisp = this.libros[i];
            }
        }
        
        if (libDisp == null) {
            console.log("El libro no existe.");
            return;
        }
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].DNI === usuario.DNI) {
                usuarioExiste = true;
            }
        }
        
        if (usuarioExiste) {
            /*
            Una vez validado modificaremos el libro
            Aqui se han creado varias variables simplemente para
            hacer que la operación entre fechas fuera al mismo nivel
            */
            if (libDisp.estado == "prestado") {
                libDisp.estado = "disponible";
                let anio = libDisp.fechaPrest.getFullYear();
                let mes = libDisp.fechaPrest.getMonth();
                let dia = libDisp.fechaPrest.getDay();
                let fechaPrestamo = new Date(anio, mes, dia);
                let dif = fechaDev - fechaPrestamo;
                dif = dif/1000/60/60/24;
                if (dif >= 1) {
                    usuario.penalAcum += dif*this.tarifaPen;
                }
                libDisp.fechaPrest = null;
                libDisp.usuarioPrest = null;
            } else {
                console.log("El libro no estaba prestado");
            }
        } else {
            console.log("El usuario no existe");
        }
    }

    /*
    Un método que nos devolverá el estado de libro verificando el isbn,
    el cual le pasaremos por parámetros.
    */
    consultarPorISBN (isbn) {
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].ISBN === isbn) {
                console.log("El libro está registrado.");
                if (this.libros[i].estado == "disponible") {
                    console.log("El libro esa disponible");
                } else if (this.libros[i].estado == "prestado") {
                    console.log("El libro ha sido tomado por " + this.libros[i].usuarioPrest);
                } 
            }
        }

    }

    /*
    Muestra la lista de libros disponibles, es decir aquellos con la
    propiedad estado en "disponible".
    */
    listaLibrosDisp () {
        for (let i = 0; i < this.libros.length; i++) {
            if(this.libros[i].estado == "disponible") {
                this.libros[i].infoLibro();
            }
        }
    }

    /*
    En este método le pasamos un isbn y el nuevo prestamo
    Una vez verificado que el isbn existe, actualizamos el prestamo.
    */
    actualizarPrestamo (isbn, nuevoPrest) {
        let libroAct = null;
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].ISBN === isbn) {
                libroAct = this.libros[i];
            }
        }
        if (libroAct == null) {
            console.log("El ISBN no existe");
            return;
        }

        libroAct.prestamo = nuevoPrest;
    }
}

let biblMunicipal = new Biblioteca(); 
let libro1 = new Libro("1984", "George Orwell", 1948, 569812, 30);
let libro2 = new Libro("El Mago de Oz", "Frank L. Baum", 1900, 128967, 45);
let usuario1 = new Usuario("Pepe", "12345678L");
// EJERCICIO 1
biblMunicipal.agregarLibro(libro1);
biblMunicipal.agregarLibro(libro2);
biblMunicipal.agregarUsuario(usuario1);
// EJERCICIO 2
biblMunicipal.tomarLibro(usuario1, libro1);
biblMunicipal.tomarLibro(usuario1, libro2);
// EJERCICIO 3
biblMunicipal.devolverLibro(usuario1, libro2, "2024/12/10");
// EJERCICIO 4
biblMunicipal.consultarPorISBN(569812);
// EJERCICIO 6
biblMunicipal.listaLibrosDisp();
// EJERCICIO 7
biblMunicipal.actualizarPrestamo(12896, 50);
biblMunicipal.listaLibrosDisp();
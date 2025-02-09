class Usuario {
    /*
    Constructor de la clase Usuario
    */
    constructor(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
        this.cajasAlmacenadas = [];
    }
    /*
    Método para agregar una caja al usuario haciendo uso de la clase Caja
    */
    agregarCaja(idCaja, peso) {
        this.cajasAlmacenadas.push(new Caja(idCaja, peso));
    }
}

class Caja {
    /*
    Constructor de la clase Caja, la cual inicializa los atributos idCaja y peso
    y deja null los atributos horaEntrada y horaSalida, que se inicializarán con
    métodos aparte para mayor flexibilidad
    */
    constructor(idCaja, peso) {
        this.idCaja = idCaja;
        this.peso = peso;
        this.horaEntrada = null;
        this.horaSalida = null;
    }

    /*
    Métodos para registrar la hora de entrada y de salida de la caja
    */
    registrarEntrada() {
        this.horaEntrada = new Date();
    }

    registrarSalida() {
        this.horaSalida = new Date();
    }
}

class Trastero {
    /*
    Constructor de la clase Trastero, la cual inicializa los atributos usuarios y cajas en trastero
    como dos arrays vacíos. Los cuales almacenarán usuarios y cajas por separado. Además, hacemos que 
    reciba por parámetros la capacidad del trastero, la tarifa base por hora y la tarifa por kg.
    */
    constructor(capacidad, tarifaBasePorHora, tarifaPorKg) {
        this.usuarios = [];
        this.cajasEnTrastero = [];
        this.capacidad = capacidad;
        this.tarifaBasePorHora = tarifaBasePorHora;
        this.tarifaPorKg = tarifaPorKg;
    }

    /*
    Método para registrar un usuario en el trastero, el cual recibe por parámetros el nombre y el dni
    y crea un objeto de la clase Usuario con esos datos y lo añade al array de usuarios.
    */
    registrarUsuario(nombre, dni) {
        this.usuarios.push(new Usuario(nombre, dni));
    }

    /*
    Método para agregar una caja a un usuario, el cual recibe por parámetros el dni del usuario, el id de la caja y el peso.
    Primero se verifica que el usuario exista, y si es así, se añade la caja al array de cajas almacenadas del usuario.
    */
    agregarCajaAUsuario(dni, idCaja, peso) {
        let usuario = this.verificarUsuario(dni);
        usuario.agregarCaja(idCaja, peso);
    }

    /*
    Método para eliminar una caja de un usuario, el cual recibe por parámetros el dni del usuario y el id de la caja.
    Primero se verifica que el usuario exista, y si es así, se filtra el array de cajas almacenadas del usuario para eliminar
    la caja con el id correspondiente.
    */
    eliminarCajaDeUsuario(dni, idCaja) { 
        let usuario = this.verificarUsuario(dni);
        usuario.cajasAlmacenadas = usuario.cajasAlmacenadas.filter(caja => caja.idCaja !== idCaja);
    }

    /*
    Método para ingresar una caja en el trastero, el cual recibe por parámetros el dni del usuario y el id de la caja.
    Primero se verifica que el usuario exista y que la caja exista en el array de cajas almacenadas de algún usuario.
    Luego se comprueba que el trastero no esté lleno. 
    Por último se registra la hora de entrada de la caja y se añade al array de cajas en trastero.
    */
    ingresarCaja(dni, idCaja) {
        this.verificarUsuario(dni);
        let caja = this.verificarCaja(idCaja);
        if (this.cajasEnTrastero.length == this.capacidad) {
            throw new Error("El trastero está lleno");
        }
        caja.registrarEntrada();
        this.cajasEnTrastero.push(caja);
    }

    /*
    Método para retirar una caja del trastero, el cual recibe por parámetros el dni del usuario y el id de la caja.
    Primero se verifica que el usuario exista y que la caja exista en el trastero.
    Se registra la hora de la salida y se calcula la tarifa total en función de la tarifa base por hora y la tarifa por kg
    que se hayan dispuesto en los parámetros del constructor.
    Por último hacemos una llamada al método para actualizar el contenido de la página y eliminamos la caja del trastero.
    */
    retirarCaja(dni, idCaja) {
        this.verificarUsuario(dni);
        let caja = this.verificarCajaEnTrastero(idCaja);
        caja.registrarSalida();
        let horasDiferencia = Math.floor((caja.horaSalida - caja.horaEntrada) / 1000 / 3600);
        let tarifaTotal = (this.tarifaBasePorHora + (caja.peso * this.tarifaPorKg)) * (horasDiferencia);
        actualizarContenido(`
            <div>
                <h2>Caja retirada correctamente</h2>
                <div>
                    <ul>
                        <li>ID Caja: ${idCaja}</li>
                        <li>Tarifa total: ${tarifaTotal}€</li>
                    </ul>
                </div>
            </div>
            `, "eliminacion");
        this.cajasEnTrastero = this.cajasEnTrastero.filter(caja => caja.idCaja !== idCaja);
    }

    /*
    Método helper para verificar que un usuario existe, el cual recibe por parámetros el dni del usuario.
    Lanza una excepción si el usuario no existe y devuelve el usuario si existe.
    */
    verificarUsuario(dni) {
        let usuario = this.usuarios.find(usuario => usuario.dni === dni);
        if (!usuario) {
            throw new Error("El usuario no existe");
        }
        return usuario;
    }

    /*
    Método helper para verificar que una caja existe en el array del usuario, el cual recibe por parámetros el id de la caja.
    Lanza una excepción si la caja no existe y devuelve la caja si existe.
    */
    verificarCaja(idCaja) {
        for (let usuario of this.usuarios) {
            let caja = usuario.cajasAlmacenadas.find(caja => caja.idCaja === idCaja);
            if (caja) {
                return caja;
            }
        }
        throw new Error("La caja no existe");
    }

    /*
    Método helper para verificar que una caja existe en el trastero, el cual recibe por parámetros el id de la caja.
    Lanza una excepción si la caja no existe y devuelve la caja si existe.
    */
    verificarCajaEnTrastero(idCaja) {
        let caja = this.cajasEnTrastero.find(caja => caja.idCaja === idCaja);
        if (!caja) {
            throw new Error("La caja no se encuentra en el trastero");
        }
        return caja;
    }

    /*
    Método para consultar el estado del trastero, el cual muestra las cajas que hay en el trastero y los espacios libres.
    Inicializamos una variable con el contenido html y un contador de capacidad para saber cuantos espacios libres
    se deben escribir en la lista.
    Por último llamamos al método para actualizar el contenido de la página.
    */
    consultarEstadoTrastero() {
        let html = "<h2>Estado del trastero:</h2>";
        let capacidad = 0;
        this.cajasEnTrastero.forEach(caja => {
            html += `
            <div>
                <p>ID Caja: ${caja.idCaja} - Peso: ${caja.peso}</p>
            </div>
            `;
            capacidad++;
        });
        while (capacidad < 5) {
            html += `
            <div>    
                <p>Espacio libre</p>
            </div>
            `;    
            capacidad++;
        }
        actualizarContenido(html, "contenido");
    }

    /*
    Método para mostrar una lista de los usuarios registrados en el trastero.
    Inicializamos una variable con el contenido html y un contador de usuario para ver fácilmente 
    cuántos usuario hay en la lista.
    En el bucle recorremos el array de usuarios y mostramos el nombre, dni y las cajas almacenadas de cada usuario.
    Por último llamamos al método para actualizar el contenido de la página.
    */
    listarUsuarios() {
        let html = "<h2>Lista de usuarios:</h2>";
        let numeroUsuario = 1;
        this.usuarios.forEach(usuario => {
            html += `
            <div>
                <ul>
                    <li>Usuario ${numeroUsuario++}</li>
                    <ul>
                        <li>Usuario: ${usuario.nombre}</li>
                        <li>DNI: ${usuario.dni}</li>
                        <li>Cajas almacenadas:</li>
                        <ul>
                        `; usuario.cajasAlmacenadas.forEach(caja => {
                                html += `<li>ID Caja: ${caja.idCaja} - Peso: ${caja.peso}</li>`;
                            });
                        html += `</ul>
                    </ul>
                </ul>
            </div>
            `;
        });
        actualizarContenido(html, "contenido");
    }
}

/* Instancia de la clase trastero */
let trastero = new Trastero(5, 2, 0.5);
/* Elemento del DOM donde se mostrará el contenido (Un elemento <div> que se encuentra vacío en la línea 27
del archivo trastero.html) */
let datos = document.querySelector(".datos");

/*
Función para actualizar el contenido de la página, la cual recibe por parámetros el html que se mostrará y el tipo de contenido.
Primero se limpia el contenido anterior, se añade el html y se añade una clase según el tipo de contenido.
Cada clase tiene características de estilo diferenciativas para que el usuario pueda identificar rápidamente el tipo de contenido.
Pueden ser "registro", "eliminacion" o "contenido", en el archivo styles.css se pueden apreciar las diferencias de cada una.
*/
function actualizarContenido(html, tipo) {
    // Limpiamos el contenido anterior
    datos.innerHTML = html;
    // Eliminamos cualquier clase previa
    datos.className = "datos"; 
    // Agregamos una clase según el tipo de contenido
    if (tipo) {
        datos.classList.add(tipo); 
    }
}

/* -- MANEJADORES DE EVENTOS -- */

/*
Botón para añadir un usuario al trastero, el cual muestra un prompt para introducir el nombre y el dni del usuario.
Luego se llama al método registrarUsuario de la instancia trastero y se muestra un mensaje de confirmación.
*/
document.getElementById('anadirUsuario').addEventListener('click', function() {
    let nombre = prompt('Introduce tu nombre');
    let dni = prompt('Introduce tu DNI');
    trastero.registrarUsuario(nombre, dni);

    actualizarContenido(`
    <div>
        <h2>Usuario añadido correctamente</h2>
        <div>
            <ul>
                <li>Nombre: ${nombre}</li>
                <li>DNI: ${dni}</li>
            </ul>
        </div>
    </div>
    `, "registro");
});

/*
Botón para registrar una caja a un usuario, el cual muestra un prompt para introducir el dni del usuario, el id de la caja y el peso.
Luego se llama al método agregarCajaAUsuario de la instancia trastero y se muestra un mensaje de confirmación.
Se usa un bloque try-catch para capturar el mensaje de error personalizado que se creó anteriormente en los métodos helper.
*/
document.getElementById('registrarCaja').addEventListener('click', function() { 
    let dni = prompt('Introduce tu DNI');
    let idCaja = prompt('Introduce el ID de la caja');
    let peso = prompt('Introduce el peso de la caja');
    try {
        trastero.agregarCajaAUsuario(dni, idCaja, peso);
        actualizarContenido(`
            <div>
                <h2>Caja añadida correctamente</h2>
                <div>
                    <ul>
                        <li>ID Caja: ${idCaja}</li>
                        <li>Peso: ${peso}</li>
                    </ul>
                </div>
            </div>
            `, "registro");    
    } catch (error) {
        alert(error.message);
    }
});

/*
Botón para eliminar una caja de un usuario, el cual muestra un prompt para introducir el dni del usuario y el id de la caja.
Luego se llama al método eliminarCajaDeUsuario de la instancia trastero y se muestra un mensaje de confirmación.
Se usa un bloque try-catch para capturar el mensaje de error personalizado que se creó anteriormente en los métodos helper.
*/
document.getElementById('eliminarCaja').addEventListener('click', function() {
    let dni = prompt('Introduce tu DNI');
    let idCaja = prompt('Introduce el ID de la caja');
    try {
        trastero.eliminarCajaDeUsuario(dni, idCaja);
        actualizarContenido(`
            <div>
                <h2>Caja eliminada correctamente</h2>
                <div>
                    <ul>
                        <li>DNI Usuario: ${dni}</li>
                        <li>ID Caja: ${idCaja}</li>
                    </ul>
                </div>
            </div>
            `, "eliminacion"); 
    } catch (error) {
        alert(error.message);
    }
});

/*
Botón para listar los usuarios registrados en el trastero, el cual llama al método listarUsuarios de la instancia trastero.
*/
document.getElementById('listarUsuarios').addEventListener('click', function() {
    trastero.listarUsuarios();
});

/*
Botón para ingresar una caja en el trastero, el cual muestra un prompt para introducir el dni del usuario y el id de la caja.
Luego se llama al método ingresarCaja de la instancia trastero y se muestra un mensaje de confirmación.
Se usa un bloque try-catch para capturar el mensaje de error personalizado que se creó anteriormente en los métodos helper.
*/
document.getElementById('ingresarCaja').addEventListener('click', function() {
    let dni = prompt('Introduce tu DNI');
    let idCaja = prompt('Introduce el ID de la caja');
    try {
        trastero.ingresarCaja(dni, idCaja);
        actualizarContenido(`
            <div>
                <h2>Caja añadida al trastero correctamente</h2>
                <div>
                    <ul>
                        <li>DNI Usuario: ${dni}</li>
                        <li>ID Caja: ${idCaja}</li>
                    </ul>
                </div>
            </div>
            `, "registro");
    } catch (error) {
        alert(error.message);
    }
});

/*
Botón para retirar una caja del trastero, el cual muestra un prompt para introducir el dni del usuario y el id de la caja.
Luego se llama al método retirarCaja de la instancia trastero y se muestra un mensaje de confirmación.
Se usa un bloque try-catch para capturar el mensaje de error personalizado que se creó anteriormente en los métodos helper.
*/
document.getElementById('retirarCaja').addEventListener('click', function() {
    let dni = prompt('Introduce tu DNI');
    let idCaja = prompt('Introduce el ID de la caja');
    try {
        trastero.retirarCaja(dni, idCaja);
    } catch (error) {
        alert(error.message);
    }
});

/*
Botón para consultar una caja en el trastero, el cual muestra un prompt para introducir el id de la caja.
Luego se llama al método verificarCajaEnTrastero de la instancia trastero y se muestra un mensaje de confirmación.
Se usa un bloque try-catch para capturar el mensaje de error personalizado que se creó anteriormente en los métodos helper.
*/
document.getElementById('consultarCaja').addEventListener('click', function() {
    let idCaja = prompt('Introduce el ID de la caja');
    try {
        let caja = trastero.verificarCajaEnTrastero(idCaja);
        actualizarContenido(`
            <div>
                <h2>Caja encontrada</h2>
                <div>
                    <ul>
                        <li>ID Caja: ${idCaja}</li>
                        <li>Peso: ${caja.peso}</li>    
                    </ul>
                </div>
            </div>
            `, "registro");
    } catch (error) {
        alert(error.message);
    }
});

/*
Botón para consultar el estado del trastero, el cual llama al método consultarEstadoTrastero de la instancia trastero.
*/
document.getElementById('consultarEstado').addEventListener('click', function() {
    trastero.consultarEstadoTrastero();
});
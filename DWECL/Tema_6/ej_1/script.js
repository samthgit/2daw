/*
Clase Contenedor con un constructor que inicializa los parámetros y un método
que muestra una lista de los atributos.
*/
class Contenedor {
    constructor (id, peso, contenido, destino) {
        this.id = id;
        this.peso = peso;
        this.contenido = contenido;
        this.destino = destino;
    }

    mostrarInfo() {
        return `ID: ${this.id}
        Peso: ${this.peso}
        Contenido: ${this.contenido}
        Destino: ${this.destino}`;
    }
}

/*
Clase Puerto: Un constructor que requiere de un nombre y además inicializa una lista de contenedores.
Tiene unos métodos que agregan y eliminan los contenedores de la lista respectivamente y también un 
método para listarlos.
*/
class Puerto {
    constructor (name) {
        this.name = name;
        this.contenedores = [];
    }

    agregarContenedor (contenedor) {
        this.contenedores.push(contenedor);
    }

    eliminarContenedor (id) {
        this.contenedores = this.contenedores.filter(contenedor => contenedor.id !== id);
    }

    listarContenedores () {
        let lista = "";
        this.contenedores.forEach (contenedor => {
            lista += contenedor.mostrarInfo() + "<br>";
        })
        return lista;
    }
}

// Inicializamos una instancia de la clase Puerto.
let puerto = new Puerto("Puerto Algeciras");

// Selectores y un objeto de regexp que nos ayudarán a validar de manera segura y eficiente
const inputs = document.querySelectorAll("input");
const selectDestino = document.getElementById("destino");
const regExpInputs = {
    ID_Contenedor: /^[1-9]\d{0,3}$/,
    Peso: /^[1-9]\d{0,3}$/,
    Contenido: /^[A-Za-z0-9\s]{1,50}$/,
    Destino: /^(Europa|USA|Oriente|África)$/   
};

// EVENTOS

/*
Evento submit: consta de dos partes; la primera valida los campos del formulario
antes de que se envíen, y la segunda toma los valores de los campos del formulario,
crea un objeto Contenedor y lo añade a la lista de contenedores de Puerto. También
hace una llamada a actualizarTabla() para mostrar los datos en la página.
*/
document.getElementById('formContenedor').addEventListener('submit', function (event) {
    // Evitamos que el formulario envíe los datos
    event.preventDefault();

    // Creamos un flag que usaremos para cortar la función en caso de no ser verdadero.
    let valido = true;
    // Verificamos que el campo no esté vacío
    if (selectDestino.selectedIndex === 0) {
        alert(`El campo '${selectDestino.name}' no pude estar vacío`);
        valido = false;
    }
    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert(`El campo '${input.name}' no pude estar vacío`);
            valido = false;
            break;
        }

        /*
        Comparamos el atributo name de los input con la clave de regExpInputs y además
        verificamos que sean el valor de estos sea válido.
        */
        let patron = regExpInputs[input.name];

        if (patron && !(patron.test(input.value))) {
            if (input.name === "Contenido") {
                alert("El contenido solo puede tener letras y números (máx. de 50 caracteres).");
            } else if (input.name === "ID_Contenedor") {
                alert("El ID debe estar entre 1 y 9999.");
            } else if (input.name === "Peso") {
                alert("El peso del contenedor debe estar entre 1 y 9999.");
            }
            valido = false;
            break;
        }
    }
    // Si en algún momento hemos encontrado un problema, cortamos la ejecución.
    if (!valido) return;

    /*
    Una vez pasadas las validaciones asignamos los valores de los inputs a unas variables, 
    que usaremos para crear el objeto contenedor 
    */
    const id = document.getElementById('idContenedor').value;
    const peso = document.getElementById('peso').value;
    const contenido = document.getElementById('contenido').value;
    const destino = document.getElementById('destino').value;

    let contenedor = new Contenedor(id, peso, contenido, destino);
    puerto.agregarContenedor(contenedor);

    actualizarTabla(id, peso, contenido, destino);
    this.reset();
});

/*
Esta función toma como parámetros los valores de los inputs del formulario, y con ellos
vamos a crear las diferentes celdas de cada fila. A su vez, también le vamos a asignar una clase
que usaremos luego para poder editar la celda y para darle estilo.
*/
function actualizarTabla(id, peso, contenido, destino) {
    // Seleccionamos la tabla y creamos nuestra fila
    const tabla = document.getElementById('tablaContenedores');
    let fila = document.createElement('tr');

    /* Creamos las celdas y le asignamos atributos y el contenido correspondiente.
    Con appendChild() vamos añadiendo cada celda a la fila. 
    */
    // Celda para el ID del contenedor
    let idTabla = document.createElement('td');
    idTabla.textContent = id;
    idTabla.classList.add('editable');
    idTabla.setAttribute('data-name', 'ID_Contenedor');
    fila.appendChild(idTabla);

    // Celda para el peso del contenedor
    let pesoTabla = document.createElement('td');
    pesoTabla.textContent = peso;
    pesoTabla.classList.add('editable');
    pesoTabla.setAttribute('data-name', 'Peso');
    fila.appendChild(pesoTabla);

    // Celda para el contenido del contenedor
    let contenidoTabla = document.createElement('td');
    contenidoTabla.textContent = contenido;
    contenidoTabla.classList.add('editable');
    contenidoTabla.setAttribute('data-name', 'Contenido');
    fila.appendChild(contenidoTabla);

    // Celda para el destino del contenedor
    let destinoTabla = document.createElement('td');
    destinoTabla.textContent = destino;
    destinoTabla.classList.add('editable');
    destinoTabla.setAttribute('data-name', 'Destino');
    fila.appendChild(destinoTabla);

    // Celda de acción
    let accionTabla = document.createElement('td');
    // Aquí además creamos un botón que vamos a usar para eliminar los contenedores.
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add('eliminar');
    botonEliminar.setAttribute('data-id', id);
    accionTabla.appendChild(botonEliminar);
    fila.appendChild(accionTabla);
    // Por último añadimos la fila a la tabla.
    tabla.appendChild(fila);

    // Llamada a las funciones para cambiar el estilo y el contenido de la celda.
    cambiarFondo(fila);
    cambiarContenido();
}

/*
Este evento selecciona el botón de eliminar y, tomando su id, hacemos uso del
método para eliminar contenedores de la clase Puerto para eliminarlo. Por otro lado,
borramos también la fila que se muestra por pantalla eliminando el tr más próximo al td
donde se encuentra el botón.
*/
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('eliminar')) {
        let id = event.target.dataset.id;
        puerto.eliminarContenedor(id);

        let fila = event.target.closest('tr');
        fila.remove();
    }
});

/*
Este evento selecciona una fila concreta que le pasamos por parámetros desde la función
de actualizarTabla() y simplemente cambia el color cuando pasamos por encima el ratón y
vuelve a su color anterior cuando salimos.
*/
function cambiarFondo(fila) {
    fila.addEventListener('mouseover', function () {
        fila.style.backgroundColor = "rgb(150, 150, 150)";
    });

    fila.addEventListener('mouseout', function () {
        fila.style.backgroundColor = "";
    });
}

/*
La función cambiarContenido() hace posible editar cada celda haciendo doble click sobre esta.
Al crear las celdas en actualizarTablas() le añadimos una clase 'editable', y esa clase es 
la que vamos a usar para seleccionarlas.

La lógica del evento es tomar el valor original de la celda y almacenarla en una variable, crear
un input al que le daremos el valor de la celda para que no se pierda. Luego eliminamos el contenido
de la celda y hacemos appendChild() para que solo se muestre el input.

Reutilizamos el código de las validaciones del evento submit para volver a validar los datos 
que introducimos y, si todo es correcto, asignamos el textContent de la celda a los nuevos datos 
que hemos introducido.

La comprobación se llevará a cabo bien cuando perdamos el foco en el input o al pulsar la tecla Enter.
*/
function cambiarContenido() {
    const celdas = document.querySelectorAll('.editable');

    celdas.forEach(celda => {
        celda.addEventListener('dblclick', function () {
            let valorOriginal = celda.textContent.trim();
            let input = document.createElement('input');
            input.classList.add('modificar');
            input.value = valorOriginal;
            celda.textContent = '';
            celda.appendChild(input);
            input.select();

            let isKeyDown = false;

            function validarYActualizar() {
                let nuevoValor = input.value.trim();
                let nombreCampo = celda.getAttribute('data-name') || "";
                let patron = regExpInputs[nombreCampo];

                if (!nuevoValor) {
                    if (!isKeyDown) alert(`El campo '${nombreCampo}' no puede estar vacío.`);
                    cancelarEdicion();
                    return;
                }

                if (patron && !patron.test(nuevoValor)) {
                    if (!isKeyDown) {
                        if (nombreCampo === "Contenido") {
                            alert("El contenido solo puede tener letras y números (máx. de 50 caracteres).");
                        } else if (nombreCampo === "ID_Contenedor") {
                            alert("El ID debe estar entre 1 y 9999.");
                        } else if (nombreCampo === "Peso") {
                            alert("El peso del contenedor debe estar entre 1 y 9999.");
                        } else if (nombreCampo === "Destino") {
                            alert("El destino solo puede ser Europa, USA, Oriente o África.");
                        }
                    }
                    cancelarEdicion();
                    return;
                }

                celda.textContent = nuevoValor;
            }
            /*
            Función que simplemente elimina el nuevo input.
            */
            function cancelarEdicion() {
                celda.textContent = valorOriginal;
                input.remove();
            }

            input.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    isKeyDown = true;
                    validarYActualizar();
                } else if (e.key === 'Escape') {
                    cancelarEdicion();
                }
            });
            /*
            Solo ejecutamos blur si antes no le hemos dado a enter, a fin de evitar
            mensajes de alerta duplicados.
            */
            input.addEventListener('blur', function () {
                if (!isKeyDown) {
                    validarYActualizar();
                }
            });
        });
    });
}



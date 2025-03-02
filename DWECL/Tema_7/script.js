// Constante de la dirección de la API para no escribirla cada vez.
const API_URL = "http://localhost:3000";

// Añadimos un evento de click al botón de listar el horario y llamamos a la función cargarHorario().
document.getElementById("obtener").addEventListener("click", cargarHorario);

/**
 * Función para rellenar la tabla dinámicamente en HTML. Hacemos una llamada a la API usando
 * el método GET y almacenamos en una variable el contenido de la respuesta.
 * Luego seleccionamos la tabla por el id y creamos las filas y sus celdas al recorrer 
 * la variable de datos con un foreach, haciendo uso de createElement() y appendChild(). 
 */
function cargarHorario() {
    axios.get(`${API_URL}/barcos`)
        .then(response => {
            const horario = response.data;
            const tabla = document.getElementById("tablaHorario"); 
            tabla.innerHTML = "";
            horario.forEach(info => {
                let fila = document.createElement("tr");
                let id = document.createElement("td");
                id.textContent = info.id;
                fila.appendChild(id);
                let barco = document.createElement("td");
                barco.textContent = info.barco;
                fila.appendChild(barco);
                let empresa = document.createElement("td");
                empresa.textContent = info.empresa;
                fila.appendChild(empresa);
                let destino = document.createElement("td");
                destino.textContent = info.destino;
                fila.appendChild(destino);
                let salida = document.createElement("td");
                salida.textContent = info.salida;
                fila.appendChild(salida);
                tabla.appendChild(fila);
            });
        })
        .catch(error => console.error("Error en GET:", error));
}

/**
 * Botón de agregar elemento. Le añadimos un evento de click en el que además configuramos
 * el contenedor del formulario que usaremos para rellenar los datos con classList.toggle()
 * de manera que cada vez que hagamos click va a alternar la clase hidden (la activa o desactiva)
 * para que se muestre o no. Lo mismo para el botón de Cancelar del formulario. 
 */
document.getElementById("agregar").addEventListener("click", function () {
    document.getElementById("cont-agregar").classList.toggle("hidden");
});

document.getElementById("cancelar").addEventListener("click", () => {
    document.getElementById("cont-agregar").classList.toggle("hidden");
})

/**
 * Aquí tomamos los valores de los campos del formulario para rellenar un objeto JS y enviarlo
 * a la API usando el método POST.
 */
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    const info = {
        id: document.getElementById("id").value,
        barco: document.getElementById("barco").value,
        empresa: document.getElementById("empresa").value,
        destino: document.getElementById("destino").value,
        salida: document.getElementById("salida").value
    };
    axios.post(`${API_URL}/barcos`, info)
    .then(() => cargarHorario())
    .catch(error => console.error("Error en POST:", error));
})

/**
 * Esta función corresponde a la funcionalidad de actualizar un elemento usando PUT.
 * Lo primero es pedirle al usuario que introduzca un ID. Tras comprobar que es válido,
 * hacemos una petición GET a la API para recoger la información del elemento correspondiente.
 * Con esos datos rellenamos los campos del formulario a actualizar, para que el usuario no tenga
 * que rellenarlos todos o por si no quería modificarlos todos y no corra el riesgo de olvidarse del
 * contenido de alguno.
 * De nuevo usamos classList.toggle para hacer que el formulario aparezca luego de pulsar el botón.
 * Al final llamamos a una función separada encargada de gestionar la llamada PUT, a fin de que el código de
 * este evento no quede demasiado denso.
 */
document.getElementById("act-todo").addEventListener("click", function () {
    let idParaModificar = prompt("Introduzca el ID del elemento a actualizar:");
    if (!idParaModificar || isNaN(idParaModificar)) {
        alert("ID no válido");
        return;
    }

    axios.get(`${API_URL}/barcos`)
    .then(response => {
        const horario = response.data;
        let datoParaModificar = horario.find(dato => dato.id === idParaModificar)

        if (!datoParaModificar) {
            alert("No se encontró un barco con ese ID");
            return;
        }
        document.getElementById("barco-act").value = datoParaModificar.barco;
        document.getElementById("empresa-act").value = datoParaModificar.empresa;
        document.getElementById("destino-act").value = datoParaModificar.destino;
        document.getElementById("salida-act").value = datoParaModificar.salida;

        document.getElementById("cont-actualizar").classList.toggle("hidden");
    })
    .catch(error => console.error("Error en GET:", error));
    // Llamamos a la función actualizar(), que se encargará de gestionar la petición PUT.
    actualizar(idParaModificar);
});
// Aplicamos la lógica de ocultar el contenedor si pulsamos en Cancelar.
document.getElementById("cancelar-act").addEventListener("click", () => {
    document.getElementById("cont-actualizar").classList.toggle("hidden");
})

/**
 * En esta función simplemente tomamos los valores del formulario al clickar en submit, creamos
 * un objeto con los datos y lo envíamos a la API usando el método PUT.
 */
function actualizar(idParaModificar) {
    document.getElementById("formulario-actualizar").addEventListener("submit", function(event) {
        event.preventDefault();
        const info = {
            id: idParaModificar,
            barco: document.getElementById("barco-act").value,
            empresa: document.getElementById("empresa-act").value,
            destino: document.getElementById("destino-act").value,
            salida: document.getElementById("salida-act").value
        };
        axios.put(`${API_URL}/barcos/${idParaModificar}`, info)
        .then(() => cargarHorario())
        .catch(error => console.error("Error en PUT:", error));
    })
}

/**
 * Este es el botón encargado de gestionar la petición PATCH. Al hacer click sobre este, pedimos
 * al usuario que introduzca una id y, si es válido, mostramos un formulario para que elija
 * que elemento quiere modificar.
 * Por último, como ocurría antes, creamos una función aparte para gestionar la petición PATCH 
 * y así mantener el código más ordenado.
 */
document.getElementById("act-parcial").addEventListener("click", function () {
    let idParaModificarParcial = prompt("Introduzca el ID del elemento a actualizar:");
    if (!idParaModificarParcial || isNaN(idParaModificarParcial)) {
        alert("ID no válido");
        return;
    }

    axios.get(`${API_URL}/barcos`)
    .then(response => {
        const horario = response.data;
        let datoParaModificar = horario.find(dato => dato.id === idParaModificarParcial)

        if (!datoParaModificar) {
            alert("No se encontró un barco con ese ID");
            return;
        }
        document.getElementById("cont-actualizar-parc").classList.toggle("hidden");
    })
    .catch(error => console.error("Error en GET:", error));
    
    actualizarParc(idParaModificarParcial);
});

// Botón de cancelar del formulario de PATCH. Al pulsar sobre este, se oculta el contenedor.
document.getElementById("cancelar-act-parc").addEventListener("click", () => {
    document.getElementById("cont-actualizar-parc").classList.toggle("hidden");
})

/**
 * En esta función vamos a tener dos valores que introduciremos a la API. En el formulario 
 * hemos puesto una etiqueta <select> para que el usuario no pueda poner un campo que no esté
 * registrado en la API, cuyo valor guardamos en la variable campo. Luego tomamos el nuevo valor
 * introducido en el input en la variable valor y envíamos el conjunto en la petición PATCH.
 */
function actualizarParc(idParaModificarParcial) {
    document.getElementById("formulario-actualizar-parcial").addEventListener("submit", function(event) {
        event.preventDefault();
        let campo = document.getElementById("elem-act").value;
        let valor = document.getElementById("elem-act-valor").value;
        axios.patch(`${API_URL}/barcos/${idParaModificarParcial}`, {[campo]: valor})
        .then(() => cargarHorario())
        .catch(error => console.error("Error en PUT:", error));
    })
}

/**
 * Botón para gestionar la eliminación de un elemento de la API. Al pulsar sobre el botón, pedimos 
 * al usuario un id, el cual guardamos en una variable. Luego llamamos a la API usando el método
 * DELETE, con el id seleccionado en la URL, y así eliminamos al elemento de la base de datos. 
 */
document.getElementById("eliminar").addEventListener("click", function () {
    let idParaEliminar = prompt("Introduzca el ID del elemento a eliminar:");
    if (!idParaEliminar || isNaN(idParaEliminar)) {
        alert("ID no válido");
        return;
    }

    axios.delete(`${API_URL}/barcos/${idParaEliminar}`)
    .then(() => cargarHorario())
    .catch(error => console.error("Error en PUT:", error));
});
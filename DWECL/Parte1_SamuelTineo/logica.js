const URL_API = "http://localhost:3000/";

// EJERCICIO 1
const titulo = document.getElementById("titulo");
if (titulo) {
    titulo.addEventListener("mouseover", () => {
        titulo.style.fontSize = "50px";
        titulo.style.color = "darkblue";
    });

    titulo.addEventListener("mouseleave", () => {
        titulo.style.fontSize = "";
        titulo.style.color = "";
    });
}

// EJERCICIO 2 & 3
const imagen = document.querySelector(".imagen-zen");
const botonDicho = document.getElementById("agregar-dicho");

if (imagen && botonDicho) {
    imagen.addEventListener("click", () => {
        imagen.style.boxShadow = "0 5px 10px blue";
        botonDicho.style.backgroundColor = "red";
    });
}

// EJERCICIO 4
const listaDichos = document.getElementById("lista-dichos");

if (botonDicho && listaDichos) {
    botonDicho.addEventListener("click", () => {
        let dicho = prompt("Añade tu dicho:");
        if (dicho) {
            anadirDicho(dicho);
        }
    });

    function anadirDicho(dicho) {
        let item = document.createElement("li");
        item.textContent = dicho;
        listaDichos.appendChild(item);
    }
}

// EJERCICIO 5
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = "darkblue";
});

// EJERCICIO 6
const botonEliminarDicho = document.getElementById("eliminar-dicho");

if (botonEliminarDicho && listaDichos) {
    botonEliminarDicho.addEventListener("click", () => {
        if (listaDichos.lastChild) {
            listaDichos.removeChild(listaDichos.lastChild);
        }
    });
}

// EJERCICIO 7
const formulario = document.getElementById("formulario");

if (formulario && imagen) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Dicho Enviado!");
        imagen.style.border = "5px solid blue";
    });
}

// EJERCICIO 8
const inputDicho = document.getElementById("dicho");

if (inputDicho) {
    inputDicho.addEventListener("focus", () => {
        inputDicho.style.backgroundColor = "cyan";
        inputDicho.style.border = "5px solid red";
    });
}

// EJERCICIO 9 & 10
const botonCargarDichos = document.getElementById("cargar-dichos");

if (botonCargarDichos) {
    botonCargarDichos.addEventListener("click", cargarDichos);
}

function cargarDichos() {
    axios.get(`${URL_API}/dichos`)
    .then(response => {
        let dichos = response.data;
        let tabla = document.getElementById("tabla-dichos");
        tabla.innerHTML = ""; // Limpiar la tabla antes de agregar nuevos datos
        
        dichos.forEach(dicho => {
            let fila = document.createElement("tr");

            let id = document.createElement("td");
            id.textContent = dicho.id;
            fila.appendChild(id);

            let texto = document.createElement("td");
            texto.textContent = dicho.texto;
            fila.appendChild(texto);

            let accion = document.createElement("td");
            let botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.classList.add("delete");

            // Agregar evento para eliminar la fila al hacer clic
            botonEliminar.addEventListener("click", () => {
                fila.remove(); // Elimina la fila de la tabla
            });

            accion.appendChild(botonEliminar);
            fila.appendChild(accion);

            tabla.appendChild(fila); // Agregar la fila a la tabla
        });
    })
    .catch(error => console.error("Error en GET:", error));
}

let tienda = new TiendaDiscos();

document.addEventListener("contextmenu",(event) =>{
    event.preventDefault();
    alert("Menú contextual bloqueado");
    console.log("-> Menú contextual bloqueado");
})

// 📌 Evento mouseup en el botón "Número de Discos"
document.getElementById("numDiscosBtn").addEventListener("mouseup", () => {
    console.log("📀 Se ha soltado el botón de Número de Discos.");
    alert(`📀 Número de discos: ${tienda.discos.length}`);
});

// 📌 Evento mouseup en el botón "Número de Discos"
document.getElementsByTagName("h1")[0].addEventListener("dblclick", () => {
    console.log("📀 Doble click en h1.");
    alert("Doble click una sola vez!");
},{once:true});

// 📌 Evento keyup en "Grupo/Cantante"
document.getElementById("grupo").addEventListener("keyup", (event) => {
    console.log(`📝 Se ha escrito en "Grupo/Cantante": ${event.target.value}`);
});

// 📌 Evento change en "Tipo de Música"
document.getElementById("tipo").addEventListener("change", (event) => {
    console.log(`🎵 Tipo de música seleccionado: ${event.target.value}`);
});

// 📌 Manejo de focus y blur accediendo directamente al style del objeto
document.querySelectorAll("#agregarDiscoForm input, #agregarDiscoForm select").forEach(element => {
    element.addEventListener("focus", function () {
        this.style.backgroundColor = "lightgreen";
    });

    element.addEventListener("blur", function () {
        this.style.backgroundColor = "lightblue";
    });
});


document.getElementById("nombre").addEventListener("blur", function() {
    let nombre = this.value.trim();
    let nombreRegex = /^[A-Z][a-zA-Z0-9\s]*[a-zA-Z]$/; // Expresión regular

    if (!nombreRegex.test(nombre)) {
        alert("⚠️ El nombre del disco debe comenzar con mayúscula y terminar en minúscula o mayúscula.");
        this.style.border = "2px solid red"; // Resaltar error
    } else {
        this.style.border = "2px solid green"; // Indicar validación correcta
    }
});




// 📌 Función para actualizar la lista de discos en pantalla
function mostrarLista(discos) {
    let lista = document.getElementById("listaDiscos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < discos.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${discos[i].nombre} - ${discos[i].grupo} (${discos[i].anio})`;
        lista.appendChild(li);
    }
}


// 📌 Formulario de agregar disco
document.getElementById("agregarDiscoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let disco = new Disco();
    disco.setDatos(
        nombre.value.trim(), grupo.value.trim(), anio.value, tipo.value, estanteria.value
    );
    tienda.agregarDisco(disco);
    mostrarLista(tienda.discos);
    this.reset();
});

document.getElementById("borrarDiscoBtn").addEventListener("click", function() {
    let nombre = prompt("Introduce el nombre del disco a eliminar:");

    for (let i = 0; i < tienda.discos.length; i++) {
        if (tienda.discos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            tienda.discos.splice(i, 1);
            alert(`🗑️ Disco "${nombre}" eliminado.`);
            mostrarLista(tienda.discos);
            return;
        }
    }

    alert("❌ Disco no encontrado.");
});


document.getElementById("listarDiscosBtn").addEventListener("click", function() {
    let opcion = prompt(
        "Seleccione una opción para mostrar los discos:\n" +
        "1️⃣ En el orden original\n" +
        "2️⃣ En orden inverso\n" +
        "3️⃣ Ordenados alfabéticamente por nombre\n"
    );

    let discosOrdenados = [];

    if (opcion === "1") {
        discosOrdenados = tienda.discos; // Orden original
    } else if (opcion === "2") {
        discosOrdenados = [];
        for (let i = tienda.discos.length - 1; i >= 0; i--) {
            discosOrdenados.push(tienda.discos[i]); // Invertir manualmente
        }
    } else if (opcion === "3") {
        discosOrdenados = tienda.discos.slice(); // Copia manual del array
        for (let i = 0; i < discosOrdenados.length - 1; i++) {
            for (let j = i + 1; j < discosOrdenados.length; j++) {
                if (discosOrdenados[i].nombre.toLowerCase() > discosOrdenados[j].nombre.toLowerCase()) {
                    let temp = discosOrdenados[i];
                    discosOrdenados[i] = discosOrdenados[j];
                    discosOrdenados[j] = temp;
                }
            }
        }
    } else {
        alert("❌ Opción no válida.");
        return;
    }

    mostrarLista(discosOrdenados);
});



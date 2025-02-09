/*
Grupo de selectores que se van a usar a lo largo del script
*/
const titulo = document.getElementById("titulo");
const imagen = document.getElementById("imagen");
const inputs = document.querySelectorAll("input, textarea, select");
const opciones = document.getElementById("opciones-matricula");
const inputsTexto = document.querySelectorAll("input[type='text'], input[type='email'], textarea");
const formulario = document.getElementById("formulario");
const cajaInfo = document.getElementById("div-info");
/*
Colección de expresiones regulares que usaremos para validar los campos del formulario
*/
const regExpInputs = {
    nombre: /^[A-Za-z\s]{3,20}$/,
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    contrasena: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/ 
};

// EVENTOS

/*
En los primeros dos evento vamos a modificar el titulo de la pagina. Haciendo uso de los eventos
mouseover y mouseout modificamos el comportamiento de este haciendo que cambie de tamaño
y color.
*/
titulo.addEventListener("mouseover", function () {
    this.style.fontSize = "2.5em";  
    this.style.color = "red";
    console.log("El usuario ha pasado el ratón sobre el título");
});

titulo.addEventListener("mouseout", function () {
    this.style.fontSize = "2em";
    this.style.color = "black";
});

/*
En este par de eventos nos fijamos en una imagen. Haciendo click sobre esta le añadimos
un sombreado y solo al hacer doble click restablecemos el sombreado.
*/
imagen.addEventListener("click", function () {
    this.style.boxShadow = "0 4px 8px rgb(0, 0, 0, 0.5)";
    console.log("Sombreado cambiado en imagen al hacer clic");
});

imagen.addEventListener("dblclick", function (event) {
    this.style.boxShadow = "none";
    console.log("Sombreado restablecido con doble clic");
    event.stopPropagation(); // Evitamos que el evento doble click interfiera con el del elemento padre (Línea 82)
});

/*
En este evento vamos a seleccionar los inputs del formulario. Como querySelectorAll() devuelve una lista
de nodos, lo que haremos será recorrer la lista y añadir el evento a cada uno de los elementos. 
Con el evento focus capturamos cuál de los elementos están seleccionados.
*/
inputs.forEach(input => {
    input.addEventListener("focus", () => {
        console.log("El usuario tiene el foco en '" + input.id + "'");
    });
});

/*
Recorremos el array de inputs y añadimos un evento blur a cada elemento para capturar cuándo se pierde 
el foco del elemento.
*/
inputs.forEach(input => {
    input.addEventListener("blur", () => {
        console.log("El campo '" + input.id + "' ha perdido el foco");
    });
});

/*
Este evento va a registrar cuándo se cambia la opción seleccionada dentro del la etiqueta <select>
del formulario.
*/
opciones.addEventListener("change", function () {
    console.log("El usuario ha seleccionado el curso: " + opciones.value);
});

/*
Evento para registrar cada tecla que se pulsa en los campos de escritura del formulario que hemos
seleccionado previamente con querySelector All
*/
inputsTexto.forEach(texto => {
    texto.addEventListener("keydown", (event) => {
        console.log("El usuario ha escrito la tecla: " + event.key);
    })
});

/*
Evento para validar el formulario html, empezamos con preventDefault() para evitar que se envíe.
Comprobamos que los campos no estén vacíos y en el segundo for validamos que el formato
de nombre, correo y contraseña sean correctos. Si el flag que hemos establecido sigue siendo verdadero, 
es decir, no hay ningún error, envíamos el formulario manualmente con el método submit().
*/
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let valido = true;
    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert(`El campo '${input.name}' no pude estar vacío`);
            valido = false;
        }
    }

    for (let input of inputs) {
        let patron = regExpInputs[input.name];

        if (input.name === "nombre") {
            if (patron && !(patron.test(input.value))) {
                alert("El nombre debe tener entre 3 y 20 caracteres y solo contener letras.");
                valido = false;
            }
        } else if (input.name === "correo") {
            if (patron && !(patron.test(input.value))) {
                alert("Por favor inserte un formato de correo válido.");
                valido = false;
            }
        } else if (input.name === "contrasena") {
            if (patron && !(patron.test(input.value))) {
                alert("La contraseña debe contener al menos 1 mayúscula y 1 número, y tener al menos 8 caracteres.");
                valido = false;
            }
        }
    }
    if (valido) {
        console.log("Formulario enviado correctamente");
        this.submit();
    }
});

/*
Evento para mostrar por consola cuando se pulsa sobre el botón de reset.
*/
formulario.addEventListener("reset" , () => {
    console.log("Formulario reseteado");
});

/*
Evento para alternar el color de fondo cuando hagamos doble click sobre el contenedor de 
la caja de información.
*/
cajaInfo.addEventListener("dblclick", function () {
    this.style.backgroundColor = (this.style.backgroundColor === "rgb(230, 165, 113)") ? "#e3d6ee" : "#e6a571";
    console.log("El usuario ha cambiado el color de la caja de información");
})

/*
Evento para capturar la posición exacta del ratón y mostrarla por consola en tiempo real.
*/
document.addEventListener("mousemove", function (event) {
    console.log("Posición del ratón -> X: " + event.clientX + ", Y: " + event.clientY);
});

/*
Evento para capturar cuándo la ventana ha sido redimensionada y mostrar por consola
las nuevas dimensiones
*/
window.addEventListener("resize", function () {
    console.log("La ventana ha cambiado de tamaño. Ancho: " + this.innerWidth + "px, Alto: " + this.innerHeight + "px");
});
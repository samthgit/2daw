const input = document.getElementById("kdevent");
const imagen = document.getElementById("imagen");
const boton = document.getElementById("bot-limpiar");

input.addEventListener("keydown", function(event) {
    console.log("Letra pulsada: " + event.key);
});

imagen.addEventListener("mouseover", () => {
    console.log("Mouse sobre la imagen");
});

boton.addEventListener("click", () => {
    console.clear();
    console.log("Consola limpiada");
});
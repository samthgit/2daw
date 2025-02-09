document.addEventListener("DOMContentLoaded", function () {
    //El evento DOMContentLoaded se dispara cuando el DOM está construido
    //por completo, ya que se han cargado todos los elementos HTML
    const formulario = document.getElementById("formularioAlumno");
    const mensajes = document.getElementById("mensajes");
    const titulo = document.getElementById("titulo");
    const imagen = document.getElementById("imagen");
    const infoBox = document.getElementById("info-box");
    const coordenadas = document.getElementById("coordenadas");

    function mostrarMensaje(mensaje, color = "black") {
        mensajes.innerHTML = `<p style="color: ${color};">${mensaje}</p>`;
    }

    //  Evento mouseover y mouseout en el título
    titulo.addEventListener("mouseover", function () {
        titulo.style.color = "red";
        console.log("El ratón ha entrado en el título");
    });

    titulo.addEventListener("mouseout", function () {
        titulo.style.color = "#007bff";
        console.log("El ratón ha salido del título");
    });

    // Evento click en la imagen (cambia la imagen)
    imagen.addEventListener("click", function () {
        if (imagen.src.includes("https://servet.ibercivis.es/wp-content/uploads/sites/4/2022/01/ies_kursaal.jpg")) {
            imagen.src = "https://www.horasur.com/media/horasur/images/2018/04/19/2018041912272764371.jpg";
            console.log("Se ha cambiado a imagen 2");
        } else {
            imagen.src = "https://servet.ibercivis.es/wp-content/uploads/sites/4/2022/01/ies_kursaal.jpg";
            console.log("Se ha cambiado a imagen 1");
        }
    });

    //  Evento doble clic en div para cambiar color de fondo
    infoBox.addEventListener("dblclick", function () {
        infoBox.style.backgroundColor = infoBox.style.backgroundColor === "yellow" ? "white" : "yellow";
    });

    //  Evento movimiento del mouse para mostrar coordenadas
    document.addEventListener("mousemove", function (event) {
        coordenadas.textContent = `📍 Coordenadas: X=${event.clientX}, Y=${event.clientY}`;
    });

    //  Evento resize para detectar cambios de tamaño en la ventana
    window.addEventListener("resize", function () {
        mostrarMensaje("🔄 La ventana ha cambiado de tamaño.", "blue");
    });

    //  Evento submit (Validación del formulario)
    formulario.addEventListener("submit", function (event) {
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let edad = document.getElementById("edad").value;
        let pais = document.getElementById("pais").value;

        if (nombre.trim() === "" || email.trim() === "" || edad.trim() === "" || pais.trim() === "") {
            mostrarMensaje("⚠️ Todos los campos deben estar completos.", "red");
          
        } else {
            mostrarMensaje("✅ Formulario enviado con éxito.", "green");
        }
    });

    //  Evento reset (Limpia mensajes)
    formulario.addEventListener("reset", function () {
        mostrarMensaje("🧹 Formulario reseteado.", "gray");
    });
});

const personajes = [
    'homer', 'homer',
    'marge', 'marge',
    'bart', 'bart',
    'lisa', 'lisa',
    'ned', 'ned',
    'burns', 'burns'
];
let seleccionadas = [];
let contador = 0;

document.addEventListener('DOMContentLoaded', () => {
    inicializarJuego();
});

function inicializarJuego() {
    const celdas = document.querySelectorAll('.celda');
    const personajesMezclados = personajes.sort(() => Math.random() - 0.5);

    celdas.forEach((celda, index) => {
        const img = document.createElement('img');
        img.src = `./img/${personajesMezclados[index]}.jpg`; // Ruta de imágenes
        img.alt = personajesMezclados[index];
        celda.appendChild(img);

        celda.addEventListener('click', manejarClick);
    });
}

function manejarClick(evento) {
    const celda = evento.currentTarget;

    if (seleccionadas.length < 2 && !celda.classList.contains('acertada')) {
        const img = celda.querySelector('img');
        img.style.display = 'block';
        seleccionadas.push(celda);

        if (seleccionadas.length === 2) {
            verificarPareja();
        }
    }
}

function verificarPareja() {
    const [celda1, celda2] = seleccionadas;
    const img1 = celda1.querySelector('img').alt;
    const img2 = celda2.querySelector('img').alt;

    if (img1 === img2) {
        celda1.classList.add('acertada');
        celda2.classList.add('acertada');
        actualizarContador();
        seleccionadas = []; 
    } else {
        // Al no coincidir, esperaremos 1 segundo antes de ocultar las imágenes
        setTimeout(() => {
            reiniciarCeldas();
            seleccionadas = [];  // Asegúrate de vaciar la lista de seleccionadas
        }, 1000);
    }
}

function reiniciarCeldas() {
    seleccionadas.forEach(celda => {
        const img = celda.querySelector('img');
        img.style.display = 'none';
    });
}

function mostrarVentana() {
    // Abre una nueva ventana
    const ventana = window.open('', '', 'width=400,height=300'); // Cambia el tamaño si es necesario

    // Escribe el contenido HTML de la ventana
    ventana.document.write(`
        <html>
        <head>
            <title>Enhorabuena</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 20px;
                }
                button {
                    padding: 10px 20px;
                    cursor: pointer;
                    margin: 10px;
                    font-size: 16px;
                }
            </style>
        </head>
        <body>
            <h2>¡Enhorabuena, has encontrado todas las parejas!</h2>
            <button id="cancelar">Cancelar</button>
            <button id="reiniciar">Reiniciar juego</button>

            <script>
                // Función para reiniciar el juego (recarga la página)
                document.getElementById('reiniciar').onclick = function() {
                    window.opener.location.reload();  // Recarga la página principal del juego
                    window.close();
                };

                // Función para cerrar la ventana
                document.getElementById('cancelar').onclick = function() {
                    window.close(); // Cierra la ventana
                };
            </script>
        </body>
        </html>
    `);
}

function actualizarContador() {
    contador++;
    document.getElementById('contador').textContent = contador;

    // Mostrar la ventana cuando se haya encontrado todas las parejas
    if (contador === 6) {
        mostrarVentana();
    }
}
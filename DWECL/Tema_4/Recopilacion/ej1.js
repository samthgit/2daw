function mostrarAviso() {
    const opciones = 'width=300,height=150,scrollbars=no,menubar=no,toolbar=no,location=no,resizable=no,status=no';
    const avisoLegal = window.open('', "aviso legal", opciones);
    if (avisoLegal) {
        avisoLegal.document.write(`
            <html>
                <head>
                    <title>Aviso Legal</title>
                </head>
                <body>
                    <center>
                        <p>Aviso Legal</><br><br>
                        <button onclick="window.close()">Aceptar</button>
                        <button onclick="window.close()">Cancelar</button>
                    </center>
                </body>
            </html>
        `);
        avisoLegal.document.close();
    } else {
        alert("Por favor habilita los popups para poder ver el aviso legal.");
    }
}

function mostrarBienvenida() {
    const opciones = 'width=300,height=150,scrollbars=no,menubar=no,toolbar=no,location=no,resizable=no,status=no';
    const bienvenida = window.open('', "bienvenida", opciones);
    if (bienvenida) {
        bienvenida.document.write(`
            <html>
                <head>
                    <title>¡Bienvenid@!</title>
                </head>
                <body>
                    <center>
                        <p>¡Bienvenido a la página!</><br>
                        <button onclick="window.close()">Cerrar</button>
                    </center>
                </body>
            </html>
        `);
        bienvenida.document.close();

        bienvenida.onload = () => {
            const width = bienvenida.document.body.scrollWidth + 20;
            const height = bienvenida.document.body.scrollHeight + 20;
            bienvenida.resizeTo(width, height);
        };
    } else {
        alert("Por favor habilita los popups para poder ver la ventana de bienvenida.");
    }
}

mostrarAviso();

setTimeout(mostrarBienvenida, 10000);
let paises = ["España", "Italia", "Francia", "Reino Unido", "Polonia", "Croacia", "Japón", "Estados Unidos", "China"];

function mostrarNumeroElem() {
    document.write("Número de paises: " + paises.length);
}

function mostrarTodosElem() {
    document.write("Paises del array:" +  paises.join(" "));
}

function mostrarElemInverso() {
    document.write("Paises del array en sentido inverso:" + paises.reverse());
}

function mostrarElemOrdenados() {
    document.write("Paises ordenados alfabéticamente:" + paises.slice().sort());
}

function anadirElemPpio(elemento) {
    paises.unshift(elemento);
    document.write("Se ha añadido el pais \"" + elemento + "\" al principio del array");
}

function anadirElemFinal(elemento) {
    paises.push(elemento);
    document.write("Se ha añadido el pais \"" + elemento + "\" al final del array");
}

function borrarElemPpio() {
    const elementoBorrado = paises.shift();
    document.write("Se ha borrado el pais \"" + elementoBorrado + "\" del principio del array");
}

function borrarElemFinal() {
    const elementoBorrado = paises.pop();
    document.write("Se ha borrado el pais \"" + elementoBorrado + "\" del final del array");
}

function mostrarElemPos(posicion) {
    if (posicion >= 0 && posicion < paises.length) {
        document.write("El pais en la posición " + posicion + " es: " + array[posicion]);
    } else {
        document.write("Posición inválida.");
    }
}

function mostrarPosElem(elemento) {
    const posicion = paises.indexOf(elemento);
    if (posicion != -1) {
        document.write("El pais " + elemento + " se encuentra en la posición: " + posicion);
    } else {
        document.write("El pais " + elemento + " no se encuentra en el array");
    }
}

function mostrarElemIntervalo(inicio, fin) {
    if (inicio >= 0 && fin < paises.length && inicio <= fin) {
        document.write("Paises entre las posiciones " + inicio + " y " + fin + ": " + paises.slice(inicio + 1, fin));
    } else {
        document.write("Intervalo inválido.");
    }
}

do {
    let opcion = prompt(`
        1 - Mostrar numero de paises
        2 - Mostrar listado de paises
        3 - Mostrar un intervalo de paises
        4 - Añadir un pais
        5 - Borrar un pais
        6 - Consultar un pais
        0 - Salir`);

    switch (opcion) {
        case 1:
            mostrarNumeroElem();
            break;
        case 2:
            do {
                let listado = prompt(`
                    1 - Orden del array
                    2 - Del revés
                    3 - Alfabéticamente
                    0 - Salir`);
                switch (listado) {
                    case 1:
                        mostrarTodosElem();
                        break;
                    case 2:
                        mostrarElemInverso();
                        break;
                    case 3:
                        mostrarElemOrdenados();
                        break;
                    default:
                        prompt("Has introducido un número incorrecto, inténtalo de nuevo");
                        break;
                }
            } while (listado != 0);
            break;
        case 3:
            mostrarElemIntervalo();
            break;
        case 4:
            do {
                let anadir = prompt(`
                    1 - Al principio
                    2 - Al final
                    0 - Salir`);
                switch (anadir) {
                    case 1:
                        anadirElemPpio;
                        break;
                    case 2:
                        anadirElemFinal();
                        break;
                    default:
                        prompt("Has introducido un número incorrecto, inténtalo de nuevo");
                        break;
                }
            } while (anadir != 0);
        case 5:
            do {
                let borrar = prompt(`
                    1 - Al principio
                    2 - Al final
                    0 - Salir`);
                switch (borrar) {
                    case 1:
                        borrarElemPpio;
                        break;
                    case 2:
                        borrarElemFinal();
                        break;
                    default:
                        prompt("Has introducido un número incorrecto, inténtalo de nuevo");
                        break;
                }
            } while (borrar != 0);
            break;
        case 6:
            do {
                let mostrar = prompt(`
                    1 - Por posicion
                    2 - Por nombre
                    0 - Salir`);
                switch (mostrar) {
                    case 1:
                        mostrarPosElem();
                        break;
                    case 2:
                        ;
                        break;
                    default:
                        prompt("Has introducido un número incorrecto, inténtalo de nuevo");
                        break;
                }
            } while (mostrar != 0);
            break;
        default:
            break;
    }
} while (opcion != 0);
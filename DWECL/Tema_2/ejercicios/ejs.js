// Ejercicio 1


function compEdad() {
    let edad = prompt("Ingrese la edad: ");
    switch (true) {
        case edad >= 0 && edad <= 12:
            alert("Niño");
            break;
        case edad >=13 && edad <= 26:
            alert("Joven");
            break;
        case edad >= 26 && edad <= 60:
            alert("Adulto");
            break;
        case edad > 60:
            alert("Jubilado");
            break;
        default:
            alert("Ha ingresado una edad incorrecta, pruebe de nuevo.")
            break;
    }
}

// Ejercicio 2
function hora30() {
    let enpunto = true;
    for (let i = 9; i <= 21; i++) {
        if (enpunto == true) {
            document.write(i + ":00<br>");
            enpunto = false;
        } 
        if (enpunto == false) {
            document.write(i + ":30<br>");
            enpunto = true;
        }
    }
}

// Ejercicio 3
function hora5() {
    for (let i = 9; i <= 21; i++) {
        if (i == 21) {
            document.write(i + ":00<br>");
            break;
        }
        for (let j = 0; j <= 55; j+=5) {
            let jform = (j < 10 ? '0' : '') + j;
            document.write(i + ":" + jform + "<br>");
        }
    }
}
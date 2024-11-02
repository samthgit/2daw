function prueba_2() {
    let numero = parseInt(prompt("Introduce el número del patrón de asteriscos:"));
    let visual = "&nbsp&nbsp&nbsp"; // una variable para que el cuadrado se visualice mejor en el html

    /*
    * Hacemos varias validaciones: si es un número, y que el tamaño del cuadrado esté entre 2x2 y 25x25
    * Para diseñar el cuadrado hacemos un for anidado a modo de matriz
    * en el que el for exterior son las filas y lo único que hace es saltar de línea, 
    * mientras que el for anidado escribe todas las columnas
    */

    if (isNaN(numero)) {
        alert("Introduce un número válido");
    } else if (numero < 2) {
        alert("El cuadrado debe ser al menos de 2x2");
    } else if (numero > 25) {
        alert("El cuadrado no puede ser mayor de 25x25");
    } else {
        for (let i = 0; i < numero; i++) {
            for (let j = 0; j < numero; j++) {
                document.write("*" + visual);
            }
            document.write("<br>");
        }
    }
}
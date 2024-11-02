// Ejercicio 1
function ej1() {
    let n1 = parseInt(prompt("Numero 1:"));
    let n2 = parseInt(prompt("Numero 2:"));
    let suma = 0;
    
    if (isNaN(n1) || isNaN(n2)) {
        document.write("Por favor introduzca números válidos");
    }

    if (n1 < n2) {
        for (let i = n1; i <= n2; i++) {
            if (i % 2 == 0) {
                suma += i;    
            }
        }
    } else {
        document.write("Ha introducido un rango de numeros incorrecto.")
    }
    document.write("La suma total de " + n1 + " y " + n2 + " es: " + suma);
}

// Ejercicio 2
function ej2() {
    let num = parseInt(prompt("Introduzca un número:"));
    document.write("<table border = 1px solid black>");
    for (let i = 1; i <= 10; i++) {
        document.write("<tr><td >" + num + " * " + i + " = " + num*i + "</td></tr>");
    }
    document.write("</table>");
}

// Ejercicio 3
function ej3() {
    let num = parseInt(prompt("Introduzca un número:"));
    let i = num - 1;
    let factorial = num;

    if (isNaN(num) || num < 0) {
        alert("Introduzca un número válido");
    } else if (num == 0) {
        document.write("El factorial de " + num + " es 1");
    } else {
        while (i > 0) {
            factorial *= i;
            i--;
        }
        document.write("El factorial de " + num + " es " + factorial);
    }
}

// Ejercicio 4
function ej4() {
    let frase = prompt("Introduce tu frase:");
    let letra = prompt("Ahora el caracter a buscar");
    let cont = 0; 
    
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i).toLowerCase() === letra.toLowerCase()) {
            cont++;
        }
    }
    document.write("En la frase \"" + frase + "\" hay " + cont + " \'" + letra + "\'");
}

// Ejercicio 5
function ej5() {
    let num = parseInt(prompt("Introduzca un número:"));
    let cont = 0;

    if (isNaN(num)) {
        alert("Introduzca un número válido");
    } else {
        for (let i = num; i > 0; i--) {
            if (num % i == 0) {
                cont++;
            }
        }
    
        if (cont > 2) {
            document.write("El numero " + num + " no es primo");
        } else {
            document.write("El número " + num + " es primo");
        }
    }
}

// Ejercicio 6
function ej6() {
    let num = parseInt(prompt("Introduzca un número:"));

    if (isNaN(num) || num < 1) {
        alert("Introduzca un número válido");
    } else {
        let fibonacci = [0, 1];

        for (let i = 2; i < num; i++) {
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        }

        fibonacci.forEach((numero) => {
            document.write(numero + ", ");
        });
    }
}

// Ejercicio 7
function ej7() {
    let rand = Math.floor(Math.random() * 100) + 1;
    let iguales = false;

    do {
        let num = parseInt(prompt("Introduzca un número:"));

        if (isNaN(num) || num < 1 || num > 100) {
            alert("Numero incorrecto, debe estar entre 1 y 100");
        } else if (num === rand) {
            alert("¡Felicidades! Acertaste el número");
            iguales = true;
        } else if (num > rand) {
            alert("Tu número es mayor");
        } else {
            alert("Tu número es menor");
        }
    } while (!iguales);
}

// Ejercicio 8
function ej8() {
    let frase = prompt("Introduza una frase:");
    let vocales = 0;
    let consonantes = 0;

    fraseForm = frase.toLowerCase().replace(/\s+/g, '');

    for(let i = 0; i < fraseForm.length; i++) {
        let letra = fraseForm.charAt(i);
        let letraASCII = fraseForm.charCodeAt(i);
        if ((letraASCII >= 97 && letraASCII <= 122)) {
            if ((letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u')) {
            vocales++;
        } else {
            consonantes++;
        }
        }
        
    }

    document.write("En la frase \"" + frase + "\" hay:<br>");
    document.write(" - Vocales: " + vocales + "<br>");
    document.write(" - Consonantes: " + consonantes + "<br>");
}

// Ejercicio 9
function ej9() {
    let num = parseInt(prompt("Introduzca un número:"));
    let patron = parseInt(prompt("Patrón: Introduzca 1 para triángulo y 2 para cuadrado"));
    let ast = "*&nbsp;&nbsp;&nbsp;";

    switch (patron) {
        case 1:
            for (let i = 1; i <= num; i++) {
                let espac = num - i;
                for (let j = 0; j < espac; j++) {
                    document.write("&nbsp");
                }
                for (let j = 0; j < i; j++) {
                    document.write("*");
                }
                document.write("<br>");
            }
            break;
        case 2:
            for (let i = 1; i <= num; i++) {
                for (let j = 0; j < num; j++) {
                    document.write(ast);
                }
                document.write("<br>");
            }
            break;
        default:
            "Ha introducido un número incorrecto";
            break;
    }
}

// Ejercicio 10
function ej10() {
    let num = prompt("Introduzca un número:");
    let numInv = "";
    for (let i = num.length - 1; i >= 0; i--) {
        numInv += num.charAt(i);
    }

    numInv = parseInt(numInv);
    document.write("El número " + num + " invertido es " + numInv);
}
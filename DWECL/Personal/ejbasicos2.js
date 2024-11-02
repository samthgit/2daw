/*
 Ejercicios basicos sacados de makeitrealcamp github
 link: https://github.com/makeitrealcamp/ejercicios-javascript
*/

// Ejercicio 1
function contrasenaValida() {
    let contrasena = prompt("Introduzca su contrasena:");
    let conVal = true;
    if (contrasena == "2Fj(jjbFsuj" || contrasena == "eoZiugBf&g9") {
        document.write(conVal);
    } else {
        conVal = false;
        document.write(conVal);
    }
}

// Ejercicio 2
function calcularImpuestos() {
    let edad = parseInt(prompt("Introduzca su edad:"));
    let ingresos = parseInt(prompt("Ahora introduzca sus ingresos"));
    if (edad >= 18 && ingresos >= 1000) {
        document.write("Sus impuestos son: " + ingresos*40/100);
    } else {
        document.write("Usted no paga impuestos");
    }
}

// Ejercicio 3
function bmi() {
    let peso = parseInt(prompt("Introduzca su peso:"));
    let altura = parseInt(prompt("Ahora introduzca su altura (en cm):"));
    let imc = peso / (altura/100)**2;
    if (imc < 18.5) {
        document.write("Su imc es " + imc.toFixed(2) + ": \"Bajo de peso\"");
    } else if (imc >= 18.5 && imc <= 24.9){
        document.write("Su imc es " + imc.toFixed(2) + ": \"Normal\"");
    } else if (imc >= 25 && imc <= 29.9) {
        document.write("Su imc es " + imc.toFixed(2) + ": \"Sobrepeso\"");
    } else {
        document.write("Su imc es " + imc.toFixed(2) + ": \"Obeso\"");
    }
}

// Ejercicio 4
function imprimirArreglo() {
    let frase = prompt("Escriba aquí su frase:");
    let fraseForm = frase.split(" ");
    fraseForm.forEach(function(palabra) {
        document.write(palabra + "<br>");
    });
}

// Ejercicio 5
function likes() {
    let likes = parseInt(prompt("Número de likes"));
    if (likes < 1000) {
        likes = likes.toString();
        document.write("Likes: " + likes);
    } else if (likes >= 1000 && likes < 1000000) {
        likes = parseInt(likes/1000);
        likes = likes.toString();
        document.write("Likes: " + likes + "K");
    } else {
        likes = parseInt(likes/1000000);
        likes = likes.toString();
        document.write("Likes: " + likes + "M");
    }
}

// Ejercicio 6
function fizzBuzz() {
    let num = parseInt(prompt("Introduce un número:"));
    if (num % 3 == 0 && num % 5 == 0) {
        document.write("fizzbuzz<br>");
    } else if (num % 3 == 0) {
        document.write("fizz<br>");
    } else if (num % 5 == 0) {
        document.write("buzz<br>");
    } else {
        document.write(num + "<br>");
    }
}

// Ejercicio 7
function contarRango() {
    let n1 = parseInt(prompt("Introduce el primer número:"));
    let n2 = parseInt(prompt("Introduce el segundo número:"));
    //haciendolo con bucle
    let rango = 0;
    for (let i = n1; i < n2; i++) {
        rango++;
    }
    /* ya que tiene que exluir ambos numeros 
    reducimos en uno la cantidad del rango */
    rango--;
    document.write("El rango entre " + n1 + " y " + n2 + " es: " + rango);
}

// Ejercicio 8
function sumarRango() {
    let n1 = parseInt(prompt("Introduce el primer número:"));
    let n2 = parseInt(prompt("Introduce el segundo número:"));
    let suma = 0;

    for (let i = n1; i <= n2; i++) {
        suma += i;
    }
    document.write("La suma de todos los nºs entre " + n1 + " y " + n2 + " es: " + suma);
}

// Ejercicio 9
function numeroDeAes() {
    let frase = prompt("Introduce tu frase:");
    //frase = frase.toLowerCase();
    let cont = 0; 
    
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === 'a') {
            cont++;
        }
    }
    document.write("En la frase \"" + frase + "\" hay " + cont + " \'a\'");
}

// Ejercicio 10
function numeroDeCaracteres() {
    let frase = prompt("Introduce tu frase:");
    let letra = prompt("Ahora el caracter a buscar");
    let cont = 0; 
    
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === letra) {
            cont++;
        }
    }
    document.write("En la frase \"" + frase + "\" hay " + cont + " \'" + letra + "\'");
}
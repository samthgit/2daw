/* Ejercicios basicos aulascript
link: https://www.aulascript.com/evaluar/ejercicios_basicos_1.htm
*/

// Ejercicio 1
function ej1() {
    let precio = 200;
    let iva = 21*200/100;
    let precioTotal = precio + iva;
    document.write("El precio total es: " + precioTotal);
}

// Ejercicio 2
function ej2() {
    let lado = 40;
    let area = lado*40;
    let perimetro = lado*4;
    document.write("El area es: " + area + "<br>");
    document.write("El perimetro es: " + perimetro);
}

// Ejercicio 3
function ej3() {
    let nombre = prompt("Escribe tu nombre: ");
    alert("Hola " + nombre);
}

// Ejercicio 4
function ej4() {
    alert("Escribe tres números enteros:")
    let n1 = parseInt(prompt("Primer número: "));
    let n2 = parseInt(prompt("Segundo número: "));
    let n3 = parseInt(prompt("Tercer número: "));
    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
        let media = (n1+n2+n3)/3;
        alert("La media es: " + media);
    } else {
        alert("Alguno de los números introducidos no es un entero/número")
    }
}

// Ejercicio 5
function ej5() {
    let n1 = parseInt(prompt("Nº de kilómetros recorridos: "))
    let n2 = parseInt(prompt("Nº de litros consumidos: "));
    let lPorKm = n2/n1;
    alert("Has consumido " + lPorKm + " l/km");
}

// Ejercicio 6
function ej6() {
    let horas = parseInt(prompt("Horas: "));
    let minutos = parseInt(prompt("Minutos: "));
    let segTot = horas*3600 + minutos*60;
    alert("Los segundos totales son: " + segTot);
}

// Ejercicio 7
function ej7() {
    let n2d = parseInt(prompt("Escribe un número de dos dígitos: "));
    if(n2d > 0 && n2d < 100) {
        let unid = n2d%10;
        let dec = parseInt(n2d/10);
        alert("Unidades: " + unid + "\n" + "Decenas: " + dec);
    } else {
        alert("Has introducido un número incorrecto");
    }
}

// Ejercicio 8
function ej8() {
    let comensal = parseInt(prompt("Nº de comensales: "));
    let patatagr = comensal*200;
    let patatakg = parseInt(patatagr/1000);
    let huevo = 5*patatakg;
    let cebolla = 300*patatakg;
    alert("Para " + comensal + " comensales\nSe necesitará:\n" + patatakg + " kg de patatas\n" + huevo + " huevos\n" + cebolla + " gr de cebolla")
}

// Ejercicio 9
function ej9() {
    let varUno = 10;
    let varDos = 30;
    document.write("Al principio: varUno = " + varUno + ", varDos = " + varDos + "<br>");
    let cambiavarUno = varUno;
    let cambiavarDos = varDos;
    varDos = cambiavarUno;
    varUno = cambiavarDos;
    document.write("Al principio: varUno = " + varUno + ", varDos = " + varDos + "<br>");
}

// Ejercicio 10
function ej10() {
    let num = parseInt(prompt("Escribe un número:"));
    let resto = num%2;
    let par = resto == 0;
    alert("¿Es par? " + par);
}
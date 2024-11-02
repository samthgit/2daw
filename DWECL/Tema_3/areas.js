function acirculo(radio) {
    return "El área de un circulo de radio " + radio + " es " + Math.PI*Math.pow(radio, 2) + "<br>";
}

function arectangulo(base, altura) {
    return "El área de un rectángulo de " + base + "x" + altura + " es " + base*altura + "<br>";
}

function atriangulo(base, altura) {
    return "El área de un triángulo de " + base + "x" + altura + " es " + base*altura/2 + "<br>";
}

function mostrarAreas() {
    document.write(acirculo(4));
    document.write(arectangulo(4,5));
    document.write(atriangulo(4,5));
}

function contarPalabras() {
    let frase = "Hola que tal    como estas";
    let fraseMod = frase.trim().replace(/\s+/g, " ").split(" ");
    document.write(fraseMod + "<br>");

    document.write(fraseMod.length);
}

function invertirPalabras() {
    let frase = "  Hola que tal    como   estas";
    let fraseMod = frase.trim().replace(/\s+/g, " ");
    let fraseInv = fraseMod.split("").reverse().join("");
    document.write(fraseInv);
}
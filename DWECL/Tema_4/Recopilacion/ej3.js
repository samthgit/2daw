let cadena = "Que fácil y bonito es JavaScript";

function modificar(cadena) {
    cadenaSplit = cadena.split(" ");

    cadenaSplit = cadenaSplit.reverse();

    cadenaSplit = cadenaSplit.map(palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    cadenaSplit = cadenaSplit.join(" ");
    console.log(cadenaSplit);
}

modificar(cadena);
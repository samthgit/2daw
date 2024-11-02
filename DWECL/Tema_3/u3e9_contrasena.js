function contrasena() {
    let contrasena = prompt("Introduce tu contraseña:");
    let errores = 0;
    if (contrasena.length < 8 || contrasena.length > 16) {
        alert("La contraseña debe tener entre 8 y 16 caracteres");
        errores++;
    }
    let mayusc = 0;
    for (let i = 0; i < contrasena.length; i++) {
        if (contrasena.charCodeAt(i) >= 65 && contrasena.charCodeAt(i) <= 90) {
            mayusc++;
        }
    }
    if (mayusc == 0) {
        alert("La contraseña debe tener al menos una mayúscula");
        errores++;
    }
    let minusc = 0;
    for (let i = 0; i < contrasena.length; i++) {
        if (contrasena.charCodeAt(i) >= 97 && contrasena.charCodeAt(i) <= 122) {
            minusc++;
        }
    }
    if (minusc == 0) {
        alert("La contraseña debe tener al menos una minúscula");
        errores++;
    }
    let numeros = 0;
    for (let i = 0; i < contrasena.length; i++) {
        if (contrasena.charCodeAt(i) >= 48 && contrasena.charCodeAt(i) <= 57) {
            numeros++;
        }
    }
    if (numeros == 0) {
        alert("La contraseña debe tener al menos un número");
        errores++;
    }
    if (contrasena.includes('-') || contrasena.includes('_') || contrasena.includes('@') ||
    contrasena.includes('#') || contrasena.includes('%' || contrasena.includes('&'))) {

    } else {
        alert("La contraseña debe tener al menos uno de estos caracteres: -,_,@,#,%,&")
        errores++;
    }
    if (errores == 0) {
        alert("Tiene una contraseña segura");
    }
}

/*
function contrasenaSegura(contrasena) {
    ** booleanas en false para cada caso
    **el if que comprueba el length pero al revés, para que entre
    if (contrasena.length >= 8 && contrasena.length <= 16) {
        **hacemos un for para recorrer la contrasena
        for (let i = 0; i < contrasena.length; i++) {
        ** y aqui ya ponemos el switch case
            switch (true) {
                case ()
            }
        }
    }
    }
}
'-_@#$%&'.includes(caracter) esta sentencia te busca si coincide con alguno de los caracteres que hay dentro de las comillas
** fuera llama a la funcion
y crea contrasena con el prompt
*/
function contrasenaValida(contrasena) {
    let longitud = false;
    let may = false;
    let min = false;
    let num = false;
    let carEsp = false;
    if (contrasena.length >= 8 && contrasena.length <= 16) {
        longitud = true;
        for (let i = 0; i < contrasena.length; i++) {
            switch (true) {
                case (contrasena.charCodeAt(i) >= 65 && contrasena.charCodeAt(i) <= 90):
                    may = true;
                    break;
                case (contrasena.charCodeAt(i) >= 97 && contrasena.charCodeAt(i) <= 122):
                    min = true;
                    break;
                case (contrasena.charCodeAt(i) >= 48 && contrasena.charCodeAt(i) <= 57):
                    num = true;
                    break;
                case '-_@#$%&'.includes(contrasena[i]):
                    carEsp = true;
                    break;
            }
        }
    }

    if (longitud == true && may == true && min == true && num == true && carEsp == true) {
        alert("La contraseña es segura")
    } else {
        alert("La contraseña no es segura");
    }
}

let contrasena = prompt("Introduce tu contraseña:");
contrasenaValida(contrasena);
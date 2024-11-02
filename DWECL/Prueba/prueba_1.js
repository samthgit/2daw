function prueba_1() {

    /*
    * En el principio simplemente declaramos las variables y hacemos los prompt
    * En este caso no voy a hacer parseInt a num1 y num2, lo explico más abajo
    */

    let num1 = prompt("Introduzca el primer número:");
    let num2 = prompt("Introduzca el segundo número:");


    let operacion = parseInt(prompt(`Elija la operación:
        - Pulse 1 para sumar
        - Pulse 2 para restar
        - Pulse 3 para multiplicar
        - Pulse 4 para dividir`));

    /*
    * Aquí empezamos con las validaciones, he dejado num1 y num2 en string para hacer la distinción
    * entre cuando están vacías y cuando están rellenas pero de letras, y no números.
    * En este primer if comprobamos que las cadenas estén vacías, si no lo están haremos nuestro parseInt
    */

    if (num1 == '' && num2 == ''){
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
    } else {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
    }

    /*
    * Y en este if es donde comprobamos si son realmente números. En caso de que esté todo correcto, 
    * haciendo uso de un switch-case, imprimiremos el resultado de la operación correspondiente por pantalla 
    */

    if (isNaN(num1) || isNaN(num2) || isNaN(operacion)) {
        alert("Por favor, introduzca un número válido")
    } else {
        switch (operacion) {
            case 1:
                document.write("El resultado de SUMAR " + num1 + " y " + num2 + " es: " + (num1+num2));
                break;
            case 2:
                document.write("El resultado de RESTAR " + num1 + " y " + num2 + " es: " + (num1-num2));
                break;
            case 3:
                document.write("El resultado de MULTIPLICAR " + num1 + " y " + num2 + " es: " + (num1*num2));
                break;
            case 4:
                document.write("El resultado de DIVIDIR" + num1 + " y " + num2 + " es: " + (num1/num2));
                break;
            default:
                document.write("Ha introducido un número incorrecto, pruebe de nuevo");
                break;
        }
    }
}


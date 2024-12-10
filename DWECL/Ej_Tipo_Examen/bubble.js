function mibubble (array) {
    let cambio;

    do {
        cambio = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                let a = array[i];
                let b = array[i+1];
                array[i] = b;
                array[i+1] = a;
                // Intercambia los strings si están en el orden incorrecto aplicando desestructuración
                //[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                cambio = true;
            }
        }
        
    } while (cambio);
    return array;
}

let array = [5,7,1,3,10,2];
let arrayModif = mibubble(array);
console.log("Array Modificado", arrayModif);
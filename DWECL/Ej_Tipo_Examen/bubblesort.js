function bubbleSortStrings(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) { 
                // Intercambia los strings si están en el orden incorrecto
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }

    } while (swapped);
    return arr;
}

// Ejemplo de uso
let words = ["naranja", "manzana", "plátano", "uva", "kiwi"];
let numbers = [3,5,8,10,9,13,1,53,6,9];
console.log("Arreglo original:", numbers);
let sortedNumbers = bubbleSortStrings(numbers);
console.log("Arreglo ordenado:", sortedNumbers);

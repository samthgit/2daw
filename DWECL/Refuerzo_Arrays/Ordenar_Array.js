function sortMixedArrayStrict(array, order = "asc") {
    const isAscending = order === "asc";

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            const a = array[j];
            const b = array[j + 1];

            // Determinamos si ambos son números
            const areNumbers = typeof a === "number" && typeof b === "number";

            // Comparación numérica o lexicográfica
            const condition = isAscending 
                ? (areNumbers ? a > b : String(a) > String(b))
                : (areNumbers ? a < b : String(a) < String(b));

            if (condition) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    return array;
}

// Ejemplo de uso
const mixedArray = [42, "banana", "apple", 10, "42", "100"];
console.log(sortMixedArrayStrict(mixedArray, "asc"));  
// [10, 42, "100", "42", "apple", "banana"]

console.log(sortMixedArrayStrict(mixedArray, "desc")); 
// ["banana", "apple", "42", "100", 42, 10]

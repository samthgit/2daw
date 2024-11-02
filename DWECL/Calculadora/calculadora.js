// Función para agregar números y operadores al display
function addToDisplay(value) {
    document.getElementById("display").value += value;
}

// Función para calcular el resultado
function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Función para limpiar el display
function clearDisplay() {
    document.getElementById("display").value = "";
}

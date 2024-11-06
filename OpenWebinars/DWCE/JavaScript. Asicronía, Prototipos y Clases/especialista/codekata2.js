let numberOne = 17;
let numberTwo = 33;

// let result = numberOne + numberTwo;
numberOne += numberTwo;

console.log(numberOne);
// igual para el resto de operadores aritméticos

let result = numberOne % 2;

if (result == 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}

let countDesp = 0;

console.log(countDesp++);
console.log(countDesp);

let countAnt = 5;

console.log(++countAnt);
console.log(countAnt);

let exponent = 2;
let numberSample = 7;

console.log(numberSample ** exponent);

let myText = "Un texto cualquiera";

console.log(myText + ". Con un final cualquiera" + 1234);
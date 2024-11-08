let enumeration = [];

for (let i = 0; i < 10; i++) {
    enumeration[i] = i + 1;
}

console.log(enumeration);

let limit = 3;

do {
    console.log(limit);
    limit--;
} while (limit > 0);

console.log("He acabado el bucle");

let fruits = {a: "orange", b: "lemon", c: "grape"};

for (let elem in fruits) {
    // saca las claves
    console.log(elem);
    // saca los valores
    console.log(fruits[elem]);
}

let fruitsArray = ["orange", "lemon", "grape"];

for (let elem of fruitsArray) {
    console.log(elem);
}

for (let i = 0; i < fruitsArray.length; i++) {
    console.log(fruitsArray[i]);
}

let fruitsSet = new Set(["orange", "lemon", "grape"]);

for (let elem of fruitsSet) {
    console.log(elem);
}

let fruitsArray2 = ["orange", "lemon", "grape"];

for (let i = 0; i < fruitsArray2.length; i++) {
    if (fruitsArray2[i] == "lemon") {
        console.log(fruitsArray2[i]);
        break;
    }
    console.log(fruitsArray2[i]);
}

let myOptions = new Set(["orange", "watermelom", "banana"]);

for (let elem of fruitsArray2) {
    if (myOptions.has(elem)) {
        console.log(elem);
        break;
    } else {
        continue;
    }
}
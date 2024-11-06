// --------- Array ---------- //

let namedCollection = ["Samuel", "Santi", "Fernando", "Victor"];

console.log(namedCollection);

console.log(namedCollection[0]);

// ---------- Set ----------- //

let enumu = new Set([1, 7, true, "Hola"]);
// Para buscar un elemento dentro de un Set usamos .has(lemento)
console.log(enumu.has(76));

enumu.add("Adios");
console.log(enumu);

// --------- Map ------------ //

let mapeo = new Map([
    ["1", "Samuel"],
    [2, "Alumno"]
]);

mapeo.set("1", "OpenWebinars");

console.log(mapeo.get(2));

// -------- Object ------------ //

let objeto = {
    name: "Samuel",
    surname: "Tineo"
};

console.log(objeto.name);

// --------- Date ------------ //

let currentDate = new Date();
console.log(currentDate);

let secondCurrentDate = new Date();
console.log(secondCurrentDate);
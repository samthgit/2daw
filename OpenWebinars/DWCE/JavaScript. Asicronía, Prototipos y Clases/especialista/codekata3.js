let myFruit = "lemon";

switch (myFruit) {
    case "orange":
    case "lemon":
        console.log("Citric");
        break;
    case "banana":
        console.log("Tropical");
        break;
    case "watermelon":
        console.log("big fruit");
        break;
}

let fruit = "banana";
let availableFruits = new Set(["lemon", "banana", "watermelon"]);

let isAvailable = (availableFruits.has(fruit) ? "available" : "not available");

console.log(isAvailable);

let myFavouriteFruit = "watermelon";
let myAvailableFruits = {lemon: "Citric", watermelon: "Big Fruit", banana: "Tropical"};

console.log(myFavouriteFruit in myAvailableFruits);

let myOtherFavouriteFruit = "orange";
let myAvailableFruitsArray = ["lemon", "orange", "banana"];

// en los arrays preguntamos por indices no por elementos
console.log(myOtherFavouriteFruit in myAvailableFruitsArray);
console.log(1 in myAvailableFruitsArray);
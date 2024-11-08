function* extractNumber(attemps) {
    for (let i = 0; i < attemps; i++) {
        yield Math.floor(Math.random() * 91);
    }
}

let cpu = 0;
let player = 0;

// tiradas cpu
let cpuGenerator = extractNumber(2);
cpu += cpuGenerator.next().value;
cpu += cpuGenerator.next().value;

// tiradas player

let playerGenerator = extractNumber(2);
player += playerGenerator.next().value;
player += playerGenerator.next().value;

console.log("cpu: " + cpu);
console.log("player: " + player);
console.log((player > cpu) ? "player wins" : "cpu wins");
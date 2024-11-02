let op1 = 10 == 10;
alert("La operacion 10 == 10 es: " + op1); //true

/* otro metodo (mas rapido)
alert(`La operacion 10 == 10 es: ${10 == 10}`); asi con todos
*/

let op2 = 10 === 10;
alert("La operacion 10 === 10 es: " + op2); //true

let op3 = 10 === 10.0;
alert("La operacion 10 === 10.0 es: " + op3); // true

let op4 = "Laura" == "laura";
alert("La operacion \"Laura\" == \"laura\" es: " + op4); // false

let op5 = "Laura" > "laura";
alert("La operacion \"Laura\" > \"laura\" es: " + op5); // false

let op6 = "Laura" < "laura";
alert("La operacion \"Laura\" < \"laura\" es: " + op6); // true

let op7 = "123" == 123;
alert("La operacion \"123\" == 123 es: " + op7); // true

let op8 = "123" === 123;
alert("La operacion \"123\" === 123 es: " + op8); // false

let op9 = parseInt("123") === 123;
alert("La operacion parseInt(\"123\") === 123 es: " + op9); // true
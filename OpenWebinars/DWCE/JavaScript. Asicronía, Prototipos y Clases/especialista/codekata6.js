let html = "<html><body><h1 class=\"h1 font text\">Formacion tecnica</h1></body></html>"

let expression = new RegExp(/<h1.*class=".*">(?<texto>.*)<\/h1>/);
let result = expression.exec(html);

// acceder mediante el indice
console.log(result[1]);

// acceder usando grupo
console.log(result.groups.texto);

let phone = new RegExp(/\+34\s?([0-9]{3})\s?([0-9]{3})\s?([0-9]{3})\s?/);
// con la expresion {3} especificamos el tamaño del bloque anterior, en este caso 3 numeros

let isValid = phone.exec("+34 600 123 456");

console.log(isValid !== null);
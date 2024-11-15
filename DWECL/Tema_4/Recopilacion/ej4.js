let promptDatos = prompt("Introduce tu fecha de nacimiento (año,mes,dia):")

let fecha = promptDatos.split(',');

let anio =  parseInt(fecha[0].trim());
let mes = parseInt(fecha[1].trim()) - 1;
let dia = parseInt(fecha[2].trim());

let edad = new Date(anio, mes, dia);
let fechaActual = new Date();
let proximoCumple = new Date(fechaActual.getFullYear()+1, mes, dia);

let diferencia = Math.ceil((proximoCumple - fechaActual) / (1000 * 60 * 60 * 24));
let nuevaEdad = Math.floor((proximoCumple - edad) / (1000 * 60 * 60 * 24 * 365));

document.write("Faltan " + diferencia + " para tu próximo cumpleaños. Ese día cumplirás " + nuevaEdad + " años.");

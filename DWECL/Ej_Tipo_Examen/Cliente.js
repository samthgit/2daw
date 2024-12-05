class Cliente {
    constructor(nombre, DNI) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.cochesComprados = [];
        this.totalGastado = 0;
    }

    comprarCoche(coche) {
        if (coche.vendido) {
            console.log(`El coche ${coche.marca} ${coche.modelo} ya ha sido vendido`);
            return;
        } else {
            coche.comprador = this.nombre;
            coche.vendido = true;
            this.cochesComprados.push(coche);
            this.totalGastado += coche.precio;
        }
    }

    infoCliente() {
        console.log("Información del cliente " + this.nombre);
        console.log("Coches comprados:");
        if (this.cochesComprados.length !== 0) {
            this.cochesComprados.forEach(coche => {
                coche.infoVehiculo();
            });
            console.log("Total Gastado: " + this.totalGastado + "€\n");
        } else {
            console.log("Ningún coche comprado\n");
        }
    }
}

class Vehiculo {
    constructor(marca, modelo, anio, matricula, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.matricula = matricula;
        this.precio = precio;
        this.vendido = false;
        this.comprador = null;
    }

    infoVehiculo() {
        console.log(`- Marca: ${this.marca}
- Modelo: ${this.modelo}
- Año: ${this.anio}
- Matrícula: ${this.matricula}
- Precio: ${this.precio}€
- Comprador: ${this.comprador}
`);
    }

    actualizarPrecioCoche(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }
}

class Concesionario {
    constructor() {
        this.clientes = [];
        this.vehiculos = [];
    }
    
    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }

    crearCoche(marca, modelo, anio, matricula, precio) {
        const coche = new Vehiculo(marca, modelo, anio, matricula, precio);
        this.vehiculos.push(coche);
        return coche;
    }

    cocheMatricula(matricula) {
        return this.vehiculos.find(coche => coche.matricula === matricula);
    }

    comprobarCocheMatricula(matricula) {
        const coche = this.cocheMatricula(matricula);
        if (coche) {
            if (coche.vendido) {
                console.log(`El coche con matrícula ${matricula} ha sido vendido a ${coche.comprador.nombre}.`);
            } else {
                console.log(`El coche con matrícula ${matricula} está disponible para la venta.`);
            }
        } else {
            console.log(`No se encontró el coche con matrícula ${matricula}.`);
        }
    }

    reporteVentasCliente() {
        this.clientes.forEach(cliente => {
            cliente.infoCliente();
        })
    }

    obtenerCochesDisponibles() {
        const cochesDisponibles = this.vehiculos.filter(coche => coche.vendido == false);
        console.log("Coches Disponibles:\n");
        cochesDisponibles.forEach(coche => {
            coche.infoVehiculo();
        })
    }
}

let concesionario = new Concesionario();

const coche1 = concesionario.crearCoche("Chevrolet", "Aveo", "2009", "3969GGP", 14000);
const coche2 = concesionario.crearCoche("Hyundai", "Atos", 2000, "CA2576BP", 7500);
const coche3 = concesionario.crearCoche("Citroen", "Xsara Picasso", 2005, "5472CDH", 11000);
const coche4 = concesionario.crearCoche("Peugeot", "206", 2009, "6739DCM", 17000);
const coche5 = concesionario.crearCoche("Volkswagen", "Golf", 2018, "1293KLS", 15500);

let cliente1 = new Cliente("Samuel", "77987654K");
let cliente2 = new Cliente("Santi", "76859291P");
let cliente3 = new Cliente("Fernando", "12432657N");
let cliente4 = new Cliente("Victor", "85392810S");

concesionario.agregarCliente(cliente1);
concesionario.agregarCliente(cliente2);
concesionario.agregarCliente(cliente3);
concesionario.agregarCliente(cliente4);

cliente1.comprarCoche(coche1);
cliente1.comprarCoche(coche3);
cliente3.comprarCoche(coche2);


cliente1.infoCliente();

//concesionario.comprobarCocheMatricula("3969GGP");

//concesionario.reporteVentasCliente();

//concesionario.obtenerCochesDisponibles();

//coche5.infoVehiculo();
//coche5.actualizarPrecioCoche(17000);
//coche5.infoVehiculo();
class Cliente {
    constructor (nombre, DNI) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.prodMasCompr = [];
        this.tiendaHab = null;
    }

    clienteCompraProducto (producto, supermercado) {
        const miProd = supermercado.mercancias.find(productoArray => productoArray.nombre === producto);
        if (miProd) {
            this.prodMasCompr.push(miProd.nombre);
            miProd.hayStock = false;
            miProd.compradores.push(this.nombre);
        } else {
            document.write("El producto " + producto + " no se encontró en el supermercado.<br>");
        }
    }

    comprobarClienteProdSuper (producto, supermercado) {
        const miProd = supermercado.mercancias.find(productoArray => productoArray.nombre === producto);
        if (miProd) {
            const compradoresProd = miProd.compradores;
            for (let i = 0; i < compradoresProd.length; i++) {
                if (compradoresProd[i] === this.nombre) {
                    document.write("El cliente " + this.nombre + " ha comprado " + miProd.nombre + " en " + supermercado.nombre + "<br>");
                    return;
                }
            }
            document.write("El cliente " + this.nombre + " no ha comprado " + miProd.nombre + " en " + supermercado.nombre + "<br>");
        } else {
            document.write("El producto " + producto + " no se encontró en el supermercado.<br>");
        }
    }

    comprobarClienteCompraProd (cliente, producto) {
        //document.write(cliente);
        //document.write(cliente.prodMasCompr.length);
        if (cliente.prodMasCompr.length > 0) {
            for (let i = 0; i < cliente.prodMasCompr.length; i++) {
                if (cliente.prodMasCompr[i] === producto) {
                    document.write("El cliente " + cliente.nombre + " ha comprado " + producto) + "<br>";
                    return;
                }
            }
            document.write("El cliente " + cliente.nombre + " no ha comprado " + producto + "<br>");
        } else {
            document.write("El cliente " + cliente.nombre + " no ha comprado ningun producto<br>");
        }
    }
}

class Mercancia {
    constructor (nombre, precioCompra, precioVenta, departamento) {
        this.nombre = nombre;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.departamento = departamento;
        this.hayStock = true;
        this.compradores = [];
    }
}

class Supermercado {
    constructor (nombre) {
        this.nombre = nombre;
        this.clientes = [];
        this.mercancias = [];
    }

    comprarProducto (nombre, precioCompra, precioVenta, departamento) {
        const prod = new Mercancia(nombre, precioCompra, precioVenta, departamento);
        this.mercancias.push(prod);
    }

    beneficioProducto(producto, supermercado) {
        const miProdBen = supermercado.mercancias.find(productoArray => productoArray.nombre === producto);
        if (miProdBen) {
            const beneficio = miProdBen.precioVenta - miProdBen.precioCompra;
            if (!isNaN(beneficio)) {
                document.write("El beneficio es de " + beneficio + "<br>");
            } else {
                document.write("Error: precios no válidos para el producto " + producto + "<br>");
            }
        } else {
            document.write("El producto " + producto + " no se encontró en el supermercado.<br>");
        }
    }
    
    comprobarStockProducto (producto) {
        const miProd = this.mercancias.find(productoArray => productoArray.nombre === producto);

        if (miProd.hayStock) {
            document.write("El producto esta en stock<br>");
        } else {
            document.write("El producto no esta en stock<br>");
        }
    }
}

let mercadona = new Supermercado("Mercadona");
let carrefour = new Supermercado("Carrefour");
let lidl = new Supermercado("Lidl");


mercadona.comprarProducto("agua", 0.15, 0.50, "agua");
carrefour.comprarProducto("agua", 0.15, 0.45, "agua");
lidl.comprarProducto("agua", 0.15, 0.40, "agua");

mercadona.comprarProducto("arroz", 0.80, 1.90, "cereales");
carrefour.comprarProducto("arroz", 0.80, 1.80, "cereales");
lidl.comprarProducto("arroz", 0.80, 1.69, "cereales");

mercadona.comprarProducto("aceite", 3.00, 7.00, "cereales");
carrefour.comprarProducto("aceite", 3.00, 5.99, "cereales");
lidl.comprarProducto("aceite", 3.00, 6.25, "cereales");

//mercadona.beneficioProducto("agua", mercadona);

let cliente1 = new Cliente("Samuel", "12345678P");
let cliente2 = new Cliente("Santi", "87654321B");

cliente1.clienteCompraProducto("arroz", carrefour);

//cliente1.comprobarClienteProdSuper("aceite", carrefour);

//cliente2.comprobarClienteCompraProd(cliente1, "arroz");

carrefour.comprobarStockProducto("arroz");
mercadona.comprobarStockProducto("arroz");

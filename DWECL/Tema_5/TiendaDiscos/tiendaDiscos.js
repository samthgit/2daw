class TiendaDiscos {
    constructor() {
        this.discos = [];
    }

    agregarDisco(disco) {
        this.discos.push(disco);
    }

    borrarDisco(nombre) {
        let index = this.discos.findIndex(d => d.nombre.toLowerCase() === nombre.toLowerCase());
        if (index !== -1) {
            this.discos.splice(index, 1);
            return true;
        }
        return false;
    }

    

}

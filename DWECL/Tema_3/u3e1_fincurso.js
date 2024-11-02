function fechaDif() {
    let diaAct = new Date();
    let diaFin = new Date(diaAct.getFullYear(), 5, 24);

    if (diaAct > diaFin) {
        diaFin.setFullYear(diaAct.getFullYear() + 1);
    }

    let diferencia = (diaFin - diaAct) / (1000 * 60 * 60 * 24);

    document.write("Quedan " + parseInt(diferencia) + " días para fin de curso");
}
const imagenes = document.querySelectorAll('img')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        alert("Evento de ratón capturado");
    });    
});


document.getElementById('kursaal').addEventListener('dblclick', () => {
    alert("Evento de ratón doble capturado");
});
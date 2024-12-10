<?php
// Llamamos a todas las clases necesarias
require_once 'Soporte.php';
require_once 'Cliente.php';
require_once 'CintaVideo.php';
require_once 'Dvd.php';
require_once 'Juego.php';

class Videoclub {
    // Creamos la clase con sus propiedades.
    private $nombre;
    private $productos = [];
    private $numProductos = 0;
    private $socios = [];
    private $numSocios = 0;
    
    // En el constructor solo necesitamos el nombre.
    function __construct($nombre) {
        $this->nombre = $nombre;
    }
    
    
    /*
     * Método para incluir en el array de productos los productos de abajo
     * Aquí diferenciamos las diferentes clases para asegurarnos que solo
     * se insertan en el array elementos de las clases CintaVideo, Dvd y Juego.
     */
    private function incluirProducto(Soporte $producto) {
        if ($producto instanceof CintaVideo) {
            array_push($this->productos, $producto);
            $this->numProductos++;
        } else if ($producto instanceof Dvd) {
            array_push($this->productos, $producto);
            $this->numProductos++;
        } else if ($producto instanceof Juego) {
            array_push($this->productos, $producto);
            $this->numProductos++;
        } else {
            echo "No se pudo incluir el producto";
        }
    }
    
    /*
     * Las siguientes tres clases proceden de la misma manera:
     * Tomando los parámetros que se envían creamos un objeto,
     * el cual mandamos a incluirProducto() para que lo inserte
     * en el array.
     * Aquí he decidido hace una implementación propia para no modificar
     * el código de todas las clases; hacer la propiedad numero de cada clase
     * null y usar en su lugar el índice del array en el que se encuentran
     * como número identificativo.
     */
    function incluirCintaVideo($titulo, $precio, $duracion) {
        $cinta = new CintaVideo($titulo, null, $precio, $duracion);
        $this->incluirProducto($cinta);
    }
    
    function incluirDvd($titulo, $precio, $idiomas, $pantalla) {
        $dvd = new Dvd($titulo, null, $precio, $idiomas, $pantalla);
        $this->incluirProducto($dvd);
    }
    
    function incluirJuego($titulo, $precio, $consola, $minJ, $maxJ) {
        $juego = new Juego($titulo, null, $precio, $consola, $minJ, $maxJ);
        $this->incluirProducto($juego);
    }
    
    /*
     * Esta función toma las variables que le pasamos por parámetros
     * y con eso creamos un objeto Cliente. Aquí mismo lo incluiremos
     * en el array de socios.
     */
    function incluirSocio($nombre, $maxAlquileresConcurrentes = 3) {
        $socio = new Cliente($nombre, null, $maxAlquileresConcurrentes);
        array_push($this->socios, $socio);
    }
    
    /*
     * Un método que lista los productos. Mediante el uso de un foreach
     * y del método muestraResumen() propio de cada elemento del array.
     */
    function listarProductos() {
        echo "----------------------------------<br>";
        echo "--- LISTA PRODUCTOS ---<br>";
        echo "----------------------------------<br><br>";
        foreach ($this->productos as $producto) {
            $producto->muestraResumen();
        }
        echo "----------------------------------<br>";
        echo "----------------------------------<br><br>";
    }
    
    /*
     * Este método es igual que el de arriba. Tenemos un foreach
     * y usamos el método muestraResumen() de la clase Cliente
     * para mostrar cada elemento del array por pantalla.
     */
    function listarSocios() {
        echo "---------------------------------<br>";
        echo "------ LISTA SOCIOS ------<br>";
        echo "---------------------------------<br><br>";
        foreach ($this->socios as $socio) {
            $socio->muestraResumen();
        }
        echo "---------------------------------<br>";
        echo "---------------------------------<br><br>";
    }
    
    /*
     * Un método que tomando el número de un cliente y el soporte
     * podemos hacer que un cliente concreto alquile un producto
     * concreto. Gracias a la implementación del principio, solo
     * tenemos que usar el índice del array para obtener el objeto
     * deseado.
     */
    function alquilarSocioProducto($numeroCliente, $numeroSoporte) {
        if ($numeroCliente < count($this->socios)) {
            $socio = $this->socios[$numeroCliente];
        } else {
            echo "El socio de indice '$numeroCliente' no existe<br><br>";
            return;
        }
        if ($numeroSoporte < count($this->productos)) {
            $soporte = $this->productos[$numeroSoporte];
        } else {
            echo "El producto de indice '$numeroSoporte' no existe<br><br>";
            return;
        }
        
        if ($socio != null && $soporte != null) {
            $socio->alquilar($soporte);
        } else {
            echo "No se pudo realizar el alquiler";
        }
    }
}
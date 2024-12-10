<?php 
// Llamamos a Soporte.php para que Dvd tenga acceso.
require_once 'Soporte.php';

class Dvd extends Soporte {
    // Añadimos las propiedades nuevas de Dvd.
    public $idiomas;
    private $formatPantalla;
    
    /*
     * Sobreescribimos el constructor usando parent::
     * y las nuevas propiedades.
     */
    function __construct($titulo, $numero, $precio, $idiomas, $formatPantalla) {
        parent::__construct($titulo, $numero, $precio);
        $this->idiomas = $idiomas;
        $this->formatPantalla = $formatPantalla;
    }
    /*
     * Modificamos el metodo para que muestre toda
     * la información relevante a esta clase.
     */
    function muestraResumen() {
        echo "Película en DVD: ";
        parent::muestraResumen();
        echo "<br>Idiomas:$this->idiomas<br>";
        echo "Formato Pantalla:$this->formatPantalla<br><br>";
    }
}
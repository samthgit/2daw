<?php
// Llamamos a Soporte.php para que CintaVideo pueda acceder.
require_once 'Soporte.php';

class CintaVideo extends Soporte {
    // Añadimos una nueva propiedad.
    private $duracion;
    /*
     * Sobreescribimos el constructor usando parent::
     * Y además añadimos la nueva propiedad.
     */
    function __construct($titulo, $numero, $precio, $duracion) {
        parent::__construct($titulo, $numero, $precio);
        $this->duracion = $duracion;
    }
    
    /*
     * Modificamos muestraResumen() haciendo de parent::muestraResumen()
     * y dos nuevas líneas.
     */
    function muestraResumen() {
        echo "Película en VHS:";
        parent::muestraResumen();
        echo "<br>Duración: $this->duracion minutos<br><br>";
    }
}
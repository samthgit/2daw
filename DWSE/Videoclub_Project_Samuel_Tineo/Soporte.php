<?php 
require_once 'Resumible.php';

abstract class Soporte implements Resumible {
    /*
     * Definición de las propiedades de la clase.
     */
    public $titulo;
    protected $numero;
    private $precio;
    private static $IVA = 0.21;
    
    /*
     * Constructor de la clase haciendo shadowing típico.
     */
    function __construct($titulo, $numero, $precio) {
        $this->titulo = $titulo;
        $this->numero = $numero;
        $this->precio = $precio;
    }

    /*
     * Los getters de la clase. Todo normal menos el del precio con IVA,
     * al que aplicaremos la fórmula para calcularlo.
     */
    public function getPrecio() {
        return $this->precio;
    }
    
    public function getPrecioConIva() {
        return $this->precio * (1 + Soporte::$IVA);
    }
    
    public function getNumero() {
        return $this->numero;
    }
    
    /*
     * Aquí mostramos la información de la clase resumida.
     */
    public function muestraResumen() {
        echo "<br><em>$this->titulo</em><br>";
        echo "$this->precio € (IVA no incluido)";
    }
}
<?php
// Llamamos a Soporte.php para que la clase Juego tenga acceso.
require_once 'Soporte.php';

class Juego extends Soporte {
    // Añadimos las nuevas propiedades.
    public $consola;
    private $minNumJugadores;
    private $maxNumJugadores;
    
    /*
     * Sobreescribimos el constructor para añadir
     * las nuevas propiedades
     */
    function __construct($titulo, $numero, $precio, $consola, $minNumJugadores, $maxNumJugadores) {
        parent::__construct($titulo, $numero, $precio);
        $this->consola = $consola;
        $this->minNumJugadores = $minNumJugadores;
        $this->maxNumJugadores = $maxNumJugadores;
    }
    
    /*
     * Un método que establece un texto con el número de jugadores de un juego
     * según ciertas condiciones. Primero validamos que los números sean mayor que 0
     * y que el mínimo de jugadores sea menor que el máximo. Luego, a través de condicionales
     * damos 3 opciones. "Para un jugador", "Para X jugadores" y "De X a Y jugadores".
     */
    function muestraJugadoresPosibles() {
        if ($this->minNumJugadores <= $this->maxNumJugadores && ($this->minNumJugadores && $this->maxNumJugadores) > 0) {
            if ($this->minNumJugadores == 1 && $this->maxNumJugadores == 1) {
                echo "Para un jugador";
            } elseif ($this->minNumJugadores > 1 && $this->maxNumJugadores > 1 && ($this->minNumJugadores - $this->maxNumJugadores == 0)) {
                echo "Para $this->minNumJugadores jugadores";
            } elseif ($this->minNumJugadores < $this->maxNumJugadores) {
                echo "De $this->minNumJugadores a $this->maxNumJugadores jugadores";
            }
        } else {
            echo "Error. El número mínimo de jugadores no puede ser mayor que el máximo";
        }
    }
    
    /*
     * Modificamos el método muestraResumen() para que incluya
     * las nuevas propiedades.
     */
    function muestraResumen() {
        echo "Juego para: $this->consola";
        parent::muestraResumen();
        echo "<br>";
        $this->muestraJugadoresPosibles();
        echo "<br><br>";
    }
}
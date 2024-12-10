<?php
// Llamamos a Soporte.php para poder usar sus métodos.
require_once 'Soporte.php';

class Cliente {
    // Creamos las propiedades de la clase.
    public $nombre;
    private $numero;
    private $soportesAlquilados = [];
    private $numSoportesAlquilados;
    private $maxAlquilerConcurrente;
    
    /*
     * Creamos el constructor de Cliente. En este caso vamos a dar
     * un valor por defecto a $maxAlquilerConcurrente, ya que es opcional,
     * y vamos a inicializar numSoportesAlquilados directamente.
     */
    function __construct($nombre, $numero, $maxAlquilerConcurrente = 3) {
        $this->nombre = $nombre;
        $this->numero = $numero;
        $this->numSoportesAlquilados = count($this->soportesAlquilados);
        $this->maxAlquilerConcurrente = $maxAlquilerConcurrente;
    }
    /*
     * Getters y setters.
     */
    public function getNumero() {
        return $this->numero;
    }
    
    public function setNumero($numero) {
        $this->numero = $numero;
    }
    
    public function getNumSoportesAlquilados() {
        return $this->numSoportesAlquilados;
    }
    /*
     * Una función booleana que comprueba si el Soporte ya estaba alquilado.
     */
    function tieneAlquilado (Soporte $s) {
        return (in_array($s, $this->soportesAlquilados));
    }
    
    /*
     * Un método que añade un nuevo soporte. Primero comprueba que no estuviese ya en el array 
     * y que está dentro del número máximo de soportes permitido. En base a esto retornará true o false.
     */
    function alquilar (Soporte $s) {
        if ($this->tieneAlquilado($s)) {
            echo "El cliente ya tiene alquilado el soporte ";
            echo "<strong>" . $s->titulo . "</strong>";
            echo "<br><br>";
            return false;
        }
        if ($this->numSoportesAlquilados >= $this->maxAlquilerConcurrente) {
            echo "Este cliente tiene " . $this->numSoportesAlquilados . " elementos alquilados. ";
            echo "No puede alquilar más en este video club hasta que no devuelva algo.";
            echo "<br><br>";
            return false;
        }
        array_push($this->soportesAlquilados, $s);
        $this->numSoportesAlquilados = count($this->soportesAlquilados);
        $s->muestraResumen();
        echo "<strong>Alquilado soporte a</strong>: " . $this->nombre;
        echo "<br><br><br>";
        return true;
    }
    
    /*
     * Función que elimina un elemento del array según el índice indicado.
     * Primero comprueba que sea un número válido y que esté dentro del
     * tamaño máximo permitido. De esta manera retornará true o false
     * según que condiciones se cumplan.
     */
    function devolver (int $numSoporte) {
        if ($numSoporte > 0 && $numSoporte < $this->numSoportesAlquilados) {
            array_splice($this->soportesAlquilados, $numSoporte - 1, 1);
            $this->numSoportesAlquilados = count($this->soportesAlquilados);
            return true;
        } else {
            echo "No se ha podido encontrar el soporte en los alquileres de este cliente.";
            echo "<br><br>";
            return false;
        }
    }
    
    /*
     * Retorna un pequeño resumen del cliente: su nombre y el número de soportes alquilados.
     */
    function muestraResumen () {
        echo "Nombre: $this->nombre<br>";
        echo "Soportes Alquilados: $this->numSoportesAlquilados<br><br>";
    }
    /*
     * Lista los alquileres haciendo uso del método muestraResumen() propio de la clase
     * de cada elemento que se encuentra en el array, el cual recorremos usando
     * un foreach. Además se destaca un caso especial si el array se encuentra vacío.
     */
    function listarAlquileres () {
        if ($this->numSoportesAlquilados == 0) {
            echo "Este cliente no tiene alquilado ningún elemento.";
            echo "<br><br>";
            return false;
        }
        echo "<strong>El cliente tiene $this->numSoportesAlquilados soportes alquilados</strong>";
        echo "<br><br>";
        foreach ($this->soportesAlquilados as $soporte) {
            $soporte->muestraResumen();
            echo "<br><br>";
        }
    }
}
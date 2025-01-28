<?php
// Empezamos creando nuestra tabla
echo "<table style='border: solid 1px black;'>";
echo "<tr><th>Id</th><th>Firstname</th><th>Lastname</th></tr>";
/*
 * Aquí hacemos uso de una clase externa que terminará
 * de construir la tabla
 */
class TableRows extends RecursiveIteratorIterator {
    function __construct($it) {
        parent::__construct($it, self::LEAVES_ONLY);
    }
    
    function current() {
        return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
    }
    
    function beginChildren() {
        echo "<tr>";
    }
    
    function endChildren() {
        echo "</tr>" . "\n";
    }
}

$servername = "localhost";
$username = "samuel";
$password = "tineo";
$dbname = "lol";

try {
    $conn = new PDO("mysql:host=$servername", $username, $password);
    $conn->exec("USE $dbname");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Seleccionamos los elementos de la tabla
    $stmt = $conn->prepare("SELECT id, nombre, rol, dificultad, descripcion FROM campeon");
    $stmt->execute();
    
    /*
     * Almacenamos todas las filas en arrays asociativos, como ocurría en mysqli
     */
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    /*
     * Ahora solo nos queda recorrer cada array asociativo y seleccionar
     * el valor correspondiente, que se irá asignando a la celda que le corresponde
     * usando las clases que hemos añadido al principio del documento
     */
    foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
        echo $v;
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;
echo "</table>";
?>
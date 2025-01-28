<?php
$servername = "localhost";
$username = "samuel";
$password = "tineo";
$dbname = "lol";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
/*
 * sentencia SQL para crear la tabla 'campeon'
 * con los campos 'id', 'nombre', 'rol', 
 * 'dificultad' y 'descripcion'
 */
$sql = "CREATE TABLE campeon (
id INT(5) PRIMARY KEY,
nombre VARCHAR(50),
rol VARCHAR(50),
dificultad VARCHAR(50),
descripcion VARCHAR(250)
)";

/*
 * comprobamos que la sentencia se llevó 
 * a cabo con éxito y mostramos un mensaje
 * acorde
 */

if (mysqli_query($conn, $sql)) {
    echo "La tabla campeon se creó con éxito";
} else {
    echo "Error al crear la tabla: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
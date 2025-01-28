<?php
$servername = "localhost";
$username = "samuel";
$password = "tineo";
$dbname = "lol";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// PÁGINA CONTROLADOR ENCARGADA DE ELIMINAR DE LA TABLA AL CAMPEÓN

// Captamos la id del campeón mediante la url y le damos un valor a la variable $id
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

/*
 * Si la id es correcta, usamos la sentencia SQL DELETE FROM ... WHERE ...
 * para eliminar de la tabla al campeón correspondiente
 */
if ($id != 0) {
    $sql = "DELETE FROM campeon WHERE id = $id";
    /*
     * Si no ha habido ningún problema se redirigirá al usuario
     * automáticamente a la página de la tabla de nuevo
     */
    if (mysqli_query($conn, $sql)) {
        header("Location: 606campeones.php");
        /*
         * En caso de que algo haya salido mal, se mostrará un mensaje 
         * para informar al usuario, junto con un enlace para volver 
         * a la página donde se encuentran los campeones
         */
    } else {
        echo "No se se pudo eliminar al campeón";
        echo "<p><a href='606campeones.php'>Volver a la lista de campeones</a></p>";
    }
} else {
    echo "No se encontró al campeón";
    echo "<p><a href='606campeones.php'>Volver a la lista de campeones</a></p>";
}

mysqli_close($conn);
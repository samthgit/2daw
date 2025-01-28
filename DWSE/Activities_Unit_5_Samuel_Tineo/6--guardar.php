<?php
$servername = "localhost";
$username = "samuel";
$password = "tineo";
$dbname = "lol";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// PÁGINA CONTROLADOR ENCARGADA DE GUARDAR LOS CAMBIOS DEL CAMPEÓN

// Almacenamos los datos que vienen del formulario mediante POST en variables
$id = $_POST['id'];
$nombre = $_POST['nombre'];
$rol = $_POST['rol'];
$dificultad = $_POST['dificultad'];
$descripcion = $_POST['descripcion'];

/*
 * Usamos la sentencia UPDATE ... SET ... WHERE ... de SQL 
 * para guardar los cambios efectuados en el formulario 
 * en la base de datos
 */
$sql = "UPDATE campeon SET 
        nombre = '$nombre', 
        rol = '$rol', 
        dificultad = '$dificultad', 
        descripcion = '$descripcion' WHERE id = $id";

/*
 * En caso de no tener ningún problema volveremos directamente a la página de la tabla.
 * Aquí decidí añadir en la url un status=success para que al volver a la página
 * con dicha url, se activará un alert de javascript informando al usuario
 * de que los cambios se han guardado correctamente.
 */
if (mysqli_query($conn, $sql)) {
    header("Location: 606campeones.php?status=success");
} else {
    /*
     * Si ha habido algún error mostraremos un mensaje
     * y un enlace para que el usuario pueda volver a la tabla
     */
    echo "Error al actualizar: " . mysqli_error($conn);
    echo "<p><a href='606campeones.php'>Volver a la lista de campeones</a></p>";
}

mysqli_close($conn);
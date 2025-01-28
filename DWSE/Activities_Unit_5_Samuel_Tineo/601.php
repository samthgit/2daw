<?php
/*
 * establecemos los nombres del servidor, usuario y contraseña
 * que usaremos a lo largo de todo el proceso
 */
$servername = "localhost";
$username = "samuel";
$password = "tineo";
// función para establecer la conexión
$conn = mysqli_connect($servername, $username, $password);
// mostramos un error y cerramos el programa en caso de que la conexión falle
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// sentecia SQL para crear la base de datos 'lol'
$sql = "CREATE DATABASE lol";
/*
 * Mostramos un mensaje en ambos casos
 * para mantener al usuario informado de la situación
 */
if (mysqli_query($conn, $sql)) {
    echo "La base de datos se creó con éxito";
} else {
    echo "Error al crear la base de datos: " . mysqli_error($conn);
}
// cerramos la conexión
mysqli_close($conn);
?>
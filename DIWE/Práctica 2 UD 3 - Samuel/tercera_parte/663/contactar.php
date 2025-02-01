<?php
$nombre = $_GET['nombre'];
$correo = $_GET['correo'];
$mensaje = $_GET['mensaje'];

file_put_contents("mensajes.csv", "$nombre, $correo, $mensaje\n", FILE_APPEND);

echo "<p>Datos guardados</p>";
echo "<p>Haz click <a href=" . $_SERVER['HTTP_REFERER'] . ">aquí</a> para ir a la página anterior</p>";
echo "<p>Haz click <a href='mensajes.csv' target='blank'>aquí</a> para ver todos los mensajes</p>";
?>
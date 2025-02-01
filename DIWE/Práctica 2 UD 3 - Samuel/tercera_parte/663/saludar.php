<?php
$saludo = $_GET['saludo'];
$persona = $_GET['persona'];

file_put_contents("saludos.csv", "$saludo, $persona\n", FILE_APPEND);

echo "<p>Datos guardados</p>";
echo "<p>Haz click <a href=" . $_SERVER['HTTP_REFERER'] . ">aquí</a> para ir a la página anterior</p>";
echo "<p>Haz click <a href='saludos.csv' target='blank'>aquí</a> para ver todos los mensajes</p>";
?>
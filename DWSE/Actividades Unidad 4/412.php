<?php
session_start();

if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header("Location: 410.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listado de Películas</title>
</head>
<body>
    <h1>Listado de Películas</h1>
    <ul>
        <li>Ben-Hur</li>
        <li>Titanic</li>
        <li>El Señor de los Anillos: El Retorno del Rey</li>
    </ul>

	<p><a href="414.php">Ir al listado de Series</a></p>
    <p><a href="413.php">Cerrar sesión</a></p>
</body>
</html>

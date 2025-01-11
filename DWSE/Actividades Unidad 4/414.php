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
    <title>Listado de Series</title>
</head>
<body>
    <h1>Listado de Series</h1>
    <ul>
        <li>Lost</li>
        <li>The Walking Dead</li>
        <li>The Big Bang Theory</li>
    </ul>

	<p><a href="412.php">Ir al listado de Películas</a></p>
    <p><a href="413.php">Cerrar sesión</a></p>
</body>
</html>

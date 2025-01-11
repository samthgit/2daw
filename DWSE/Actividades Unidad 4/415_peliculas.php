<?php
session_start();

if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {

    header("Location: 410.php");
    exit();
}

$peliculas = isset($_SESSION['peliculas']) ? $_SESSION['peliculas'] : [];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listado de Películas</title>
</head>
<body>
    <h1>Listado de Películas</h1>
    
    <?php if (count($peliculas) > 0): ?>
        <ul>
            <?php foreach ($peliculas as $pelicula): ?>
                <li><?php echo $pelicula; ?></li>
            <?php endforeach; ?>
        </ul>
    <?php else: ?>
        <p>No hay películas disponibles.</p>
    <?php endif; ?>

    <p><a href="415_series.php">Ir al listado de Series</a></p>
    <p><a href="415_logout.php">Cerrar sesión</a></p>
</body>
</html>

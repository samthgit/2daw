<?php
session_start();

if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header("Location: 410.php");
    exit();
}

$series = isset($_SESSION['series']) ? $_SESSION['series'] : [];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listado de Series</title>
</head>
<body>
    <h1>Listado de Series</h1>
    
    <?php if (count($series) > 0): ?>
        <ul>
            <?php foreach ($series as $serie): ?>
                <li><?php echo $serie; ?></li>
            <?php endforeach; ?>
        </ul>
    <?php else: ?>
        <p>No hay series disponibles.</p>
    <?php endif; ?>

    <p><a href="412peliculas.php">Ir al listado de Películas</a></p>
    <p><a href="415_logout.php">Cerrar sesión</a></p>
</body>
</html>

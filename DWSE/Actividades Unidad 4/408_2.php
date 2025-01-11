<?php
session_start();

$selectedColor = isset($_SESSION['bg_color']) ? $_SESSION['bg_color'] : "#ffffff";

if (isset($_GET['action']) && $_GET['action'] == 'reset') {
    session_unset();
    session_destroy();
    header("Location: 408.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ver Color Seleccionado</title>
</head>
<body style="background-color: <?php echo htmlspecialchars($selectedColor); ?>;">

    <h1>Color seleccionado: <?php echo htmlspecialchars($selectedColor); ?></h1>

    <p><a href="408.php">Volver a la página anterior</a></p>
    
    <p><a href="408_2.php?action=reset">Vaciar la sesión y volver a la página anterior</a></p>

</body>
</html>

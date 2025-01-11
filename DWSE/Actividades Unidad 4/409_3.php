<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $_SESSION['convivientes'] = $_POST['convivientes'];
    $_SESSION['aficiones'] = isset($_POST['aficiones']) ? $_POST['aficiones'] : [];
    $_SESSION['menus'] = isset($_POST['menus']) ? $_POST['menus'] : [];
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario 409_3</title>
</head>
<body>
    <ul>
        <li><strong>Nombre:</strong> <?php echo htmlspecialchars($_SESSION['nombre']); ?></li>
        <li><strong>Apellidos:</strong> <?php echo htmlspecialchars($_SESSION['apellidos']); ?></li>
        <li><strong>Email:</strong> <?php echo htmlspecialchars($_SESSION['email']); ?></li>
        <li><strong>Sexo:</strong> <?php echo htmlspecialchars($_SESSION['sexo']); ?></li>
        <li><strong>Número de Convivientes:</strong> <?php echo htmlspecialchars($_SESSION['convivientes']); ?></li>
        <li><strong>Aficiones:</strong> <?php echo htmlspecialchars(implode(", ", $_SESSION['aficiones'])); ?></li>
        <li><strong>Menú Favorito:</strong> <?php echo htmlspecialchars(implode(", ", $_SESSION['menus'])); ?></li>
    </ul>
</body>
</html>

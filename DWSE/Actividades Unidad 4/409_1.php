<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario 409_1</title>
</head>
<body>
    <form action="409_2.php" method="post">
        Nombre: <input type="text" name="nombre" required><br>
        Apellidos: <input type="text" name="apellidos" required><br>
        Email: <input type="email" name="email" required><br>
        Sexo:
        <input type="radio" name="sexo" value="hombre" required>Hombre
        <input type="radio" name="sexo" value="mujer">Mujer
        <input type="radio" name="sexo" value="otro">Otro<br><br>
        <input type="submit" value="Continuar">
    </form>
</body>
</html>

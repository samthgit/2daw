<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $_SESSION['nombre'] = $_POST['nombre'];
    $_SESSION['apellidos'] = $_POST['apellidos'];
    $_SESSION['email'] = $_POST['email'];
    $_SESSION['sexo'] = $_POST['sexo'];
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario 409_2</title>
</head>
<body>
    <form action="409_3.php" method="post">
        Número de convivientes en el domicilio: <input type="number" name="convivientes" min="0" required><br>
        
        Aficiones:
        <input type="checkbox" name="aficiones[]" value="Leer">Leer
        <input type="checkbox" name="aficiones[]" value="Jugar Videojuegos">Jugar videojuegos
        <input type="checkbox" name="aficiones[]" value="Hacer Ejercicio">Hacer ejercicio
        <input type="checkbox" name="aficiones[]" value="Andar">Andar<br>

        Menú favorito:
        <select name="menus[]" multiple required>
            <option value="Vegetariano">Vegetariano</option>
            <option value="Vegano">Vegano</option>
            <option value="Carnívoro">Carnívoro</option>
            <option value="Omnívoro">Omnívoro</option>
        </select><br><br>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>

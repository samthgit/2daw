<?php
$colorCookie = "bg_color";
$cookieExpiration = time() + 86400;

if (isset($_POST['color'])) {
    $selectedColor = $_POST['color'];
    setcookie($colorCookie, $selectedColor, $cookieExpiration);
} else {
    $selectedColor = isset($_COOKIE[$colorCookie]) ? $_COOKIE[$colorCookie] : "#ffffff";
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>407.php</title>
</head>
<body style="background-color: <?php echo htmlspecialchars($selectedColor); ?>;">

    <h1>Selecciona el color de fondo de la página - Cookies</h1>
    
    <form method="post">
        <label for="color">Elige un color:</label>
        <select name="color" id="color">
            <option value="#ffffff" <?php echo $selectedColor == "#ffffff" ? "selected" : ""; ?>>Blanco</option>
            <option value="#f28b82" <?php echo $selectedColor == "#f28b82" ? "selected" : ""; ?>>Rojo Claro</option>
            <option value="#fbbc04" <?php echo $selectedColor == "#fbbc04" ? "selected" : ""; ?>>Amarillo</option>
            <option value="#34a853" <?php echo $selectedColor == "#34a853" ? "selected" : ""; ?>>Verde</option>
            <option value="#4285f4" <?php echo $selectedColor == "#4285f4" ? "selected" : ""; ?>>Azul</option>
            <option value="#f9f9f9" <?php echo $selectedColor == "#f9f9f9" ? "selected" : ""; ?>>Gris Claro</option>
        </select>
        
        <button type="submit">Guardar Color</button>
    </form>

</body>
</html>

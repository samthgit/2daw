<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Formulario 403</title>
</head>
<body>
<form action="402.php" method="POST">
Nombre: <input type="text" name="nombre" required><br>
Apellidos: <input type="text" name="apellidos" required><br>
Email: <input type="email" name="email" required><br>
Sexo:
<input type="radio" name="sexo" value="hombre" required>Hombre
<input type="radio" name="sexo" value="mujer">Mujer
<input type="radio" name="sexo" value="otro">Otro<br>
Número de convivientes en el domicilio: <input type="number" name="convivientes" min="0"><br>
Aficiones:
<input type="checkbox" name="aficiones[]" value="Leer" required>Leer
<input type="checkbox" name="aficiones[]" value="Jugar Videojuegos">Jugar videojuegos
<input type="checkbox" name="aficiones[]" value="Hacer Ejercicio">Hacer ejercicio
<input type="checkbox" name="aficiones[]" value="Andar">Andar<br>
Menú favorito:
<select name="menus[]" multiple="true" required>
<option value="Vegetariano">Vegetariano</option>
<option value="Vegano">Vegano</option>
<option value="Carnívoro">Carnívoro</option>
<option value="Omnívoro">Omnívoro</option>
</select><br><br>
<input type="submit" value="Enviar">
</form>
</body>
</html>
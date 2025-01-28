<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>608registro.php</title>
	</head>
	<body>
		<h1>Formulario de Registro</h1>
		<!-- Formulario sencillo que enviará los datos introducidos
		a la página controlador 608nuevoUsuario.php para que procese
		la inserción del mismo en la tabla -->
		<form action="608nuevoUsuario.php" method="POST" name="userForm" id="userForm">
			<label for="name">Nombre: </label>
			<input type="text" name="name" id="name" required><br><br>
			<label for="user">Usuario: </label>
			<input type="text" name="user" id="user" required><br><br>
			<label for="passwd">Contraseña: </label>
			<input type="password" name="passwd" id="passwd" required><br><br>
			<label for="email">Email:</label>
			<input type="email" name="email" id="email" required><br><br>
			
			<input type="submit" name="subButt" id="subButt" value="Insertar"><br><br>
		</form>
	</body>
</html>
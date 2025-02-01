<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="formulario">
    	<h3>6.6.3.1 Formulario de Login</h3>
		<form class="f1" action="login.php" method="post">
        	<div class="form-group">
        		<label for="usuario">Usuario: </label>
        		<input type="text" name="usuario" id="usuario" minlength="5" maxlength="10" required>
   			</div>
    		<div class="form-group">
        		<label for="contrasena">Contraseña: </label>
        		<input type="password" name="contrasena" id="contrasena" minlength="5" maxlength="10" required>
    		</div>
    		<div class="form-group">
        		<input type="submit" id="env" value="COMPROBAR USUARIO Y CONTRASEÑA">
    		</div>
        </form>
    </div>
</body>
</html>
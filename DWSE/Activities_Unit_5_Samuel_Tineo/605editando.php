<?php
$servername = "localhost";
$username = "samuel";
$password = "tineo";
$dbname = "lol";
        
$conn = mysqli_connect($servername, $username, $password, $dbname);
        
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
/*
 * Como vimos anteriormente, almacenamos el id del campeón de la tabla.
 * Ahora lo usaremos para darle valor a la variable $id mediante una pequeña comprobación
 */ 

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
/*
 * En caso de la id sea válida haremos una consulta para seleccionar al campeón correspondiente.
 * Posteriormente almacenamos todos sus datos en distintas variables que usaremos para rellenar
 * el formulario que se presentará al usuario por pantalla.
 */
if ($id > 0) {
    $sql = "SELECT id, nombre, rol, dificultad, descripcion FROM campeon WHERE id = $id";
    $result = mysqli_query($conn, $sql);
    
    if ($row = mysqli_fetch_assoc($result)) {
        $nombre = $row['nombre'];
        $rol = $row['rol'];
        $dificultad = $row['dificultad'];
        $descripcion = $row['descripcion'];
    }
} else {
    die("No se encontró el campeón.");
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Editar campeón</title>
	</head>
	<body>
		<h1>Editar campeón</h1>
		<!-- Creamos nuestro formulario, yo he hecho que mande los datos a una página
		controlador auxiliar llamada 6--guardar.php en la que simplemente se procesarán los datos y
		se dará el visto bueno o no -->
		<!-- Aquí es donde hacemos uso de las variables que hemos almacenado anteriormente, ya que
		vamos a rellenar el atributo value de cada input con la variable correspondiente embebiendo
		directamente código php haciendo un echo de estas (para el textarea hay que ponerlo como contenido
		de la etiqueta)-->
		<form action="6--guardar.php" method="POST" name="editForm" id="editForm">
			<label for="id">ID: </label>
			<!-- He considerado que el id no es algo que se deba poder modificar, por
			lo que se le ha dado el atributo de readonly, que nos permite visualizar el contenido
			del elemento, pero no modificarlo-->
			<input type="number" name="id" id="id" value="<?php echo $id; ?>" readonly><br><br>
			<label for="nombre">Nombre: </label>
			<input type="text" name="nombre" id="nombre" value="<?php echo $nombre; ?>"><br><br>			
			<label for="rol">Rol: </label>
			<input type="text" name="rol" id="rol" value="<?php echo $rol; ?>"><br><br>
			<label for="dificultad">Dificultad: </label>
			<input type="text" name="dificultad" id="dificultad" value="<?php echo $dificultad; ?>"><br><br>
			<label for="descripcion">Descripción: </label>
			<textarea name="descripcion" id="descripcion" rows="5" cols="50"><?php echo $descripcion; ?></textarea><br><br>
			<input type="submit" name="guardar" id="guardar" value="Guardar"><br><br>
		</form>
	</body>
</html>
<?php
/*
 * En caso de haberle dado por equivocación o de arrepentirse de la modificación
 * se ofrece un enlace de vuelta a la tabla
 */
echo "<a href='606campeones.php'>Volver a la lista de campeones</a>";

?>
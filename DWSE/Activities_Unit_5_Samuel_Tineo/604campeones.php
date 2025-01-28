<?php
$servername = "localhost";
$username = "samuel";
$password = "tineo";
$dbname = "lol";
        
$conn = mysqli_connect($servername, $username, $password, $dbname);
        
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// Seleccionamos los elementos que después mostraremos en forma de tabla
$sql = "SELECT id, nombre, rol, dificultad, descripcion FROM campeon";
$result = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<!-- Creamos un documento html para que la tabla sea más fácil de crear -->
<html>
	<head>
		<meta charset="UTF-8">
		<title>604campeones</title>
		<link rel="stylesheet" href="styles.css">
	</head>
	<body>
        <?php
        /*
         * Comprobamos que efectivamente la tabla tenga ocurrencias.
         * Si es así creamos nuestra tabla y los encabezados.
         */
        if (mysqli_num_rows($result) > 0) {
            echo "<table>";
            echo "
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Dificultad</th>
                <th>Descripción</th>
            </tr>";
            /*
             * Aquí haremos uso de un bucle while para ir mostrando todos
             * los elementos de cada fila, que vienen en forma de array asociativo
             */
            while($row = mysqli_fetch_assoc($result)) {
                echo "<tr><td>" . $row['id'] . "</td>
                    <td>" . $row['nombre'] . "</td>
                    <td>" . $row['rol'] . "</td>
                    <td>" . $row['dificultad'] . "</td>
                    <td>" . $row['descripcion'] . "</td>
                    </tr>";
            }
            echo "</table>";
        } else {
            echo "No results.";
        }
        
        mysqli_close($conn);
        ?>			
	</body>
</html>
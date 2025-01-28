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
 * Elementos que pertenecen a la lógica de visualizar los elementos según el orden deseado:
 * Usamos el operador ternario para darle un valor por defecto. Luego en la sentecia
 * usamos la sentencia ORDER BY para ordenarlo según el criterio establecido en las dos
 * variables anteriores, y mostramos el resultado en la variable $resultado
 */
$campo = isset($_GET['campo']) ? $_GET['campo'] : 'id';
$orden = isset($_GET['orden']) && $_GET['orden'] === 'desc' ? 'DESC' : 'ASC';

$sql = "SELECT id, nombre, rol, dificultad, descripcion FROM campeon ORDER BY $campo $orden";
$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>606campeones</title>
		<link rel="stylesheet" href="styles.css">
		<!-- Aquí se encuentra la lógica de funcionamiento de la función de eliminación. 
		Consta simplemente de un prompt que preguntará al usuario si está seguro de querer 
		eliminar al campeón. En caso de aceptar será redirigido a una página controlador
		llamada 6--eliminar.php? + id del campeón. En la que se gestionará la eliminación 
		de la tabla del campeón-->
		<script>
			function confirmarEliminacion(id, nombre) {
                const confirmacion = confirm(`¿Estás seguro de que quieres borrar al campeón "${nombre}"?`);
                if (confirmacion) {
                    window.location.href = `6--eliminar.php?id=${id}`;
                }
            }
		</script>
	</head>
	<body>
        <?php
        /*
         * Aquí es donde efectuaremos nuestro alert de javascript al volver de 6--guardar.php
         * Simplemente capturamos el valor de success en la url y dependiendo del valor lanzamos
         * un alert u otro.
         */
        if (isset($_GET['status']) && $_GET['status'] === 'success') {
            echo "<script>alert('Los cambios se han guardado correctamente.');</script>";
        } elseif (isset($_GET['status']) && $_GET['status'] !== 'success') {
            echo "<script>alert('No se pudieron guardar los cambios.');</script>";
        }
        
        if (mysqli_num_rows($result) > 0) {
            echo "<table>";
            /*
             * Aquí tenemos los elementos del encabezado que recargarán la página con la información
             * del campo correspondiente en la URL. Así, las variables mencionadas arriba (líneas 18 y 19)
             * podrán almacenar los datos correspondientes y disponer los elementos de la tabla según convenga
             */
            echo "
            <tr>
                <th>ID  <a href='?campo=id&orden=asc'><button>˄</button></a> <a href='?campo=id&orden=desc'><button>˅</button></a></th>
                <th>Nombre  <a href='?campo=nombre&orden=asc'><button>˄</button></a> <a href='?campo=nombre&orden=desc'><button>˅</button></a></th>
                <th>Rol  <a href='?campo=rol&orden=asc'><button>˄</button></a> <a href='?campo=rol&orden=desc'><button>˅</button></a></th>
                <th>Dificultad  <a href='?campo=dificultad&orden=asc'><button>˄</button></a> <a href='?campo=dificultad&orden=desc'><button>˅</button></a></th>
                <th>Descripción  <a href='?campo=descripcion&orden=asc'><button>˄</button></a> <a href='?campo=descripcion&orden=desc'><button>˅</button></a></th>
                <th></th>
                <th></th>
            </tr>";
            /*
             * El botón de editar almacena la id del campeón correspondiente en la url, luego la usaremos
             * para buscar su información y mostrar el formulario relleno.
             */
            /*
             * Por su parte, al botón se le ha asignado en evento in-line de onclick que toma como parámetros
             * el id y el nombre del campeón correspondiente. Estos los usaremos para crear un prompt que pregunte
             * al usuario al clicar en el botón de eliminar. La lógica de la función se encuentra más arriba en este código.
             */
            while($row = mysqli_fetch_assoc($result)) {
                echo "<tr><td>" . $row['id'] . "</td>
                    <td>" . $row['nombre'] . "</td>
                    <td>" . $row['rol'] . "</td>
                    <td>" . $row['dificultad'] . "</td>
                    <td>" . $row['descripcion'] . "</td>
                    <td><a href='605editando.php?id=" . $row['id'] . "'><button class='editar'>Editar</button></a></td>
                    <td><a><button class='eliminar' onclick='confirmarEliminacion(" . $row['id'] . ", \"" . $row['nombre'] . "\")'>Eliminar</button></a></td>
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
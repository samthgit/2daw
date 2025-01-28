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
 * Introducimos varios elementos a nuestra tabla usando
 * la sentencia INSERT INTO () VALUES (). Además uniremos 
 * estos elementos en una misma variable usando el 
 * operador de concatenación '.'
 */
$sql = "INSERT INTO campeon (id, nombre, rol, dificultad, descripcion)
VALUES (1, 'Fizz', 'Asesino / Luchador', 'Media', 'Fizz es un yordle anfibio que habita entre los arrecifes de alrededor de Aguas Estancadas.');";
$sql .= "INSERT INTO campeon (id, nombre, rol, dificultad, descripcion)
VALUES (2, 'Amumu', 'Tanque / Asistencia', 'Baja', 'Cuenta la leyenda que Amumu es un alma solitaria y melancólica de la vieja Shurima que vaga por el mundo en busca de un amigo');";
$sql .= "INSERT INTO campeon (id, nombre, rol, dificultad, descripcion)
VALUES (3, 'Fiddlesticks', 'Mago / Asistencia', 'Alta', 'Temed el graznido del cuervo, el susurro de esa silueta que parece casi humana... Fiddlesticks ha regresado.');";
$sql .= "INSERT INTO campeon (id, nombre, rol, dificultad, descripcion)
VALUES (4, 'Zoe', 'Mago', 'Media', 'Como personificación de la travesura, de la imaginación y del cambio, Zoe es la mensajera cósmica de Targon y anuncia acontecimientos importantes que remodelan mundos.');";
$sql .= "INSERT INTO campeon (id, nombre, rol, dificultad, descripcion)
VALUES (5, 'Kindred', 'Tirador', 'Media', 'Divididos, pero nunca separados, Kindred representan las dos esencias de la muerte.');";

// Esta vez usaremos mysqli_multi_query() para verificar todas las inserciones
if (mysqli_multi_query($conn, $sql)) {
    echo "Las inserciones se guardaron correctamente";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_errno($conn);
}

mysqli_close($conn);
?>
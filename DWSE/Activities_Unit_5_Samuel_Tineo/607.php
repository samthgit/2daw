<?php
// 601.php
/*
 * Empezamos de nuevo. El proceso es el mismo, pero esta vez usando la
 * sintaxis propia de PDO
 */
$servername = "localhost";
$username = "samuel";
$password = "tineo";

/*
 * Esto es, escribir todo el proceso en un try-catch, establecer la conexión
 * con un objeto PDO en el que almacenamos las variables del servidor, usuario y contraseña.
 * Luego establecemos el modo de error de la conexión y ejecutamos la sentencia sql.
 * Por último, en el catch mostraremos el mensaje de error y acabamos cerrando la conexión
 */
try {
    $conn = new PDO("mysql:host=$servername", $username, $password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE DATABASE lol";

    $conn->exec($sql);
    echo "La base de datos se creó con éxito<br>";
} catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>

<?php 
// 602.php

$servername = "localhost";
$username = "samuel";
$password = "tineo";
$dbname = "lol";

try {
    $conn = new PDO("mysql:host=$servername", $username, $password);
    /*
     * Aquí tuve que hacer uso de la manera explícita de conectarse
     * a la base de datos, porque de la otra manera (junto al host en el objeto PDO)
     * no funcionaba.
     */
    $conn->exec("USE $dbname");
    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Creamos la tabla
    $sql = "CREATE TABLE campeon (
    id INT(5) PRIMARY KEY,
    nombre VARCHAR(50),
    rol VARCHAR(50),
    dificultad VARCHAR(50),
    descripcion VARCHAR(250)
    )";
    
    $conn->exec($sql);
    echo "La tabla campeon se creó con éxito.";
} catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>

<?php 
// 603.php

$servername = "localhost";
$username = "samuel";
$password = "tineo";
$dbname = "lol";

try {
    $conn = new PDO("mysql:host=$servername", $username, $password);
    $conn->exec("USE $dbname");
    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Insertamos los datos en nuestra tabla
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
    
    $conn->exec($sql);
    echo "Las inserciones se guardaron correctamente.";
} catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
<?php
$servername = "localhost";
$username = "samuel";
$password = "tineo";
$dbname = "lol";

try {
    $conn = new PDO("mysql:host:$servername", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->exec("USE $dbname");
    // Creamos una nueva tabla llamada 'usuario'
    $sql = "CREATE TABLE usuario (
    id INT(5) AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(25), 
    usuario VARCHAR(25), 
    password VARCHAR(75), 
    email VARCHAR(100)
    )";
    
    $conn->exec($sql);
    /*
     * Preparmos una plantilla que usaremos posteriormente
     * para añadir ocurrencias a la nueva tabla
     */
    $stmt = $conn->prepare("INSERT INTO usuario (nombre, usuario, password, email)
    VALUES (:nombre,:usuario, :password, :email)");
    /*
     * Para hacer el trabajo más sencillo y no repetir código, metemos todos los datos
     * de los usuarios en un array de arrays asociativos, de esta manera solo hay que recorrer
     * cada elemento y solo haremos bind una vez por dato
     */
    $usuarios = [
        ['nombre' => 'Carlos Ramírez', 'usuario' => 'carlos123', 'password' => 'passCarlos!', 'email' => 'carlos.ramz98@example.com'],
        ['nombre' => 'Lucía Pérez', 'usuario' => 'lucia_p', 'password' => 'luciaPass2023', 'email' => 'luci452p@example.com'],
        ['nombre' => 'Manuel Torres', 'usuario' => 'manuelt', 'password' => 'manuel_88', 'email' => 'torresmanuel.@example.com']
    ];
    /*
     * Aquí tenemos el foreach que usaremos para recorrer el array y unir los datos a nuestra plantilla.
     * No sin antes cifrar la contraseña introducida usando la función password_hash().
     */
    foreach ($usuarios as $usuario) {
        $passwordCifrada = password_hash($usuario['password'], PASSWORD_DEFAULT);
    
        $stmt->bindParam(':nombre', $usuario['nombre']);
        $stmt->bindParam(':usuario', $usuario['usuario']);
        $stmt->bindParam(':password', $passwordCifrada);
        $stmt->bindParam(':email', $usuario['email']);
        
        $stmt->execute();
    }
    
    echo "Usuarios insertados correctamente";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
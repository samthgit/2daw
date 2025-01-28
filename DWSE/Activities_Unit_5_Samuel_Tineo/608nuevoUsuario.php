<?php
$servername = "localhost";
$username = "samuel";
$password = "tineo";
$dbname = "lol";

try {
    $conn = new PDO("mysql:host:$servername", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->exec("USE $dbname");
    /*
     * La prmera comprobación que hacemos es si se accede a la página
     * a través del método post, es decir, a través del formulario.
     * Si no, simplemente se muestra un mensaje denegando el acceso
     */
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Aquí almacenamos el valor de cada variable usando lo escrito en el formulario
        $nombre = trim($_POST['name']);
        $usuario = trim($_POST['user']);
        $contrasena = trim($_POST['passwd']);
        $email = trim($_POST['email']);
        /*
         * Ahora haremos una segunda comprobación; ningún campo debe estar vacío.
         * En caso de que alguno esté vacío, se mostrará un mensaje por pantalla.
         */
        if (empty($nombre) || empty($usuario) || empty($contrasena) || empty($email)) {
            echo "Debe rellenar todos los campos.";
        } else {
            /*
             * Si hemos conseguido sortear todas las validaciones solo queda una cosa por hacer;
             * introducir el nuevo usuario en la base de datos. Para ello volvemos a la plantilla
             * de INSERT INTO ... VALUES ...
             */
            $stmt = $conn->prepare("INSERT INTO usuario (nombre, usuario, password, email)
            VALUES (:nombre, :usuario, :password, :email)");
            // Ciframos la contraseña
            $contrasenaCifrada = password_hash($contrasena, PASSWORD_DEFAULT);
            // Unimos las variables con la plantilla
            $stmt->bindParam(':nombre', $nombre);
            $stmt->bindParam(':usuario', $usuario);
            $stmt->bindParam(':password', $contrasenaCifrada);
            $stmt->bindParam(':email', $email);
            
            $stmt->execute();
            /*
             * Al terminar el proceso mostramos un mensaje en el que se ve el usuario
             * y la contraseña del mismo
             */
            echo "El usuario '$usuario' ha sido introducido en el sistema con la contraseña '$contrasena'.";
            /*
             * Aquí decidí hacer un pequeño script que simplemente hace que a los cinco
             * segundos de mostrar el mensaje se redirige automáticamente al usuario
             * a la página de registro, ya que técnicamente se encuentra en una página 
             * a la que no debería tener acceso.
             */
            echo "<script>
                    setTimeout(function () {
                        window.location.href = '608registro.php';
                    }, 5000);
                </script>";
        }
        
    } else {
        echo "Acceso prohibido. Por favor regístrese primero.";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
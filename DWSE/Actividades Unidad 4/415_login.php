<?php
session_start();

include 'usuarios.php';

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (isset($usuarios[$username])) {
        if ($password === $usuarios[$username]) {
            $_SESSION['logged_in'] = true;
            $_SESSION['username'] = $username;
            
            $_SESSION['peliculas'] = ["Ben-Hur", "Titanic", "El Señor de los Anillos: El Retorno del Rey"];
            $_SESSION['series'] = ["Lost", "The Walking Dead", "The Big Bang Theory"];

            header("Location: 412.php");
            exit();
        } else {
            echo "Usuario o contraseña incorrectos. <a href='410.php'>Intentar nuevamente</a>";
        }
    } else {
        echo "Usuario o contraseña incorrectos. <a href='410.php'>Intentar nuevamente</a>";
    }
} else {
    echo "Por favor ingresa tus credenciales. <a href='410.php'>Intentar nuevamente</a>";
}
?>

<?php 
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

if ($usuario == "admin" && $contrasena == "123456") {
    echo "<img src='https://raw.githubusercontent.com/twbs/icons/main/icons/hand-thumbs-up.svg' width='100'>";
    echo "<p>¡Perfecto! :-)</p><p>Haz clic <a href=" . $_SERVER['HTTP_REFERER'] . ">aquí</a> para ir a la página anterior</p>";
} else {
    echo "<img src='https://raw.githubusercontent.com/twbs/icons/main/icons/hand-thumbs-down.svg' width='100'>";
    echo "<p>¡Usuario o contraseña incorrectos! :-(</p><p>Haz clic <a href=" . $_SERVER['HTTP_REFERER'] . ">aquí</a> para probar de nuevo</p>";
}
?>
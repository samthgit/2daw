<?php

$cookieName = "visit_count";
$resetParam = "reset";
$cookieExpiration = time() + (86400 * 30);

if (isset($_GET[$resetParam])) {
    setcookie($cookieName, "", time() - 3600);
    echo "El contador de visitas ha sido reiniciado.";
} else {
    if (isset($_COOKIE[$cookieName])) {
        $visitCount = $_COOKIE[$cookieName] + 1;
        setcookie($cookieName, $visitCount, $cookieExpiration);
        echo "Has visitado esta página $visitCount veces.";
    } else {
        $visitCount = 1;
        setcookie($cookieName, $visitCount, $cookieExpiration);
        echo "¡Bienvenido! Esta es tu primera visita.";
    }
}
?>

<p><a href="?reset=true">Reiniciar contador de visitas</a></p>
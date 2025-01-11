<?php
echo "<h1>Valores de \$_SERVER</h1>";
echo "<pre>";
print_r($_SERVER);
echo "</pre>";

echo "<h1>Valor de HTTP_REFERER:</h1>";
if (isset($_SERVER['HTTP_REFERER'])) {
    echo $_SERVER['HTTP_REFERER'];
} else {
    echo "No se encontró HTTP_REFERER.";
}
?>

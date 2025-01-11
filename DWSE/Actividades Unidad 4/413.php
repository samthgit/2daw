<?php
session_start();

session_unset();
session_destroy();

header("Location: 410.php");
exit();
?>

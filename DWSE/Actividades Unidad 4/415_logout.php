<?php
session_start();

session_unset();
session_destroy();

header("Location: 415_form.php");
exit();
?>

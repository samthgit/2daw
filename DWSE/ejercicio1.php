<?php
$frase = "Ligar es ser agil";

function palindrome($frase) {
    $fraseMod = strtolower($frase).str_replace(' ', '', $frase);
    $inv = strrev($fraseMod);
    return $fraseMod == $inv;
}

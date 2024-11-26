<?php
echo "Hola Mundo! 🌎";
?>
<?= "Me llamo Jaime" ?>
<?php
$nombre = "Jaime";
$fdn    = new DateTime("1987-08-21");
$altura = 1.76;
$casado = true;

define("PI", 3.14159);
?>

<h1><?= $nombre ?></h1>

<h3><?= $fdn->format("d/M/Y h:i:s") ?></h3>
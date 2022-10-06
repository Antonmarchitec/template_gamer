<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.css">
    <title>Document</title>
</head>
<body>
    <main class="main_container">
        <div class="container">
            <figure class="container_img">
                <img src="./img/ada.png" alt="ada" width="100%" height="100%">
            </figure>
            <h1 class="container_mensaje"> Mensaje enviado con exito. </h1>
            <hr class="container_linea">
            <a href="index.html"><h2 class="container_regresar"> Regresar </h2></a>
        </div>
    </main>
</body>
</html>








<?php
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
/*$telefono = $_POST['celular'];*/
$comentario = $_POST['comentario'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
/*$mensaje .= "Telefono de contacto: " . $telefono . " \r\n";*/
$mensaje .= "Mensaje: " . $_POST['comentario'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

//$para = 'contacto@antomdeveloper.com';
$para = 'antomgameaps@gmail.com';
$asunto = 'Posibles clientes de AntomGame';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:enviar.html");
?>
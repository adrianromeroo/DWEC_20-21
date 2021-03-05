<?php
header("Content-Type: application/json; charset=latin1");

define('DB_SERVER', 'mariadb');
define('DB_USERNAME', 'dwec');
define('DB_PASSWORD', 'dwec');
define('DB_NAME', 'dwec');

$conexion = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
$conexion->set_charset("latin1");

if ($conexion->connect_error) {
    $error = "Error en la conexion : "  . $conexion->connect_error;
    echo json_encode($error);
    exit(1);
}

$id_film =  "";
$error = "";

if (($request = file_get_contents('php://input')) && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode($request, false);

    // Validar id_film
    if (empty(trim($data->id_film))) {
        $error = $error . "Introduzca el id_film";
    } else {
        $id_film = trim($data->id_film);
    }

    if (empty($error)) {
        $sql = 'SELECT `ghibli_people`.`name`, `ghibli_people`.`gender`, `ghibli_people`.`age`, `ghibli_people`.`eye_color`, `ghibli_people`.`hair_color` FROM ((`ghibli_people_films` INNER JOIN `ghibli_people` ON `ghibli_people_films`.`id_people` = `ghibli_people`.`id`) INNER JOIN `ghibli_films` ON `ghibli_people_films`.`id_film` = `ghibli_films`.`id`) WHERE `ghibli_films`.`id` = "' . $id_film . '";';

        $resultado = $conexion->query($sql);

        $salida = array();

        if ($resultado && $resultado->num_rows > 0) {
            $salida =  $resultado->fetch_all(MYSQLI_ASSOC);
        }

        echo json_encode($salida);
        $conexion->close();
        exit(1);
    } else {
        echo json_encode($error);
        exit(1);
    }
}

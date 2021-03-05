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

$id = $title = $description = $director = "";
$producer = $release_date = $rt_score = $url = "";
$error = "";

// Procesar datros cuando se realiza la petición
if (($request = file_get_contents('php://input')) && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $people = json_decode($request, false);

    foreach ($people as $data) {

        // Validar id
        if (empty(trim($data->id))) {
            $error = $error . "Introduzca el id del film";
        } else {
            $id = trim($data->id);
        }

        // Validar title
        if (empty(trim($data->title))) {
            $error = "Introduzca el title del film.";
        } else {
            $title = trim($data->title);
        }

        // Validar description
        if (empty(trim($data->description))) {
            $error = $error . "Introduzca la description del film.";
        } else {
            $description = trim($data->description);
        }

        // Validar director
        if (empty(trim($data->director))) {
            $error = $error . "Introduzca el director del film.";
        } else {
            $director = trim($data->director);
        }

        // Validar producer
        if (empty(trim($data->producer))) {
            $error = $error . "Introduzca el producer del film.";
        } else {
            $producer = trim($data->producer);
        }

        // Validar release_date
        if (empty(trim($data->release_date))) {
            $error = $error . "Introduzca la release date del film.";
        } else {
            $release_date = trim($data->release_date);
        }

        // Validar rt_score
        if (empty(trim($data->rt_score))) {
            $error = $error . "Introduzca la rt_score del film.";
        } else {
            $rt_score = trim($data->rt_score);
        }

        // Validar url
        if (empty(trim($data->url))) {
            $error = $error . "Introduzca la url del film.";
        } else {
            $url = trim($data->url);
        }

        // Si no hay errores, procedemos a insertar en la BD
        if (empty($error)) {
            // Preparar la sentencia
            $sql = "REPLACE INTO `ghibli_films` (`id`, `title`, `description`, `director`, `producer`, `release_date`, `rt_score`, `url`) VALUES (?,?,?,?,?,?,?,?)";

            if ($stmt = $conexion->prepare($sql)) {
                // Enlaza las variables a los parámetros
                $stmt->bind_param(
                    'sssssiis',
                    $param_id,
                    $param_title,
                    $param_description,
                    $param_director,
                    $param_producer,
                    $param_release_date,
                    $param_rt_score,
                    $param_url,
                );

                // Establecer los parámetros
                $param_id = $id;
                $param_title = $title;
                $param_description = $description;
                $param_director = $director;
                $param_producer = $producer;
                $param_release_date = $release_date;
                $param_rt_score = $rt_score;
                $param_url = $url;

                // Ejecutar la sentencia
                if (!$stmt->execute()) {
                    // Ha habido algún error. Devolver json con error de insercion en BD
                    $error = $stmt->error;
                    echo json_encode($error);
                    exit(1);
                }
            } else {
                $error = "Error al preparar la sentencia";
                echo json_encode($error);
                exit(1);
            }
            // Cerramos la sentencia y la conexion
            mysqli_stmt_close($stmt);
        } else {
            echo json_encode($error);
            exit(1);
        }
    }

    // Se han ejecutado todas las inserciones correctamente

    // Se ha creado corretamente, devolver json con "ok"
    $sql = "SELECT `id`, `title`, `description`, `director`, `producer`, `release_date`, `rt_score`, `url` FROM `ghibli_films`";

    $resultado = $conexion->query($sql);

    $salida = array();

    if ($resultado && $resultado->num_rows > 0) {
        $salida =  $resultado->fetch_all(MYSQLI_ASSOC);
    }

    echo json_encode($salida);
    exit(1);
} else {
    $error = "No es un metodo post";
    echo json_encode($error);
}

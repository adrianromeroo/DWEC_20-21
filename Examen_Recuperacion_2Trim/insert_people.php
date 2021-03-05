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
    $films = json_decode($request, false);

    foreach ($films as $data) {

        // Validar age
        $age = trim($data->age);

        // Validar id
        if (empty(trim($data->id))) {
            $error = $error . "Introduzca el id del personaje";
        } else {
            $id = trim($data->id);
        }

        // Validar name
        if (empty(trim($data->name))) {
            $error = "Introduzca el name del personaje.";
        } else {
            $name = trim($data->name);
        }

        // Validar gender
        if (empty(trim($data->gender))) {
            $error = $error . "Introduzca el gender del personaje.";
        } else {
            $gender = trim($data->gender);
        }

        // Validar eye_color
        if (empty(trim($data->eye_color))) {
            $error = $error . "Introduzca el eye_color del personaje.";
        } else {
            $eye_color = trim($data->eye_color);
        }

        // Validar hair_color
        if (empty(trim($data->hair_color))) {
            $error = $error . "Introduzca el hair_color del personaje.";
        } else {
            $hair_color = trim($data->hair_color);
        }

        // Si no hay errores, procedemos a insertar en la BD
        if (empty($error)) {
            // Preparar la sentencia
            $sql = "REPLACE INTO `ghibli_people` (`id`, `name`, `gender`, `age`, `eye_color`, `hair_color`) VALUES (?,?,?,?,?,?)";

            if ($stmt = $conexion->prepare($sql)) {
                // Enlaza las variables a los parámetros
                $stmt->bind_param(
                    'sssiss',
                    $param_id,
                    $param_name,
                    $param_gender,
                    $param_age,
                    $param_eye_color,
                    $param_hair_color,
                );

                // Establecer los parámetros
                $param_id = $id;
                $param_name = $name;
                $param_gender = $gender;
                $param_age = $age;
                $param_eye_color = $eye_color;
                $param_hair_color = $hair_color;

                // Ejecutar la sentencia
                if (!$stmt->execute()) {
                    // Ha habido algún error. Devolver json con error de insercion en BD
                    $error = "Error al insertar en la BD";
                    echo json_encode($error);
                    exit(1);
                } else {
                    // Insertamos las referencias con los films

                    foreach ($data->films as $film) {

                        $sql_2 = "REPLACE INTO `ghibli_people_films` (`id_people`, `id_film`) VALUES (?,?)";

                        if ($stmt_2 = $conexion->prepare($sql_2)) {
                            // Enlaza las variables a los parámetros
                            $stmt_2->bind_param(
                                'ss',
                                $param_id_people,
                                $param_id_film,
                            );

                            // Establecer los parámetros
                            $param_id_people = $id;
                            $param_id_film = str_replace("https://ghibliapi.herokuapp.com/films/", "", $film);

                            // Ejecutar la sentencia
                            if (!$stmt_2->execute()) {
                                // Ha habido algún error. Devolver json con error de insercion en BD
                                $error = $stmt_2->error;
                                echo json_encode($error);
                                exit(1);
                            }
                        }
                    }
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

        // TODO. Insertar en la otra tabla para relacionarlo con los films
    }

    // Se han ejecutado todas las inserciones correctamente
    $sql = "SELECT `id`, `name`, `gender`, `age`, `eye_color`, `hair_color` FROM `ghibli_people`";

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

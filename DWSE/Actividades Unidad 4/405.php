<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
        $fileTmpPath = $_FILES['file']['tmp_name'];
        $fileName = $_FILES['file']['name'];
        $fileSize = $_FILES['file']['size'];
        $fileType = $_FILES['file']['type'];
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (in_array($fileType, $allowedTypes)) {

            $width = filter_input(INPUT_POST, 'width', FILTER_VALIDATE_INT);
            $height = filter_input(INPUT_POST, 'height', FILTER_VALIDATE_INT);

            if ($width && $height && $width > 0 && $height > 0) {
                $uploadFileDir = './uploads/';
                $destPath = $uploadFileDir . $fileName;

                if (move_uploaded_file($fileTmpPath, $destPath)) {
                    echo "El archivo se subió correctamente.<br>";
                    echo "Dimensiones solicitadas: {$width}x{$height}";
                } else {
                    echo "Ocurrió un error al mover el archivo.";
                }
            } else {
                echo "Las dimensiones ingresadas no son válidas.";
            }
        } else {
            echo "Solo se permiten archivos de tipo imagen (JPG, PNG, GIF).";
        }
    } else {
        echo "Error al subir el archivo.";
    }
} else {
    echo "Acceso no permitido.";
}
?>

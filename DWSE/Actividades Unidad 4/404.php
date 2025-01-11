<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
        $fileTmpPath = $_FILES['file']['tmp_name'];
        $fileName = $_FILES['file']['name'];
        
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
        echo "Error al subir el archivo.";
    }
} else {
    echo "Acceso no permitido.";
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos del Formulario</title>
    <style>
        table {
            width: 60%;
            border-collapse: collapse;
            margin: 20px auto;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h2 style="text-align: center;">Datos Recibidos</h2>
    <table>
        <tr>
            <th>Campo</th>
            <th>Valor</th>
        </tr>
        <?php
        // Verifica si el formulario fue enviado
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            foreach ($_POST as $campo => $valor) {
                echo "<tr>";
                echo "<td>" . htmlspecialchars($campo) . "</td>";
                echo "<td>";
                
                // Verifica si el valor es un array
                if (is_array($valor)) {
                    // Convierte el array en una lista separada por comas
                    echo htmlspecialchars(implode(", ", $valor));
                } else {
                    // Muestra el valor normal
                    echo htmlspecialchars($valor);
                }
                
                echo "</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='2'>No se recibieron datos</td></tr>";
        }
        ?>
    </table>
</body>
</html>

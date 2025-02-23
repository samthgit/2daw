# LÓGICA DEL EJERCICIO

Este código simula el horario de salidas de los barcos desde el puerto de Algeciras.  
Nos podemos imaginar que somos el administrador y que, además de acceder a la lista de salidas,  
podemos añadir y modificar la información que se muestra. Para comunicarnos con la API usaremos **Axios**.

Para su realización se requiere tener instalado **Axios** en el proyecto (en el HTML tenemos el CDN)  
y además **JSON Server**.

## Instalar JSON Server
1. Instalar JSON Server con:  
   ```sh
   npm install -g json-server
   ```
2. Ejecutar JSON Server en nuestra carpeta del proyecto:  
   ```sh
   json-server --watch nombre.json --port 3000
   ```

## HTML

En el `HTML` tenemos tres secciones:

- Un **menú** con los botones que ejecutan los procesos del CRUD.
- **Formularios**, que están inicialmente ocultos, para ingresar o actualizar registros.
- **Tabla** que muestra los datos dinámicamente.

## JavaScript

En el archivo `JavaScript` encontramos los eventos que realizan llamadas a la API con cada método:

- **GET**: Recaba los datos de la API y los muestra en la tabla usando `appendChild()`.
- **POST**: Envía los datos a la API recogiendo los valores de un formulario.
- **PUT**: Pide al usuario insertar un ID y, en función de este, aparece un formulario con los datos correspondientes.
- **PATCH**: Pide un ID al usuario y abre un formulario con un `<select>` para elegir qué valor cambiar.
- **DELETE**: El usuario solo tiene que introducir el ID del elemento que desea eliminar.
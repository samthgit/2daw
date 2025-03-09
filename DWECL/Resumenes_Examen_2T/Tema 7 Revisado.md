**TEMA 7: COMUNICACIONES ASÍNCRONAS EN LA WEB**  

---

### 1. Comunicación Síncrona vs. Asíncrona  
#### 1.1. Comunicación Síncrona (Bloqueante)  
- **Definición**: El código se ejecuta secuencialmente. Una tarea debe completarse antes de iniciar la siguiente.  
- **Ejemplo**: El navegador se bloquea mientras espera la respuesta del servidor.  
- **Desventaja**: Mala experiencia de usuario, especialmente en aplicaciones dinámicas.  

#### 1.2. Comunicación Asíncrona (No Bloqueante)  
- **Definición**: El navegador ejecuta otras tareas mientras espera la respuesta del servidor.  
- **Ventajas**: Mejora la interactividad y eficiencia (ej: dashboards en tiempo real).  
- **Implementación**: Usando `fetch()`, `XMLHttpRequest` (configurado como asíncrono) o librerías como **Axios**.  

#### 1.3. Comparación  
| **Característica**       | **Síncrona**                | **Asíncrona**               |  
|--------------------------|-----------------------------|-----------------------------|  
| Ejecución                | Bloquea el flujo            | No bloquea el flujo         |  
| Interacción con la web   | Usuario inactivo            | Usuario puede seguir usando |  
| Ejemplo en AJAX          | `xhr.open("GET", url, false)` | `xhr.open("GET", url, true)` |  
| Ejemplo en `fetch()`     | No se usa (siempre asíncrono)  | `fetch("archivo.php").then(res => res.json()).then(data => console.log(data));` |  

---

### 2. AJAX y Librerías Basadas en AJAX  
#### 2.1. Introducción a AJAX  
**AJAX (Asynchronous JavaScript and XML)** es un conjunto de tecnologías que permite la comunicación con el servidor **sin necesidad de recargar la página**.   
- **Tecnologías clave**: HTML, CSS, DOM, JavaScript, XML/JSON y `XMLHttpRequest`, `fetch()` o `Axios`.  
- **Beneficios**:  
  - Actualización dinámica sin recargar la página.  
  - Reducción de tiempo de carga.  
  - Compatibilidad con servidores (PHP, Node.js, etc.).  

#### 2.2. Evolución de AJAX  
1. **XMLHttpRequest (XHR)**: Método tradicional, verboso y complejo.  
2. **Fetch**: API moderna basada en promesas, más limpia y flexible.  
3. **Axios**: Librería basada en `fetch()` con mejor manejo de errores y funcionalidades adicionales.  

---

### 4. Fetch  
`fetch()` es una implementación moderna de AJAX que reemplaza a
XMLHttpRequest, ofreciendo una sintaxis más simple y basada en promesas.  
#### 4.1. Diferencias Clave con XMLHttpRequest  
| **Característica**       | **XMLHttpRequest**          | **Fetch**                   |  
|--------------------------|-----------------------------|-----------------------------|  
| Sintaxis                 | Verbosa                     | Simplificada                |  
| Promesas                 | No nativas                  | Sí (`.then()`, `async/await`)|  
| JSON                     | Requiere `JSON.parse()`     | Automático con `response.json()` |  
| Manejo de errores        | No maneja errores HTTP fácilmente  | Más fácil con `catch()`

#### 4.2. Métodos HTTP con Fetch  
- **GET**:  
  ```javascript  
  fetch("http://localhost:3000/posts")
    .then(response => {
    console.log(` Estado de la respuesta GET:${response.status}`);
    return response.json(); // "Convertimos la respuesta JSON en un objeto JavaScript"
    })
    .then(data => console.log(" Datos recibidos:", data))
    .catch(error => console.error(" Error en GET:", error));
  ```  
- **POST**:  
  ```javascript  
  fetch("http://localhost:3000/posts", {
    method: "POST", // Método HTTP 
    headers: { "Content-Type": "application/json" }, // Indicar que enviamos JSON
    body: JSON.stringify({
      title: "Nuevo Post",
      body: "Este es el contenido del nuevo post",
      userId: 1
      })
    })
    .then(response => {
      console.log(` Estado de la respuesta POST:${response.status}`);
      return response.json();
    })
    .then(data => console.log(" POST realizado:", data))
    .catch(error => console.error(" Error en POST:", error));  
  ```  
- **PUT**:
  ```javascript
    fetch("http://localhost:3000/posts/1", {
    method: "PUT", // Método HTTP 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Post Actualizado",
      body: "Este es contenido ha sido modificado",
      userId: 1
      })
    })
    .then(response => {
      console.log(` Estado de la respuesta PUT:${response.status}`);
      return response.json();
    })
    .then(data => console.log(" PUT realizado:", data))
    .catch(error => console.error(" Error en PUT:", error)); 
  ```
- **DELETE**:
  ```javascript
    fetch("http://localhost:3000/posts/1", {
    method: "DELETE"
    })
    .then(response => {
      console.log(` Estado de la respuesta DELETE:${response.status}`);
      return response.json();
      if (response.ok) console.log("DELETE realizado con éxito");
      else console.error("Error en DELETE:", response.status);
    })
    .catch(error => console.error(" Error en DELETE:", error));   
  ```
---

### 5. Axios  
#### 5.1. Instalación  
- **CDN**:  
  ```html  
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>  
  ```  
- **npm**: `npm install axios`.  

#### 5.2. Ventajas sobre Fetch  
- **Manejo automático de JSON**.  
- **Detección de errores HTTP** (ej: 404, 500).  
- **Cancelación de peticiones** y `timeout` nativo.  

| Característica          | fetch()                         | Axios                       |
|-------------------------|--------------------------------|-----------------------------|
| Simplicidad            | Más código                     | Más simple                  |
| Automático JSON        | No (requiere `.json()`)        | Sí                          |
| Manejo de errores HTTP | No detecta errores 404/500     | Sí                          |
| Manejo de timeout      | No soportado nativamente       | Sí                          |
| Soporta cancel requests | No                             | Sí                          |

#### 5.3. Ejemplos CRUD  
- **GET**:  
  ```javascript  
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response.data))
  .catch(error => console.error("Error en GET:", error));
  ```  
- **POST**:  
  ```javascript  
  axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "Nuevo Post",
    body: "Este es el contenido del post",
    userId: 1
    })
    .then(response => console.log(response.data))
    .catch(error => console.error("Error en POST:", error)); 
  ```  
- **PUT**:
  ```javascript
  axios.put("https://jsonplaceholder.typicode.com/posts/1", {
    title: "Post Actualizado",
    body: "Contenido actualizado",
    userId: 1
    })
    .then(response => console.log(response.data))
    .catch(error => console.error("Error en PUT:", error));
  ```  
- **DELETE**:
  ```javascript
  axios.delete("https://jsonplaceholder.typicode.com/posts/1")
  .then(() => console.log("Post eliminado con éxito"))
  .catch(error => console.error("Error en DELETE:", error));
  ```
---

### 6. JSON (JavaScript Object Notation) 
#### 6.1. Características  
- **Formato ligero** para intercambio de datos.  
- Basado en la sintaxis de los objetos de JavaScript, pero **independiente del lenguaje**
- Ideal para transmitir datos entre sistemas (por ejemplo, entre un servidor y un cliente web).  
- **Basado en texto**: Se compone de pares clave-valor.
- **Compatible con múltiples lenguajes** (Python, Java, PHP, etc).
- Fácil de leer y escribir. 

#### 6.2. Sintaxis del formato JSON
```json
{
  "nombre": "Mar Azul",
  "capitan": "Carlos Pérez",
  "capacidad": 50000,
  "activo": true,
  "contenedores": [
  {"id": 1, "descripcion": "Ropa", "peso": 1000},
  {"id": 2, "descripcion": "Electrodomésticos", "peso": 3000}
  ]
}
```

#### 6.3. Reglas del formato JSON
Las **claves** siempre van entre **comillas dobles ("")**.
Los valores pueden ser:
- **Cadenas** ("texto")
- **Números** (1000)
- **Booleanos** (true / false)
- **Arreglos** ([ ])
- **Objetos anidados** ({ })
- **`null`** (`null`)


#### 6.4. Métodos Clave en JavaScript  
- **`JSON.stringify()`**: Convierte un objeto a cadena JSON.  
  ```javascript  
  const obj = { nombre: "Ana", edad: 30 };  
  const json = JSON.stringify(obj); // '{"nombre":"Ana","edad":30}'  
  ```  
- **`JSON.parse()`**: Convierte una cadena JSON a objeto.  
  ```javascript  
  const json = '{"nombre":"Ana","edad":30}';  
  const obj = JSON.parse(json); // { nombre: "Ana", edad: 30 }  
  ```  

#### 6.7. Diferencias con Objetos JavaScript  
| **Característica** | **JSON**                  | **Objeto JS**              |  
|---------------------|---------------------------|----------------------------|  
| Claves              | Siempre entre comillas    | Pueden omitirse            |  
| Métodos             | No soporta                | Sí (funciones)             |  
| Tipos de datos      | Texto, números, booleanos | Incluye funciones, `undefined` |  

#### 6.8. Utilidad de JSON
- APIs REST
- Local Storage
- Base de datos NoSQL
- Configuraciones (Archivos de configuración)
---

### 8. Glosario  
#### 8.1. CRUD  
CRUD es un acrónimo que representa las **cuatro operaciones básicas** que se pueden realizar sobre los datos en una base de datos o API:

| Operación | Método HTTP  | Descripción                 |
|-----------|-------------|-----------------------------|
| Create    | POST        | Añadir nuevos datos        |
| Read      | GET         | Obtener datos              |
| Update    | PUT / PATCH | Modificar datos existentes |
| Delete    | DELETE      | Eliminar datos            |

CRUD se usa en **bases de datos** y **APIs REST** para manejar información.

#### 8.2. API REST  
Una **REST API (Representational State Transfer Application Programming Interface)** es una forma de estructurar y acceder a datos a través de la web mediante peticiones HTTP.

- **Características**:  
  - Usa métodos HTTP (GET, POST, etc.).  
  - Intercambia datos en JSON.  
  - Sin estado.
  - Acceso a recursos mediante URLs (ej: `/usuarios`, `/productos`).  

---

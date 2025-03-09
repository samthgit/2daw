**TEMA 6: GESTIÓN DEL DOM**  

---

### 1️. ¿Qué es el DOM?    
El **DOM (Document Object Model)** es un estándar W3C que permite acceder y modificar dinámicamente documentos HTML y XML mediante programación. Es una **interfaz de programación de aplicaciones (API)** que representa la estructura del documento como un árbol de nodos.    
- **Tipos de DOM**:    
  - *DOM Core*: Modelo para cualquier documento estructurado.    
  - *XML DOM*: Modelo estándar para documentos XML.    
  - *HTML DOM*: Modelo estándar para documentos HTML.  

---

### 2️. Estructura del Árbol DOM    
El documento HTML se representa como un árbol de nodos:    
- El nodo raíz es `<html>`.    
- Cada nodo (elemento, atributo o texto) tiene un padre (excepto la raíz).    
- Ejemplo:    
  ```html    
  <html>    
    <head>    
      <title>Página DOM</title>    
    </head>    
    <body>    
      <p>Primer párrafo</p>    
      <p>Segundo párrafo</p>    
    </body>    
  </html>    
  ```    
  - `<html>` es el nodo raíz.    
  - `<head>` y `<body>` son hijos de `<html>`.    
  - Los elementos `<p>` son hermanos.  

---

### 3. Objetos del DOM: Propiedades y Métodos    
**Tipos de nodos clave**:    
- `document`: Nodo raíz.    
- `DocumentType`: `DOCTYPE` del documento.  
- `Element`: Representa etiquetas HTML (ej: `<p>`, `<div>`).    
- `Attr`: Atributos de un elemento (ej: `id`, `class`).    
- `Text`: Contenido textual dentro de un elemento.    
- `Comment`: Comentarios HTML (`<!-- -->`).  

**Métodos útiles**:    
- `getElementById()`, `getElementsByTagName()`, `querySelector()`, etc.  

---

### 4. Interfaz Node 

#### 4.1. Introducción
La interfaz `Node` es la base de todos los nodos en el DOM y estos heredan de ella.  

#### 4.2. Propiedades de la Interfaz Node    
- `nodeType`: Tipo de nodo (1 para elementos, 3 para texto).    
- `nodeName`: Nombre del nodo (ej: "P" para `<p>`).    
- `parentNode`: Devuelve el nodo padre del elemento.
- `childNodes`: Devuelve una lista de los nodos hijos.
- `firstChild`: Devuelve el primer nodo hijo del elemento.
- `lastChild`: Devuelve el último nodo hijo del elemento.
- `previusSibling`: Devuelve el nodo hermano anterior.
- `nextSibling`: Devuelve el nodo hermano siguiente.
- `attributes`: Devuelve todos los atributos de un nodo.

#### 4.3. Métodos Principales    
- `appendChild(nodo)`: Agrega un nodo hijo al final.
- `removeChild(nodo)`: Elimina un nodo hijo.
- `replaceChild(nuevoNodo, nodoViejo)`: Reemplaza un nodo hijo por otro.
- `cloneNode()`: Clona el nodo. `(deep = true)` copia los hijos.
- `hasChildNodes()`: Devuelve `true` si el nodo tiene hijos.
- `setAttribute()`: Establece el valor de un atributo.
- `getAttribute()`: Devuelve el valor de un atributo.
- `removeAttribute()`: Elimina un atributo de un nodo.

**Ejemplo**:    
```javascript   
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo párrafo.";
document.body.appendChild(nuevoParrafo); // Se agrega al final del <body>
setTimeout(() => {
  document.body.removeChild(nuevoParrafo); // Se elimina después de 5 segundos
}, 5000);

const elemento = document.getElementById("miElemento");    
elemento.setAttribute("class", "nuevoEstilo");    
console.log(elemento.getAttribute("class")); // "nuevoEstilo"    
```  
#### 4.5 Tipos de Nodos en el DOM
| Constante                 | Valor | Descripción                                           |
|---------------------------|-------|-------------------------------------------------------|
| Node.ELEMENT_NODE         | 1     | Representa una etiqueta HTML (`<div>`, `<p>`, etc.). |
| Node.ATTRIBUTE_NODE       | 2     | Representa un atributo (`class`, `id`, etc.).        |
| Node.TEXT_NODE           | 3     | Representa el contenido de texto dentro de un elemento. |
| Node.COMMENT_NODE        | 8     | Representa un comentario en HTML.                    |
| Node.DOCUMENT_NODE       | 9     | Representa el objeto `document` (documento raíz).    |
| Node.DOCUMENT_TYPE_NODE  | 10    | Representa la declaración `<!DOCTYPE>`.              |


---

### 5. Eventos en el DOM    
#### 5.1. Repaso de gestión de eventos 
**Tipos de Eventos Comunes**:  
| Evento    | Descripción                                      |
|-----------|--------------------------------------------------|
| click     | Se activa cuando el usuario hace clic.          |
| mouseover | Cuando el ratón pasa sobre un elemento.         |
| mouseout  | Cuando el ratón sale de un elemento.            |
| keydown   | Cuando el usuario presiona una tecla.           |
| keyup     | Cuando el usuario suelta una tecla.             |
| submit    | Se activa al enviar un formulario.              |
| load      | Se activa cuando la página ha terminado de cargar. |


- **Formas de capturar eventos**:    
  1. Atributo en línea (no recomendado): `<button onclick="...">`.    
  2. Propiedades del DOM: `elemento.onclick = ...`.    
  3. `addEventListener()` (recomendado):    
     ```javascript    
     elemento.addEventListener("click", () => { ... });    
     ```  

---

### 6. Método `innerHTML`    
- Permite leer o modificar el contenido HTML de un elemento.    
- **Ejemplo**:    
  ```javascript    
  document.getElementById("miDiv").innerHTML = "<p>Nuevo contenido</p>";    
  ```    
- **Riesgos**: Vulnerable a ataques XSS si se usan datos no controlados.    
- **Alternativa segura**: Usar `textContent` para texto plano.  

**innerHTML vs Métodos del Node**
| Método/Propiedad | Qué hace                                                   | Uso recomendado                                      |
|------------------|------------------------------------------------------------|------------------------------------------------------|
| innerHTML       | Reemplaza todo el contenido interno del nodo con una nueva cadena de HTML. | Modificar grandes bloques de contenido.             |
| textContent     | Solo maneja texto plano (sin etiquetas HTML).               | Cuando solo se necesita cambiar texto sin formateo. |
| appendChild()   | Agrega un nodo hijo sin eliminar los existentes.            | Cuando se necesita agregar elementos sin borrar el contenido. |
| removeChild()   | Elimina un nodo hijo específico.                            | Cuando se necesita eliminar solo un elemento en particular. |

**Ejemplo: Diferencia entre `innerHTML` y `appendChild()`**
```javascript
document.getElementById("contenedor").innerHTML = "<p>Nuevo contenido</p>"; // Reemplaza todo

// let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Añadido con appendChild";
document.getElementById("contenedor").appendChild(nuevoParrafo);
// Agrega sin eliminar el contenido anterior
```
---
**TEMA 5: EVENTOS DE USUARIO**  

---

### 1. Métodos en JavaScript para acceder a elementos del DOM    
JavaScript proporciona múltiples métodos para acceder y manipular elementos dentro del DOM (Document Object Model). A continuación, se listan los principales métodos con explicaciones y ejemplos.  

#### 1.1. `getElementById(id)` → Selecciona un solo elemento por su `id`    
Busca un elemento único por su atributo `id`. Devuelve el elemento HTML o `null` si no existe.    
**Ejemplo**:    
```html  
<p id="mensaje">Hola, mundo!</p>  
<script>  
  let parrafo = document.getElementById("mensaje");  
  console.log(parrafo.textContent); // "Hola, mundo!"  
</script>  
```    
**Usar cuando**: Se necesita acceder a un único elemento con `id` único.  

#### 1.2. `getElementsByClassName(className)` → Selecciona varios elementos por su `class`    
Devuelve una colección (`HTMLCollection`) de todos los elementos con la clase especificada. No es un array, pero se puede recorrer con `for` o `forEach` si se convierte con `Array.from()`.    
**Ejemplo**:    
```html  
<p class="texto">Hola!</p>  
<p class="texto">¿Cómo estás?</p>  
<script>  
  let elementos = document.getElementsByClassName("texto");  
  console.log(elementos.length); // 2  
  // Recorrer elementos  
  for (let i = 0; i < elementos.length; i++) {  
    console.log(elementos[i].textContent);  
  }  
</script>  
```    
**Usar cuando**: Hay múltiples elementos con la misma clase.  

#### 1.3. `getElementsByTagName(tagName)` → Selecciona elementos por su etiqueta    
Devuelve una colección (`HTMLCollection`) de todos los elementos con la etiqueta especificada. Se puede recorrer como un array.    
**Ejemplo**:    
```html  
<h1>Encabezado 1</h1>  
<h1>Encabezado 2</h1>  
<script>  
  let encabezados = document.getElementsByTagName("h1");  
  console.log(encabezados.length); // 2  
  console.log(encabezados[0].textContent); // "Encabezado 1"  
</script>  
```    
**Usar cuando**: Se necesita obtener todos los elementos de un mismo tipo.  

#### 1.4. `querySelector(selector)` → Selecciona el primer elemento que coincida con el selector    
Usa selectores de CSS (`#id`, `.clase`, etiqueta). Devuelve el primer elemento encontrado o `null` si no existe.    
**Ejemplo**:    
```html  
<p class="texto">Hola, mundo!</p>  
<p class="texto">Otro párrafo</p>  
<script>  
  let elemento = document.querySelector(".texto");  
  console.log(elemento.textContent); // "Hola, mundo!"  
</script>  
```    
**Usar cuando**: Solo se necesita seleccionar un elemento específico.  

#### 1.5. `querySelectorAll(selector)` → Selecciona todos los elementos que coincidan con el selector    
Devuelve una colección (`NodeList`) de elementos que coincidan con el selector. `NodeList` permite usar `.forEach()`.    
**Ejemplo**:    
```html  
<p class="texto">Hola!</p>  
<p class="texto">Mundo!</p>  
<script>  
  let elementos = document.querySelectorAll(".texto");  
  elementos.forEach(el => {  
    console.log(el.textContent);  
  });  
</script>  
```    
**Usar cuando**: Se necesita acceder a varios elementos con la misma clase o etiqueta.  

#### 1.6. `getElementsByName(name)` → Selecciona elementos por su `name`    
Devuelve una colección (`NodeList`) de todos los elementos con el atributo `name` especificado. Muy útil en formularios.    
**Ejemplo**:    
```html  
<input type="radio" name="genero" value="Hombre">  
<input type="radio" name="genero" value="Mujer">  
<script>  
  let opciones = document.getElementsByName("genero");  
  console.log(opciones.length); // 2  
</script>  
```    
**Usar cuando**: Se trabaja con formularios y se necesita acceder a inputs con `name`.  

**Conclusión**:    
- Si necesitas un único elemento: Usa `getElementById()` o `querySelector()`.    
- Si necesitas varios elementos: Usa `getElementsByClassName()`, `getElementsByTagName()` o `querySelectorAll()`.    
- Si trabajas con formularios: Usa `getElementsByName()`.  

---

### 2. Validación de campos de entrada en formularios    
Existen varias formas de validar campos de entrada, asegurando que los datos ingresados por los usuarios sean correctos antes de enviarlos a un servidor.  

#### 2.1. Validación mediante atributos HTML    
El propio HTML permite validar formularios con atributos en `<input>` sin necesidad de JavaScript.    
**Ejemplo de validación en HTML**:    
```html  
<form>  
  <input type="text" name="nombre" required minlength="3" maxlength="20" pattern="[A-Za-z\s]+" placeholder="Nombre">  
  <input type="email" name="correo" required placeholder="Correo">  
  <input type="number" name="edad" required min="18" max="99" placeholder="Edad">  
  <input type="submit" value="Enviar">  
</form>  
```    
**Explicación**:    
- `required` → Campo obligatorio.    
- `minlength` y `maxlength` → Controla la longitud mínima y máxima.    
- `pattern="[A-Za-zs]+"` → Valida con una expresión regular en HTML5.    
- `type="email"` → Solo permite correos válidos.    
- `type="number"` con `min` y `max` → Controla valores numéricos.  

**Ventajas**: Fácil de implementar, compatible con navegadores modernos, no requiere código adicional.    
**Desventajas**: Limitada en personalización, no muestra mensajes de error personalizados, no permite validaciones avanzadas.  

#### 2.2. Validación con JavaScript (Sin RegExp)    
Podemos validar manualmente cada campo antes de enviar el formulario.    
**Ejemplo**:    
```html  
<form id="miFormulario">  
  <input type="text" id="nombre" placeholder="Nombre">  
  <input type="email" id="correo" placeholder="Correo">  
  <input type="number" id="edad" placeholder="Edad">  
  <button type="submit">Enviar</button>  
</form>  
<script>  
  document.getElementById("miFormulario").addEventListener("submit", function(event) {  
    let nombre = document.getElementById("nombre").value.trim();  
    let correo = document.getElementById("correo").value.trim();  
    let edad = document.getElementById("edad").value.trim();

    if (nombre === "" || nombre.length < 3) {  
      alert("El nombre debe tener al menos 3 caracteres.");  
      event.preventDefault();  
    }  
    if (!correo.includes("@") || !correo.includes(".")) {  
      alert("Introduce un correo válido.");  
      event.preventDefault();  
    }  
    if (isNaN(edad) || edad < 18 || edad > 99) {  
      alert("La edad debe ser un número entre 18 y 99.");  
      event.preventDefault();  
    }  
  });  
</script>  
```    
**Ventajas**: Más control sobre la validación, mensajes personalizados.    
**Desventajas**: Más código que HTML5, impreciso en validaciones complejas.  

#### 2.3. Validación con Expresiones Regulares (JavaScript)    
Las Expresiones Regulares (RegEx) permiten validaciones avanzadas y precisas.    
**Ejemplo**:    
```html  
<form id="miFormulario">  
  <input type="text" id="nombre" placeholder="Nombre">  
  <input type="email" id="correo" placeholder="Correo">  
  <input type="password" id="password" placeholder="Contraseña">  
  <button type="submit">Enviar</button>  
</form>  
<script>  
  document.getElementById("miFormulario").addEventListener("submit", function(event) {  
    let nombre = document.getElementById("nombre").value.trim();  
    let correo = document.getElementById("correo").value.trim();  
    let password = document.getElementById("password").value.trim();

    let nombreRegex = /^[A-Za-z\s]{3,20}$/; // Solo letras y espacios, entre 3 y 20 caracteres  
    let correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Formato email  
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // Min. 8 caracteres, 1 mayúscula y 1 número

    if (!nombreRegex.test(nombre)) {  
      alert("El nombre solo debe contener letras y espacios (3-20 caracteres).");  
      event.preventDefault();  
    }  
    if (!correoRegex.test(correo)) {  
      alert("Introduce un correo válido.");  
      event.preventDefault();  
    }  
    if (!passwordRegex.test(password)) {  
      alert("La contraseña debe tener mínimo 8 caracteres, incluir una mayúscula y un número.");  
      event.preventDefault();  
    }  
  });  
</script>  
```    
**Ventajas**: Mayor precisión, aplicable a múltiples campos.    
**Desventajas**: Requiere aprender RegEx, difícil de leer para principiantes.  

**Conclusión**:    
- Validaciones básicas: Usa HTML5 (`required`, `pattern`).    
- Validaciones personalizadas: Usa JavaScript (`checkValidity()`).    
- Validaciones avanzadas: Usa Expresiones Regulares.  

---

### 3. Función `addEventListener`    
Normalmente se usa con dos argumentos: el tipo de evento y la función manejadora.    
**Sintaxis**:    
```javascript  
element.addEventListener(tipoEvento, manejador);  
```    
**Ejemplo**:    
```javascript  
document.getElementById("boton").addEventListener("click", () => {  
  console.log("¡Botón presionado!");  
});  
```  

--- 
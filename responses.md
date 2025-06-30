# Respuestas del Cuestionario HTML, CSS3 y JavaScript

## Pregunta 1
**Respuesta correcta: a)**
```javascript
document.addEventListener('DOMContentLoaded', () => {
    // código aquí
});
```
**Explicación:** Esta es la forma más correcta y moderna de esperar a que el DOM esté completamente cargado. Es más eficiente que `window.onload` porque no espera a que se carguen todos los recursos (imágenes, estilos, etc.), solo espera a que el DOM esté listo.

## Pregunta 2
**Respuesta correcta: b)**
```css
.elemento {
    transition: all 0.3s ease;
}
```
**Explicación:** Esta sintaxis es la correcta para aplicar una transición a todas las propiedades animables del elemento. El valor `all` indica que afecta a todas las propiedades, `0.3s` es la duración, y `ease` es la función de temporización.

## Pregunta 3
**Respuesta correcta: c)**
```javascript
async function loadData() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}
```
**Explicación:** Esta implementación es la más correcta porque:
1. Usa `async/await` para manejar promesas de forma clara
2. Espera correctamente la respuesta del fetch
3. Espera la conversión del JSON
4. Maneja la asincronía de forma adecuada

## Pregunta 4
**Respuesta correcta: c)**
```html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        ...
    </ul>
</nav>
```
**Explicación:** Esta estructura es semánticamente correcta porque:
1. Usa la etiqueta semántica `<nav>`
2. Implementa una lista ordenada para los enlaces
3. Sigue las mejores prácticas de accesibilidad

## Pregunta 5
**Respuesta correcta: b)**
```css
img {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
```
**Explicación:** Esta es la sintaxis correcta de `box-shadow` que incluye:
- Desplazamiento X (0)
- Desplazamiento Y (0)
- Desenfoque (20px)
- Color con transparencia usando rgba

## Pregunta 6
**Respuesta correcta: c)**
```javascript
const element = document.createElement('div');
element.setAttribute('class', 'myClass');
```
**Explicación:** Esta es la forma más robusta de crear y modificar elementos del DOM porque:
1. Usa el método estándar `createElement`
2. Utiliza `setAttribute` que es más consistente entre navegadores
3. Es más claro y mantenible

## Pregunta 7
**Respuesta correcta: a)**
```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```
**Explicación:** Esta es la implementación correcta de flexbox porque:
1. Establece el contenedor como flexible con `display: flex`
2. Usa las propiedades correctas para alineación
3. Utiliza los valores estándar de CSS

## Pregunta 8
**Respuesta correcta: a)**
```javascript
async function handleData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```
**Explicación:** Esta implementación es la mejor porque:
1. Usa un bloque try/catch para manejar errores
2. Maneja correctamente las promesas con async/await
3. Proporciona un manejo de errores específico

## Pregunta 9
**Respuesta correcta: b)**
```html
<head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
```
**Explicación:** Esta es la forma correcta de vincular archivos porque:
1. Usa el atributo `src` para JavaScript
2. Usa `link` con `rel="stylesheet"` para CSS
3. Sigue las especificaciones HTML5

## Pregunta 10
**Respuesta correcta: c)**
```css
.homepage-element {
    color: red !important;
}
```
**Explicación:** Esta solución es la más práctica porque:
1. Usa una clase específica para la página principal
2. El `!important` asegura que el estilo se aplique sobre otros estilos
3. Es una solución simple y efectiva para estilos específicos de página

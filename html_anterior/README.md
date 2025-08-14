# DWeb2025

Repositorio de las clases de Diseño Web 2025

## Descripción del Proyecto

Este proyecto es un sitio web responsive que consta de dos páginas principales. El diseño implementa conceptos modernos de CSS y HTML5.

## Características Implementadas

### Navegación

- Barra de navegación responsive con logo
- Menú de navegación con efectos hover
- Enlaces entre páginas

### Página Principal (index.html)

- Diseño moderno con dos artículos principales
- Imágenes responsivas con bordes redondeados
- Texto justificado con sangría
- Footer con botón de navegación con efectos de hover

### Página Secundaria (secondary.html)

- Fondo con imagen semi-transparente
- Navegación con botón de regreso
- Diseño minimalista y elegante

### Estilos (style.css)

- Diseño responsive
- Efectos de transición en elementos interactivos
- Uso de flexbox para layouts
- Estilos personalizados para imágenes y texto
- Efectos hover en enlaces y botones
- Manejo de fondos semi-transparentes

## Archivos del Proyecto

- `index.html`: Página principal
- `secondary.html`: Página secundaria
- `style.css`: Estilos del sitio
- `main.js`: Archivo JavaScript (preparado para funcionalidades futuras)
- Imágenes:
  - logo.jpg
  - bugatti.webp
  - descarga.jpeg

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript

## Historial de Cambios

### 15 de mayo de 2025

- Documentación: Actualización del archivo README.md con la estructura completa del proyecto
- Archivos base: Creación de archivos HTML, CSS y JavaScript
- Recursos: Incorporación de imágenes (logo.jpg, bugatti.webp, descarga.jpeg)
- Diseño: Implementación de estilos responsive y efectos visuales

### 06 de junio de 2025

#### Mejoras Generales

- Implementación de carga dinámica de estilos
- Optimización de la carga de recursos
- Mejora en la gestión de estilos condicionales

#### Cambios por Archivo

##### index.html

- Eliminadas referencias directas a Tailwind y style.css del head
- Limpieza del código HTML removiendo artículos hardcodeados
- Mejorada la estructura del contenedor de artículos

##### main.js

- Nueva función `loadStyles()` para carga dinámica de estilos
- Implementada función `handlePepitoStyle()` para manejar estilos condicionales
- Nueva función `setPageTitle()` para manejo dinámico del título
- Mejorada la carga de artículos desde articles.json con mejor manejo de errores
- Optimizada la generación de artículos con alternancia izquierda/derecha

##### secondary.html

- Eliminadas referencias directas a Tailwind y style.css
- Limpieza y optimización del código
- Mejorada la integración con la navegación principal

##### style.css

- Separación de estilos de pepito para mejor manejo condicional
- Optimización de estilos del background para pantalla completa
- Nueva clase `homepage-pepito` para estilos específicos de la página principal
- Mejoras en el diseño responsive de la navegación
- Optimización de transiciones y efectos hover

#### Características Principales

- Carga dinámica de estilos
- Manejo condicional de estilos según la página
- Sistema de navegación mejorado
- Diseño responsive y optimizado
- Carga eficiente de artículos desde JSON

### 03 de julio de 2025

#### Mejoras Generales

- Integración de sistema de preguntas y respuestas
- Mejora en la presentación visual de artículos
- Optimización del rendimiento general
- Implementación de proyecto Next.js como ejemplo adicional

#### Cambios por Archivo

##### questions.md

- Creación del archivo de preguntas para el sistema de FAQ
- Implementación de estructura de preguntas organizadas por categorías
- Formato optimizado para fácil mantenimiento

##### responses.md

- Creación del archivo de respuestas correspondientes a las preguntas
- Integración con el sistema de preguntas mediante identificadores únicos
- Inclusión de ejemplos y casos de uso para cada respuesta

##### articles.json

- Actualización del esquema de datos para mejorar la estructura de contenidos
- Adición de nuevos artículos con imágenes optimizadas
- Implementación de metadatos para mejor SEO

##### example-nextjs/

- Creación de proyecto Next.js como ejemplo de aplicación moderna
- Implementación de estructura básica con TypeScript
- Desarrollo de componentes reutilizables
- Configuración de rutas y páginas (home, about)
- Inclusión de recursos estáticos en carpeta public

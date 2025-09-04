# 🚀 Sistema de Routing de Next.js - Explicación Completa

Este proyecto demuestra todos los aspectos del sistema de routing de Next.js App Router con comentarios explicativos y logging para entender la secuencia de carga.

## 📁 Estructura de Archivos de Routing

### Archivos Especiales de Next.js

| Archivo | Descripción | Función |
|---------|-------------|---------|
| `layout.tsx` | Layout compartido para rutas | Envuelve páginas y mantiene estado entre navegaciones |
| `page.tsx` | Página única para una ruta | Define el contenido principal de la ruta |
| `loading.tsx` | UI de carga | Se muestra mientras se cargan componentes async |
| `not-found.tsx` | UI para errores 404 | Se muestra cuando una ruta no existe |
| `error.tsx` | UI para errores | Captura errores de renderizado y runtime |
| `global-error.tsx` | UI para errores globales | Captura errores en el layout raíz |
| `template.tsx` | Template re-renderizable | Similar a layout pero se re-renderiza en cada navegación |
| `default.tsx` | UI por defecto | Fallback para rutas paralelas |
| `route.ts` | API endpoint | Define endpoints de API |

## 🗂️ Estructura del Proyecto

```
app/
├── layout.tsx              # Layout raíz - se aplica a todas las rutas
├── page.tsx                # Página principal - ruta /
├── loading.tsx             # Loading global
├── not-found.tsx           # 404 global
├── error.tsx               # Error boundary global
├── global-error.tsx        # Error boundary crítico
├── template.tsx            # Template global (re-renderizable)
├── default.tsx             # Default para rutas paralelas
│
├── about/
│   └── page.tsx            # Ruta: /about
│
├── control/
│   └── page.tsx            # Ruta: /control
│
├── admin/
│   ├── layout.tsx          # Layout específico para /admin/*
│   └── page.tsx            # Ruta: /admin
│
├── users/
│   ├── page.tsx            # Ruta: /users
│   └── [id]/
│       └── page.tsx        # Ruta dinámica: /users/[cualquier-id]
│
├── error-test/
│   └── page.tsx            # Ruta: /error-test (para probar errores)
│
├── api-test/
│   └── page.tsx            # Ruta: /api-test (para probar APIs)
│
└── api/
    └── route.ts            # API endpoint: /api
```

## 🔄 Secuencia de Carga y Renderizado

### 1. Inicialización de la Aplicación
```
🎨 [LAYOUT] Inicializando Layout Principal
🔄 [TEMPLATE] Re-renderizando template
🏠 [PAGE] Renderizando página específica
```

### 2. Navegación entre Rutas
```
🔄 [TEMPLATE] Re-renderizando template (nueva ruta)
📄 [PAGE] Renderizando nueva página
```

### 3. Carga de Datos Async
```
⏳ [LOADING] Mostrando componente de carga
📄 [PAGE] Página cargada completamente
```

### 4. Manejo de Errores
```
🚨 [ERROR] Error capturado por boundary
🚨 [ERROR] Renderizando página de error
```

## 🧪 Rutas de Prueba Incluidas

### 1. Rutas Básicas
- `/` - Página principal con navegación
- `/about` - Página estática simple
- `/control` - Otra página estática

### 2. Layouts Anidados
- `/admin` - Utiliza layout específico de admin

### 3. Rutas Dinámicas
- `/users` - Lista de usuarios
- `/users/[id]` - Perfil de usuario dinámico

### 4. Pruebas de Error
- `/error-test` - Página para probar diferentes tipos de errores
- `/pagina-inexistente` - Activa el not-found.tsx

### 5. API Routes
- `/api` - Endpoint de API con GET y POST
- `/api-test` - Página para probar las API routes

## 📊 Console Logging

Cada componente incluye `console.info` para rastrear:

- **Layout**: `🎨 [LAYOUT] Inicializando Layout...`
- **Pages**: `📄 [PAGE] Renderizando página...`
- **Template**: `🔄 [TEMPLATE] Re-renderizando template...`
- **Loading**: `⏳ [LOADING] Mostrando componente de carga...`
- **Errors**: `🚨 [ERROR] Error capturado...`
- **API**: `🔌 [API-ROUTE] Procesando solicitud...`

## 🎯 Características Demostradas

### ✅ Routing Básico
- [x] Rutas basadas en archivos
- [x] Navegación con Link y useRouter
- [x] Layouts anidados

### ✅ Rutas Dinámicas
- [x] Parámetros de ruta [id]
- [x] Captura de parámetros en componentes

### ✅ Manejo de Errores
- [x] Error boundaries (error.tsx)
- [x] Error global (global-error.tsx)
- [x] Páginas 404 (not-found.tsx)

### ✅ Estados de Carga
- [x] Loading UI (loading.tsx)
- [x] Templates re-renderizables (template.tsx)

### ✅ API Routes
- [x] Endpoints GET y POST
- [x] Manejo de parámetros y body

### ✅ Logging y Debug
- [x] Console logging detallado
- [x] Rastreo de secuencia de carga
- [x] Identificación de componentes

## 🚀 Cómo Probar

1. **Navegación básica**: Usa los botones en la página principal
2. **Rutas dinámicas**: Ve a /users y haz clic en cualquier usuario
3. **Errores**: Ve a /error-test y prueba los diferentes tipos de error
4. **APIs**: Ve a /api-test y prueba las solicitudes GET/POST
5. **404**: Navega manualmente a una URL inexistente
6. **Console**: Abre las DevTools para ver el logging detallado

## 💡 Consejos para el Desarrollo

- Siempre incluye `console.info` para rastrear el flujo de la aplicación
- Usa layouts anidados para compartir UI entre grupos de rutas
- Implementa error boundaries para manejar errores gracefully
- Utiliza loading states para mejorar la UX
- Las rutas dinámicas son perfectas para contenido basado en IDs

---

¡Explora las diferentes rutas y observa la consola para entender cómo Next.js maneja el routing! 🎉

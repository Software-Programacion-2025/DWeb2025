# 🎨 Guía de Estilos con Tailwind CSS

Esta aplicación utiliza un sistema de variables CSS personalizadas integradas con Tailwind CSS para proporcionar un diseño consistente y soporte para modo claro/oscuro.

## 🌈 Paleta de Colores

### Colores Principales
```tsx
// En lugar de: style={{backgroundColor: 'var(--primary-blue)'}}
<div className="bg-primary text-primary-foreground">
  Contenido con color primario
</div>

// En lugar de: style={{backgroundColor: 'var(--primary-green)'}}
<div className="bg-secondary text-secondary-foreground">
  Contenido con color secundario
</div>

// En lugar de: style={{backgroundColor: 'var(--primary-orange)'}}
<div className="bg-accent text-accent-foreground">
  Contenido con color de acento
</div>
```

### Ejemplo de Botones
```tsx
// Botón primario
<button className="btn-modern btn-primary">
  Botón Primario
</button>

// Botón secundario
<button className="btn-modern btn-secondary">
  Botón Secundario
</button>

// Botón de acento
<button className="btn-modern btn-accent">
  Botón de Acento
</button>

// Botón destructivo
<button className="btn-modern btn-destructive">
  Botón Destructivo
</button>
```

### Ejemplo de Tarjetas
```tsx
// Tarjeta moderna con efectos hover
<div className="card-modern">
  <h3>Título de la tarjeta</h3>
  <p>Contenido de la tarjeta con estilos modernos</p>
</div>

// Tarjeta con colores específicos
<div className="bg-card text-card-foreground p-6 rounded-lg">
  <h3>Tarjeta con colores temáticos</h3>
</div>
```

### Gradientes
```tsx
// Gradiente de superficie
<div className="gradient-surface">
  Contenido con gradiente de superficie
</div>

// Gradiente de acento
<div className="gradient-accent">
  Contenido con gradiente de acento
</div>
```

### Efectos Hover
```tsx
// Efecto de elevación al hover
<div className="hover-lift">
  Elemento que se eleva al hacer hover
</div>

// Con efectos de sombra modernos
<div className="shadow-modern hover:shadow-modern-lg transition-all">
  Contenido con sombras modernas
</div>
```

## 🌙 Modo Oscuro

El sistema soporta automáticamente modo oscuro usando la clase `.dark`:

```tsx
// Los colores se adaptan automáticamente
<div className="bg-background text-foreground">
  Este contenido se adapta al modo oscuro
</div>

<div className="bg-surface border border-border">
  Superficie que cambia con el tema
</div>
```

## 🔧 Variables CSS Disponibles

### En modo claro:
- `--primary`: Azul brillante
- `--secondary`: Verde lima
- `--accent`: Naranja
- `--destructive`: Magenta
- `--muted`: Gris azulado
- `--card`: Verde oliva

### Uso recomendado:
```tsx
// ✅ Recomendado - Usar clases de Tailwind
<div className="bg-primary text-primary-foreground">Contenido</div>

// ❌ No recomendado - Usar estilos inline
<div style={{backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)'}}>
  Contenido
</div>
```

Este enfoque permite mayor consistencia, mejor rendimiento y soporte automático para modo oscuro.

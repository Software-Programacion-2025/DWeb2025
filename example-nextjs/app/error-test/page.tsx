'use client'

import { useState } from 'react'

/**
 * PÁGINA DE PRUEBA DE ERRORES (error-test/page.tsx)
 * Esta página está diseñada para probar diferentes tipos de errores
 * y ver cómo Next.js los maneja con los boundaries de error
 */
export default function ErrorTestPage() {
  console.info('🧪 [ERROR-TEST] Renderizando página de prueba de errores')
  
  const [shouldThrowError, setShouldThrowError] = useState(false)

  // Función que lanza un error intencionalmente
  const throwError = () => {
    console.info('🧪 [ERROR-TEST] Preparando para lanzar error...')
    setShouldThrowError(true)
  }

  // Función que lanza un error síncrono
  const throwSyncError = () => {
    console.info('🧪 [ERROR-TEST] Lanzando error síncrono...')
    throw new Error('Error síncrono de prueba - ¡Esto es intencional!')
  }

  // Función que lanza un error asíncrono
  const throwAsyncError = async () => {
    console.info('🧪 [ERROR-TEST] Lanzando error asíncrono...')
    setTimeout(() => {
      throw new Error('Error asíncrono de prueba - ¡Esto es intencional!')
    }, 1000)
  }

  // Si shouldThrowError es true, lanza un error
  if (shouldThrowError) {
    throw new Error('Error de renderizado - ¡Esto debería activar el error boundary!')
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">🧪 Pruebas de Manejo de Errores</h1>
      
      <div className="bg-warning border-l-4 border-warning-foreground text-warning-foreground p-4 mb-6">
        <p className="font-bold">⚠️ Advertencia:</p>
        <p>Esta página está diseñada para generar errores intencionalmente para probar el manejo de errores de Next.js.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Error de renderizado */}
        <div className="border border-border p-4 rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-2 text-card-foreground">Error de Renderizado</h3>
          <p className="text-muted-foreground mb-4">
            Este botón causará un error durante el renderizado del componente.
            Debería activar el error boundary.
          </p>
          <button
            onClick={throwError}
            className="bg-destructive hover:bg-destructive/80 text-destructive-foreground font-bold py-2 px-4 rounded transition-colors"
          >
            Causar Error de Renderizado
          </button>
        </div>

        {/* Error síncrono */}
        <div className="border border-border p-4 rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-2 text-card-foreground">Error Síncrono</h3>
          <p className="text-muted-foreground mb-4">
            Este botón lanza un error síncrono inmediatamente.
          </p>
          <button
            onClick={throwSyncError}
            className="bg-warning hover:bg-warning/80 text-warning-foreground font-bold py-2 px-4 rounded transition-colors"
          >
            Lanzar Error Síncrono
          </button>
        </div>

        {/* Error asíncrono */}
        <div className="border border-border p-4 rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-2 text-card-foreground">Error Asíncrono</h3>
          <p className="text-muted-foreground mb-4">
            Este botón lanza un error asíncrono después de 1 segundo.
            Mira la consola del navegador.
          </p>
          <button
            onClick={throwAsyncError}
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold py-2 px-4 rounded transition-colors"
          >
            Lanzar Error Asíncrono
          </button>
        </div>

        {/* Navegación a página inexistente */}
        <div className="border border-border p-4 rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-2 text-card-foreground">Error 404</h3>
          <p className="text-muted-foreground mb-4">
            Este enlace lleva a una página que no existe.
            Debería mostrar el componente not-found.tsx.
          </p>
          <a
            href="/pagina-que-no-existe"
            className="inline-block bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-2 px-4 rounded transition-colors"
          >
            Ir a Página Inexistente
          </a>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-muted-foreground">📝 Qué observar:</h3>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Los errores de renderizado deberían activar el error boundary (error.tsx)</li>
          <li>Los errores asíncronos aparecen en la consola del navegador</li>
          <li>La navegación a páginas inexistentes muestra not-found.tsx</li>
          <li>Todos los eventos se registran en la consola con console.info</li>
        </ul>
      </div>
    </div>
  )
}

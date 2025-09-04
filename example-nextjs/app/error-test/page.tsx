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
      <h1 className="text-3xl font-bold mb-6">🧪 Pruebas de Manejo de Errores</h1>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
        <p className="font-bold">⚠️ Advertencia:</p>
        <p>Esta página está diseñada para generar errores intencionalmente para probar el manejo de errores de Next.js.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Error de renderizado */}
        <div className="border border-red-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Error de Renderizado</h3>
          <p className="text-gray-600 mb-4">
            Este botón causará un error durante el renderizado del componente.
            Debería activar el error boundary.
          </p>
          <button
            onClick={throwError}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Causar Error de Renderizado
          </button>
        </div>

        {/* Error síncrono */}
        <div className="border border-orange-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Error Síncrono</h3>
          <p className="text-gray-600 mb-4">
            Este botón lanza un error síncrono inmediatamente.
          </p>
          <button
            onClick={throwSyncError}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Lanzar Error Síncrono
          </button>
        </div>

        {/* Error asíncrono */}
        <div className="border border-purple-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Error Asíncrono</h3>
          <p className="text-gray-600 mb-4">
            Este botón lanza un error asíncrono después de 1 segundo.
            Mira la consola del navegador.
          </p>
          <button
            onClick={throwAsyncError}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Lanzar Error Asíncrono
          </button>
        </div>

        {/* Navegación a página inexistente */}
        <div className="border border-blue-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Error 404</h3>
          <p className="text-gray-600 mb-4">
            Este enlace lleva a una página que no existe.
            Debería mostrar el componente not-found.tsx.
          </p>
          <a
            href="/pagina-que-no-existe"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Ir a Página Inexistente
          </a>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">📝 Qué observar:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Los errores de renderizado deberían activar el error boundary (error.tsx)</li>
          <li>Los errores asíncronos aparecen en la consola del navegador</li>
          <li>La navegación a páginas inexistentes muestra not-found.tsx</li>
          <li>Todos los eventos se registran en la consola con console.info</li>
        </ul>
      </div>
    </div>
  )
}

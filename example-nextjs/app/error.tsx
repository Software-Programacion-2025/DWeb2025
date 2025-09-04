'use client'

import { useEffect } from 'react'

/**
 * ERROR UI (error.tsx)
 * Este componente se renderiza automáticamente cuando ocurre un error en:
 * 1. Componentes Server Components
 * 2. Componentes Client Components que lanzan errores
 * 3. Funciones de datos (fetch, etc.)
 * Debe ser un Client Component ('use client')
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Console.error para registrar errores
    console.error('🚨 [ERROR] Error capturado por boundary:', error)
    console.info('🚨 [ERROR] Renderizando página de error global')
  }, [error])

  return (
    <div className="flex h-screen items-center justify-center bg-red-50">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="text-6xl mb-4">💥</div>
        <h2 className="text-2xl font-bold text-red-800 mb-4">
          ¡Algo salió mal!
        </h2>
        <p className="text-red-600 mb-6">
          Ha ocurrido un error inesperado en la aplicación.
        </p>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Error:</strong> {error.message}
        </div>
        <div className="space-x-4">
          <button
            onClick={() => reset()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Intentar de nuevo
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'

/**
 * GLOBAL ERROR UI (global-error.tsx)
 * Este componente captura errores que ocurren en el layout raíz
 * Es el último recurso para manejar errores críticos
 * Debe incluir sus propias etiquetas <html> y <body>
 * Solo se activa en producción
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error('🔥 [GLOBAL-ERROR] Error crítico capturado en el boundary global:', error)
  console.info('🔥 [GLOBAL-ERROR] Renderizando página de error global crítico')

  return (
    <html>
      <body>
        <div className="flex h-screen items-center justify-center bg-red-900 text-white">
          <div className="text-center max-w-lg mx-auto p-8">
            <div className="text-8xl mb-6">🔥</div>
            <h1 className="text-4xl font-bold mb-4">Error Crítico del Sistema</h1>
            <p className="text-xl mb-6">
              La aplicación ha encontrado un error crítico y necesita reiniciarse.
            </p>
            <div className="bg-red-800 border border-red-600 text-red-100 px-4 py-3 rounded mb-6">
              <strong>Detalles del error:</strong>
              <br />
              {error.message}
              {error.digest && (
                <>
                  <br />
                  <strong>ID del error:</strong> {error.digest}
                </>
              )}
            </div>
            <div className="space-x-4">
              <button
                onClick={() => reset()}
                className="bg-white text-red-900 hover:bg-gray-100 font-bold py-3 px-6 rounded transition-colors"
              >
                Reiniciar Aplicación
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-colors"
              >
                Recargar Página
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

/**
 * DEFAULT UI (default.tsx)
 * Este archivo se usa en rutas paralelas como fallback
 * Cuando Next.js no puede determinar qué slot renderizar en rutas paralelas,
 * usa este componente como valor por defecto
 * Es especialmente útil en navegación con rutas paralelas complejas
 */
export default function Default() {
  console.info('🔄 [DEFAULT] Renderizando componente default para rutas paralelas')
  
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="text-4xl mb-4">🏠</div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Contenido por Defecto
        </h2>
        <p className="text-gray-600">
          Este es el contenido por defecto para rutas paralelas.
        </p>
      </div>
    </div>
  )
}

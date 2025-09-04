'use client'

import { useState } from 'react'

/**
 * PÁGINA DE PRUEBA DE API (api-test/page.tsx)
 * Esta página demuestra cómo interactuar con las rutas API de Next.js
 * Incluye ejemplos de GET y POST requests
 */
export default function ApiTestPage() {
  console.info('🔌 [API-TEST-PAGE] Renderizando página de prueba de API')
  
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', message: '' })

  // Función para probar GET request
  const testGetRequest = async () => {
    console.info('🔌 [API-TEST-PAGE] Iniciando GET request...')
    setLoading(true)
    
    try {
      const res = await fetch('/api?name=Usuario de Prueba')
      const data = await res.json()
      setResponse(data)
      console.info('✅ [API-TEST-PAGE] GET request exitoso:', data)
    } catch (error) {
      console.error('❌ [API-TEST-PAGE] Error en GET request:', error)
      setResponse({ error: 'Error al realizar GET request' })
    } finally {
      setLoading(false)
    }
  }

  // Función para probar POST request
  const testPostRequest = async () => {
    console.info('🔌 [API-TEST-PAGE] Iniciando POST request...')
    setLoading(true)
    
    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const data = await res.json()
      setResponse(data)
      console.info('✅ [API-TEST-PAGE] POST request exitoso:', data)
    } catch (error) {
      console.error('❌ [API-TEST-PAGE] Error en POST request:', error)
      setResponse({ error: 'Error al realizar POST request' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">🔌 Pruebas de API Routes</h1>
      
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6">
        <p className="font-bold">ℹ️ Información:</p>
        <p>Esta página demuestra cómo las páginas cliente pueden interactuar con las API routes de Next.js.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* GET Request Test */}
        <div className="border border-green-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">GET Request</h3>
          <p className="text-gray-600 mb-4">
            Prueba una solicitud GET a /api con parámetro de consulta.
          </p>
          <button
            onClick={testGetRequest}
            disabled={loading}
            className="bg-green-500 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            {loading ? 'Cargando...' : 'Probar GET'}
          </button>
        </div>

        {/* POST Request Test */}
        <div className="border border-blue-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">POST Request</h3>
          <div className="space-y-3 mb-4">
            <input
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Mensaje"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded h-20"
            />
          </div>
          <button
            onClick={testPostRequest}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            {loading ? 'Enviando...' : 'Probar POST'}
          </button>
        </div>
      </div>

      {/* Response Display */}
      {response && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">📄 Respuesta de la API:</h3>
          <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}

      <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">🎯 Qué observar:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Las solicitudes se registran en la consola del navegador y del servidor</li>
          <li>Las respuestas incluyen timestamps y metadatos</li>
          <li>Los errores se manejan apropiadamente</li>
          <li>El estado de loading se maneja durante las solicitudes</li>
        </ul>
      </div>
    </div>
  )
}

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
      <h1 className="text-3xl font-bold mb-6 text-foreground">🔌 Pruebas de API Routes</h1>
      
      <div className="bg-primary border-l-4 border-primary-foreground text-primary-foreground p-4 mb-6">
        <p className="font-bold">ℹ️ Información:</p>
        <p>Esta página demuestra cómo las páginas cliente pueden interactuar con las API routes de Next.js.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* GET Request Test */}
        <div className="border border-border p-6 rounded-lg bg-card">
          <h3 className="text-xl font-semibold mb-4 text-card-foreground">GET Request</h3>
          <p className="text-muted-foreground mb-4">
            Prueba una solicitud GET a /api con parámetro de consulta.
          </p>
          <button
            onClick={testGetRequest}
            disabled={loading}
            className="bg-primary hover:bg-primary/80 disabled:bg-muted text-primary-foreground disabled:text-muted-foreground font-bold py-2 px-4 rounded transition-colors"
          >
            {loading ? 'Cargando...' : 'Probar GET'}
          </button>
        </div>

        {/* POST Request Test */}
        <div className="border border-border p-6 rounded-lg bg-card">
          <h3 className="text-xl font-semibold mb-4 text-card-foreground">POST Request</h3>
          <div className="space-y-3 mb-4">
            <input
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-2 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground"
            />
            <textarea
              placeholder="Mensaje"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-2 border border-border rounded h-20 bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <button
            onClick={testPostRequest}
            disabled={loading}
            className="bg-secondary hover:bg-secondary/80 disabled:bg-muted text-secondary-foreground disabled:text-muted-foreground font-bold py-2 px-4 rounded transition-colors"
          >
            {loading ? 'Enviando...' : 'Probar POST'}
          </button>
        </div>
      </div>

      {/* Response Display */}
      {response && (
        <div className="mt-8 p-6 bg-muted rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-muted-foreground">📄 Respuesta de la API:</h3>
          <pre className="bg-accent text-accent-foreground p-4 rounded overflow-x-auto">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}

      <div className="mt-8 p-4 bg-warning rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-warning-foreground">🎯 Qué observar:</h3>
        <ul className="list-disc list-inside space-y-1 text-warning-foreground">
          <li>Las solicitudes se registran en la consola del navegador y del servidor</li>
          <li>Las respuestas incluyen timestamps y metadatos</li>
          <li>Los errores se manejan apropiadamente</li>
          <li>El estado de loading se maneja durante las solicitudes</li>
        </ul>
      </div>
    </div>
  )
}

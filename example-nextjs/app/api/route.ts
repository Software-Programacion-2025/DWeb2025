import { NextRequest, NextResponse } from 'next/server'

/**
 * API ROUTE (route.ts)
 * Este archivo define un endpoint de API en /api
 * Next.js App Router usa route.ts para crear API endpoints
 * Exporta funciones nombradas para cada método HTTP (GET, POST, etc.)
 */

export async function GET(request: NextRequest) {
  console.info('🔌 [API-ROUTE] GET /api - Procesando solicitud API')
  
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name') || 'Usuario'
  
  return NextResponse.json({
    message: `¡Hola ${name}! Esta es la API principal`,
    timestamp: new Date().toISOString(),
    method: 'GET',
    route: '/api'
  })
}

export async function POST(request: NextRequest) {
  console.info('🔌 [API-ROUTE] POST /api - Procesando solicitud POST')
  
  try {
    const body = await request.json()
    
    return NextResponse.json({
      message: 'Datos recibidos correctamente',
      receivedData: body,
      timestamp: new Date().toISOString(),
      method: 'POST',
      route: '/api'
    })
  } catch (error) {
    console.error('🚨 [API-ROUTE] Error al procesar POST:', error)
    
    return NextResponse.json(
      { error: 'Error al procesar los datos' },
      { status: 400 }
    )
  }
}

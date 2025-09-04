import MyTitle from "@/Components/MyTitle";

/**
 * PÁGINA CONTROL (control/page.tsx)
 * Esta página se renderiza en la ruta /control
 * Ejemplo de otra ruta de primer nivel en la aplicación
 */
export default function Control() {
    // Console.info para rastrear la carga de la página control
    console.info('🎛️ [PAGE] Renderizando página Control - Ruta: /control');
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
            <div className="container mx-auto px-4 py-12">
                <MyTitle />
                
                <div className="max-w-4xl mx-auto">
                    <div className="bg-card text-card-foreground rounded-lg border p-8 shadow-xl">
                        <div className="text-center mb-8">
                            <div className="text-6xl mb-6">🎛️</div>
                            <h1 className="text-4xl font-bold mb-4 text-destructive">Panel de Control</h1>
                            <p className="text-lg text-muted-foreground">
                                Esta es otra página de ejemplo que muestra cómo crear rutas adicionales.
                                Se encuentra en el directorio <code className="bg-gray-100 px-2 py-1 rounded">/app/control/page.tsx</code>
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="bg-primary text-primary-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1">
                                <div className="text-3xl mb-3">📊</div>
                                <h3 className="font-semibold mb-2">Analytics</h3>
                                <p className="text-sm opacity-90">Ver estadísticas</p>
                            </div>
                            
                            <div className="bg-accent text-accent-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1">
                                <div className="text-3xl mb-3">⚙️</div>
                                <h3 className="font-semibold mb-2">Settings</h3>
                                <p className="text-sm opacity-90">Configuración</p>
                            </div>
                            
                            <div className="bg-secondary text-secondary-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1">
                                <div className="text-3xl mb-3">👥</div>
                                <h3 className="font-semibold mb-2">Users</h3>
                                <p className="text-sm opacity-90">Gestión de usuarios</p>
                            </div>
                            
                            <div className="bg-destructive text-destructive-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1">
                                <div className="text-3xl mb-3">🔒</div>
                                <h3 className="font-semibold mb-2">Security</h3>
                                <p className="text-sm opacity-90">Seguridad</p>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <a href="/" className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-lg border px-6 py-3 font-medium transition-colors duration-200 mr-4">
                                ← Volver al Inicio
                            </a>
                            <a href="/admin" className="bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/90 rounded-lg border px-6 py-3 font-medium transition-colors duration-200">
                                Ir a Admin →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   
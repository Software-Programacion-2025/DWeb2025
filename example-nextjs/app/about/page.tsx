import MyTitle from "@/Components/MyTitle";

/**
 * PÁGINA ABOUT (about/page.tsx)
 * Esta página se renderiza en la ruta /about
 * Demuestra cómo Next.js crea rutas basadas en la estructura de carpetas
 */
export default function About() {
    // Console.info para rastrear la carga de la página about
    console.info('ℹ️ [PAGE] Renderizando página About - Ruta: /about');
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
            <div className="container mx-auto px-4 py-12">
                <MyTitle />
                
                <div className="max-w-3xl mx-auto">
                    <div className="bg-card text-card-foreground rounded-lg border p-6 shadow-xl text-center">
                        <div className="text-6xl mb-6">📖</div>
                        <h1 className="text-4xl font-bold mb-6 text-primary">Página About</h1>
                        
                        <p className="text-lg mb-8 text-muted-foreground">
                            Esta es una página de ejemplo que demuestra el routing basado en archivos de Next.js.
                            Se encuentra en el directorio <code className="bg-muted px-2 py-1 rounded">/app/about/page.tsx</code>
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="bg-primary text-primary-foreground rounded-lg border p-4">
                                <h3 className="font-semibold mb-2">🚀 Fast</h3>
                                <p className="text-sm">Optimizada para rendimiento</p>
                            </div>
                            
                            <div className="bg-access text-access-foreground rounded-lg border p-4">
                                <h3 className="font-semibold mb-2">💡 Modern</h3>
                                <p className="text-sm">Tecnologías actuales</p>
                            </div>
                            
                            <div className="bg-print text-print-foreground rounded-lg border p-4">
                                <h3 className="font-semibold mb-2">🔧 Flexible</h3>
                                <p className="text-sm">Fácil de personalizar</p>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <a href="/" className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 border bg-primary text-primary-foreground border-primary hover:opacity-90">
                                ← Volver al Inicio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   
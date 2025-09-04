/**
 * COMPONENTE MyTitle - Título Principal de la Aplicación
 * Componente simple que muestra el título de la aplicación con estilo moderno
 * Incluye badges informativos sobre las tecnologías usadas
 */
export default function MyTitle() {
    return (
        <div className="text-center mb-12">
            {/* Título Principal */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
                🚀 Next.js Routing Demo
            </h1>
            
            {/* Subtítulo descriptivo */}
            <p className="text-lg md:text-xl mb-6 text-muted-foreground">
                Demostración completa del sistema de routing y manejo de estado
            </p>
            
            {/* Badges informativos */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform">
                    ✅ App Router
                </span>
                <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform">
                    🎯 React Context
                </span>
                <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform">
                    💎 TypeScript
                </span>
                <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform">
                    🎨 Modern UI
                </span>
            </div>
            
            {/* Descripción adicional */}
            <div className="max-w-2xl mx-auto p-4 rounded-lg bg-card text-card-foreground">
                <p className="text-sm md:text-base">
                    <strong>📚 Propósito educativo:</strong> Esta aplicación demuestra los conceptos fundamentales 
                    de Next.js con App Router, incluyendo layouts, páginas, rutas dinámicas, manejo de estado 
                    global con React Context, y componentes interactivos.
                </p>
            </div>
        </div>
    );
}

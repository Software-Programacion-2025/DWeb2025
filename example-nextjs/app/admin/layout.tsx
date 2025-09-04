/**
 * LAYOUT ADMIN (admin/layout.tsx)
 * Este layout se aplica específicamente a la ruta /admin y sus subrutas
 * Demuestra cómo crear layouts anidados en Next.js
 * Se combina con el layout raíz para crear la estructura final
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    // Console.info para rastrear la carga del layout de admin
    console.info('👨‍💼 [LAYOUT] Inicializando Layout Admin - Aplica a /admin/*');
    
    return (
        <div className="min-h-screen bg-background">
            {/* Header del Admin */}
            <header className="bg-muted text-muted-foreground shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">👨‍💼 Panel de Administración</h1>
                            <p className="text-sm text-accent">Layout específico para la sección admin</p>
                        </div>
                        
                        <nav className="flex space-x-4">
                            <a href="/" className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-lg border px-4 py-2 font-medium transition-colors duration-200">
                                🏠 Inicio
                            </a>
                            <a href="/users" className="bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/90 rounded-lg border px-4 py-2 font-medium transition-colors duration-200">
                                👥 Usuarios
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
            
            {/* Contenido principal */}
            <main className="container mx-auto p-6">
                {children}
            </main>
            
            {/* Footer del Admin */}
            <footer className="bg-card text-card-foreground p-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>Admin Layout - Solo visible en rutas /admin/*</p>
                </div>
            </footer>
        </div>
    );
}

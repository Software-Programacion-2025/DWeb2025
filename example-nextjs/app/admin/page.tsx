/**
 * PÁGINA ADMIN (admin/page.tsx)
 * Utiliza el layout específico de admin (admin/layout.tsx)
 * Demuestra layouts anidados en Next.js
 */
export default function AdminPage() {
  // Console.info para rastrear la carga de la página admin
  console.info('👨‍💼 [PAGE] Renderizando página Admin - Ruta: /admin');

  return (
    <div className="space-y-8">
      {/* Panel Principal */}
      <div className="bg-primary text-primary-foreground rounded-lg border p-6 shadow-xl">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">🎯</div>
          <h2 className="text-3xl font-bold mb-4">Panel Principal</h2>
          <p className="mb-4 opacity-90">
            Bienvenido al panel de administración. Esta página utiliza un layout específico 
            que se combina con el layout raíz.
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-amber text-amber-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 text-center">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-semibold text-lg">1,234</h3>
            <p className="text-sm opacity-90">Estadísticas</p>
          </div>
          
          <div className="bg-access text-access-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 text-center">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="text-xl font-semibold mb-2">Usuarios</h3>
            <p className="text-sm opacity-90">Gestionar usuarios del sistema</p>
          </div>
          
          <div className="bg-print text-print-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 text-center">
            <div className="text-4xl mb-3">�</div>
            <h3 className="text-xl font-semibold mb-2">Reportes</h3>
            <p className="text-sm opacity-90">Ver estadísticas y análisis</p>
          </div>
          
          <div className="bg-secondary text-secondary-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 text-center">
            <div className="text-4xl mb-3">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">Configuración</h3>
            <p className="text-sm opacity-90">Ajustes del sistema</p>
          </div>
          
          <div className="bg-destructive text-destructive-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Seguridad</h3>
            <p className="text-sm opacity-90">Gestión de permisos</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/users" className="bg-access text-access-foreground shadow-lg hover:bg-access/90 rounded-lg border px-6 py-3 font-medium transition-colors duration-200 text-center">
            👥 Gestionar Usuarios
          </a>
          <a href="/control" className="bg-print text-print-foreground shadow-lg hover:bg-print/90 rounded-lg border px-6 py-3 font-medium transition-colors duration-200 text-center">
            🎛️ Panel de Control
          </a>
        </div>
      </div>

      {/* Info sobre Layouts */}
      <div className="p-6 rounded-lg shadow-lg bg-accent text-accent-foreground">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">💡</div>
          <div>
            <h3 className="font-bold text-lg mb-2">Nota sobre Layouts Anidados</h3>
            <p className="opacity-90">
              Esta página utiliza tanto el layout raíz (app/layout.tsx) como el layout específico 
              de admin (app/admin/layout.tsx). Los layouts se anidan automáticamente en Next.js, 
              proporcionando una estructura de UI consistente y reutilizable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';

/**
 * PÁGINA ÍNDICE DE USUARIOS (users/page.tsx)
 * Esta página lista usuarios y demuestra navegación a rutas dinámicas
 * Se renderiza en la ruta /users
 */
export default function UsersPage() {
  // Console.info para rastrear la carga de la página de usuarios
  console.info('👥 [PAGE] Renderizando página de Usuarios - Ruta: /users');

  const users = [
    { id: '1', name: 'Juan Pérez', role: 'Admin' },
    { id: '2', name: 'María García', role: 'User' },
    { id: '3', name: 'Carlos López', role: 'Moderator' },
    { id: 'admin', name: 'Administrador', role: 'Super Admin' },
    { id: 'test', name: 'Usuario de Prueba', role: 'Test' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">👥 Lista de Usuarios</h1>
      
      <div className="border-l-4 p-4 mb-6 bg-primary text-primary-foreground border-secondary">
        <p className="font-bold">🔗 Rutas Dinámicas:</p>
        <p>
          Esta página demuestra cómo navegar a rutas dinámicas. 
          Haz clic en cualquier usuario para ver su perfil individual.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <Link 
            key={user.id} 
            href={`/users/${user.id}`}
            className="block bg-white shadow hover:shadow-lg transition-all rounded-lg p-4 border border-gray-200 hover:scale-105 hover:border-accent"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-destructive text-destructive-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-gray-600 text-sm">{user.role}</p>
                <p className="text-xs text-primary">ID: {user.id}</p>
              </div>
            </div>
            <div className="mt-3 text-right">
              <span className="text-sm text-secondary">Ver perfil →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">🎯 Qué observar:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Cada enlace lleva a una ruta dinámica /users/[id]</li>
          <li>El parámetro [id] se captura automáticamente</li>
          <li>La página de destino recibe el parámetro como prop</li>
          <li>Puedes usar IDs numéricos o strings</li>
        </ul>
      </div>
    </div>
  );
}

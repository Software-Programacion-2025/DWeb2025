/**
 * PÁGINA DE USUARIO DINÁMICO (users/[id]/page.tsx)
 * Esta es una ruta dinámica que captura parámetros de la URL
 * [id] captura cualquier valor en esa posición de la URL
 * Ejemplo: /users/123, /users/juan, etc.
 */
export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Console.info para rastrear la carga de la página de usuario dinámico
  console.info(`👤 [PAGE] Renderizando página de Usuario - Ruta: /users/${id} - ID: ${id}`);

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">👤 Perfil de Usuario</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="border-b border-gray-200 pb-4 mb-4">
          <h2 className="text-2xl font-semibold">Usuario ID: {id}</h2>
          <p className="text-gray-600">Información del usuario dinámico</p>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-primary text-primary-foreground">
            <h3 className="font-semibold mb-2">🔗 Ruta Dinámica</h3>
            <p>
              Esta página utiliza una ruta dinámica [id] que captura el parámetro de la URL.
            </p>
            <p className="mt-2">
              <strong>Parámetro capturado:</strong> {id}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded bg-secondary text-secondary-foreground">
              <h4 className="font-semibold">📧 Email</h4>
              <p>user{id}@example.com</p>
            </div>
            <div className="p-4 rounded bg-accent text-accent-foreground">
              <h4 className="font-semibold">📅 Registro</h4>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 border-l-4 bg-destructive text-destructive-foreground border-card">
          <p>
            <strong>💡 Tip:</strong> Cambia el ID en la URL para ver cómo la página se adapta dinámicamente.
            Ejemplos: /users/1, /users/admin, /users/test
          </p>
        </div>
      </div>
    </div>
  );
}

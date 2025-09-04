import Link from 'next/link';

/**
 * NOT FOUND UI (not-found.tsx)
 * Este componente se renderiza automáticamente cuando:
 * 1. El usuario navega a una ruta que no existe
 * 2. Una función notFound() es llamada explícitamente
 * Proporciona una experiencia de usuario consistente para errores 404
 */
export default function NotFound() {
    // Console.info para rastrear cuando se accede a una página no encontrada
    console.info('❌ [NOT-FOUND] Página no encontrada - Error 404');

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página No Encontrada</h2>
                <p className="text-gray-600 mb-8">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
                <Link 
                    href="/" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
}
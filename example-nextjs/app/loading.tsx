/**
 * LOADING UI (loading.tsx)
 * Este componente se muestra automáticamente cuando una página está cargando
 * Next.js lo utiliza como fallback mientras se resuelven las páginas
 * Es especialmente útil para rutas que tienen componentes async o Server Components
 */
export default function RootLoading() {
    // Console.info para rastrear cuando se muestra el loading
    console.info('⏳ [LOADING] Mostrando componente de carga global');

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
                <p className="mt-4 text-lg">Cargando aplicación...</p>
            </div>
        </div>
    );
}

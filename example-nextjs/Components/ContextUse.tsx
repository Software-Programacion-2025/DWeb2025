'use client'
import { useAppData } from "@/Context/AppDataContext";
import { useEffect, useState } from "react";

/**
 * COMPONENTE ContextUse - Demostración de Manejo de Estado y Contexto
 * Este componente evidencia el manejo de variables de contexto compartido
 * y demuestra cómo los cambios de estado se propagan por la aplicación
 */
export default function ContextUse() {
    // Estados locales del componente
    const [localCounter, setLocalCounter] = useState(0);
    const [showAdvanced, setShowAdvanced] = useState(false);
    
    // Extracción de estados y funciones del contexto global
    const { 
        sharedValue, 
        setSharedValue,
        theme,
        setTheme,
        userPreferences,
        setUserPreferences,
        globalCounter,
        incrementGlobalCounter,
        decrementGlobalCounter,
        isOnline,
        setIsOnline
    } = useAppData();

    // Efectos para rastrear cambios en el contexto
    useEffect(() => {
        console.info(`🔄 [MyTitle] sharedValue cambió a: "${sharedValue}"`);
    }, [sharedValue]);

    useEffect(() => {
        console.info(`🎨 [MyTitle] Tema cambió a: ${theme}`);
    }, [theme]);

    useEffect(() => {
        console.info(`🔢 [MyTitle] Contador global: ${globalCounter}`);
    }, [globalCounter]);

    useEffect(() => {
        console.info(`🌐 [MyTitle] Estado de conexión: ${isOnline ? 'Online' : 'Offline'}`);
    }, [isOnline]);

    // Función para alternar preferencias
    const toggleNotifications = () => {
        const newPrefs = { 
            ...userPreferences, 
            notifications: !userPreferences.notifications 
        };
        setUserPreferences(newPrefs);
        console.info('🔔 [MyTitle] Notificaciones:', newPrefs.notifications ? 'Activadas' : 'Desactivadas');
    };

    const toggleAutoSave = () => {
        const newPrefs = { 
            ...userPreferences, 
            autoSave: !userPreferences.autoSave 
        };
        setUserPreferences(newPrefs);
        console.info('💾 [MyTitle] AutoSave:', newPrefs.autoSave ? 'Activado' : 'Desactivado');
    };

    return (
        <div className="bg-constructive text-constructive-foreground rounded-lg border p-6 shadow-lg max-w-4xl mx-auto my-8">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold mb-2">
                    🎯 Demostración de Estado y Contexto
                </h1>
                <p className="text-sm opacity-80">
                    Este componente muestra el manejo de variables de contexto compartido
                </p>
            </div>

            {/* Sección de Usuario */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Input de Usuario */}
                <div className="space-y-3">
                    <label className="block font-semibold text-accent">
                        👤 Usuario Actual (Contexto Global):
                    </label>
                    <input
                        className="input-modern w-full"
                        type="text"
                        placeholder="Ingrese su nombre"
                        value={sharedValue}
                        onChange={(e) => {
                            setSharedValue(e.target.value);
                            console.info(`✏️ [MyTitle] Usuario actualizado: "${e.target.value}"`);
                        }}
                    />
                    <p className="text-xs text-muted-foreground">
                        Este valor se comparte en toda la aplicación
                    </p>
                </div>

                {/* Estado de Conexión */}
                <div className="space-y-3">
                    <label className="block font-semibold text-accent">
                        🌐 Estado de Conexión:
                    </label>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => {
                                setIsOnline(!isOnline);
                                console.info(`🌐 [MyTitle] Conexión cambiada a: ${!isOnline ? 'Online' : 'Offline'}`);
                            }}
                            className={`${isOnline ? 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/90' : 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90'} rounded-lg border px-4 py-2 font-medium transition-colors duration-200`}
                        >
                            {isOnline ? '🟢 Online' : '🔴 Offline'}
                        </button>
                        <span className="text-sm text-muted-foreground">
                            Click para cambiar estado
                        </span>
                    </div>
                </div>
            </div>

            {/* Sección de Contadores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Contador Global (Contexto) */}
                <div className="bg-primary text-primary-foreground rounded-lg border p-6 shadow-lg">
                    <h3 className="font-semibold mb-3">🌍 Contador Global (Contexto)</h3>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{globalCounter}</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    decrementGlobalCounter();
                                    console.info(`➖ [MyTitle] Contador global decrementado: ${globalCounter - 1}`);
                                }}
                                className="bg-background text-primary shadow-xs hover:bg-background/90 rounded-lg border px-4 py-2 font-medium transition-colors duration-200"
                            >
                                -
                            </button>
                            <button
                                onClick={() => {
                                    incrementGlobalCounter();
                                    console.info(`➕ [MyTitle] Contador global incrementado: ${globalCounter + 1}`);
                                }}
                                className="bg-background text-primary shadow-xs hover:bg-background/90 rounded-lg border px-4 py-2 font-medium transition-colors duration-200"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <p className="text-xs opacity-90 mt-2">Se sincroniza en toda la app</p>
                </div>

                {/* Contador Local */}
                <div className="bg-accent text-accent-foreground rounded-lg border p-6 shadow-lg">
                    <h3 className="font-semibold mb-3">🏠 Contador Local (Componente)</h3>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{localCounter}</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    setLocalCounter(prev => prev - 1);
                                    console.info(`➖ [MyTitle] Contador local decrementado: ${localCounter - 1}`);
                                }}
                                className="bg-background text-accent shadow-xs hover:bg-background/90 rounded-lg border px-4 py-2 font-medium transition-colors duration-200"
                            >
                                -
                            </button>
                            <button
                                onClick={() => {
                                    setLocalCounter(prev => prev + 1);
                                    console.info(`➕ [MyTitle] Contador local incrementado: ${localCounter + 1}`);
                                }}
                                className="bg-background text-accent shadow-xs hover:bg-background/90 rounded-lg border px-4 py-2 font-medium transition-colors duration-200"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <p className="text-xs opacity-90 mt-2">Solo en este componente</p>
                </div>
            </div>

            {/* Configuraciones Avanzadas */}
            <div className="border-t pt-4">
                <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/90 rounded-lg border px-6 py-3 font-medium transition-colors duration-200 mb-4"
                >
                    {showAdvanced ? '🔼 Ocultar' : '🔽 Mostrar'} Configuraciones Avanzadas
                </button>

                {showAdvanced && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Tema */}
                        <div className="space-y-2">
                            <label className="block font-semibold text-destructive">
                                🎨 Tema:
                            </label>
                            <select
                                value={theme}
                                onChange={(e) => {
                                    setTheme(e.target.value as 'light' | 'dark');
                                    console.info(`🎨 [MyTitle] Tema cambiado a: ${e.target.value}`);
                                }}
                                className="input-modern w-full"
                            >
                                <option value="light">☀️ Claro</option>
                                <option value="dark">🌙 Oscuro</option>
                            </select>
                        </div>

                        {/* Notificaciones */}
                        <div className="space-y-2">
                            <label className="block font-semibold text-destructive">
                                🔔 Notificaciones:
                            </label>
                            <button
                                onClick={toggleNotifications}
                                className={`w-full rounded-lg border px-6 py-3 font-medium transition-colors duration-200 shadow-xs ${userPreferences.notifications ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
                            >
                                {userPreferences.notifications ? '🔔 Activadas' : '🔕 Desactivadas'}
                            </button>
                        </div>

                        {/* AutoSave */}
                        <div className="space-y-2">
                            <label className="block font-semibold text-destructive">
                                💾 Auto-Guardado:
                            </label>
                            <button
                                onClick={toggleAutoSave}
                                className={`w-full rounded-lg border px-6 py-3 font-medium transition-colors duration-200 shadow-xs ${userPreferences.autoSave ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
                            >
                                {userPreferences.autoSave ? '💾 Activado' : '📝 Manual'}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Información de Estado */}
            <div className="mt-6 p-4 rounded-lg bg-surface">
                <h4 className="font-semibold mb-2 text-muted">
                    📊 Estado Actual del Contexto:
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <strong>Usuario:</strong><br />
                        <span className="text-primary">{sharedValue || '(vacío)'}</span>
                    </div>
                    <div>
                        <strong>Tema:</strong><br />
                        <span className="text-secondary">{theme}</span>
                    </div>
                    <div>
                        <strong>Conexión:</strong><br />
                        <span className={isOnline ? 'text-secondary' : 'text-destructive'}>
                            {isOnline ? 'Online' : 'Offline'}
                        </span>
                    </div>
                    <div>
                        <strong>Idioma:</strong><br />
                        <span className="text-accent">{userPreferences.language}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
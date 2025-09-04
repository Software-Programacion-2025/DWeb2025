'use client'
import { useAppData } from "@/Context/AppDataContext";
import { useEffect, useState } from "react";

/**
 * COMPONENTE ThemeProvider
 * Maneja la aplicación del tema a nivel del documento
 * Sincroniza el tema del contexto con el DOM
 */
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useAppData();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;
        
        // Aplicar la clase del tema al elemento HTML solo en el cliente
        const htmlElement = document.documentElement;
        
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            console.info('🌙 [THEME] Tema oscuro aplicado al HTML');
        } else {
            htmlElement.classList.remove('dark');
            console.info('☀️ [THEME] Tema claro aplicado al HTML');
        }
    }, [theme, isClient]);

    return <>{children}</>;
}

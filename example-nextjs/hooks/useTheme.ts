'use client'
import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar la hidratación del tema
 * Evita problemas de hidratación entre servidor y cliente
 */
export function useTheme() {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const [isHydrated, setIsHydrated] = useState(false);

  // Inicializar tema desde localStorage solo en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('app-theme') as 'light' | 'dark' | null;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setThemeState(savedTheme);
        console.info(`🎨 [HOOK] Tema restaurado desde localStorage: ${savedTheme}`);
      } else {
        console.info(`🎨 [HOOK] No hay tema guardado, usando tema por defecto: light`);
      }
      setIsHydrated(true);
    }
  }, []);

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('app-theme', newTheme);
      console.info(`🎨 [HOOK] Tema guardado en localStorage: ${newTheme}`);
    }
  };

  return { theme, setTheme, isHydrated };
}

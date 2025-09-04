"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useTheme } from "@/hooks/useTheme";

// Definición del tipo de datos a compartir
interface AppDataContextType {
  // Estados de usuario
  sharedValue: string;
  setSharedValue: (value: string) => void;
  
  // Estados de tema
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  
  // Estados de configuración
  userPreferences: {
    language: string;
    notifications: boolean;
    autoSave: boolean;
  };
  setUserPreferences: (preferences: any) => void;
  
  // Contador global
  globalCounter: number;
  setGlobalCounter: (count: number) => void;
  incrementGlobalCounter: () => void;
  decrementGlobalCounter: () => void;
  
  // Estado de conexión
  isOnline: boolean;
  setIsOnline: (status: boolean) => void;
}

// Contexto con valores por defecto
const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppData debe usarse dentro de AppDataProvider");
  }
  return context;
};

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  // Usar el hook personalizado para el tema
  const { theme, setTheme } = useTheme();
  
  // Estados principales (sin tema, ya lo maneja el hook)
  const [sharedValue, setSharedValue] = useState<string>("Usuario Demo");
  const [globalCounter, setGlobalCounter] = useState<number>(0);
  const [isOnline, setIsOnline] = useState<boolean>(true);
  
  // Estado de preferencias de usuario
  const [userPreferences, setUserPreferences] = useState({
    language: 'es',
    notifications: true,
    autoSave: false
  });
  
  // Funciones helper para el contador
  const incrementGlobalCounter = () => setGlobalCounter(prev => prev + 1);
  const decrementGlobalCounter = () => setGlobalCounter(prev => prev - 1);

  console.info('🔄 [CONTEXT] AppDataProvider renderizado - Estados actualizados');

  return (
    <AppDataContext.Provider value={{ 
      sharedValue, 
      setSharedValue,
      theme,
      setTheme,
      userPreferences,
      setUserPreferences,
      globalCounter,
      setGlobalCounter,
      incrementGlobalCounter,
      decrementGlobalCounter,
      isOnline,
      setIsOnline
    }}>
      {children}
    </AppDataContext.Provider>
  );
};
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Definición del tipo de datos a compartir
interface AppDataContextType {
  sharedValue: string;
  setSharedValue: (value: string) => void;
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
  const [sharedValue, setSharedValue] = useState<string>("");

  return (
    <AppDataContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </AppDataContext.Provider>
  );
};
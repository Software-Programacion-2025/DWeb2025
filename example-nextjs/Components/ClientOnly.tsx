'use client'
import { useEffect, useState } from 'react';

/**
 * Componente que solo renderiza children después de la hidratación
 * Evita problemas de mismatch entre servidor y cliente
 */
export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Renderizar un contenido mínimo idéntico al servidor
    return null;
  }

  return <>{children}</>;
}

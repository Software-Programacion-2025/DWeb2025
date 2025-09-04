'use client'

import { useState, useEffect } from "react";
import { useAppData } from "@/Context/AppDataContext";

export default function Counter() {
    // Usar el contexto global en lugar del estado local
    const { globalCounter, incrementGlobalCounter, decrementGlobalCounter, setGlobalCounter } = useAppData();
    const [message, setMessage] = useState("El contador global es CERO");

    const reset = () => {
        console.info('🔄 [COUNTER] Reset del contador global desde Counter component');
        setGlobalCounter(0);
        setMessage("El contador global es CERO");
    };

    // Este se ejecuta en cada renderizado del componente
    useEffect(() => {
        console.info("🔄 [COUNTER] El componente Counter se ha montado o actualizado");
    });

    // Este se ejecuta solo una vez cuando el componente se monta
    useEffect(() => {
        console.info("🚀 [COUNTER] El componente Counter se ha montado");
        return () => {
            console.info("🔥 [COUNTER] El componente Counter se ha desmontado");
        };
    }, []);

    // Este se ejecuta cada vez que 'globalCounter' cambia
    useEffect(() => {
        console.info("📊 [COUNTER] El contador global ha cambiado:", globalCounter);
        if (globalCounter < 0) {
            setMessage("El contador global es inferior a CERO");
        } else {
            if (globalCounter > 0) {
                setMessage("El contador global es mayor a CERO");
            } else {
                setMessage("El contador global es CERO");
            }
        }
    }, [globalCounter]);

    // Funciones que usan el contexto global
    const handleIncrement = () => {
        console.info('➕ [COUNTER] Incrementando contador global desde Counter component');
        incrementGlobalCounter();
    };

    const handleDecrement = () => {
        console.info('➖ [COUNTER] Decrementando contador global desde Counter component');
        decrementGlobalCounter();
    };

    // Esta funcion hace lo mismo que la "ternaria" del H3
    function handleChangeCount() {
        if (globalCounter < 0) {
            return "text-red-600";
        } else {
            if (globalCounter > 0) {
                return "text-green-600";
            } else {
                return "text-slate-600";
            }
        }
    }

    return (
        <div className="grid text-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
                <span className="mr-4 font-bold text-stone-300">El contador global vale: </span>
                <h5 className={handleChangeCount() + " text-xl"}> {globalCounter}</h5>
            </div>
            <h3 className={globalCounter < 0 ? "text-red-600" : globalCounter > 0 ? "text-green-600" : "text-slate-600"}>{message}</h3>
            <div className="flex items-center justify-center gap-3">
                <button onClick={handleIncrement} className="w-24 p-2 rounded-2xl bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/90 transition-colors duration-200">+</button>
                <button onClick={handleDecrement} className="w-24 p-2 rounded-2xl bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90 transition-colors duration-200">-</button>
            </div>
            <div className="flex items-center justify-center gap-3">
                <button onClick={reset} className="w-36 p-2 rounded-2xl bg-muted text-muted-foreground shadow-xs hover:bg-muted/90 transition-colors duration-200">volver a Cero</button>
            </div>
            
            {/* Información adicional sobre el contexto */}
            <div className="mt-4 p-3 rounded-lg bg-primary text-primary-foreground">
                <p className="text-sm">
                    <strong>🌐 Estado Global:</strong> Este contador usa el contexto global.
                    Los cambios se reflejan en tiempo real en MyTitle y otros componentes.
                </p>
            </div>

        </div>
    )
}
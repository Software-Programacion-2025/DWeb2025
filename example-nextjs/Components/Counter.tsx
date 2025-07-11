'use client'

import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [mensage, setMessage] = useState("El contador es CERO");


    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
        setMessage("El contador es CERO");
    };

    // Este se ejecuta en cada renderizado del componente
    useEffect(() => {
        console.log("El componente se ha montado o actualizado");
    });

    // Este se ejecuta solo una vez cuando el componente se monta
    useEffect(() => {
        console.log("El componente se ha montado");
        return () => {
            console.log("El componente se ha desmontado");
        };
    }, []);


    // Este se ejecuta cada vez que 'count' cambia
    useEffect(() => {
        console.log("El contador ha cambiado:", count);
        if (count < 0) {
            setMessage("El contador es inferior a CERO");
        } else {
            if (count > 0) {
                setMessage("El contador es mayor a CERO");
            } else {
                setMessage("El contador es CERO");
            }
        }
    }, [count]);


    // Esta funcion hace lo mismo que la "ternaria" del H3
    function handleChangeCount() {
        if (count < 0) {
            return "text-red-600";
        } else {
            if (count > 0) {
                return "text-emerald-700";
            } else {
                return "text-black";
            }
        }
    }

    return (
        <div className="grid text-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
                <span className="mr-4 font-bold text-stone-300">El contador vale: </span>
                <h5 className={handleChangeCount() + " text-xl"}> {count}</h5>
            </div>
            <h3 className={count < 0 ? "text-red-600" : count > 0 ? "text-emerald-700" : "text-black"}>{mensage}</h3>
            <div className="flex items-center justify-center gap-3">
                <button onClick={increment} className="bg-green-700 text-teal-100 w-24 p-2 rounded-2xl">+</button>
                <button onClick={decrement} className="bg-red-700 text-gray-700 w-24 p-2 rounded-2xl">-</button>
            </div>
            <div className="flex items-center justify-center gap-3">
                <button onClick={reset} className="bg-black text-white w-36 p-2 rounded-2xl">volver a Cero</button>
            </div>

        </div>
    )
}
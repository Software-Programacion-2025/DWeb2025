'use client'
import { useAppData } from "@/Context/AppDataContext";
import { useEffect, useState } from "react";

export default function MyTitle() {
    const [username, setUsername] = useState("");
    const { sharedValue, setSharedValue } = useAppData();

    // Este se ejecuta cada vez que 'count' cambia
    useEffect(() => {
        console.log("El nombre de Usuario es: ", sharedValue);
    }, [sharedValue]);
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center m-8">
                Example App in NextJS
            </h1>
            <div className="flex items-center gap-2">
                <label htmlFor="usernane">Ingrese su Username:</label>
                <input
                    className="border-2 border-blue-600 p-2 rounded-lg bg-white text-black"
                    type="text"
                    name="usernane"
                    id="usernane"
                    placeholder=""
                    value={sharedValue}
                    onChange={(e) => setSharedValue(e.target.value)}
                />
            </div>
        </div>
    )
}
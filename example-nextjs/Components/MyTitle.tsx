'use client'
import { useEffect, useState } from "react";

export default function MyTitle() {
    const [username, setUsername] = useState("");

    // Este se ejecuta cada vez que 'count' cambia
    useEffect(() => {
        console.log("El nombre de Usuario es: ", username);
    }, [username]);
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center m-8">
                Example App in NextJS
            </h1>
            <input
                className="border-2 border-blue-600 p-2 rounded-lg bg-white text-black"
                type="text"
                name="usernane"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
    )
}
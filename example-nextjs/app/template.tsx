'use client'
import Whatsapp from "@/Components/Whatsapp/Whatsapp";
import { usePathname } from "next/navigation";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
    const isInAdmin = usePathname().includes("/admin");
    console.log("Loading Root Template...");

    return (
        <div>
            {children}
            {!isInAdmin && <Whatsapp phoneNumber="5492314613205" positionX="30px" positionY="30px" />}
            {!isInAdmin && <Whatsapp phoneNumber="5492314613205" positionX="30px" positionY="120px" />}
        </div>
    );
}

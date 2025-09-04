'use client'
import Whatsapp from "@/Components/Whatsapp/Whatsapp";
import { usePathname } from "next/navigation";

/**
 * TEMPLATE (template.tsx)
 * Similar a layout.tsx pero se re-renderiza en cada navegación
 * Útil para animaciones de entrada/salida, resetear estado entre páginas
 * A diferencia de layout, template NO mantiene estado entre navegaciones
 */
export default function RootTemplate({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isInAdmin = pathname.includes("/admin");
    
    // Console.info para rastrear el re-renderizado del template
    console.info(`🔄 [TEMPLATE] Re-renderizando template - Ruta actual: ${pathname}`);

    return (
        <div>
            {children}
            {/* Renderizar componentes de WhatsApp solo fuera del admin */}
            {!isInAdmin && (
                <>
                    <Whatsapp phoneNumber="5492314613205" positionX="30px" positionY="30px" />
                </>
            )}
        </div>
    );
}

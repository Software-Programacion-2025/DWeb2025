'use client';

import Counter from "@/Components/Counter";
import MyTitle from "@/Components/MyTitle";
import ContextUse from "@/Components/ContextUse";
import Button from "@/Components/Button";
import { FaTruck, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import { APP_NAME, APP_VERSION, APP_DEV_COMPANY } from "@/Types/env";
import Image from "next/image";

import { useAppData } from '@/Context/AppDataContext'

/**
 * PÁGINA PRINCIPAL (page.tsx)
 * Esta es la página principal de la aplicación que se renderiza en la ruta "/"
 * Next.js busca automáticamente archivos page.tsx para crear rutas
 */
export default function Home() {
  // Console.info para rastrear la carga de la página principal
  console.info('🏠 [PAGE] Renderizando página principal (Home) - Ruta: /');

  const { sharedValue } = useAppData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Título Principal */}
        <MyTitle />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-secondary">
            {APP_NAME}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explora el sistema de routing de Next.js con ejemplos interactivos y logging detallado
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-access text-access-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3">📖 Páginas Básicas</h3>
            <div className="space-y-2">
              <Button label="About" url="/about" variant="access" />
              <Button label="Control" url="/control" variant="secondary" />
            </div>
          </div>

          <div className="bg-amber text-amber-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3">👥 Gestión</h3>
            <div className="space-y-2">
              <Button label="Admin Panel" url="/admin" variant="amber" />
              <Button label="Users" url="/users" variant="noselect" />
            </div>
          </div>

          <div className="bg-print text-print-foreground rounded-lg border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3">🧪 Pruebas</h3>
            <div className="space-y-2">
              <Button label="Error Testing" url="/error-test" variant="destructive" />
              <Button label="API Testing" url="/api-test" variant="secondary" />
            </div>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Global Counter Component */}
          <div className="bg-secondary text-secondary-foreground rounded-lg border p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">🌐 Global State Counter</h3>
            <div className="mb-3 p-2 rounded text-sm bg-primary text-primary-foreground">
              <strong>💡 Tip:</strong> Este contador usa el contexto global. Los cambios se sincronizan
              automáticamente con MyTitle y otros componentes que usen el mismo estado.
            </div>
            <Counter />
          </div>

          {/* App Info */}
          <div className="bg-muted text-muted-foreground rounded-lg border p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">ℹ️ App Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Version:</span>
                <span className="font-semibold">{APP_VERSION}</span>
              </div>
              <div className="flex justify-between">
                <span>Company:</span>
                <span className="font-semibold">{APP_DEV_COMPANY}</span>
              </div>
              <div className="flex justify-between">
                <span>Shared Value:</span>
                <span className="font-semibold text-primary">{sharedValue}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Context Demonstration */}
        <div className="mb-12">
          <ContextUse />
        </div>

        {/* Next.js Logo */}
        <div className="text-center">
          <Image
            className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
            src="/next.svg"
            alt="Next.js logo"
            width={200}
            height={50}
            priority
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4">
          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-4 py-4">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
              <FaYoutube className="h-12 w-12 text-gray-900 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="h-12 w-12 text-gray-900 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="h-12 w-12 text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition" />
            </a>
            <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FaTwitter className="h-12 w-12 text-gray-900 dark:text-gray-400 hover:text-black dark:hover:text-white transition" />
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">🚀 Next.js Routing Demo</h3>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a
                className="hover:opacity-80 transition-opacity text-amber"
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                📚 Learn Next.js
              </a>
              <a
                className="hover:opacity-80 transition-opacity text-amber"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                📖 Documentation
              </a>
              <a
                className="hover:opacity-80 transition-opacity text-amber"
                href="https://github.com/vercel/next.js"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { FaYoutube, FaInstagram, FaFacebook, FaXTwitter, FaTiktok } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-8 mt-16">
            <div className="container mx-auto px-4">
                {/* Social Media Links */}
                <div className="flex flex-wrap justify-center gap-4 py-4">
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                        <FaYoutube className="h-12 w-12 text-gray-800 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="h-12 w-12 text-gray-800 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition" />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="h-12 w-12 text-gray-800 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition" />
                    </a>
                    <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                        <FaXTwitter className="h-12 w-12 text-gray-800 dark:text-gray-400 hover:text-black dark:hover:text-white transition" />
                    </a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <FaTiktok className="h-12 w-12 text-gray-800 dark:text-gray-400 hover:text-black dark:hover:text-white transition" />
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
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Ejemplo Next.js. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}
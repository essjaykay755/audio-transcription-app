import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/5 dark:bg-zinc-900/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              VoxScribe
            </h3>
            <p className="text-gray-600 dark:text-zinc-400">
              Transform your audio into text with cutting-edge AI technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">About</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/essjaykay755/voxscribe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200/10 dark:border-zinc-800">
          <p className="text-center text-gray-600 dark:text-zinc-400">
            © {new Date().getFullYear()} VoxScribe. Built by{' '}
            <a 
              href="https://essjaykay.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              EssJayKay.dev
            </a>
            {' '}| Open source on{' '}
            <a 
              href="https://github.com/essjaykay755/voxscribe"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

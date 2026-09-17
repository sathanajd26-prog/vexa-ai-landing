export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-lg font-bold text-gray-900">Vexa AI</span>

        <p className="text-sm text-gray-500 order-3 md:order-2">© {new Date().getFullYear()} Vexa AI. All rights reserved.</p>

        <div className="flex gap-5 order-2 md:order-3">
          <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 4.9c-.8.4-1.6.6-2.5.7.9-.5 1.6-1.4 1.9-2.4-.8.5-1.8.9-2.7 1.1A4.3 4.3 0 0 0 16.5 3c-2.4 0-4.3 2-4.3 4.4 0 .3 0 .7.1 1A12.1 12.1 0 0 1 3.2 3.9a4.4 4.4 0 0 0 1.3 5.9c-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.9 3.4 4.3-.6.2-1.2.2-1.9.1.5 1.7 2.1 3 4 3a8.6 8.6 0 0 1-6.3 1.8A12.1 12.1 0 0 0 8.1 21c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2.2-2.1z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.66 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
            </svg>
          </a>
          <a href="#" aria-label="GitHub" className="text-gray-500 hover:text-gray-900">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.2 2.47.1 2.73.65.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
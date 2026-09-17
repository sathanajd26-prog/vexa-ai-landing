export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Build Smarter with AI
        </h1>
        <p className="mt-5 text-gray-600 text-lg max-w-md mx-auto md:mx-0">
          Vexa AI helps you automate workflows, generate insights, and ship
          products faster, powered by intelligent, easy-to-use tools.
        </p>
        <a href="#get-started" className="inline-block mt-8 bg-gray-900 text-white font-medium px-7 py-3 rounded-full hover:bg-gray-700 transition-colors">
          Get Started
        </a>
      </div>

      <div className="flex-1 flex justify-center">
        <svg viewBox="0 0 400 320" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="40" width="360" height="240" rx="20" fill="#F3F4F6" />
          <circle cx="200" cy="150" r="70" fill="#111827" opacity="0.9" />
          <circle cx="200" cy="150" r="40" fill="#ffffff" opacity="0.9" />
          <rect x="60" y="230" width="90" height="14" rx="7" fill="#D1D5DB" />
          <rect x="250" y="230" width="90" height="14" rx="7" fill="#D1D5DB" />
          <circle cx="80" cy="90" r="8" fill="#9CA3AF" />
          <circle cx="320" cy="90" r="8" fill="#9CA3AF" />
        </svg>
      </div>
    </section>
  );
}

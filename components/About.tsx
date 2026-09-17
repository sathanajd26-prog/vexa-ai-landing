export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 flex justify-center order-2 md:order-1">
        <svg viewBox="0 0 300 260" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="260" height="220" rx="18" fill="#F3F4F6" />
          <rect x="50" y="60" width="200" height="16" rx="8" fill="#D1D5DB" />
          <rect x="50" y="95" width="160" height="16" rx="8" fill="#D1D5DB" />
          <rect x="50" y="130" width="180" height="16" rx="8" fill="#D1D5DB" />
          <circle cx="150" cy="190" r="24" fill="#111827" />
        </svg>
      </div>

      <div className="flex-1 order-1 md:order-2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Vexa AI</h2>
        <p className="text-gray-600 leading-relaxed">
          Vexa AI is built for teams who want to move faster without sacrificing quality. Our platform combines powerful automation with intuitive design, giving you the tools to build, analyze, and scale your ideas, all in one place.
        </p>
      </div>
    </section>
  );
}
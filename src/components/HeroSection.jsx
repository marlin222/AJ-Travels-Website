import { Link } from 'react-router-dom'

/**
 * Full-viewport hero section with layered background image,
 * gradient overlay, animated text, and dual CTA buttons.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/adventure-hero/1920/1080')",
        }}
      />

      {/* ── Gradient overlay (blue-dark → transparent → sunset-orange hint) ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-brand-blue-dark/60 to-brand-orange-dark/30" />

      {/* ── Decorative bottom fade ── */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />

      {/* ── Scroll indicator ── */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center py-32">

        {/* Label chip */}
        <span className="inline-block px-5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
                         bg-brand-orange/90 text-white mb-6 animate-fade-in">
          Adventure Journeys Travel & Tourism
        </span>

        {/* Main heading */}
        <h1
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                     text-white leading-[1.05] text-shadow mb-6
                     animate-slide-up delay-100"
        >
          Explore the World<br />
          <span className="text-brand-orange-light italic">With Confidence.</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up delay-200">
          Handcrafted journeys to the planet's most breathtaking destinations.
          Expert guides, immersive experiences, and memories that last a lifetime.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
          <Link to="/destinations" className="btn-primary text-base px-8 py-4">
            Explore Destinations
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link to="/tours" className="btn-outline text-base px-8 py-4">
            View Tour Packages
          </Link>
        </div>

        {/* Trust micro-stats */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-14 animate-fade-in delay-400">
          {[
            { value: 'Est. 2025', label: 'Namibia-Based' },
            { value: '50k+', label: 'Happy Travellers' },
            { value: '85+', label: 'Destinations' },
            { value: '98%', label: 'Satisfaction Rate' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-2xl text-white">{value}</div>
              <div className="text-xs text-white/60 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

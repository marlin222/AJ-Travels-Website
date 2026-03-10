import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Full-viewport hero section with looping background video,
 * gradient overlay, framer-motion text animations, and dual CTA buttons.
 *
 * VIDEO SETUP: Place your video file at /public/hero-video.mp4
 * (and optionally /public/hero-video.webm for broader browser support).
 * Free travel footage: https://www.pexels.com/search/videos/aerial%20landscape/
 * Until the file is added, the poster image is shown as fallback.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay },
  }),
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
        poster="https://picsum.photos/seed/adventure-hero/1920/1080"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="/hero-video.webm" type="video/webm" />
      </video>

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-brand-blue-dark/60 to-brand-orange-dark/30" />

      {/* ── Decorative bottom fade ── */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />

      {/* ── Scroll indicator ── */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors z-10"
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
        <motion.span
          variants={fadeIn}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="inline-block px-5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
                     bg-brand-orange/90 text-white mb-6"
        >
          Adventure Journeys Travel & Tourism
        </motion.span>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.25}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                     text-white leading-[1.05] text-shadow mb-6"
        >
          Explore the World<br />
          <span className="text-brand-orange-light italic">With Confidence.</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Handcrafted journeys to the planet's most breathtaking destinations.
          Expert guides, immersive experiences, and memories that last a lifetime.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.55}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/destinations" className="btn-primary text-base px-8 py-4">
            Explore Destinations
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link to="/tours" className="btn-outline text-base px-8 py-4">
            View Tour Packages
          </Link>
        </motion.div>

        {/* Trust micro-stats */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          custom={0.75}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-14"
        >
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
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Inner-page hero banner (shorter than the full-height home hero).
 * Props:
 *   title      – main heading
 *   subtitle   – supporting text
 *   image      – picsum URL (optional)
 *   imageSeed  – picsum seed string (used if image is not provided)
 */
export default function PageBanner({ title, subtitle, imageSeed = 'travel-banner', image }) {
  const bg = image || `https://picsum.photos/seed/${imageSeed}/1920/600`

  return (
    <section className="relative flex items-center justify-center h-64 sm:h-80 md:h-96 overflow-hidden pt-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bg}')` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-brand-blue-dark/70 to-brand-orange-dark/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-5">
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white text-shadow mb-3 animate-slide-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-white/75 max-w-xl mx-auto animate-fade-in delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

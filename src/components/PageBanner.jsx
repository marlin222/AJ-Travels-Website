/**
 * Inner-page hero banner (shorter than the full-height home hero).
 *
 * Props:
 *   title      – main heading
 *   subtitle   – supporting text
 *   video      – video src path (e.g. "/banners/destinations.mp4").
 *                When provided, behaves exactly like HeroSection — looping
 *                video with the image/imageSeed as a poster fallback.
 *   image      – full image URL (optional, overrides imageSeed; also used as
 *                poster when video is supplied)
 *   imageSeed  – picsum seed string (used when neither image nor video poster
 *                is provided)
 *
 * Without a video the banner falls back to a Ken Burns animated image.
 *
 * VIDEO SETUP
 * -----------
 * Drop your .mp4 (and optionally .webm) files in /public/banners/.
 * Example usage:
 *   <PageBanner
 *     title="Destinations"
 *     video="/banners/destinations.mp4"
 *     imageSeed="destinations-banner"
 *   />
 * Free aerial footage: https://www.pexels.com/search/videos/aerial%20landscape/
 */
export default function PageBanner({ title, subtitle, imageSeed = 'travel-banner', image, video }) {
  const poster = image || `https://picsum.photos/seed/${imageSeed}/1920/600`

  return (
    <section className="relative flex items-center justify-center h-64 sm:h-80 md:h-96 overflow-hidden pt-20">

      {video ? (
        /* ── Video background (same as HeroSection) ── */
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          {/* WebM for broader browser support; MP4 as primary */}
          <source src={video.replace(/\.mp4$/, '.webm')} type="video/webm" />
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        /* ── Fallback: Ken Burns animated image ── */
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
      )}

      {/* Gradient overlay */}
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

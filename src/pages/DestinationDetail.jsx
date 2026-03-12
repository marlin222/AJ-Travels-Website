import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function DestinationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const destination = destinations.find((d) => d.id === Number(id))

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
        <h1 className="font-display text-3xl font-bold text-slate-800">Destination Not Found</h1>
        <p className="text-slate-500">We couldn't find that destination. Try browsing all destinations.</p>
        <Link to="/destinations" className="btn-primary">View All Destinations</Link>
      </div>
    )
  }

  const {
    name, tagline, description, image, price, currency,
    badge, badgeColor, category, country,
    duration, bestTimeToVisit, weather, difficulty,
    highlights = [], includes = [], itinerary = [],
  } = destination

  // Related destinations (same category, excluding current)
  const related = destinations
    .filter((d) => d.category === category && d.id !== destination.id)
    .slice(0, 3)

  const difficultyColor =
    difficulty?.toLowerCase().includes('easy') ? 'text-emerald-600 bg-emerald-50' :
    difficulty?.toLowerCase().includes('moderate') ? 'text-amber-600 bg-amber-50' :
    'text-rose-600 bg-rose-50'

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero Banner ── */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />

        {/* Back button */}
        <div className="absolute top-24 left-0 right-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm
                       text-white text-sm font-medium border border-white/30
                       hover:bg-white/30 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back
          </button>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 inset-x-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {badge && (
              <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide text-white ${badgeColor}`}>
                {badge}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {category}
            </span>
            {difficulty && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
                {difficulty}
              </span>
            )}
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-2">
            {name}
          </h1>
          <p className="text-white/80 text-lg italic">{tagline}</p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── Left Column (main content) ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="font-display font-bold text-2xl text-slate-800 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{description}</p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {duration && (
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">📅</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Duration</div>
                    <div className="text-sm font-semibold text-slate-800 mt-1">{duration}</div>
                  </div>
                )}
                {country && (
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">📍</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Country</div>
                    <div className="text-sm font-semibold text-slate-800 mt-1">{country}</div>
                  </div>
                )}
                {difficulty && (
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">🥾</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Difficulty</div>
                    <div className={`text-sm font-semibold mt-1 px-2 py-0.5 rounded-full inline-block ${difficultyColor}`}>{difficulty}</div>
                  </div>
                )}
                {bestTimeToVisit && (
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">🌤️</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Best Time</div>
                    <div className="text-sm font-semibold text-slate-800 mt-1 line-clamp-2">{bestTimeToVisit.split('(')[0].trim()}</div>
                  </div>
                )}
              </div>
            </motion.section>

            {/* Highlights */}
            {highlights.length > 0 && (
              <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h2 className="font-display font-bold text-2xl text-slate-800 mb-5">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-brand-orange/5 border border-brand-orange/10"
                    >
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Itinerary */}
            {itinerary.length > 0 && (
              <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h2 className="font-display font-bold text-2xl text-slate-800 mb-5">Itinerary</h2>
                <div className="relative">
                  {/* Vertical timeline line */}
                  <div className="absolute left-[18px] top-3 bottom-3 w-0.5 bg-slate-200" />
                  <div className="space-y-4">
                    {itinerary.map((item, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative flex gap-5"
                      >
                        {/* Timeline dot */}
                        <div className="shrink-0 w-9 h-9 rounded-full bg-brand-orange flex items-center justify-center z-10 shadow-md shadow-orange-400/20">
                          <span className="text-white text-[10px] font-bold leading-tight text-center">
                            {item.day}
                          </span>
                        </div>
                        <div className="pb-4 pt-1.5">
                          <h3 className="font-semibold text-slate-800 text-sm">{item.title}</h3>
                          <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{item.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {/* Best Time & Weather */}
            {(bestTimeToVisit || weather) && (
              <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h2 className="font-display font-bold text-2xl text-slate-800 mb-5">When to Go</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bestTimeToVisit && (
                    <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-100">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🌿</span>
                        <h3 className="font-semibold text-emerald-800 text-sm">Best Time to Visit</h3>
                      </div>
                      <p className="text-sm text-emerald-700 leading-relaxed">{bestTimeToVisit}</p>
                    </div>
                  )}
                  {weather && (
                    <div className="p-5 rounded-xl bg-sky-50 border border-sky-100">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🌡️</span>
                        <h3 className="font-semibold text-sky-800 text-sm">Climate</h3>
                      </div>
                      <p className="text-sm text-sky-700 leading-relaxed">{weather}</p>
                    </div>
                  )}
                </div>
              </motion.section>
            )}
          </div>

          {/* ── Right Column (sticky sidebar) ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Pricing & CTA card */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-100">
                <div className="bg-gradient-to-br from-brand-blue to-slate-800 p-6 text-white">
                  <div className="text-sm text-white/70 mb-1">Starting from</div>
                  <div className="font-display font-bold text-4xl leading-none">
                    N${price.toLocaleString()}
                  </div>
                  <div className="text-sm text-white/70 mt-1">{currency} per person</div>
                  {duration && (
                    <div className="mt-3 text-sm text-white/90 flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {duration}
                    </div>
                  )}
                </div>
                <div className="p-5 space-y-3">
                  <Link
                    to={`/contact?destination=${encodeURIComponent(name)}&category=${encodeURIComponent(category)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full
                               bg-brand-orange text-white font-semibold text-sm
                               hover:bg-brand-orange-dark hover:-translate-y-0.5
                               shadow-md shadow-orange-400/25 hover:shadow-orange-400/35
                               transition-all duration-200"
                  >
                    Book This Destination
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <a
                    href="https://wa.me/27715554779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                               border-2 border-emerald-500 text-emerald-600 font-semibold text-sm
                               hover:bg-emerald-50 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                  <p className="text-xs text-slate-400 text-center">Price is per person, sharing. Contact us for solo or custom pricing.</p>
                </div>
              </div>

              {/* What's Included */}
              {includes.length > 0 && (
                <div className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-display font-bold text-slate-800 mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Need help box */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-center">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1">Need a Custom Itinerary?</h3>
                <p className="text-xs text-slate-500 mb-3">We build bespoke packages tailored exactly to you — dates, budget, and group size.</p>
                <Link
                  to="/contact"
                  className="text-brand-orange text-sm font-semibold hover:underline"
                >
                  Talk to a Travel Expert →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Related Destinations ── */}
        {related.length > 0 && (
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 pt-12 border-t border-slate-100"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-2xl text-slate-800">
                More in {category}
              </h2>
              <Link to="/destinations" className="text-brand-orange text-sm font-semibold hover:underline">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((dest, i) => (
                <motion.div
                  key={dest.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/destinations/${dest.id}`}
                    className="group block rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg hover:shadow-slate-200 transition-shadow duration-300"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {dest.badge && (
                        <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white ${dest.badgeColor}`}>
                          {dest.badge}
                        </span>
                      )}
                      <div className="absolute bottom-0 inset-x-0 p-4">
                        <h3 className="font-display font-bold text-white text-base">{dest.name}</h3>
                        <p className="text-white/75 text-xs italic">{dest.tagline}</p>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-400">From</span>
                        <div className="font-display font-bold text-lg text-brand-blue leading-none">
                          N${dest.price.toLocaleString()}
                        </div>
                      </div>
                      <span className="text-brand-orange text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
                        View →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  )
}

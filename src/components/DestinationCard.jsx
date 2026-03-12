import { Link } from 'react-router-dom'

/**
 * Card component for a single travel destination.
 * Props:
 *   destination – object from src/data/destinations.js
 *   featured    – boolean, enlarges card slightly (used on Home page)
 */
export default function DestinationCard({ destination, featured = false }) {
  const { id, name, tagline, description, image, price, currency, badge, badgeColor, category } = destination

  return (
    <article className="card group cursor-pointer">

      {/* ── Image container ── */}
      <div className={`relative overflow-hidden ${featured ? 'h-60' : 'h-52'}`}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Dark scrim at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Badge */}
        {badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide text-white ${badgeColor}`}>
            {badge}
          </span>
        )}

        {/* Category chip */}
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-medium
                         bg-white/20 backdrop-blur-sm text-white border border-white/30">
          {category}
        </span>

        {/* Destination name overlaid on image bottom */}
        <div className="absolute bottom-0 inset-x-0 p-4">
          <h3 className="font-display font-bold text-xl text-white leading-tight">{name}</h3>
          <p className="text-sm text-white/80 italic">{tagline}</p>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="p-5">
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between gap-3">
          {/* Pricing */}
          <div>
            <span className="text-xs text-slate-400 font-medium">From</span>
            <div className="font-display font-bold text-2xl text-brand-blue leading-none">
              N${price.toLocaleString()}
              <span className="text-xs font-normal text-slate-400 ml-1">{currency} / person</span>
            </div>
          </div>

          {/* Book button */}
          <Link
            to={`/destinations/${id}`}
            className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full
                       bg-brand-orange text-white text-sm font-semibold
                       hover:bg-brand-orange-dark hover:-translate-y-0.5
                       shadow-md shadow-orange-400/20 hover:shadow-orange-400/30
                       transition-all duration-200"
          >
            Book Now
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

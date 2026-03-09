import { Link } from 'react-router-dom'

/**
 * Detailed tour package card.
 * Props:
 *   tour – object from src/data/tours.js
 */
export default function TourCard({ tour }) {
  const { name, subtitle, duration, groupSize, price, currency, image,
          highlights, itinerary, includes, tag, tagColor, rating, reviews } = tour

  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">

      {/* ── Image ── */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Tag badge */}
        {tag && (
          <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide text-white ${tagColor}`}>
            ★ {tag}
          </span>
        )}

        {/* Rating pill */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full
                        bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold">
          <StarIcon /> {rating} ({reviews} reviews)
        </div>

        {/* Title over image */}
        <div className="absolute bottom-0 inset-x-0 p-5">
          <p className="text-xs text-brand-orange-light font-semibold tracking-widest uppercase mb-1">{subtitle}</p>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">{name}</h3>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="p-6 sm:p-8">

        {/* Meta pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          <MetaPill icon={<ClockIcon />} text={duration} />
          <MetaPill icon={<UsersIcon />} text={groupSize} />
          <MetaPill icon={<CheckIcon />} text={`${includes.length} items included`} />
        </div>

        {/* Two-column layout: highlights + itinerary */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-3">Highlights</h4>
            <ul className="space-y-2">
              {highlights.slice(0, 4).map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-brand-sand flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div>
            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-3">Itinerary</h4>
            <ul className="space-y-2">
              {itinerary.slice(0, 4).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="shrink-0 px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue text-xs font-semibold">
                    Day {item.day}
                  </span>
                  <span className="font-medium text-slate-700">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Includes */}
        <div className="flex flex-wrap gap-2 mb-6 pt-5 border-t border-slate-100">
          {includes.map((inc) => (
            <span key={inc} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
              {inc}
            </span>
          ))}
        </div>

        {/* Pricing + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400">Price per person</span>
            <div className="font-display font-bold text-3xl text-brand-blue leading-none">
              N${price.toLocaleString()}
              <span className="text-sm font-normal text-slate-400 ml-1">{currency}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="btn-outline-blue">
              Request Info
            </Link>
            <Link to="/contact" className="btn-primary">
              Book This Tour
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

/* ── Helper sub-components ── */
function MetaPill({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                     bg-brand-sand-light border border-brand-sand text-sm font-medium text-slate-700">
      {icon} {text}
    </span>
  )
}

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

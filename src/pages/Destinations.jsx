import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/destinations'

/* Unique category list derived from data */
const allCategories = ['All', ...new Set(destinations.map((d) => d.category))]

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery,    setSearchQuery]    = useState('')

  const filtered = destinations.filter((d) => {
    const matchCat  = activeCategory === 'All' || d.category === activeCategory
    const matchSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      {/* ── Page banner ── */}
      <PageBanner
        title="Our Destinations"
        subtitle="From tropical paradise to ancient wonders — find the journey that calls to your soul."
        imageSeed="destinations-banner"
      />

      {/* ── Filter bar ── */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                  ${activeCategory === cat
                    ? 'bg-brand-orange text-white shadow-md shadow-orange-300/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-brand-sand'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search destinations…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm
                         focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
                         transition-all w-56"
            />
          </div>
        </div>
      </section>

      {/* ── Destination grid ── */}
      <section className="py-16 bg-brand-cream min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* Result count */}
          <p className="text-sm text-slate-400 mb-8">
            Showing <strong className="text-slate-700">{filtered.length}</strong> destination{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && (
              <> in <strong className="text-brand-orange">{activeCategory}</strong></>
            )}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🗺️</div>
              <p className="text-slate-500 text-lg">No destinations match your search.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                className="mt-4 text-brand-orange font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Trip planning CTA ── */}
      <section className="py-16 bg-brand-blue-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-display font-bold text-3xl mb-3">Can't find what you're looking for?</h2>
          <p className="text-white/70 mb-6">
            We tailor bespoke itineraries to any destination on the planet. Tell us your dream and we'll make it real.
          </p>
          <a href="/contact" className="btn-primary">
            Request a Custom Itinerary
          </a>
        </div>
      </section>
    </>
  )
}

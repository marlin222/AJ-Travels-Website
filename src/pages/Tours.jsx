import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import TourCard from '../components/TourCard'
import { tours } from '../data/tours'

/* ── Region filter definition ── */
const regions = [
  { key: 'All',          label: '🌍 All Tours' },
  { key: 'Namibia',      label: '🦁 Namibia' },
  { key: 'Middle East',  label: '🌆 Dubai & Middle East' },
  { key: 'East Africa',  label: '🐘 East Africa' },
  { key: 'Europe',       label: '🏛️ Europe' },
  { key: 'Asia',         label: '🏯 Asia' },
]

/* ── Why book with us ── */
const perks = [
  { icon: '✈️', title: 'Flight Advice Included',  desc: 'We recommend the best routes and timings for every package — Windhoek connections included.' },
  { icon: '🏨', title: 'Handpicked Lodges',       desc: 'Desert camps, 5-star hotels, or eco-lodges — every property is personally vetted by our team.' },
  { icon: '🎒', title: 'Small, Intimate Groups',  desc: 'Maximum 16 guests per tour for a more personal, less hurried experience.' },
  { icon: '🌿', title: 'Eco-Responsible Travel',  desc: 'All Namibian operators are NTB-registered and Travelife-sustainability assessed.' },
  { icon: '📞', title: '24/7 In-Country Support', desc: 'Our Windhoek team is reachable around the clock — in the field and at home.' },
  { icon: '💳', title: 'Flexible Payments',       desc: 'Reserve your spot with a 20% deposit; balance due 60 days before departure.' },
]

export default function Tours() {
  const [activeRegion, setActiveRegion] = useState('All')

  const filtered =
    activeRegion === 'All'
      ? tours
      : tours.filter((t) => t.region === activeRegion)

  return (
    <>
      {/* ── Banner ── */}
      <PageBanner
        title="Tours & Packages"
        subtitle="From Namibia's red dunes to Dubai's gold-tipped skyline — expert itineraries that leave only the wonder."
        imageSeed="tours-banner"
      />

      {/* ── Region filter bar ── */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {regions.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveRegion(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${activeRegion === key
                    ? 'bg-brand-orange text-white shadow-md shadow-orange-300/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-brand-sand'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Packages list ── */}
      <section className="py-20 bg-brand-cream min-h-[50vh]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {/* Namibia spotlight header (shown when All or Namibia selected) */}
          {(activeRegion === 'All' || activeRegion === 'Namibia') && (
            <div className="mb-10 p-6 rounded-3xl bg-gradient-to-r from-brand-blue-dark to-brand-blue
                            text-white flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg">
              <div className="text-5xl shrink-0">🦁</div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-1">
                  Namibia — Our Home, Our Speciality
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                  As a Windhoek-based company, our Namibia tours come with unparalleled local knowledge, exclusive camp partnerships, and guides who know every waterhole, dune, and desert track. No one does Namibia like we do.
                </p>
              </div>
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="flex flex-col gap-12">
              {filtered.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🗺️</div>
              <p className="text-slate-500 text-lg">No packages in this region yet.</p>
              <button
                onClick={() => setActiveRegion('All')}
                className="mt-4 text-brand-orange font-semibold hover:underline"
              >
                View all packages
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Booking perks ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            label="The Adventure Journeys Difference"
            title="Everything Taken Care Of"
            subtitle="When you book with us, you're not just getting an itinerary — you're getting a Namibia-based team of travel obsessives working on your behalf."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-brand-sand-light border border-brand-sand
                           hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="text-3xl shrink-0">{icon}</div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">{title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom tour CTA ── */}
      <section
        className="relative py-24 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://picsum.photos/seed/custom-tour/1920/600')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/85 to-brand-orange-dark/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-5">
          <span className="section-label mb-4 inline-block bg-white/20 text-white">Bespoke Travel</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white text-shadow mb-4">
            Want Something Truly Unique?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Our Windhoek specialists build fully custom itineraries — private Namibia fly-in safaris, Dubai honeymoon packages, family adventures, and solo expeditions across the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Design My Trip
            </Link>
            <Link to="/about" className="btn-outline text-base px-8 py-4">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

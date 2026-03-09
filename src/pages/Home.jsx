import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/destinations'

/* Featured destinations – first 6 */
const featured = destinations.slice(0, 6)

/* ── Feature cards data ── */
const features = [
  {
    icon: <CompassIcon />,
    title: 'Expert Local Guides',
    description:
      'Every journey is led by certified, passionate guides with deep local knowledge — from Namibian desert trackers and Etosha game rangers to Dubai city specialists.',
  },
  {
    icon: <StarIcon />,
    title: 'Handpicked Experiences',
    description:
      'We personally vet every hotel, restaurant, and activity. No filler, no tourist traps — just extraordinary moments.',
  },
  {
    icon: <ShieldIcon />,
    title: '24/7 Travel Support',
    description:
      'Our dedicated support team is always a call away, whether you need a last-minute itinerary change or just some local tips.',
  },
  {
    icon: <HeartIcon />,
    title: 'Responsible Travel',
    description:
      'We partner with local communities and eco-certified operators to ensure your journey has a positive impact on the places you visit.',
  },
]

/* ── Testimonials ── */
const testimonials = [
  {
    quote:
      '"Adventure Journeys took us beyond the guidebook. Our Serengeti sunrise will stay with us forever. The team\'s attention to detail was absolutely flawless."',
    name: 'Megan & Tom Richards',
    location: 'Cape Town, South Africa',
    image: 'https://picsum.photos/seed/testimonial-1/80/80',
  },
  {
    quote:
      '"From the moment we landed in Kyoto, it felt as if the entire city had been arranged just for us. Perfectly paced, beautifully curated — 10 out of 10."',
    name: 'David Osei',
    location: 'London, United Kingdom',
    image: 'https://picsum.photos/seed/testimonial-2/80/80',
  },
  {
    quote:
      '"Three generations of my family on one trip — and everyone left happy. That\'s a miracle, and Adventure Journeys made it happen."',
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    image: 'https://picsum.photos/seed/testimonial-3/80/80',
  },
]

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Why Choose Us */}
      <section id="features" className="py-20 sm:py-28 bg-brand-sand-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            label="Why Adventure Journeys"
            title="Travel Designed Around You"
            subtitle="We go beyond booking flights and hotels. Every detail is curated to create a seamless, unforgettable experience from departure to return."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md
                           hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-sand flex items-center justify-center mb-4
                                group-hover:bg-brand-orange transition-colors duration-300">
                  <span className="text-brand-orange group-hover:text-white transition-colors duration-300">
                    {icon}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Namibia spotlight banner */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div
            className="relative rounded-3xl overflow-hidden bg-cover bg-center shadow-xl"
            style={{ backgroundImage: "url('https://picsum.photos/seed/namibia-spotlight/1400/500')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 via-brand-blue-dark/70 to-transparent" />
            <div className="relative z-10 py-12 px-8 sm:px-14 max-w-xl">
              <span className="section-label mb-3 inline-block bg-white/20 text-white border border-white/30">
                Our Home Turf
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-3">
                Namibia — Explore Africa's<br />
                <span className="text-brand-orange-light">Best-Kept Secret</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                Based in Windhoek, we are Namibia insiders. From Etosha's floodlit waterholes to the towering dunes of Sossusvlei and the shipwreck-strewn Skeleton Coast — we know every track, camp, and hidden gem.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/destinations" className="btn-primary">
                  Explore Namibia
                </Link>
                <Link to="/tours" className="btn-outline">
                  Namibia Tours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Destinations */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            label="Top Destinations"
            title="Namibia, Dubai & Beyond"
            subtitle="From Etosha's wildlife-rich plains to Dubai's gleaming skyline and the world's most iconic landscapes — Adventure Journeys takes you there."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featured.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} featured />
            ))}
          </div>

          <div className="text-center">
            <Link to="/destinations" className="btn-outline-blue">
              View All Destinations
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Stats banner */}
      <section
        className="relative py-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://picsum.photos/seed/stats-bg/1920/600')" }}
      >
        <div className="absolute inset-0 bg-brand-blue-dark/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 'Est. 2025', label: 'Founded in Namibia', icon: '🏆' },
              { value: '50,000+',label: 'Happy Travellers',    icon: '😊' },
              { value: '85+',    label: 'Destinations Covered',icon: '🌍' },
              { value: '98%',    label: 'Satisfaction Rate',   icon: '⭐' },
            ].map(({ value, label, icon }) => (
              <div key={label} className="text-white">
                <div className="text-4xl mb-2">{icon}</div>
                <div className="font-display font-bold text-4xl sm:text-5xl mb-1">{value}</div>
                <div className="text-sm text-white/70 tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA – Tour packages */}
      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="section-label mb-3 inline-block">Curated Packages</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-800 mb-5">
            Discover Our Signature<br />
            <span className="text-brand-orange">Tour Packages</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8">
            African safaris, European cultural odysseys, Southeast Asia explorations — our expert-crafted packages do all the heavy lifting so you can simply enjoy the journey.
          </p>
          <Link to="/tours" className="btn-primary text-base px-8 py-4">
            Browse All Packages
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            label="Traveller Stories"
            title="What Our Guests Say"
            subtitle="Real journeys, real experiences — told by the people who lived them."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, location, image }) => (
              <div
                key={name}
                className="bg-brand-sand-light rounded-2xl p-7 border border-brand-sand
                           hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed mb-5">{quote}</p>
                <div className="flex items-center gap-3">
                  <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">{name}</div>
                    <div className="text-xs text-slate-400">{location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section
        className="relative py-24 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://picsum.photos/seed/cta-final/1920/700')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange-dark/80 to-brand-blue-dark/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-5">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white text-shadow mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Speak with one of our travel specialists today. No obligation — just ideas, inspiration, and a plan made for you.
          </p>
          <Link to="/contact" className="btn-primary text-base px-10 py-4">
            Start Planning Today
          </Link>
        </div>
      </section>
    </>
  )
}

/* ── Icon sub-components ── */
function CompassIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

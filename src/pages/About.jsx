import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'
import { team } from '../data/team'

/* Core values */
const values = [
  {
    icon: '🧭',
    title: 'Authenticity',
    desc: "We design trips that connect you with a place's genuine character — its people, food, rhythms, and stories.",
  },
  {
    icon: '🌿',
    title: 'Sustainability',
    desc: 'Tourism should leave destinations better than we found them. We invest in local communities and eco-certified operators.',
  },
  {
    icon: '🤝',
    title: 'Trust',
    desc: 'A reputation built from day one on honest communication, transparent pricing, and keeping every promise we make.',
  },
  {
    icon: '🎯',
    title: 'Excellence',
    desc: "We obsess over details so you don't have to. Every transfer, every meal, every hotel — considered and confirmed.",
  },
]

/* Trust badges / milestones */
const badges = [
  { value: '2025',     label: 'Year Founded',         icon: '📅' },
  { value: 'Swakop',   label: 'Namibia-Based',        icon: '📍' },
  { value: '50,000+',  label: 'Happy Travellers',     icon: '😊' },
  { value: '85+',      label: 'Destinations',         icon: '🌍' },
  { value: '98%',      label: 'Satisfaction Rate',    icon: '⭐' },
  { value: 'HTAN',     label: 'HTAN Member',          icon: '✅' },
]

/* Awards / accreditations */
const accreditations = [
  'Hospitality & Tourism Association of Namibia (HTAN)',
  'Travelife Sustainability Certified',
  'IATA Accredited Travel Agency',
  'Namibia Tourism Board Registered',
  'World Travel Awards – Africa Nominee 2024',
]

export default function About() {
  return (
    <>
      {/* ── Banner ── */}
      <PageBanner
        title="About Us"
        subtitle="The passionate team behind every extraordinary journey."
        imageSeed="about-banner"
      />

      {/* ── Our story ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <span className="section-label mb-4 inline-block">Our Story</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-800 leading-tight mb-6">
                Born From a Love of<br />
                <span className="text-brand-orange">Boundless Exploration</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Adventure Journeys Travel & Tourism cc was founded in 2025 by Marlin Pedro van der Merwe and Lindsay Monichea van der Merwe, and is proudly headquartered in Swakopmund, Namibia. Born from a deep love for one of Africa's most extraordinary countries, we set out to showcase Namibia's world-class wilderness — the red dunes of Sossusvlei, the wildlife-rich Etosha pan, the wild Skeleton Coast — to travellers who want something far beyond the ordinary.
                </p>
                <p>
                  From our Swakopmund home we craft bespoke journeys across the globe — from Dubai's gleaming skyline to the rice terraces of Bali — yet Namibia remains the beating heart of everything we do. As locals, we bring an insider's depth to every Namibian itinerary: the right camps, the best guides, and the hidden routes that no guidebook will ever list.
                </p>
                <p>
                  Our passionate team of destination specialists, guides, and logistics experts is committed to delivering extraordinary, seamless travel experiences. We are proud members of the Hospitality & Tourism Association of Namibia (HTAN), Travelife certified, and committed to a future where responsible travel is the only kind of travel.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {accreditations.map((acc) => (
                  <span key={acc} className="px-3 py-1.5 rounded-full text-xs font-medium
                                             bg-brand-sand border border-brand-sand-dark text-slate-700">
                    ✓ {acc}
                  </span>
                ))}
              </div>
            </div>

            {/* Image collage */}
            <div className="relative grid grid-cols-2 gap-3 h-[460px]">
              <img
                src="https://picsum.photos/seed/about-1/500/600"
                alt="Adventure travel"
                className="col-span-1 row-span-2 w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://picsum.photos/seed/about-2/500/280"
                alt="Team in the field"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://picsum.photos/seed/about-3/500/280"
                alt="Local community"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-brand-orange text-white rounded-2xl
                              px-5 py-4 shadow-xl shadow-orange-400/30 text-center">
                <div className="font-display font-bold text-3xl">15+</div>
                <div className="text-xs font-medium opacity-90">Years crafting<br />unforgettable journeys</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust badges ── */}
      <section className="py-16 bg-brand-blue-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center text-white">
            {badges.map(({ value, label, icon }) => (
              <div key={label} className="group">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="font-display font-bold text-3xl sm:text-4xl mb-1 group-hover:text-brand-orange-light transition-colors">
                  {value}
                </div>
                <div className="text-xs text-white/60 tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our values ── */}
      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            label="What We Stand For"
            title="Our Core Values"
            subtitle="The principles that guide every decision we make — from the partners we choose to the experiences we design."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-display font-bold text-lg text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            label="The People Behind Your Journey"
            title="Meet Our Team"
            subtitle="Explorers, storytellers, and logistics wizards — united by an unshakeable passion for exceptional travel."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(({ id, name, role, bio, image, social }) => (
              <div key={id} className="group text-center">
                {/* Avatar */}
                <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden
                                ring-4 ring-brand-sand group-hover:ring-brand-orange transition-all duration-300">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="font-display font-bold text-xl text-slate-800 mb-0.5">{name}</h3>
                <p className="text-sm font-semibold text-brand-orange mb-3">{role}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{bio}</p>

                {/* Social icons */}
                <div className="flex justify-center gap-3">
                  <a href={social.linkedin} aria-label="LinkedIn"
                     className="w-8 h-8 rounded-full bg-slate-100 hover:bg-brand-blue flex items-center justify-center
                                text-slate-500 hover:text-white transition-all duration-200">
                    <LinkedInIcon />
                  </a>
                  <a href={social.instagram} aria-label="Instagram"
                     className="w-8 h-8 rounded-full bg-slate-100 hover:bg-brand-orange flex items-center justify-center
                                text-slate-500 hover:text-white transition-all duration-200">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-brand-sand text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 mb-4">
            Let's Plan Your Journey Together
          </h2>
          <p className="text-slate-600 mb-8">
            Whether it's your first trip or your fiftieth, our team brings the same dedication to crafting something extraordinary.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

/* ── Social icon components ── */
function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

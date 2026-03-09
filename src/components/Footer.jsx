import { Link } from 'react-router-dom'
import { useState } from 'react'
import logoUrl from '../../images/AJ_LOGO.JPG'

const quickLinks = [
  { to: '/',             label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/tours',        label: 'Tours & Packages' },
  { to: '/about',        label: 'About Us' },
  { to: '/contact',      label: 'Contact' },
]

const destinations = [
  'Etosha National Park',
  'Sossusvlei & Dead Vlei',
  'Skeleton Coast',
  'Sandwich Harbour',
  'Fish River Canyon',
  'Dubai, UAE',
]

export default function Footer() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-300">

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 – Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            {/* Real company logo */}
            <img
              src={logoUrl}
              alt="Adventure Journeys"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
            />
            <span className="font-display font-bold text-lg text-white leading-tight">
              Adventure<br />
              <span className="text-brand-orange">Journeys</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 mb-5">
            Crafting extraordinary travel experiences since 2025. We believe every journey should leave you forever changed.
          </p>
          {/* Social links */}
          <div className="flex gap-3">
            {[
              { label: 'Facebook',  href: '#', Icon: FacebookIcon },
              { label: 'Instagram', href: '#', Icon: InstagramIcon },
              { label: 'Twitter',   href: '#', Icon: TwitterIcon },
              { label: 'YouTube',   href: '#', Icon: YouTubeIcon },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-orange flex items-center justify-center transition-colors duration-200"
              >
                <Icon className="w-4 h-4 text-slate-300 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-slate-400 hover:text-brand-orange transition-colors duration-150 flex items-center gap-1.5"
                >
                  <span className="text-brand-orange text-xs">›</span> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Top Destinations */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Top Destinations</h4>
          <ul className="space-y-2">
            {destinations.map((dest) => (
              <li key={dest}>
                <Link
                  to="/destinations"
                  className="text-sm text-slate-400 hover:text-brand-orange transition-colors duration-150 flex items-center gap-1.5"
                >
                  <span className="text-brand-orange text-xs">›</span> {dest}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 – Newsletter */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Stay Inspired</h4>
          <p className="text-sm text-slate-400 mb-4">
            Get curated travel inspiration, exclusive deals, and destination guides delivered to your inbox.
          </p>
          {submitted ? (
            <p className="text-sm text-emerald-400 font-medium">
              ✓ You're on the list! Welcome aboard.
            </p>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700
                           text-sm text-white placeholder:text-slate-500
                           focus:outline-none focus:border-brand-orange transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-dark
                           text-white text-sm font-semibold transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          )}

          {/* Contact snippet */}
          <div className="mt-6 space-y-2 text-sm text-slate-400">
            <p className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-brand-orange shrink-0" />
              +264 64 462 256
            </p>
            <p className="flex items-center gap-2">
              <MailIcon className="w-4 h-4 text-brand-orange shrink-0" />
              vdmerwe1@iway.na
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800 py-5 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Adventure Journeys Travel & Tourism cc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── Social SVG Icons ── */
function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TwitterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4.01c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.57 8.57 0 01-2.72 1.04 4.27 4.27 0 00-7.28 3.9A12.12 12.12 0 013 3.5a4.27 4.27 0 001.32 5.7 4.24 4.24 0 01-1.93-.53v.05a4.27 4.27 0 003.43 4.19 4.3 4.3 0 01-1.92.07 4.27 4.27 0 003.99 2.97A8.57 8.57 0 012 18.43a12.1 12.1 0 006.56 1.92c7.88 0 12.19-6.53 12.19-12.19l-.01-.55A8.68 8.68 0 0022 4.01z" />
    </svg>
  )
}

function YouTubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.22 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

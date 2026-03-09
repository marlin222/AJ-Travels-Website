import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logoUrl from '../../images/AJ_LOGO.JPG'

const navLinks = [
  { to: '/',             label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/tours',        label: 'Tours & Packages' },
  { to: '/about',        label: 'About Us' },
  { to: '/contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  // Add background + shadow once user scrolls past 60 px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route changes / outside clicks are handled by overlay
  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'}
      `}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 md:h-20">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={closeMenu}>
          {/* Real company logo – circular badge */}
          <img
            src={logoUrl}
            alt="Adventure Journeys"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
          />
          <span
            className={`font-display font-bold text-base leading-tight transition-colors duration-300 hidden sm:block
              ${scrolled ? 'text-slate-800' : 'text-white'}`}
          >
            Adventure<br />
            <span className={scrolled ? 'text-brand-orange' : 'text-brand-orange-light'}>
              Journeys
            </span>
          </span>
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive
                    ? (scrolled ? 'text-brand-orange' : 'text-brand-orange-light')
                    : (scrolled ? 'text-slate-700 hover:text-brand-blue' : 'text-white/90 hover:text-white')}
                `}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── CTA button (desktop) ── */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                     bg-brand-orange text-white text-sm font-semibold
                     hover:bg-brand-orange-dark hover:-translate-y-0.5
                     shadow-md hover:shadow-lg shadow-orange-400/30
                     transition-all duration-200"
          onClick={closeMenu}
        >
          Book a Trip
          <ArrowIcon />
        </Link>

        {/* ── Hamburger (mobile) ── */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* ── Mobile menu drawer ── */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-slate-100 shadow-xl animate-fade-in">
          <ul className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    block px-4 py-3 rounded-xl text-sm font-medium transition-colors
                    ${isActive
                      ? 'bg-brand-sand text-brand-orange'
                      : 'text-slate-700 hover:bg-slate-50'}
                  `}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="btn-primary w-full justify-center"
            >
              Book a Trip <ArrowIcon />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

/* ── Micro icon components ── */
function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

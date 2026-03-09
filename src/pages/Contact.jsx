import { useState } from 'react'
import PageBanner from '../components/PageBanner'

/* Office / contact info */
const officeInfo = [
  {
    icon: <MapPinIcon />,
    label: 'Head Office',
    lines: ['26 Papaver Street, Ocean View', 'Swakopmund, Namibia'],
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    lines: ['+264 64 462 256', '+971 555 477 931 (WhatsApp)'],
  },
  {
    icon: <MailIcon />,
    label: 'Email',
    lines: ['vdmerwe1@iway.na', 'bookings@adventurejourneys.co'],
  },
  {
    icon: <ClockIcon />,
    label: 'Office Hours',
    lines: ['Mon – Fri: 08:00 – 17:30 WAT', 'Sat: 08:30 – 13:00 WAT'],
  },
]

/* Travel interests for the form */
const interests = [
  'African Safari',
  'Beach & Island',
  'Cultural Journey',
  'Adventure Trek',
  'Luxury Escape',
  'Family Holiday',
  'Honeymoon',
  'Custom / Bespoke',
]

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  travelDateFrom: '',
  travelDateTo: '',
  groupSize: '',
  budget: '',
  interest: '',
  message: '',
}

export default function Contact() {
  const [form,      setForm]      = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [errors,    setErrors]    = useState({})

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required.'
    if (!form.lastName.trim())  e.lastName  = 'Last name is required.'
    if (!form.email.trim())     e.email     = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email.'
    if (!form.message.trim())   e.message   = 'Please tell us about your dream trip.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    // Simulate API call delay
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Banner ── */}
      <PageBanner
        title="Contact Us"
        subtitle="Tell us where you want to go. We'll take care of everything else."
        imageSeed="contact-banner"
      />

      {/* ── Main content ── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── Left: info + map ── */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              <div>
                <span className="section-label mb-3 inline-block">Get in Touch</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 mb-3">
                  We'd Love to Hear<br />From You
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  Whether you have a destination in mind or just a feeling of wanderlust, our travel specialists are ready to help you turn it into reality.
                </p>
              </div>

              {/* Office details */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
                {officeInfo.map(({ icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-brand-sand flex items-center justify-center shrink-0 text-brand-orange">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-1">{label}</p>
                      {lines.map((line) => (
                        <p key={line} className="text-sm text-slate-700">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-200 h-52 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <svg className="w-10 h-10 mx-auto mb-2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-sm font-medium">Map — 26 Papaver Street, Swakopmund</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-blue hover:underline mt-1 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right: contact form ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">

                {submitted ? (
                  /* Success state */
                  <div className="flex flex-col items-center justify-center text-center min-h-[500px] gap-4">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                      <svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-3xl text-slate-800">Message Sent!</h3>
                    <p className="text-slate-500 max-w-sm">
                      Thank you, <strong>{form.firstName || 'traveller'}</strong>! One of our specialists will reach out within 24 hours to start planning your journey.
                    </p>
                    <button
                      onClick={() => { setForm(initialForm); setSubmitted(false) }}
                      className="mt-4 btn-outline-blue"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="font-display font-bold text-2xl text-slate-800 mb-1">Plan Your Journey</h3>
                    <p className="text-sm text-slate-400 mb-7">Fill in the details below and we'll craft a personalised itinerary just for you.</p>

                    {/* Name row */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <FormField label="First Name" error={errors.firstName}>
                        <input
                          type="text" name="firstName" value={form.firstName}
                          onChange={handleChange} placeholder="Sarah"
                          className={`form-input ${errors.firstName ? 'border-red-400 focus:ring-red-200' : ''}`}
                        />
                      </FormField>
                      <FormField label="Last Name" error={errors.lastName}>
                        <input
                          type="text" name="lastName" value={form.lastName}
                          onChange={handleChange} placeholder="Mitchell"
                          className={`form-input ${errors.lastName ? 'border-red-400 focus:ring-red-200' : ''}`}
                        />
                      </FormField>
                    </div>

                    {/* Email + phone */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <FormField label="Email Address" error={errors.email}>
                        <input
                          type="email" name="email" value={form.email}
                          onChange={handleChange} placeholder="sarah@example.com"
                          className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-200' : ''}`}
                        />
                      </FormField>
                      <FormField label="Phone (optional)">
                        <input
                          type="tel" name="phone" value={form.phone}
                          onChange={handleChange} placeholder="+27 82 555 0123"
                          className="form-input"
                        />
                      </FormField>
                    </div>

                    {/* Travel dates */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <FormField label="Preferred Departure Date">
                        <input
                          type="date" name="travelDateFrom" value={form.travelDateFrom}
                          onChange={handleChange} className="form-input"
                        />
                      </FormField>
                      <FormField label="Return Date (approx.)">
                        <input
                          type="date" name="travelDateTo" value={form.travelDateTo}
                          onChange={handleChange} className="form-input"
                        />
                      </FormField>
                    </div>

                    {/* Group size + budget */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <FormField label="Group Size">
                        <select name="groupSize" value={form.groupSize} onChange={handleChange} className="form-input">
                          <option value="">Select…</option>
                          <option value="1">Solo traveller</option>
                          <option value="2">2 people</option>
                          <option value="3-5">3 – 5 people</option>
                          <option value="6-10">6 – 10 people</option>
                          <option value="11+">11+ people</option>
                        </select>
                      </FormField>
                      <FormField label="Budget per Person (USD)">
                        <select name="budget" value={form.budget} onChange={handleChange} className="form-input">
                          <option value="">Select…</option>
                          <option value="under-1500">Under $1,500</option>
                          <option value="1500-3000">$1,500 – $3,000</option>
                          <option value="3000-5000">$3,000 – $5,000</option>
                          <option value="5000-10000">$5,000 – $10,000</option>
                          <option value="10000+">$10,000+</option>
                        </select>
                      </FormField>
                    </div>

                    {/* Interest */}
                    <FormField label="Travel Interest" className="mb-4">
                      <div className="flex flex-wrap gap-2 mt-1">
                        {interests.map((int) => (
                          <button
                            key={int}
                            type="button"
                            onClick={() => setForm((prev) => ({ ...prev, interest: int }))}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150
                              ${form.interest === int
                                ? 'bg-brand-orange text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-brand-sand'}`}
                          >
                            {int}
                          </button>
                        ))}
                      </div>
                    </FormField>

                    {/* Message */}
                    <FormField label="Tell Us About Your Dream Trip" error={errors.message} className="mb-6">
                      <textarea
                        name="message" value={form.message} onChange={handleChange} rows={4}
                        placeholder="Which destinations are you dreaming about? Any special occasions? Special requirements? The more you share, the better we can tailor your journey."
                        className={`form-input resize-none ${errors.message ? 'border-red-400 focus:ring-red-200' : ''}`}
                      />
                    </FormField>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send My Enquiry
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400 mt-4">
                      We typically respond within 24 hours. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social CTA ── */}
      <section className="py-12 bg-white text-center border-t border-slate-100">
        <div className="max-w-xl mx-auto px-5">
          <p className="text-slate-600 mb-4">
            Follow our adventures on social media for daily inspiration, travel tips, and behind-the-scenes stories from our guides in the field.
          </p>
          <div className="flex justify-center gap-4">
            {[
              { label: 'Instagram', href: '#', color: 'hover:bg-pink-500' },
              { label: 'Facebook',  href: '#', color: 'hover:bg-blue-600' },
              { label: 'Twitter',   href: '#', color: 'hover:bg-sky-500'  },
              { label: 'YouTube',   href: '#', color: 'hover:bg-red-600'  },
            ].map(({ label, href, color }) => (
              <a
                key={label}
                href={href}
                className={`px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600
                            ${color} hover:text-white hover:border-transparent transition-all duration-200`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Form field wrapper ── */
function FormField({ label, error, children, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

/* ── Contact icons ── */
function MapPinIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.22 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

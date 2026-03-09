/**
 * Reusable section heading component.
 * Renders a category label, main title, and optional subtitle.
 */
export default function SectionHeading({ label, title, subtitle, light = false, center = true }) {
  return (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
      {label && (
        <span className="section-label mb-3 inline-block">{label}</span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-bold leading-tight mb-4
          ${light ? 'text-white' : 'text-slate-800'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-white/75' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

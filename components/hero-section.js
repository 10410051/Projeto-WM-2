import Link from "next/link"

export function HeroSection({ title, subtitle, description, ctaText, ctaLink }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        {description && <p>{description}</p>}
        {ctaText && ctaLink && (
          <Link href={ctaLink} className="btn btn-primary">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  )
}

// Mantendo default export para compatibilidade
export default HeroSection

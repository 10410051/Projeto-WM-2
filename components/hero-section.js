"use client"

import Link from "next/link"

export function HeroSection({ title, subtitle, description, actions }) {
  return (
    <section className="hero-section">
      <h1>{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      <p className="hero-description">{description}</p>

      {actions && actions.length > 0 && (
        <nav className="hero-actions">
          {actions.map((action, index) => (
            <Link key={index} href={action.href} className={action.primary ? "btn btn-primary" : "btn btn-secondary"}>
              <span>{action.icon}</span> {action.label}
            </Link>
          ))}
        </nav>
      )}
    </section>
  )
}

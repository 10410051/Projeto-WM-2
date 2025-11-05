"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function ProgramCard({ title, icon, color, features, link }) {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <article ref={cardRef} className={`programa-card ${isVisible ? "fade-in-up" : ""}`}>
      <header className="card-header">
        <figure className={`card-icon ${color}`}>
          <span>{icon}</span>
        </figure>
        <h3>{title}</h3>
      </header>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {link && (
        <footer className="card-footer">
          <Link href={link} className={`btn-saiba-mais ${color}`}>
            Saiba Mais
          </Link>
        </footer>
      )}
    </article>
  )
}

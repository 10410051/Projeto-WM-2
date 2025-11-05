"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function ProgramCard({ title, description, image, link }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
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
    <article ref={cardRef} className={`program-card ${isVisible ? "visible" : ""}`}>
      <div className="program-image">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>
      <div className="program-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={link} className="btn btn-secondary">
          Saiba mais
        </Link>
      </div>
    </article>
  )
}

// Mantendo default export para compatibilidade
export default ProgramCard

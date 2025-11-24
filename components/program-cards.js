"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import styles from "@/styles/ProgramCard.module.css"

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
    <article ref={cardRef} className={`${styles.programaCard} ${isVisible ? styles.fadeInUp : ""}`}>
      <header className={styles.cardHeader}>
        <figure className={`${styles.cardIcon} ${styles[color]}`}>
          <span>{icon}</span>
        </figure>
        <h3>{title}</h3>
      </header>
      <ul className={styles.cardFeatures}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {link && (
        <footer className={styles.cardFooter}>
          <Link href={link} className={`${styles.btnSaibaMais} ${styles[color]}`}>
            Saiba Mais
          </Link>
        </footer>
      )}
    </article>
  )
}

"use client"

import Link from "next/link"
import styles from "@/styles/HeroSection.module.css"

export function HeroSection({ title, subtitle, description, actions }) {
  return (
    <section className={styles.heroSection}>
      <h1>{title}</h1>
      <p className={styles.heroSubtitle}>{subtitle}</p>
      <p className={styles.heroDescription}>{description}</p>

      {actions && actions.length > 0 && (
        <nav className={styles.heroActions}>
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className={`${styles.btn} ${action.primary ? styles.btnPrimary : styles.btnSecondary}`}
            >
              <span>{action.icon}</span> {action.label}
            </Link>
          ))}
        </nav>
      )}
    </section>
  )
}

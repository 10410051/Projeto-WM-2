"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { ProgramCard } from "@/components/program-cards"
import { Sidebar } from "@/components/sidebar"
import styles from "@/styles/Layout.module.css"

export default function HomePage() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const response = await fetch("/api/programas?categoria=graduacao")
        const data = await response.json()
        // Get only the first 3 programs for homepage
        setPrograms(data.slice(0, 3))
      } catch (error) {
        console.error("[v0] Error fetching programs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPrograms()
  }, [])

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <HeroSection
          title="Excelência em Educação Superior"
          subtitle="Formando líderes e inovadores para o futuro"
          description="Programas acadêmicos de alta qualidade com metodologia inovadora"
          actions={[
            { label: "Conheça Nossos Cursos", icon: "🎓", href: "/cursos", primary: true },
            { label: "Ver Resultados", icon: "📊", href: "/sobre", primary: false },
          ]}
        />

        <section>
          <header className={styles.sectionHeader}>
            <h2>
              <span className={styles.bullet}>🎯</span> Programas Acadêmicos
            </h2>
          </header>

          {loading ? (
            <p>Carregando programas...</p>
          ) : (
            <section className={styles.programasGrid}>
              {programs.map((program) => (
                <ProgramCard key={program.id} {...program} />
              ))}
            </section>
          )}
        </section>
      </main>

      <Sidebar />
    </div>
  )
}

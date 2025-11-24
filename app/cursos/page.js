"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { ProgramCard } from "@/components/program-cards"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import styles from "@/styles/Layout.module.css"

export default function CursosPage() {
  const [graduacao, setGraduacao] = useState([])
  const [tecnico, setTecnico] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCursos() {
      try {
        const [gradResponse, tecResponse] = await Promise.all([
          fetch("/api/programas?categoria=graduacao"),
          fetch("/api/programas?categoria=tecnico"),
        ])

        const gradData = await gradResponse.json()
        const tecData = await tecResponse.json()

        setGraduacao(gradData)
        setTecnico(tecData)
      } catch (error) {
        console.error("[v0] Error fetching courses:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCursos()
  }, [])

  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          <HeroSection
            title="Nossos Cursos"
            subtitle="Ofertas de Ensino Superior e Técnico"
            description="Metodologia prática e infraestrutura moderna para sua formação"
            actions={[
              { label: "Graduação", icon: "🎓", href: "#graduacao", primary: true },
              { label: "Técnico", icon: "🛠️", href: "#tecnico", primary: false },
            ]}
          />

          <section id="graduacao">
            <header className={styles.sectionHeader}>
              <h2>
                <span className={styles.bullet}>🎯</span> Ensino Superior - Graduação
              </h2>
            </header>
            {loading ? (
              <p>Carregando cursos...</p>
            ) : (
              <section className={styles.programasGrid}>
                {graduacao.map((program) => (
                  <ProgramCard key={program.id} {...program} />
                ))}
              </section>
            )}
          </section>

          <section id="tecnico">
            <header className={styles.sectionHeader}>
              <h2>
                <span className={styles.bullet}>🛠️</span> Ensino Técnico
              </h2>
            </header>
            {loading ? (
              <p>Carregando cursos...</p>
            ) : (
              <section className={styles.programasGrid}>
                {tecnico.map((program) => (
                  <ProgramCard key={program.id} {...program} />
                ))}
              </section>
            )}
          </section>
        </main>

        <Sidebar />
      </div>
    </>
  )
}

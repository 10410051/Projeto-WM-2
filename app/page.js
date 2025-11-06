"use client"

import { HeroSection } from "@/components/hero-section"
import { ProgramCard } from "@/components/program-cards"
import { Sidebar } from "@/components/sidebar"

export default function HomePage() {
  const programs = [
    {
      id: "engenharia",
      title: "Engenharia",
      icon: "⚙️",
      color: "blue",
      features: [
        "Projetos de engenharia e pós-graduação",
        "Laboratórios de última geração",
        "Parcerias com a indústria",
      ],
      link: "/cursos/engenharia",
    },
    {
      id: "medicina",
      title: "Medicina",
      icon: "⚕️",
      color: "red",
      features: ["Curso completo de 6 anos MEC", "Hospital universitário próprio", "Residência médica completa"],
      link: "/cursos/medicina",
    },
    {
      id: "administracao",
      title: "Administração",
      icon: "💼",
      color: "green",
      features: ["MBA e especialização", "Casos reais de mercado", "Network empresarial"],
      link: "/cursos/administracao",
    },
  ]
  return (

    <div className="page-container">
      <main className="main-content">
        <HeroSection
          title="Excelência em Educação Superior"
          subtitle="Formando líderes e inovadores para o futuro"
          description="Programas acadêmicos de alta qualidade com metodologia inovadora"
          actions={[
            { label: "Conheça Nossos Cursos", icon: "🎓", href: "/cursos", primary: true },
            { label: "Ver Resultados", icon: "📊", href: "/sobre", primary: false },
          ]}
        />

        <section className="programas-section">
          <header className="section-header">
            <h2>
              <span className="bullet">🎯</span> Programas Acadêmicos
            </h2>
          </header>

          <section className="programas-grid">
            {programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </section>
        </section>
      </main>

      <Sidebar />
    </div>
  )
}

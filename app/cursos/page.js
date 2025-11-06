"use client"

import { HeroSection } from "@/components/hero-section"
import { ProgramCard } from "@/components/program-cards"
import { Sidebar } from "@/components/sidebar"

export default function CursosPage() {
  const graduacao = [
    {
      id: "engenharia",
      title: "Engenharia",
      icon: "⚙️",
      color: "blue",
      features: [
        "Bacharelado • 5 anos",
        "Projetos reais e laboratórios modernos",
        "Trilhas Civil, Computação e Elétrica",
        "Parcerias com a indústria",
      ],
      link: "/cursos/engenharia",
    },
    {
      id: "medicina",
      title: "Medicina",
      icon: "⚕️",
      color: "red",
      features: ["Bacharelado • 6 anos", "Hospital-escola próprio", "Simulação realística", "Residência completa"],
      link: "/cursos/medicina",
    },
    {
      id: "administracao",
      title: "Administração",
      icon: "💼",
      color: "green",
      features: [
        "Bacharelado • 4 anos",
        "Gestão, dados e empreendedorismo",
        "Networking empresarial",
        "Projetos com empresas",
      ],
      link: "/cursos/administracao",
    },
  ]

  const tecnico = [
    {
      id: "enfermagem",
      title: "Técnico em Enfermagem",
      icon: "🏥",
      color: "red",
      features: [
        "Duração: 24 meses",
        "Práticas em laboratório",
        "Unidades de saúde conveniadas",
        "Estágio supervisionado",
      ],
      link: "#",
    },
    {
      id: "informatica",
      title: "Técnico em Informática",
      icon: "💻",
      color: "blue",
      features: ["Duração: 18 meses", "Web, redes e suporte", "Projetos para portfólio", "Certificações preparatórias"],
      link: "#",
    },
    {
      id: "adm-tecnico",
      title: "Técnico em Administração",
      icon: "📊",
      color: "green",
      features: ["Duração: 12 meses", "Rotinas administrativas", "Finanças e logística", "Projeto integrador"],
      link: "#",
    },
  ]

  return (
    <div className="page-container">
      <main className="main-content">
        <HeroSection
          title="Nossos Cursos"
          subtitle="Ofertas de Ensino Superior e Técnico"
          description="Metodologia prática e infraestrutura moderna para sua formação"
          actions={[
            { label: "Graduação", icon: "🎓", href: "#graduacao", primary: true },
            { label: "Técnico", icon: "🛠️", href: "#tecnico", primary: false },
          ]}
        />

        <section className="programas-section" id="graduacao">
          <header className="section-header">
            <h2>
              <span className="bullet">🎯</span> Ensino Superior - Graduação
            </h2>
          </header>
          <section className="programas-grid">
            {graduacao.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </section>
        </section>

        <section className="programas-section" id="tecnico">
          <header className="section-header">
            <h2>
              <span className="bullet">🛠️</span> Ensino Técnico
            </h2>
          </header>
          <section className="programas-grid">
            {tecnico.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </section>
        </section>
      </main>

      <Sidebar />
    </div>
  )
}

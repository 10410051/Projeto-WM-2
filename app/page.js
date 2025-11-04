import HeroSection from "@/components/hero-section"
import ProgramCard from "@/components/program-card"

export default function Home() {
  const programs = [
    {
      id: "engenharia",
      title: "Engenharia",
      description: "Cursos de Engenharia Civil, Mecânica, Elétrica e mais.",
      image: "/imagens/image.png",
      link: "/cursos/engenharia",
    },
    {
      id: "medicina",
      title: "Medicina",
      description: "Formação médica de excelência com infraestrutura completa.",
      image: "/imagens/image-1.png",
      link: "/cursos/medicina",
    },
    {
      id: "administracao",
      title: "Administração",
      description: "Prepare-se para liderar no mundo dos negócios.",
      image: "/imagens/image-2.png",
      link: "/cursos/administracao",
    },
  ]

  return (
    <>
      <HeroSection
        title="Bem-vindo ao Instituto WM"
        subtitle="Educação de qualidade para transformar o futuro"
        description="Oferecemos cursos de graduação e pós-graduação nas áreas de Engenharia, Medicina e Administração."
        ctaText="Conheça nossos cursos"
        ctaLink="/cursos"
      />

      <section className="container">
        <h2 className="section-title">Nossos Cursos</h2>
        <div className="programs-grid">
          {programs.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Pronto para começar sua jornada?</h2>
          <p>Inscreva-se agora e faça parte da nossa comunidade acadêmica.</p>
          <a href="/inscricao" className="btn btn-primary">
            Inscrever-se
          </a>
        </div>
      </section>
    </>
  )
}

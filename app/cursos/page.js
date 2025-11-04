import ProgramCard from "@/components/program-card"

export default function Cursos() {
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
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Nossos Cursos</h1>
          <p>Explore nossas opções de graduação e pós-graduação</p>
        </div>
      </section>

      <section className="container">
        <div className="programs-grid">
          {programs.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </section>
    </main>
  )
}

import { notFound } from "next/navigation"
import Sidebar from "@/components/sidebar"

// Dados dos cursos
const coursesData = {
  engenharia: {
    title: "Engenharia",
    description: "Nossos cursos de Engenharia preparam você para os desafios do mercado.",
    image: "/imagens/image.png",
    courses: [
      {
        name: "Engenharia Civil",
        duration: "5 anos",
        description: "Forme-se para projetar e construir obras que transformam cidades.",
      },
      {
        name: "Engenharia Mecânica",
        duration: "5 anos",
        description: "Domine sistemas mecânicos e processos industriais.",
      },
      {
        name: "Engenharia Elétrica",
        duration: "5 anos",
        description: "Trabalhe com sistemas elétricos e eletrônicos de alta complexidade.",
      },
    ],
    benefits: ["Laboratórios modernos", "Professores qualificados", "Parcerias com empresas", "Projetos práticos"],
  },
  medicina: {
    title: "Medicina",
    description: "Formação médica completa com foco em excelência e humanização.",
    image: "/imagens/image-1.png",
    courses: [
      {
        name: "Medicina",
        duration: "6 anos",
        description: "Curso completo de medicina com residência integrada.",
      },
      {
        name: "Enfermagem",
        duration: "4 anos",
        description: "Cuidado humanizado e técnicas avançadas de enfermagem.",
      },
    ],
    benefits: ["Hospital escola próprio", "Simulação realística", "Corpo docente experiente", "Internato de qualidade"],
  },
  administracao: {
    title: "Administração",
    description: "Desenvolva habilidades de gestão e liderança para o mundo corporativo.",
    image: "/imagens/image-2.png",
    courses: [
      {
        name: "Administração",
        duration: "4 anos",
        description: "Gestão estratégica de negócios e empreendedorismo.",
      },
      {
        name: "Gestão de RH",
        duration: "2 anos",
        description: "Especialização em gestão de pessoas e desenvolvimento organizacional.",
      },
      {
        name: "Marketing",
        duration: "2 anos",
        description: "Estratégias de marketing digital e tradicional.",
      },
    ],
    benefits: ["Cases reais de mercado", "Networking empresarial", "Incubadora de startups", "Mentoria profissional"],
  },
}

export default function CursoDetalhes({ params }) {
  const { id } = params
  const courseData = coursesData[id]

  if (!courseData) {
    notFound()
  }

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>{courseData.title}</h1>
          <p>{courseData.description}</p>
        </div>
      </section>

      <div className="container">
        <div className="content-with-sidebar">
          <article className="main-content">
            <section className="course-section">
              <h2>Cursos Disponíveis</h2>
              <div className="courses-list">
                {courseData.courses.map((course, index) => (
                  <div key={index} className="course-item">
                    <h3>{course.name}</h3>
                    <p className="duration">Duração: {course.duration}</p>
                    <p>{course.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="course-section">
              <h2>Diferenciais</h2>
              <ul className="benefits-list">
                {courseData.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </section>

            <section className="course-section">
              <h2>Infraestrutura</h2>
              <p>
                O Instituto WM conta com infraestrutura de ponta para garantir a melhor experiência de aprendizado.
                Nossos laboratórios são equipados com tecnologia moderna e nossos professores são altamente
                qualificados.
              </p>
            </section>
          </article>

          <Sidebar />
        </div>
      </div>
    </main>
  )
}

// Gerar rotas estáticas para os cursos
export function generateStaticParams() {
  return [{ id: "engenharia" }, { id: "medicina" }, { id: "administracao" }]
}

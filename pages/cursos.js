import Head from 'next/head';

export default function CursosPage() {
  return (
    <>
      <Head>
        <title>Nossos Cursos - Instituto de Excelência</title>
      </Head>
      
      <section className="programas-section" id="graduacao">
          <header className="section-header">
              <h2><span className="bullet">🎯</span> Ensino Superior - Graduação</h2>
          </header>
          
          <section className="programas-grid">
              <article className="programa-card engenharia">
                  <header className="card-header">
                      <figure className="card-icon blue">
                          <span>⚙️</span>
                      </figure>
                      <h3>Engenharia</h3>
                  </header>
                  <ul className="card-features">
                      <li>Bacharelado • 5 anos</li>
                      <li>Projetos reais e laboratórios modernos</li>
                      <li>Trilhas Civil, Computação e Elétrica</li>
                      <li>Parcerias com a indústria</li>
                  </ul>
                  <footer className="card-footer">
                      <a href="engenharia.html" className="btn-saiba-mais blue">Saiba Mais</a>
                  </footer>
              </article>

              <article className="programa-card medicina">
                  <header className="card-header">
                      <figure className="card-icon red">
                          <span>⚕️</span>
                      </figure>
                      <h3>Medicina</h3>
                  </header>
                  <ul className="card-features">
                      <li>Bacharelado • 6 anos</li>
                      <li>Hospital-escola próprio</li>
                      <li>Simulação realística</li>
                      <li>Residência completa</li>
                  </ul>
                  <footer className="card-footer">
                      <a href="medicina.html" className="btn-saiba-mais red">Saiba Mais</a>
                  </footer>
              </article>

              <article className="programa-card administracao">
                  <header className="card-header">
                      <figure className="card-icon green">
                          <span>💼</span>
                      </figure>
                      <h3>Administração</h3>
                  </header>
                  <ul className="card-features">
                      <li>Bacharelado • 4 anos</li>
                      <li>Gestão, dados e empreendedorismo</li>
                      <li>Networking empresarial</li>
                      <li>Projetos com empresas</li>
                  </ul>
                  <footer className="card-footer">
                      <a href="administracao.html" className="btn-saiba-mais green">Saiba Mais</a>
                  </footer>
              </article>
          </section>
      </section>

      <section className="programas-section" id="tecnico">
          <header className="section-header">
              <h2><span className="bullet">🛠️</span> Ensino Técnico</h2>
          </header>
          
          <section className="programas-grid">
              <article className="programa-card">
                  <header className="card-header">
                      <figure className="card-icon red">
                          <span>🏥</span>
                      </figure>
                      <h3>Técnico em Enfermagem</h3>
                  </header>
                  <ul className="card-features">
                      <li>Duração: 24 meses</li>
                      <li>Práticas em laboratório</li>
                      <li>Unidades de saúde conveniadas</li>
                      <li>Estágio supervisionado</li>
                  </ul>
                  <footer className="card-footer">
                      <a href="#" className="btn-saiba-mais red">Saiba Mais</a>
                  </footer>
              </article>

              <article className="programa-card">
                  <header className="card-header">
                      <figure className="card-icon blue">
                          <span>💻</span>
                      </figure>
                      <h3>Técnico em Informática</h3>
                  </header>
                  <ul className="card-features">
                      <li>Duração: 18 meses</li>
                      <li>Web, redes e suporte</li>
                      <li>Projetos para portfólio</li>
                      <li>Certificações preparatórias</li>
                  </ul>
                  <footer className="card-footer">
                      <a href="#" className="btn-saiba-mais blue">Saiba Mais</a>
                  </footer>
              </article>

              <article className="programa-card">
                  <header className="card-header">
                      <figure className="card-icon green">
                          <span>📊</span>
                      </figure>
                      <h3>Técnico em Administração</h3>
                  </header>
                  <ul className="card-features">
                      <li>Duração: 12 meses</li>
                      <li>Rotinas administrativas</li>
                      <li>Finanças e logística</li>
                      <li>Projeto integrador</li>
                  </ul>
                  <footer className="card-footer">
                      <a href="#" className="btn-saiba-mais green">Saiba Mais</a>
                  </footer>
              </article>
          </section>
      </section>
    </>
  );
}

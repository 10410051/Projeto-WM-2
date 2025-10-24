import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Instituto de Excelência - Educação Superior</title>
      </Head>
      
      <section className="programas-section">
          <header className="section-header">
              <h2><span className="bullet">🎯</span> Programas Acadêmicos</h2>
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
                      <li>Projetos de engenharia e pós-graduação</li>
                      <li>Laboratórios de última geração</li>
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
                      <li>Curso completo de 6 anos MEC</li>
                      <li>Hospital universitário próprio</li>
                      <li>Residência médica completa</li>
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
                      <li>MBA e especialização</li>
                      <li>Casos reais de mercado</li>
                      <li>Network empresarial</li>
                  </ul>
                  <footer className="card-footer">
                      <a href="administracao.html" className="btn-saiba-mais green">Saiba Mais</a>
                  </footer>
              </article>
          </section>
      </section>
    </>
  );
}

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const pathname = router.pathname;

  const handleInscricaoClick = () => {
    router.push("/formulario");
  };
  
  const [activePath, setActivePath] = useState(pathname);
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <header className="main-header">
      <nav className="top-nav">
        <section className="logo">
          <span className="logo-icon">🎓</span>
          <strong>Instituto de Excelência</strong>
          <small>Educação Superior</small>
        </section>
        
        <ul className="nav-menu">
          <li>
            <Link href="/" className={activePath === '/' ? 'active' : ''}>
              Início
            </Link>
          </li>
          <li>
            <Link href="/cursos" className={activePath === '/cursos' ? 'active' : ''}>
              Cursos
            </Link>
          </li>
          <li><a href="resultados.html">Projetos</a></li>
          <li><a href="professores.html">Professores</a></li>
          <li><a href="contato.html">Contato</a></li>
        </ul>
        
        <button className="btn-inscricao" onClick={handleInscricaoClick}>
          Inscreva-se
        </button>
      </nav>
      
      {activePath === '/' && (
        <section className="hero-section">
          <h1>Excelência em Educação Superior</h1>
          <p className="hero-subtitle">Formando líderes e inovadores para o futuro</p>
          <p className="hero-description">Programas acadêmicos de alta qualidade com metodologia inovadora</p>
          
          <nav className="hero-actions">
            <Link href="/cursos" className="btn btn-primary">
              <span>🎓</span> Conheça Nossos Cursos
            </Link>
            <a href="resultados.html" className="btn btn-secondary">
              <span>📊</span> Ver Resultados
            </a>
          </nav>
        </section>
      )}

      {activePath === '/cursos' && (
        <section className="hero-section">
          <h1>Nossos Cursos</h1>
          <p className="hero-subtitle">Ofertas de Ensino Superior e Técnico</p>
          <p className="hero-description">Metodologia prática e infraestrutura moderna para sua formação</p>
          
          <nav className="hero-actions">
            <a href="#graduacao" className="btn btn-primary">
              <span>🎓</span> Graduação
            </a>
            <a href="#tecnico" className="btn btn-secondary">
              <span>🛠️</span> Técnico
            </a>
          </nav>
        </section>
      )}
    </header>
  );
}

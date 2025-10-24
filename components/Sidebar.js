import React from 'react';

export default function Sidebar() {
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const emailInput = target.querySelector('input[type="email"]');
    const email = emailInput?.value;

    if (email && email.includes("@")) {
      alert(`Redirecionando para o portal com o email: ${email}`);
    } else {
      alert("Por favor, insira um email válido.");
    }
  };

  return (
    <aside className="sidebar" id="contato">
      <section className="sidebar-section">
        <header>
          <h2><span>🏢</span> Nossa Instituição</h2>
        </header>
        <ul className="info-list">
          <li className="highlight">📍 CAMPUS PRINCIPAL</li>
          <li>Mais de 30 anos no mercado</li>
          <li>Mais de 5000 alunos formados</li>
          <li>Nota máxima no MEC</li>
          <li>Estrutura moderna e completa</li>
        </ul>
      </section>

      <section className="sidebar-section">
        <header>
          <h2><span>📞</span> Contato Rápido</h2>
        </header>
        <ul className="contact-list">
          <li><span>📞</span> (11) 3456-7890</li>
          <li><span>📧</span> contato@instituto.edu.br</li>
          <li><span>📍</span> Av. Paulista - SP</li>
        </ul>
      </section>

      <section className="sidebar-section portal">
        <header>
          <h2><span>👤</span> Portal do Aluno</h2>
        </header>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <input type="email" placeholder="E-mail institucional" required />
          <button type="submit" className="btn-portal">
            Acessar Portal
          </button>
        </form>
      </section>
    </aside>
  );
}

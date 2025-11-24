"use client"

import { useState } from "react"
import styles from "@/styles/Sidebar.module.css"

export function Sidebar() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && email.includes("@")) {
      alert(`Redirecionando para o portal com o email: ${email}`)
      console.log("[v0] Portal login:", email)
      setEmail("")
    } else {
      alert("Por favor, insira um email válido.")
    }
  }

  return (
    <aside className={styles.sidebar}>
      <section className={styles.sidebarSection}>
        <header>
          <h2>
            <span>🏢</span> Nossa Instituição
          </h2>
        </header>
        <ul className={styles.infoList}>
          <li className={styles.highlight}>📍 CAMPUS PRINCIPAL</li>
          <li>Mais de 30 anos no mercado</li>
          <li>Mais de 5000 alunos formados</li>
          <li>Nota máxima no MEC</li>
          <li>Estrutura moderna e completa</li>
        </ul>
      </section>

      <section className={styles.sidebarSection}>
        <header>
          <h2>
            <span>📞</span> Contato Rápido
          </h2>
        </header>
        <ul className={styles.contactList}>
          <li>
            <span>📞</span> (11) 3456-7890
          </li>
          <li>
            <span>📧</span> contato@instituto.edu.br
          </li>
          <li>
            <span>📍</span> Av. Paulista - SP
          </li>
        </ul>
      </section>

      <section className={styles.sidebarSection}>
        <header>
          <h2>
            <span>👤</span> Portal do Aluno
          </h2>
        </header>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail institucional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.btnPortal}>
            Acessar Portal
          </button>
        </form>
      </section>
    </aside>
  )
}

"use client"

import { useState } from "react"

export function Sidebar() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Informações enviadas! Entraremos em contato em breve.")
    setFormData({
      nome: "",
      email: "",
      telefone: "",
    })
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-card">
        <h3>Solicite Informações</h3>
        <form onSubmit={handleSubmit} className="sidebar-form">
          <div className="form-group">
            <label htmlFor="sidebar-nome">Nome</label>
            <input type="text" id="sidebar-nome" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="sidebar-email">Email</label>
            <input
              type="email"
              id="sidebar-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="sidebar-telefone">Telefone</label>
            <input
              type="tel"
              id="sidebar-telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>

      <div className="sidebar-card">
        <h3>Informações Úteis</h3>
        <ul className="info-list">
          <li>📞 (11) 1234-5678</li>
          <li>📧 contato@institutowm.edu.br</li>
          <li>📍 São Paulo - SP</li>
          <li>🕐 Seg-Sex: 8h às 18h</li>
        </ul>
      </div>
    </aside>
  )
}

// Mantendo default export para compatibilidade
export default Sidebar

"use client"

import { useState } from "react"

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
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
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    })
  }

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Entre em Contato</h1>
          <p>Estamos aqui para ajudar você</p>
        </div>
      </section>

      <section className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Informações de Contato</h2>
            <div className="info-item">
              <h3>Endereço</h3>
              <p>
                Rua Exemplo, 123 - Centro
                <br />
                São Paulo - SP
                <br />
                CEP: 01234-567
              </p>
            </div>
            <div className="info-item">
              <h3>Telefone</h3>
              <p>(11) 1234-5678</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>contato@institutowm.edu.br</p>
            </div>
            <div className="info-item">
              <h3>Horário de Atendimento</h3>
              <p>
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="5"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

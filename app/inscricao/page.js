"use client"

import { useState } from "react"

export default function Inscricao() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    curso: "",
    turno: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    // Formatação de CPF
    if (name === "cpf") {
      const formatted = value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")

      setFormData((prev) => ({ ...prev, [name]: formatted }))
      return
    }

    // Formatação de telefone
    if (name === "telefone") {
      const formatted = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1")

      setFormData((prev) => ({ ...prev, [name]: formatted }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Inscrição realizada com sucesso! Entraremos em contato em breve.")
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      curso: "",
      turno: "",
    })
  }

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Inscreva-se</h1>
          <p>Dê o primeiro passo para seu futuro</p>
        </div>
      </section>

      <section className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="inscription-form">
            <h2>Formulário de Inscrição</h2>

            <div className="form-group">
              <label htmlFor="nome">Nome Completo *</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone *</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(11) 98765-4321"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cpf">CPF *</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="123.456.789-00"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="curso">Curso de Interesse *</label>
                <select id="curso" name="curso" value={formData.curso} onChange={handleChange} required>
                  <option value="">Selecione um curso</option>
                  <option value="engenharia-civil">Engenharia Civil</option>
                  <option value="engenharia-mecanica">Engenharia Mecânica</option>
                  <option value="engenharia-eletrica">Engenharia Elétrica</option>
                  <option value="medicina">Medicina</option>
                  <option value="enfermagem">Enfermagem</option>
                  <option value="administracao">Administração</option>
                  <option value="gestao-rh">Gestão de RH</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="turno">Turno *</label>
                <select id="turno" name="turno" value={formData.turno} onChange={handleChange} required>
                  <option value="">Selecione um turno</option>
                  <option value="matutino">Matutino</option>
                  <option value="vespertino">Vespertino</option>
                  <option value="noturno">Noturno</option>
                  <option value="integral">Integral</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar Inscrição
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

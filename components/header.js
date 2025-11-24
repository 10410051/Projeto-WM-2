"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import styles from "@/styles/Header.module.css"

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`)
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("scrolled")
        } else {
          header.classList.remove("scrolled")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInscricao = () => {
    router.push("/inscricao")
  }

  return (
    <header className={styles.header}>
      <nav className={styles.topNav}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🎓</span>
          <strong>Instituto de Excelência</strong>
          <small>Educação Superior</small>
        </Link>

        <ul className={styles.navMenu}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={pathname === item.href ? styles.active : ""}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className={styles.btnInscricao} onClick={handleInscricao}>
          Inscreva-se
        </button>
      </nav>
    </header>
  )
}

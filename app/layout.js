import { Geist } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const geist = Geist({ subsets: ["latin"] })

export const metadata = {
  title: "Instituto WM - Educação de Excelência",
  description: "Educação de qualidade para transformar o futuro. Cursos de Engenharia, Medicina e Administração.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={geist.className}>
        <Header />
        {children}
        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 Instituto WM. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

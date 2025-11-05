import { Geist } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const geist = Geist({ subsets: ["latin"] })

export const metadata = {
  title: "Instituto de Excelência - Educação Superior",
  description: "Formando líderes e inovadores para o futuro",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={geist.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

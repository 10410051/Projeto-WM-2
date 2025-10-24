import Header from './Header'
import Sidebar from './Sidebar'
import ClientScripts from './ClientScripts'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Sidebar />
      <ClientScripts />
    </>
  )
}

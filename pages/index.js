import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Projeto “Borboleta” — Next.js</h1>
      <p>Estrutura base com CSS Global e CSS Modules.</p>
      <nav>
        <ul>
          <li><Link href="/sobre">/sobre</Link></li>
          <li><Link href="/projetos/1">/projetos/1</Link></li>
        </ul>
      </nav>
    </main>
  )
}

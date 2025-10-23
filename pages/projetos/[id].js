import { useRouter } from 'next/router'

export default function Projeto() {
  const router = useRouter()
  const { id } = router.query

  return (
    <main style={{ padding: 24 }}>
      <h1>Projeto #{id}</h1>
      <p>Rota dinâmica funcionando.</p>
    </main>
  )
}

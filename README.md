
# Projeto-WM-2

Lucas Assis - 10735712

Daniel Zacharias Bittar Atui - 10410051

Gabriel Athia - 10264752


## Projeto Next.js — Parte 1 (Estrutura Base)

Este repositório contém a estrutura inicial solicitada: Next.js (pages router), CSS Global (styles/globals.css) e CSS Modules (styles/Home.module.css).
Como rodar localmente

```bash
npm install
npm run dev# ou
yarn
yarn dev
````

Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no navegador.
Rotas inclusas (exemplos)

/ (Home) — usa CSS Module
/sobre (rota simples)
/projetos/[id] (rota dinâmica)
Próximos passos (Partes 2 e 3)

Migrar páginas/trechos do Projeto 1 para componentes React.
Adicionar estado com useState/useEffect.
Futuramente, fazer fetch client-side em um componente para preencher parte da interface.

## Parte 2: Tutorial — Migrando o Site Estático para Next.js

Nesta etapa, pegamos o nosso projeto HTML/CSS/JS estático e o transformamos em uma aplicação React com Next.js. O objetivo era parar de copiar e colar HTML (como o header e a sidebar) e criar um "template" reaproveitável.

Vamos entender o que foi feito?

1.  O CSS Global (O "Cérebro" do Estilo)

O que fizemos: Todo o conteúdo do nosso style.css original foi copiado para dentro de styles/globals.css.

Por quê: No Next.js, este é o único lugar onde podemos colocar estilos que afetam o site inteiro (como resets de \<body\>, fontes, ou as classes de layout que usamos).

Como funciona: Este arquivo só é carregado uma vez, no arquivo principal pages/\_app.js.

2.  O Template Principal (Layout.js)

O maior benefício do React é criar componentes. Em vez de ter o \<header\> e a \<aside\> em todos os arquivos HTML, nós os isolamos.

O que fizemos: Criamos 4 novos arquivos na pasta components:

components/Header.js: Contém todo o nosso \<header\> e as seções \<section class="hero-section"\>.

components/Sidebar.js: Contém toda a nossa \<aside class="sidebar"\>.

components/ClientScripts.js: Este é o nosso script.js antigo, adaptado para o React (mais sobre ele abaixo).

components/Layout.js: Este é o "organizador". Ele é responsável por montar o quebra-cabeça.

Como o Layout.js funciona:
Ele importa o Header, Sidebar e ClientScripts e os os posiciona. A mágica acontece com a prop {children}. O Layout "abraça" a página (como index.js ou cursos.js) e insere o conteúdo dela exatamente onde {children} está.

```javascript
// components/Layout.js
import Header from './Header'
import Sidebar from './Sidebar'
import ClientScripts from './ClientScripts'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* A tag <main> agora fica aqui, envolvendo a página */}
      <main className="main-content">
        {children} {/* <-- A página (ex: index.js) entra aqui */}
      </main>
      <Sidebar />
      <ClientScripts />
    </>
  )
}
```

3.  O "Coração" da Aplicação (\_app.js)

Este é o arquivo mais importante do Next.js. Ele é o "molde" que envolve todas as páginas do site.

O que fizemos: Editamos o pages/\_app.js para que ele usasse o nosso Layout.

Por quê: Ao colocar o \<Layout\> aqui, garantimos que todas as páginas, não importa qual seja, terão o mesmo Header, Sidebar e os mesmos scripts.

Como funciona: Repare que usamos ../ para "subir" um nível e encontrar as pastas, já que \_app.js está dentro de pages.

```javascript
// pages/_app.js
import '../styles/globals.css' // 1. Carrega o CSS global
import Layout from '../components/Layout' // 2. Importa nosso template

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout> {/* 3. "Abraça" a aplicação com o Layout */}
      <Component {...pageProps} />
    </Layout>
  )
}
```

4.  As Páginas (De .html para .js)

Agora que temos o template, só precisamos criar o conteúdo de cada página.

O que fizemos: Migramos index.html e cursos.html.

Por quê: No Next.js (com Pages Router), qualquer arquivo .js dentro da pasta pages vira uma rota/URL.

Como funciona:

pages/index.js (a rota /) recebe o conteúdo que estava dentro da \<main\> do index.html.

pages/cursos.js (a rota /cursos) recebe o conteúdo que estava dentro da \<main\> do cursos.html.

5.  O JavaScript Interativo (ClientScripts.js)

Não podemos simplesmente jogar um arquivo .js no Next.js. Precisamos "traduzi-lo" para o React.

O que fizemos: Movemos a lógica do script.js para components/ClientScripts.js.

Por quê: No HTML, usávamos DOMContentLoaded. Em React, o equivalente é o hook useEffect.

Como funciona:

Colocamos toda a lógica de IntersectionObserver (animação de fade-in) e smooth scroll dentro de um useEffect.

O useEffect funciona como "execute este código assim que o componente aparecer na tela".

Usamos useRouter() para "ouvir" a rota. Quando a rota muda (o usuário navega do / para /cursos), o useEffect é executado novamente, garantindo que as animações funcionem em todas as páginas.

## Parte 3: Evolução para o App Router e Interatividade

O projeto evoluiu da estrutura "Pages Router" (descrita na Parte 2) para a arquitetura mais moderna do Next.js: o **App Router**. Esta mudança move toda a nossa estrutura de pastas de `pages/` para `app/` e introduz conceitos poderosos como Server Components, Layouts e uma nova forma de lidar com rotas e estado.

Vamos analisar as principais implementações:

### 1\. A Nova Estrutura de Rotas (App Router)

Com o App Router, a forma como as rotas são criadas mudou:

  * **`app/layout.js` (O "Molde" Global):**
    Este arquivo substitui o antigo `pages/_app.js`. Ele é o "layout raiz" (Root Layout) e é responsável por definir a estrutura `<html>` e `<body>` da aplicação. É aqui que importamos o `globals.css` e inserimos componentes globais, como o nosso `<Header />`, garantindo que ele apareça em todas as páginas.

  * **Páginas são `page.js`:**
    Em vez de `pages/cursos.js`, agora temos `app/cursos/page.js`. Qualquer arquivo chamado `page.js` dentro de uma pasta na `app/` se torna uma rota pública.

      * `app/page.js` → Rota `/`
      * `app/cursos/page.js` → Rota `/cursos`
      * `app/sobre/page.js` → Rota `/sobre`
      * `app/contato/page.js` → Rota `/contato`

  * **Rotas Dinâmicas `[pasta]`:**
    Uma das implementações mais importantes é a página de detalhe do curso, `app/cursos/[id]/page.js`.

      * A pasta `[id]` define um parâmetro de rota dinâmico.
      * Isso permite que rotas como `/cursos/engenharia`, `/cursos/medicina` e `/cursos/administracao` sejam todas renderizadas pelo *mesmo* arquivo de componente.

### 2\. Client Components: `"use client"`

A maior mudança no App Router é a introdução dos **Client Components**. Por padrão, todo componente no App Router é um *Server Component* (renderizado no servidor).

Para adicionar interatividade (como cliques, formulários, ou qualquer *hook* do React), precisamos "marcar" o arquivo com a diretiva `"use client"` no topo.

  * **Por que usamos?** Usamos `"use client"` em qualquer componente que precise de:

      * `useState` (para gerenciar estado)
      * `useEffect` (para efeitos colaterais, como API calls ou manipulação do DOM)
      * `useRouter`, `usePathname`, `useParams` (hooks de navegação)
      * Manipuladores de eventos (como `onClick`, `onChange`, `onSubmit`)

  * **Exemplos no Projeto:**

      * `app/inscricao/page.js`: Usa `useState` para controlar os dados do formulário (`formData`).
      * `components/header.js`: Usa `useEffect` para criar um efeito de "scroll" (adicionando a classe `.scrolled` ao `window.scrollY > 50`), `usePathname` para destacar o link ativo, e `useRouter` para o botão "Inscreva-se".
      * `components/sidebar.js`: Usa `useState` para gerenciar o formulário de "Portal do Aluno".
      * `components/program-cards.js`: Usa `useState`, `useEffect` e `useRef` para implementar uma animação de *fade-in* com `IntersectionObserver` quando o card entra na tela.

### 3\. Principais Hooks do Next.js em Ação

Estamos usando os hooks modernos do App Router para navegação e leitura de dados da rota:

  * **`useRouter()` (em `app/inscricao/page.js`)**
    Usado para navegação programática. Após o usuário enviar o formulário de inscrição, usamos `router.push("/")` para redirecioná-lo de volta à página inicial.

    ```javascript
    // app/inscricao/page.js
    const router = useRouter()

    const handleSubmit = (e) => {
      e.preventDefault()
      // ...lógica do formulário
      alert("Inscrição enviada com sucesso!")
      router.push("/") // <-- Redireciona para a Home
    }
    ```

  * **`usePathname()` (em `components/header.js`)**
    Usado para ler a URL atual. Isso nos permite comparar a URL com os links de navegação e aplicar uma classe `.active` ao link correspondente à página que o usuário está visitando.

    ```javascript
    // components/header.js
    const pathname = usePathname()
    // ...
    <Link href={item.href} className={pathname === item.href ? "active" : ""}>
      {item.label}
    </Link>
    ```

  * **`useParams()` (em `app/cursos/[id]/page.js`)**
    Este hook é essencial para rotas dinâmicas. Ele lê os parâmetros da URL. Na página `[id]`, ele nos dá o valor de `id` (ex: "engenharia"), permitindo que o componente exiba os dados corretos do curso.

    ```javascript
    // app/cursos/[id]/page.js
    import { useParams } from "next/navigation"

    export default function CursoDetailPage() {
      const params = useParams() // ex: { id: "engenharia" }
      const id = params.id
      // ...lógica para buscar os dados do curso com base no 'id'
    }
    ```

### 4\. Componentização e Reutilização

O projeto está totalmente componentizado para maximizar a reutilização de código:

  * **`components/header.js`:** Componente de cabeçalho global, agora inserido diretamente no `app/layout.js`.
  * **`components/sidebar.js`:** A barra lateral é um componente separado, importado e utilizado em todas as páginas (como `app/page.js`, `app/cursos/page.js`, etc.) para manter o layout consistente.
  * **`components/hero-section.js`:** Um componente "burro" (dumb component) perfeito. Ele não tem lógica própria, apenas recebe `props` (`title`, `subtitle`, `description`, `actions`) e renderiza a seção de destaque. É usado em todas as páginas, cada uma com seu próprio conteúdo.
  * **`components/program-cards.js`:** Componente de card reutilizável que é usado nas páginas "Home" e "Cursos" para exibir os diferentes programas. Ele também contém sua própria lógica de animação (`IntersectionObserver`), tornando-o um componente inteligente e autônomo.

### 5\. Criação de API Própria (Route Handlers)

O Next.js não serve apenas para criar páginas (frontend); ele também permite criar rotas de API (backend) dentro do mesmo projeto.

**O que fizemos:** Criamos o arquivo `app/api/programas/route.js`.

**Por quê:** Precisávamos de uma fonte de dados para listar nossos cursos. Em um cenário real, isso viria de um banco de dados externo, mas aqui simulamos um backend que lê de um arquivo JSON e responde às requisições do frontend.

**Como funciona:**
Utilizamos a classe `NextResponse` para retornar JSON. Também implementamos um sistema simples de filtro via *Query Params*.

```javascript
// app/api/programas/route.js
import { NextResponse } from "next/server"
import cursosData from "@/data/cursos.json"

export async function GET(request) {
  // Pega a URL da requisição
  const { searchParams } = new URL(request.url)
  // Verifica se tem algo como ?categoria=graduacao
  const categoria = searchParams.get("categoria")

  // Filtra os dados se houver categoria, ou retorna tudo
  const filtrados = categoria
    ? cursosData.programas.filter((p) => p.categoria === categoria)
    : cursosData.programas

  return NextResponse.json(filtrados)
}
```

### 6\. Consumindo Dados (Fetch no Client-Side)

Como optamos por usar `"use client"` nas páginas principais para gerenciar estados de carregamento (`loading`), o consumo de dados acontece no navegador.

**O que fizemos:** Nas páginas `app/page.js` (Home) e `app/cursos/page.js`, utilizamos o padrão `useEffect` + `fetch`.

**Como funciona:**

1.  Criamos um estado para armazenar os dados (`programs`) e um para o carregamento (`loading`).
2.  Quando o componente monta, o `fetch` chama nossa API interna.
3.  Atualizamos o estado e o React renderiza os cards.

<!-- end list -->

```javascript
// Exemplo em app/page.js
useEffect(() => {
  async function fetchPrograms() {
    try {
      // Chama a nossa API criada no passo anterior
      const response = await fetch("/api/programas?categoria=graduacao")
      const data = await response.json()
      setPrograms(data.slice(0, 3)) // Pega apenas os 3 primeiros
    } finally {
      setLoading(false) // Desliga o "Carregando..."
    }
  }
  fetchPrograms()
}, [])
```

### 7\. Roteamento Dinâmico Avançado (`[id]`)

Uma das partes mais poderosas foi a criação da página de detalhes.

**O que fizemos:** O arquivo `app/cursos/[id]/page.js`.

**Como funciona:**
Quando o usuário acessa `/cursos/engenharia`, o Next.js entende que `engenharia` é o `id`.
Utilizamos um objeto local `cursosData` (dentro do próprio arquivo, para fins didáticos) que funciona como um "banco de dados" de detalhes. O hook `useEffect` detecta quando o ID muda e carrega as informações correspondentes (abas, laboratórios, coordenação).

```javascript
// app/cursos/[id]/page.js
const params = useParams() // Pega o parametro da URL
const id = params.id 

useEffect(() => {
  // Busca no objeto estático as informações daquele curso
  if (id && cursosData[id]) {
    setCurso(cursosData[id])
  }
}, [id])
```

### 8\. Formulários Interativos e Máscaras

Implementamos um formulário completo com validação visual e formatação de dados.

**O que fizemos:** A página `app/inscricao/page.js`.

**Destaques da implementação:**

  * **Controlled Inputs:** O estado `formData` controla todos os campos. Cada letra digitada atualiza o estado via função `handleChange`.
  * **Máscaras de Input:** Criamos funções auxiliares (`formatCPF`, `formatTelefone`) que aplicam a formatação (pontos e traços) em tempo real enquanto o usuário digita.
  * **Redirecionamento:** Após o "envio" (submit), usamos o `setTimeout` para simular uma espera e o `router.push('/')` para levar o usuário de volta à home.

<!-- end list -->

```javascript
// Exemplo da lógica de máscara
const formatCPF = (value) => {
  const numbers = value.replace(/\D/g, "") // Remove tudo que não é número
  // Lógica de regex para adicionar pontos e traço
  return numbers.replace(/(\d{3})(\d)/, "$1.$2")... 
}
```

### 9\. Estilização Modular e Animações

Mantivemos a organização do CSS usando **CSS Modules**, o que evita conflitos de classes entre componentes.

**O que fizemos:**

  * `styles/Header.module.css`
  * `styles/HeroSection.module.css`
  * etc.

**Animação com Intersection Observer:**
No componente `ProgramCard`, implementamos uma funcionalidade avançada de UI. O card só aparece (efeito *fade-in-up*) quando o usuário rola a página até ele.

```javascript
// components/program-cards.js
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    // Quando o elemento entra na tela...
    if (entry.isIntersecting) {
      setIsVisible(true) // Ativa a classe CSS de animação
    }
  })
  // ...
}, [])
```

-----

## Parte 4: Por que este é um Projeto Extensionista?

A extensão universitária visa articular o ensino e a pesquisa com as demandas da sociedade, promovendo uma troca de saberes. Este projeto de "Instituto de Excelência" não é apenas um exercício de codificação, mas uma **ferramenta de impacto social e educacional**.

Abaixo, detalhamos como o código desenvolvido reflete os princípios extensionistas:

### 1\. Democratização do Acesso à Informação e Educação

A estrutura do projeto foi pensada para facilitar o acesso da comunidade a oportunidades de ensino técnico e superior.

  * **Implementação:** No arquivo `app/cursos/page.js` e na API `app/api/programas/route.js`, organizamos a informação de forma clara entre "Graduação" e "Técnico".
  * **Impacto:** Ao estruturar os dados em um arquivo JSON (`data/cursos.json`) que alimenta a interface, permitimos que informações sobre qualificação profissional (engenharia, medicina, cursos técnicos) cheguem de forma organizada ao usuário, combatendo a desinformação e incentivando a formação profissional.

### 2\. Acessibilidade e Experiência do Usuário (UX)

Um projeto extensionista deve ser inclusivo. A tecnologia escolhida (Next.js) e as técnicas de CSS aplicadas garantem que o site seja acessível a um público amplo, independentemente do dispositivo utilizado.

  * **Responsividade:** O uso de `media queries` nos arquivos CSS Modules (ex: `styles/Layout.module.css`) adapta o conteúdo para celulares e tablets. Isso é crucial para atingir populações que acessam a internet majoritariamente via mobile.
  * **Performance:** A renderização otimizada do Next.js (Server Components em `layout.js` e Client Components onde necessário) garante que o site carregue rápido, respeitando conexões de dados limitadas.

### 3\. Interatividade como Ponte Social

O código não é estático; ele convida a comunidade a interagir com a instituição.

  * **Formulário de Inscrição (`app/inscricao/page.js`):** A implementação de validações e máscaras (CPF, Telefone) reduz barreiras burocráticas, facilitando a entrada de novos alunos.
  * **Canais de Comunicação (`app/contato/page.js`):** A disponibilização clara de WhatsApp, telefone e e-mail cria canais diretos de diálogo com a sociedade.

### 4\. Transparência Institucional

A página `app/sobre/page.js` cumpre o papel de prestar contas à sociedade, apresentando a missão ("Transformar vidas"), a visão e os valores éticos da instituição. Isso reforça o compromisso da organização simulada com o desenvolvimento regional.

### 5\. Difusão de Conhecimento Tecnológico (Open Source)

Por fim, a própria natureza deste repositório (código aberto com documentação detalhada nas Partes 1, 2 e 3) atua como uma extensão educacional para outros estudantes de tecnologia. Ao detalhar o processo de migração e a lógica dos hooks (`useEffect`, `useState`), estamos devolvendo à comunidade técnica o conhecimento adquirido na universidade.

```
```

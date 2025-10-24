# Projeto-WM-2

## Projeto Next.js — Parte 1 (Estrutura Base)

Este repositório contém a estrutura inicial solicitada: Next.js (pages router), CSS Global (styles/globals.css) e CSS Modules (styles/Home.module.css).
Como rodar localmente

```bash
npm install
npm run dev# ou
yarn
yarn dev
```

Abra http://localhost:3000 no navegador.
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

1. O CSS Global (O "Cérebro" do Estilo)

O que fizemos: Todo o conteúdo do nosso style.css original foi copiado para dentro de styles/globals.css.

Por quê: No Next.js, este é o único lugar onde podemos colocar estilos que afetam o site inteiro (como resets de <body>, fontes, ou as classes de layout que usamos).

Como funciona: Este arquivo só é carregado uma vez, no arquivo principal pages/_app.js.

2. O Template Principal (Layout.js)

O maior benefício do React é criar componentes. Em vez de ter o <header> e a <aside> em todos os arquivos HTML, nós os isolamos.

O que fizemos: Criamos 4 novos arquivos na pasta components:

components/Header.js: Contém todo o nosso <header> e as seções <section class="hero-section">.

components/Sidebar.js: Contém toda a nossa <aside class="sidebar">.

components/ClientScripts.js: Este é o nosso script.js antigo, adaptado para o React (mais sobre ele abaixo).

components/Layout.js: Este é o "organizador". Ele é responsável por montar o quebra-cabeça.

Como o Layout.js funciona:
Ele importa o Header, Sidebar e ClientScripts e os posiciona. A mágica acontece com a prop {children}. O Layout "abraça" a página (como index.js ou cursos.js) e insere o conteúdo dela exatamente onde {children} está.

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

3. O "Coração" da Aplicação (_app.js)

Este é o arquivo mais importante do Next.js. Ele é o "molde" que envolve todas as páginas do site.

O que fizemos: Editamos o pages/_app.js para que ele usasse o nosso Layout.

Por quê: Ao colocar o <Layout> aqui, garantimos que todas as páginas, não importa qual seja, terão o mesmo Header, Sidebar e os mesmos scripts.

Como funciona: Repare que usamos ../ para "subir" um nível e encontrar as pastas, já que _app.js está dentro de pages.

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

4. As Páginas (De .html para .js)

Agora que temos o template, só precisamos criar o conteúdo de cada página.

O que fizemos: Migramos index.html e cursos.html.

Por quê: No Next.js (com Pages Router), qualquer arquivo .js dentro da pasta pages vira uma rota/URL.

Como funciona:

pages/index.js (a rota /) recebe o conteúdo que estava dentro da <main> do index.html.

pages/cursos.js (a rota /cursos) recebe o conteúdo que estava dentro da <main> do cursos.html.

5. O JavaScript Interativo (ClientScripts.js)

Não podemos simplesmente jogar um arquivo .js no Next.js. Precisamos "traduzi-lo" para o React.

O que fizemos: Movemos a lógica do script.js para components/ClientScripts.js.

Por quê: No HTML, usávamos DOMContentLoaded. Em React, o equivalente é o hook useEffect.

Como funciona:

Colocamos toda a lógica de IntersectionObserver (animação de fade-in) e smooth scroll dentro de um useEffect.

O useEffect funciona como "execute este código assim que o componente aparecer na tela".

Usamos useRouter() para "ouvir" a rota. Quando a rota muda (o usuário navega do / para /cursos), o useEffect é executado novamente, garantindo que as animações funcionem em todas as páginas.

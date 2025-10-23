# Projeto Next.js — Parte 1 (Estrutura Base)

Este repositório contém a estrutura inicial solicitada: Next.js (pages router), CSS Global (`styles/globals.css`) e CSS Modules (`styles/Home.module.css`).

## Como rodar localmente

```bash
npm install
npm run dev
# ou
yarn
yarn dev
```

Abra http://localhost:3000 no navegador.

## Rotas inclusas (exemplos)
- `/` (Home) — usa CSS Module
- `/sobre` (rota simples)
- `/projetos/[id]` (rota dinâmica)

## Próximos passos (Partes 2 e 3)
- Migrar páginas/trechos do Projeto 1 para componentes React.
- Adicionar estado com `useState`/`useEffect`.
- Futuramente, fazer `fetch` client-side em um componente para preencher parte da interface.

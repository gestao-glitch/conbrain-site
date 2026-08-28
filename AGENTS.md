<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Projeto: site institucional Conbrain

Incorporadora e construtora em Porto União (SC). Site institucional em Next.js 16
(App Router), TypeScript e Tailwind v4.

Responda em português — a equipe que mantém este projeto é brasileira e a maior parte
dela não é técnica. Explique o que você fez em linguagem simples e diga sempre qual é
o próximo passo concreto.

## Regras do projeto

- **Sempre** use `npm install --legacy-peer-deps`. Sem a flag a instalação quebra por
  conflito entre Tina CMS e React 19.
- O build do Docker roda `npm run build:docker` (só `next build`). **Não** adicione
  `tinacms build` ao caminho do Docker: depende do TinaCloud, que está bloqueado.
- O `Dockerfile` precisa de `ENV HOSTNAME=0.0.0.0`. Sem isso o container sobe mas o
  proxy do EasyPanel não o alcança e o site sai do ar.
- A deps stage do Docker instala `python3 make g++` — são necessários para compilar o
  `better-sqlite3` (dependência nativa do Tina). Não remova.
- Nunca commite tokens ou `.env*`.

## Trabalhando com a equipe de marketing

Quem mais usa este repositório é a equipe de publicidade, via Claude Code, pedindo
alterações em português. Com eles:

- Os textos ficam em `content/*.json`. Para pedidos de conteúdo, edite o JSON — nunca
  escreva texto direto no `.tsx`.
- Depois de alterar, ofereça mostrar o resultado (`npm run dev`) antes de publicar.
- Publicar = commit + push para `main`. O deploy em si é acionado no EasyPanel.
- Rode `npm run build:docker` antes de publicar: se o build quebrar localmente, o
  deploy também quebraria.
- Explique o que foi feito em linguagem simples, sem jargão.

## Estado atual

- Deploy no EasyPanel (VPS Hostinger) a partir da branch `main`, via Dockerfile.
- Os textos estão escritos direto nas páginas em `src/app/`.
- Os arquivos em `content/*.json` foram preparados para o CMS mas **ainda não estão
  ligados às páginas**.
- Tina CMS bloqueado: o TinaCloud não indexa a branch `main`, então `/admin` dá 404 em
  produção. Alternativa a avaliar: Decap CMS (git-based, sem serviço externo).

## Pendências

1. Ligar as páginas aos JSONs de `content/` (pré-requisito para qualquer CMS).
2. Resolver o CMS para a equipe de marketing (provavelmente migrar para Decap).
3. Apontar o domínio `conbrain.com.br` para `187.127.5.127`.
4. Backend do formulário de contato (e-mail ou WhatsApp).

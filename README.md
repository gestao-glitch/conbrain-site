# Site Institucional Conbrain

Site da Conbrain — Incorporadora e Construtora (Porto União, SC).

**Produção:** https://site-conbrain-site.zx1xa6.easypanel.host

---

## Primeiros passos (máquina nova)

### 1. Instalar o necessário

| Ferramenta | Onde baixar |
|---|---|
| Node.js 20+ | https://nodejs.org (baixe a versão LTS) |
| Git | https://git-scm.com/downloads |
| Claude Code | https://claude.com/claude-code |

### 2. Baixar o projeto

```bash
git clone https://github.com/gestao-glitch/conbrain-site.git
```

### 3. Instalar dependências

```bash
cd conbrain-site && npm install --legacy-peer-deps
```

> A flag `--legacy-peer-deps` é obrigatória. Sem ela a instalação falha por conflito
> entre o Tina CMS e o React 19.

### 4. Rodar localmente

```bash
npm run dev
```

Abra http://localhost:3000. As alterações aparecem sozinhas ao salvar um arquivo.

---

## Onde fica cada coisa

```
src/app/                    Páginas do site
  page.tsx                  → Home
  sobre/page.tsx            → Sobre
  empreendimentos/page.tsx  → Empreendimentos
  contato/page.tsx          → Contato
  layout.tsx                → Cabeçalho/rodapé de todas as páginas
  globals.css               → Estilos globais e cores

src/components/             Peças reutilizadas
  header.tsx                → Menu do topo
  footer.tsx                → Rodapé
  whatsapp-button.tsx       → Botão flutuante do WhatsApp

content/                    Textos do site (arquivos JSON)
  home/index.json           → Textos da home
  sobre/index.json          → História e bio do fundador
  contato/index.json        → Endereço, telefone, horários
  empreendimentos/*.json    → Um arquivo por empreendimento

public/images/              Todas as imagens
```

### Como trocar um texto

Os textos ainda estão escritos direto nas páginas (`src/app/*.tsx`). Os arquivos em
`content/` foram preparados para o CMS, mas **ainda não estão conectados às páginas**
— ver "Pendências" abaixo.

Para mudar um texto hoje, edite o `.tsx` da página correspondente.

### Como trocar uma imagem

1. Coloque o arquivo novo em `public/images/<pasta>/`
2. Referencie no código com o caminho sem `public`: `/images/<pasta>/arquivo.jpg`
3. Imagens grandes devem ser redimensionadas antes (largura máx. ~1200px)

---

## Publicar no ar

O deploy é feito pelo **EasyPanel** (VPS Hostinger), a partir da branch `main` do GitHub.

```bash
git add .
git commit -m "descrição da mudança"
git push
```

Depois, no EasyPanel: serviço `conbrain-site` → **Implantar**.

### Detalhes do build

- Docker multi-stage, `node:20-alpine` (`Dockerfile`)
- O build no Docker roda `npm run build:docker`, que executa **apenas** `next build`
- O `tinacms build` foi deliberadamente removido do Docker — depende do TinaCloud,
  que está bloqueado (ver Pendências)
- `HOSTNAME=0.0.0.0` é obrigatório, senão o proxy do EasyPanel não alcança o container

---

## Pendências

1. **CMS para a equipe de marketing** — o Tina CMS está bloqueado: o TinaCloud não
   consegue indexar a branch `main`, então `/admin` não funciona em produção.
   Alternativa avaliada: migrar para **Decap CMS** (mesma ideia, sem serviço externo).
2. **Conectar as páginas ao `content/`** — hoje os textos estão no código; ligar as
   páginas aos JSONs é pré-requisito para qualquer CMS funcionar.
3. **Domínio próprio** — apontar `conbrain.com.br` para `187.127.5.127`.
4. **Formulário de contato** — falta o backend (envio por e-mail ou WhatsApp).

---

## Variáveis de ambiente

Nunca são commitadas (`.env*` está no `.gitignore`). Peça os valores ao Bruno e crie
um arquivo `.env.local` na raiz:

```
NEXT_PUBLIC_TINA_CLIENT_ID=<pedir ao Bruno>
TINA_TOKEN=<pedir ao Bruno>
GITHUB_BRANCH=main
```

As mesmas variáveis já estão configuradas no EasyPanel para produção.

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

## E-mail do site (formulários e Canal de Denúncias)

Todos os formulários de contato, além de abrir o WhatsApp, enviam o contato por
e-mail em segundo plano (`src/app/api/contato/route.ts`), para nenhum contato se
perder. O e-mail traz os campos, um link para chamar no WhatsApp, a página e por
onde a pessoa chegou ao site (UTM/Instagram/Google). A configuração de envio é
uma só para o site todo (`src/lib/email.ts`), no EasyPanel (aba Environment):

- `SMTP_USUARIO` — conta Google Workspace que envia (ex.: site@conbrain.com.br)
- `SMTP_SENHA` — "senha de app" dessa conta (Conta Google → Segurança →
  Verificação em duas etapas → Senhas de app). Nunca commitar.
- `CONTATO_EMAIL_DESTINO` — opcional; quem recebe os contatos (padrão
  comercial@conbrain.com.br, vírgula para mais de um)

Sem `SMTP_*`, o WhatsApp continua funcionando, mas os contatos não chegam por
e-mail. No computador, `DENUNCIA_MODO_TESTE=1` (ou `EMAIL_MODO_TESTE=1`) no
`.env.local` monta os e-mails e mostra no terminal sem enviar.

## Medição de resultados (Google Analytics e Meta Pixel)

Os códigos ficam em `src/lib/medicao-ids.ts` (`GA_ID`, `PIXEL_ID`; não são
senhas). A lógica está em `src/lib/medicao.ts` e o aviso de cookies em
`src/components/medicao-e-cookies.tsx`, ligado no layout principal.

- Só liga no domínio oficial (`conbrain.com.br` e `www.`): no computador e no
  endereço provisório do servidor nada é medido (os eventos aparecem no console).
- Só liga depois que a pessoa clica em "Aceitar" no aviso de cookies (LGPD). A
  escolha pode ser mudada em "Preferências de cookies", nos rodapés.
- O Canal de Denúncias nunca é medido e não mostra o aviso.
- Conversões: `generate_lead` (formulário enviado, via `registrarContato`),
  `contato_whatsapp` e `contato_email` (cliques em links wa.me/mailto). No Pixel:
  `Lead` e `Contact`.
- Usa as contas que a Conbrain já tinha (Analytics da conta "Conbrain" e o
  "Pixel Conbrain CA1"), para manter o histórico. A Política de Privacidade cita o
  Meta Pixel sozinha enquanto `PIXEL_ID` estiver preenchido (seção 6, `#cookies`).
- A Meta ignora navegadores automáticos: para testar o Pixel com puppeteer, use
  `--disable-blink-features=AutomationControlled`.

## Canal de Denúncias (`/canal-de-denuncias`)

Exigido pela Lei 14.457/22 e apurado pela CIPA. O formulário é **anônimo** e por
isso **não** usa WhatsApp como os outros: envia por e-mail pelo servidor
(`src/app/api/denuncia/route.ts`), com a mesma conta de envio acima (`SMTP_*`).
Sem ela, ou sem a variável abaixo, o canal responde "temporariamente
indisponível" — configure no EasyPanel antes de publicar:

- `DENUNCIA_EMAIL_DESTINO` — quem recebe os relatos (vírgula para mais de um)

Endereços antigos do Wix (`/canaldedenuncias`, `/formulario`, `/taiji`…) são
redirecionados em `next.config.ts`.

É de **uso interno**: não aparece no rodapé, no sitemap nem no Google (`noindex`).
O acesso é só pelo link direto, divulgado internamente.

## Pendências

1. Ligar as páginas aos JSONs de `content/` (pré-requisito para qualquer CMS).
2. Resolver o CMS para a equipe de marketing (provavelmente migrar para Decap).
3. Apontar o domínio `conbrain.com.br` para `187.127.5.127`.
4. Configurar `SMTP_*` no EasyPanel para os contatos chegarem por e-mail.
5. Depois do domínio apontado: verificar `conbrain.com.br` no Gerenciador de Negócios da Meta.

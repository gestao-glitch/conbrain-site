# Como editar o site

Guia para a equipe de marketing. Você conversa com o Claude Code em português e ele
faz a alteração — não é preciso saber programar.

---

## Parte 1 — Instalação (uma vez só)

### 1. Conta Claude

Você precisa da sua **própria conta**, com login individual. O Bruno envia o convite;
você recebe por e-mail e cria sua senha.

### 2. Conta GitHub

Crie em https://github.com/signup e mande seu nome de usuário para o Bruno, que
libera seu acesso ao projeto.

### 3. Programas

| Programa | Onde baixar |
|---|---|
| Node.js (versão LTS) | https://nodejs.org |
| Git | https://git-scm.com/downloads |
| Claude Code | https://claude.com/claude-code |

Instale os três com as opções padrão — pode ir clicando em "Avançar".

### 4. Baixar o site

Abra o Terminal (no Mac: `Cmd + Espaço`, escreva "Terminal") e cole:

```bash
git clone https://github.com/gestao-glitch/conbrain-site.git
```

Depois:

```bash
cd conbrain-site && npm install --legacy-peer-deps
```

A instalação demora alguns minutos na primeira vez. É normal.

### 5. Abrir o Claude Code

```bash
claude
```

Faça login com **sua** conta Claude. Pronto — pode conversar.

---

## Parte 2 — Editando

Estando dentro da pasta do projeto, é só pedir em português. Exemplos reais:

> Troque o subtítulo da página inicial para "Construindo o futuro de Porto União"

> Atualize o telefone de contato para (42) 3522-1234

> No texto da página Sobre, mude "5 projetos" para "7 projetos"

> Abra o site para eu ver como ficou

> Publique as alterações

O Claude Code já conhece este projeto: sabe onde ficam os textos, quais regras seguir
e o que não pode quebrar. Isso está escrito no arquivo `AGENTS.md`, que ele lê sozinho.

### Ver antes de publicar

Peça **"abra o site para eu ver"**. Ele sobe uma versão de teste no seu computador,
que só você enxerga. O site no ar não muda até você mandar publicar.

### Publicar

Peça **"publique as alterações"**. Ele salva no GitHub com seu nome. Em seguida,
alguém com acesso ao EasyPanel coloca no ar — ou você usa o link de publicação que o
Bruno passou.

---

## O que dá e o que não dá

**Dá para pedir:**
- Trocar qualquer texto do site
- Trocar telefone, endereço, horário, WhatsApp, Instagram
- Trocar ou adicionar fotos
- Ver como ficou antes de publicar

**Peça ajuda a um desenvolvedor para:**
- Mudar cores, fontes ou layout
- Criar páginas novas
- Mexer no menu

---

## Dúvidas comuns

**Posso quebrar o site?**
Praticamente não. Se algo sair errado, a publicação falha e o site continua no ar com
a versão anterior. E todas as alterações ficam registradas — dá para voltar atrás.

**Errei alguma coisa. E agora?**
Peça: *"desfaça a última alteração"*. Se já publicou, peça ao Bruno para reverter.

**O Claude Code pediu permissão para rodar um comando.**
Os comandos do dia a dia já vêm liberados. Se ele pedir algo diferente e você não
souber, pergunte antes de aceitar.

**Preciso deixar o Terminal aberto?**
Só enquanto estiver trabalhando. Ao voltar, abra o Terminal e digite:

```bash
cd conbrain-site && claude
```

---

## Alternativa sem instalar nada

Para uma correção rápida, dá para editar direto no navegador pelo GitHub:

1. Abra https://github.com/gestao-glitch/conbrain-site/tree/main/content
2. Escolha o arquivo (`home`, `sobre`, `contato` ou `empreendimentos`)
3. Clique no lápis ✏️, altere **só o texto entre aspas**, e clique em **Commit changes**

Cuidado para não apagar as aspas `"` nem as vírgulas — é isso que quebra o arquivo.

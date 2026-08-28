# Como editar o site

Guia para a equipe de marketing. **Não é preciso instalar nada** — tudo pelo navegador.

---

## Antes de começar

Você precisa de uma conta no GitHub e de acesso ao repositório. Peça ao Bruno.

Endereço do projeto:
https://github.com/gestao-glitch/conbrain-site

---

## Trocar um texto

**1.** Abra a pasta `content` no GitHub:
https://github.com/gestao-glitch/conbrain-site/tree/main/content

**2.** Escolha o arquivo da página que quer mudar:

| Quero mudar | Abra este arquivo |
|---|---|
| Textos da página inicial | `home/index.json` |
| História da empresa / bio do Bruno | `sobre/index.json` |
| Endereço, telefone, horário, WhatsApp | `contato/index.json` |
| Um empreendimento | `empreendimentos/<nome>.json` |

**3.** Clique no ícone de **lápis** (✏️), no canto superior direito do arquivo.

**4.** Altere **apenas o texto entre aspas**. Por exemplo:

```
"hero_subtitulo": "Inteligência construtiva e design urbano em Porto União, SC"
                   └──────────── só esta parte ────────────────────────────┘
```

**5.** Role até o fim, escreva uma descrição curta do que mudou e clique em
**Commit changes**.

**6.** Avise quem publica (ou use o link de publicação que o Bruno passou). Em poucos
minutos a mudança está no ar.

---

## As 4 regras

Elas evitam 99% dos problemas:

1. **Nunca apague as aspas** `"` — o texto vai sempre entre elas.
2. **Nunca apague a vírgula** no fim da linha.
3. **Não mude o nome do campo** (a parte antes dos dois-pontos, como `hero_titulo`).
4. **Aspas dentro do texto** precisam de uma barra antes: `\"assim\"`.

### `\n` quebra a linha

No título da página inicial existe um `\n`:

```
"hero_titulo": "Edificamos cidades\nque transformam vidas"
```

O `\n` faz o texto quebrar em duas linhas na tela. Mantenha se quiser a quebra,
apague se quiser tudo em uma linha só.

---

## Trocar uma foto

**1.** Entre na pasta da imagem:
https://github.com/gestao-glitch/conbrain-site/tree/main/public/images

**2.** Abra a subpasta do empreendimento (`beos`, `mastro`, `taiji`...).

**3.** Clique em **Add file → Upload files** e arraste a foto nova.

**4.** Em **Commit changes**, descreva o que subiu.

**5.** Se o nome do arquivo novo for **diferente** do antigo, é preciso apontar o novo
nome no código — nesse caso, peça ajuda.

> **Dica:** deixe as fotos com no máximo ~1200px de largura antes de subir.
> Fotos muito grandes deixam o site lento.

---

## Se algo quebrar

O site continua no ar com a versão anterior até uma nova publicação dar certo — não
existe risco de derrubar tudo com um erro de digitação.

Se a mudança não aparecer, quase sempre é uma vírgula ou aspas faltando. Avise o
Bruno com o link do que você editou.

---

## O que **não** dá para mudar por aqui

Estes itens ainda estão no código e precisam de um desenvolvedor:

- Textos da página de Empreendimentos (cards e descrições)
- Os 4 blocos de "Por que Conbrain" na página inicial
- Menu, cores e layout

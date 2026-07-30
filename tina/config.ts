import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH ?? "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "",
  token: process.env.TINA_TOKEN ?? "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ─── PÁGINA HOME ───────────────────────────────────────────────
      {
        name: "home",
        label: "Página Inicial",
        path: "content/home",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "hero_titulo",
            label: "Título principal (Hero)",
          },
          {
            type: "string",
            name: "hero_subtitulo",
            label: "Subtítulo (Hero)",
          },
          {
            type: "string",
            name: "diferenciais_titulo",
            label: "Título da seção Diferenciais",
          },
          {
            type: "string",
            name: "cta_titulo",
            label: "Título do CTA final",
          },
          {
            type: "string",
            name: "cta_descricao",
            label: "Descrição do CTA final",
            ui: { component: "textarea" },
          },
        ],
      },

      // ─── EMPREENDIMENTOS ───────────────────────────────────────────
      {
        name: "empreendimentos",
        label: "Empreendimentos",
        path: "content/empreendimentos",
        format: "json",
        fields: [
          {
            type: "string",
            name: "nome",
            label: "Nome do empreendimento",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "tipo",
            label: "Tipo",
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: ["Em obras", "Lançamento", "Pré-lançamento", "Entregue"],
          },
          {
            type: "boolean",
            name: "caixa",
            label: "Financiamento Caixa",
          },
          {
            type: "image",
            name: "imagem",
            label: "Imagem principal",
          },
          {
            type: "string",
            name: "descricao",
            label: "Descrição",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "destaques",
            label: "Destaques",
            list: true,
          },
        ],
      },

      // ─── PÁGINA SOBRE ──────────────────────────────────────────────
      {
        name: "sobre",
        label: "Página Sobre",
        path: "content/sobre",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "historia_titulo",
            label: "Título — Nossa História",
          },
          {
            type: "string",
            name: "historia_texto1",
            label: "Parágrafo 1 — História",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "historia_texto2",
            label: "Parágrafo 2 — História",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "fundador_bio1",
            label: "Bio do Fundador — parágrafo 1",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "fundador_bio2",
            label: "Bio do Fundador — parágrafo 2",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "fundador_quote",
            label: "Citação do Fundador",
            ui: { component: "textarea" },
          },
        ],
      },

      // ─── CONTATO ───────────────────────────────────────────────────
      {
        name: "contato",
        label: "Página Contato",
        path: "content/contato",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "endereco",
            label: "Endereço",
          },
          {
            type: "string",
            name: "telefone",
            label: "Telefone",
          },
          {
            type: "string",
            name: "horario",
            label: "Horário de atendimento",
          },
          {
            type: "string",
            name: "whatsapp",
            label: "Número WhatsApp (com código do país, ex: 5542998756915)",
          },
        ],
      },
    ],
  },
});

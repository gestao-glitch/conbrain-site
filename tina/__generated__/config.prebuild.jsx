// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH ?? "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "",
  token: process.env.TINA_TOKEN ?? "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ─── PÁGINA HOME ───────────────────────────────────────────────
      {
        name: "home",
        label: "P\xE1gina Inicial",
        path: "content/home",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "hero_titulo",
            label: "T\xEDtulo principal (Hero)"
          },
          {
            type: "string",
            name: "hero_subtitulo",
            label: "Subt\xEDtulo (Hero)"
          },
          {
            type: "string",
            name: "diferenciais_titulo",
            label: "T\xEDtulo da se\xE7\xE3o Diferenciais"
          },
          {
            type: "string",
            name: "cta_titulo",
            label: "T\xEDtulo do CTA final"
          },
          {
            type: "string",
            name: "cta_descricao",
            label: "Descri\xE7\xE3o do CTA final",
            ui: { component: "textarea" }
          }
        ]
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
            required: true
          },
          {
            type: "string",
            name: "tipo",
            label: "Tipo"
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: ["Em obras", "Lan\xE7amento", "Pr\xE9-lan\xE7amento", "Entregue"]
          },
          {
            type: "boolean",
            name: "caixa",
            label: "Financiamento Caixa"
          },
          {
            type: "image",
            name: "imagem",
            label: "Imagem principal"
          },
          {
            type: "string",
            name: "descricao",
            label: "Descri\xE7\xE3o",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "destaques",
            label: "Destaques",
            list: true
          }
        ]
      },
      // ─── PÁGINA SOBRE ──────────────────────────────────────────────
      {
        name: "sobre",
        label: "P\xE1gina Sobre",
        path: "content/sobre",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "historia_titulo",
            label: "T\xEDtulo \u2014 Nossa Hist\xF3ria"
          },
          {
            type: "string",
            name: "historia_texto1",
            label: "Par\xE1grafo 1 \u2014 Hist\xF3ria",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "historia_texto2",
            label: "Par\xE1grafo 2 \u2014 Hist\xF3ria",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "fundador_bio1",
            label: "Bio do Fundador \u2014 par\xE1grafo 1",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "fundador_bio2",
            label: "Bio do Fundador \u2014 par\xE1grafo 2",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "fundador_quote",
            label: "Cita\xE7\xE3o do Fundador",
            ui: { component: "textarea" }
          }
        ]
      },
      // ─── CONTATO ───────────────────────────────────────────────────
      {
        name: "contato",
        label: "P\xE1gina Contato",
        path: "content/contato",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "endereco",
            label: "Endere\xE7o"
          },
          {
            type: "string",
            name: "telefone",
            label: "Telefone"
          },
          {
            type: "string",
            name: "horario",
            label: "Hor\xE1rio de atendimento"
          },
          {
            type: "string",
            name: "whatsapp",
            label: "N\xFAmero WhatsApp (com c\xF3digo do pa\xEDs, ex: 5542998756915)"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

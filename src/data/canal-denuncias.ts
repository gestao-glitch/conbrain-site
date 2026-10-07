// Opções do formulário do Canal de Denúncias (Lei 14.457/22).
// Usadas tanto na página quanto na validação do envio, então mudar aqui vale
// para os dois lados.

export const RELACOES = [
  "Colaborador",
  "Prestador de serviços",
  "Fornecedor",
  "Outros",
] as const;

export const TIPOS_RELATO = [
  "Agressão física",
  "Assédio moral ou discriminação",
  "Assédio sexual",
  "Destruição ou danos aos bens da empresa",
  "Não cumprimento das políticas ou normas da empresa",
  "Roubo ou furto de equipamentos ou bens da empresa",
  "Outros previstos no código de conduta ou regulamentos da empresa",
] as const;

export const LOCAIS = [
  "Escritório / Matriz",
  "Residencial Ágave",
  "Bëos + Mon'Verdant",
  "Upper Nest",
  "Outro canteiro de obra",
  "Outro local ou evento promovido pela empresa",
] as const;

export const GRAUS_CERTEZA = [
  "Certeza",
  "Suspeita",
  "Ouvi dizer / boato",
] as const;

export const SIM_NAO = ["Sim", "Não"] as const;

/** Limites dos anexos (fotos, documentos, áudios). */
export const ANEXOS = {
  maxArquivos: 5,
  maxBytesTotal: 10 * 1024 * 1024,
  aceitos: "image/*,.pdf,.doc,.docx,.txt,audio/*",
};

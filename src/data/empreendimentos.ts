// Dados dos empreendimentos.
//
// Fonte única usada pela página inicial, pela vitrine /empreendimentos e pela
// landing page individual de cada projeto (/empreendimentos/[slug]).
//
// Para trocar texto, foto ou status de um empreendimento, edite aqui.

export type Empreendimento = {
  slug: string;
  nome: string;
  tipo: string;
  status: "Pré-lançamento" | "Lançamento" | "Em obras" | "Entregue";
  caixa: boolean;
  featured?: boolean;
  imagem: string;
  galeria: { src: string; alt: string }[];
  descricao: string;
  destaques: string[];
};

export const empreendimentos: Empreendimento[] = [
  {
    slug: "beos-grand-central",
    nome: "Bëos Grand Central",
    tipo: "Residencial de alto padrão",
    status: "Em obras",
    caixa: true,
    featured: true,
    imagem: "/images/beos/fachada-01.png",
    galeria: [
      { src: "/images/beos/fachada-02.png", alt: "Entrada Bëos" },
      { src: "/images/interiores/beos-sala.png", alt: "Sala Studio" },
      { src: "/images/interiores/beos-cozinha.png", alt: "Cozinha Studio" },
    ],
    descricao:
      "O mais ambicioso projeto da Conbrain. Fachada contemporânea com design orgânico, acabamentos premium e conceito Smart Living integrado. Apartamentos de 1 e 2 dormitórios pensados para quem valoriza sofisticação e praticidade.",
    destaques: ["Smart Living", "Fachada autoral", "Rooftop", "1 e 2 dormitórios"],
  },
  {
    slug: "upper-nest",
    nome: "Upper Nest",
    tipo: "Residencial",
    status: "Lançamento",
    caixa: true,
    imagem: "/images/upper-nest/fachada-01.png",
    galeria: [
      { src: "/images/interiores/upper-nest-sala.png", alt: "Sala Upper Nest" },
    ],
    descricao:
      "Viver acima do comum. Fachada com linhas orgânicas e curvas que marcam a paisagem de Porto União. Apartamentos de 55m² e 75m² com acabamentos de alto padrão e vista privilegiada.",
    destaques: ["Fachada icônica", "Vista panorâmica", "55m² e 75m²", "Acabamento premium"],
  },
  {
    slug: "monverdant",
    nome: "Mon'Verdant",
    tipo: "Residencial",
    status: "Em obras",
    caixa: true,
    imagem: "/images/monverdant/fachada-01.png",
    galeria: [],
    descricao:
      "A natureza como vizinha. Empreendimento que integra verde e arquitetura em harmonia, com jardim vertical na fachada e áreas de lazer que privilegiam o contato com a natureza.",
    destaques: ["Jardim vertical", "Integração com natureza", "Lazer completo"],
  },
  {
    slug: "residencial-taiji",
    nome: "Residencial Taiji",
    tipo: "Residencial",
    status: "Entregue",
    caixa: false,
    imagem: "/images/taiji/fachada-01.png",
    galeria: [],
    descricao:
      "O empreendimento que inaugurou a trajetória da Conbrain. Equilíbrio entre funcionalidade e design, entregue com excelência e dentro do prazo. Todas as unidades comercializadas.",
    destaques: ["100% vendido", "Entregue no prazo", "Primeiro empreendimento"],
  },
  {
    slug: "residencial-agave",
    nome: "Residencial Ágave",
    tipo: "Residencial",
    status: "Entregue",
    caixa: false,
    imagem: "/images/agave/fachada-01.png",
    galeria: [],
    descricao:
      "Resistência e elegância inspiradas na natureza. Projeto consolidado no portfólio Conbrain, com todas as unidades entregues e moradores satisfeitos.",
    destaques: ["100% vendido", "Entregue no prazo", "Portfólio consolidado"],
  },
  {
    slug: "mastro",
    nome: "Mastro",
    tipo: "Residencial",
    status: "Em obras",
    caixa: true,
    imagem: "/images/mastro/obra-drone.jpg",
    galeria: [],
    descricao:
      "Empreendimento que traz um conceito náutico sofisticado para Porto União. Com obra em andamento e financiamento pela Caixa, o Mastro combina design diferenciado com acessibilidade.",
    destaques: ["Conceito náutico", "Em construção", "Financiamento Caixa"],
  },
  {
    slug: "pier-225",
    nome: "Pier 225",
    tipo: "Residencial",
    status: "Pré-lançamento",
    caixa: false,
    imagem: "/images/pier225/logo.png",
    galeria: [],
    descricao:
      "O mais novo projeto da Conbrain está chegando. Pier 225 traz uma proposta única com paleta que combina verde musgo, grafite e cobre — sofisticação e natureza em equilíbrio. Em breve, mais detalhes.",
    destaques: ["Em breve", "Novo conceito", "Pré-lançamento"],
  },
];

export function getEmpreendimento(slug: string) {
  return empreendimentos.find((e) => e.slug === slug);
}

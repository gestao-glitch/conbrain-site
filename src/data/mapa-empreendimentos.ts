// Pinos do mapa interativo da página inicial.
//
// Para mudar a posição de um pino, troque `lat` e `lng`. O jeito mais fácil de
// achar os números: no Google Maps, clique com o botão direito em cima do
// terreno e clique na primeira linha (os dois números são copiados).
//
// Posições tiradas do Google Maps a partir do endereço de cada empreendimento.
// O Bëos e o Mon'Verdant têm o mesmo endereço (Av. Getúlio Vargas, 418): o
// pino do Mon'Verdant está ~30 m ao lado para os dois poderem ser clicados.
//
// Mastro e Pier 225 ficam fora do mapa até o endereço ser divulgado. Não
// coloque aqui a posição de um empreendimento antes do lançamento: tudo o que
// está neste arquivo fica visível para quem abre o site.

export type PinoEmpreendimento = {
  slug: string;
  nome: string;
  fase: string;
  status: string;
  local: string;
  cor: string;
  /** Cor do pino quando a cor da marca é escura demais para o mapa escuro. */
  corPino?: string;
  foto: string;
  emBreve?: boolean;
  lat: number;
  lng: number;
  aproximado?: boolean;
};

export const PINOS_EMPREENDIMENTOS: PinoEmpreendimento[] = [
  {
    slug: "residencial-taiji",
    nome: "Residencial Taiji",
    fase: "Entregue",
    status: "Esgotado",
    local: "Centro · Porto União",
    cor: "#a8700f",
    foto: "/images/taiji/hero-vista-aerea.jpg",
    lat: -26.2294181,
    lng: -51.0828943,
  },
  {
    slug: "residencial-agave",
    nome: "Residencial Ágave",
    fase: "Entregue",
    status: "Esgotado",
    local: "Cidade Nova · Porto União",
    cor: "#7a6242",
    foto: "/images/agave/hero-fachada-noturna.jpg",
    lat: -26.2397411,
    lng: -51.0797938,
  },
  {
    slug: "beos-grand-central",
    nome: "Bëos Grand Central",
    fase: "Em obras",
    status: "Últimas unidades",
    local: "Cidade Nova · Porto União",
    cor: "#2a2b28",
    corPino: "#7a9956",
    foto: "/images/beos/fachada-noturna.jpg",
    lat: -26.2369949,
    lng: -51.0860775,
  },
  {
    slug: "monverdant",
    nome: "Mon'Verdant",
    fase: "Em obras",
    status: "Últimas unidades",
    local: "Cidade Nova · Porto União",
    cor: "#4a5a3a",
    foto: "/images/monverdant/fachada-02.webp",
    lat: -26.2369949,
    lng: -51.0857775,
  },
  {
    slug: "upper-nest",
    nome: "Upper Nest",
    fase: "Em obras",
    status: "Financiável",
    local: "São Pedro · Porto União",
    cor: "#ae5d32",
    foto: "/images/upper-nest/fachada-01.png",
    lat: -26.244618,
    lng: -51.085294,
  },
];

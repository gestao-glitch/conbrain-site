import type { Metadata } from "next";
import { contato } from "@/content";
import { PIXEL_ID } from "@/lib/medicao-ids";

export const metadata: Metadata = {
  alternates: { canonical: "/politica-de-privacidade" },
  title: "Política de Privacidade | Conbrain",
  description:
    "Como a Conbrain trata os dados pessoais enviados pelo site, conforme a Lei Geral de Proteção de Dados (LGPD).",
};

const ATUALIZACAO = "outubro de 2026";

const SECOES: { id?: string; titulo: string; texto: string[] }[] = [
  {
    titulo: "1. Quem somos",
    texto: [
      `Este site pertence à Incorporadora Conbrain LTDA, CNPJ 36.325.713/0001-72, com sede na ${contato.endereco_linha1}, ${contato.endereco_linha2}. A Conbrain é a controladora dos dados pessoais tratados por meio deste site, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD).`,
    ],
  },
  {
    titulo: "2. Quais dados coletamos",
    texto: [
      "Coletamos apenas os dados que você informa voluntariamente nos formulários do site: nome, telefone ou WhatsApp, e-mail, o empreendimento ou assunto de interesse e a mensagem que você escrever.",
      "Não pedimos documentos, dados bancários ou senhas pelo site.",
    ],
  },
  {
    titulo: "3. Como os dados são enviados",
    texto: [
      "Ao enviar um formulário, os dados preenchidos são encaminhados por e-mail à nossa equipe comercial, para que possamos responder mesmo que a conversa não continue pelo WhatsApp. Junto com eles, registramos a página do site em que o formulário foi enviado e, quando houver, a campanha ou o site pelo qual você chegou até nós, para entendermos quais canais funcionam melhor.",
      "Em seguida, o site abre o WhatsApp com uma mensagem pronta contendo os mesmos dados. O uso do WhatsApp está sujeito também à política de privacidade da Meta, empresa responsável pelo aplicativo.",
    ],
  },
  {
    titulo: "4. Para que usamos os seus dados",
    texto: [
      "Usamos os seus dados para responder ao seu contato, enviar informações sobre os empreendimentos que você pediu, agendar visitas, apresentar condições comerciais e avisar sobre lançamentos, quando você se cadastra para isso.",
      "O tratamento é feito com base no seu consentimento (art. 7º, I, da LGPD) e, quando houver negociação em andamento, para procedimentos preliminares relacionados a contrato (art. 7º, V).",
    ],
  },
  {
    titulo: "5. Com quem compartilhamos",
    texto: [
      "Não vendemos nem alugamos os seus dados. Eles podem ser acessados pela nossa equipe comercial e por parceiros que atuam na venda dos nossos empreendimentos, como corretores e imobiliárias credenciadas, sempre para atender ao seu pedido. Também podem ser compartilhados quando houver obrigação legal ou ordem de autoridade competente.",
    ],
  },
  {
    id: "cookies",
    titulo: "6. Cookies e medição de audiência",
    texto: [
      PIXEL_ID
        ? "Com a sua autorização, usamos o Google Analytics (Google) e o Meta Pixel (Meta, empresa do Facebook e do Instagram) para entender como o site é usado: quantas pessoas visitam, quais páginas acessam, de onde vieram e quantas entram em contato pelos formulários ou pelo WhatsApp. O Meta Pixel também nos ajuda a medir e direcionar os nossos anúncios no Facebook e no Instagram."
        : "Com a sua autorização, usamos o Google Analytics (Google) para entender como o site é usado: quantas pessoas visitam, quais páginas acessam, de onde vieram e quantas entram em contato pelos formulários ou pelo WhatsApp.",
      "Essas ferramentas usam cookies e identificadores do seu navegador e não recebem o seu nome, telefone ou e-mail. Elas só são ativadas se você clicar em “Aceitar” no aviso de cookies. Se recusar, o site funciona normalmente, sem nenhuma medição. Você pode mudar a sua escolha a qualquer momento pelo link “Preferências de cookies”, no rodapé de todas as páginas.",
      "O Canal de Denúncias não tem nenhuma medição, para preservar o anonimato de quem o utiliza.",
      "Algumas páginas também exibem conteúdos de terceiros, como mapas do Google e o tour virtual de empreendimentos, que podem usar cookies próprios conforme as políticas dessas empresas.",
    ],
  },
  {
    titulo: "7. Por quanto tempo guardamos",
    texto: [
      "Guardamos os seus dados enquanto houver relacionamento comercial ou interesse em receber nossas comunicações. Se você pedir a exclusão, os dados são apagados, exceto quando a lei exigir que sejam mantidos.",
    ],
  },
  {
    titulo: "8. Seus direitos",
    texto: [
      "Você pode, a qualquer momento, pedir para confirmar se tratamos os seus dados, acessá-los, corrigi-los, pedir a exclusão, revogar o consentimento ou deixar de receber nossas mensagens, conforme o art. 18 da LGPD. Basta responder a qualquer mensagem nossa pedindo isso ou falar com a gente pelos canais abaixo.",
    ],
  },
  {
    titulo: "9. Segurança",
    texto: [
      "Adotamos medidas técnicas e administrativas para proteger os seus dados contra acesso não autorizado, perda ou uso indevido, e limitamos o acesso às pessoas que precisam deles para atender você.",
    ],
  },
  {
    titulo: "10. Fale com a gente",
    texto: [
      `Para dúvidas sobre esta política ou sobre os seus dados, escreva para comercial@conbrain.com.br ou chame no WhatsApp ${contato.telefone}.`,
    ],
  },
];

export default function PoliticaDePrivacidade() {
  return (
    <>
      <section className="bg-[#1f1d22] px-6 pt-36 pb-16 text-white sm:px-10 lg:px-[120px] lg:pt-44 lg:pb-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          <p className="text-xs tracking-[0.3em] text-white/70 uppercase">
            LGPD
          </p>
          <h1 className="font-heading text-[34px] leading-[1.12] font-normal sm:text-[48px]">
            Política de Privacidade
            <span className="text-[#a3c859]">.</span>
          </h1>
          <p className="text-base leading-relaxed text-white/75">
            Como a Conbrain cuida dos dados que você envia pelo site.
            Atualizada em {ATUALIZACAO}.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-6 py-16 sm:px-10 lg:px-[120px] lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {SECOES.map((secao) => (
            <div key={secao.titulo} id={secao.id} className="flex scroll-mt-28 flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1f1d22]">
                {secao.titulo}
              </h2>
              {secao.texto.map((p) => (
                <p key={p} className="text-base leading-relaxed text-[#55525a]">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

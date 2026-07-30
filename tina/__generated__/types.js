export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HomePartsFragmentDoc = gql`
    fragment HomeParts on Home {
  __typename
  hero_titulo
  hero_subtitulo
  diferenciais_titulo
  cta_titulo
  cta_descricao
}
    `;
export const EmpreendimentosPartsFragmentDoc = gql`
    fragment EmpreendimentosParts on Empreendimentos {
  __typename
  nome
  tipo
  status
  caixa
  imagem
  descricao
  destaques
}
    `;
export const SobrePartsFragmentDoc = gql`
    fragment SobreParts on Sobre {
  __typename
  historia_titulo
  historia_texto1
  historia_texto2
  fundador_bio1
  fundador_bio2
  fundador_quote
}
    `;
export const ContatoPartsFragmentDoc = gql`
    fragment ContatoParts on Contato {
  __typename
  endereco
  telefone
  horario
  whatsapp
}
    `;
export const HomeDocument = gql`
    query home($relativePath: String!) {
  home(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeParts
  }
}
    ${HomePartsFragmentDoc}`;
export const HomeConnectionDocument = gql`
    query homeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFilter) {
  homeConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeParts
      }
    }
  }
}
    ${HomePartsFragmentDoc}`;
export const EmpreendimentosDocument = gql`
    query empreendimentos($relativePath: String!) {
  empreendimentos(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...EmpreendimentosParts
  }
}
    ${EmpreendimentosPartsFragmentDoc}`;
export const EmpreendimentosConnectionDocument = gql`
    query empreendimentosConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: EmpreendimentosFilter) {
  empreendimentosConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...EmpreendimentosParts
      }
    }
  }
}
    ${EmpreendimentosPartsFragmentDoc}`;
export const SobreDocument = gql`
    query sobre($relativePath: String!) {
  sobre(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SobreParts
  }
}
    ${SobrePartsFragmentDoc}`;
export const SobreConnectionDocument = gql`
    query sobreConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SobreFilter) {
  sobreConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SobreParts
      }
    }
  }
}
    ${SobrePartsFragmentDoc}`;
export const ContatoDocument = gql`
    query contato($relativePath: String!) {
  contato(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContatoParts
  }
}
    ${ContatoPartsFragmentDoc}`;
export const ContatoConnectionDocument = gql`
    query contatoConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContatoFilter) {
  contatoConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContatoParts
      }
    }
  }
}
    ${ContatoPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    home(variables, options) {
      return requester(HomeDocument, variables, options);
    },
    homeConnection(variables, options) {
      return requester(HomeConnectionDocument, variables, options);
    },
    empreendimentos(variables, options) {
      return requester(EmpreendimentosDocument, variables, options);
    },
    empreendimentosConnection(variables, options) {
      return requester(EmpreendimentosConnectionDocument, variables, options);
    },
    sobre(variables, options) {
      return requester(SobreDocument, variables, options);
    },
    sobreConnection(variables, options) {
      return requester(SobreConnectionDocument, variables, options);
    },
    contato(variables, options) {
      return requester(ContatoDocument, variables, options);
    },
    contatoConnection(variables, options) {
      return requester(ContatoConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/8021c82b-0f31-4e71-a55f-26d5c67ec44b/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

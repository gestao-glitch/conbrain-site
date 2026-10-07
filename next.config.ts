import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // Endereços do site antigo (Wix) que já estão no Google ou em links por aí.
  async redirects() {
    return [
      { source: "/taiji", destination: "/empreendimentos/residencial-taiji", permanent: true },
      { source: "/agave", destination: "/empreendimentos/residencial-agave", permanent: true },
      { source: "/beosgc", destination: "/empreendimentos/beos-grand-central", permanent: true },
      { source: "/monverdant", destination: "/empreendimentos/monverdant", permanent: true },
      { source: "/uppernest", destination: "/empreendimentos/upper-nest", permanent: true },
      { source: "/canaldedenuncias", destination: "/canal-de-denuncias", permanent: true },
      { source: "/formulario", destination: "/canal-de-denuncias#relato", permanent: true },
    ];
  },
};

export default nextConfig;

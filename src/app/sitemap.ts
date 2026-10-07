import type { MetadataRoute } from "next";
import { MENU_EMPREENDIMENTOS } from "@/data/menu-empreendimentos";

const BASE = "https://conbrain.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, priority: 1 },
    { url: `${BASE}/sobre`, priority: 0.7 },
    { url: `${BASE}/contato`, priority: 0.7 },
    ...MENU_EMPREENDIMENTOS.map((emp) => ({
      url: `${BASE}/empreendimentos/${emp.slug}`,
      priority: 0.9,
    })),
    { url: `${BASE}/politica-de-privacidade`, priority: 0.2 },
    { url: `${BASE}/canal-de-denuncias`, priority: 0.3 },
  ];
}

"use client";

import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker } from "leaflet";
import {
  PINOS_EMPREENDIMENTOS,
  type PinoEmpreendimento,
} from "@/data/mapa-empreendimentos";

function fotoOtimizada(src: string) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=640&q=75`;
}

function htmlPino(p: PinoEmpreendimento, ativo: boolean) {
  const tamanho = ativo ? 22 : 16;
  return `<span class="cb-pino${ativo ? " cb-pino-ativo" : ""}" style="--cor:${p.corPino ?? p.cor};width:${tamanho}px;height:${tamanho}px"></span>`;
}

function htmlPopup(p: PinoEmpreendimento) {
  return `
    <a class="cb-popup" href="/empreendimentos/${p.slug}">
      <span class="cb-popup-foto">
        <img src="${fotoOtimizada(p.foto)}" alt="${p.emBreve ? `Prévia desfocada do ${p.nome}` : `Fachada do ${p.nome}`}" class="${p.emBreve ? "cb-popup-blur" : ""}" />
        <span class="cb-popup-selo">${p.status}</span>
      </span>
      <span class="cb-popup-corpo">
        <span class="cb-popup-fase" style="color:${p.corPino ?? p.cor}">${p.fase}</span>
        <span class="cb-popup-nome">${p.nome}</span>
        <span class="cb-popup-local">${p.local}</span>
        <span class="cb-popup-link">${p.emBreve ? "Quero ser avisado" : "Conhecer o empreendimento"} &rarr;</span>
      </span>
    </a>`;
}

export function ProjectMap() {
  const elemento = useRef<HTMLDivElement>(null);
  const mapa = useRef<LeafletMap | null>(null);
  const marcadores = useRef<Record<string, Marker>>({});
  const [ativo, setAtivo] = useState<string | null>(null);

  useEffect(() => {
    let cancelado = false;
    import("leaflet").then((L) => {
      if (cancelado || !elemento.current || mapa.current) return;
      const toque = window.matchMedia("(pointer: coarse)").matches;
      const m = L.map(elemento.current, {
        scrollWheelZoom: false,
        dragging: !toque,
        zoomControl: false,
        attributionControl: true,
      });
      m.attributionControl.setPrefix(false);
      L.control.zoom({ position: "bottomright" }).addTo(m);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        className: "cb-mapa-tiles",
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(m);

      PINOS_EMPREENDIMENTOS.forEach((p) => {
        const marcador = L.marker([p.lat, p.lng], {
          title: p.nome,
          icon: L.divIcon({
            className: "",
            html: htmlPino(p, false),
            iconSize: [16, 16],
            iconAnchor: [8, 8],
          }),
        })
          .addTo(m)
          .bindPopup(htmlPopup(p), {
            className: "cb-popup-casca",
            closeButton: false,
            offset: [0, -6],
            maxWidth: 260,
            minWidth: 260,
          });
        marcador.on("popupopen", () => setAtivo(p.slug));
        marcador.on("popupclose", () =>
          setAtivo((atual) => (atual === p.slug ? null : atual))
        );
        marcadores.current[p.slug] = marcador;
      });

      m.fitBounds(
        L.latLngBounds(PINOS_EMPREENDIMENTOS.map((p) => [p.lat, p.lng])),
        { padding: [60, 60] }
      );
      mapa.current = m;
    });
    return () => {
      cancelado = true;
      mapa.current?.remove();
      mapa.current = null;
      marcadores.current = {};
    };
  }, []);

  // destaca o pino ativo
  useEffect(() => {
    import("leaflet").then((L) => {
      PINOS_EMPREENDIMENTOS.forEach((p) => {
        const marcador = marcadores.current[p.slug];
        if (!marcador) return;
        const ligado = p.slug === ativo;
        const tamanho = ligado ? 22 : 16;
        marcador.setIcon(
          L.divIcon({
            className: "",
            html: htmlPino(p, ligado),
            iconSize: [tamanho, tamanho],
            iconAnchor: [tamanho / 2, tamanho / 2],
          })
        );
        marcador.setZIndexOffset(ligado ? 1000 : 0);
      });
    });
  }, [ativo]);

  function abrir(slug: string) {
    const marcador = marcadores.current[slug];
    if (!marcador || !mapa.current) return;
    mapa.current.closePopup();
    mapa.current.once("moveend", () => marcador.openPopup());
    mapa.current.flyTo(marcador.getLatLng(), 16, { duration: 0.8 });
  }

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      <ul
        className="no-scrollbar -mx-6 flex gap-3 overflow-x-auto px-6 sm:mx-0 sm:px-0 lg:w-[340px] lg:shrink-0 lg:flex-col lg:gap-2 lg:overflow-visible"
        aria-label="Empreendimentos no mapa"
      >
        {PINOS_EMPREENDIMENTOS.map((p) => {
          const ligado = ativo === p.slug;
          return (
            <li key={p.slug} className="shrink-0">
              <button
                type="button"
                onClick={() => abrir(p.slug)}
                onMouseEnter={() => setAtivo(p.slug)}
                aria-pressed={ligado}
                className={`flex w-full cursor-pointer items-center gap-4 rounded-md border px-4 py-3.5 text-left transition-colors ${
                  ligado
                    ? "border-white/40 bg-white/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <span
                  className="h-3 w-3 shrink-0 rounded-full ring-2 ring-white/80"
                  style={{ background: p.corPino ?? p.cor }}
                  aria-hidden="true"
                />
                <span className="flex flex-col whitespace-nowrap">
                  <span className="text-[15px] font-bold text-white">
                    {p.nome}
                  </span>
                  <span className="text-xs text-white/60">
                    {p.fase} · {p.local}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
        <li className="flex w-[200px] shrink-0 items-center px-1 text-xs leading-relaxed text-white/50 lg:w-auto lg:pt-2">
          Mastro e Pier 225: localização revelada no lançamento.
        </li>
        <li className="hidden pt-1 lg:block">
          <Link
            href="/contato#visita"
            className="text-sm font-bold text-[#a3c859] hover:text-white"
          >
            Agendar uma visita &rarr;
          </Link>
        </li>
      </ul>
      <div className="relative isolate h-[420px] overflow-hidden rounded-md bg-[#2b2a2e] sm:h-[520px] lg:h-auto lg:min-h-[600px] lg:flex-1">
        <div ref={elemento} className="absolute inset-0" />
      </div>
    </div>
  );
}

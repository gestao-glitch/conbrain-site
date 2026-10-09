"use client";

import { useEffect } from "react";
import { anotarOrigem } from "@/lib/registrar-contato";

/** Anota por onde a pessoa chegou ao site, para acompanhar junto com os contatos. */
export function AnotarOrigem() {
  useEffect(() => {
    anotarOrigem();
  }, []);
  return null;
}

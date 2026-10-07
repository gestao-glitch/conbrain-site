// Elemento decorativo com o losango da marca Conbrain (o mesmo desenho do
// símbolo da logo), usado como acabamento sutil em cantos de seção — como no
// material institucional impresso da empresa.

export function DiamondAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="60"
        y="60"
        width="180"
        height="180"
        rx="24"
        transform="rotate(45 150 150)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="100"
        y="100"
        width="100"
        height="100"
        rx="16"
        transform="rotate(45 150 150)"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

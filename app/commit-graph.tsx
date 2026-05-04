import type { CSSProperties } from "react";

const COLS = 30;
const ROWS = 7;
const TOTAL_MS = 6400;
const EASE_POWER = 1.8;

const LEVEL_COLORS = [
  "color-mix(in srgb, var(--color-green) 22%, white)",
  "color-mix(in srgb, var(--color-green) 50%, white)",
  "color-mix(in srgb, var(--color-green) 78%, white)",
  "var(--color-green)",
];

function hash(i: number): number {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function getLevel(col: number, row: number): number {
  const t = col / (COLS - 1);
  const noise = hash(col * 31 + row * 7 + 1);
  const intensity = t * 1.2 + noise * 0.4 - 0.3;
  return Math.max(0, Math.min(4, Math.round(intensity * 4)));
}

export function CommitGraph() {
  const cells = [];
  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS; row++) {
      const level = getLevel(col, row);
      const baseStyle: CSSProperties = {
        gridColumn: col + 1,
        gridRow: row + 1,
      };
      if (level === 0) {
        cells.push(
          <div
            key={`${col}-${row}`}
            className="commit-cell"
            style={baseStyle}
            aria-hidden="true"
          />,
        );
      } else {
        const i = col * ROWS + row;
        const p = i / (COLS * ROWS - 1);
        const delay = Math.round(TOTAL_MS * (1 - Math.pow(1 - p, EASE_POWER)));
        const filledStyle = {
          ...baseStyle,
          ["--cell-color"]: LEVEL_COLORS[level - 1],
          animationDelay: `${delay}ms`,
        } as CSSProperties;
        cells.push(
          <div
            key={`${col}-${row}`}
            className="commit-cell commit-cell-filled"
            style={filledStyle}
            aria-hidden="true"
          />,
        );
      }
    }
  }

  return (
    <div className="w-full" aria-hidden="true">
      <div className="commit-graph">{cells}</div>
      <div className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
        Accelerate your output
      </div>
    </div>
  );
}

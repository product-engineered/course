<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:package-manager-rules -->
# Package Manager

Use `pnpm` for this project. Do not use `npm`, `npx`, `yarn`, or `bun` for dependency installation or scripts unless the user explicitly asks.

- Install dependencies with `pnpm install`.
- Start local development with `pnpm dev`.
- Run lint checks with `pnpm lint`.
- Create a production build with `pnpm build`.
- Start the production server with `pnpm start`.
<!-- END:package-manager-rules -->

<!-- BEGIN:landing-page-brand-guidelines -->
# Brand Guidelines: High-Contrast Terminal

Use these guidelines when building the landing page, especially above-the-fold sections.

## 1. Typography

Use a "Pro-Tool" type pairing to balance clean UI with technical precision.

- Primary Sans (UI & Headings): Inter
- Heading styling: Tighten letter spacing to `-0.02em` for a premium, "Refactoring UI" feel.
- Mono (Code & Data): JetBrains Mono
- Mono usage: Use for code blocks, commit hashes, data metrics, and labels on the commit graph.

## 2. Color Palette

Avoid washed-out teals. Use high-saturation greens against a near-black base for maximum punch.

| Role | Hex Code | Tailwind Equivalent |
| --- | --- | --- |
| Background (Main) | `#0A0A0A` | Zinc 950 (Modified) |
| Surface (Cards/UI) | `#171717` | Neutral 900 |
| Border (Subtle) | `#262626` | Neutral 800 |
| Primary Accent | `#22C55E` | Green 500 |
| Accent Glow/Hover | `#4ADE80` | Green 400 |
| Text (Primary) | `#FAFAFA` | Neutral 50 |
| Text (Secondary) | `#A3A3A3` | Neutral 400 |

## 3. Commit Graph Specification

Keep graph visuals modern with consistent luminosity and rounded geometry.

- Geometry: `12px` by `12px` squares with a `2px` or `3px` border radius.
- Grid gap: `3px` or `4px`.
- L0 (Empty): `#1F2937` (Dark Blue-Grey)
- L1 (Low): `#166534` (Deep Forest)
- L2 (Mid): `#15803D` (Rich Green)
- L3 (High): `#22C55E` (Brand Primary)
- L4 (Peak): `#4ADE80` (Electric Lime). Use sparingly for "Aha!" moments.

## 4. General Styling & UI Patterns

Maintain an engineering-grade feel with these rules.

- Borders over shadows: In dark mode, shadows often look muddy. Use a `1px solid #262626` border to define containers.
- The AI glow: For AI-specific features, including the course's core value prop, apply a subtle `10px` outer glow using `#22C55E` at 20% opacity.
- High-contrast emphasis: Active elements should receive a `2px` top border or `2px` left accent border in `#22C55E`.
- De-emphasized labels: Do not label data that is obvious by placement. Use icons or primary green to communicate success or active states without redundant text.
- Terminal aesthetic: Code or log surfaces should use `#000000`, slightly darker than the main surface, to feel like embedded terminals.
<!-- END:landing-page-brand-guidelines -->

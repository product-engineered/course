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
# Brand Guidelines

## Typography
- Primary Font: Inter
- Monospace: JetBrains Mono (monospace)

## Vibe
- Industrial modern
- Inspiration: Braun, Vitsoe, Lockheed Martin, AT&T, 70s and 80s Apple, McMaster-Carr
- Timeless
- Simple, clear and easy to use
- Prefer grid layouts
- Text based
- Minimal: Content is only included when it serves a clear purpose

## Colors
| Group | Name | Hex |
|---|---|---|
| Foundation | Paper | `#F4F1E8` |
| Foundation | Ink | `#1A1814` |
| Neutrals | Gray 50 | `#ECE8DE` |
| Neutrals | Gray 100 | `#DDD8CC` |
| Neutrals | Gray 200 | `#C5BFB1` |
| Neutrals | Gray 300 | `#A8A294` |
| Neutrals | Gray 400 | `#8B8579` |
| Neutrals | Gray 500 | `#6E695E` |
| Neutrals | Gray 600 | `#524E45` |
| Neutrals | Gray 700 | `#3A3730` |
| Neutrals | Gray 800 | `#2A2722` |
| Neutrals | Gray 900 | `#1A1814` |
| Signal | Red | `#B83A2E` |
| Signal | Orange | `#C45A1E` |
| Signal | Yellow | `#D4A41C` |
| Signal | Green | `#2E6B3F` |
| Signal | Cyan | `#1A8BA8` |
| Signal | Blue | `#1E3F8C` |
| Signal | Violet | `#5A3D8C` |
| Signal | Magenta | `#B22F75` |
| Earth | Brick | `#8C3A30` |
| Earth | Rust | `#964A20` |
| Earth | Ochre | `#A88424` |
| Earth | Olive | `#6B6E2E` |
| Earth | Teal | `#2F6B6F` |
| Earth | Indigo | `#2D4885` |
| Earth | Plum | `#5C3A6E` |
| Earth | Wine | `#8A2F58` |
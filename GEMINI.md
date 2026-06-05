# Nada Upacara Bali - Project Instructions & Guidelines

This document provides architectural, styling, and structural guidelines for the **Nada Upacara Bali** project. Follow these conventions for all new features and modifications.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (`src/components/ui/`)
- **Icons:** Lucide React (`lucide-react`)
- **Animations:** tw-animate-css

## Project Structure

- `src/app/`: Contains all Next.js routes, layouts, and page-specific components.
- `src/components/`: Shared React components.
  - `src/components/ui/`: Reusable primitive components (shadcn/ui).
  - `src/components/layouts/`: Global layout components (e.g., `menubar/`).
- `src/lib/`: Utility functions (e.g., `utils.ts` for the `cn` function using `clsx` and `tailwind-merge`).
- `public/`: Static assets like images and logos (`images/`, `logo/`).

## Styling & Theming Guidelines

- **Utility-First:** Use Tailwind CSS utility classes extensively.
- **Class Merging:** Use the `cn` utility from `@/lib/utils` for conditional classes to ensure proper merging of Tailwind classes.
- **Color Palette:** The app utilizes a dark/neutral base with warm, elegant accents.
  - Backgrounds: `bg-neutral-950`, `bg-neutral-900`
  - Text: `text-neutral-50`, `text-neutral-200`, `text-neutral-300`
  - Accents: Amber/Orange tones such as `#f09a73`, `#d58058`, `#b27457` (used for highlights, underlines, and selection backgrounds).
- **Typography:** The app relies on several Google Fonts configured in `layout.tsx`. Use the appropriate utility classes for these fonts:
  - `--font-inter`: Standard sans-serif (`font-sans`)
  - `--font-baskerville`: Elegant serif, often used in italics (`font-libre-baskerville`)
  - `--font-outfit-font`: Clean sans-serif used for navigation and buttons (`font-outfit`)
  - `--font-cormorant`: Classic serif used for elegant headings and body text (`font-cormorant-garamond`)
- **Aesthetics:** The visual identity should reflect "Tradisi Bertemu Elegansi". Use generous spacing, subtle transitions (`transition-all duration-300`), backdrop blurs, and uppercase tracking for a premium feel.

## Component Conventions

- **Client Components:** Add `"use client";` at the very top of components that use React hooks (`useState`, `useEffect`) or handle browser events (e.g., scroll listeners, interactive UI).
- **Server Components:** Default to Server Components for pages and layouts that do not require interactivity to optimize performance.
- **File Naming:** Use PascalCase for component files (e.g., `MenuBar.tsx`, `Desktop.tsx`).
- **Images:** Always use `next/image` (`<Image />`) for optimized rendering of local and remote images.

## Git & Version Control

- Never stage or commit changes unless explicitly instructed.
- When creating commits, provide clear and concise messages focusing on the "why" and "what".

# Project Context: Nada Upacara Bali

## Reference Data for About Page:

### Salam dari Pendiri

Salam dari Pendiri
I Made Mahotama Warmasuta
Selamat datang di Nada Upacara Bali.
Kami adalah perusahaan penyedia pertunjukan seni tradisional Bali mulai dari
Rindik, Gender Wayang, Semar Pegulingan, Selonding, Angklung Bali, hingga
pertunjukan Wayang, Joged Bumbung, dan berbagai tari tradisional lainnya.
Visi kami sederhana: menjaga seni Bali tetap
hidup dengan rasa yang sakral, penuh rasa, dan
profesional.
Saya percaya seni Bali pantas dihormati, tidak hanya lewat karya, tapi juga lewat
sikap. Kami berkomitmen menjaga standar berpakaian rapi, hadir tepat waktu,
tampil dengan penuh tanggung jawab. Nada Upacara Bali hadir untuk
menjembatani tradisi dengan kebutuhan masa kini. Untuk upacara adat,
pernikahan, acara perusahaan, hingga pertunjukan berskala internasional kami
siap menghadirkan seni pertunjukan terbaik.

### Tentang Kami & Keunikan

Tentang Kami
Nada Upacara Bali adalah kelompok seni pertunjukan yang lahir dari keinginan sederhana:
menghadirkan seni tradisional Bali dengan standar profesional. Berawal dari komunitas kecil pecinta musik tradisional, kami berkembang menjadi
penyedia pertunjukan seni yang dipercaya di berbagai upacara adat, pernikahan, dan event modern. Kami percaya bahwa seni tidak hanya untuk
dilestarikan, tapi juga dihormati. Filosofi kami sederhana setiap nada dan gerak harus membawa makna, disajikan dengan keindahan, kesakralan, dan
disiplin profesional.
Keunikan Kami
∙ Pionir seni tradisi yang profesional memadukan nilai budaya dengan etika kerja modern.
∙ Standar layanan premium, mulai dari kerapian penampilan hingga ketepatan waktu.
∙ Fokus pelestarian budaya, dengan gaya sajian yang tetap relevan di acara masa kini.

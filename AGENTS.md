# Full Car Alchemist

## Overview

- The goal of this project is to create a web app for managing an auto repair shop, designed with a "mobile-first" approach.
- The shop employs several mechanics who will use the app exclusively on their mobile phones.
- A major pain point for the shop is that customers frequently call to check on the status of their vehicles and often take days to approve additional repairs over the phone, which brings work to a standstill.
- Inventory management is NOT required (this is handled externally in Excel).

## Tech Stack

- **Framework/Tech Stack:** Next.js (App Router, React 19) with TypeScript on the frontend.
- **Backend/Database:** Supabase (PostgreSQL, Auth, Storage, Edge Functions).
- **Environment:** Node 20+ / Bun.
- **Deployment:** Vercel.
- **How to run locally:** `npm run dev` (or `bun dev`).
- **How to run tests:** `npm test` (Jest / Vitest).

## Code Style

- **Naming:** camelCase for variables/functions, PascalCase for React components and classes.
- **Architecture:** Modular structure based on atomic components. Prefer Server Components (RSC) by default; use `'use client'` only when strictly necessary (interactivity, React hooks).
- **Optimization:** Prioritize clean, modular components styled with Tailwind CSS and shadcn/ui.
- **Comments:** DO NOT write obvious comments. Auto-document code through strict TypeScript typing.
- **Formatting:** Prettier and ESLint configured in the project.
- **Asynchrony:** Use native async/await for calls to Server Actions and Supabase clients.

## Dependencies

- **Allowed:** `tailwindcss`, `lucide-react`, `shadcn/ui` (v0 defaults), `@supabase/supabase-js`, `@supabase/ssr`, `zod` (for schema validation).
- **AVOID:** Heavy styling libraries (Material UI, Bootstrap), Axios (use native `fetch` or the Supabase client).

## Testing & Quality

- **Framework:** Vitest or Jest with React Testing Library.
- **Type Safety:** Zero use of `any`. Everything must be typed with TypeScript, including the database types generated from Supabase.
- **Linting:** Run `npm run lint` before making any commit.

## API & Security

- **Authentication:** Session management handled by Supabase Auth (RSC/Middleware via `@supabase/ssr`).
- **Database Access:** Use strict Row Level Security (RLS) in Supabase. Mutative calls from the client must go through secure Server Actions or API Routes.
- **Data Validation:** Strict server-side validation with Zod before inserting or modifying data in Supabase.

## Git & CI

- **Main branch:** `main` - production-ready code
- **Development:** Create feature branches from `main`
- **Naming:** `feature/`, `fix/`, `refactor/` prefixes
- **Commits:** Use conventional commit format
- **CI/CD:** The GitHub Actions or Vercel pipeline must pass linting, TypeScript type checking (`tsc`), and unit tests before allowing a merge.
- **Branching:** Direct commits to `main` or `master` are prohibited. Always work in feature branches (`feature/`) via Pull Requests.

## Project Structure

```
project/
├── src/             # Source code
├── specs/           # Features
└── .opencode/       # Skills, command and context for AI coding agent
```

## Notes for AI

1. Check git status before making changes
2. Run linter after code modifications
3. Prefer editing existing files over creating new ones
4. Ask for clarification on ambiguous requirements
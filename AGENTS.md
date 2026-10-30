# AGENTS.md

## Project Context
- **Framework/Tech Stack:** Next.js (App Router, React 19) con TypeScript en el frontend.
- **Backend/Database:** Supabase (PostgreSQL, Auth, Storage, Edge Functions).
- **Environment:** Node 20+ / Bun.
- **How to run locally:** `npm run dev` (o `bun dev`).
- **How to run tests:** `npm test` (Jest / Vitest).

## Code Style
- **Naming:** camelCase para variables/funciones, PascalCase para componentes React y clases.
- **Architecture:** Estructura modular basada en componentes atómicos. Preferir Server Components (RSC) por defecto; usar `'use client'` solo cuando sea estrictamente necesario (interactividad, hooks de React).
- **v0 Optimization:** Priorizar componentes limpios, modulares y estilizados con Tailwind CSS y shadcn/ui.
- **Comments:** NO escribir comentarios obvios. Auto-documentar código mediante tipado estricto con TypeScript.
- **Formatting:** Prettier y ESLint configurados en el proyecto.
- **Asynchrony:** Usar async/await de forma nativa para llamadas a Server Actions y clientes de Supabase.

## Dependencies
- **Allowed:** `tailwindcss`, `lucide-react`, `shadcn/ui` (v0 defaults), `@supabase/supabase-js`, `@supabase/ssr`, `zod` (para validación de esquemas).
- **AVOID:** Librerías de estilos pesadas (Material UI, Bootstrap), Axios (usar `fetch` nativo o el cliente de Supabase).

## Testing & Quality
- **Framework:** Vitest o Jest con React Testing Library.
- **Type Safety:** Cero uso de `any`. Todo debe estar tipado con TypeScript, incluyendo los tipos generados de la base de datos de Supabase.
- **Linting:** Ejecutar `npm run lint` antes de realizar cualquier commit.

## API & Security
- **Authentication:** Gestión de sesiones manejada por Supabase Auth (RSC/Middleware con `@supabase/ssr`).
- **Database Access:** Usar Row Level Security (RLS) estricto en Supabase. Las llamadas mutativas desde el cliente deben pasar por Server Actions o API Routes seguras.
- **Data Validation:** Validación estricta en el servidor con Zod antes de insertar o modificar datos en Supabase.

## Git & CI
- **Conventional Commits:** Obligatorio (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`).
- **CI/CD:** El pipeline de GitHub Actions o Vercel debe pasar el linting, chequeo de tipos de TypeScript (`tsc`) y tests unitarios antes de permitir el merge.
- **Branching:** Prohibido hacer commits directos a `main` o `master`. Trabajar siempre en ramas de características (`feature/`) mediante Pull Requests.


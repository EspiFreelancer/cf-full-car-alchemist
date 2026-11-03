import Link from 'next/link'
import { ArrowRight, LayoutDashboard, Smartphone, UserRound, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const VISTAS: { href: string; titulo: string; descripcion: string; icono: LucideIcon; tag: string }[] = [
  {
    href: '/mecanico',
    titulo: 'Panel del Mecánico',
    descripcion: 'Agrega una una reparación adicional o cambia el estado a terminado.',
    icono: Smartphone,
    tag: 'Celular',
  },
  {
    href: '/cliente/ot-7f3a9c',
    titulo: 'Portal del Cliente',
    descripcion: 'Comparte el link del vehículo con el cliente, sin login.',
    icono: UserRound,
    tag: 'Público',
  },
  {
    href: '/admin',
    titulo: 'Administración',
    descripcion: 'Alta rápida e historial de aprobación.',
    icono: LayoutDashboard,
    tag: 'Escritorio',
  },
]

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col gap-8 px-4 py-10 md:max-w-4xl">
      <header className="flex flex-col gap-4">
        <span className="flex size-14 items-center justify-center rounded-xl bg-foreground text-background">
          <Wrench className="size-7" aria-hidden="true" />
        </span>
        <h1 className="text-balance text-4xl font-extrabold leading-tight">Full Car Alchemist</h1>
        <p className="text-pretty text-lg text-muted-foreground">
          Menos llamadas, aprobaciones en minutos. Elegí la vista con la que querés trabajar.
        </p>
      </header>
      <ul className="grid gap-4 md:grid-cols-3">
        {VISTAS.map(({ href, titulo, descripcion, icono: Icono, tag }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex h-full min-h-[60px] flex-col gap-3 rounded-xl border-2 border-foreground bg-card p-5 transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
            >
              <div className="flex items-center justify-between">
                <Icono className="size-7" aria-hidden="true" />
                <span className="rounded-full border px-2 py-0.5 text-xs font-semibold">{tag}</span>
              </div>
              <span className="text-xl font-bold">{titulo}</span>
              <span className="flex-1 text-sm opacity-80">{descripcion}</span>
              <span className="flex items-center gap-1 text-sm font-semibold">
                Abrir
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

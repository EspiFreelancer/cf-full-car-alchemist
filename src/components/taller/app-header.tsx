import Link from 'next/link'
import { Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AppHeaderProps {
  titulo: string
  activo?: 'mecanico' | 'admin'
}

const NAV = [
  { href: '/mecanico', label: 'Mecánico', id: 'mecanico' },
  { href: '/admin', label: 'Admin', id: 'admin' },
] as const

export function AppHeader({ titulo, activo }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="flex size-9 items-center justify-center rounded-md bg-status-repair text-status-repair-foreground">
            <Wrench className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-xs font-medium uppercase tracking-wider opacity-70">TallerApp</span>
            <span className="text-base">{titulo}</span>
          </span>
        </Link>
        <nav aria-label="Principal" className="flex gap-1">
          {NAV.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={activo === item.id ? 'page' : undefined}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-semibold transition-colors',
                activo === item.id ? 'bg-background text-foreground' : 'hover:bg-background/15',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

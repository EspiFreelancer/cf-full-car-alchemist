'use client'

import { AlertTriangle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Patente, StatusBadge } from '@/components/taller/status-badge'
import { useTaller } from '@/components/taller/taller-provider'
import { ESTADO_CONFIG } from '@/lib/taller/estados'
import { formatMonto } from '@/lib/taller/format'
import type { OrdenDetalle } from '@/lib/taller/types'
import { cn } from '@/lib/utils'
import { AddRepairDialog } from './add-repair-dialog'
import { StatusButtons } from './status-buttons'

export function VehicleCard({ orden }: { orden: OrdenDetalle }) {
  const { cambiarEstado, agregarAdicional } = useTaller()
  const pendientes = orden.adicionales.filter((a) => a.estado === 'pendiente')
  const totalPendiente = pendientes.reduce((sum, a) => sum + a.monto, 0)

  return (
    <Card className={cn('gap-0 overflow-hidden border-l-8 py-0', ESTADO_CONFIG[orden.estado].border)}>
      <CardContent className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Patente patente={orden.vehiculo.patente} className="text-xl" />
            <StatusBadge estado={orden.estado} className="text-sm" />
          </div>
          <h2 className="text-lg font-semibold">{orden.vehiculo.modelo}</h2>
          <p className="text-sm text-muted-foreground">{orden.falla_inicial}</p>
        </div>

        {pendientes.length > 0 && (
          <p className="flex items-center gap-2 rounded-md bg-status-approval/10 px-3 py-2 text-sm font-semibold text-status-approval">
            <AlertTriangle className="size-4 shrink-0" aria-hidden="true" />
            {`Esperando al cliente: ${formatMonto(totalPendiente)}`}
          </p>
        )}

        <StatusButtons
          estadoActual={orden.estado}
          onCambiar={(estado) => cambiarEstado(orden.id, estado)}
        />

        <AddRepairDialog
          patente={orden.vehiculo.patente}
          onGuardar={(concepto, monto) => agregarAdicional(orden.id, concepto, monto)}
        />
      </CardContent>
    </Card>
  )
}

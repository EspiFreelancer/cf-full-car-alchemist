'use client'

import { useState, type FormEvent } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const CONCEPTOS_RAPIDOS = [
  'Pastillas de freno',
  'Discos de freno',
  'Batería',
  'Amortiguadores',
  'Correa de distribución',
  'Embrague',
]

interface AddRepairDialogProps {
  patente: string
  onGuardar: (concepto: string, monto: number) => void
}

export function AddRepairDialog({ patente, onGuardar }: AddRepairDialogProps) {
  const [open, setOpen] = useState(false)
  const [concepto, setConcepto] = useState('')
  const [monto, setMonto] = useState('')

  const montoNumero = Number(monto)
  const valido = concepto.trim().length > 0 && Number.isFinite(montoNumero) && montoNumero > 0

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) {
      setConcepto('')
      setMonto('')
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!valido) return
    onGuardar(concepto.trim(), Math.round(montoNumero))
    handleOpenChange(false)
  }

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="h-16 w-full gap-2 text-lg font-bold"
      >
        <Plus className="size-6" aria-hidden="true" />
        Agregar Reparación Adicional
      </Button>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Reparación adicional</DialogTitle>
            <DialogDescription>
              {`Vehículo ${patente}. Al guardar, el cliente deberá aprobar el presupuesto.`}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="concepto" className="text-base">
                Concepto
              </Label>
              <div className="flex flex-wrap gap-2">
                {CONCEPTOS_RAPIDOS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setConcepto(c)}
                    aria-pressed={concepto === c}
                    className={cn(
                      'min-h-11 rounded-full border-2 px-4 text-sm font-semibold transition-colors',
                      concepto === c
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border bg-card text-foreground',
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <Input
                id="concepto"
                value={concepto}
                onChange={(e) => setConcepto(e.target.value)}
                placeholder="O escribí un concepto corto"
                maxLength={80}
                className="h-14 text-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="monto" className="text-base">
                Monto ($)
              </Label>
              <Input
                id="monto"
                type="number"
                inputMode="numeric"
                min={1}
                step={1}
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                placeholder="0"
                className="h-14 font-mono text-2xl font-bold"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Button
                type="submit"
                disabled={!valido}
                className="h-16 bg-status-approval text-base font-bold text-status-approval-foreground hover:bg-status-approval/90"
              >
                Guardar y pedir aprobación
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOpenChange(false)}
                className="h-14 text-base font-bold"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

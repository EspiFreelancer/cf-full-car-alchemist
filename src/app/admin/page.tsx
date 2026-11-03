import type { Metadata } from 'next'
import { AppHeader } from '@/components/taller/app-header'
import { AdminPanel } from '@/components/taller/admin/admin-panel'

export const metadata: Metadata = { title: 'Administración — TallerApp' }

export default function AdminPage() {
  return (
    <>
      <AppHeader titulo="Administración" activo="admin" />
      <AdminPanel />
    </>
  )
}

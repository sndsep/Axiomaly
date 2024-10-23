import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth/auth-config'

import { ProfileForm } from "./components/profile-form"
import { PreferencesForm } from "./components/preferences-form"
import { AccountForm } from "./components/account-form"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Perfil</h1>
        <p className="text-muted-foreground">
          Gestiona tu información personal y preferencias
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Perfil</CardTitle>
            <CardDescription>
              Actualiza tu información personal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferencias</CardTitle>
            <CardDescription>
              Configura tus preferencias de la plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PreferencesForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cuenta</CardTitle>
            <CardDescription>
              Gestiona la configuración de tu cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AccountForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

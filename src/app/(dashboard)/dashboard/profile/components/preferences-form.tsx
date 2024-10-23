"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

const preferencesFormSchema = z.object({
  emailNotifications: z.boolean(),
  pushNotifications: z.boolean(),
  weeklyDigest: z.boolean(),
})

type PreferencesFormValues = z.infer<typeof preferencesFormSchema>

export function PreferencesForm() {
  const form = useForm<PreferencesFormValues>({
    resolver: zodResolver(preferencesFormSchema),
    defaultValues: {
      emailNotifications: true,
      pushNotifications: false,
      weeklyDigest: true,
    },
  })

  function onSubmit(data: PreferencesFormValues) {
    toast({
      title: "Preferencias actualizadas",
      description: "Tus preferencias han sido guardadas.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="emailNotifications"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  Notificaciones por Email
                </FormLabel>
                <FormDescription>
                  Recibe notificaciones por email sobre tu progreso
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Guardar cambios</Button>
      </form>
    </Form>
  )
}

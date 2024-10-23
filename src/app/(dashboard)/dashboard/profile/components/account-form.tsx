"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AccountForm() {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [confirmEmail, setConfirmEmail] = useState("")

  async function handleDeleteAccount() {
    setIsDeleting(true)
    try {
      const response = await fetch("/api/account/delete", {
        method: "DELETE",
      })

      if (!response.ok) throw new Error()

      await signOut({ callbackUrl: "/" })
      router.push("/")
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not delete account. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
      setShowDeleteDialog(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Danger Zone</h3>
          <p className="text-sm text-muted-foreground">
            Once you delete your account, there is no going back.
            Please be certain.
          </p>
        </div>

        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogTrigger asChild>
            <Button variant="destructive">Delete Account</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>
                  Please type your email to confirm
                </Label>
                <Input
                  placeholder="Enter your email"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowDeleteDialog(false)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleDeleteAccount}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete Account"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

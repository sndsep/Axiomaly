"use client"

import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { X } from "lucide-react"
import * as ToastPrimitive from "@radix-ui/react-toast"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitive.Provider

const ToastViewport = React.forwardRef(function ToastViewport(
  { className, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>,
  ref: React.Ref<React.ElementRef<typeof ToastPrimitive.Viewport>>
) {
  return (
    <ToastPrimitive.Viewport
      ref={ref}
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      {...props}
    />
  )
})

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",
  {
    variants: {
      variant: {
        default: "bg-background border",
        destructive:
          "group destructive border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef(function Toast(
  { className, variant, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> &
    VariantProps<typeof toastVariants>,
  ref: React.Ref<React.ElementRef<typeof ToastPrimitive.Root>>
) {
  return (
    <ToastPrimitive.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})

const ToastAction = React.forwardRef(function ToastAction(
  { className, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>,
  ref: React.Ref<React.ElementRef<typeof ToastPrimitive.Action>>
) {
  return (
    <ToastPrimitive.Action
      ref={ref}
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      )}
      {...props}
    />
  )
})

const ToastClose = React.forwardRef(function ToastClose(
  { className, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>,
  ref: React.Ref<React.ElementRef<typeof ToastPrimitive.Close>>
) {
  return (
    <ToastPrimitive.Close
      ref={ref}
      className={cn(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      )}
      {...props}
    >
      <X className="h-4 w-4" />
    </ToastPrimitive.Close>
  )
})

const ToastTitle = React.forwardRef(function ToastTitle(
  { className, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>,
  ref: React.Ref<React.ElementRef<typeof ToastPrimitive.Title>>
) {
  return (
    <ToastPrimitive.Title
      ref={ref}
      className={cn("text-sm font-semibold [&+div]:text-xs", className)}
      {...props}
    />
  )
})

const ToastDescription = React.forwardRef(function ToastDescription(
  { className, ...props }: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>,
  ref: React.Ref<React.ElementRef<typeof ToastPrimitive.Description>>
) {
  return (
    <ToastPrimitive.Description
      ref={ref}
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  )
})

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
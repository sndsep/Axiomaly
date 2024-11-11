// src/components/landing/Header.tsx


"use client"

import Link from "next/link"
import { Button } from "@/components/ui/forms/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/forms/navigation-menu"
import { useSession } from "next-auth/react"

const navigation = [
  { name: "Courses", href: "#courses" },
  { name: "Career Path", href: "#career" },
  { name: "Experts", href: "#experts" },
  { name: "Pricing", href: "#pricing" },
]


export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">VFX Academy</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 
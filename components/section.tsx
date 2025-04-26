import type React from "react"
import { cn } from "@/lib/utils"

export function Section({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <section className={cn("flex min-h-0 flex-col gap-y-3", className)}>{children}</section>
}

import { ReactNode } from "react"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { FooterSection } from "@/components/sections/footer-section"

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background min-h-screen">
        <CustomCursor />
        <Navigation />
        {children}
        <FooterSection />
      </main>
    </LenisProvider>
  )
}

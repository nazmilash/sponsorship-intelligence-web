import Hero from '@/components/Hero'
import GhostJobGrid from '@/components/GhostJobGrid'
import DatabasePreview from '@/components/DatabasePreview'
import AccessTicket from '@/components/AccessTicket'
import PayhipEmbed from '@/components/PayhipEmbed'
import { content } from '@/content.config'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />

      <div id="reality-check" className="bg-utility-gray/30 w-full">
        <GhostJobGrid />
      </div>

      <div id="database-preview" className="bg-white w-full border-t border-utility-border">
        <DatabasePreview />
      </div>

      {/* Asset Preview Section */}
      <section className="py-16 bg-utility-gray/20 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Trust Asset</h2>
        <p className="text-utility-subtext mb-8">What you receive instantly after purchase.</p>
        <AccessTicket />
      </section>

      <div className="py-12 px-6 max-w-5xl mx-auto">
        <PayhipEmbed />
      </div>

      <footer className="py-12 text-center text-utility-subtext text-sm border-t border-utility-border mt-20">
        <p>{content.footer?.copyright || "© 2026 Sponsorship Intelligence"}</p>
      </footer>
    </main>
  )
}

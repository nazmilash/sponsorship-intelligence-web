import Hero from '@/components/Hero'
import MentorBio from '@/components/MentorBio'
import Deliverables from '@/components/Deliverables'
import DatabasePreview from '@/components/DatabasePreview'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-brand-purple/20 selection:text-brand-purple">

      {/* 1. Hero Section (Above the Fold) */}
      <Hero />

      {/* 2. The Mentor's Story (Mini-Bio) */}
      <MentorBio />

      {/* 3. What's Inside (The Deliverables) */}
      <Deliverables />

      {/* 4. The FOMO Preview (The Database) */}
      <DatabasePreview />

      {/* 5. Social Proof (Testimonials) */}
      <SocialProof />

      {/* 6. Pricing & Guarantee (The Closer) */}
      <Pricing />

      <footer className="py-12 text-center text-foreground-muted text-sm border-t border-utility-border bg-background-alt">
        <p>© 2026 Sponsorship Intelligence. All rights reserved.</p>
        <p className="mt-2 text-xs text-foreground-muted/60">Not affiliated with the UK Home Office.</p>
      </footer>
    </main>
  )
}

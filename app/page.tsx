import Hero from '@/components/Hero'
import SneakPeek from '@/components/SneakPeek'
import PainPoints from '@/components/PainPoints'
import WhatYouGet from '@/components/WhatYouGet'
import MentorBio from '@/components/MentorBio'
import SocialProof from '@/components/SocialProof'
import WorkWithMe from '@/components/WorkWithMe'
import FAQ from '@/components/FAQ'
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* Section 1: Hero with London Landscape */}
      <Hero />

      {/* Section 2: Sneak Peek - CV + Database Preview */}
      <SneakPeek />

      {/* Section 3: "This is for you if..." */}
      <PainPoints />

      {/* Section 4: What You Get - Two Boxes */}
      <WhatYouGet />

      {/* Section 5: My Story */}
      <MentorBio />

      {/* Section 6: Testimonials */}
      <SocialProof />

      {/* Section 7: Work With Me - Small Card */}
      <WorkWithMe />

      {/* Section 8: FAQ Accordion */}
      <FAQ />

      {/* Section 9: Final CTA */}
      <Pricing />

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-50">
        <p>© 2026 UK Sponsorship System. All rights reserved.</p>
        <p className="mt-2 text-xs">Not affiliated with the UK Home Office.</p>
      </footer>
    </main>
  )
}

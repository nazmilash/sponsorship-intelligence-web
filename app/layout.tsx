import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { content } from '@/content.config'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="https://payhip.com/payhip.js" strategy="lazyOnload" />
        <Analytics />
      </body>
    </html>
  )
}

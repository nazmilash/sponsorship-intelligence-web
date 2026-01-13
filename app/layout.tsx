import './globals.css'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Script src="https://payhip.com/payhip.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}

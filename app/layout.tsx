import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Michael Portfolio',
  description: 'Cybersecurity & Machine Learning Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
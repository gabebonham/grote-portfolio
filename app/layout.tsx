import type { Metadata } from 'next'
import {
  Geist,
  Geist_Mono,
  Noto_Sans,
  Nunito_Sans,
  Open_Sans,
  Roboto_Condensed,
} from 'next/font/google'
import './globals.css'

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  weight: '500',
})
export const metadata: Metadata = {
  title: 'Grote Portfolio',
  description: 'Grote Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${nunitoSans.variable} overflow-y-auto no-scrollbar antialiased font-normal leading-relaxed tracking-wide`}
      >
        {children}
      </body>
    </html>
  )
}

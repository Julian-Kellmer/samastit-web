import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const pp_neue_montreal = localFont({
  src: [
    {
      path: './fonts/PPNEUEMONTREAL-THIN.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/PPNEUEMONTREAL-MEDIUM.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/PPNEUEMONTREAL-BOOK.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PPNEUEMONTREAL-BOLD.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-pp',
})

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Samastit',
  description: 'El poder energético del yoga ',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${oswald.className} ${pp_neue_montreal.className} antialiased`}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  )
}

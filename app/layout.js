import '@/styles/reset.scss'
import '@/styles/global.scss'

import { Inter } from '@next/font/google'
// Created instance of the font
const interFontFamily = Inter({ subsets: ['latin'] })

// Import components
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <head />
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

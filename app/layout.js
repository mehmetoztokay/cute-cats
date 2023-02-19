'use-client'
import '@/src/styles/reset.scss'
import '@/src/styles/global.scss'
import { AuthContextProvider } from '@/src/context/AuthContext'

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
        <AuthContextProvider>
          <Header />
          <main>{children}</main>
        </AuthContextProvider>
        <Footer />
      </body>
    </html>
  )
}

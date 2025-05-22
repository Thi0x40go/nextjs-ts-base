import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SvgSprite from '@/components/SvgSprite';
import { ReactNode } from 'react'


export const metadata = {
  title: 'NextJS Base',
  description: 'Projeto base com Next.js e TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <SvgSprite/>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

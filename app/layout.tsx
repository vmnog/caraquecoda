import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
// import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'CaraQueCoda | Cursos de Programação Web para Iniciantes',
  description: 'A escola de programação @caraquecoda é dedicada a fornecer educação de alta qualidade em programação web para iniciantes. Nossos cursos são desenvolvidos por Victor Nogueira, um experiente desenvolvedor e instrutor, e são projetados para ajudar você a alcançar seus objetivos na área de tecnologia. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}


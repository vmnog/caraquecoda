export const metadata = {
  title: 'CaraQueCoda | Cursos de Programação Web para Iniciantes',
  description: 'A escola de programação @caraquecoda é dedicada a fornecer educação de alta qualidade em programação web para iniciantes. Nossos cursos são desenvolvidos por Victor Nogueira, um experiente desenvolvedor e instrutor, e são projetados para ajudar você a alcançar seus objetivos na área de tecnologia. ',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}

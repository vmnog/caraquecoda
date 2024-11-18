import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Nossa cultura"
        title="Equilibre sua paixão pelo trabalho com sua paixão pela vida."
        invert
      >
        <p>
          Somos um grupo de pessoas com ideias afins que compartilham os mesmos valores fundamentais.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Inovação" invert>
            Nossa equipe está sempre na vanguarda da tecnologia, buscando soluções criativas e eficientes para os desafios dos nossos clientes.
          </GridListItem>
          <GridListItem title="Colaboração" invert>
            Acreditamos no poder do trabalho em equipe e na sinergia que surge quando mentes brilhantes se unem por um objetivo comum.
          </GridListItem>
          <GridListItem title="Excelência" invert>
            Buscamos a excelência em tudo o que fazemos, desde o código que escrevemos até o atendimento ao cliente que oferecemos.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Liderança',
    people: [
      {
        name: 'Carlos Silva',
        role: 'Co-Fundador / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Ana Rodrigues',
        role: 'Co-Fundadora / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Pedro Oliveira',
        role: 'Sócio & Relações Comerciais',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Equipe',
    people: [
      {
        name: 'Mariana Costa',
        role: 'Desenvolvedora Sênior',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Lucas Ferreira',
        role: 'Designer Sênior',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Juliana Santos',
        role: 'VP, Experiência do Usuário',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Rafael Almeida',
        role: 'Redator Júnior',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Camila Rocha',
        role: 'VP, Recursos Humanos',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Thiago Mendes',
        role: 'Especialista em Conteúdo',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Fernanda Lima',
        role: 'Coordenadora de Contas',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Gabriel Souza',
        role: 'Desenvolvedor Sênior',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Isabela Martins',
        role: 'Desenvolvedora Front-end',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Acreditamos que nossa força reside em nossa abordagem colaborativa, que coloca nossos clientes no centro de tudo o que fazemos.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Sobre nós" title="Nossa força está na colaboração">
        <p>
          Acreditamos que nossa força reside em nossa abordagem colaborativa, que
          coloca nossos clientes no centro de tudo o que fazemos.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            A Caraquecoda foi fundada por três amigos que perceberam uma lacuna no mercado
            de desenvolvimento de software premium. Desde o início, nos comprometemos a fazer
            as coisas de maneira diferente, oferecendo soluções inovadoras e personalizadas.
          </p>
          <p>
            Na Caraquecoda, somos mais do que apenas colegas — somos uma família. Isso significa
            que valorizamos o equilíbrio entre trabalho e vida pessoal, incentivando nossos
            colaboradores a trazerem o melhor de si para o trabalho. Em troca, oferecemos um
            ambiente estimulante e oportunidades de crescimento profissional.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Colaboradores talentosos" />
          <StatListItem value="52" label="Clientes satisfeitos" />
          <StatListItem value="R$25M" label="Faturamento anual" />
        </StatList>
      </Container>

      <Culture />

      {/* <Team /> */}

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Do nosso blog"
        intro="Nossa equipe de designers e desenvolvedores experientes tem apenas uma coisa em mente: trabalhar em suas ideias para desenhar um sorriso no rosto de seus usuários em todo o mundo. Desde a condução de Brand Sprints até o Design UX."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
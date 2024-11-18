import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Descoberta" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Trabalhamos em estreita colaboração com nossos clientes para entender suas{' '}
          <strong className="font-semibold text-neutral-950">necessidades</strong> e
          objetivos, nos integrando em suas operações diárias para compreender
          o que faz seu negócio funcionar.
        </p>
        <p>
          Nossa equipe de especialistas realiza uma análise profunda do{' '}
          <strong className="font-semibold text-neutral-950">negócio</strong>,
          estudando processos, tecnologias e desafios. Nossos gerentes de conta
          focam em entender a visão e as metas de longo prazo da empresa.
        </p>
        <p>
          Após a análise completa, apresentamos um{' '}
          <strong className="font-semibold text-neutral-950">plano</strong> abrangente
          e, mais importante, um orçamento detalhado e transparente.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluído nesta fase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Questionários detalhados</TagListItem>
        <TagListItem>Estudos de viabilidade</TagListItem>
        <TagListItem>Análise de mercado</TagListItem>
        <TagListItem>Pesquisas com funcionários</TagListItem>
        <TagListItem>Provas de conceito</TagListItem>
        <TagListItem>Auditoria técnica</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Desenvolvimento" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Com base na fase de descoberta, desenvolvemos um roteiro abrangente
          para cada produto e começamos a trabalhar na entrega. O roteiro é um
          plano detalhado e estruturado, projetado para maximizar a eficiência
          e a qualidade do projeto.
        </p>
        <p>
          Cada cliente é designado a um gerente de conta chave para manter as
          linhas de comunicação abertas e garantir a transparência do progresso
          real do projeto. Eles atuam como um elo vital entre o cliente e nossa
          equipe de desenvolvimento, que trabalha arduamente para criar soluções
          inovadoras e personalizadas.
        </p>
        <p>
          Nossos gerentes de conta são treinados para manter uma comunicação
          regular e eficiente, garantindo que os clientes estejam sempre
          atualizados sobre o andamento do projeto e possam fornecer feedback
          em tempo hábil.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Marcos Emmerick', role: 'Co-fundador da Dochelp' }}
        className="mt-12"
      >
        A Caraquecoda foi extremamente regular com suas atualizações de progresso,
        mantendo-nos sempre informados e envolvidos no processo de desenvolvimento.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Entrega" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Durante a fase de Desenvolvimento, revisamos constantemente o projeto para
          garantir que esteja alinhado com os{' '}
          <strong className="font-semibold text-neutral-950">
            requisitos
          </strong>
          . Isso nos permite fazer ajustes necessários e garantir a satisfação do cliente.
        </p>
        <p>
          Nosso foco é entregar um{' '}
          <strong className="font-semibold text-neutral-950">progresso</strong>{' '}
          constante e tangível ao longo de todo o projeto. A equipe de desenvolvimento
          dedica-se a criar soluções inovadoras e eficientes, utilizando as mais
          recentes tecnologias e melhores práticas do mercado.
        </p>
        <p>
          Garantimos que todas as páginas e funcionalidades do site estejam{' '}
          <strong className="font-semibold text-neutral-950">
            totalmente funcionais
          </strong>{' '}
          no lançamento. Oferecemos um período de{' '}
          <strong className="font-semibold text-neutral-950">
            suporte
          </strong>{' '}
          pós-lançamento para garantir uma transição suave e resolver quaisquer
          problemas que possam surgir.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluído nesta fase
      </h3>
      <List className="mt-8">
        <ListItem title="Testes">
          Nossos projetos sempre têm 100% de cobertura de testes, garantindo
          a qualidade e confiabilidade do produto final.
        </ListItem>
        <ListItem title="Infraestrutura">
          Para garantir confiabilidade, utilizamos apenas as melhores soluções
          de hospedagem e infraestrutura disponíveis no mercado.
        </ListItem>
        <ListItem title="Suporte">
          Oferecemos suporte contínuo após o lançamento, garantindo que seu
          negócio continue operando sem problemas e evoluindo conforme necessário.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Nossos valores"
        title="Equilibrando confiabilidade e inovação"
      >
        <p>
          Nos esforçamos para estar na vanguarda das tendências e tecnologias emergentes,
          enquanto mantemos um forte compromisso com práticas comprovadas e confiáveis.
          Nossos valores fundamentais orientam cada decisão que tomamos.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulosidade">
            Prestamos atenção a cada detalhe, garantindo que cada aspecto do projeto
            seja cuidadosamente considerado e executado com precisão.
          </GridListItem>
          <GridListItem title="Eficiência">
            Nos orgulhamos de nunca perder um prazo, otimizando nossos processos
            para entregar resultados de alta qualidade de maneira ágil.
          </GridListItem>
          <GridListItem title="Adaptabilidade">
            Cada negócio tem necessidades únicas, e nosso maior desafio é adaptar
            nossas soluções para atender perfeitamente a essas necessidades específicas.
          </GridListItem>
          <GridListItem title="Honestidade">
            Somos transparentes em todos os nossos processos, mantendo uma
            comunicação clara e aberta com nossos clientes em todas as etapas.
          </GridListItem>
          <GridListItem title="Lealdade">
            Cultivamos relacionamentos de longo prazo com nossos clientes que vão
            além da simples entrega de um produto, fornecendo suporte contínuo.
          </GridListItem>
          <GridListItem title="Inovação">
            O cenário tecnológico está sempre evoluindo e nós também. Estamos
            constantemente buscando novas tecnologias e abordagens para melhorar
            nossos serviços.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Nosso Processo',
  description:
    'Acreditamos na eficiência e na maximização de nossos recursos para fornecer o melhor valor aos nossos clientes.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Nosso processo" title="Como trabalhamos">
        <p>
          Acreditamos na eficiência e na maximização de nossos recursos para fornecer
          o melhor valor aos nossos clientes. Nossa abordagem combina experiência
          comprovada com inovação contínua para entregar soluções de software excepcionais.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
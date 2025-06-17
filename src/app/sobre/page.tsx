'use client';

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageCircleCode, SquareChartGantt } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 max-w-2xl mx-auto">
      <AnimatedGroup
        className="flex flex-col gap-[32px] row-start-2 items-center"
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              filter: 'blur(12px)',
              y: -60,
              rotateX: 90,
            },
            visible: {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              rotateX: 0,
              transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1,
              },
            },
          },
        }}
      >
        <div className="size-14 relative cursor-pointer">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link prefetch href="/" className="block">
                <Image
                  className="dark:invert"
                  src="/caraquecoda-logo.svg"
                  alt="Caraquecoda logo"
                  fill
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <p>Voltar</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <h1 className="text-2xl font-bold mb-4">Sobre a CARAQUECODA</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">Transformando Ideias em Realidade Digital</h2>
          <p className="mb-4">
            Olá! Sou <strong>Victor Nogueira</strong>, fundador da Caraquecoda e desenvolvedor com mais de 9 anos de experiência no mercado de tecnologia. Minha paixão é pegar suas ideias e transformá-las em projetos reais, funcionais e de alta qualidade.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Nossa Especialidade</h2>
          <p className="mb-2">Na Caraquecoda, dominamos todo o ciclo de desenvolvimento de software:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Concepção e Refinamento de Ideias</strong> - Ajudamos você a lapidar sua visão e definir o melhor caminho para o sucesso</li>
            <li><strong>Design e Experiência do Usuário</strong> - Criamos interfaces intuitivas e atrativas</li>
            <li><strong>Desenvolvimento Full-Stack</strong> - Construímos soluções robustas e escaláveis</li>
            <li><strong>Deploy e Infraestrutura</strong> - Colocamos seu projeto no ar com segurança e performance</li>
            <li><strong>Suporte Contínuo</strong> - Acompanhamos seu crescimento e evolução</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Nossa Abordagem</h2>
          <p className="mb-4">
            Acreditamos no poder dos <strong>MVPs (Produtos Mínimos Viáveis)</strong> como ponto de partida. Começamos com o essencial e evoluímos gradualmente, construindo projetos que crescem junto com seu negócio. Muitos de nossos clientes começaram com uma ideia simples e hoje possuem plataformas robustas e bem-sucedidas.
          </p>
          <p className="mb-4">
            Quando necessário, ampliamos nossa equipe contratando desenvolvedores especializados para acelerar o desenvolvimento. Minha experiência me permite liderar essas equipes com eficiência, garantindo que cada linha de código mantenha o mesmo padrão de qualidade que eu aplicaria pessoalmente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Relacionamentos de Longo Prazo</h2>
          <p className="mb-4">
            O que mais nos orgulha é a <strong>confiança</strong> que construímos com nossos clientes. A maioria retorna para novos projetos ou nos indica para outros empreendedores. Essa é a prova de que nosso trabalho vai além do código - construímos parcerias duradouras baseadas em resultados e transparência.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Vamos Conversar?</h2>
          <p className="mb-4">
            Se você tem uma ideia que precisa sair do papel ou um projeto que precisa evoluir, vamos conversar! Na Caraquecoda, sua visão é nossa missão.
          </p>

          <div className="flex gap-4 items-center flex-col sm:flex-row justify-center">
            <Tooltip>
              <TooltipTrigger>
                <a
                  className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                  href="https://tally.so/r/3EgppB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SquareChartGantt className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Faca seu orçamento</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <a
                  className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
                  href="https://wa.me/11948561111?text=Olá,%20vim%20pelo%20site%20https://caraquecoda.com.br%20e%20quero%20conversar%20sobre%20realizar%20uma%20ideia%20de%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircleCode className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Entre em contato</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </section>

        <p className="italic text-sm mt-6">CARAQUECODA LTDA - 55.148.715/0001-88</p>
      </AnimatedGroup>
    </div>
  );
}

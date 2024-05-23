import React from 'react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Twitter, Instagram, Github, Youtube } from 'lucide-react'
import { twMerge } from 'tailwind-merge';

const footerItems = {
  cursosIniciantes: {
    title: "Cursos Iniciantes",
    links: [
      { name: "HTML5", href: "https://www.udemy.com/course/caraquecoda-curso-html5", disabled: false },
      { name: "CSS3", href: "/", disabled: true },
      { name: "Javascript ES6", href: "/", disabled: true }
    ]
  },
  cursosAvancados: {
    title: "Cursos Avançados",
    links: [
      { name: "React", href: "https://www.udemy.com/course/caraquecoda-curso-html5", disabled: true },
      { name: "Typescript", href: "/", disabled: true },
      { name: "Next.js", href: "/", disabled: true },
      { name: "Node.js", href: "/", disabled: true },
      { name: "Banco de Dados e SQL", href: "/", disabled: true }
    ]
  },
  projetosCompletos: {
    title: "Projetos Completos",
    links: [
      { name: "Clone iFood", href: "https://youtube.com/playlist?list=PLCwsaNyAWqXoFYN-ZcQGE-RsdY1WrNrxA&si=lYTl9HRftCNYmK58", disabled: false },
      { name: "Clone Uber", href: "/", disabled: true },
      { name: "Clone AirBnB", href: "/", disabled: true },
      { name: "Clone Instagram", href: "/", disabled: true },
      { name: "Clone Twitter", href: "/", disabled: true }
    ]
  }
};

const socialLinks = [
  { href: "https://x.com/caraquecoda", label: "Twitter", icon: <Twitter /> },
  { href: "https://github.com/caraquecoda", label: "Github", icon: <Github /> },
  { href: "https://www.instagram.com/caraquecoda", label: "Instagram", icon: <Instagram /> },
  { href: "https://www.youtube.com/@caraquecoda", label: "Instagram", icon: <Youtube /> },
];

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="text-gray-400">Junte-se a nós e transforme sua carreira com nossos cursos práticos e suporte personalizado. ©caraquecoda. Todos os direitos reservados.</div>
            </div>
            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {Object.values(footerItems).map((item, index) => (
                <div key={index} className="text-sm">
                  <h6 className="text-gray-200 font-medium mb-1">{item.title}</h6>
                  <ul>
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="mb-1">
                        <TooltipProvider>
                          <Tooltip>
                            {link.disabled && <TooltipContent>Em breve...</TooltipContent>}

                            <TooltipTrigger>
                              <Link target='_blank' href={link.href} className={
                                twMerge(
                                  "text-gray-400 transition duration-150 ease-in-out",
                                  link.disabled && "opacity-30 cursor-default",
                                  !link.disabled && "hover:text-gray-100 "
                                )}>{link.name}</Link>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {socialLinks.map((link, index) => (
                <li key={index} className={index > 0 ? "ml-4" : ""}>
                  <Link href={link.href} target='_blank' className="text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label={link.label}>
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; caraquecoda. Todos os direitos reservados.</div>
          </div>
        </div>
      </div>
    </footer >
  );
}

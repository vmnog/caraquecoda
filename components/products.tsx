import React from 'react';
import Image from 'next/image';

import CourseImageHTML from '@/public/images/curso-html.png';
import CourseImageGit from '@/public/images/curso-git.png';
import CourseImageIfood from '@/public/images/curso-ifood.png';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const courses = [
  {
    url: "https://www.udemy.com/course/caraquecoda-curso-html5",
    image: CourseImageHTML,
    name: "Curso de HTML5 (Completo)",
    role: "Pago",
    technology: "HTML5, SEO & Acessbilidade",
    price: "R$94,90"
  },
  {
    url: "https://www.youtube.com/watch?v=wOLFus9DUxI",
    image: CourseImageGit,
    name: "Curso de Git (Completo)",
    role: "Gratuito",
    technology: "GIT",
    price: "R$0,00"
  },
  {
    url: "https://youtube.com/playlist?list=PLCwsaNyAWqXoFYN-ZcQGE-RsdY1WrNrxA&si=lYTl9HRftCNYmK58",
    image: CourseImageIfood,
    name: "Clone do iFood: Projeto com Next.js",
    role: "Gratuito",
    technology: "Next.js 14, TailwindCSS, shacn/ui",
    price: "R$0,00"
  },
];

export default function Products() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Nossos Cursos Online</h2>
            <p className="text-xl text-gray-400">
              Conheça os cursos oferecidos pela <span className="text-white">@caraquecoda</span>. Nossa abordagem prática e personalizada vai te ajudar a se tornar um profissional de tecnologia.
            </p>
          </div>

          {/* Courses */}
          <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 items-start justify-center lg:max-w-none">
            {courses.map((course, index) => (
              <Link
                target='_blank'
                className='relative flex flex-col gap-4 transform transition-transform hover:scale-105'
                href={course.url}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                key={index}
              >
                {course.role === "Gratuito" && (
                  <span className="absolute -top-3 right-2 bg-green-500 text-white text-sm font-semibold rounded-full px-2 py-1">
                    Gratuito
                  </span>
                )}
                <Image
                  className='rounded-lg shadow w-full'
                  src={course.image} alt={course.name} width={500} height={300}
                />

                <div className='flex justify-between gap-4'>
                  <div className='flex flex-col gap-2'>
                    <strong>{course.name}</strong>
                    <small className='text-gray-400 font-medium text-sm'>{course.technology}</small>
                  </div>

                  <b className={cn(
                    course.price === 'R$0,00' && 'line-through text-gray-500'
                  )}>{course.price}</b>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

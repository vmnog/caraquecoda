import React from 'react';
import Image from 'next/image';

import TestimonialImage01 from '@/public/images/testimonial-01.jpg';
import TestimonialImage02 from '@/public/images/testimonial-02.jpg';
import TestimonialImage03 from '@/public/images/testimonial-03.jpg';

const testimonials = [
  {
    image: TestimonialImage01,
    text: "— “Os cursos da @caraquecoda mudaram minha vida. A mentoria do Victor Nogueira foi essencial para entender os conceitos e aplicar no meu dia a dia de trabalho.”",
    name: "Maria Souza",
    role: "Ex-aluno",
    delay: "0"
  },
  {
    image: TestimonialImage02,
    text: "—  “A abordagem prática e o suporte contínuo fizeram toda a diferença. Hoje estou confiante em minhas habilidades como desenvolvedor web.”",
    name: "João Silva",
    role: "Ex-aluno",
    delay: "200"
  },
  {
    image: TestimonialImage03,
    text: "— “Aprender na @caraquecoda foi uma experiência incrível. Consegui meu primeiro emprego como desenvolvedor web graças ao que aprendi aqui.”",
    name: "Lucas Pereira",
    role: "Ex-aluno",
    delay: "400"
  }
];

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Confie em quem já conhece a gente</h2>
            <p className="text-xl text-gray-400">
              Veja o que nossos alunos têm a dizer sobre sua experiência com os cursos do <span className="text-white">@caraquecoda</span>. Nossa abordagem prática e personalizada tem transformado iniciantes em profissionais de tecnologia.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col h-full p-6 bg-gray-800"
                data-aos="fade-up"
                data-aos-delay={testimonial.delay}
              >
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <Image
                      className="rounded-full"
                      src={testimonial.image}
                      width={48}
                      height={48}
                      alt={`Testimonial ${index + 1}`}
                    />
                    <svg
                      className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                      viewBox="0 0 24 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow">{testimonial.text}</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">{testimonial.name}</cite> - <span className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

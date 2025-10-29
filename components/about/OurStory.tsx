import React from "react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";

export function OurStory() {
  return (
    <Section className="dark: dark:bg-dark-bg">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-primary-blue dark:text-accent-cyan rounded-full text-sm font-semibold mb-4">
              Nossa Jornada
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark dark:text-white mb-4">
              Como tudo começou
            </h2>
          </div>

          {/* Story Content */}
          <div className="space-y-8">
            {/* Parágrafo 1 - Origem */}
            <div className="relative pl-8 border-l-4 border-primary-blue">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-blue border-4 border-white dark:border-dark-bg" />
              <p className="text-lg text-neutral-dark dark:text-gray-300 leading-relaxed">
                A <strong className="text-primary-blue">A Group</strong> nasceu
                da experiência de trabalhar com pequenas e médias empresas que
                enfrentavam dificuldades para encontrar soluções tecnológicas
                acessíveis e de qualidade. Percebemos que muitos negócios tinham
                grandes ideias, mas não conseguiam transformá-las em realidade
                digital por falta de parceiros confiáveis.
              </p>
            </div>

            {/* Parágrafo 2 - Motivação */}
            <div className="relative pl-8 border-l-4 border-accent-cyan">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent-cyan border-4 border-white dark:border-dark-bg" />
              <p className="text-lg text-neutral-dark dark:text-gray-300 leading-relaxed">
                Foi assim que decidimos criar uma empresa diferente: onde{" "}
                <strong className="text-accent-cyan">
                  tecnologia de ponta se encontra com atendimento humanizado
                </strong>
                . Queríamos ser mais do que fornecedores - queríamos ser
                parceiros verdadeiros no crescimento dos nossos clientes.
              </p>
            </div>

            {/* Parágrafo 3 - Evolução */}
            <div className="relative pl-8 border-l-4 border-primary-blue">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-blue border-4 border-white dark:border-dark-bg" />
              <p className="text-lg text-neutral-dark dark:text-gray-300 leading-relaxed">
                Desde então, especializamo-nos em{" "}
                <strong className="text-primary-blue">
                  Next.js, TypeScript e React
                </strong>{" "}
                - as tecnologias mais modernas e confiáveis do mercado. Cada
                projeto que entregamos é desenvolvido com as melhores práticas,
                pensando sempre na escalabilidade e facilidade de manutenção.
              </p>
            </div>

            {/* Parágrafo 4 - Presente/Futuro */}
            <div className="relative pl-8 border-l-4 border-accent-cyan">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent-cyan border-4 border-white dark:border-dark-bg" />
              <p className="text-lg text-neutral-dark dark:text-gray-300 leading-relaxed">
                Hoje, a A Group é mais do que uma software house - somos{" "}
                <strong className="text-accent-cyan">
                  um hub completo de soluções tecnológicas
                </strong>
                . Do planejamento ao suporte contínuo, estamos ao lado dos
                nossos clientes em cada etapa da jornada digital.
              </p>
            </div>
          </div>

          {/* Quote/Destaque */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border-l-4 border-primary-blue">
            <svg
              className="w-10 h-10 text-primary-blue/30 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl font-semibold text-primary-dark dark:text-white leading-relaxed">
              "Nosso objetivo não é apenas entregar código - é entregar
              resultados que transformam negócios."
            </p>
          </div>

          {/* CTA suave */}
          <div className="mt-16 text-center">
            <p className="text-lg text-neutral-medium dark:text-gray-400 mb-4">
              Quer saber mais sobre como trabalhamos?
            </p>
            <a
              href="#processo"
              className="inline-flex items-center text-primary-blue dark:text-accent-cyan font-semibold hover:gap-2 transition-all group"
            >
              Conheça nosso processo
              <svg
                className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

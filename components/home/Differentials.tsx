import React from "react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";

const differentials = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Stack Moderna",
    description:
      "Next.js, TypeScript e React - as tecnologias mais confiáveis e atuais do mercado.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Desenvolvimento Ágil",
    description:
      "Entregas rápidas e iterativas, com você acompanhando cada etapa do projeto.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Código de Qualidade",
    description:
      "Seguimos as melhores práticas para garantir escalabilidade e fácil manutenção.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Suporte Contínuo",
    description:
      "Não te deixamos na mão. Oferecemos manutenção e suporte após a entrega.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    title: "Soluções Sob Medida",
    description:
      "Cada projeto é único. Desenvolvemos pensando nas necessidades do seu negócio.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Transparência",
    description:
      "Comunicação honesta, prazos realistas e sem surpresas no orçamento.",
  },
];

export function Differentials() {
  return (
    <Section className="bg-white dark:bg-dark-bg">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-primary-blue dark:text-accent-cyan rounded-full text-sm font-semibold mb-4">
            Por Que Escolher A Group?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark dark:text-white mb-4">
            Diferenciais que fazem a diferença
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-400 max-w-2xl mx-auto">
            Trabalhamos com excelência técnica e foco total no sucesso do seu
            projeto
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            // 🎯 Define o tipo de fade conforme o índice
            const fadeDirection = [0, 1, 2].includes(index)
              ? "fade-down"
              : "fade-up";

            return (
              <div
                key={index}
                data-aos={fadeDirection}
                data-aos-delay={index * 100} // opcional, pra um efeito em cascata
                className="group relative bg-white dark:bg-dark-card rounded-xl p-8 border border-gray-200 dark:border-dark-border hover:border-primary-blue dark:hover:border-accent-cyan transition-all duration-500 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue to-accent-cyan text-white mb-4 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-medium dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-blue/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-medium dark:text-gray-400 mb-6">
            Pronto para transformar suas ideias em realidade?
          </p>
          <a
            href="/sobre"
            className="inline-flex items-center text-primary-blue dark:text-accent-cyan font-semibold hover:gap-2 transition-all group"
          >
            Conheça mais sobre nós
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </Container>
    </Section>
  );
}

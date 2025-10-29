import React from "react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";

const pillars = [
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    title: "Missão",
    description:
      "Ser o parceiro tecnológico que impulsiona o crescimento de pequenas e médias empresas através de soluções web modernas, escaláveis e personalizadas.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Visão",
    description:
      "Ser reconhecida como referência em desenvolvimento web no Brasil, democratizando o acesso à tecnologia de ponta e transformando a forma como empresas crescem no digital.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Valores",
    description: null, // Será uma lista
    color: "from-indigo-500 to-indigo-600",
  },
];

const values = [
  {
    name: "Excelência Técnica",
    description: "Código limpo, escalável e bem documentado em cada projeto.",
  },
  {
    name: "Inovação Constante",
    description:
      "Sempre atualizados com as tecnologias mais recentes do mercado.",
  },
  {
    name: "Transparência",
    description: "Comunicação honesta, prazos realistas e sem surpresas.",
  },
  {
    name: "Parceria Verdadeira",
    description: "O sucesso do cliente é o nosso sucesso. Crescemos juntos.",
  },
];

export function MissionVisionValues() {
  return (
    <Section className="bg-white dark:bg-dark-bg">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-primary-blue dark:text-accent-cyan rounded-full text-sm font-semibold mb-4">
            Nossos Pilares
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark dark:text-white mb-4">
            Missão, Visão e Valores
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-400 max-w-2xl mx-auto">
            Os princípios que guiam cada decisão e cada linha de código que
            escrevemos
          </p>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => {
            const animations = ["fade-right", "zoom-in", "fade-left"];
            const animation = animations[index % animations.length];

            return (
              <div
                key={index}
                data-aos={animation}
                className="relative bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-dark-border hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} text-white mb-6`}
                >
                  {pillar.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-4">
                  {pillar.title}
                </h3>

                {/* Description or Values list */}
                {pillar.description ? (
                  <p className="text-neutral-medium dark:text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                ) : (
                  <ul className="space-y-4">
                    {values.map((value, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary-dark dark:text-white mb-1">
                            {value.name}
                          </h4>
                          <p className="text-sm text-neutral-medium dark:text-gray-400">
                            {value.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Decorative gradient */}
                <div
                  className={`absolute -top-px -right-px w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-5 rounded-tr-2xl rounded-bl-full`}
                />
              </div>
            );
          })}
        </div>
        ;{/* Bottom Quote */}
        <div className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border-l-4 border-primary-blue">
          <p className="text-lg md:text-xl text-primary-dark dark:text-white font-medium leading-relaxed">
            "Cada projeto que desenvolvemos é uma oportunidade de transformar
            não apenas código em software, mas{" "}
            <strong className="text-primary-blue dark:text-accent-cyan">
              ideias em impacto real
            </strong>{" "}
            no mundo dos negócios."
          </p>
        </div>
      </Container>
    </Section>
  );
}

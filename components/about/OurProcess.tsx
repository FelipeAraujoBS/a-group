import React from "react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";

const steps = [
  {
    number: "01",
    title: "Briefing e Planejamento",
    description:
      "Entendemos profundamente seu negócio, objetivos e requisitos técnicos. Mapeamos todas as funcionalidades e definimos a melhor arquitetura para o projeto.",
    details: [
      "Reunião de descoberta",
      "Análise de requisitos",
      "Proposta técnica detalhada",
      "Cronograma e orçamento",
    ],
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Desenvolvimento",
    description:
      "Transformamos as ideias em código limpo e eficiente. Trabalhamos em sprints com entregas parciais para você acompanhar a evolução do projeto em tempo real.",
    details: [
      "Desenvolvimento ágil em sprints",
      "Entregas parciais semanais",
      "Code review contínuo",
      "Comunicação transparente",
    ],
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Testes e Ajustes",
    description:
      "Garantimos a qualidade através de testes rigorosos em diferentes dispositivos e navegadores. Refinamos cada detalhe com base no seu feedback.",
    details: [
      "Testes de funcionalidade",
      "Testes de responsividade",
      "Otimização de performance",
      "Ajustes e melhorias",
    ],
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Entrega e Suporte",
    description:
      "Lançamos o projeto no ar com todo suporte necessário. Oferecemos treinamento para sua equipe e ficamos disponíveis para dúvidas e melhorias contínuas.",
    details: [
      "Deploy em produção",
      "Treinamento da equipe",
      "Documentação completa",
      "Suporte contínuo",
    ],
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
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

export function OurProcess() {
  return (
    <Section className="bg-white dark:bg-dark-bg" id="processo">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-primary-blue dark:text-accent-cyan rounded-full text-sm font-semibold mb-4">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark dark:text-white mb-4">
            Como trabalhamos
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-400 max-w-2xl mx-auto">
            Um processo transparente e colaborativo, do briefing ao suporte
            contínuo
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue via-accent-cyan to-primary-blue transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos={index % 2 ? "fade-left" : "fade-right"}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-dark-border hover:shadow-xl transition-all duration-300 group">
                    {/* Number badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue to-accent-cyan text-white font-bold text-lg mb-4">
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-medium dark:text-gray-400 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details list */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-neutral-dark dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Center Icon (desktop) */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue to-accent-cyan text-white shadow-lg">
                    {step.icon}
                  </div>
                </div>

                {/* Empty space for alternating layout (desktop) */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-dark dark:text-white mb-4">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-lg text-neutral-medium dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Entre em contato e vamos transformar sua ideia em realidade digital
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-blue text-white text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Falar com a equipe
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </Container>
    </Section>
  );
}

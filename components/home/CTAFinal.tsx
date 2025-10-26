import React from "react";
import Link from "next/link";
import { Container } from "../shared/Container";

export function CTAFinal() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">
              Vamos começar seu projeto
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para transformar{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent-cyan to-white bg-clip-text text-transparent">
                sua ideia
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-cyan/30 -z-10" />
            </span>{" "}
            em realidade?
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Entre em contato agora e receba uma proposta personalizada para o
            seu projeto. Sem compromisso, sem custo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-primary-dark rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              Solicitar Orçamento Gratuito
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
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-dark transition-all duration-300"
            >
              Ver Projetos
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 border-t border-white/20">
            <div className="flex items-center gap-2 text-white">
              <svg
                className="w-5 h-5 text-accent-cyan"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Resposta em 24h</span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <svg
                className="w-5 h-5 text-accent-cyan"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Orçamento sem custo</span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <svg
                className="w-5 h-5 text-accent-cyan"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Sem compromisso</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

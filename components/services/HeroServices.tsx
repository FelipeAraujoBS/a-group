import React from "react";
import { Container } from "../shared/Container";

export function HeroServices() {
  return (
    <section className="relative py-5 min-h-[60vh] flex items-center bg-gradient-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating circles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent-cyan rounded-full blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary-blue rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Container>
        <div className="relative z-10 max-w-4xl py-16 md:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fadeIn">
            <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">
              Nossos Serviços
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn"
            style={{ animationDelay: "0.1s" }}
          >
            Soluções{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent-cyan to-white bg-clip-text text-transparent">
                completas
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-cyan/30 -z-10" />
            </span>{" "}
            para sua empresa
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl leading-relaxed animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Do planejamento ao deploy, oferecemos tecnologia de ponta
            personalizada para as necessidades do seu negócio. Cada linha de
            código é pensada para gerar resultados reais.
          </p>

          {/* Service categories quick nav */}
          <div
            className="flex flex-wrap gap-3 animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#sites"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-medium transition-all hover:scale-105"
            >
              Sites Institucionais
            </a>
            <a
              href="#ecommerce"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-medium transition-all hover:scale-105"
            >
              E-commerce
            </a>
            <a
              href="#sistemas"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-medium transition-all hover:scale-105"
            >
              Sistemas Web
            </a>
            <a
              href="#apis"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-medium transition-all hover:scale-105"
            >
              APIs
            </a>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
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
      </div>
    </section>
  );
}

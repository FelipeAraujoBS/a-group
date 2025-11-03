"use client";

import React, { useState } from "react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { ServiceModal } from "./ServicesModal";

const servicesData = [
  {
    id: "sites",
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
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    title: "Sites Institucionais",
    description:
      "Presença digital profissional com design moderno, responsivo e otimizado para SEO.",
    fullDescription:
      "Criamos sites institucionais que representam sua marca com elegância e modernidade. Design responsivo, otimizado para SEO e com performance excepcional. Cada projeto é desenvolvido pensando na experiência do usuário e nos objetivos de negócio.",
    color: "from-blue-500 to-blue-600",
    staticColor: "blue",
    features: [
      "Design personalizado e responsivo",
      "Otimização para motores de busca (SEO)",
      "Performance e carregamento rápido",
      "Integração com redes sociais",
      "Formulário de contato funcional",
      "Painel administrativo (CMS)",
      "Hospedagem e domínio inclusos",
      "SSL/HTTPS e segurança",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "CMS Headless",
    ],
    idealFor: [
      "Empresas que precisam de presença digital profissional",
      "Profissionais liberais (advogados, médicos, consultores)",
      "Startups e novos negócios",
      "Instituições e organizações",
    ],
  },
  {
    id: "ecommerce",
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
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "E-commerce",
    description:
      "Lojas virtuais completas integradas com pagamentos, gestão de produtos e muito mais.",
    fullDescription:
      "Desenvolvemos lojas virtuais completas e prontas para vender. Integração com meios de pagamento, gestão de produtos, controle de estoque e muito mais. Plataforma robusta e escalável para o crescimento do seu negócio online.",
    color: "from-cyan-500 to-cyan-600",
    staticColor: "cyan",
    features: [
      "Catálogo de produtos completo",
      "Carrinho de compras intuitivo",
      "Checkout seguro e otimizado",
      "Integração com Stripe, Mercado Pago, PayPal",
      "Painel administrativo robusto",
      "Gestão de pedidos e clientes",
      "Cálculo automático de frete",
      "Sistema de cupons de desconto",
      "Avaliações e comentários",
      "Relatórios e analytics",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Prisma",
      "Vercel",
    ],
    idealFor: [
      "Lojas físicas que querem vender online",
      "Empreendedores digitais",
      "Marcas próprias e dropshipping",
      "Atacadistas e distribuidores",
    ],
  },
  {
    id: "sistemas",
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Sistemas Web",
    description:
      "Sistemas customizados sob medida: dashboards, CRMs, ERPs e plataformas de gestão.",
    fullDescription:
      "Desenvolvemos sistemas web sob medida para atender necessidades específicas do seu negócio. Dashboards interativos, CRMs personalizados, ERPs simplificados e plataformas de gestão completas. Automatize processos e ganhe eficiência operacional.",
    color: "from-indigo-500 to-indigo-600",
    staticColor: "indigo",
    features: [
      "Desenvolvimento 100% sob medida",
      "Dashboards interativos e relatórios",
      "Gestão de usuários e permissões",
      "Automação de processos",
      "Integração com sistemas existentes",
      "API REST para integrações",
      "Banco de dados escalável",
      "Backup automático e segurança",
      "Versão mobile responsiva",
      "Treinamento da equipe",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "tRPC",
      "Redis",
    ],
    idealFor: [
      "Empresas com processos internos específicos",
      "Negócios que precisam de automação",
      "Empresas que gerenciam muitos dados",
      "Organizações que precisam de relatórios customizados",
    ],
  },
  {
    id: "apis",
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
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "APIs e Integrações",
    description:
      "Conectamos seus sistemas e automatizamos processos através de APIs robustas.",
    fullDescription:
      "Desenvolvemos APIs REST robustas e bem documentadas para conectar seus sistemas. Integrações com plataformas terceiras, webhooks, automações e microserviços. Sincronize dados entre diferentes plataformas e automatize fluxos de trabalho.",
    color: "from-purple-500 to-purple-600",
    staticColor: "purple",
    features: [
      "APIs REST escaláveis",
      "Documentação completa (Swagger/OpenAPI)",
      "Autenticação e segurança (JWT, OAuth)",
      "Webhooks para eventos em tempo real",
      "Integração com APIs terceiras",
      "Rate limiting e cache",
      "Monitoramento e logs",
      "Versionamento de API",
      "Testes automatizados",
      "Deploy em cloud",
    ],
    technologies: [
      "Next.js API Routes",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    idealFor: [
      "Empresas que precisam conectar múltiplos sistemas",
      "Negócios que querem automatizar processos",
      "Plataformas que precisam de integrações",
      "Apps mobile que precisam de backend",
    ],
  },
];

export function ServicesOverview() {
  const [selectedService, setSelectedService] = useState<
    (typeof servicesData)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: (typeof servicesData)[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Section id="services" className="bg-white dark:bg-dark-bg">
        <Container>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-white mb-4">
              Escolha o serviço ideal para você
            </h2>
            <p className="text-lg text-neutral-medium dark:text-gray-400 max-w-2xl mx-auto">
              Clique em qualquer serviço para ver todos os detalhes
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => openModal(service)}
                id={service.id}
                className="group cursor-pointer relative bg-white dark:bg-dark-card rounded-2xl p-8 border-2 border-gray-200 dark:border-dark-border hover:border-transparent hover:shadow-2xl transition-all duration-300 text-left"
              >
                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10`}
                  style={{ padding: "2px" }}
                >
                  <div className="w-full h-full bg-white dark:bg-dark-card rounded-2xl" />
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-3 group-hover:text-primary-blue dark:group-hover:text-accent-cyan transition-colors">
                  {service.title}
                </h3>

                <p className="text-neutral-medium dark:text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-primary-blue dark:text-accent-cyan font-semibold">
                  <span>Ver detalhes</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={closeModal}
          service={selectedService}
        />
      )}
    </>
  );
}

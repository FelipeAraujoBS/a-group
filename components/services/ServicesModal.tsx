"use client";

import React, { useEffect } from "react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    fullDescription: string;
    features: string[];
    technologies: string[];
    idealFor: string[];
    color: string;
    staticColor: string;
  };
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hoverColor =
    {
      blue: "hover:bg-blue-500 dark:hover:bg-blue-500",
      cyan: "hover:bg-cyan-500 dark:hover:bg-cyan-500",
      indigo: "hover:bg-indigo-500 dark:hover:bg-indigo-500",
      purple: "hover:bg-purple-500 dark:hover:bg-purple-500",
    }[service.staticColor] ?? "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-card rounded-2xl shadow-2xl animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className={`sticky cursor-pointer top-4 right-4 float-right z-10 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 ${hoverColor} transition-colors`}
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-neutral-dark dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6`}
            >
              {service.icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-white mb-4">
              {service.title}
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-400 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-4">
              Recursos Principais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
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
                  <span className="text-neutral-dark dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-4">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-blue/10 dark:bg-primary-blue/20 text-primary-blue dark:text-accent-cyan rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-4">
              Ideal Para
            </h3>
            <ul className="space-y-2">
              {service.idealFor.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-neutral-dark dark:text-gray-300"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-gray-200 dark:border-dark-border">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-blue text-white text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Solicitar Orçamento
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
              <button
                onClick={onClose}
                className="inline-flex cursor-pointer items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-neutral-dark dark:text-white text-lg font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

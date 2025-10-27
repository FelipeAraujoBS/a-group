import React from "react";
import Link from "next/link";
import { Container } from "../shared/Container";
import Image from "next/image";

import github from "@/components/imgs/github.png";
import instagram from "@/components/imgs/instagram.png";
import linkedin from "@/components/imgs/linkedin.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Contato", href: "/contato" },
];

const services = ["Sites Institucionais", "E-commerce", "Sistemas Web", "APIs"];

const socialLinks = [
  {
    img: linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/felipe-de-araujo-b87386231/",
  },
  { img: github, label: "GitHub", href: "https://github.com/FelipeAraujoBS" },
  {
    img: instagram,
    label: "Instagram",
    href: "https://www.instagram.com/felipearaujo25/",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  A
                </span>{" "}
                Group
              </h3>
              <p className="text-gray-300 text-base mb-6 max-w-md leading-relaxed">
                Seu hub de soluções tecnológicas. Transformamos ideias em
                produtos digitais escaláveis e modernos.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg flex items-center justify-center text-sm font-semibold text-white  backdrop-blur-sm transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Image
                      className="hover:scale-105"
                      src={social.img}
                      alt={social.label}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Navegação
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Serviços
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/servicos"
                      className="text-gray-300 hover:text-white transition-colors inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all duration-300" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Entre em contato</p>
                <a
                  href="mailto:contato@agroup.com"
                  className="text-xl font-semibold text-white hover:text-gray-200 transition-colors"
                >
                  contato@agroup.com
                </a>
              </div>
              <div className="md:text-right">
                <p className="text-gray-400 text-sm mb-2">Localização</p>
                <p className="text-white font-medium">
                  Salvador, Bahia - Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-400">
                © {currentYear} A Group. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Desenvolvido com</span>
                <span className="text-white font-semibold">Next.js</span>
                <span>e</span>
                <span className="text-white font-semibold">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

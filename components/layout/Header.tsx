"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "../shared/Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo com gradiente */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <span className="text-3xl font-bold text-gradient-primary">
                A
              </span>
              <span className="text-2xl font-semibold ml-1 text-primary-dark">
                Group
              </span>
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-accent-cyan" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors group text-neutral-dark"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-primary-blue" />
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contato"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white rounded-lg overflow-hidden group transition-all duration-500 ease-in-out hover:scale-105 bg-primary-blue"
            >
              <span className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
              <span className="relative z-10">Solicitar Orçamento</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full rounded-full transition-all duration-300 bg-primary-dark ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full transition-all duration-300 bg-primary-dark ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full transition-all duration-300 bg-primary-dark ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all text-neutral-dark"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-lg mt-4 transition-all hover:scale-105 bg-gradient-accent"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}

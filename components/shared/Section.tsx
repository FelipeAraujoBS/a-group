import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "light" | "dark" | "gradient";
  id?: string;
}

export function Section({
  children,
  className = "",
  background = "white",
  id,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    light: "bg-neutral-light",
    dark: "bg-primary-dark text-white",
    gradient: "bg-gradient-to-br from-primary-dark to-primary-blue text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${backgrounds[background]} ${className}`}
    >
      {children}
    </section>
  );
}

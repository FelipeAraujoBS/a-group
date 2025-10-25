import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    : "";

  return (
    <div
      className={`bg-white rounded-lg shadow-md ${paddings[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}

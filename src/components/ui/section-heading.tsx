
import React from "react";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  alignment = "center",
  className = "",
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignmentClasses[alignment]} ${className}`}>
      {subtitle && (
        <span className="inline-block text-sm tracking-wider uppercase text-primary mb-3 font-medium">
          {subtitle}
        </span>
      )}
      <h2 className="mb-4">{title}</h2>
      {description && <p className="text-lg text-jewelry-muted max-w-2xl mx-auto">{description}</p>}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const RainbowButton = ({ children, className, ...props }: RainbowButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const gradient = gradientRef.current;
    if (!button || !gradient) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gradient.style.setProperty("--x", `${x}px`);
      gradient.style.setProperty("--y", `${y}px`);
    };

    button.addEventListener("mousemove", handleMouseMove);
    return () => button.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "group relative h-12 px-6 rounded-full text-white font-medium text-sm whitespace-nowrap transition-all duration-300",
        "hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.15)]",
        className
      )}
      {...props}
    >
      {/* Background color */}
      <div className="absolute inset-0 bg-black/80 dark:bg-black rounded-full" />

      {/* Gradient */}
      <div
        ref={gradientRef}
        className="absolute inset-[-1px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          maskImage: "radial-gradient(var(--x, 0) var(--y, 0), transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(circle at var(--x, 0) var(--y, 0), black 40%, transparent 60%)",
        }}
      />

      {/* Border */}
      <div className="absolute inset-[-1px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full" />

      {/* Content */}
      <div className="relative flex items-center justify-center gap-2 px-2">
        {children}
      </div>
    </button>
  );
}; 
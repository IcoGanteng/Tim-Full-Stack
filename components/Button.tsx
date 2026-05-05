"use client";

import { forwardRef, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variants = {
  primary:
    "bg-[#8B7355] hover:bg-[#6B5344] text-white shadow-md hover:shadow-lg",
  secondary:
    "bg-[#C4A77D] hover:bg-[#D4A574] text-white shadow-md hover:shadow-lg",
  outline:
    "border-2 border-[#8B7355] hover:bg-[#8B7355]/10 text-[#8B7355] dark:text-[#C4A77D] dark:border-[#C4A77D] dark:hover:bg-[#C4A77D]/10",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      onClick,
      type = "button",
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
          inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-150 cursor-pointer
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#3D322C]
          disabled:opacity-50 disabled:cursor-not-allowed
          active:scale-[0.98]
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
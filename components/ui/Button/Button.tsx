"use client"

import { ButtonProps, buttonSize, buttonVariants } from "./button.types";

export default function Button({
  children,
  variant = "primary",
  size = "sm",
  className,
  ...props

}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg cursor-pointer
        disabled:cursor-not-allowed
        disabled:opacity-50

        ${buttonVariants[variant]}   
        ${buttonSize[size]}
        ${className ?? ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
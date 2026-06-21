import { ButtonHTMLAttributes } from "react";

export const buttonVariants = {
  primary: "bg-gray-400 text-white",
  secondary: "bg-cyan-500 text-black",
  danger: "bg-red-500 text-white",
} as const;

export type ButtonVariant =
  keyof typeof buttonVariants;


export const buttonSize = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
} as const

type ButtonSize = 
  keyof typeof buttonSize

export type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize
  };



import { ButtonHTMLAttributes } from "react";

export const buttonVariants = {
  primary: "bg-primary text-white",
  primaryOutline: "border border-primary text-black",
  secondary: "bg-accent text-white",
  secondaryOutline: "border border-accent text-black",
  danger: "bg-red-500 text-white",
  dangerOutline: "bg-red-100 border border-red-500 text-black",
  success: "bg-green-500 text-black",
  successOutline: "bg-green-100 border border-green-500 text-black"
} as const;

export type ButtonVariant =
  keyof typeof buttonVariants;


export const buttonSize = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-base",
  lg: "h-12 px-5 text-lg",
} as const

type ButtonSize = 
  keyof typeof buttonSize

export type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize
  };



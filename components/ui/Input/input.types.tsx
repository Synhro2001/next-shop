import { InputHTMLAttributes } from "react";

export const inputVariants = {
  primary: " outline-primary",
  secondary: " outline-accent",
  danger: " outline-red-500",
} as const;

export type InputVariant =
  keyof typeof inputVariants;


export const inputSize = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-base",
  lg: "h-12 px-5 text-lg",
} as const

export type InputSize = 
  keyof typeof inputSize


export type InputProps =
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & { // delete custom size from HTML using Omit
    variant?: InputVariant;
    size?: InputSize;
    label?: string;
    error?: string;
  };
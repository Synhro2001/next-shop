import { InputHTMLAttributes } from "react";

export const inputVariants = {
  primary: " outline-gray-400",
  secondary: " outline-cyan-500",
  danger: " outline-red-500",
} as const;

export type InputVariant =
  keyof typeof inputVariants;


export const inputSize = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
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
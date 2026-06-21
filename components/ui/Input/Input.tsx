"use client"

import { InputProps, inputSize, inputVariants } from "./input.types";

export default function Input({
    variant = "primary",
    size = "md",
    label,
    error,
    className,
    ...props
}: InputProps) {

  const inputId = props.id
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={inputId} className="text-sm">
            {label}
          </label>
        )}
        <input
        id={inputId}
        className={`
          rounded-lg outline-1 focus:outline-2
          ${inputVariants[variant]}
          ${inputSize[size]}
          ${error ? inputVariants.danger  : inputVariants[variant]}
          ${className ?? ""}
        `}
        {...props}
      />
      {/*On the future I can use a reusable modal window for error */}
      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      </div>
       
    );
}
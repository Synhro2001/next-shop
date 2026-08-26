"use client";

import { InputProps, inputSize, inputVariants } from "./input.types";

export default function Input({
  variant = "primary",
  size = "md",
  label,
  error,
  className,
  ...props
}: InputProps) {
  const inputId = props.id;

  return (
    <div className="relative w-full">
      <input
        {...props}
        id={inputId}
        placeholder=""
        className={`peer block  w-full appearance-none rounded-lg border bg-transparent px-3 py-3 text-sm text-heading
          outline-none transition-colors duration-200 border-default-medium focus:border-brand focus:ring-0

          ${inputVariants[variant]}
          ${inputSize[size]}
          ${error ? inputVariants.danger : ""}
          ${className ?? ""}
        `}
      />

      {label && (
        <label
          htmlFor={inputId}
          className=" pointer-events-none absolute left-3 top-1/2 z-10 origin-left
            -translate-y-1/2 bg-background px-1 text-sm text-body transition-all duration-200

            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0
            peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-fg-brand peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:scale-75
          "
        >
          {label}
        </label>
      )}

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}


"use client";

import { useState } from "react";
import { InputProps, inputSize, inputVariants } from "./input.types";
import { Eye, EyeOff } from "lucide-react";

export default function Input({
  variant = "primary",
  size = "md",
  label,
  error,
  className,
  type,
  ...props
}: InputProps) {
  const inputId = props.id;

  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === "password";

  const inputType = isPassword ? showPassword ? "text" : "password" : type;
  


  return (
    <div className="relative w-full">
      <input
        {...props}
        id={inputId}
        type={inputType}
        placeholder=""
        className={`peer block  w-full appearance-none rounded-lg border bg-transparent px-3 py-3 text-sm text-heading
          outline-none transition-colors duration-200 border-default-medium focus:ring-0

          ${inputVariants[variant]}
          ${inputSize[size]}
          ${error ? inputVariants.danger : ""}
          ${isPassword ? "pr-11" : ""}
          ${className ?? ""}
        `}
      />

      {label && (
        <label
          htmlFor={inputId}
          className=" pointer-events-none absolute left-3 top-1/2 z-10 origin-left
            -translate-y-1/2 bg-white px-1 text-sm text-body transition-all duration-200

            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0
            peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-fg-brand peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:scale-75
          "
        >
          {label}
        </label>
      )}

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="
            absolute right-3 top-1/2
            -translate-y-1/2
            text-gray-500
            hover:text-black
          "
          aria-label={
            showPassword ? "Hide password" : "Show password"
          }
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      )}

      {error && (
        <span className="absolute left-0 top-full mt-1 text-sm leading-4 text-red-500">
        {error}
        </span>
      )}

    </div>
  );
}


export type SpinnerProps = {
    className?: string;
    size?: SpinnerSize;
}

export const spinnerSizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
} as const

export type SpinnerSize =
    keyof typeof spinnerSizes
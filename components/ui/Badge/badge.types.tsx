
export type BadgeProps = {
    children: React.ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
    className?: string;
}

export const badgeVariants = {
    default: "bg-blue-200 text-blue-500",
    success: "bg-green-200 text-green-500",
    danger: "bg-red-200 text-red-500",
    warning: "bg-yellow-200 text-yellow-500"
} as const

export type BadgeVariant = 
    keyof typeof badgeVariants;

export const badgeSize = {
    sm: "px-1.5 py-0.5 text-xs",
    md: "px-2 py-1 text-base",
    lg: "px-2.5 py-1.5 text-lg",
} as const

export type BadgeSize =
    keyof typeof badgeSize
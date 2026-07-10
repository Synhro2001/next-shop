
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
    sm: "h-4 w-14 text-xs",
    md: "h-6 w-20 text-sm",
    lg: "h-8 w-20 ",
} as const

export type BadgeSize =
    keyof typeof badgeSize
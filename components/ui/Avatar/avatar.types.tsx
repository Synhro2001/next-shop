
export type AvatarProps = {
    src?: string;
    alt?: string;
    name?: string;
    size?: AvatarSize;
    className?: string

}

export const avatarSize = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg",
} as const

export type AvatarSize = 
    keyof typeof avatarSize 
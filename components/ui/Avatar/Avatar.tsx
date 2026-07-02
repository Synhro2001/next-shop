import { User } from "lucide-react";
import { AvatarProps, avatarSize } from "./avatar.types";
import Image from "next/image";
import { getAvatarColor } from "./avatar.utils";

export default function Avatar ({
    src,
    alt,
    name,
    size = "sm",
    className
}: AvatarProps) {

    const initials = name?.split(" ")
            .slice(0, 2)
            .map((word) => word[0])
            .join('')
            .toUpperCase()


    const backgroundColor = getAvatarColor(name ?? "")

    return (
        <div
        style={{ backgroundColor }} 
        className={`flex items-center justify-center
            rounded-full overflow-hidden
            relative
            ${avatarSize[size]}
            ${className ?? ""}
            
            `}
          
        >
            {src ? (
                <Image
                    src={src}
                    alt={alt ?? name ?? "Avatar"}
                    fill
                    className="object-cover"
                />
            ) : name ? (
                <span>{initials}</span>

            ) : (
                <User className="w-1/2 h-1/2"/>
            )}            
        </div>
    )
}
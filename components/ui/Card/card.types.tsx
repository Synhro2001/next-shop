import { HTMLAttributes } from "react";


export type CardProps = 
    HTMLAttributes<HTMLDivElement> & {
        children?: React.ReactNode;
    }
   
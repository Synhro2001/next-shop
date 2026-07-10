export type Category = {
    id: string;
    title: string;
    image: string;
}

export type CategorySliderProps = {
    categories: Category[]
}

export type CategoryItemProps = Category & {
    active?: boolean;
    onClick?: () => void

    // disabled?: boolean
    // badge?: React.ReactNode;
}
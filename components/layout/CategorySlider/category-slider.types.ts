export type Category = {
    id: string;
    title: string;
    image: string;
}

export type CategorySliderProps = {
    categories: Category[]
}

export type CategoryItemProps = {
    title: string;
    image: string;

    active?: boolean;

    onClick?: () => void

    // disabled?: boolean
    // badge?: React.ReactNode;
}
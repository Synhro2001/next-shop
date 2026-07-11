export type Category = {
    id: string;
    title: string;
    image: string;
}

export type CategorySliderProps = {
    categories: Category[];
    selectedCategory: string;
    onChangeCategory: (value: string) => void; 
}

export type CategoryItemProps = Category & {
    active?: boolean;
    onClick?: () => void

    // disabled?: boolean
    // badge?: React.ReactNode;
}
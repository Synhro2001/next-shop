import { ReactNode } from "react";

export type SearchBarProps = {
    value?: string;
    defaultValue?: string;

    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;

    placeholder?: string;

    showFilter?: boolean;
    onFilterClick?: () => void;

    filterContent?: ReactNode

    loading?: boolean;

    disabled?: boolean;

    className?: string
}
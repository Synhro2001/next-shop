
export type ProductProps = {
    id: string;
    title: string;
    description: string; 
    image: string;
    price?: number;
    rating?: number;
    reviews?: number;
    category?: string;
}
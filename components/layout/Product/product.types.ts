
export type ProductProps = Product;

export type Product = {
    id: string;
    title: string;
    image: string;

    description?: string; 
    price?: number;
    rating?: number;
    reviews?: number;
    categoryId: string;
    
    productBadge?: ProductBadge
   
}


export enum ProductBadge {
    IProductPopular,
    IProductNew
}

export interface IProductPopular {
    productBadgeName: "Popular"
    productBadgeVariant: "default"
}


export interface IProductNew {
    productBadgeName: "New"
    productBadgeVariant: "success"
}



export type ProductGridProps = {
    products: Product[]
}
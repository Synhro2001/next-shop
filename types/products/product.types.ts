export type Product = {
    id: string;
    title: string;

    images: string[];

    description?: string;

    price: number;
    rating?: number;
    reviews?: number;

    categoryId: string;

    location?: string;

    latitude?: number;
    longitude?: number

    createdAt?: string;
    seller: Seller;

    badge?: ProductBadge;
};

export type CreateProductProps = {
    title: string;

    price: number;

    categoryId: string;

    seller: Seller;

    images: string[];

    description?: string;

    rating?: number;

    reviews?: number;

    location?: string;

    badge?: ProductBadge;
};
export type Seller = {
    id: string;
    name: string;
    avatar: string;
};


export enum ProductBadge {
    Popular = "popular",
    New = "new"
}


export type ProductProps = Product;


export type ProductGridProps = {
    products: Product[]
}

// export type Product = {
//     id: string;
//     title: string;
    
//     images: string[];

//     description?: string; 
//     price?: number;

//     rating?: number;
//     reviews?: number;

//     categoryId: string;

//     location?: string;
//     createdAt?: string;
    
//     seller: {
//         id: string;
//         name: string;
//         avatar: string
//     };
    
//     productBadge?: ProductBadge
   
// }

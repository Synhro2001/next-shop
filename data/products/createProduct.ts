import { CreateProductProps, Product } from "../../types/products/product.types";


export function createProduct(
    props: CreateProductProps
): Product {

    return {
    ...props,
   
};

}

import EmptyState from "@/components/ui/EmptyState"
import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo"
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import { getProducts } from "@/lib/products/getProducts"

export default async  function ProductPage({
    params,
}: {params: Promise<{id: string}>}) {
    const products = await getProducts();
    const {id} = await params
    
    const currentProduct = products.find((product) =>
        product.id === id 
    )
    

    if (!currentProduct) {
        return <EmptyState title="Not found"/>
    }

    const relatedProducts = products.filter((product) => {
        return (
            product.categoryId === currentProduct.categoryId &&
            product.id !== currentProduct.id
        );
    }).slice(0,3);


    return (
        <div className="relative flex flex-col">
            <ProductGallery product={currentProduct}/>
            <div className="bg-white rounded-t-3xl -mt-8 relative z-10">
                <div className="p-4 flex flex-col gap-6">
                    
                    <div className="">
                        <ProductInfo product={currentProduct}/>
                    </div>
                    <div>
                        <RelatedProducts relatedProducts={relatedProducts}/>
                    </div>
                  
                </div>
    
            

            </div>
             
           
        </div>
    )
}
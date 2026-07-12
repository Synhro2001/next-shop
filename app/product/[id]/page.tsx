
import { products } from "@/components/layout/Product/product.data"
import EmptyState from "@/components/ui/EmptyState"
import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo"

export default async  function ProductPage({
    params,
}: {params: Promise<{id: string}>}) {
    const {id} = await params
    
    const currentProduct = products.find((product) =>
        product.id === id 
    )
    

    if (!currentProduct) {
        return <EmptyState title="Not found"/>
    }

    return (
        <div className="relative flex flex-col">
            <ProductGallery product={currentProduct}/>
            <div className="bg-white rounded-t-3xl -mt-8 relative z-10">
                <div className="p-4">
                    <ProductInfo product={currentProduct}/>
                </div>
               
            </div>
       

           
        </div>
    )
}
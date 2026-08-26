
import EmptyState from "@/components/ui/EmptyState"
import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo"
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import ProductGoogleMap from "@/components/layout/ProductGoogleMap/ProductGoogleMap"
import { getProductById } from "@/lib/products/getProductById"
import { getRelatedProducts } from "@/lib/products/getRelatedProducts"

export default async  function ProductPage({
    params,
}: {params: Promise<{id: string}>}) {
    const {id} = await params
    
    const currentProduct = await getProductById(id)

    if (!currentProduct) {
        return <EmptyState title="Not found"/>
    }

    const relatedProducts = await getRelatedProducts(currentProduct.categoryId, currentProduct.id)

    // const relatedProducts = products.filter((product) => {
    //     return (
    //         product.categoryId === currentProduct.categoryId &&
    //         product.id !== currentProduct.id
    //     );
    // }).slice(0,3);


    return (
        <div className="relative flex flex-col">
            <ProductGallery product={currentProduct}/>
            <div className="bg-white rounded-t-3xl -mt-8 relative z-10">
                <div className="p-4 flex flex-col gap-6">
                    
                    <div className="">
                        <ProductInfo product={currentProduct}/>
                    </div>

                    <div className="mt-4">
                        {
                            currentProduct.latitude !== undefined &&
                            currentProduct.longitude !== undefined && (
                                <ProductGoogleMap
                                    latitude={currentProduct.latitude}
                                    longitude={currentProduct.longitude}
                                />
                            )
                        }
                      
                    </div>
                    <div>
                        <RelatedProducts relatedProducts={relatedProducts}/>
                    </div>
                  
                </div>
    
            

            </div>
             
           
        </div>
    )
}
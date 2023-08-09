import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

//this is to ensure its not cached
export const revalidate = 0

const Homepage = async () => {
    const products = await getProducts({isFeatured: true})
    const billboard = await getBillboard("45b5592f-d9a1-48ec-90d7-ccecee480c9b")
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard 
                    data={billboard}
                />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products}/>
            </div>
        </Container>
    );
};

export default Homepage;
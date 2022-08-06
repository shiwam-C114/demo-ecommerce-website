import { Box } from "@chakra-ui/react";
import * as React from "react";
import { ProductCard } from "../Components/ProductCard";
import { ProductGrid } from "../Components/ProductGrid";

export const Home = () => {
    const [products, setProducts] = React.useState([])

    function fetchProducts() {
        fetch("http://localhost:8080/products").then(res => res.json()).then(data => {
            setProducts(data)
        });
    }
    React.useEffect(() => {
      fetchProducts()
    }, [])
    

    return (
        <Box
            maxW="7xl"
            mx="auto"
            px={{
                base: "4",
                md: "8",
                lg: "12",
            }}
            py={{
                base: "6",
                md: "8",
                lg: "12",
            }}>
            <ProductGrid>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ProductGrid>
        </Box>
    )
}

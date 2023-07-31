import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

export default function Store() {
    const [products, setProducts] = useState(null);
    const [category, setCategory] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then(res => {
                if (res.status >= 400) {
                  throw new Error("Something went wrong");
                }
                return res.json();
              })
            .then(json => setProducts(json))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false))
    }, []);

    const displayProduct = category ? products.filter((product) => product.category === category) : products;

    return (
        <main>
            <h1>Store</h1>
            <div>
                <button onClick={() => setCategory("women's clothing")}>Women</button>
                <button onClick={() => setCategory("men's clothing")}>Men</button>
                <button onClick={() => setCategory("jewelery")}>Jewelery</button>
            </div>
            {isLoading && <p>Loading...</p>}
            {products && 
                <section className="product-list">
                    {
                        displayProduct.map((product) => {
                            return <ProductCard key={product.id} product={product}/>
                        })
                    }
                </section>
            }
            {error && <p>A network error occurred</p>}
        </main>
    )
}
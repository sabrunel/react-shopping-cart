import { AppContext } from "../App";
import ProductCard from "../components/ProductCard";
import { useState, useEffect, useContext } from "react";

export default function Store() {
    const [store, setStore] = useState(null);
    const [category, setCategory] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { updateProductList } = useContext(AppContext);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then(res => {
                if (res.status >= 400) {
                  throw new Error("Something went wrong");
                }
                return res.json();
              })
            .then(json => json.filter((item) => item.category !== "electronics"))
            .then(json => setStore(json))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false))
    }, []);

    useEffect(() => {
        updateProductList(store);
    },  [store, updateProductList])

    const displayProduct = category ? store.filter((product) => product.category === category) : store;

    return (
        <main className="container mx-auto px-8 py-8">
            <h1 className="text-4xl font-bold mb-8">Browse our collection</h1>
            <div className="flex justify-around md:justify-center md:gap-x-10 lg:justify-start">
                <button className="px-4 py-2 no-underline border-solid border border-slate-200 bg-white hover:bg-slate-50 text-black hover:text-slate-700 rounded-md" onClick={() => setCategory("")}>All</button>
                <button className="px-4 py-2 no-underline border-solid border border-slate-200 bg-white hover:bg-slate-50 text-black hover:text-slate-700 rounded-md" onClick={() => setCategory("women's clothing")}>Women</button>
                <button className="px-4 py-2 no-underline border-solid border border-slate-200 bg-white hover:bg-slate-50 text-black hover:text-slate-700 rounded-md" onClick={() => setCategory("men's clothing")}>Men</button>
                <button className="px-4 py-2 no-underline border-solid border border-slate-200 bg-white hover:bg-slate-50 text-black hover:text-slate-700 rounded-md" onClick={() => setCategory("jewelery")}>Jewelery</button>
            </div>
            {isLoading && <p className="text-xl text-center">Loading products...</p>}
            {store && 
                <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 py-8 mx-auto my-8">
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
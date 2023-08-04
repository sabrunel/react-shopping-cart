import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Product() {
    const { id } = useParams();
    const { productList, addToCartHandler} = useContext(AppContext);


    const product = productList.find((product) => {
        return product.id === parseInt(id);
    })

    return (
        <main className="flex-grow flex items-center">
            <section className="max-w-3xl mx-auto flex items-center gap-8">
                    <img className="max-w-[300px]" src={product.image} alt="" />
                    <div className="flex flex-col gap-8">
                        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                        <p>{product.description}</p>
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-xl font-semibold"> ${product.price}</p>
                            <button className="px-4 py-2 no-underline bg-slate-800 hover:bg-black text-white rounded-md" onClick={() => addToCartHandler(product)}>Add to cart</button>
                        </div>
                    </div>
            </section>
        </main>
    )
}

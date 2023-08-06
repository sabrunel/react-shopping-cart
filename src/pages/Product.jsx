import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Product() {
    const { id } = useParams();
    const { productList, addToCartHandler} = useContext(AppContext);

    const product = productList.find((product) => {
        return product.id === parseInt(id);
    })

    const { image, title, description, price, rating } = product;

    return (
        <main className="flex-grow flex items-center px-8">
            <section className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <img className="max-w-[300px]" src={image} alt="" />
                    <div className="flex flex-col gap-8">
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <div className="flex gap-x-2 text-slate-600 text-xs">
                            <p><span className="text-black">&#9733;</span> {rating.rate}/5</p>
                            <p>({rating.count} votes)</p>
                        </div>
                        <p>{description}</p>
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-xl font-semibold"> ${price}</p>
                            <button className="px-4 py-2 no-underline bg-slate-800 hover:bg-black text-white rounded-md" onClick={() => addToCartHandler(product)}>Add to cart</button>
                        </div>
                    </div>
            </section>
        </main>
    )
}

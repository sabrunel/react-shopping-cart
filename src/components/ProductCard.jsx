import PropTypes from 'prop-types';
import { AppContext } from '../App';
import { useContext } from "react";
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    const { addToCartHandler } = useContext(AppContext);

    return (
        <article className="flex flex-col justify-between">
            <div className="h-96 overflow-hidden border-solid border-slate-200 border mb-6 rounded-md">
                <div className="h-full w-full flex justify-center items-center group">
                    <picture className="w-60 mx-auto flex justify-center items-center">
                        <img className="max-h-60 group-hover:scale-110 transition ease-in-out duration-300" src={product.image} alt="" />
                    </picture>
                </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <p className="uppercase mb-2 text-slate-600"> {product.category} </p>
                <Link to={`/product/${product.id}`}>
                    <h2 className="font-semibold mb-2 hover:underline"> {product.title} </h2>
                </Link>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-xl font-semibold"> ${product.price}</p>
                    <button className="px-4 py-2 no-underline bg-slate-800 hover:bg-black text-white rounded-md" onClick={() => addToCartHandler(product)}>Add to cart</button>
                </div>
            </div>
        </article>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object,
  };
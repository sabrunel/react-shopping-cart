import PropTypes from 'prop-types';
import { AppContext } from '../App';
import ProductRating from './ProductRating';
import { useContext } from "react";
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    const { addToCartHandler } = useContext(AppContext);
    console.log(product)

    const { image, category, id, title, price, rating } = product;

    return (
        <article className="flex flex-col justify-between relative">
            <div className="h-96 overflow-hidden border-solid border-slate-200 border mb-4 rounded-md">
                <div className="h-full w-full flex justify-center items-center group">
                    <p className="uppercase text-sm text-slate-600 absolute top-4 right-4"> {category} </p>
                    <div className="flex items-center gap-x-2 absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
                        <ProductRating rating={rating.rate} />
                        <p className="text-xs">{rating.rate}</p>
                    </div>
                    <picture className="w-60 mx-auto flex justify-center items-center">
                        <img className="max-h-60 group-hover:scale-110 transition ease-in-out duration-300" src={image} alt="" />
                    </picture>
                </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <Link to={`/product/${id}`}>
                    <h2 className="text-md font-semibold mb-2 hover:underline"> {title} </h2>
                </Link>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-xl font-semibold"> ${price}</p>
                    <button className="px-4 py-2 no-underline bg-slate-800 hover:bg-black text-white rounded-md" onClick={() => addToCartHandler(product)}>Add to cart</button>
                </div>
            </div>
        </article>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object,
  };
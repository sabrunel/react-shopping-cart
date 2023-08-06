import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CartItem({ product }) {

    const { image, id, title, price, quantity } = product;

    return (
        <article className="flex items-center gap-x-6 border-b border-slate-200 py-2">
            <div className="min-h-[150px] flex flex-center items-center">
                <img className="max-w-[100px]" src={image} alt="" />
            </div>
            <div className="flex flex-col w-full">
                <Link to={`/product/${id}`}>
                    <h2 className="uppercase mb-4 hover:underline"> {title} </h2>  
                </Link>            
                <div className="flex justify-between items-center">
                    <p> Quantity: {quantity} </p>
                    <h3 className="font-semibold"> ${(price * quantity).toFixed(2)} </h3>
                </div>
            </div>
        </article>
    )
}

CartItem.propTypes = {
    product: PropTypes.object,
  };
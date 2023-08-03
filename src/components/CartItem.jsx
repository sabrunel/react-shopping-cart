import PropTypes from 'prop-types';

export default function CartItem({ product }) {

    return (
        <article className="flex items-center gap-x-6 border-b border-slate-200 py-2">
            <div className="min-h-[150px] flex flex-center items-center">
                <img className="max-w-[100px]" src={product.image} alt="" />
            </div>
            <div className="flex flex-col w-full">            
                <h2 className="uppercase mb-4"> {product.title} </h2>
                <div className="flex justify-between items-center">
                    <p> Quantity: {product.quantity} </p>
                    <h3 className="font-semibold"> ${(product.price * product.quantity).toFixed(2)} </h3>
                </div>
            </div>
        </article>
    )
}

CartItem.propTypes = {
    product: PropTypes.object,
  };
import PropTypes from 'prop-types';
import { AppContext } from '../App';
import { useContext } from "react";

export default function ProductCard({ product }) {
    const { setCart } = useContext(AppContext);

    function addToCart(cartItem) {
        setCart((currentCart) => {
            let itemInCart = currentCart.find((currentItem) => currentItem.id === cartItem.id);

            if (itemInCart) {
                itemInCart.quantity++

                return (
                    currentCart.map((currentItem) => {
                        if (currentItem.id === itemInCart.id) {
                            return itemInCart
                        }

                        return currentItem;
                    })
                ) 
            } else {
                return [...currentCart,
                    {
                        ...cartItem,
                        quantity: 1
                    }
                ]
            }
        })
    }

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
                <h2 className="font-semibold mb-2"> {product.title} </h2>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-xl font-semibold"> ${product.price}</p>
                    <button className="px-4 py-2 no-underline bg-slate-800 hover:bg-black text-white rounded-md" onClick={() => addToCart(product)}>Add to cart</button>
                </div>
            </div>
        </article>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object,
  };
import PropTypes from 'prop-types';
import { AppContext } from '../App';
import { useContext } from "react";

export default function ProductCard({ product }) {
    const { setCart } = useContext(AppContext);

    function addToCart(product) {
        setCart((currentCart) => {
            return [...currentCart,
                product
            ]
        })
    }

    return (
        <article>
            <picture>
                <img src={product.image} alt="" />
            </picture>
            <div>
            <p> {product.category} </p>
                <h2> {product.title} </h2>
                <p> {product.description} </p>
                <p> {product.price}$</p>
                <div>
                    <p> {product.rating.rate} </p>
                    <p> {product.rating.count} </p>
                </div>
            </div>
            <button onClick={() => addToCart(product)}>Add to cart</button>
        </article>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object,
  };
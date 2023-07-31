import PropTypes from 'prop-types';

export default function CartItem({ product }) {

    return (
        <article>
            <img src={product.image} alt="" />
            <div>            
                <h2> {product.title} </h2>
                <p> {product.price * product.quantity}$ </p>
                <p> {product.quantity} </p>
            </div>
        </article>
    )
}

CartItem.propTypes = {
    product: PropTypes.object,
  };
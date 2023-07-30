import PropTypes from 'prop-types';

export default function CartItem({ cartItem }) {

    return (
        <article>
            <h2> {cartItem.title} </h2>
            <p> {cartItem.price} </p>
            <p> {cartItem.quantity} </p>
        </article>
    )
}

CartItem.propTypes = {
    cartItem: PropTypes.object,
  };
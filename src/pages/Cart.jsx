import { Link } from "react-router-dom";
import { AppContext } from '../App';
import { useContext } from "react";
import CartItem from "../components/CartItem";

export default function Cart() {
    const { cart } = useContext(AppContext);

    function computeTotalPrice(products) {
        return (
            products.reduce((sum, product) => {
                return sum + (product.quantity * product.price);
            }, 0)
        )
    }
    
    return (
        <main>
            <h1>Cart</h1>
            <section>
                { cart.length === 0 && <p>There are no items in your cart </p>}
                { cart.map((cartItem) => {
                    return  (
                        <CartItem 
                            key={cartItem.id}
                            product={cartItem}
                        />
                    )
                })}
            </section>
            <section>
                <h2>Total</h2>
                <p>{computeTotalPrice(cart).toFixed(2)}$</p>
            </section>
            <Link to="/store">
                <span>&#8592;</span> Continue shopping
            </Link>
        </main>
    )
}
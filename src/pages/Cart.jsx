import { Link } from "react-router-dom";
import { AppContext } from '../App';
import { useContext } from "react";
import CartItem from "../components/CartItem";

export default function Cart() {
    const { cart } = useContext(AppContext);

    return (
        <main>
            <h1>Cart</h1>
            <div>
                { cart.length === 0 && <p>There are no items in your cart </p>}
                { cart.map((cartItem) => {
                    return  (
                        <CartItem 
                            key={cartItem.id}
                            cartItem = {cartItem}
                        />
                    )
                })}
            </div>
            <Link to="/store">
                <span>&#8592;</span> Continue shopping
            </Link>
        </main>
    )
}
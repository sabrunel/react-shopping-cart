import { Link } from "react-router-dom";
import { AppContext } from '../App';
import { useContext } from "react";
import CartItem from "../components/CartItem";

export default function Cart() {
    const { cart } = useContext(AppContext);

    const SHIPPING = 10;

    function computeTotalPrice(products) {
        return (
            products.reduce((sum, product) => {
                return sum + (product.quantity * product.price);
            }, 0)
        )
    }
    
    return (
        <main className="max-w-2xl px-32 py-8">
            <h1 className="text-4xl font-bold mb-8">Cart</h1>
            <Link to="/store">
                <span>&#8592;</span> Continue shopping
            </Link>
            <section className="py-10">
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
            {cart.length > 0 && 
                <section>
                    <div className="flex justify-between items-center">
                        <p>Shipping</p>
                        <p className="font-semibold">${SHIPPING}</p>
                    </div>
                    <button className="w-full inline-block py-3 my-2 bg-slate-800 hover:bg-black text-white text-xl rounded-md">
                        ORDER - ${(computeTotalPrice(cart) + SHIPPING).toFixed(2)}
                    </button>
                </section>
            }
        </main>
    )
}
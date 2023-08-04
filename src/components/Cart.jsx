import { AppContext } from '../App';
import { useContext } from "react";
import CartItem from "./CartItem";

export default function Cart() {
    const { cart, showCart, setShowCart } = useContext(AppContext);

    const SHIPPING = 10;

    function computeTotalPrice(products) {
        return (
            products.reduce((sum, product) => {
                return sum + (product.quantity * product.price);
            }, 0)
        )
    }
    
    return (
        <aside className={`${showCart ? "right-0" : "-right-full"} max-w-[30vw] h-full overflow-scroll fixed py-8 px-6 top-0 bg-white shadow-lg transition-all duration-300 z-50`}>
            <h1 className="text-4xl font-bold mb-8">Cart</h1>
            <button onClick={() => setShowCart(false)}><span>&#8592;</span></button>
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
        </aside>
    )
}
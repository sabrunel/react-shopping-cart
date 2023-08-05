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
        <aside className={`${showCart ? "right-0" : "-right-full"} w-full md:max-w-[40vw] lg:max-w-[30vw] h-full overflow-scroll fixed py-8 px-6 top-0 bg-white shadow-lg transition-all duration-300 z-50`}>
            <header>
                <button className="text-2xl font-bold" onClick={() => setShowCart(false)}><span>&#8592;</span></button>
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Cart</h1>
                    <div className="flex justify-center items-center bg-black text-white text-xs w-5 h-5 rounded-full">{cart.length}</div>
                </div>
            </header>
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
                <footer>
                    <div className="flex justify-between items-center">
                        <p>Shipping</p>
                        <p className="font-semibold">${SHIPPING}</p>
                    </div>
                    <button className="w-full inline-block py-3 my-2 bg-slate-800 hover:bg-black text-white text-xl rounded-md">
                        ORDER - ${(computeTotalPrice(cart) + SHIPPING).toFixed(2)}
                    </button>
                </footer>
            }
        </aside>
    )
}
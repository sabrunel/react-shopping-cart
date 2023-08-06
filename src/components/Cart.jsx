import { AppContext } from '../App';
import { useContext } from "react";
import CartItem from "./CartItem";
import { MdOutlineClose } from "react-icons/md";

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
        <div className="bg-black bg-opacity-30 z-10 fixed top-0 left-0 w-full h-full">
            <aside className={`${showCart ? "right-0" : "-right-full"} w-full md:max-w-[40vw] lg:max-w-[30vw] h-full overflow-scroll fixed py-10 px-8 top-0 bg-white shadow-lg transition-all duration-300 z-50 pointer-events-auto`}>
                <header className="relative border-b border-slate-200 py-2">
                    <button aria-label="Close cart" className="text-2xl font-bold absolute left-0 bottom-12" onClick={() => setShowCart(false)}>    
                        <MdOutlineClose />
                    </button>
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold">You cart</h1>
                        <div className="flex justify-center items-center bg-black text-white text-xs w-5 h-5 rounded-full">{cart.length}</div>
                    </div>
                </header>
                <section className="py-10">
                    { cart.length === 0 && <p>There are no items in your cart. </p>}
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
                        <button aria-label="Proceed to checkout" className="w-full inline-block py-3 my-2 bg-slate-800 hover:bg-black text-white text-xl rounded-md">
                            ORDER NOW - ${(computeTotalPrice(cart) + SHIPPING).toFixed(2)}
                        </button>
                    </footer>
                }
            </aside>
        </div>
    )
}
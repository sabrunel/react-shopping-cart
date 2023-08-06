import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Navigation({ cart, showCart }) {

    return (
        <header className="container mx-auto px-8 py-8 flex justify-between items-center">
            <NavLink to="/" className="text-xl tracking-wide font-light inline-block"> COMFORT<span className="font-semibold">ZONE</span> </NavLink>
            <nav aria-label="Primary navigation">
                <ul className="list-none flex gap-x-12">
                    <li>
                        <NavLink to="/store"> Store </NavLink>
                    </li>
                    <li>
                        <button className="relative" aria-label="Show cart" onClick={() => showCart(true)}>Cart <span className="absolute left-8 bottom-4 flex justify-center items-center bg-black text-white text-xs w-5 h-5 rounded-full">{cart.length}</span></button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


Navigation.propTypes = {
    cart: PropTypes.array,
    showCart: PropTypes.func
  };
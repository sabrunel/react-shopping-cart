import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function Navigation({ cart, showCart }) {
    const [cartSize, setCartSize] = useState(0);

    useEffect(() => {
        setCartSize(cart.length);
    }, [cart])

    return (
        <header className="container mx-auto px-8 py-8 flex justify-between items-center">
            <NavLink to="/" className="text-xl tracking-wide font-light inline-block"> COMFORT<span className="font-semibold">ZONE</span> </NavLink>
            <nav>
                <ul className="list-none flex gap-x-12">
                    <li>
                        <NavLink to="/store"> Store </NavLink>
                    </li>
                    <li>
                        <button className="relative" onClick={() => showCart(true)}>Cart <span className="absolute left-8 bottom-4 flex justify-center items-center bg-black text-white text-xs w-5 h-5 rounded-full">{cartSize}</span></button>
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
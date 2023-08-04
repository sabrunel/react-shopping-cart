import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function Navigation({ cart, showCart }) {
    const [cartSize, setCartSize] = useState(0);

    useEffect(() => {
        setCartSize(cart.length);
    }, [cart])

    return (
        <header className="px-32 py-8 flex justify-between items-center">
            <NavLink to="/" className="text-2xl tracking-wide font-semibold"> COMFORTZONE </NavLink>
            <nav>
                <ul className="list-none flex gap-x-12">
                    <li>
                        <NavLink to="/"> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/store"> Store </NavLink>
                    </li>
                    <li>
                        <button onClick={() => showCart(true)}>Cart ({cartSize})</button>
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
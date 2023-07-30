import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function Navigation({ cart }) {
    const [cartSize, setCartSize] = useState(0);

    useEffect(() => {
        setCartSize(cart.length);
    }, [cart])

    return (
        <header>
            <NavLink to="/"> Logo </NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/"> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/store"> Store </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart"> Cart ({cartSize})</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


Navigation.propTypes = {
    cart: PropTypes.array,
  };
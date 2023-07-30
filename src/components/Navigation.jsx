import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Navigation({ cart }) {
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
                        <NavLink to="/cart"> Cart ({cart.length})</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


Navigation.propTypes = {
    cart: PropTypes.array,
  };
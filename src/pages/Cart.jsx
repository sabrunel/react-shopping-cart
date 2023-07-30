import { Link } from "react-router-dom";
import { AppContext } from '../App';
import { useContext } from "react";

export default function Cart() {
    const { cart } = useContext(AppContext);

    return (
        <main>
            <h1>Cart</h1>
            <Link to="/">
                <span>&#8592;</span> Go back
            </Link>
            <div>
            { cart.map((product) => {
                return  (
                    <article key={product.id}>
                        <h2> {product.title} </h2>
                    </article>
                )
            })}
            </div>
        </main>
    )
}
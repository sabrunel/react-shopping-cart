import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";
import Navigation from "./components/Navigation";
import Cart from "./components/Cart";

export const AppContext = createContext();

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [productList, setProductList] = useState([]);

  function updateProductList(store) {
    setProductList(store)
  }

  function addToCartHandler(cartItem) {
    setCart((currentCart) => {
        let itemInCart = currentCart.find((currentItem) => currentItem.id === cartItem.id);

        if (itemInCart) {
            itemInCart.quantity++

            return (
                currentCart.map((currentItem) => {
                    if (currentItem.id === itemInCart.id) {
                        return itemInCart
                    }

                    return currentItem;
                })
            ) 
        } else {
            return [...currentCart,
                {
                    ...cartItem,
                    quantity: 1
                }
            ]
        }
    })
}

  return (
    <div className="font-primary flex flex-col min-h-screen">
      <Navigation cart={cart} showCart={setShowCart}/>
      <AppContext.Provider value={{productList, updateProductList, cart, addToCartHandler, showCart, setShowCart}}>
        {showCart && <Cart />}
        <Outlet />
      </AppContext.Provider>
    </div>
  )
}
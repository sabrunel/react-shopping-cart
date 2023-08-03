import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";
import Navigation from "./components/Navigation";

export const AppContext = createContext();

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="font-primary">
      <Navigation cart={cart}/>
      <AppContext.Provider value={{cart, setCart}}>
        <Outlet />
      </AppContext.Provider>
    </div>
  )
}
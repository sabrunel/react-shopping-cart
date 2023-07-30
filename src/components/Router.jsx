import App from '../App.jsx';
import Home from '../pages/Home.jsx';
import Store from '../pages/Store.jsx';
import Error from '../pages/Error.jsx';
import Cart from '../pages/Cart.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          errorElement: <Error/>,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "store",
              element: <Store />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
          ]
        },
      ]);

    return <RouterProvider router={router} />;
}

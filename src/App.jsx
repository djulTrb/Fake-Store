import "./App.css";
import FakeStore from "./projects/FakeStore/FakeStore";
import { Provider } from "react-redux";

import store from "./projects/FakeStore/StoreSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./projects/FakeStore/Components/NotFound";
import ActualStore from "./projects/FakeStore/ActualStore";
import Cart from "./projects/FakeStore/Components/Cart";
import WishList from "./projects/FakeStore/Components/WishList";
import Reviews from "./projects/FakeStore/Components/Reviews";
import { ThemeProvider } from "@material-tailwind/react";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FakeStore />,
      errorElement: <NotFound />,
    },
    {
      path: "/store",
      element: <ActualStore />,
      children: [
        {
          path: "/store/cart",
          element: <Cart />,
        },
        {
          path: "/store/wishlist",
          element: <WishList />,
        },
        {
          path: "/store/product/:productId",
          element: <Reviews />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;

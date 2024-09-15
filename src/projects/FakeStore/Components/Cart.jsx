import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate, useOutletContext } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import cartPicture from "./images/cart2.png";

import { BsTrash3Fill, BsArrowLeft } from "react-icons/bs";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.commerce);
  const [TotalPrice, setTotalPrice] = useState(0);
  const { setIsWindowOpen } = useOutletContext();

  useEffect(() => {
    setIsWindowOpen(true);
  }, []);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => (total += item.price));
    setTotalPrice(total);
  }, [cart.length]);

  function removeFromCart(productId) {
    const cartProducts = cart.filter((item) => item.id !== productId);

    dispatch({
      type: "commerce/removeFromCart",
      payload: cartProducts,
    });

    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }

  const notifyItemRemovedFromCart = (title) =>
    toast.error(`${title} is removed from your Cart`, {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: true,
      theme: "colored",
    });

  return (
    <>
      <div className="opacity-80 backdrop-blur-xl bg-black fixed top-0 left-0 w-full h-full z-30"></div>
      <div className="sm:w-5/6 fixed sm:top-1/2 sm:left-1/2 pb-3 sm:-translate-x-1/2 sm:-translate-y-1/2 rounded-xl border bg-neutral-100 text-neutral-700 border-rose-700 z-40 xxxs:top-10  xxxs:w-full">
        <button
          className="group absolute -top-10 left-0 flex text-rose-700 bg-white rounded-full py-1 items-center sm:w-40 xxxs:max-sm:text-sm xxxs:w-32 xxxs:max-sm:-top-8 justify-center"
          onClick={() => {
            navigate("/store");
            setIsWindowOpen(false);
          }}
        >
          <BsArrowLeft className="w-0 inline group-hover:w-7 text-xl font-extrabold transition-all duration-500 mx-1" />
          Back to store
        </button>
        <header className="sm:px-10 sm:py-3 xxxs:p-1 border-b flex justify-between border-zinc-700">
          <h2 className="text-2xl font-black text-neutral-700 xxxs:max-sm:hidden">
            Your Cart:{" "}
          </h2>{" "}
          <p className="font-semibold xxxs:text-base xxxs:max-xs:ml-3 xs:text-lg text-neutral-600">
            Total:{" "}
            <span className="font-black text-emerald-600 ">
              {TotalPrice.toFixed(2)}$
            </span>
          </p>
        </header>
        {cart.length !== 0 ? (
          <ul
            className={`overflow-y-scroll sm:p-2 py-4 h-96 mt-3 sm:mx-2 xxxs:max-sm:mx-1 xxxs:max-sm:px-1 bg-indigo-100 rounded-lg grid xxxs:max-lg:grid-cols-1 gap-4 md:max-custom:pr-20 custom:max-lg:pr-32 ${
              cart.length > 2 && cart.length < 5
                ? "lg:grid-cols-customCart lg:grid-rows-customR"
                : "lg:grid-cols-2"
            } `}
          >
            {cart.map((product) => {
              return (
                <li
                  key={product.id}
                  className="bg-neutral-100 shadow-md duration-300 hover:-translate-y-1 hover:duration-300 flex justify-between h-32 rounded-lg p-1 relative hover:shadow-lg xxxs:max-xxs:h-28"
                >
                  <div className="flex sm:gap-5 xxxs:max-sm:gap-2">
                    <figure
                      className={`sm:h-full rounded-md sm:w-auto xxxs:h-full xxxs:aspect-square ${
                        product.category === "beauty"
                          ? "bg-purple-200"
                          : product.category === "groceries"
                          ? "bg-red-200"
                          : product.category === "furniture"
                          ? "bg-amber-200"
                          : "bg-sky-200"
                      }`}
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="h-full w-full block rounded-md"
                      />
                    </figure>
                    <div className="flex justify-between flex-col items-start py-2 ">
                      <h3 className="text-sm font-normal xxxs:max-xxs:text-xs text-neutral-600">
                        Name:{" "}
                        <span className="font-semibold text-neutral-800">
                          {product.name}
                        </span>
                      </h3>
                      <p className="text-sm font-normal xxxs:max-xxs:text-xs text-neutral-600 xxxs:max-xxs:hidden">
                        Category:{" "}
                        <span className="font-semibold text-neutral-800">
                          {product.category}
                        </span>
                      </p>
                      <p className="text-sm font-normal xxxs:max-xxs:text-xs text-neutral-600">
                        Price:{" "}
                        <span className="font-semibold text-neutral-800">
                          {product.price}$
                        </span>
                      </p>
                      <p className="text-sm font-normal xxxs:max-xxs:text-xs text-neutral-600">
                        Shipping Info:{" "}
                        <span className="font-semibold text-red-600">
                          {product.shippingInformations}
                        </span>
                      </p>
                    </div>
                  </div>
                  <BsTrash3Fill
                    onClick={() => {
                      removeFromCart(product.id);
                      notifyItemRemovedFromCart(product.name);
                    }}
                    className="text-red-600 text-xl m-2 cursor-pointer"
                    title="cancel your order"
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="w-full h-full flex flex-col gap-5 items-center overflow-hidden p-2 pt-10">
            <h1 className="text-neutral-400 text-center font-black xs:text-3xl xxxs:text-2xl">
              Your Cart is Quite Empty
            </h1>
            <figure className="h-72 w-72 ">
              <img
                className="h-full w-full object-cover block xxxs:max-sm:hidden"
                src={cartPicture}
                alt="empty cart illustration"
              />
            </figure>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

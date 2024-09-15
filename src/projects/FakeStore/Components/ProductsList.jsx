import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  retrieveData,
  retrieveFromLocalCart,
  retrieveFromLocalWishlist,
} from "../StoreSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa6";
import { BsStarFill } from "react-icons/bs";

import { Outlet, useNavigate } from "react-router-dom";

const ProductsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, searchValue, categoryDisplay, cart, wishlist } = useSelector(
    (state) => state.commerce
  );
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  useEffect(() => {
    if (isWindowOpen) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "unset";
    }
  }, [isWindowOpen]);

  useEffect(() => {
    dispatch(retrieveData());

    if (localStorage.getItem("wishlist") === null) {
      localStorage.setItem("wishlist", JSON.stringify([]));
    } else {
      dispatch(
        retrieveFromLocalWishlist(JSON.parse(localStorage.getItem("wishlist")))
      );
    }

    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      dispatch(retrieveFromLocalCart(JSON.parse(localStorage.getItem("cart"))));
    }
  }, []);

  const notifyItemAddedToCart = (title) =>
    toast.success(`${title} is added to your cart`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      theme: "colored",
    });

  const notifyItemAddedToWishList = (title) =>
    toast(`${title} is added to your Wish List`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      theme: "colored",
    });

  const notifyItemRemovedFromWishList = (title) =>
    toast.error(`${title} is removed from your Wishlist`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      theme: "light",
    });

  function addToCart(product) {
    const productToBuy = {
      id: product.id,
      name: product.title || product.name,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail,
      shippingInformations:
        product.shippingInformation || product.shippingInformations,
    };

    if (cart.filter((p) => p.id === product.id)[0] === undefined) {
      dispatch({
        type: "commerce/addToCart",
        payload: productToBuy,
      });

      localStorage.setItem("cart", JSON.stringify([...cart, productToBuy]));
    }
  }

  function addToWishlist(product) {
    const productToWishlist = {
      id: product.id,
      name: product.title,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail,
      shippingInformations: product.shippingInformation,
    };

    if (wishlist.filter((p) => p.id === product.id)[0] === undefined) {
      dispatch({
        type: "commerce/addToWishlist",
        payload: productToWishlist,
      });

      localStorage.setItem(
        "wishlist",
        JSON.stringify([...wishlist, productToWishlist])
      );
    }
  }

  function removeFromWishlist(productId) {
    const wishlistProducts = wishlist.filter((item) => item.id !== productId);

    dispatch({
      type: "commerce/removeFromWishlist",
      payload: wishlistProducts,
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlistProducts));
  }

  return (
    <>
      <Outlet context={{ setIsWindowOpen, notifyItemAddedToCart, addToCart }} />
      {data.length !== 0 ? (
        <>
          <h1 className="lg:text-5xl flex flex-col xxxs:text-4xl items-center xxxs:gap-3 sm:gap-6 font-black text-center xxxs:mb-8 sm:mb-20 text-neutral-700 xxxs:mt-4 sm:mt-10">
            Featured Products
            <hr className="w-24 h-horizontal bg-neutral-500" />
          </h1>

          <ul className="max-w-screen-2xl mx-auto w-full p-5 py-10 grid grid-cols-1 lg:max-w-custom custom:grid-cols-2 xl:grid-cols-3 bg-indigo-200 rounded-md gap-x-4 gap-y-6 xxxs:p-1 xxs:max-sm:p-10percent sm:max-custom:p-15percent">
            {data
              .filter((product) => {
                return (
                  product.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) &&
                  product.category.includes(categoryDisplay)
                );
              })
              .map((product) => {
                return (
                  <li
                    key={product.id}
                    className="text-neutral-800 border-2 rounded-sm border-slate-900 relative bg-neutral-300 flex flex-col"
                  >
                    <figure className="w-full sm:h-72 xxxs:h-52 xxxs:border-b-2 sm:border-b-4 border-neutral-700">
                      <img
                        src={product.images[0]}
                        className="object-contain h-full w-full block"
                      />
                    </figure>
                    <div className="py-2 px-4 bg-neutral-200">
                      {wishlist.filter((p) => p.id === product.id)[0] ===
                      undefined ? (
                        <BiBookmark
                          title="add to WishList"
                          onClick={() => {
                            notifyItemAddedToWishList(product.title);
                            addToWishlist(product);
                          }}
                          className="absolute sm:text-2.5xl top-4 left-5 cursor-pointer text-neutral-600 xxxs:text-2xl"
                        />
                      ) : (
                        <BiSolidBookmark
                          onClick={() => {
                            notifyItemRemovedFromWishList(product.title);
                            removeFromWishlist(product.id);
                          }}
                          className="absolute sm:text-2.5xl top-4 left-5 cursor-pointer text-amber-600 xxxs:text-2xl"
                        />
                      )}
                      <FaRegComments
                        title="reviews"
                        onClick={() => {
                          navigate(`/store/product/${product.id}`);
                        }}
                        className="absolute sm:text-2.5xl text-amber-900 top-4 right-5 cursor-pointer xxxs:text-2xl"
                      />

                      <h2
                        className={`${
                          product.title.slice("").length >= 30
                            ? "sm:text-lg text-nowrap"
                            : "sm:text-2xl"
                        }  font-playfair text-neutral-950 text-center xxxs:text-lg sm:mb-0 xxxs:mb-2`}
                      >
                        {product.title}
                      </h2>
                      <div className="flex justify-between pt-1 sm:px-6 sm:text-base xxxs:px-0 xxxs:text-sm">
                        {product.brand !== undefined ? (
                          <p>
                            Brand:{" "}
                            <span className="font-bold">{product.brand}</span>
                          </p>
                        ) : null}
                        <p className="flex gap-1 sm:text-base xxxs:text-sm">
                          Rating:{" "}
                          <span className="font-bold flex items-center gap-1">
                            {product.rating}{" "}
                            <BsStarFill className="text-amber-600" />
                          </span>
                        </p>
                      </div>

                      <p className="text-left sm:mx-6 sm:text-base xxxs:text-sm xxxs:mx-0">
                        Price:{" "}
                        <span className="font-bold">{product.price}$</span>{" "}
                      </p>
                      <p className="text-left sm:mx-6 sm:text-base xxxs:mx-0 xxxs:text-sm">
                        Status:{" "}
                        <span
                          className={`font-bold ${
                            product.availabilityStatus === "Low Stock"
                              ? "text-red-600"
                              : "text-emerald-700"
                          }`}
                        >
                          {product.availabilityStatus}
                        </span>
                      </p>

                      <p className="text-left sm:mx-6 sm:text-base xxxs:mx-0 xxxs:text-sm">
                        Dimensions:{" "}
                        <span className="font-bold">
                          {product.dimensions.width} *{" "}
                          {product.dimensions.height} *{" "}
                          {product.dimensions.depth}
                        </span>
                      </p>
                      <p className="text-left my-3 sm:text-base xxxs:max-custom:line-clamp-none custom:line-clamp-2 xxxs:text-sm">
                        <span className="font-bold ">Description:</span>{" "}
                        {product.description}
                      </p>

                      <div className="w-full h-fit xxxs:flex xxxs:justify-end">
                        <button
                          className="mb-1 sm:mt-5 w-full text-emerald-800 rounded-3xl sm:font-black py-1 px-7 bg-emerald-100 hover:bg-neutral-100 border border-emerald-700 transition-colors duration-300 xxxs:mt-1 xxxs:font-bold xxxs:text-sm xxxs:w-fit xxxs:self-end sm:w-full sm:text-base "
                          onClick={() => {
                            notifyItemAddedToCart(product.title);
                            addToCart(product);
                          }}
                        >
                          add to cart
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </>
      ) : (
        <div className="text-center w-full flex flex-col items-center gap-1 h-screen">
          <h1 className="font-bold text-neutral-600 text-2xl mt-6">
            Loading data
          </h1>
          <h4 className="font-semibold text-sm text-neutral-500">
            Please hold on...
          </h4>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default ProductsList;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useOutletContext } from "react-router-dom";

import cartPicture from "./images/cart4.png";

import { BiSolidBookmark } from "react-icons/bi";

const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setIsWindowOpen, notifyItemAddedToCart, addToCart } =
    useOutletContext();
  const { wishlist } = useSelector((state) => state.commerce);

  useEffect(() => {
    setIsWindowOpen(true);
  }, []);

  function removeFromWishlist(productId) {
    const WishlistItems = wishlist.filter((item) => item.id !== productId);

    dispatch({
      type: "commerce/removeFromWishlist",
      payload: WishlistItems,
    });

    localStorage.setItem("wishlist", JSON.stringify(WishlistItems));
  }
  return (
    <>
      <div className="opacity-80 backdrop-blur-xl bg-black fixed top-0 left-0 w-full h-full z-30"></div>
      <div className="sm:w-5/6 fixed sm:top-1/2 sm:left-1/2 pb-3 sm:-translate-x-1/2 sm:-translate-y-1/2 rounded-xl border bg-neutral-100 text-neutral-700 border-amber-700 z-40 xxxs:top-10 xxxs:w-full">
        <button
          className="group absolute -top-10 left-0 flex text-amber-600 bg-white rounded-full py-1 items-center w-40 justify-center"
          onClick={() => {
            navigate("/store");
            setIsWindowOpen(false);
          }}
        >
          <BsArrowLeft className="w-0 inline group-hover:w-7 text-xl font-extrabold transition-all duration-500 mx-1" />
          Back to store
        </button>
        <header className="sticky top-0 px-10 py-3 border-b flex justify-between border-zinc-700">
          <h2 className="text-2xl font-black text-neutral-700 xxxs:max-xs:text-xl">
            Your WishList:{" "}
          </h2>{" "}
        </header>
        {wishlist.length !== 0 ? (
          <ul
            className={`overflow-y-scroll sm:p-2 py-4 h-96 mt-3 sm:mx-2 xxxs:max-sm:mx-1 xxxs:max-sm:px-1 bg-indigo-100 rounded-lg grid xxxs:max-lg:grid-cols-1 gap-4 md:max-custom:pr-20 custom:max-lg:pr-32 ${
              wishlist.length > 2 && wishlist.length < 5
                ? "lg:grid-cols-customCart lg:grid-rows-customR"
                : "lg:grid-cols-2"
            } `}
          >
            {wishlist.map((product) => {
              return (
                <li
                  key={product.id}
                  className="bg-neutral-100 shadow-md duration-300 hover:-translate-y-1 hover:duration-300 flex justify-between h-32 rounded-lg p-1 relative hover:shadow-lg "
                >
                  <div className="flex lg:gap-5 xs:max-lg:gap-2 xxxs:max-xs:gap-0">
                    <figure
                      className={`sm:h-full xxxs:max-xs:mr-1 rounded-md w-auto sm:w-auto xxxs:h-full xxxs:aspect-square  ${
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
                    <div className="flex justify-between flex-col items-start sm:py-5 xxxs:py-3">
                      <h3 className="text-sm font-normal text-neutral-600">
                        Name:{" "}
                        <span className="font-semibold text-neutral-800">
                          {product.name}
                        </span>
                      </h3>
                      <p className="text-sm font-normal text-neutral-600 xxxs:max-xxs:hidden">
                        Category:{" "}
                        <span className="font-semibold text-neutral-800">
                          {product.category}
                        </span>
                      </p>
                      <p className="text-sm font-normal text-neutral-600">
                        Price:{" "}
                        <span className="font-semibold text-teal-700">
                          {product.price}$
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between py-3 items-end xs:mr-4 xxxs:mr-0">
                    <BiSolidBookmark
                      onClick={() => {
                        removeFromWishlist(product.id);
                      }}
                      className="text-red-600 text-2xl m-2 cursor-pointer"
                      title="remove from wishlist"
                    />
                    <button
                      className="px-3 py-1 bg-red-600 w-fit text-white text-xxs font-bold border border-red-600 xs:rounded-full xxxs:rounded-md xxxs:text-nowrap"
                      onClick={() => {
                        addToCart(product);
                        notifyItemAddedToCart(product.name);
                        removeFromWishlist(product.id);
                      }}
                    >
                      add to cart
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="w-full h-full flex flex-col gap-5 items-center overflow-hidden p-2 pt-10">
            <h1 className="text-neutral-400 font-black xs:text-3xl xxxs:text-2xl text-center">
              Your Wishlist is empty
            </h1>
            <figure className="h-64 w-64 ">
              <img
                className="h-full w-full object-cover block xxxs:max-sm:hidden"
                src={cartPicture}
                alt="empty wishlist illustration"
              />
            </figure>
          </div>
        )}
      </div>
    </>
  );
};

export default WishList;

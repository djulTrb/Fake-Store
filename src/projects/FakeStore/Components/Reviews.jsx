import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

import { BsArrowLeft, BsStarFill } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

import Avatar from "boring-avatars";

const Reviews = () => {
  const { productId } = useParams();
  const { setIsWindowOpen } = useOutletContext();
  const { data } = useSelector((state) => state.commerce);
  const navigate = useNavigate();

  const [product, setProduct] = useState("");

  useEffect(() => {
    if (data.length > 0) {
      setProduct(
        data.filter((p) => {
          return p.id === Number(productId);
        })[0]
      );
    }

    setIsWindowOpen(true);
  }, [data.length]);

  return (
    <>
      <div className="opacity-80 backdrop-blur-xl bg-black fixed top-0 left-0 w-full h-full z-30"></div>
      <div className="w-5/6 fixed top-1/2 left-1/2 pb-3 -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-neutral-100 text-neutral-700 border-lime-700 z-40 ">
        <button
          className="group absolute -top-10 left-0 flex text-lime-700 bg-white rounded-full py-1 items-center w-40 justify-center"
          onClick={() => {
            navigate("/store");
            setIsWindowOpen(false);
          }}
        >
          <BsArrowLeft className="w-0 inline group-hover:w-7 text-xl font-extrabold transition-all duration-500 mx-1" />
          Back to store
        </button>
        <header className=" sm:px-10 xxxs:px-2 py-3 border-b flex justify-between border-zinc-700">
          <h2 className="sm:text-2xl xxxs:text-lg font-black text-neutral-700">
            Reviews On "{product.title}"
          </h2>
        </header>

        {data.length !== 0 ? (
          <ul
            className={`overflow-x-auto flex p-2 py-4 h-fit mt-3 mx-2 bg-indigo-100 rounded-lg gap-10 `}
          >
            {product?.reviews?.map((review, ind) => {
              return (
                <li
                  key={ind}
                  className={`items-center border-2  flex flex-col justify-between h-fit rounded-lg w-96 ${
                    product.category === "beauty"
                      ? "bg-purple-100"
                      : product.category === "groceries"
                      ? "bg-red-100"
                      : product.category === "furniture"
                      ? "bg-amber-100"
                      : "bg-sky-100"
                  }`}
                >
                  <figure
                    className={`h-24 rounded-full p-1 w-auto my-3 shadow-xl  bg-amber-400 ${
                      product.category === "beauty"
                        ? "shadow-purple-300"
                        : product.category === "groceries"
                        ? "shadow-red-300"
                        : product.category === "furniture"
                        ? "shadow-amber-300"
                        : "shadow-sky-300"
                    }`}
                  >
                    <Avatar
                      name={review.reviewerName}
                      className="h-full w-full block rounded-full bg-amber-500"
                      variant="beam"
                      colors={[
                        "#be123c",
                        "#0f766e",
                        "#059669",
                        "#b91c1c",
                        "#a21caf",
                        "#65a30d",
                        "#f59e0b",
                      ]}
                    />
                  </figure>
                  <div className="bg-neutral-100 w-full p-3 pb-5 rounded-b-md">
                    <div className="flex justify-between mb-5">
                      <div>
                        <p className="font-bold">{review.reviewerName}</p>
                        <p className="text-xxs font-semibold text-neutral-600">
                          {review.reviewerEmail}
                        </p>
                      </div>
                      <div className="flex gap-1 mt-1 items-center self-start">
                        {[...Array(review.rating)].map((star, i) => {
                          return (
                            <BsStarFill
                              className="text-yellow-500 text-sm"
                              key={i}
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center gap-2  justify-center">
                      <FaQuoteLeft />
                      <p className="text-sm text-neutral-900 line-clamp-1">
                        {review.comment}
                      </p>
                      <FaQuoteRight />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="w-full pt-10 flex flex-col justify-center items-center">
            <h1 className="text-xl opacity-75 font-bold">Loading reviews</h1>
            <h4 className="text-lg font-normal opacity-90">Please wait...</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Reviews;

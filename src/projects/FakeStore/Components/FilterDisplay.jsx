import React, { useRef, useEffect } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { filterSearch, filterCategory } from "../StoreSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { BsStarFill, BsBagFill } from "react-icons/bs";
import { FaBarsStaggered, FaX } from "react-icons/fa6";

import { NavLink } from "react-router-dom";

const FilterDisplay = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, searchValue, wishlist } = useSelector(
    (state) => state.commerce
  );

  useEffect(() => {
    dispatch(filterCategory(""));
    dispatch(filterSearch(""));
  }, []);

  return (
    <>
      <div className="py-3 xxxs:max-xs:px-4 w-full flex justify-between bg-neutral-200 border-b-2 border-neutral-400  2xl:px-16 xxxs:px-2">
        <div className="sm:gap-7 xs:gap-4 items-center xs:flex sm:ml-12 xxxs:hidden">
          <div className="relative">
            {cart.length > 0 ? (
              <div className="rounded-full h-4 aspect-square bg-red-700 flex justify-center items-center absolute top-0 left-4 text-white text-xxs">
                {cart.length}
              </div>
            ) : null}

            <BsBagFill
              className="text-neutral-700 inline text-2xl cursor-pointer "
              title="Cart"
              onClick={() => {
                navigate("/store/cart");
              }}
            />
          </div>
          <div className="relative">
            {wishlist.length > 0 ? (
              <div className="rounded-full h-4 aspect-square bg-amber-500 flex justify-center items-center absolute top-0 left-4 text-white text-xxs">
                {wishlist.length}
              </div>
            ) : null}
            <BsStarFill
              className="text-neutral-700 inline text-2xl cursor-pointer"
              title="wishList"
              onClick={() => {
                navigate("/store/wishlist");
              }}
            />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex items-center justify-between relative xxxs:w-full xs:w-4/6"
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-full flex items-center xl:items-end sm:gap-6 xxxs:gap-2">
              <label
                className="text-neutral-600 font-bold self-end sm:text-xl xxxs:text-lg"
                htmlFor="search"
              >
                {" "}
                Search:{" "}
              </label>
              <input
                value={searchValue}
                placeholder="ex: honey"
                id="search"
                onChange={(e) => {
                  dispatch(filterSearch(e.target.value));
                }}
                type="text"
                className="border-2 text-neutral-700 border-neutral-700 focus:outline-none bg-neutral-100 rounded-2xl px-2 py-1 w-11/12 max-w-xl"
              />
            </div>
            <div>
              <BiFilterAlt
                className="text-neutral-700 text-3xl sm:ml-4 xs:ml-2 cursor-pointer xs:text-customFS xs:inline xxxs:hidden xs:mr-4 xl:text-3xl"
                onMouseEnter={() => {
                  modalRef.current.style.display = "block";
                  modalRef.current.style.transition = "all 1s linear";
                }}
                onMouseLeave={() => {
                  modalRef.current.style.display = "none";
                  modalRef.current.style.transition = "all 1s linear";
                }}
              />
            </div>
          </div>
          <div className="drawer hidden xxxs:max-xs:block w-16">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn bg-transparent text-amber-600 shadow-none text-lg border-none drawer-button"
              >
                <FaBarsStaggered />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li>
                  <NavLink to={"/store/cart"}>Cart</NavLink>
                </li>
                <li>
                  <NavLink to={"/store/wishlist"}>Wishlist</NavLink>
                </li>
                <li>
                  <div className="drawer-content">
                    <input
                      id="my-drawer"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    {/* Page content here */}
                    <label
                      htmlFor="my-drawer"
                      className="btn bg-transparent m-0 p-0 text-neutral-400 shadow-none text-base border-none drawer-button"
                    >
                      Go Back
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </form>

        <nav
          ref={modalRef}
          onMouseEnter={() => {
            modalRef.current.style.display = "block";
          }}
          onMouseLeave={() => {
            modalRef.current.style.display = "none";
          }}
          className="absolute top-28 xs:right-6 xxxs:top-24 text-neutral-100 bg-slate-900 h-10 hidden z-20 w-fit"
        >
          <ul className="divide-y-2  space-y-1 divide-neutral-500 bg-neutral-600 px-2 py-1 w-full ">
            <li
              onClick={() => {
                dispatch(filterCategory(""));
                modalRef.current.style.display = "none";
              }}
              className="hover:bg-neutral-500 px-5 py-1 transition-colors duration-300 cursor-pointer"
            >
              All
            </li>
            <li
              className="hover:bg-neutral-500 px-5 py-1 transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                dispatch(filterCategory("fragrances"));
                modalRef.current.style.display = "none";
              }}
            >
              Fragrances
            </li>
            <li
              className="hover:bg-neutral-500 px-5 py-1 transition-colors duration-300 cursor-pointer"
              onClick={() => {
                dispatch(filterCategory("beauty"));
                modalRef.current.style.display = "none";
              }}
            >
              Beauty
            </li>
            <li
              className="hover:bg-neutral-500 px-5 py-1 transition-colors duration-300 cursor-pointer"
              onClick={() => {
                dispatch(filterCategory("furniture"));
                modalRef.current.style.display = "none";
              }}
            >
              Furniture
            </li>
            <li
              onClick={() => {
                dispatch(filterCategory("groceries"));
                modalRef.current.style.display = "none";
              }}
              className="hover:bg-neutral-500 px-5 py-1 transition-colors duration-300 cursor-pointer"
            >
              Groceries
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default FilterDisplay;

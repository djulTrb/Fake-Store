import React, { useEffect } from "react";

import { filterSearch, filterCategory } from "../StoreSlice";
import { useSelector, useDispatch } from "react-redux";

const FilterCategorySmallDevices = () => {
  const dispatch = useDispatch();
  const { categoryDisplay } = useSelector((state) => state.commerce);

  useEffect(() => {
    dispatch(filterCategory(""));
    dispatch(filterSearch(""));
  }, []);

  return (
    <div className="xxxs:block xs:hidden p-1 bg-neutral-100">
      <nav className="w-full">
        <ul className=" px-2 py-1 w-full grid grid-cols-4 grid-rows-2 gap-2">
          <li
            onClick={() => {
              dispatch(filterCategory(""));
            }}
            className={` flex items-center justify-center text-neutral-800 px-3 rounded-full py-1 col-start-1 col-span-1 row-span-1 row-start-1 ${
              categoryDisplay === "" ? "bg-black text-white" : ""
            }`}
          >
            All
          </li>
          <li
            className={` flex items-center justify-center text-neutral-800 px-3 rounded-full py-1 col-start-2 col-span-2 row-span-1 row-start-1 ${
              categoryDisplay === "fragrances"
                ? "bg-sky-100 text-sky-950 font-semibold"
                : ""
            }`}
            onClick={() => {
              dispatch(filterCategory("fragrances"));
            }}
          >
            Fragrances
          </li>
          <li
            className={` flex items-center justify-center text-neutral-800 px-3 rounded-full py-1 col-start-4 col-span-1 row-span-1 row-start-1 ${
              categoryDisplay === "beauty"
                ? "bg-purple-100 text-rose-950 font-semibold"
                : ""
            }`}
            onClick={() => {
              dispatch(filterCategory("beauty"));
            }}
          >
            Beauty
          </li>
          <li
            className={` flex items-center justify-center text-neutral-800 px-3 rounded-full py-1 col-start-1 col-span-2 row-span-1 row-start-2 ${
              categoryDisplay === "furniture"
                ? "bg-amber-100 font-semibold text-amber-950"
                : ""
            }`}
            onClick={() => {
              dispatch(filterCategory("furniture"));
            }}
          >
            Furniture
          </li>
          <li
            onClick={() => {
              dispatch(filterCategory("groceries"));
            }}
            className={` flex items-center justify-center text-neutral-800 px-3 rounded-full py-1 col-start-3 col-span-2 row-span-1 row-start-2 ${
              categoryDisplay === "groceries"
                ? "bg-red-100 font-semibold text-red-950"
                : ""
            }`}
          >
            Groceries
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FilterCategorySmallDevices;

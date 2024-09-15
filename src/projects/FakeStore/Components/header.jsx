import React from "react";
import { NavLink } from "react-router-dom";

import FilterDisplay from "./FilterDisplay";
import FilterCategorySmallDevices from "./filterCategorySmallDevices";

const Header = ({ header_bg }) => {
  return (
    <header className="flex flex-col sticky top-0 z-30">
      <div
        className={`${
          header_bg === "transparent"
            ? "bg-transparent fixed"
            : "bg-custom sticky"
        } w-full py-3 xxxs:px-2 sm:px-8 lg:px-12 flex justify-between items-center  backdrop-blur-sm `}
      >
        <h1 className="text-amber-600 xl:text-5xl md:text-4xl font-harelyn xxxs:text-3xl">
          Fake Store
        </h1>
        <nav>
          <ul className="flex xxs:gap-6 xxxs:gap-3 items-center ">
            <li className="text-neutral-200 font-playfair">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-600 xxxs:text-base sm:text-lg xl:text-2xl"
                    : "text-white xxxs:text-base sm:text-lg xl:text-2xl"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-neutral-200 font-playfair">
              <NavLink
                to="/store"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-600 xxxs:text-base sm:text-xl xl:text-2xl"
                    : "text-white xxxs:text-base sm:text-xl xl:text-2xl"
                }
              >
                Store
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {header_bg !== "transparent" ? (
        <>
          <FilterDisplay />
          <FilterCategorySmallDevices />{" "}
        </>
      ) : null}
    </header>
  );
};

export default Header;

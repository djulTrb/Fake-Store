import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-between px-10">
      <h1 className="text-5xl font-bold text-neutral-800 pt-10">
        Error 404 : page not found ❌
      </h1>
      <NavLink
        className=" text-neutral-600 mt-10  px-3 py-1 border-2 border-neutral-900 rounded-md"
        to={"/"}
      >
        return home
      </NavLink>
    </div>
  );
};

export default NotFound;

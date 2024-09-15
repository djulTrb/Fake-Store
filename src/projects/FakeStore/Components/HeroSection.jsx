import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative bg-neutral-100 flex flex-col justify-center items-center bg_img h-screen bg-cover">
        <div className="opacity-65 bg-neutral-900 absolute top-0 left-0 w-full h-screen"></div>
        <div className=" flex flex-col xs:w-9/12 items-center xxxs:max-xs:w-full xs:p-5 xxxs:px-0 xl:justify-center xl:h-3/5 gap-10">
          <h1 className="xxxs:text-4xl font-light font-serif xxs:text-5xl my-5 mt-16 sm:mx-16 custom:mx-24 xl:mx-64 xs:mx-10 xxxs:mx-10 2xl:mx-56 text-center text-white backdrop-blur-xs xl:text-7xl">
            Here, Where{" "}
            <span className="sm:text-7xl xxxs:text-5xl xxs:text-6xl xl:text-8xl font-harelyn underline decoration-fuchsia-600 underline-offset-4 decoration-4">
              Happiness
            </span>{" "}
            can Be Bought
          </h1>
          <div className="z-20 flex justify-between items-center mt-5 xxxs:max-2xl:flex-col xs:max-xl:gap-6 xxxs:gap-1 ">
            <p className="relative text-neutral-100 col-span-8 backdrop-blur-xs font-merri sm:8/12 xl:w-7/12 leading-6 sm:text-base xl:text-2xl xxxs:text-xs xxxs:leading-5 xxxs:text-neutral-200 xxxs:text-center xxs:max-sm:text-base xxs:max-md:mb-7">
              We take pride in buying some of the most fresh, nutritious, top
              tier, quality products and food, our stores chain is one of the
              most popular in the country, with our most care and the service
              provide for our customers to ensure their comfortableness and
              pleasure, our doors are always open. You're Always welcome
            </p>
          </div>
        </div>
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
          <button
            onClick={() => {
              navigate("/store");
            }}
            className="text-amber-500  border-amber-600  border-2 rounded-full p-1  bg-neutral-200  w-32 flex justify-center "
          >
            <BiLogInCircle className=" text-2xl animate-pulse" />
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

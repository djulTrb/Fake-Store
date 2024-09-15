import React from "react";

const Offer = () => {
  return (
    <section className="mb-20 w-full mt-10 px-10 grid lg:grid-rows-2 md:grid-rows-3  xxxs:max-xs:px-2">
      <h2 className="lg:text-5xl flex flex-col xxxs:text-4xl items-center xxxs:gap-3 sm:gap-6 font-black text-center xxxs:mb-8  text-neutral-700 xxxs:mt-4 sm:mt-10 col-span-full row-span-1">
        we Offer
        <hr className="w-24 h-horizontal bg-neutral-500" />
      </h2>
      <div className="grid gap-5 md:max-lg:row-span-2 md:max-lg:row-start-2 lg:grid-cols-3 md:grid-cols-5 xs:grid-cols-1">
        <div className="w-full gap-2 flex bg-neutral-300 flex-col items-center p-4 py-3 md:max-lg:row-span-1 md:max-lg:col-span-2 rounded-md shadow-sm">
          <h3 className="font-bold xl:text-xl sm:text-base text-left text-neutral-800 self-start border-b-2 border-neutral-600">
            Fast delivery
          </h3>
          <p className="leading-4 ml-2 xxxs:max-xl:text-sm">
            At our store, we pride ourselves on exceptional customer service.
            Our dedicated team is always ready to assist you with any inquiries,
            ensuring a seamless shopping experience. Your satisfaction is our
            top priority!
          </p>
        </div>
        <div className="w-full gap-2 flex flex-col items-center p-4 py-2 md:max-lg:row-span-1 md:max-lg:col-start-4 bg-neutral-300 md:max-lg:col-span-2 rounded-md shadow-sm">
          <h3 className="font-bold xl:text-xl text-left text-neutral-800 self-start border-b-2 border-neutral-600">
            24/7 Customer Service{" "}
          </h3>
          <p className="leading-4 ml-2 xxxs:max-xl:text-sm">
            Our store offers 24/7 customer service to ensure you receive
            assistance whenever you need it. Whether it’s day or night, our
            dedicated team is always ready to help with any inquiries or issues.
            Experience seamless support around the clock!
          </p>
        </div>
        <div className="w-full gap-2 flex flex-col items-center p-4 py-2 md:max-lg:row-start-2 md:max-lg:col-start-2 bg-neutral-300 md:max-lg:row-span-1 md:max-lg:col-span-3 rounded-md shadow-sm">
          <h3 className="font-bold xl:text-xl sm:text-base text-left self-start text-neutral-800 border-b-2 border-neutral-600">
            Garanted Comfort while Shopping{" "}
          </h3>
          <p className="leading-4 ml-2 xxxs:max-xl:text-sm">
            Shopping in our store is 100% guaranteed for your peace of mind. We
            offer secure payment options and a hassle-free return policy. Enjoy
            a seamless shopping experience with us!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;

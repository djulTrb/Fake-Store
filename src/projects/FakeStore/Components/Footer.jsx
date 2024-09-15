import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-5 pb-3 mt-10 rounded-t-md flex items-center justify-between xxxs:max-xs:flex-col xxxs:max-sm:items-start xxxs:max-sm:gap-1">
      <nav className="flex gap-3">
        <h6 className="footer-title">Used api: </h6>
        <a
          href="https://dummyjson.com/docs/products"
          className="link link-hover"
        >
          Dummy JSON
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Made for Educational purpose</h6>
      </nav>
    </footer>
  );
};

export default Footer;

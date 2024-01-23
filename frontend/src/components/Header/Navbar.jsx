import React, { useState } from "react";

// brand logo
import brandLogo from "../../assets/images/brand-logo-256x256.png";

// react-router
import { NavLink } from "react-router-dom";
import Logo from "../BrandLogo/Logo";

function Navbar() {
  const [showNavList, setShowNavList] = useState(false);

  const navbarToggle = () => {
    setShowNavList((prev) => !prev);
  };
  return (
    <nav>
      <section className="bg-white flex justify-around w-full relative items-center font-bold text-xl overflow-hidden">
        <button
          onClick={navbarToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-sm lg:hidden focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-950 ml-[-25]"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <ul className="hidden lg:flex items-center justify-around gap-5 font-normal">
          <NavLink className={`nav-item`} to={"/"}>
            <li className="cursor-pointer">Home</li>
          </NavLink>
          <NavLink className={`nav-item`} to={"/buy"}>
            <li className="cursor-pointer">Buy</li>
          </NavLink>
          <NavLink className={`nav-item`} to={"/rent"}>
            <li className="cursor-pointer">Rent</li>
          </NavLink>
          <NavLink className={`nav-item`} to={"/sell"}>
            <li className="cursor-pointer">Sell</li>
          </NavLink>
        </ul>
        <div className="flex lg:flex-col items-center justify-center mt-2 mr-2 lg:mt-0 lg:mr-0">
          <Logo />
        </div>
        {/* lg-devices */}
        <ul className="hidden lg:flex items-center justify-around gap-5 relative font-normal">
          <NavLink className={`nav-item`} to={"/about-us"}>
            <li className="cursor-pointer">About</li>
          </NavLink>
          <NavLink className={`nav-item`} to={"/contact"}>
            <li className="cursor-pointer">Contact</li>
          </NavLink>
          <NavLink className={`nav-item`} to={"/blog"}>
            <li className="cursor-pointer">Blog</li>
          </NavLink>
          <li>
            {/* call-now */}
            <div className="call-now-desktop flex items-end absolute bottom-0 bg-neutral-800 text-white w-28 h-24">
              <a href="tel:+905498705654" className="p-2 font-normal">
                Call Now
              </a>
            </div>
          </li>
        </ul>
        {/* Mobile Devices */}
        {/* call-now */}
        <div className="call-now bg-neutral-800 text-white  mr-[-50px] w-20 p-2 flex items-start lg:hidden font-normal">
          <a href="tel:+905498705654">
            Call <br /> Now
          </a>
        </div>
      </section>
      {/* collapse-list */}
      <div
        id="navbar-collapse"
        className={`collapse-list ${
          !showNavList ? "hidden" : "show"
        } w-full absolute left-0 top-29  bg-blur lg:hidden text-xl font-bold z-50`}
      >
        <ul className="flex items-start justify-between p-5 m-0 gap-3">
          <div className="flex flex-col">
            <NavLink onClick={navbarToggle} className={`nav-item`} to={"/"}>
              <li className="cursor-pointer text-xl ">Home</li>
            </NavLink>
            <NavLink onClick={navbarToggle} className={`nav-item`} to={"/buy"}>
              <li className="cursor-pointer">Buy</li>
            </NavLink>
            <NavLink onClick={navbarToggle} className={`nav-item`} to={"/rent"}>
              <li className="cursor-pointer">Rent</li>
            </NavLink>
            <NavLink onClick={navbarToggle} className={`nav-item`} to={"/sell"}>
              <li className="cursor-pointer">Sell</li>
            </NavLink>
          </div>
          <div className="flex flex-col">
            <NavLink
              onClick={navbarToggle}
              className={`nav-item`}
              to={"/about-us"}
            >
              <li className="cursor-pointer">About</li>
            </NavLink>
            <NavLink
              onClick={navbarToggle}
              className={`nav-item`}
              to={"/contact"}
            >
              <li className="cursor-pointer">Contact</li>
            </NavLink>
            <NavLink onClick={navbarToggle} className={`nav-item`} to={"/blog"}>
              <li className="cursor-pointer">Blog</li>
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

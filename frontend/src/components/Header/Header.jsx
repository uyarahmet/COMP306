import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="w-full z-50">
      <div className="text-container p-2 bg-neutral-800">
        <div className="text-inner w-full lg:w-[50%] p-2">
          <p className="header-text text-sm lg:text-lg text-white">Hello, welcome! - Привет, добро пожаловать! - Hallo, willkommen! - Merhaba, hoş geldiniz!</p>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;

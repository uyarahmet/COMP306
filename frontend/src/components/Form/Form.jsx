import React from "react";

// ui-components
import Button from "../UI/Button.jsx";

// react-icons
import { FaSearch } from "react-icons/fa";

function Form() {
  return (
    <div className="flex justify-center items-center flex-col lg:flex-row w-full lg:px-36">
      <div className="input-container relative w-full">
        <input
          className="p-3 w-full text-xl lg:rounded-xl border"
          id="search-bar"
          name="search-bar"
          type="text"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        />
        <div className=" flex items-center justify-center search-icon-container bg-white h-12 w-7">
          <FaSearch />
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap lg:flex-nowrap lg:mx-2 gap-1 my-5 lg:gap-4 ">
        <select className="p-3 lg:p-4 rounded-xl" name="" id="">
          <option value="forSale">For sale</option>
          <option value="forRent">For rent</option>
        </select>
        <select className="p-3 lg:p-4 rounded-xl" name="" id="">
          <option value="">Filters</option>
        </select>
        <select className="p-3 lg:p-4 rounded-xl" name="" id="">
          <option value="">Price</option>
        </select>
      </div>
      <div className="text-center mx-2">
        <Button
          className={
            "w-full bg-neutral-700 text-white rounded-xl lg:p-[1px] lg:text-sm lg:font-extralight"
          }
        >
          Submit filter
        </Button>
      </div>
    </div>
  );
}

export default Form;

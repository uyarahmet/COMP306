import React, { useContext, useState } from "react";

// cover-photo
import coverPhoto from "../assets/images/wallpaperflare.com_wallpaper.jpg";

// react-icons
import { FaSearch } from "react-icons/fa";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import { DataContext } from "../store/DataContext";
import { homeCardContents } from "../data/homeCardContents";
import HomePageCard from "../components/UI/HomePageCard";
import ProductCard from "../components/UI/ProductCard";
import ProductCarousel from "../components/Carousel/ProductCarousel";

function Home() {
  const { productList, isLoading } = useContext(DataContext);

  return (
    <>
      <section className="w-full">
        <div className="relative">
          <img
            className="w-full h-[450px] lg:h-[600px] lg:pb-1 clear-both"
            // src="https://picsum.photos/id/234/1200/600"
            src={coverPhoto}
            alt=""
          />
          <div className="search-bar pb-10">
            <h1 className="lead-h1 text-center text-3xl lg:text-8xl  text-yellow-50 z-10 relative lg:font-bold mb-2 lg:mb-5">
              Buy. Rent. Sell.
            </h1>
            <div className="relative">
              <h2 className="hidden lg:block text-end text-2xl p-1 font-extralight text-yellow-100 bg-neutral-950">
                Royar Gayrimenkul
              </h2>
              <div className="input-container relative">
                <input
                  className="p-3 lg:w-[46.9rem] text-xl"
                  id="search-bar"
                  name="search-bar"
                  type="text"
                  placeholder="Enter an address, neighborhood, city, or ZIP code"
                />
                <div className=" flex items-center justify-center search-icon-container bg-white h-12 w-7">
                  <FaSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row text-center justify-center items-center gap-10 bg-zinc-400 box-border relative">
          <h3>Homes for you</h3>
          <ProductCarousel />
        </div>
        <div className="flex flex-col lg:flex-row text-center justify-center items-center mt-20 lg:mt-0 h-[1200px] lg:h-[750px] gap-10 bg-slate-100 box-border relative">
          {homeCardContents.map((item) => (
            <HomePageCard
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              btnText={item.btnText}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row text-center justify-center items-center mt-20 lg:mt-0 h-[1200px] lg:h-[750px] gap-10 bg-zinc-400 box-border relative">
          <h3>Homes for you</h3>
        </div>
      </section>
    </>
  );
}

export default Home;

import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../store/DataContext";
import ProductCard from "../UI/ProductCard";

const ProductCarousel = () => {
  const {productList, isLoading} = useContext(DataContext);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productList.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden w-[250px]">
        {productList.map(item => <ProductCard item={item} />)}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1"
        onClick={prevSlide}
      >
        Geri
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1"
        onClick={nextSlide}
      >
        İleri
      </button>
    </div>
  );
};

export default ProductCarousel;
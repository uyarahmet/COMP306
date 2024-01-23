import React from "react";

import { IoMdNavigate } from "react-icons/io";

const ProductCard = ({ item }) => {
  // currencies
  const usDollars = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const turkishLiras = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  });

  const russianRubles = new Intl.NumberFormat("ru-Ru", {
    style: "currency",
    currency: "RUB",
  });

  return (
    <div className="flex flex-col gap-2 items-center border p-4 rounded overflow-hidden h-[400px] max-w-[350px] box-border card-scale bg-white cursor-pointer shadow-xl">
      <img
        src={item.image}
        alt={item.title}
        className="w-[300px] max-w-[300px] min-w-[300px] h-[150px] max-h-[150px] min-h-[150px] object-contain"
      />
      <div className="flex flex-col gap-4 justify-center p-5 min-h-[220px] max-h-[220px] h-[220px]">
        <h3 className="text-lg font-semibold line-clamp-2">{item.title}</h3>
        <p className="text-gray-600 line-clamp-3">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold">
            {usDollars.format(item.price)}
          </span>
          <div className="rounded-full text-white text-center bg-slate-800 p-2">
            <IoMdNavigate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

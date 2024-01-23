import React from "react";

function Card({ children, className, width, height, ...props }) {

  return (
    <div
      className={`${className ? className : ""} card-scale card-shadow flex flex-col bg-zinc-50 cursor-pointer`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;

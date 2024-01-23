import React from "react";

function ProductPageTitle({ children }) {
  return (
    <div className="p-5 bg-white text-center my-5 lg:hidden">
      <h2 className="text-xl">{children}</h2>
    </div>
  );
}

export default ProductPageTitle;

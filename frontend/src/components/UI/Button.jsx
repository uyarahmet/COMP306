import React from "react";

function Button({ children, className, ...props }) {

  return (
    <button
      className={`${
        className ? className : ""
      } p-3 font-semibold uppercase border-2 border-green-900 rounded-sm`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
